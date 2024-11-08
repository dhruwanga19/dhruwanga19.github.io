"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRightIcon } from "lucide-react";

interface BaseTimelineItem {
  logoUrl: string;
  href: string;
  start: string;
  end: string;
  description: React.ReactNode;
}

interface WorkItem extends BaseTimelineItem {
  company: string;
  title: string;
  badges?: readonly string[];
}

interface EducationItem extends BaseTimelineItem {
  school: string;
  degree: string;
}

interface TimelineItemProps {
  item: WorkItem | EducationItem;
  isLast: boolean;
}

interface TimelineSectionProps {
  items: readonly (WorkItem | EducationItem)[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({ item, isLast }) => {
  const [isExpanded, setIsExpanded] = React.useState<boolean>(false);
  const isWorkItem = "company" in item;

  return (
    <div className="relative flex gap-4">
      <div className="flex flex-col items-center">
        <Link href={item.href} target="_blank" rel="noopener noreferrer">
          <Avatar className="border size-12 bg-muted dark:bg-foreground z-10 cursor-pointer hover:scale-105 transition-transform">
            <AvatarImage
              src={item.logoUrl}
              alt={isWorkItem ? item.company : item.school}
              className="object-contain"
            />
            <AvatarFallback>
              {isWorkItem ? item.company[0] : item.school[0]}
            </AvatarFallback>
          </Avatar>
        </Link>
        {!isLast && (
          <div className="w-0.5 h-full bg-gradient-to-b from-border to-transparent mt-3" />
        )}
      </div>

      <Card
        className="flex-1 mb-10 cursor-pointer hover:shadow-md transition-shadow"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">
                {isWorkItem ? item.company : item.school}
              </h3>
              <ChevronRightIcon
                className={`h-4 w-4 transition-transform duration-200 text-muted-foreground
                  ${isExpanded ? "rotate-90" : ""}`}
              />
            </div>
            <span className="text-sm text-muted-foreground">
              {item.start} - {item.end}
            </span>
          </div>

          <h4 className="text-base font-medium mt-1">
            {isWorkItem ? item.title : item.degree}
          </h4>

          {isWorkItem && item.badges && (
            <div className="flex flex-wrap gap-2 mt-2">
              {item.badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </div>
          )}

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-2">{item.description}</div>
          </motion.div>
        </div>
      </Card>
    </div>
  );
};

const TimelineSection: React.FC<TimelineSectionProps> = ({ items }) => {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <TimelineItem
          key={"company" in item ? item.company : item.school}
          item={item}
          isLast={index === items.length - 1}
        />
      ))}
    </div>
  );
};

export { TimelineSection };
