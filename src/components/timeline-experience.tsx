"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

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
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleCardClick = () => {
    setIsExpanded(!isExpanded);
  };

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
      </div>

      <motion.div
        initial={{ x: 20, opacity: 0 }}
        animate={isInView ? { x: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex-1"
      >
        <Card className="cursor-pointer group" onClick={handleCardClick}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <h3 className="text-md font-semibold">
                {isWorkItem ? item.company : item.school}
              </h3>
              <ChevronRightIcon
                className={cn(
                  "size-4 transition-transform duration-200 opacity-60 group-hover:opacity-100",
                  isExpanded ? "rotate-90" : "rotate-0"
                )}
              />
            </div>
            <span className="text-sm text-muted-foreground">
              {item.start} - {item.end}
            </span>
          </div>

          <h4 className="text-xs">{isWorkItem ? item.title : item.degree}</h4>

          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: isExpanded ? 1 : 0,
              height: isExpanded ? "auto" : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
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
            <div className="pt-2 text-sm">{item.description}</div>
          </motion.div>
        </Card>
      </motion.div>
    </div>
  );
};

const TimelineSection: React.FC<TimelineSectionProps> = ({ items }) => {
  return (
    <div className="space-y-3">
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
