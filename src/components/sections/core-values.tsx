import { SectionWrapper } from '@/components/common/section-wrapper';
import { Container } from '@/components/common/container';
import { SectionHeading } from '@/components/common/section-heading';
import { CoreValueItem } from '@/data/sections';

interface CoreValuesSectionProps {
    values: CoreValueItem[]
}
export const CoreValuesSection = ({ values }: CoreValuesSectionProps) => {
    return (
        <SectionWrapper >
            <Container>
                <SectionHeading
                    className="items-center"
                    align="center"
                    title={"Our Core Values"}
                    description={"Principles that shape how we build, communicate, and deliver."}
                />

                <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {values?.map((value) => {
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
