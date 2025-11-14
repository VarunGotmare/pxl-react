"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/landing/Navbar";
import { Sparkles } from "lucide-react";
import { Victor_Mono } from "next/font/google";
import Footer from "@/components/landing/Footer";
import ColorBends from "@/components/landing/Bends";

const victorMono = Victor_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export default function LandingPage() {
  const router = useRouter();

  return (
    <main
      className={`${victorMono.className} relative h-screen w-full bg-transparent text-gray-200 flex flex-col`}
    >
      <Navbar />

      {/* anime  */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 opacity-90">
        <ColorBends
  colors={["#ff5c7a", "#8a5cff", "#00ffd1"]}
  rotation={30}
  speed={0.3}
  scale={1}
  frequency={1.7}
  warpStrength={1.2}
  mouseInfluence={0.8}
  parallax={0.6}
  noise={0.08}
  transparent
/>
      </div>

      {/* main content  */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 
                     text-[#FAD6FF]
                     drop-shadow-[0_0_10px_rgba(250,214,255,0.3)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to{" "}
          <span className="text-[#D9C4FF]">
            <span className="not-italic">pxl</span>
            <span className="italic">-react</span>
          </span>{" "}
          ✨
        </motion.h1>

        <motion.p
          className="text-gray-300 max-w-md text-sm md:text-base mb-10 
                     leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Practice React. Build components. Level up your skills while having fun.
        </motion.p>

        <motion.button
          onClick={() => router.push("/playground")}
          className="flex items-center gap-2 px-8 py-3 
                     bg-white/10 border border-white/20 
                     text-white/90 
                     font-semibold text-sm rounded-full 
                     shadow-[0_4px_12px_rgba(0,0,0,0.2)]
                     backdrop-blur-sm
                     hover:bg-white/20 hover:scale-105
                     transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Sparkles size={18} className="text-white/80" />
          Start Challenges
        </motion.button>
      </div>

      <Footer />
    </main>
  );
}
