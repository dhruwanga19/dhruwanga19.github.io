import { FileText, Globe, Mail } from "lucide-react";
import React from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Button } from "../ui/button";

type Props = {
  name: string;
  role: string;
  availability: "available" | "open" | "unavailable";
  location: string;
  email: string;
  image: string;
  resume: string;
};

export default function AboutMe({
  name,
  role,
  availability,
  location,
  email,
  image,
  resume,
}: Props) {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-2 bg-primary-foreground mb-4">
      <div className="w-full flex justify-between items-center ">
        <div className="inline-flex justify-center items-center gap-1 text-sm">
          <Globe size={20} />
          {role}
        </div>
        <div className="inline-flex gap-1 justify-center items-center text-sm">
          <Badge
            variant="outline"
            className={cn(
              availability === "available"
                ? "bg-green-500 text-green-200"
                : availability === "open"
                ? "bg-yellow-500 text-yellow-200"
                : "bg-red-500 text-red-200"
            )}
          >
            {availability === "available"
              ? "Available"
              : availability === "open"
              ? "Open to offers"
              : "Unavailable"}
          </Badge>
        </div>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-center flex-col items-start">
          <h1 className="text-3xl font-semibold">Hello, I'm {name}</h1>
          <p>
            A {role} based in {location}.
          </p>
        </div>
        <img
          src={image}
          alt={name}
          className="w-24 h-24 rounded-lg object-cover"
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        {/* Email Button */}
        <Link href={`mailto:${email}`}>
          <Button variant="ghost" className="gap-2">
            <Mail size={20} />
            Contact Me
          </Button>
          {/* <a className="text-primary underline">{email}</a> */}
        </Link>
        {/* Resume Button */}
        <Link href={resume}>
          <Button variant="ghost" className="gap-2">
            <FileText size={20} />
            Resume
          </Button>
        </Link>
      </div>
    </div>
  );
}
