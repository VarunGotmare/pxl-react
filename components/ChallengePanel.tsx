"use client";

import React from "react";
import { LiveProvider, LivePreview } from "react-live";

interface ChallengeProps {
  challenge: {
    title: string;
    description: string;
    targetCode?: string;
  };
}

export default function ChallengePanel({ challenge }: ChallengeProps) {
  return (
    <div className="flex flex-col h-full p-3">
      <div
        className="flex-1 bg-[#121212]/90 rounded-2xl border border-[#2a2a2a]
        shadow-inner shadow-black/40 backdrop-blur-sm p-6 overflow-y-auto"
      >
        {/* --- Title --- */}
        <h1
          className="text-2xl font-semibold mb-4 tracking-tight
          text-transparent bg-clip-text bg-gradient-to-r from-[#4ea1ff] to-[#6fd0ff]"
        >
          {challenge.title}
        </h1>

        {/* --- Description --- */}
        <pre
          className="whitespace-pre-wrap text-gray-300 text-sm leading-relaxed font-mono
          bg-[#181818]/80 p-4 rounded-xl border border-[#2a2a2a] shadow-inner shadow-black/30"
        >
          {challenge.description}
        </pre>

        {/* --- Target Output Preview --- */}
        <div className="mt-6 bg-[#181818]/70 rounded-xl p-4 border border-[#2a2a2a]">
          <h2 className="text-sm font-medium text-gray-400 mb-2">
            Target Output:
          </h2>

          <div
            id="target-preview"
            className="flex justify-center items-center py-3 min-h-[120px]"
          >
            {challenge.targetCode ? (
              <LiveProvider code={challenge.targetCode} scope={{ React }}>
                <div className="w-full h-full flex justify-center items-center">
                  <LivePreview />
                </div>
              </LiveProvider>
            ) : (
              <span className="text-gray-500 text-sm italic">
                (Preview not available)
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
