import { cn } from "@/lib/utils";
import GridPattern from "../common/grid-pattern";

type StatsCardProps = {
  number: string;
  label: string;
  className?: string;
};

// bg-[#384357]/90
const StatsCard = ({ number, label, className }: StatsCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex min-h-[100px] flex-col justify-center gap-y-4 p-6  rounded-sm glass-radial  ",
        className
      )}
    >
      <GridPattern/>

      <div className="text-start">
        <span className=" text-3xl md:text-5xl font-semibold font-mono  text-primary-foreground  ">
          {number}
        </span>
      </div>

      <p className=" text-sm md:text-md font-medium  text-primary-foreground font-mono ">
        {label}
      </p>
    </div>
  );
};

export default StatsCard;