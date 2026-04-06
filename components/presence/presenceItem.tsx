import React from "react";

interface PresenceItemProps {
  city: string;
  country: string;
}

export const PresenceItem = ({ city, country }: PresenceItemProps) => {
  return (
    <div className="py-4 border-b border-coffee/6">
      <p className="font-heading font-light text-[24px]  leading-[140%]">
        {city}
      </p>
      <p className="text-[11px] font-mono tracking-[1px] text-clementine mt-2">
        {country}
      </p>
    </div>
  );
};
