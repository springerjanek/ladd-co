import footerLogo from "../public/footerLogo.jpg";
import Image from "next/image";
import xIcon from "../public/xIcon.png";
import linkedinIcon from "../public/linkedinIcon.png";

export const Footer = () => {
  return (
    <>
      <div className="border border-paper/10 p-6 relative w-screen bg-coffee left-1/2 -translate-x-1/2">
        <div className="flex flex-col gap-6">
          <Image
            alt="Footer Logo"
            className="w-1/2 -ml-3 -mb-3"
            src={footerLogo}
          />
          <p className="text-clementine text-[13px] font-mono uppercase">
            Advisory and execution for families, principals, and private
            institutions with interests that demand discretion.
          </p>
          <p className="text-paper tracking-[1px] leading-[160%] text-[13px] font-mono uppercase">
            client login
          </p>
        </div>
        <div className="flex gap-6 mt-12">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X (Twitter)"
          >
            <Image alt="X icon" width={20} height={20} src={xIcon} />
          </a>
          <a
            href="https://linkedin.com/company/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Image
              alt="LinkedIn icon"
              width={20}
              height={20}
              src={linkedinIcon}
            />
          </a>
        </div>
      </div>

      <div className="border border-paper/10 p-6 relative w-screen bg-coffee left-1/2 -translate-x-1/2">
        <div className="text-paper/50 font-sans font-light text-[15px] flex justify-between pr-6">
          <div>
            <h3 className="text-earth text-[13px] font-mono tracking-[1px] mb-4">
              FIRM
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-clementine transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clementine transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clementine transition-colors">
                  Clients
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clementine transition-colors">
                  Industries
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-clementine transition-colors">
                  Presence
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col">
            <h3 className="text-earth text-[13px] font-mono tracking-[1px] mb-4">
              CONTACT
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:office@laddco.com"
                  className="hover:text-clementine transition-colors"
                >
                  office@laddco.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <h3 className="text-earth text-[13px] font-mono tracking-[1px] mb-4">
                OFFICES
              </h3>
              <ul className="space-y-2">
                <li>New York</li>
                <li>Palm Beach</li>
                <li>George Town</li>
                <li>London</li>
                <li>Zürich</li>
                <li>Dubai</li>
                <li>Singapore</li>
                <li>Hong Kong</li>
                <li>Sydney</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="leading-[120%] tracking-[1px] text-paper/50 text-[13px] font-mono font-light border border-paper/10 p-6 relative w-screen bg-coffee left-1/2 -translate-x-1/2">
        <div className="flex flex-col gap-8">
          <div className="w-full">
            <h3 className="mb-4">LEGAL</h3>
            <p className="">
              COPYRIGHT © 2026 LADD & CO., ALL RIGHTS RESERVED.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
