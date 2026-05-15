import { Container } from '@/components/common/container'
import { SectionHeading } from '@/components/common/section-heading'
import { SectionWrapper } from '../common/section-wrapper'
import { CheckCircle2 } from 'lucide-react'

export const WhoWEAreSection = () => {
    return (
        <SectionWrapper>
            <Container>
                <SectionHeading
                    className="mx-0"
                    align="center"
                    eyebrow="WHO WE ARE"
                    title="A delivery-first team"
                    description="We partner with ambitious teams to design, build, and ship software that moves the needle. Strategy, speed, and craft — with clear communication at every step."
                />
                <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
                    <div className="lg:col-span-7">
                        <div className=" p-6 backdrop-blur sm:p-8">
                            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                                What you can expect
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                                We combine product thinking with strong engineering to help you launch
                                faster, iterate confidently, and scale without rewrites.
                            </p>
                            <ul className="mt-6 space-y-3 text-sm sm:text-base">
                                {[
                                    "Clear scope, timelines, and weekly progress updates",
                                    "Thoughtful UX and clean, maintainable code",
                                    "Automation-first approach to reduce manual work",
                                    "A reliable team that ships and supports after launch",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-primary/10 text-primary">
                                            <CheckCircle2 className="h-4 w-4" />
                                        </span>
                                        <span className="text-foreground/90">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="lg:col-span-5">
                        <div className="rounded-3xl bg-primary p-6 text-white sm:p-8">
                            <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                                Our focus
                            </h3>
                            <p className="mt-2 text-sm leading-relaxed text-white/85 sm:text-base">
                                Practical AI, modern web apps, and automation — implemented with
                                reliability and a strong handover so your team can own what we build.
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-3">
                                {[
                                    { label: "Product & UX", value: "Clarity" },
                                    { label: "Engineering", value: "Quality" },
                                    { label: "Delivery", value: "Speed" },
                                    { label: "Support", value: "Ownership" },
                                ].map((pill) => (
                                    <div
                                        key={pill.label}
                                        className="rounded-2xl p-4 bg-[#f9fafb] text-black"
                                    >
                                        <p className="text-xs tracking-wide ">
                                            {pill.label}
                                        </p>
                                        <p className="mt-1 text-sm font-semibold tracking-tight">
                                            {pill.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </SectionWrapper>
    )
}
