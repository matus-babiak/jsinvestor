"use client";

import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import jsWealthSystemIcon from "@/assets/js-wealth-system.svg";

export interface TimelineItem {
  id: number;
  title: string;
  content: string | React.ReactNode;
  icon: React.ElementType;
  date?: string;
  category?: string;
  relatedIds?: number[];
  status?: "completed" | "in-progress" | "pending";
  energy?: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>(
    {}
  );
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== "undefined" && window.innerWidth < 768
  );
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) newState[parseInt(key)] = false;
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
      }
      return newState;
    });
  };

  useEffect(() => {
    if (!autoRotate) return;
    const t = setInterval(() => {
      setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
    }, 50);
    return () => clearInterval(t);
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    if (!nodeRefs.current[nodeId]) return;
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    setRotationAngle(270 - (nodeIndex / totalNodes) * 360);
  };

  const orbitRadius = isMobile ? 118 : 200;

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radian = (angle * Math.PI) / 180;

    const x = orbitRadius * Math.cos(radian);
    const y = orbitRadius * Math.sin(radian);

    const zIndex = Math.round(100 + 50 * Math.cos(radian));

    return { x, y, angle, zIndex };
  };

  return (
    <div
      className="w-full flex flex-col items-center justify-center bg-transparent overflow-hidden py-3 md:py-8 h-[660px] -mt-[144px] -mb-[144px] md:h-auto md:mt-0 md:mb-0"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      <div className="relative w-full max-w-[420px] md:max-w-[520px] aspect-square overflow-visible md:overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: "translate(0, 0)",
          }}
        >
          <img
            src={jsWealthSystemIcon}
            alt="JS Wealth Map"
            className="absolute left-1/2 top-1/2 w-[5rem] h-[5rem] md:w-[7.5rem] md:h-[7.5rem] -translate-x-1/2 -translate-y-1/2 object-contain pointer-events-none opacity-50"
          />

          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const Icon = item.icon;

            const nodeStyle = {
              transform: `translate(-50%, -50%) translate(${position.x}px, ${position.y}px)`,
              zIndex: isExpanded ? 200 : position.zIndex,
            };

            const isBottom = isMobile && position.y > 0;

            return (
              <div
                key={item.id}
                ref={(el) => {
                  nodeRefs.current[item.id] = el;
                }}
                className="absolute left-1/2 top-1/2 w-9 h-9 md:w-11 md:h-11 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 cursor-pointer"
                style={nodeStyle}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleItem(item.id);
                }}
                >
                <div
                  className={`
                  w-9 h-9 md:w-11 md:h-11 rounded-xl flex items-center justify-center icon-pattern-bg-primary text-primary-foreground
                  transition-all duration-300 transform
                  ${isExpanded ? "scale-110 shadow-lg shadow-primary/20" : ""}
                `}
                >
                  <Icon className="w-4 h-4 md:w-6 md:h-6 -translate-x-0.5 shrink-0" aria-hidden />
                </div>

                <div
                  className={`
                  absolute top-9 md:top-12 left-1/2 -translate-x-1/2 max-w-[4rem] md:max-w-[5.5rem] text-center text-[9px] md:text-xs font-sans font-medium md:font-normal tracking-wider leading-tight
                  text-foreground
                  transition-all duration-300
                  ${isExpanded ? "scale-110" : ""}
                `}
                >
                  {item.title}
                </div>

                {isExpanded && (
                  <Card
                    className={`absolute left-1/2 -translate-x-1/2 w-60 max-w-[calc(100vw-2rem)] md:w-64 bg-card border-border shadow-lg overflow-visible z-[200] font-sans max-h-none p-4 md:p-6 ${
                      isBottom ? "bottom-14 md:top-20 md:bottom-auto" : "top-14 md:top-20"
                    }`}
                  >
                    <CardHeader className="p-0 pb-1 md:pb-1">
                      <div className="flex items-center gap-2 md:gap-3">
                        <span className="flex h-8 w-8 md:h-9 md:w-9 shrink-0 items-center justify-center rounded-xl icon-pattern-bg-primary text-primary-foreground">
                          <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 -translate-x-0.5 shrink-0" aria-hidden />
                        </span>
                        <CardTitle className="text-[16px] md:text-base font-serif font-semibold text-foreground leading-tight">
                          {item.title}
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="text-sm font-sans text-muted-foreground p-0 pt-2 md:pt-0 max-h-none overflow-visible text-[12px] md:text-sm">
                      {typeof item.content === "string" ? (
                        <p>{item.content}</p>
                      ) : (
                        <div className="[&_strong]:text-foreground text-[12px] md:text-sm">
                          {item.content}
                        </div>
                      )}
                    </CardContent>
                  </Card>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
