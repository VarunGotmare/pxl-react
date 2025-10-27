"use client";

import { useState } from "react";
import Split from "react-split";
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";

const challenge = {
  title: "Blue Button",
  description: `
Create a button with the text "Click Me" and style it with a blue background and white text.

Requirements:
- The button text should be "Click Me"
- Background color must be blue
- Text color must be white
- Rounded corners and padding
  `,
  starterCode: `() => (
  <button style={{
    backgroundColor: 'blue',
    color: 'white',
    border: 'none',
    borderRadius: '6px',
    padding: '10px 16px'
  }}>
    Click Me
  </button>
)`,
};

export default function Playground() {
  const [code, setCode] = useState(challenge.starterCode);

  const handleSubmit = () => {
    const preview = document.getElementById("preview-area");
    if (!preview) return;
    const html = preview.innerHTML.trim();
    if (html.includes("Click Me")) {
      alert("✅ Challenge Passed!");
    } else {
      alert("❌ Try again!");
    }
  };

  return (
    <main className="h-screen w-screen bg-[#000000] text-gray-200 overflow-hidden flex items-center justify-center">
      <div className="w-[96vw] h-[92vh] rounded-3xl bg-gradient-to-b from-[#0a0a0a] to-[#111111] shadow-[0_0_60px_rgba(0,0,0,0.8)] border border-[#1f1f1f] overflow-hidden backdrop-blur-md">
        <Split
          className="flex h-full"
          sizes={[33, 67]}
          minSize={[250, 400]}
          gutterSize={10}
          direction="horizontal"
        >
          {/* LEFT PANEL */}
          <div className="p-6 m-3 bg-[#121212]/90 rounded-2xl border border-[#2a2a2a] shadow-inner shadow-black/40 backdrop-blur-sm flex flex-col overflow-y-auto">
            <h1 className="text-2xl font-semibold text-[#4ea1ff] mb-4 tracking-tight">
              {challenge.title}
            </h1>
            <pre className="whitespace-pre-wrap text-gray-400 text-sm leading-relaxed font-sans">
              {challenge.description}
            </pre>
          </div>

          {/* RIGHT SIDE */}
          <Split
            className="flex flex-col h-full"
            sizes={[65, 35]}
            minSize={[200, 100]}
            gutterSize={10}
            direction="vertical"
          >
            {/* CODE EDITOR */}
            <div className="m-3 bg-[#121212]/90 rounded-2xl border border-[#2a2a2a] shadow-inner shadow-black/40 flex flex-col overflow-hidden backdrop-blur-sm">
              <div className="px-5 py-3 border-b border-[#2a2a2a] text-xs text-gray-400 font-mono bg-[#1a1a1a]/80 flex items-center gap-2 rounded-t-2xl">
                <div className="flex gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="ml-4 opacity-60">code.jsx</span>
              </div>

              <LiveProvider code={code}>
                <LiveEditor
                  onChange={(val) => setCode(val || "")}
                  className="flex-1 font-mono text-sm"
                  style={{
                    backgroundColor: "#121212",
                    color: "#e2e8f0",
                    minHeight: "100%",
                    padding: "1rem",
                  }}
                />
                <LiveError className="text-red-400 p-2 text-sm bg-black/40 border-t border-[#2a2a2a]" />
              </LiveProvider>
            </div>

            {/* PREVIEW */}
            <div className="m-3 bg-[#121212]/90 rounded-2xl border border-[#2a2a2a] shadow-inner shadow-black/40 flex flex-col overflow-hidden backdrop-blur-sm">
              <div className="px-5 py-3 border-b border-[#2a2a2a] text-xs text-gray-400 font-mono bg-[#1a1a1a]/80 flex items-center gap-2 rounded-t-2xl">
                <div className="flex gap-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-400 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <span className="ml-4 opacity-60">preview.jsx</span>
              </div>

              <div
                id="preview-area"
                className="flex-1 flex items-center justify-center p-6 bg-gradient-to-b from-[#0d0d0d] to-[#141414]"
              >
                <LiveProvider code={code}>
                  <LivePreview />
                </LiveProvider>
              </div>

              <div className="text-center border-t border-[#2a2a2a] p-4 bg-[#1a1a1a]/80">
                <button
                  onClick={handleSubmit}
                  className="px-6 py-2 bg-gradient-to-r from-[#2563eb] to-[#1d4ed8] hover:from-[#3b82f6] hover:to-[#2563eb] rounded-lg text-white font-semibold transition-all duration-300 shadow-lg shadow-blue-900/30"
                >
                  Submit Challenge
                </button>
              </div>
            </div>
          </Split>
        </Split>
      </div>
    </main>
  );
}
