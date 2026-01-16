"use client";
import React from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "framer-motion";
import { ExternalLink } from "lucide-react";
import BlurFade from "./magicui/blur-fade";

interface BaseTimelineItem {
  logoUrl: string;
  href: string;
  start: string;
  end: string;
  summary: string;
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
    <Dialog>
      <motion.div
        ref={ref}
        initial={{ y: 20, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="pb-4"
      >
        <DialogTrigger asChild>
          <Card
            className="cursor-pointer transition-all duration-200 p-5"
            style={{
              backgroundColor: "hsl(var(--muted) / 0.4)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "hsl(var(--accent))";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "hsl(var(--muted) / 0.4)";
            }}
          >
            <div className="space-y-3">
              <div className="flex items-start gap-4">
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <Avatar className="border size-14 bg-muted dark:bg-foreground">
                    <AvatarImage
                      src={item.logoUrl}
                      alt={isWorkItem ? item.company : item.school}
                      className="object-contain"
                    />
                    <AvatarFallback>
                      {isWorkItem ? item.company[0] : item.school[0]}
                    </AvatarFallback>
                  </Avatar>
                </motion.div>

                <div className="flex-1 space-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold">
                        {isWorkItem ? item.company : item.school}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {isWorkItem ? item.title : item.degree}
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {item.start} - {item.end}
                    </span>
                  </div>
                </div>
              </div>

              <p className="text-sm text-muted-foreground line-clamp-2">
                {item.summary}
              </p>

              {isWorkItem && item.badges && item.badges.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {item.badges.slice(0, 5).map((badge, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="text-xs font-normal"
                    >
                      {badge}
                    </Badge>
                  ))}
                  {item.badges.length > 5 && (
                    <Badge variant="secondary" className="text-xs font-normal">
                      +{item.badges.length - 5} more
                    </Badge>
                  )}
                </div>
              )}
            </div>
          </Card>
        </DialogTrigger>

        <DialogContent className="max-w-lg max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <div className="flex items-start gap-4">
              <BlurFade delay={0.05}>
                <Avatar className="border size-16 bg-muted dark:bg-foreground">
                  <AvatarImage
                    src={item.logoUrl}
                    alt={isWorkItem ? item.company : item.school}
                    className="object-contain"
                  />
                  <AvatarFallback>
                    {isWorkItem ? item.company[0] : item.school[0]}
                  </AvatarFallback>
                </Avatar>
              </BlurFade>
              <div className="flex-1 space-y-2">
                <BlurFade delay={0.1}>
                  <DialogTitle className="text-xl">
                    {isWorkItem ? item.company : item.school}
                  </DialogTitle>
                  <DialogDescription
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {isWorkItem ? item.title : item.degree}
                  </DialogDescription>
                </BlurFade>
                <BlurFade delay={0.15}>
                  <p
                    className="text-sm"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {item.start} - {item.end}
                  </p>
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-blue-500 hover:underline"
                  >
                    Visit Website <ExternalLink className="w-3 h-3" />
                  </Link>
                </BlurFade>
              </div>
            </div>
          </DialogHeader>
          <BlurFade delay={0.2}>
            <div className="space-y-4 mt-4">
              {isWorkItem && item.badges && item.badges.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.badges.map((badge, index) => (
                      <Badge key={index} variant="default" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              )}
              <BlurFade delay={0.25}>
                <div>
                  <h4 className="text-sm font-semibold mb-2">
                    {isWorkItem ? "Key Achievements" : "Details"}
                  </h4>
                  <div
                    className="text-sm prose prose-sm dark:prose-invert max-w-none"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {item.description}
                  </div>
                </div>
              </BlurFade>
            </div>
          </BlurFade>
        </DialogContent>
      </motion.div>
    </Dialog>
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
