import Image from "next/image";
import logo1 from "../public/1mobile.png";
import logo2 from "../public/2mobile.png";
import logo3 from "../public/3mobile.png";
import logo4 from "../public/4mobile.png";
import { Divider } from "@/components/divider";
import { ServicesList } from "@/components/serviceList";
import { ClientsList } from "@/components/clientsList";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="p-6 mt-2.5 font-heading">
        <p className="text-[32px] leading-[120%]">
          Advisory and execution for{" "}
          <span className="italic">
            families, principals, and private institutions
          </span>{" "}
          with interest that demand discretion.
        </p>
        <p className="font-sans mt-4 text-earth font-light max-w-[95%]">
          Ladd & Co. is a private advisory practice. We represent clients across
          transactions, capital strategy, structuring, and the management of
          sensitive matters across jurisdictions.
        </p>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2 mt-4">
        <Image alt="Logo" src={logo1} priority />
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <div className="font-heading flex flex-col justify-center items-center bg-olive">
          <div className="mt-7 w-[55%]">
            <Divider showNumber={false} />
          </div>

          <div className="w-full border-t mt-7 border-coffee/6" />

          <div className="ml-4 mr-4 border-l border-r p-6  border-coffee/6">
            <p className="text-[22px] leading-[130%]">
              We operate as an extension of our clients' interests &mdash;
              advising, coordinating, and executing where the complexity demands
              a single, trusted point of contact.
            </p>
            <p className="font-sans mt-6 font-light text-[15px] text-earth leading-[160%] max-w-[95%]">
              Whether the matter concerns a transaction, a restructure, a
              dispute, or an opportunity &mdash; our role is to ensure the
              outcome is resolved efficiently, discreetly, and in the client's
              favour.
            </p>
          </div>
        </div>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <div className="bg-paper border-t border-coffee/6 ">
          <div className="p-6">
            <Divider showNumber={true} number={1} />
          </div>
        </div>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <Image alt="Logo" className="w-full h-auto" src={logo2} />
      </div>

      <div className="font-sans text-earth font-light pl-9 pr-8">
        <p className="font-mono text-[13px] tracking-[1px] mt-5">
          ABOUT THE FIRM
        </p>
        <p className="font-heading text-[22px] text-coffee leading-[130%] mt-8 pb-6">
          We advise where the stakes are highest and the margin for error is
          smallest.
        </p>

        <div className="bg-coffee/6 w-[164px] h-px"></div>

        <p className="mt-8 max-w-[95%]">
          Our clients are individuals and families with significant wealth,
          complex international structures, and affairs that span multiple
          jurisdictions, advisors, and asset classes.
        </p>
        <p className="mt-4 max-w-[95%]">
          We do not manage assets. We do not sell financial products. We provide
          independent counsel and hands-on execution across the full spectrum of
          our clients' private affairs - from capital deployment and M&A to
          international structuring and the resolution of distressed or disputed
          matters.
        </p>
        <p className="mt-4 max-w-[95%]">
          We work alongside our clients' existing professional teams - their
          lawyers, accountants, bankers, and investment managers - ensuring
          alignment, identifying gaps, and resolving issues that fall between
          the cracks.
        </p>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2 mt-6">
        <div className="bg-paper">
          <div className="flex gap-2 p-6 border-coffee/6 border-t border-b">
            <Divider showNumber number={2} label="SERVICES" />
          </div>
        </div>
      </div>

      <div className="font-heading">
        <p className="p-6 text-[32px] leading-[130%]">
          Advisory
          <br />& Execution
        </p>

        <div className="">
          <Image alt="Logo" className="w-full h-auto" src={logo3} />
        </div>

        <ServicesList />
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2 mt-6">
        <div className="bg-paper">
          <div className="flex gap-2 p-6 border-coffee/6 border-t border-b">
            <Divider showNumber number={3} label="WHO WE SERVE" />
          </div>
        </div>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <Image alt="Logo" className="w-full h-auto" src={logo4} />
      </div>

      <div className="p-6 mt-2.5 font-heading">
        <p className="text-2xl leading-[120%]">
          Our clients are{" "}
          <span className="font-heading font-light italic">
            entrepreneurs, principals, and multi-<br></br>generational families
            managing significant private wealth
          </span>{" "}
          across multiple jurisdictions.{" "}
        </p>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <div className="bg-paper border-t border-b border-coffee/6 ">
          <div className="p-6">
            <Divider label="CLIENTS" />
          </div>
        </div>
      </div>

      <div className="text-earth flex flex-col gap-6 font-sans font-light border-b">
        <p className="mt-4 max-w-[95%] px-5">
          Many have complex holding structures, diverse asset portfolios, and
          professional teams that require a senior point of coordination.
        </p>
        <p className="max-w-[95%] px-5 pb-10">
          We also act for institutional investors, sovereign entities, and
          private offices requiring independent advisory on specific
          transactions or matters.
        </p>
      </div>

      <ClientsList />

      <div className="relative w-screen left-1/2 -translate-x-1/2">
        <div className="font-heading flex justify-center items-center bg-olive">
          <div className="flex justify-center w-full">
            <Divider orientation="vertical" className="h-60" />
          </div>

          <div className="border-l border-r p-6  border-coffee/6">
            <p className="text-[22px] leading-[130%] italic max-w-[90%]">
              Discretion is not a policy. It is the nature of the work.
            </p>
            <p className="font-sans mt-6 font-light text-[15px] text-earth leading-[160%] max-w-[95%]">
              Our clients engage us because the matters they face are too
              consequential for rigid institutional processes and too complex
              for any single advisor. We operate with a permanent obligation of
              confidentiality — not because it is expected, but because the work
              demands it. The details of our engagements, our client
              relationships, and the outcomes we achieve are never disclosed.
            </p>
            <p className="font-mono uppercase mt-6 font-light text-[13px] text-clementine tracking-[1px] leading-[120%] max-w-[95%]">
              This is not a feature <br></br> of our service. It is the
              foundation of it.
            </p>
          </div>
        </div>
      </div>

      <p className="font-sans mt-4 text-zinc-500 max-w-[95%] px-5">
        Whether the matter concerns a transaction, a restructure, a dispute, or
        an opportunity - our role is to ensure the outcome is resolved
        efficiently, discreetly, and in the client's favour.
      </p>
      <p className="font-sans mt-4 text-zinc-500 max-w-[95%] px-5 pb-10">
        Whether the matter concerns a transaction, a restructure, a dispute, or
        an opportunity - our role is to ensure the outcome is resolved
        efficiently, discreetly, and in the client's favour.
      </p>
    </div>
  );
}
