"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { Victor_Mono } from "next/font/google";

const victorMono = Victor_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export default function Navbar() {
  return (
    <nav
      className="mx-auto mt-4 w-[90%] max-w-6xl flex items-center justify-between
                 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl
                 py-3 px-6 shadow-lg select-none"
    >
    
      <Link href="/" className="flex items-center gap-3 group relative">
        {/* aura  */}
        <div className="absolute -inset-3 rounded-xl bg-purple-500/20 blur-xl opacity-60 group-hover:opacity-90 transition-all"></div>

        {/* logoooo */}
        <Image
          src="/pxl-react.png"
          alt="PxlReact Logo"
          width={34}
          height={34}
          className="rounded-md relative z-10 transition-transform duration-200 group-hover:rotate-3 group-hover:scale-105"
        />

        {/* title  */}
        <h1
          className={`${victorMono.className} text-[16px] font-medium tracking-wide text-gray-200 relative z-10`}
        >
          <span className="text-gray-200">pxl-</span>
          <span className="italic text-gray-200">react</span>
        </h1>
      </Link>

      {/* star button  */}
      {/* TODO: think of a better design */}
      <a
        href="https://github.com/VarunGotmare/pxl-react"
        target="_blank"
        className="flex items-center gap-2 px-5 py-2.5 rounded-full
             bg-white/8 border border-white/15 backdrop-blur-md
             text-gray-200 font-semibold text-sm
             shadow-md hover:shadow-lg hover:bg-white/10
             transition-all duration-300 active:scale-95"
      >
        <Star
          size={16}
          className="text-yellow-300 drop-shadow-[0_0_4px_rgba(255,255,0,0.3)]"
        />
        <span>Star on GitHub</span>
      </a>
    </nav>
  );
}
