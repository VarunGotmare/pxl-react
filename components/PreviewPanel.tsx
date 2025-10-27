"use client";

import { LivePreview } from "react-live";

interface PreviewPanelProps {
  code: string;
}

export default function PreviewPanel({ code }: PreviewPanelProps) {
  return (
    <div className="flex flex-col h-full p-3">
      <div className="flex-1 bg-[#121212]/95 rounded-2xl border border-[#2a2a2a] shadow-inner shadow-black/40 overflow-hidden backdrop-blur-md flex flex-col">
        {/* --- Header Bar --- */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-[#2a2a2a] bg-[#181818]/90 rounded-t-2xl text-gray-300 font-mono">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 bg-red-500 rounded-full shadow-sm shadow-red-500/30"></span>
              <span className="w-3.5 h-3.5 bg-yellow-400 rounded-full shadow-sm shadow-yellow-400/30"></span>
              <span className="w-3.5 h-3.5 bg-green-500 rounded-full shadow-sm shadow-green-500/30"></span>
            </div>
            <span className="ml-4 text-sm font-semibold tracking-wide text-gray-100">
              preview.jsx
            </span>
          </div>

          <div className="text-xs text-gray-500 font-light select-none">
            Output Preview
          </div>
        </div>

        {/* --- Live Preview Area --- */}
        <div
          id="preview-area"
          className="flex-1 flex items-center justify-center bg-gradient-to-b from-[#0d0d0d] to-[#141414] p-6"
        >
          <div className="w-full h-full flex items-center justify-center">
            <LivePreview />
          </div>
        </div>
      </div>
    </div>
  );
}
