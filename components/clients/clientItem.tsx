import { cn } from "@/lib/utils";

type ClientItemProps = {
  title: React.ReactNode;
  className?: string;
};

export const ClientItem = ({ title, className }: ClientItemProps) => {
  return (
    <div className={cn("py-6", className)}>
      <div className="h-[0.5px] bg-clementine mb-8 w-1/6"></div>
      <p className="text-[22px] font-heading leading-tight">{title}</p>
    </div>
  );
};
