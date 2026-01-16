"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { Separator } from "@radix-ui/react-separator";

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
    <div className="max-w-3xl w-full flex flex-col items-center gap-8 p-8">
      <div className="relative">
        <Image
          src={image}
          alt={name}
          width={160}
          height={160}
          className="w-40 h-40 rounded-full object-cover"
        />
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex w-full justify-center">
          <Badge
            variant="outline"
            className={cn(
              "text-xs",
              availability === "available"
                ? "bg-indigo-500 text-indigo-900"
                : availability === "open"
                ? "bg-green-400 text-green-900"
                : "bg-red-400 text-red-900"
            )}
          >
            {availability === "available"
              ? "Available"
              : availability === "open"
              ? "Open to Opportunities"
              : "Unavailable"}
          </Badge>
        </div>
      </div>

      <div className="text-center space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold capitalize">
          Hi, I&apos;m {name}
        </h1>
        <p className="text-xl text-muted-foreground">
          {location} | {role}
        </p>
      </div>

      <p className="text-center text-muted-foreground max-w-2xl leading-relaxed">
        I am a Full-Stack Software Engineer building scalable, fault-tolerant
        applications. With experience in both frontend and backend systems, I am
        focusing on Cloud Engineering and DevOps practices to enhance deployment
        and infrastructure management. Passionate to learn continuously.
      </p>

      <Separator
        orientation="horizontal"
        className="w-50 border border-secondary/30 dark:border-secondary/70"
      />

      <div className="flex gap-4 items-center">
        {Object.entries(DATA.contact.social).map(([key, social]) => {
          const Icon = social.icon;
          return (
            <Link
              key={key}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:scale-110 hover:-translate-y-1"
              aria-label={social.name}
            >
              <Icon className="w-5 h-5" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
