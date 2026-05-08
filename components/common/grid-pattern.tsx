import React from 'react'

const GridPattern = ({className, size = 30}: {className?: string, size?: number}) => {
  return (
    <div
      className="absolute inset-0 opacity-10"
      style={{
        backgroundImage: `
    linear-gradient(45deg, transparent 49%, rgba(255,255,255,0.9) 49%, rgba(255,255,255,0.55) 51%, transparent 51%),
    linear-gradient(-45deg, transparent 49%, rgba(255,255,255,0.9) 49%, rgba(255,255,255,0.55) 51%, transparent 51%)
  `,
        backgroundSize: `${size}px ${size}px`,
        WebkitMaskImage:
          "radial-gradient(ellipse 62% 62% at 50% 50%, #000 22%, transparent 72%)",
        maskImage:
          "radial-gradient(ellipse 62% 62% at 50% 50%, #000 22%, transparent 72%)",
      }}
    />
  )
}

export default GridPattern