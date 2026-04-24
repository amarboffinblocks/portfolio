"use client";

import { useState } from "react";
import Link from "next/link";
import { Blocks, Mail } from "lucide-react";

import { Container } from "@/components/common/container";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

const testimonials = [
    {
        brand: "MetricLane",
        quote:
            "BoffinBlocks delivered our AI-assisted reporting workflow on a tight timeline. Discovery through launch was structured, transparent, and detail-oriented.",
        attribution: "Alex Rivera, Head of Operations",
    },
    {
        brand: "FinFlow",
        quote:
            "Strong communication and a pragmatic approach. We now have automation that fits how finance actually works—not a generic template.",
        attribution: "Priya N., VP Product",
    },
    {
        brand: "OpsGrid",
        quote:
            "They consolidated fragmented internal tools into one coherent system. Operational overhead dropped materially after go-live.",
        attribution: "Jordan Lee, COO",
    },
];

export function ContactSection() {
    const [slide, setSlide] = useState(0);

    return (
        <section
            className="relative py-20 lg:py-28"
            aria-labelledby="contact-section-heading"
        >
            <Container>
                <div className="overflow-hidden rounded-3xl  bg-white  sm:rounded-[1.75rem]">
                    <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:divide-x lg:divide-neutral-200/80 ">
                        {/* Brand panel */}
                        <div className="relative flex min-h-[560px] flex-col justify-between gap-12 overflow-hidden bg-primary p-6 md:p-10 lg:min-h-[620px] lg:p-12">
                            <div
                                className="pointer-events-none absolute -left-16 top-1/4 size-48 rounded-full bg-white/10 blur-2xl"
                                aria-hidden
                            />
                            <div
                                className="pointer-events-none absolute -bottom-10 right-[-20%] size-64 rounded-full bg-white/10 blur-3xl"
                                aria-hidden
                            />

                            <div className="relative z-10 space-y-8">
                                <Link
                                    href="/"
                                    className="inline-flex items-center gap-2.5 text-white/95 transition-opacity hover:opacity-90"
                                >
                                    <span className="flex size-10 items-center justify-center rounded-xl bg-white/15 ring-1 ring-white/20">
                                        <Blocks className="size-5 text-white" strokeWidth={1.75} />
                                    </span>
                                    <span className="text-base font-semibold tracking-tight">BoffinBlocks</span>
                                </Link>

                                <div className="space-y-4">
                                   
                                    <h2
                                        id="contact-section-heading"
                                        className="font-heading text-3xl leading-tight tracking-tight text-white sm:text-4xl"
                                    >
                                        Start a conversation with our team
                                    </h2>
                                    <p className="max-w-md text-sm leading-relaxed text-white/85 sm:text-base">
                                        Share your goals, constraints, and timeline. We respond to new inquiries within one business day
                                        and treat every message as confidential.
                                    </p>
                                </div>
                            </div>

                            <div className="relative z-10">
                                <figure className="relative rounded-4xl bg-white px-6 py-7 shadow-md ring-1 ring-black/5 sm:px-8 sm:py-8">
                                    <figcaption className="text-center font-sans text-xs font-semibold uppercase tracking-wider text-primary">
                                        {testimonials[slide].brand}
                                    </figcaption>
                                    <blockquote className="mt-4 text-center font-sans text-sm leading-relaxed text-neutral-800 sm:text-[0.9375rem]">
                                        &ldquo;{testimonials[slide].quote}&rdquo;
                                    </blockquote>
                                    <p className="mt-4 text-center text-xs font-semibold text-neutral-950 sm:text-sm">
                                        {testimonials[slide].attribution}
                                    </p>
                                </figure>

                                <div
                                    className="mt-5 flex justify-center gap-2"
                                    role="group"
                                    aria-label="Client testimonials"
                                >
                                    {testimonials.map((_, i) => (
                                        <button
                                            key={testimonials[i].brand}
                                            type="button"
                                            aria-label={`Show testimonial ${i + 1} of ${testimonials.length}`}
                                            aria-current={slide === i ? "true" : undefined}
                                            className={cn(
                                                "h-2 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
                                                slide === i ? "w-8 bg-white" : "w-2 bg-white/35 hover:bg-white/55",
                                            )}
                                            onClick={() => setSlide(i)}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="flex flex-col bg-[#f8f9fc] p-6 md:p-10 lg:p-12">
                            <header className="mb-8 space-y-3">
                                <div className="flex items-center gap-3 text-neutral-950">
                                    <div
                                        className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-neutral-200/90"
                                        aria-hidden
                                    >
                                        <Mail className="size-[18px] text-neutral-600" strokeWidth={2} />
                                    </div>
                                        <h3 className="font-sans text-xl font-semibold tracking-tight text-neutral-950 sm:text-2xl">
                                            Send us a message
                                        </h3>
                                </div>
                                <p className="max-w-md text-sm leading-relaxed text-neutral-600">
                                    Use the form below for project inquiries and partnerships. For urgent matters, note it in your message
                                    and we will prioritize accordingly.
                                </p>
                            </header>

                            <form className="flex flex-1 flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid gap-6 sm:grid-cols-2">
                                    <div className="space-y-2">
                                        <Label htmlFor="first-name" className="text-sm font-medium text-neutral-950">
                                            First name
                                        </Label>
                                        <Input
                                            id="first-name"
                                            name="firstName"
                                            placeholder="First name"
                                            className="h-11 rounded-xl border-neutral-200 bg-white text-neutral-950 placeholder:text-neutral-400 focus-visible:border-neutral-400 focus-visible:ring-neutral-200/60"
                                            autoComplete="given-name"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="last-name" className="text-sm font-medium text-neutral-950">
                                            Last name
                                        </Label>
                                        <Input
                                            id="last-name"
                                            name="lastName"
                                            placeholder="Last name"
                                            className="h-11 rounded-xl border-neutral-200 bg-white text-neutral-950 placeholder:text-neutral-400 focus-visible:border-neutral-400 focus-visible:ring-neutral-200/60"
                                            autoComplete="family-name"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium text-neutral-950">
                                        Work email <span className="font-normal text-neutral-500">(required)</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        required
                                        placeholder="name@company.com"
                                        className="h-11 rounded-xl border-neutral-200 bg-white text-neutral-950 placeholder:text-neutral-400 focus-visible:border-neutral-400 focus-visible:ring-neutral-200/60"
                                        autoComplete="email"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="message" className="text-sm font-medium text-neutral-950">
                                        How can we help? <span className="font-normal text-neutral-500">(required)</span>
                                    </Label>
                                    <Textarea
                                        id="message"
                                        name="message"
                                        required
                                        placeholder="Briefly describe your project, timeline, and what success looks like."
                                        className="min-h-[140px] rounded-xl border-neutral-200 bg-white py-3 text-neutral-950 placeholder:text-neutral-400 focus-visible:border-neutral-400 focus-visible:ring-neutral-200/60"
                                    />
                                </div>

                                <Button
                                    type="submit"
                                    size="lg"
                                  
                                >
                                    Submit inquiry
                                </Button>

                                <p className="text-center text-xs leading-relaxed text-neutral-500">
                                    By submitting this form, you acknowledge our{" "}
                                    <Link
                                        href="/privacy"
                                        className="font-medium text-neutral-800 underline underline-offset-2 hover:text-neutral-950"
                                    >
                                        Privacy Policy
                                    </Link>
                                    .
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
