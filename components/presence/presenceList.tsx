import { PresenceItem } from "./presenceItem";

interface Presence {
  city: string;
  country: string;
}

const presences: Presence[] = [
  {
    city: "New York, New York",
    country: "UNITED STATES",
  },
  {
    city: "Palm Beach, Florida",
    country: "UNITED STATES",
  },
  {
    city: "George Town",
    country: "CAYMAN ISLANDS",
  },
  {
    city: "London",
    country: "UNITED KINGDOM",
  },
  {
    city: "Zurich",
    country: "SWITZERLAND",
  },
  {
    city: "Dubai",
    country: "UNITED ARAB EMIRATES",
  },
  {
    city: "Singapore",
    country: "REPUBLIC OF SINGAPORE",
  },
  {
    city: "Hong Kong",
    country: "SAR, CHINA",
  },
  {
    city: "Sydney, New South Wales",
    country: "AUSTRALIA",
  },
];

export const PresenceList = () => {
  return (
    <div className="p-6">
      {presences.map((presence, index) => (
        <PresenceItem
          key={index}
          city={presence.city}
          country={presence.country}
        />
      ))}
    </div>
  );
};
