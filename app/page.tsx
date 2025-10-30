"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import { Sparkles } from "lucide-react";
import { Victor_Mono } from "next/font/google";

const victorMono = Victor_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

export default function LandingPage() {
  const router = useRouter();

  return (
    <main
      className={`${victorMono.className} h-screen w-full bg-[#0b0b0f] text-gray-100 flex flex-col`}
    >
      {/* 💄 Navbar */}
      <Navbar />

      {/* 🌙 Center Content */}
      <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-extrabold mb-4 text-pink-400 drop-shadow-[0_0_15px_rgba(255,105,180,0.5)]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to{" "}
          <span className="text-purple-300">
            <span className="not-italic">pxl</span>
            <span className="italic">-react</span>
          </span>{" "}
          ✨
        </motion.h1>

        <motion.p
          className="text-gray-400 max-w-md text-sm md:text-base mb-10"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Code cute. Debug fierce. 💅  
          Build, test, and vibe your way through React challenges under the neon lights.
        </motion.p>

        <motion.button
          onClick={() => router.push("/playground")}
          className="flex items-center gap-2 px-8 py-4 bg-pink-500/20 border border-pink-400/40 text-pink-300 font-semibold text-sm rounded-full shadow-[0_0_10px_rgba(255,105,180,0.3)] hover:bg-pink-500/30 hover:scale-105 hover:shadow-[0_0_20px_rgba(255,105,180,0.5)] transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Sparkles size={18} className="text-pink-300 animate-pulse" />
          Start Challenges 💖
        </motion.button>
      </div>

      {/* 🌸 Footer */}
      <footer className="py-4 text-center text-xs text-gray-500 border-t border-pink-400/20 backdrop-blur-md bg-black/40">
        © {new Date().getFullYear()}{" "}
        <span className="text-pink-300 font-semibold">
          <span className="not-italic">pxl</span>
          <span className="italic">-react</span>
        </span>{" "}
        — Made with &lt;3
      </footer>
    </main>
  );
}
