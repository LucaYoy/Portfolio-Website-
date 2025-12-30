"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type PlacedSymbol = {
  char: string;
  x: number; // 0..100 (SVG units)
  y: number; // 0..100
  size: number; // px in SVG user units
  opacity: number; // 0..1
};

const SYMBOL_TOKENS = [
  "⟨ψ|", "|ψ⟩", "∑", "⊗", "e^{-iHt}", "Tr", "σx", "σy", "σz",
  "∇", "argmin", "ℒ(θ)", "f(x)", "∂", "∫",
];

// Simple seeded RNG (stable output)
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6D2B79F5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function clamp01(x: number) {
  return Math.max(0, Math.min(1, x));
}

function luminance(r: number, g: number, b: number) {
  // sRGB-ish luminance
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

interface SymbolicPortraitWowProps {
  imageUrl: string;
  alt: string;
  className?: string;

  /** How many symbols to place. 900–1800 is a good range for 300px. */
  symbolCount?: number;

  /** Internal sampling resolution. 120–220 recommended. */
  sampleSize?: number;

  /** Seed for stable randomness. */
  seed?: number;

  /** Reveal real photo on hover */
  hoverReveal?: boolean;
}

export function SymbolicPortraitWow({
  imageUrl,
  alt,
  className,
  symbolCount = 1400,
  sampleSize = 180,
  seed = 1337,
  hoverReveal = true,
}: SymbolicPortraitWowProps) {
  const reactId = React.useId();
  const maskId = `wow-mask-${reactId}`;
  const clipId = `wow-clip-${reactId}`;

  const [symbols, setSymbols] = React.useState<PlacedSymbol[] | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    let cancelled = false;

    async function build() {
      setSymbols(null);
      setError(null);

      try {
        const img = new window.Image();
        // Needed for remote images that support CORS
        // (harmless for local images)
        img.crossOrigin = "anonymous";
        img.decoding = "async";

        const loaded = new Promise<void>((resolve, reject) => {
          img.onload = () => resolve();
          img.onerror = () => reject(new Error("Failed to load image for sampling."));
        });

        img.src = imageUrl;
        await loaded;

        // Draw into a small canvas for sampling
        const canvas = document.createElement("canvas");
        canvas.width = sampleSize;
        canvas.height = sampleSize;
        const ctx = canvas.getContext("2d", { willReadFrequently: true });
        if (!ctx) throw new Error("Canvas context not available.");

        // Cover-fit draw (like object-cover)
        const iw = img.naturalWidth || img.width;
        const ih = img.naturalHeight || img.height;
        const scale = Math.max(sampleSize / iw, sampleSize / ih);
        const dw = iw * scale;
        const dh = ih * scale;
        const dx = (sampleSize - dw) / 2;
        const dy = (sampleSize - dh) / 2;

        ctx.clearRect(0, 0, sampleSize, sampleSize);
        ctx.drawImage(img, dx, dy, dw, dh);

        const data = ctx.getImageData(0, 0, sampleSize, sampleSize).data;

        // Build a darkness map (0 bright -> 1 dark) with gentle contrast shaping.
        const darkness = new Float32Array(sampleSize * sampleSize);
        let maxD = 0;

        for (let y = 0; y < sampleSize; y++) {
          for (let x = 0; x < sampleSize; x++) {
            const idx = (y * sampleSize + x) * 4;
            const r = data[idx];
            const g = data[idx + 1];
            const b = data[idx + 2];
            const a = data[idx + 3] / 255;

            // If image has transparency (rare), treat transparent as bright background.
            const lum = luminance(r, g, b) / 255;
            let d = (1 - lum) * a; // dark = 1-lum

            // Contrast shaping: emphasize mid-dark regions (faces/hair)
            // Adjust exponent to tune portrait strength.
            d = Math.pow(clamp01(d), 1.35);

            darkness[y * sampleSize + x] = d;
            if (d > maxD) maxD = d;
          }
        }

        // Rejection sampling: pick points with probability proportional to darkness.
        const rand = mulberry32(seed);
        const placed: PlacedSymbol[] = [];

        // safety to avoid infinite loops
        const maxAttempts = symbolCount * 40;

        // Parameters you can tune:
        const minSize = 2.4;
        const maxSize = 6.2;
        const minOpacity = 0.04;
        const maxOpacity = 0.16;

        let attempts = 0;
        while (placed.length < symbolCount && attempts < maxAttempts) {
          attempts++;

          const x = Math.floor(rand() * sampleSize);
          const y = Math.floor(rand() * sampleSize);
          const d = darkness[y * sampleSize + x];

          // Accept if random threshold under darkness (scaled)
          // maxD keeps acceptance stable across different photos.
          const accept = rand() < (maxD > 0 ? d / maxD : 0);
          if (!accept) continue;

          // Map darkness -> symbol styling
          const t = clamp01(d / (maxD || 1)); // 0..1
          const size = minSize + t * (maxSize - minSize);
          const opacity = minOpacity + t * (maxOpacity - minOpacity);

          const char = SYMBOL_TOKENS[Math.floor(rand() * SYMBOL_TOKENS.length)];

          // Convert to SVG 0..100 coordinates (add small jitter)
          const sx = (x / (sampleSize - 1)) * 100 + (rand() - 0.5) * 0.6;
          const sy = (y / (sampleSize - 1)) * 100 + (rand() - 0.5) * 0.6;

          placed.push({
            char,
            x: Math.max(0, Math.min(100, sx)),
            y: Math.max(0, Math.min(100, sy)),
            size,
            opacity,
          });
        }

        if (cancelled) return;

        if (placed.length < Math.floor(symbolCount * 0.35)) {
          // This usually indicates CORS prevented pixel reads or an extremely bright image
          setError(
            "Could not sample enough pixels to form the portrait. If the image is remote, ensure it allows CORS, or host it locally."
          );
        }

        setSymbols(placed);
      } catch (e: any) {
        if (cancelled) return;
        setError(e?.message ?? "Failed to generate symbolic portrait.");
      }
    }

    build();
    return () => {
      cancelled = true;
    };
  }, [imageUrl, symbolCount, sampleSize, seed]);

  return (
    <div className={cn("group relative h-[300px] w-[300px]", className)}>
      {/* Real photo (revealed on hover) */}
      <Image
        src={imageUrl}
        alt={alt}
        width={300}
        height={300}
        priority
        className={cn(
          "h-full w-full rounded-full object-cover border border-primary/20 shadow-lg transition-opacity duration-700",
          hoverReveal ? "opacity-0 group-hover:opacity-100" : "opacity-100"
        )}
      />

      {/* Symbol portrait overlay */}
      <div
        className={cn(
          "absolute inset-0 rounded-full border border-primary/20 shadow-lg transition-opacity duration-700",
          hoverReveal ? "opacity-100 group-hover:opacity-0" : "opacity-100"
        )}
      >
        <svg viewBox="0 0 100 100" className="h-full w-full rounded-full">
          <defs>
            <clipPath id={clipId}>
              <circle cx="50" cy="50" r="49" />
            </clipPath>

            {/* Optional: subtle vignette mask to keep edges clean */}
            <radialGradient id={maskId} cx="50%" cy="50%" r="55%">
              <stop offset="70%" stopColor="white" stopOpacity="1" />
              <stop offset="100%" stopColor="white" stopOpacity="0.75" />
            </radialGradient>
          </defs>

          <g clipPath={`url(#${clipId})`}>
            <rect width="100" height="100" fill="hsl(var(--background))" />

            {/* Loading / error fallback */}
            {!symbols && !error && (
              <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="hsl(var(--primary))"
                opacity="0.25"
                style={{ fontSize: "4px", fontFamily: "ui-monospace, monospace" }}
              >
                generating…
              </text>
            )}

            {error && (
              <text
                x="50"
                y="50"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="hsl(var(--primary))"
                opacity="0.25"
                style={{ fontSize: "3.4px", fontFamily: "ui-monospace, monospace" }}
              >
                symbolic mask error
              </text>
            )}

            {/* Render symbols */}
            {symbols && (
              <g>
                {/* vignette overlay for cohesion */}
                <rect width="100" height="100" fill={`url(#${maskId})`} opacity="0.25" />

                {symbols.map((s, i) => (
                  <text
                    key={i}
                    x={s.x}
                    y={s.y}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="hsl(var(--primary))"
                    opacity={s.opacity}
                    style={{
                      fontSize: `${s.size}px`,
                      fontFamily:
                        "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
                      letterSpacing: "0.2px",
                      userSelect: "none",
                    }}
                  >
                    {s.char}
                  </text>
                ))}
              </g>
            )}

            {/* Outer ring for premium finish */}
            <circle
              cx="50"
              cy="50"
              r="49"
              fill="none"
              stroke="hsl(var(--primary))"
              opacity="0.10"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
