"use client";
import React, { useState, useEffect, useRef } from "react";
import { Card } from "@/components/ui/card";
import { SkillIcon } from "./icons";

interface Skill {
  name: string;
  icon: string;
}

interface CosmicSkillsProps {
  skills: {
    readonly Core: readonly Skill[];
    readonly Frontend: readonly Skill[];
    readonly Backend: readonly Skill[];
  };
}

// Distribute points evenly on a sphere using Fibonacci algorithm
const generateFibonacciSphere = (samples: number, radius: number) => {
  const points: { x: number; y: number; z: number }[] = [];
  const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle in radians

  for (let i = 0; i < samples; i++) {
    const y = 1 - (i / (samples - 1)) * 2; // y goes from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y); // radius at y
    const theta = phi * i; // golden angle increment

    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;

    points.push({
      x: x * radius,
      y: y * radius,
      z: z * radius,
    });
  }

  return points;
};

const IconCloud: React.FC<CosmicSkillsProps> = ({ skills }) => {
  const [hoveredSkill, setHoveredSkill] = useState<Skill | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const cloudRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const [allSkills, setAllSkills] = useState<Skill[]>([]);
  const [skillPositions, setSkillPositions] = useState<
    Array<{ skill: Skill; x: number; y: number; z: number }>
  >([]);

  // Combine all skills into a single array
  useEffect(() => {
    const combined = [...skills.Core, ...skills.Frontend, ...skills.Backend];
    setAllSkills(combined);
  }, [skills]);

  // Generate evenly distributed positions for all skills
  useEffect(() => {
    if (allSkills.length === 0) return;

    const radius = 150; // Cloud radius
    const points = generateFibonacciSphere(allSkills.length, radius);

    // Shuffle the points array to randomize which skill gets which position
    const shuffledPoints = [...points].sort(() => Math.random() - 0.5);

    const positions = allSkills.map((skill, i) => {
      return {
        skill,
        x: shuffledPoints[i].x,
        y: shuffledPoints[i].y,
        z: shuffledPoints[i].z,
      };
    });

    setSkillPositions(positions);
  }, [allSkills]);

  // Track mouse movement
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!cloudRef.current) return;

      const rect = cloudRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Calculate mouse position relative to the center of the cloud
      setMousePosition({
        x: (e.clientX - centerX) / rect.width,
        y: (e.clientY - centerY) / rect.height,
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Continuous rotation animation
  useEffect(() => {
    const animate = () => {
      setRotation((prev) => {
        if (isHovering) {
          // When hovering, add cursor influence to the existing rotation
          // without resetting position
          const mouseInfluenceX = mousePosition.y * 2; // Inverted for natural feel
          const mouseInfluenceY = mousePosition.x * 2;

          return {
            // Continue existing rotation with cursor influence
            x: prev.x + mouseInfluenceX * 0.1,
            y: prev.y + mouseInfluenceY * 0.1,
          };
        } else {
          // When not hovering, continue rotating in one direction
          return {
            x: prev.x * 0.95, // Gradually return x rotation to 0
            y: (prev.y + 0.2) % 360, // Continuous rotation around y-axis
          };
        }
      });
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isHovering, mousePosition]);

  return (
    <Card className="w-full max-w-3xl mx-auto overflow-hidden">
      <div
        className="relative h-[400px] mx-auto"
        ref={cloudRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* The cloud container */}
        <div
          className="absolute top-1/2 left-1/2 w-full h-full transform -translate-x-1/2 -translate-y-1/2"
          style={{
            perspective: "1000px",
            transformStyle: "preserve-3d",
          }}
        >
          {/* Cloud rotation based on animation or mouse position */}
          <div
            className="w-full h-full"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: "transform 0.05s linear",
            }}
          >
            {skillPositions.map(({ skill, x, y, z }) => {
              const isHovered = hoveredSkill === skill;
              const scale = isHovered ? 1.3 : 1;
              const zIndex = isHovered ? 10 : Math.floor(z + 150); // Higher z-index for hovered items

              return (
                <div
                  key={skill.name}
                  className="absolute rounded-full
                          flex items-center justify-center cursor-pointer text-white
                          transition-all duration-200"
                  style={{
                    width: "50px",
                    height: "50px",
                    left: "50%",
                    top: "50%",
                    transform: `translate3d(-50%, -50%, 0) 
                               translate3d(${x}px, ${y}px, ${z}px)
                               scale(${scale})`,
                    zIndex: zIndex,
                    opacity: 0.8 + (z + 150) / 300,
                    transition: "transform 0.3s ease, opacity 0.3s ease",
                    perspective: "1000px",
                    transformStyle: "preserve-3d",
                  }}
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Apply a container with billboard effect to always face the camera */}
                  <div
                    className="w-full h-full flex items-center justify-center"
                    style={{
                      // Billboard effect - always face the camera
                      transform: `rotateY(${-rotation.y}deg) rotateX(${-rotation.x}deg)`,
                      transformStyle: "preserve-3d",
                    }}
                  >
                    <div className="relative w-8 h-8">
                      <SkillIcon name={skill.icon} className="w-full h-full" />
                      {isHovered && (
                        <div
                          className="absolute -bottom-8 left-1/2 transform -translate-x-1/2
                                    bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap z-50"
                        >
                          {skill.name}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

// Export as CosmicSkills for backward compatibility
export default IconCloud as unknown as React.FC<CosmicSkillsProps>;
