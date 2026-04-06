import Image from "next/image";
import logo1 from "../public/1mobile.png";
import logo2 from "../public/2mobile.png";
import logo3 from "../public/3mobile.png";
import logo4 from "../public/4mobile.png";
import { Divider } from "@/components/divider";
import { ServicesList } from "@/components/services/serviceList";
import { ClientsList } from "@/components/clients/clientsList";
import { IndustriesList } from "@/components/industries/industriesList";
import { PresenceList } from "@/components/presence/presenceList";
import { Footer } from "@/components/footer";
import { SectionHeader } from "@/components/sectionHeader";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row">
        <div className="p-6 xl:pl-[92px] xl:pt-[72px] xl:min-h-[650px] xl:max-w-[65%] 2xl:max-w-[100%] mt-2.5 font-heading">
          <p className="text-[32px] lg:text-[56px] leading-[120%]">
            Advisory and execution for{" "}
            <span className="italic">
              families, principals, and private institutions
            </span>{" "}
            with interest that demand discretion.
          </p>
          <p className="text-[15px] xl:max-w-[75%] font-sans mt-4 text-earth font-light max-w-[95%]">
            Ladd & Co. is a private advisory practice. We represent clients
            across transactions, capital strategy, structuring, and the
            management of sensitive matters across jurisdictions.
          </p>
        </div>

        <div className="relative w-screen left-1/2 -translate-x-1/2 md:translate-x-0 md:left-0 mt-4 xl:mt-0 xl:border-l">
          <Image
            className="xl:h-full xl:pt-8 xl:pb-8"
            alt="Logo"
            src={logo1}
            priority
          />
        </div>
      </div>
      <div className="relative w-screen left-1/2 -translate-x-1/2 2xl:ml-[150px]">
        <div className="font-heading flex flex-col xl:flex-row xl:ml-[50px] xl:mr-[50px] 2xl:mr-[200px] justify-center items-center bg-olive">
          <div className="mt-7 w-[55%] xl:h-[300px] xl:flex xl:items-center xl:ml-[30px] xl:w-[0%]">
            <Divider showNumber={false} className="h-[65%]" />
          </div>

          <div className="xl:hidden w-full border-t mt-7 border-coffee/6" />

          <div className="hidden xl:block absolute left-[110px] top-0 bottom-0 w-px bg-coffee/6" />

          <div className="ml-4 xl:ml-[30px] mr-4 border-l border-r xl:border-0 p-6  border-coffee/6">
            <p className="text-[22px] leading-[130%]">
              We operate as an extension of our clients' interests &mdash;
              advising, coordinating, and executing where the complexity demands
              a single, trusted point of contact.
            </p>
            <p className="font-sans mt-6 font-light text-[15px] xl:max-w-[50%] text-earth leading-[160%] max-w-[95%]">
              Whether the matter concerns a transaction, a restructure, a
              dispute, or an opportunity &mdash; our role is to ensure the
              outcome is resolved efficiently, discreetly, and in the client's
              favour.
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col xl:flex-row">
        <div className="relative w-screen xl:w-auto left-1/2 -translate-x-1/2 xl:left-0 xl:translate-x-0">
          <div className="bg-paper border-t border-coffee/6 xl:bg-transparent xl:flex">
            <div className="p-6 xl:h-[800px] xl:pt-18 xl:pb-18">
              <Divider showNumber={true} number={1} />
            </div>
          </div>
        </div>

        <div className="relative w-screen left-1/2 -translate-x-1/2 xl:left-0 xl:translate-x-0 xl:ml-6 xl:border-l xl:border-r xl:w-3/5">
          <Image
            alt="Logo"
            className="w-full h-auto xl:h-full xl:pt-8 xl:pb-8 xl:w-full"
            src={logo2}
          />
        </div>

        <div className="font-sans text-earth font-light pl-9 pr-8 xl:mt-18 xl:pl-16">
          <p className="font-mono text-[13px] tracking-[1px] mt-5">
            ABOUT THE FIRM
          </p>
          <p className="font-heading text-[22px] text-coffee leading-[130%] mt-8 pb-6 xl:text-[48px] xl:max-w-[90%] 2xl:max-w-[800px]">
            We advise where the stakes are highest and the margin for error is
            smallest.
          </p>

          <div className="bg-coffee/6 w-[164px] h-px xl:w-px xl:h-[164px] xl:mt-[72px] xl:ml-[200px]"></div>

          <p className="mt-8 max-w-[95%] xl:mt-[72px]">
            Our clients are individuals and families with significant wealth,
            complex international structures, and affairs that span multiple
            jurisdictions, advisors, and asset classes.
          </p>
          <p className="mt-4 max-w-[95%]">
            We do not manage assets. We do not sell financial products. We
            provide independent counsel and hands-on execution across the full
            spectrum of our clients' private affairs - from capital deployment
            and M&A to international structuring and the resolution of
            distressed or disputed matters.
          </p>
          <p className="mt-4 max-w-[95%] xl:pb-[72px]">
            We work alongside our clients' existing professional teams - their
            lawyers, accountants, bankers, and investment managers - ensuring
            alignment, identifying gaps, and resolving issues that fall between
            the cracks.
          </p>
        </div>
      </div>

      <SectionHeader number={2} label="SERVICES" className="mt-6 xl:mt-0" />

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

      <SectionHeader label="CLIENTS" showNumber={false} />

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
        <div className="font-heading flex items-stretch bg-olive ">
          <div className="pl-6 pr-6 border-r border-coffee/6 flex items-center">
            <Divider orientation="vertical" className="h-4/5" />
          </div>

          <div className="pt-12 pl-8 pb-12 pr-8 flex-1 flex flex-col">
            <div className="flex flex-col gap-8">
              <p className="text-[22px] leading-[130%] italic max-w-[90%]">
                Discretion is not a policy. <br />
                It is the nature of the work.
              </p>
              <p className="font-sans font-light text-[15px] text-earth leading-[160%] max-w-[95%]">
                Our clients engage us because the matters they face are too
                consequential for rigid institutional processes and too complex
                for any single advisor. We operate with a permanent obligation
                of confidentiality — not because it is expected, but because the
                work demands it. The details of our engagements, our client
                relationships, and the outcomes we achieve are never disclosed.
              </p>
              <p className="font-mono uppercase font-light text-[13px] text-clementine tracking-[1px] leading-[120%] max-w-[95%]">
                This is not a feature <br /> of our service. It is the
                foundation of it.
              </p>
            </div>
          </div>
        </div>
      </div>

      <SectionHeader number={4} label="INDUSTRIES" />

      <IndustriesList />

      <SectionHeader number={5} label="PRESENCE" />

      <PresenceList />

      <div
        className="relative w-screen left-1/2 -translate-x-1/2 border-t"
        style={{
          background: "linear-gradient(90deg, #C5CAAA 0%, #25211B 100%)",
        }}
      >
        <div className="flex items-center">
          <div className="flex justify-center items-center">
            <span className="ml-6 mr-6 w-1.5 h-1.5 bg-clementine" />
          </div>
          <span className="w-px bg-coffee/6 self-stretch" />

          <Link
            href={"/contact"}
            className="leading-[130%] font-medium px-8 py-3"
          >
            Request an Introduction →
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
