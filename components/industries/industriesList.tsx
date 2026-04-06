import { IndustryItem } from "./industryItem";

type Industry = {
  title: React.ReactNode;
};
const industries: Industry[] = [
  {
    title: <>Technology & Software</>,
  },
  {
    title: <>Real Estate & Development</>,
  },
  {
    title: <>Energy & Natural Resources</>,
  },
  {
    title: <>Financial Services</>,
  },
  {
    title: <>Healthcare & Life Sciences</>,
  },
  {
    title: <>Infrastructure & Logistics</>,
  },
  {
    title: <>Consumer & Luxury Goods</>,
  },
  {
    title: <>Private Equity & Venture Capital</>,
  },
  {
    title: <>Industrials & Manufacturing</>,
  },
  {
    title: <>Hospitality & Entertainment</>,
  },
  {
    title: <>Defence & Aerospace</>,
  },
  {
    title: <>Media & Telecommunications</>,
  },
];

export const IndustriesList = () => {
  return (
    <div className="p-6 pt-2">
      {industries.map((industry, idx) => (
        <IndustryItem key={idx} title={industry.title} />
      ))}
    </div>
  );
};
