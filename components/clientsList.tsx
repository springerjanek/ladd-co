import { ClientItem } from "./clientItem";

type Client = {
  title: React.ReactNode;
};
const clients: Client[] = [
  {
    title: <>Ultra-High-Net-Worth Individuals & Families</>,
  },
  {
    title: <>Single & Multi-Family Offices</>,
  },
  {
    title: <>Private Holding Companies</>,
  },
  {
    title: <>Institutional & Sovereign Investors</>,
  },
  {
    title: <>Private Equity & Venture Principals</>,
  },
  {
    title: "Family-Owned Enterprises",
  },
];

export const ClientsList = () => {
  return (
    <div className="p-6">
      {clients.map((client, idx) => (
        <ClientItem key={idx} title={client.title} />
      ))}
    </div>
  );
};
