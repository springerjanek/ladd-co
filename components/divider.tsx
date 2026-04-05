import { cn } from "@/lib/utils";

type DividerProps = {
  showNumber?: boolean;
  number?: number;
  label?: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  className?: string;
};

export const Divider = ({
  showNumber,
  number,
  label,
  orientation = "horizontal",
  className,
}: DividerProps) => {
  const isHorizontal = orientation === "horizontal";

  return (
    <div
      className={cn(
        "flex",
        isHorizontal ? "flex-row gap-2 w-full" : "flex-col gap-2 h-full",
        className,
      )}
    >
      <div
        className={cn(
          "flex",
          isHorizontal
            ? "flex-row items-center gap-2 w-full"
            : "flex-col items-center gap-2 h-full",
        )}
      >
        {showNumber && (
          <>
            <div
              className={cn(
                isHorizontal ? "w-1.5 h-1.5" : "w-1.5 h-1.5",
                "bg-clementine shrink-0",
              )}
            />
            <span
              className={cn(
                "text-earth font-mono font-light text-[11px] leading-[120%] shrink-0",
                isHorizontal ? "inline-block" : "rotate-90",
              )}
            >
              0{number}
            </span>
          </>
        )}

        {/* The dotted/dashed line */}
        <div
          className={cn(isHorizontal ? "flex-1 h-1.5" : "flex-1 w-1.5")}
          style={
            isHorizontal
              ? {
                  backgroundImage: `repeating-linear-gradient(
                    to right,
                    var(--color-clementine) 0px,
                    var(--color-clementine) 1px,
                    transparent 1px,
                    transparent 4px
                  )`,
                  backgroundSize: "4px 100%",
                }
              : {
                  backgroundImage: `repeating-linear-gradient(
                    to bottom,
                    var(--color-clementine) 0px,
                    var(--color-clementine) 1px,
                    transparent 1px,
                    transparent 4px
                  )`,
                  backgroundSize: "100% 4px",
                }
          }
        />

        {label && (
          <p
            className={cn(
              "font-mono text-[11px] font-light tracking-[1px]",
              isHorizontal ? "" : "-rotate-90 whitespace-nowrap",
            )}
          >
            {label}
          </p>
        )}
      </div>
    </div>
  );
};
