import React from 'react'
import { SectionWrapper } from '@/components/common/section-wrapper';
import { Container } from '@/components/common/container';
import { SectionHeading } from '@/components/common/section-heading';
import { CheckCircle2, Compass, Rocket, ShieldCheck } from 'lucide-react';
import { CoreValuesSectionContent } from '@/types/sections';
const CORE_VALUES = [
    {
        title: "Outcome-driven delivery",
        description:
            "We connect every sprint to business goals so progress is clear and measurable.",
        icon: Compass,
    },
    {
        title: "Reliable execution",
        description:
            "From architecture to QA, we keep quality high while shipping at startup speed.",
        icon: Rocket,
    },
    {
        title: "Long-term maintainability",
        description:
            "We build systems your team can scale and confidently own after launch.",
        icon: ShieldCheck,
    },
    {
        title: "Radical clarity",
        description:
            "We communicate early, document decisions, and keep stakeholders aligned end-to-end.",
        icon: CheckCircle2,
    },
] as const;
export const CoreValuesSection = ({ title, description }: CoreValuesSectionContent) => {
    return (
        <SectionWrapper >
            <Container>
                <SectionHeading
                    className="items-center"
                    align="center"
                    title={title}
                    description={description}
                />

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {CORE_VALUES.map((value) => {
                        const Icon = value.icon;
                        return (
                            <article
                                key={value.title}
                                className="group relative overflow-hidden rounded-3xl bg-background p-6  transition-colors  sm:p-7"
                            >

                                <div className="relative inline-flex  rounded-2xl bg-primary text-primary-foreground p-3 w-fit">
                                    <Icon className="h-5 w-5 text-primary-foreground" />
                                </div>
                                <h3 className="relative mt-5 text-base font-semibold tracking-tight sm:text-lg">
                                    {value.title}
                                </h3>
                                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                                    {value.description}
                                </p>
                            </article>
                        );
                    })}
                </div>
            </Container>
        </SectionWrapper>
    )
}
