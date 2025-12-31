'use client';

import { profile } from '@/lib/data';
import Socials from '@/components/shared/socials';
import { FadeIn, FadeInStagger } from '@/components/shared/fade-in';
import dynamic from 'next/dynamic';
import { FC, useRef, useEffect, useState, forwardRef, Ref } from 'react';

// --- Physics Constants ---
const REPULSION_RADIUS = 150;
const MAX_DISPLACEMENT = 22;
const DAMPING_FACTOR = 0.85;
const SPRING_STIFFNESS = 0.05;

const TypeAnimation = dynamic(
  () => import('react-type-animation').then((mod) => mod.TypeAnimation),
  { ssr: false }
);

const PsiSymbol = forwardRef<SVGSVGElement, { className?: string }>((props, ref) => (
  <svg
    ref={ref}
    {...props}
    viewBox="0 -750 1318 1000"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="currentColor" fill="currentColor" strokeWidth="0" transform="scale(1,-1)">
      <path d="M139-250C152-250 159-242 159-226L159 726C159 742 152 750 139 750C126 750 119 742 119 726L119-226C119-242 126-250 139-250Z"/>
      <g transform="translate(278,0)">
        <path d="M534 393C534 384 539 374 550 363C573 341 585 314 585 282C585 253 576 222 557 187C522 120 476 72 421 43C388 26 355 18 322 17L484 663C486 672 487 677 487 679C487 689 482 694 471 694C466 694 463 693 460 691C456 683 454 676 453 671L290 19C219 28 184 64 184 126C184 153 202 214 237 309C244 329 248 346 248 359C248 409 213 444 163 444C118 444 84 419 59 369C39 329 29 302 29 288C29 279 34 274 45 274C58 274 60 280 64 294C87 374 119 414 160 414C174 414 181 405 181 387C181 371 174 343 159 303C127 218 111 162 111 134C111 47 168-1 282-10C274-45 267-74 261-96C246-153 238-185 238-192C241-200 242-205 255-205L265-201C271-185 276-170 279-157L315-13C397-12 469 24 531 95C564 132 588 172 604 215C625 270 635 322 635 371C635 420 619 444 588 444C562 444 534 419 534 393Z"/>
      </g>
      <g transform="translate(929,0)">
        <path d="M278 242C279 244 279 247 279 250C279 253 279 256 278 258L98 735C94 745 87 750 76 750C61 750 53 742 53 726C53 723 53 720 54 718L231 250L54-217C53-219 53-222 53-226C53-242 61-250 76-250C87-250 94-245 98-235Z"/>
      </g>
    </g>
  </svg>
));
PsiSymbol.displayName = 'PsiSymbol';

const LossSymbol = forwardRef<SVGSVGElement, { className?: string }>((props, ref) => (
  <svg
    ref={ref}
    {...props}
    viewBox="0 -748 2017 996"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="currentColor" fill="currentColor" strokeWidth="0" transform="scale(1,-1)">
      <path d="M234 176C280 199 331 253 360 302C378 332 399 376 424 435C451 498 471 542 486 569C502 599 548 643 592 643C623 643 643 621 635 588C630 569 630 557 633 553C640 544 650 540 664 540L676 542C701 546 719 566 728 603C742 659 698 685 643 685C547 685 465 637 397 540C377 512 355 467 331 404C290 297 253 230 218 204C200 190 181 177 161 164C132 147 113 132 104 121C72 82 50 47 39 14L61-9C79 24 99 53 122 80C141 103 165 114 194 114C223 114 265 93 318 51C334 35 358 20 391 6C412-3 441-7 480-7C511-7 549 11 592 48C632 81 660 133 676 203C681 229 684 250 684 266L652 259C647 224 641 198 636 183C620 134 573 79 516 79C462 79 385 116 341 148C317 166 281 175 234 176Z"/>
      <g transform="translate(770,0)">
        <path d="M318-248C327-248 332-243 332-234C332-231 330-227 327-223C275-183 233-117 202-26C175 53 161 131 161 208L161 292C161 369 175 447 202 526C233 617 275 683 327 723C330 726 332 730 332 734C332 743 327 748 318 748C317 748 314 747 311 745C251 699 201 631 160 540C121 453 101 371 101 292L101 208C101 129 121 47 160-40C201-131 251-199 311-245C314-247 317-248 318-248Z"/>
        <g transform="translate(389,0)">
          <path d="M164-11C209-11 256 16 302 70C382 163 455 335 455 498C455 539 448 582 434 625C416 678 382 705 333 705C288 705 243 678 196 624C116 532 42 360 42 196C42 94 75-11 164-11M332 675C365 675 382 637 382 560C382 517 372 452 352 367L155 367C180 460 204 529 229 574C266 641 301 675 332 675M145 327L341 327C322 246 299 181 274 132C235 57 199 19 164 19C131 19 115 58 115 135C115 185 125 249 145 327Z"/>
        </g>
        <g transform="translate(858,0)">
          <path d="M78-245C138-199 188-131 229-40C268 47 288 129 288 208L288 292C288 371 268 453 229 540C188 631 138 699 78 745C75 747 72 748 71 748C62 748 57 743 57 734C57 730 59 726 62 723C114 683 156 617 187 526C214 447 228 369 228 292L228 208C228 131 214 53 187-26C156-117 114-183 62-223C59-227 57-231 57-234C57-243 62-248 71-248C72-248 75-247 78-245Z"/>
        </g>
      </g>
    </g>
  </svg>
));
LossSymbol.displayName = 'LossSymbol';

const HbarSymbol = forwardRef<SVGSVGElement, { className?: string }>((props, ref) => (
  <svg
    ref={ref}
    {...props}
    viewBox="0 -694 535 705"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="currentColor" fill="currentColor" strokeWidth="0" transform="scale(1,-1)">
      <path d="M225 632C225 629 224 623 223 616L210 564L162 564C150 564 143 558 140 547C137 534 142 527 155 527L201 527L77 32C76 29 76 24 75 19C75-1 85-11 106-11C128-11 142-1 147 20L189 191C202 242 216 295 232 323C269 384 311 415 359 415C386 415 400 395 400 354C400 316 381 244 344 137C333 107 328 85 328 72C328 25 359-11 406-11C472-11 515 66 531 126C534 137 535 143 535 145C535 154 529 159 516 159C507 159 500 152 496 139C473 59 443 19 408 19C397 19 391 27 391 43C391 60 397 84 408 116C448 227 468 301 468 338C468 409 433 445 362 445C341 445 322 441 303 433C282 424 260 410 238 389L273 527L388 527C400 527 407 533 410 545C414 558 409 564 395 564L282 564L307 664C308 670 309 675 310 678C310 689 304 694 292 694C285 694 280 693 276 692L179 684C162 683 153 674 153 659C153 650 162 645 180 645C199 645 225 646 225 632Z"/>
    </g>
  </svg>
));
HbarSymbol.displayName = 'HbarSymbol';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const symbol1Ref = useRef<SVGSVGElement>(null);
  const symbol2Ref = useRef<SVGSVGElement>(null);
  const symbol3Ref = useRef<SVGSVGElement>(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const container = containerRef.current;
    const symbols = [
      { ref: symbol1Ref, id: 'symbol1' },
      { ref: symbol2Ref, id: 'symbol2' },
      { ref: symbol3Ref, id: 'symbol3' },
    ];

    if (!container || symbols.some(s => !s.ref.current)) {
      return;
    }

    const pointer = { x: -9999, y: -9999 };
    let isPointerIn = false;

    const symbolData = new Map(symbols.map(s => {
      const rect = s.ref.current!.getBoundingClientRect();
      const centerX = rect.left + window.scrollX + rect.width / 2;
      const centerY = rect.top + window.scrollY + rect.height / 2;
      return [s.id, {
        ref: s.ref.current!,
        anchorX: centerX,
        anchorY: centerY,
        x: centerX,
        y: centerY,
        vx: 0,
        vy: 0,
      }];
    }));

    const onPointerMove = (e: PointerEvent) => {
      const rect = container.getBoundingClientRect();
      isPointerIn = 
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom;
      
      pointer.x = e.pageX;
      pointer.y = e.pageY;
    };

    let animationFrameId: number;
    const animate = () => {
      symbolData.forEach(data => {
        let { x, y, vx, vy, anchorX, anchorY, ref } = data;

        let forceX = 0;
        let forceY = 0;

        if (isPointerIn) {
          const dx = x - pointer.x;
          const dy = y - pointer.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < REPULSION_RADIUS) {
            const angle = Math.atan2(dy, dx);
            const force = (REPULSION_RADIUS - dist) / REPULSION_RADIUS;
            forceX += Math.cos(angle) * force;
            forceY += Math.sin(angle) * force;
          }
        }

        const springForceX = (anchorX - x) * SPRING_STIFFNESS;
        const springForceY = (anchorY - y) * SPRING_STIFFNESS;
        forceX += springForceX;
        forceY += springForceY;

        vx = (vx + forceX) * DAMPING_FACTOR;
        vy = (vy + forceY) * DAMPING_FACTOR;

        x += vx;
        y += vy;

        const offsetX = x - anchorX;
        const offsetY = y - anchorY;
        const offsetDist = Math.sqrt(offsetX * offsetX + offsetY * offsetY);

        if (offsetDist > MAX_DISPLACEMENT) {
          const clampFactor = MAX_DISPLACEMENT / offsetDist;
          x = anchorX + offsetX * clampFactor;
          y = anchorY + offsetY * clampFactor;
        }

        data.x = x;
        data.y = y;
        data.vx = vx;
        data.vy = vy;

        ref.style.setProperty('--repulsion-x', `${x - anchorX}px`);
        ref.style.setProperty('--repulsion-y', `${y - anchorY}px`);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('pointermove', onPointerMove);
    animate();

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isMounted]);

  return (
    <section
      id="home"
      className="relative w-full h-auto min-h-[calc(100vh-4rem)] flex flex-col md:flex-row items-center justify-center bg-background"
    >
      <div className="container relative z-10 text-center md:text-left">
        <FadeInStagger>
          <FadeIn>
          <TypeAnimation
            sequence={[profile.name, 900]}
            wrapper="h1"
            speed={10}
            cursor={false}
            className="
              hero-typed
              font-headline text-4xl font-bold tracking-tighter text-primary
              sm:text-5xl md:text-6xl lg:text-7xl
            "
          />
          </FadeIn>
          <FadeIn>
            <p className="max-w-2xl mx-auto md:mx-0 mt-4 text-lg text-muted-foreground md:text-xl">
              {profile.position}
            </p>
          </FadeIn>
          <FadeIn>
            <div className="mt-6 flex justify-center md:justify-start">
              <Socials />
            </div>
          </FadeIn>
        </FadeInStagger>
      </div>
      {isMounted && (
        <div 
          ref={containerRef} 
          className="
            relative w-full h-64
            md:absolute md:inset-y-0 md:right-0 md:w-1/2 md:h-full 
            pointer-events-none
          "
        >
          <PsiSymbol ref={symbol1Ref} className="float-symbol symbol-1" />
          <LossSymbol ref={symbol2Ref} className="float-symbol symbol-2" />
          <HbarSymbol ref={symbol3Ref} className="float-symbol symbol-3" />
        </div>
      )}
    </section>
  );
}
