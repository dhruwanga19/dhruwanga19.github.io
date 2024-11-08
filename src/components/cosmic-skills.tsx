"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Star, Orbit } from "lucide-react";
import { SkillIcon } from "./icons";

interface Skill {
  name: string;
  icon: string;
}

interface SkillsData {
  Core: readonly Skill[];
  Frontend: readonly Skill[];
  Backend: readonly Skill[];
}

interface CosmicSkillsProps {
  skills: {
    readonly Core: readonly Skill[];
    readonly Frontend: readonly Skill[];
    readonly Backend: readonly Skill[];
  };
}

interface CategoryDetails {
  color: string;
  textColor: string;
  ringColor: string;
  orbitDuration: number;
}

interface Categories {
  [key: string]: CategoryDetails;
}

const categoryStyles: Categories = {
  Core: {
    color: "from-blue-100 to-blue-200",
    textColor: "text-blue-100",
    ringColor: "border-blue-400/20",
    orbitDuration: 20,
  },
  Frontend: {
    color: "from-purple-100 to-purple-200",
    textColor: "text-purple-100",
    ringColor: "border-purple-400/20",
    orbitDuration: 25,
  },
  Backend: {
    color: "from-teal-100 to-teal-200",
    textColor: "text-teal-100",
    ringColor: "border-teal-400/20",
    orbitDuration: 30,
  },
};

const CosmicSkills: React.FC<CosmicSkillsProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [screenSize, setScreenSize] = useState({
    isMobile: false,
    isTablet: false,
    isDesktop: true,
  });

  useEffect(() => {
    const updateScreenSize = () => {
      setScreenSize({
        isMobile: window.innerWidth < 768,
        isTablet: window.innerWidth >= 768 && window.innerWidth < 1024,
        isDesktop: window.innerWidth >= 1024,
      });
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);
    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const calculatePosition = (
    index: number,
    total: number,
    radius: number
  ): { x: number; y: number } => {
    const angle = (index * 2 * Math.PI) / total - Math.PI / 2;
    return {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
    };
  };

  const getRadius = (categoryIndex: number) => {
    const baseRadius = screenSize.isDesktop
      ? 100
      : screenSize.isTablet
      ? 90
      : 80;
    const increment = screenSize.isDesktop ? 60 : screenSize.isTablet ? 50 : 40;
    return baseRadius + categoryIndex * increment;
  };

  return (
    <Card className="w-full max-w-3xl mx-auto bg-primary-foreground overflow-hidden">
      <div className="relative h-[300px] mx-auto">
        {Object.entries(categoryStyles).map(([name, { ringColor }], idx) => (
          <div
            key={`ring-${name}`}
            className={`absolute top-1/2 left-1/2 rounded-full border-2 ${ringColor}`}
            style={{
              width: `${getRadius(idx) * 2}px`,
              height: `${getRadius(idx) * 2}px`,
              transform: "translate(-50%, -50%)",
              opacity: activeCategory === name ? 0.8 : 0.3,
            }}
          />
        ))}

        <div
          className="absolute top-1/2 left-1/2 w-16 h-16 rounded-full 
                    bg-gradient-to-r from-yellow-400 to-orange-500
                    flex items-center justify-center text-white font-bold
                    shadow-lg shadow-orange-500/50"
          style={{ transform: "translate(-50%, -50%)" }}
        >
          <div className="text-center">
            <div className="text-sm">Core</div>
            <div className="text-xs opacity-75">Skills</div>
          </div>
        </div>

        {(
          Object.entries(skills) as [keyof typeof skills, readonly Skill[]][]
        ).map(([categoryName, skillsList], categoryIndex) => {
          const categoryStyle = categoryStyles[categoryName];
          return (
            <div
              key={categoryName}
              className="absolute top-1/2 left-1/2 orbit"
              style={{
                animationDuration: `${categoryStyle.orbitDuration}s`,
                transform: "translate(-50%, -50%)",
              }}
              onMouseEnter={() => setActiveCategory(categoryName)}
              onMouseLeave={() => setActiveCategory(null)}
            >
              {skillsList.map((skill, index) => {
                const position = calculatePosition(
                  index,
                  skillsList.length,
                  getRadius(categoryIndex)
                );
                const isHovered = hoveredSkill === skill;

                return (
                  <div
                    key={skill.name}
                    className={`absolute w-12 h-12 -ml-6 -mt-6
                              rounded-full bg-gradient-to-br ${categoryStyle.color} 
                              flex items-center justify-center cursor-pointer ${categoryStyle.textColor} 
                              font-medium text-xs text-center p-2
                              shadow-lg hover:scale-110 transition-transform duration-200`}
                    style={{
                      left: "50%",
                      top: "50%",
                      transform: `translate(${position.x}px, ${
                        position.y
                      }px) rotate(-${(index * 360) / skillsList.length}deg)`,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    <div className="relative">
                      <SkillIcon name={skill.icon} className="w-full h-full" />
                      {isHovered && (
                        <div
                          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                                    bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-10"
                        >
                          {skill.name}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="p-4 flex justify-center gap-6 mt-10">
        {Object.entries(categoryStyles).map(([name, { color }]) => (
          <div
            key={name}
            className="flex items-center gap-2 cursor-pointer text-white hover:scale-110 transition-transform duration-200"
            onMouseEnter={() => setActiveCategory(name)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${color}`} />
            <span className="text-xs text-primary font-medium">{name}</span>
            <Orbit className="w-3 h-3 text-primary" />
          </div>
        ))}
      </div>
    </Card>
  );
};

export default CosmicSkills;
