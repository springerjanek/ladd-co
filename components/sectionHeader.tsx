import { Divider } from "@/components/divider";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  number?: number;
  label: string;
  showNumber?: boolean;
  className?: string;
}

export const SectionHeader = ({
  number,
  label,
  showNumber = true,
  className,
}: SectionHeaderProps) => {
  return (
    <div
      className={cn("relative w-screen left-1/2 -translate-x-1/2", className)}
    >
      <div className="bg-paper">
        <div className="flex gap-2 p-6 border-coffee/6 border-t border-b">
          <Divider showNumber={showNumber} number={number} label={label} />
        </div>
      </div>
    </div>
  );
};
