"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

type ModeToggleProps = React.ComponentProps<typeof Button>;

export const ModeToggle = React.forwardRef<HTMLButtonElement, ModeToggleProps>(
  function ModeToggle({ onClick, ...props }, ref) {
    const { resolvedTheme, setTheme } = useTheme();
    const current = resolvedTheme || "light";

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      setTheme(current === "dark" ? "light" : "dark");
      if (onClick) onClick(e);
    };

    return (
      <Button
        ref={ref}
        variant="ghost"
        size="icon"
        className="relative cursor-pointer"
        onClick={handleClick}
        {...props}
      >
        {current === "light" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] transition-all" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] transition-all" />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    );
  }
);
ModeToggle.displayName = "ModeToggle";
