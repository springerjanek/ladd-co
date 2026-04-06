import { cn } from "@/lib/utils";

type IndustryItemProps = {
  title: React.ReactNode;
  className?: string;
};

export const IndustryItem = ({ title, className }: IndustryItemProps) => {
  return (
    <div className={cn("py-4 border-b border-coffee/6", className)}>
      <p className="text-[15px] font-light leading-tight">{title}</p>
    </div>
  );
};
