import Link from "next/link";
import React from "react";
import { Badge } from "./ui/badge";
import { ChevronRight } from "lucide-react";

type Props = {
  image: string;
  title: string;
  description: string;
  tags: string[];
  href: string;
};

export default function ItemCard({
  image,
  title,
  description,
  tags,
  href,
}: Props) {
  return (
    <Link
      className="flex justify-center items-center w-full h-full flex-1 gap-4"
      href={href}
    >
      <div className="flex flex-col justify-center items-center h-full">
        <img
          src={image}
          alt={title}
          className="w-20 h-15 object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-center items-start w-full h-full gap-2">
        <span className="text-sm">
          <span className="text-base font-semibold">{title}</span>
          {" - "}
          {description}{" "}
        </span>
        {/* <div className="flex justify-start items-center"> */}
        <span className="flex justify-start items-start gap-1">
          {tags.map((tag, index) => (
            <Badge
              variant="outline"
              key={tag + index}
              // className="text-xs font-semibold text-primary"
            >
              {tag}
            </Badge>
          ))}
        </span>
      </div>
      <div className="p-2 pr-3">
        <ChevronRight />
      </div>
      {/* </div> */}
    </Link>
  );
}
