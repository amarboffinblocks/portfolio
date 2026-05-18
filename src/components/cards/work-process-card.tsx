import React from 'react'
import GridPattern from '../common/grid-pattern';
import { ProcessStep } from '@/types/sections';
import { Code2, Compass, Layers3, Rocket } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
    Compass,
    Layers3,
    Code2,
    Rocket,
};
const WorkProcessCard = ({ item }: { item: ProcessStep }) => {
    const Icon = iconMap[item.icon];
    return (
        <article
            key={item.step}
            className=" group relative rounded-xl  p-6  glass-radial backdrop-blur-sm  "
        >
            <GridPattern size={40} />
            <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em] text-primary-foreground uppercase ">
                    {item.step}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md bg-accent  ">
                    <Icon className="h-4 w-4" />
                </span>
            </div>

            <h3 className="text-lg font-semibold text-primary-foreground">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-primary-foreground/50">
                {item.description}
            </p>

        </article>
    )
}

export default WorkProcessCard