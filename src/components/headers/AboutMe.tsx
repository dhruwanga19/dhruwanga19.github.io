"use client";
import React from "react";
import { Badge } from "../ui/badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

type Props = {
  name: string;
  role: string;
  availability: "available" | "open" | "unavailable";
  location: string;
  image: string;
  interests: readonly string[];
};

export default function AboutMe({
  name,
  role,
  availability,
  location,
  image,
  interests,
}: Props) {
  const sequence = interests.reduce((acc: (string | number)[], interest) => {
    return [...acc, interest, 1000];
  }, []);
  return (
    <div className="max-w-2xl w-full h-full flex flex-col justify-center items-center gap-2 rounded-xl p-2">
      <div className="flex w-full justify-between items-center gap-2">
        <div className="flex-col flex flex-1 justify-center items-start ">
          <h2 className="flex text-4xl font-bold">hi, i&apos;m {name} 👋</h2>
          <div className="flex flex-col text-xl font-light">
            <p>
              <span className="font-normal">{role}</span> based in {location} 🇨🇦
            </p>
            <p>Constanly learning, building and challenging myself 🚀</p>
            <p>Recent Graduate - Class of 2024 🎓</p>
            <p className="flex items-center gap-1">
              Interested in{" "}
              <span className="text-blue-500 font-medium inline-block">
                <TypeAnimation
                  sequence={sequence}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </p>
            <p>Love to travel, willing to relocate ✈️</p>
          </div>
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
          <Image
            src={image}
            alt={name}
            width={100}
            height={100}
            className="w-24 h-24 rounded-full object-fill"
          />
        </div>
      </div>
    </div>
  );
}
