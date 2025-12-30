import * as React from "react";
import { cn } from "@/lib/utils";

export function PsiIcon({
  size = 18,
  className,
  ...props
}: React.SVGProps<SVGSVGElement> & { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("shrink-0", className)}
      {...props}
    >
      {/* arms + stem */}
      <path d="M8 4v10c0 3 2 5 4 5s4-2 4-5V4" />
      {/* stem down */}
      <path d="M12 9v12" />
    </svg>
  );
}
