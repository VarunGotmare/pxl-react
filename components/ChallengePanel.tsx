interface ChallengeProps {
  challenge: {
    title: string;
    description: string;
  };
}

export default function ChallengePanel({ challenge }: ChallengeProps) {
  return (
    <div className="flex flex-col h-full p-3">
      <div className="flex-1 bg-[#121212]/90 rounded-2xl border border-[#2a2a2a] shadow-inner shadow-black/40 backdrop-blur-sm p-6 overflow-y-auto">
        <h1 className="text-2xl font-semibold text-[#4ea1ff] mb-4 tracking-tight">
          {challenge.title}
        </h1>
        <pre className="whitespace-pre-wrap text-gray-400 text-sm leading-relaxed font-sans">
          {challenge.description}
        </pre>
      </div>
    </div>
  );
}
