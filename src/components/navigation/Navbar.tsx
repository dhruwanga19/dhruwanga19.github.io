import React from "react";
import { ModeToggle } from "../ui/ModeToggle";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { Dock, DockIcon } from "../magicui/dock";
import { DATA } from "@/data/resume";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { cn } from "@/lib/utils";
import { Separator } from "../ui/separator";
import { File } from "lucide-react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-30 mx-auto mb-1 flex origin-top h-14">
      <Dock
        direction="middle"
        className="z-50 pointer-events-auto relative mx-auto flex h-full items-center px-1 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 border border-border navbar-shadow"
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12"
                  )}
                >
                  <item.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator orientation="vertical" className="h-full" />
        {Object.entries(DATA.contact.social)
          .filter(([_, social]) => social.navbar)
          .map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-12"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        <Separator orientation="vertical" className="h-full" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link href={DATA.contact.Resume.url}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-12 cursor-pointer"
                >
                  <DATA.contact.Resume.icon className="size-4" />
                </Button>
              </Link>
            </TooltipTrigger>
            <TooltipContent>{DATA.contact.Resume.name}</TooltipContent>
          </Tooltip>
        </DockIcon>
        <Separator orientation="vertical" className="h-full" />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger asChild>
              <ModeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle Theme</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
      </Dock>
    </div>
  );
}
