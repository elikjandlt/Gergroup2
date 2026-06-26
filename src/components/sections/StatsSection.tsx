"use client";

import { Award, Building2, Layers, Globe } from "lucide-react";
import { FadeIn } from "@/components/motion/FadeIn";
import type { Stat } from "@/lib/mock/data";

const ICONS: Record<string, React.ElementType> = {
  award: Award,
  building: Building2,
  layers: Layers,
  globe: Globe,
};

interface StatsSectionProps {
  stats: Stat[];
}

export default function StatsSection({ stats }: StatsSectionProps) {
  return (
    <section className="bg-background py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => {
            const Icon = ICONS[stat.icon] ?? Award;
            return (
              <FadeIn key={stat._id} delay={i * 0.1}>
                <div className="flex flex-col items-center gap-4 bg-[#F5F7FA] p-8 text-center">
                  <div className="flex h-14 w-14 items-center justify-center bg-primary">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-4xl font-extrabold text-primary">{stat.value}</p>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
