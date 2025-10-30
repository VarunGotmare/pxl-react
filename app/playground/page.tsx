"use client";

import { useState } from "react";
import Split from "react-split";
import { LiveProvider } from "react-live";
import { Sparkles } from "lucide-react";
import ChallengePanel from "@/components/ChallengePanel";
import CodeEditor from "@/components/CodeEditor";
import PreviewPanel from "@/components/PreviewPanel";
import Navbar from "@/components/Navbar";

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
  const [code, setCode] = useState<string>(challenge.starterCode);

  const handleSubmit = () => {
    const preview = document.getElementById("preview-area");
    if (!preview) return;
    const html = preview.innerHTML.trim();

    if (
      html.includes("Click Me") &&
      html.includes("blue") &&
      html.includes("white")
    ) {
      alert("✅ Challenge Passed!");
    } else {
      alert("❌ Try again!");
    }
  };

  return (
    <main className="h-screen w-screen bg-[#0a0a0a] text-gray-200 overflow-hidden flex flex-col">
      {/* 🌈 Navbar */}
      <Navbar />

      {/* 🧩 Split Playground */}
      <div className="flex-1 flex flex-col p-3">
        <Split
          className="flex h-full"
          sizes={[65, 35]}
          minSize={[400, 300]}
          gutterSize={6}
          direction="horizontal"
          cursor="col-resize"
          gutterStyle={() => ({
            backgroundColor: "#1a1a1a",
            width: "6px",
            borderRadius: "3px",
          })}
        >
          {/* LEFT: Code Editor */}
          <LiveProvider code={code}>
            <CodeEditor code={code} setCode={setCode} handleSubmit={handleSubmit} />
          </LiveProvider>

          {/* RIGHT: Challenge + Preview */}
          <Split
            className="flex flex-col h-full"
            sizes={[55, 45]}
            minSize={[200, 120]}
            gutterSize={6}
            direction="vertical"
            cursor="row-resize"
            gutterStyle={() => ({
              backgroundColor: "#1a1a1a",
              height: "6px",
              borderRadius: "3px",
            })}
          >
            <ChallengePanel challenge={challenge} />
            <LiveProvider code={code}>
              <PreviewPanel code={code} />
            </LiveProvider>
          </Split>
        </Split>
      </div>
    </main>
  );
}
