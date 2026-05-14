import type { ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

type SectionWrapperProps = ComponentPropsWithoutRef<"section"> & {
    background?: boolean
}

export const SectionWrapper = ({
    children,
    className,
    background = false,
    ...props
}: SectionWrapperProps) => {
    if (background) {
        return (
            <section className={cn("p-2 md:p-4", className)} {...props}>
                <div className="relative overflow-hidden rounded-3xl bg-primary py-10 lg:py-16">
                    {children}
                </div>
            </section>
        )
    }

    return (
        <section className={cn("relative py-10 md:py-16", className)} {...props}>
            {children}
        </section>
    )
}
