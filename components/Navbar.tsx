"use client";

import Image from "next/image";
import { Victor_Mono } from "next/font/google";

const victorMono = Victor_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export default function Navbar() {
  return (
    <nav
      className="mx-auto mt-3 w-[90%] max-w-5xl flex items-center justify-center
      bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl shadow-lg
      py-3 px-6 select-none"
    >
      <div className="flex items-center gap-3">
        {/* Logo */}
        <Image
          src="/pxl-react.png"
          alt="PxlReact Logo"
          width={33}
          height={33}
          className="rounded-md"
        />

        {/* Title */}
        <h1
          className={`${victorMono.className} text-[15px] font-medium tracking-wide text-gray-200`}
        >
          <span className="text-gray-200">pxl-</span>
          <span className="italic text-gray-200">react</span>
        </h1>
      </div>
    </nav>
  );
}
