import { cn } from "@/lib/utils";

type ServiceItemProps = {
  index?: string;
  title: React.ReactNode;
  description?: string;
  variant?: "default" | "simple";
  className?: string;
};

export const ServiceItem = ({
  index,
  title,
  description,
  variant = "default",
  className,
}: ServiceItemProps) => {
  const isSimple = variant === "simple";

  return (
    <div
      className={cn("p-6", !isSimple && "border-b border-coffee/6", className)}
    >
      {!isSimple && index && (
        <p className="text-clementine text-2xl mt-5">{index}</p>
      )}

      <p
        className={cn(
          "mt-4",
          isSimple ? "mt-0 text-[15px] font-sans" : "text-[22px]",
        )}
      >
        {title}
      </p>

      {description && (
        <p
          className={cn(
            "mt-4 max-w-[95%]",
            isSimple
              ? "mt-0 text-[15px] font-sans font-light"
              : "text-[15px] font-sans font-light text-zinc-500",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
};
