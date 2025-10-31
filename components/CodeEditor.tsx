"use client";

import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Editor from "@monaco-editor/react";

interface CodeEditorProps {
  code: string;
  setCode: (val: string) => void;
  handleSubmit: () => void;
}

export default function CodeEditor({ code, setCode, handleSubmit }: CodeEditorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col h-full p-3"
    >
      <div
        className="relative flex-1 bg-[#121212]/90 rounded-2xl border border-[#2a2a2a]
        shadow-inner shadow-black/40 overflow-hidden backdrop-blur-sm flex flex-col"
      >
        {/* --- Header Bar --- */}
        <div
          className="flex items-center justify-between px-5 py-3.5 border-b border-[#2a2a2a]
          bg-[#181818]/90 rounded-t-2xl text-gray-200 font-mono"
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <span className="w-3.5 h-3.5 bg-pink-500 rounded-full shadow-sm shadow-pink-500/40"></span>
              <span className="w-3.5 h-3.5 bg-yellow-400 rounded-full shadow-sm shadow-yellow-400/40"></span>
              <span className="w-3.5 h-3.5 bg-green-400 rounded-full shadow-sm shadow-green-400/40"></span>
            </div>
            <span className="ml-4 text-sm font-semibold tracking-wide text-gray-300">
              code.jsx
            </span>
          </div>

          <div className="text-xs text-gray-500 font-light select-none">
            React Component
          </div>
        </div>

        {/* --- Monaco Code Editor --- */}
        <div className="flex-1 overflow-hidden">
          <Editor
            height="100%"
            defaultLanguage="javascript"
            theme="vs-dark"
            value={code}
            onChange={(val) => setCode(val || "")}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: "JetBrains Mono, monospace",
              automaticLayout: true,
              formatOnType: true,
              formatOnPaste: true,
              autoClosingBrackets: "always",
              autoIndent: "full",
              scrollBeyondLastLine: false,
              lineNumbers: "on",
              tabSize: 2,
              wordWrap: "on",
            }}
          />
        </div>

        {/* --- Bottom Bar --- */}
        <div
          className="flex justify-end items-center gap-3 px-5 py-3 border-t border-[#2a2a2a]
          bg-[#181818]/90 rounded-b-2xl"
        >
          <button
            onClick={handleSubmit}
            className="flex items-center gap-2 px-6 py-2.5 bg-pink-600 hover:bg-pink-700
            text-white font-bold text-sm rounded-full transition-all duration-300 shadow-md
            active:scale-95"
          >
            <Sparkles size={18} className="text-white" />
            Submit
          </button>
        </div>
      </div>
    </motion.div>
  );
}
