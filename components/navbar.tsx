"use client";

import Image from "next/image";
import logo from "../public/o bg.png";
import { useState } from "react";
import { cn } from "@/lib/utils";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="font-heading flex flex-col justify-center relative z-20">
      <div className="flex justify-between items-center mx-1 my-2.5">
        <Image className="w-36" alt="Logo" src={logo} />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex flex-col gap-1 pr-3 cursor-pointer"
          aria-label="Toggle menu"
        >
          <span className="block w-4 h-px bg-coffee" />
          <span className="block w-4 h-px bg-coffee" />
          <span className="block w-4 h-px bg-clementine" />
        </button>
      </div>

      <div className="relative w-screen left-1/2 -translate-x-1/2 border-t border-b">
        <div
          style={{
            background:
              "linear-gradient(to right, var(--color-olive) 0%, rgba(197,202,170,0.4) 60%, transparent 100%)",
          }}
          className="relative flex items-center overflow-hidden px-5 py-2"
        >
          <span className="absolute left-[5px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-clementine" />
          <span className="absolute right-[5px] top-1/2 -translate-y-1/2 w-1.5 h-1.5 bg-clementine" />
          <p className="mx-3 leading-[130%]">Request an Introduction →</p>
        </div>
      </div>

      <div
        className={cn(
          "-mt-1 w-screen left-1/2 -translate-x-1/2 relative bg-olive transition-all duration-300 ease-out overflow-hidden",
          isMenuOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 py-6">
          <nav className="text-coffee font-light flex flex-col items-center gap-6 font-sans text-[15px]">
            <a
              href="#"
              className="text-earth font-mono uppercase tracking-[1px] text-[13px] hover:text-clementine transition-colors"
            >
              Firm
            </a>
            <a href="#" className=" hover:text-clementine transition-colors">
              About
            </a>
            <a href="#" className=" hover:text-clementine transition-colors">
              Services
            </a>
            <a href="#" className=" hover:text-clementine transition-colors">
              Clients
            </a>
            <a href="#" className=" hover:text-clementine transition-colors">
              Industries
            </a>
            <a href="#" className=" hover:text-clementine transition-colors">
              Presence
            </a>
          </nav>

          <div className="flex flex-col items-center text-center pt-8 space-y-6">
            <a
              href="#"
              className="text-earth font-mono uppercase tracking-[1px] text-[13px] hover:text-clementine transition-colors"
            >
              Contact
            </a>
            <a
              href="mailto:office@laddco.com"
              className="block text-[15px] font-sans font-light hover:text-clementine transition-colors"
            >
              office@laddco.com
            </a>
            <div className="h-px bg-coffee/6 w-full"></div>
            <div>
              <a
                href="#"
                className="inline-block font-mono text-[11px] tracking-wide border border-coffee/30 px-4 py-2 hover:border-clementine hover:text-clementine transition-colors"
              >
                CLIENT LOGIN
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
