"use client";

import { useState, useEffect } from "react";
import Split from "react-split";
import { LiveProvider } from "react-live";
import Navbar from "@/components/landing/Navbar";
import ChallengePanel from "@/components/ChallengePanel";
import CodeEditor from "@/components/CodeEditor";
import PreviewPanel from "@/components/PreviewPanel";

export default function Playground() {
  const [challenge, setChallenge] = useState<any>(null);
  const [code, setCode] = useState<string>("");

  // this fucker fetches a challenge everytime you load the page
  // this aint optimized might need a new approach later
  useEffect(() => {
    const fetchChallenge = async () => {
      try {
        const res = await fetch("/api/challenges", { cache: "no-store" });
        const data = await res.json();
        if (data.success && data.challenge) {
          setChallenge(data.challenge);
          setCode(data.challenge.starterCode || "");
        } else {
          console.error("No challenge found");
        }
      } catch (err) {
        console.error("Failed to fetch challenge:", err);
      }
    };

    fetchChallenge();
  }, []);

  const handleSubmit = () => {
    const preview = document.getElementById("preview-area");
    if (!preview) return;
    const html = preview.innerHTML.trim();

    // again this aint even implemented fix later
    if (html.includes("Click Me") && html.includes("blue") && html.includes("white")) {
      alert("✅ Challenge Passed!");
    } else {
      alert("❌ Try again!");
    }
  };

  if (!challenge) {
    return (
      <main className="h-screen w-screen bg-[#0a0a0a] text-gray-400 flex items-center justify-center">
        <div className="text-lg animate-pulse">Fetching challenge...</div>
      </main>
    );
  }

  return (
    <main className="h-screen w-screen bg-[#0a0a0a] text-gray-200 overflow-hidden flex flex-col">
      {/* cool navbar love it  */}
      <Navbar />

     {/* leetcode inspired playground  */}
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
          {/* editor  */}
          <LiveProvider code={code}>
            <CodeEditor code={code} setCode={setCode} handleSubmit={handleSubmit} />
          </LiveProvider>

          {/* challenge and preview  */}
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
            {/* info of challenge  */}
            <ChallengePanel challenge={challenge} />

            {/* live preview  */}
            <LiveProvider code={code}>
              <PreviewPanel code={code} />
            </LiveProvider>
          </Split>
        </Split>
      </div>
    </main>
  );
}
