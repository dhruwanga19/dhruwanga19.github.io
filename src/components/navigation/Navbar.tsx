import {
  House,
  Presentation,
  Briefcase,
  GraduationCap,
  Contact,
  DiamondPlus,
} from "lucide-react";
import React from "react";
import { ModeToggle } from "../ui/ModeToggle";
import { Button } from "../ui/button";
import Link from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <div className="w-full h-full max-w-lg bg-primary-background flex justify-between items-center px-2 py-2 rounded-xl border m-4">
      <div className="flex justify-center items-center gap-4">
        <Link href="#home">
          <Button variant="ghost" className="p-2">
            <House />
          </Button>
        </Link>
        <Link href="#home">
          <Button variant="ghost" className="p-2">
            <Presentation />
          </Button>
        </Link>
        <Link href="#home">
          <Button variant="ghost" className="p-2">
            <Briefcase />
          </Button>
        </Link>

        <Link href="#home">
          <Button variant="ghost" className="p-2">
            <GraduationCap />
          </Button>
        </Link>

        <Link href="#home">
          <Button variant="ghost" className="p-2">
            <Contact />
          </Button>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-2">
        <Link href="#home">
          <Button className="gap-2 p-2" variant="ghost">
            <DiamondPlus />
            Hire Me
          </Button>
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}
