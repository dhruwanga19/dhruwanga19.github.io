import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent",
        secondary: "border-transparent",
        destructive: "border-transparent",
        outline: "",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "secondary":
        return {
          backgroundColor: "hsl(var(--accent))",
          color: "hsl(var(--accent-foreground))",
        };
      case "destructive":
        return {
          backgroundColor: "hsl(var(--destructive))",
          color: "hsl(var(--destructive-foreground))",
        };
      case "outline":
        return {
          color: "hsl(var(--foreground))",
        };
      default:
        return {
          backgroundColor: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
        };
    }
  };

  return (
    <div
      className={cn(badgeVariants({ variant }), className)}
      style={getVariantStyles()}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
