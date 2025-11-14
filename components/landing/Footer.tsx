"use client";

export default function Footer() {
  return (
    <footer className="py-4 text-center text-xs text-gray-500 border-t border-pink-400/20 backdrop-blur-md bg-black/40">
        © {new Date().getFullYear()}{" "}
        <span className="text-pink-300 font-semibold">
          <span className="not-italic">pxl</span>
          <span className="italic">-react</span>
        </span>{" "}
        — Made with &lt;3
      </footer>
  );
}