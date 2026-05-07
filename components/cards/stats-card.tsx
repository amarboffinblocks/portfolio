import { cn } from "@/lib/utils";

type StatsCardProps = {
  number: string;
  label: string;
  className?: string;
};

const StatsCard = ({ number, label, className }: StatsCardProps) => {
  return (
    <div
      className={cn(
        "group relative flex min-h-[100px] flex-col justify-between gap-y-4 p-6 bg-background/90 rounded-md ",
        className
      )}
    >

      <div className="text-start">
        <span className="text-5xl font-semibold font-mono  text-muted-foreground  ">
          {number}
        </span>
      </div>

      <p className=" text-md font-medium  text-muted-foreground font-mono ">
        {label}
      </p>
    </div>
  );
};

export default StatsCard;