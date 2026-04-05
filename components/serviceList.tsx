import { ServiceItem } from "./serviceItem";

type Service = {
  index?: string;
  variant?: "default" | "simple";
  title: React.ReactNode;
  description: string;
};

export const ServicesList = () => {
  const services: Service[] = [
    {
      index: "I",
      title: (
        <>
          Capital placement <br /> & Investment Advisory
        </>
      ),
      description:
        "Sourcing, structuring, and placing capital across private equity, real estate, venture, infrastructure, and direct investments. Full placement lifecycle from origination and due diligence through allocation and close.",
    },
    {
      index: "II",
      title: (
        <>
          Mergers, Acquisitions <br /> & Corporate Finance
        </>
      ),
      description:
        "Buy-side and sell-side advisory for privately held businesses, portfolio companies, and family enterprises. Transaction management, valuation, negotiation, and post-close coordination.",
    },
    {
      index: "III",
      title: (
        <>
          Mergers, Acquisitions <br /> & Corporate Finance
        </>
      ),
      description:
        "Origination and syndication of direct co-investment opportunities across our principal network. Deal structuring, capital formation, governance alignment, and investor relations.",
    },
    {
      index: "IV",
      title: (
        <>
          Mergers, Acquisitions <br /> & Corporate Finance
        </>
      ),
      description:
        "Cross-border entity architecture, tax-efficient holding structures, estate and succession planning, and multi-jurisdictional compliance coordination across all relevant territories.",
    },
    {
      variant: "simple",
      title: "Debt Recovery & Asset Tracing",
      description:
        "Strategic counsel on commercial disputes, stakeholder conflicts, and litigation coordination.",
    },
    {
      variant: "simple",
      title: "Dispute Advisory",
      description:
        "Strategic counsel on commercial disputes, stakeholder conflicts, and litigation coordination.",
    },
    {
      variant: "simple",
      title: "Family Governance",
      description:
        "Succession frameworks, governance structures, and next-generation preparation for family enterprises.",
    },
    {
      variant: "simple",
      title: "Real Estate & Asset Structuring",
      description:
        "Acquisition structuring for international property. Optimal jurisdiction, entity, and tax treatment.",
    },
    {
      variant: "simple",
      title: "Banking & Treasury",
      description:
        "Coordination of private banking relationships, treasury management, and lending facilities.",
    },
    {
      variant: "simple",
      title: "Regulatory & Compliance",
      description:
        "Licence management, AML/KYC coordination, and ongoing regulatory obligations across jurisdictions.",
    },
  ];

  return (
    <div className="">
      {services.map((service, idx) => (
        <ServiceItem key={idx} {...service} />
      ))}
    </div>
  );
};
