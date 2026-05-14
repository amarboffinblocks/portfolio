import React from 'react'

const Eyebrow = ({ text }: { text: string }) => {
    return (
        <div className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 font-mono text-xs tracking-[0.2em] text-primary-foreground/90 uppercase">
            <span className="h-2 w-2 rounded-full bg-accent" />
           {text}
        </div>
    )
}

export default Eyebrow