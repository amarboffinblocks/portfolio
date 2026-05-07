import React from 'react'

const WorkProcessCard = ({ item }: { item: any }) => {
    const Icon = item.icon;
    return (
        <article
            key={item.step}
            className=" group relative rounded-xl  p-6  bg-white "
        >
            <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-xs tracking-[0.2em]  ">
                    STEP {item.step}
                </span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-md ">
                    <Icon className="h-4 w-4" />
                </span>
            </div>

            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
            </p>

        </article>
    )
}

export default WorkProcessCard