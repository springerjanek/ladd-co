"use client";

import Image from "next/image";
import logo from "../public/o bg.png";
import { useRef, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContentNoOverlay,
  DialogTrigger,
} from "@/components/ui/dialog";
import Link from "next/link";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  const pathname = usePathname();

  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!navRef.current) return;

    const observer = new ResizeObserver(() => {
      setNavHeight(navRef.current!.offsetHeight);
    });

    observer.observe(navRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <header className="font-heading relative z-50">
      <div ref={navRef}>
        <div className="flex justify-between items-center mx-2 my-3">
          <Link href="/">
            <Image className="w-36" alt="Logo" src={logo} loading="eager" />
          </Link>
          {/* DESKTOP */}
          <div className="hidden xl:flex items-center gap-10">
            <nav className="flex gap-6 text-[13px] uppercase font-mono text-earth">
              {["About", "Services", "Clients", "Industries", "Presence"].map(
                (item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-clementine transition-colors"
                  >
                    {item}
                  </a>
                ),
              )}
              <a
                href="#"
                className="font-mono font-medium tracking-[1px] text-[13px]"
              >
                CLIENT LOGIN
              </a>
            </nav>
          </div>

          {/* MOBILE */}
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button
                aria-label="menu"
                variant="ghost"
                size="icon"
                className="flex flex-col gap-1 mr-3 cursor-pointer xl:hidden"
              >
                <span className="block w-4 h-px bg-coffee" />{" "}
                <span className="block w-4 h-px bg-coffee" />{" "}
                <span className="block w-4 h-px bg-clementine" />{" "}
              </Button>
            </DialogTrigger>

            <DialogContentNoOverlay
              className={cn(
                "fixed left-0 right-0 bottom-0 mt-0.5 z-40 bg-olive",
                "data-[state=open]:animate-in data-[state=closed]:animate-out",
                "data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0",
                "data-[state=open]:slide-in-from-top-2 data-[state=closed]:slide-out-to-top-2",
                "duration-300 ease-out",
              )}
              style={{
                top: navHeight + 9,
                transform: "none",
              }}
            >
              {/* MOBILE MENU PANEL */}
              <div className="px-6 py-6 flex flex-col overflow-y-auto">
                <nav className="flex flex-col items-center gap-6 text-[15px] font-light">
                  <p className="text-earth font-mono uppercase text-[13px]">
                    Firm
                  </p>

                  {[
                    "About",
                    "Services",
                    "Clients",
                    "Industries",
                    "Presence",
                  ].map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="hover:text-clementine transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </nav>

                <div className="flex flex-col items-center pt-8 text-center">
                  <p className="text-earth font-mono uppercase text-[13px]">
                    Contact
                  </p>

                  <a
                    href="mailto:office@laddco.com"
                    className="font-light pt-6 pb-4 hover:text-clementine"
                  >
                    office@laddco.com
                  </a>

                  <div className="h-px bg-coffee/10 w-full" />

                  <Button
                    variant="ghost"
                    className="font-light mt-6 font-mono text-[13px]"
                  >
                    CLIENT LOGIN
                  </Button>
                </div>
              </div>
            </DialogContentNoOverlay>
          </Dialog>
        </div>

        {/* GRADIENT BAR */}
        <div className="relative w-screen left-1/2 -translate-x-1/2 border-t  xl:border-b-0">
          <div className="absolute inset-0 xl:mx-[50px] 2xl:mx-[200px]">
            {/* closed */}
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                open ? "opacity-0" : "opacity-100",
              )}
              style={{
                background:
                  "linear-gradient(to right, var(--color-olive) 0%, rgba(197,202,170,0.4) 60%, transparent 100%)",
              }}
            />

            {/* open */}
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-500",
                open ? "opacity-100" : "opacity-0",
              )}
              style={{
                background: "linear-gradient(90deg, #C5CAAA 0%, #25211B 100%)",
              }}
            />
          </div>

          {pathname !== "/contact" && pathname !== "/legal" && (
            <div className="xl:mx-[50px] 2xl:mx-[200px]">
              <div className="relative flex items-center px-1.5 xl:px-7.5 py-3">
                <span className="w-1.5 h-1.5 bg-clementine mr-3" />

                <Link
                  href="/contact"
                  className={cn(
                    "transition-all duration-200 xl:ml-10",
                    open ? "ml-6 font-medium" : "ml-3",
                  )}
                >
                  Request an Introduction →
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
