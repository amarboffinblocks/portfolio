import React from 'react'

const VerifyIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 48 48"
      className="inline-block"
    >
      <polygon
        fill="#42a5f5"
        points="29.62,3 33.053,8.308 39.367,8.624 39.686,14.937 44.997,18.367 42.116,23.995 45,29.62 39.692,33.053 39.376,39.367 33.063,39.686 29.633,44.997 24.005,42.116 18.38,45 14.947,39.692 8.633,39.376 8.314,33.063 3.003,29.633 5.884,24.005 3,18.38 8.308,14.947 8.624,8.633 14.937,8.314 18.367,3.003 23.995,5.884"
      ></polygon>
      <polygon
        fill="#fff"
        points="21.396,31.255 14.899,24.76 17.021,22.639 21.428,27.046 30.996,17.772 33.084,19.926"
      ></polygon>
    </svg>
  );
  
const TestimonialsCard = ({ card, index }: { card: any, index: number }) => {
    return (
        <div className="p-4 rounded-lg mx-4 shadow hover:shadow-lg transition-all duration-200 w-72 shrink-0 bg-background">
            <div className="flex gap-2">
                <img className="size-11 rounded-full" src={card.image} alt={card.name} />
                <div className="flex flex-col">
                    <div className="flex items-center gap-1">
                        <p className="font-medium">{card.name}</p>
                        <VerifyIcon />
                    </div>
                    <span className="text-xs text-slate-500">{card.handle}</span>
                </div>
            </div>
            <p className="text-sm pt-4 text-gray-800">
                Radiant made undercutting all of our competitors an absolute breeze.
            </p>
        </div>
    )
}

export default TestimonialsCard