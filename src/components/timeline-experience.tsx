"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "framer-motion";

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
  const ref = React.useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const isWorkItem = "company" in item;

  return (
    <div className="relative flex gap-4" ref={ref}>
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
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
        </motion.div>
        {!isLast && (
          <motion.div
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-0.5 bg-gradient-to-b from-border to-transparent mt-3"
          />
        )}
      </div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex-1 mb-10"
      >
        <Card className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-semibold">
                {isWorkItem ? item.company : item.school}
              </h3>
            </div>
            <span className="text-sm text-muted-foreground">
              {item.start} - {item.end}
            </span>
          </div>

          <h4 className="text-base font-medium mt-1">
            {isWorkItem ? item.title : item.degree}
          </h4>

          {isWorkItem && item.badges && (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-2 mt-2"
            >
              {item.badges.map((badge, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {badge}
                </Badge>
              ))}
            </motion.div>
          )}

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="pt-2"
          >
            {item.description}
          </motion.div>
        </Card>
      </motion.div>
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
export type { WorkItem, EducationItem, TimelineSectionProps };
