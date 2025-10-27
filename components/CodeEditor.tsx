"use client";

import { LiveEditor, LiveError } from "react-live";

interface CodeEditorProps {
  code: string;
  setCode: (val: string) => void;
  handleSubmit: () => void;
}

export default function CodeEditor({ code, setCode, handleSubmit }: CodeEditorProps) {
  return (
    <div className="flex flex-col h-full p-3">
      <div className="relative flex-1 bg-[#121212]/95 rounded-2xl border border-[#2a2a2a] shadow-inner shadow-black/40 overflow-hidden backdrop-blur-md flex flex-col">
        {/* --- Header Bar --- */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#2a2a2a] bg-[#181818]/90 rounded-t-2xl text-gray-300 font-mono">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 bg-red-500 rounded-full shadow-sm shadow-red-500/30"></span>
              <span className="w-3.5 h-3.5 bg-yellow-400 rounded-full shadow-sm shadow-yellow-400/30"></span>
              <span className="w-3.5 h-3.5 bg-green-500 rounded-full shadow-sm shadow-green-500/30"></span>
            </div>
            <span className="ml-4 text-sm font-semibold tracking-wide text-gray-100">
              code.jsx
            </span>
          </div>

          <div className="text-xs text-gray-500 font-light select-none">
            React Component
          </div>
        </div>

        {/* --- Code Editor --- */}
        <div className="flex-1 overflow-auto">
          <LiveEditor
            onChange={(val) => setCode(val || "")}
            className="flex-1 font-mono text-[13px] leading-relaxed"
            style={{
              backgroundColor: "#121212",
              color: "#e2e8f0",
              minHeight: "100%",
              padding: "1.25rem",
            }}
          />
        </div>

        {/* --- Bottom Bar --- */}
        <div className="flex justify-end items-center gap-3 px-5 py-3 border-t border-[#2a2a2a] bg-[#181818]/80 rounded-b-2xl">
          <LiveError className="text-red-400 text-sm flex-1" />
          <button
            onClick={handleSubmit}
            className="px-5 py-2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] rounded-lg text-white font-semibold text-sm transition-all duration-300 shadow-lg shadow-blue-900/30"
          >
            Submit Challenge
          </button>
        </div>
      </div>
    </div>
  );
}
