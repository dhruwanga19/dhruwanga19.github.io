import { FileText, Github, Globe, Linkedin, Mail } from "lucide-react";
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
  image: string;
};

export default function AboutMe({
  name,
  role,
  availability,
  location,
  image,
}: Props) {
  return (
    <div className="max-w-2xl w-full h-full flex flex-col justify-center items-center gap-2 rounded-xl p-2">
      <div className="flex w-full justify-between items-center gap-2">
        <div className="flex-col flex flex-1 justify-center items-start ">
          <h2 className="flex text-4xl font-bold">hi, i'm {name} 👋</h2>
          <p className="flex text-xl font-light">
            Aspiring {role} based in {location} 🇨🇦. <br />
            Passionate about building things and challenging myself.
            <br />
            Love to travel, willing to relocate ✈️.
          </p>
        </div>
        <div className="flex-col justify-items-center">
          <div className="inline-flex justify-center text-md my-2">
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
          <img
            src={image}
            alt={name}
            className="w-24 h-24 rounded-full object-fill"
          />
        </div>
      </div>
    </div>
  );
}
