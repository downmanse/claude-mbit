import type { Question } from "@/data/questions";

interface QuestionCardProps {
  question: Question;
  onSelect: (trait: string) => void;
}

export function QuestionCard({ question, onSelect }: QuestionCardProps) {
  return (
    <div className="w-full">
      <h2 className="mb-6 text-center text-lg font-bold leading-relaxed text-gray-800 sm:text-xl">
        {question.text}
      </h2>
      <div className="flex flex-col gap-3">
        <button
          type="button"
          onClick={() => onSelect(question.optionA.trait)}
          className="min-h-[56px] w-full rounded-card border border-brand-100 bg-white px-5 py-4 text-left text-base font-medium text-gray-700 shadow-sm transition hover:border-brand-400 hover:bg-brand-50 active:scale-[0.99]"
        >
          {question.optionA.text}
        </button>
        <button
          type="button"
          onClick={() => onSelect(question.optionB.trait)}
          className="min-h-[56px] w-full rounded-card border border-brand-100 bg-white px-5 py-4 text-left text-base font-medium text-gray-700 shadow-sm transition hover:border-brand-400 hover:bg-brand-50 active:scale-[0.99]"
        >
          {question.optionB.text}
        </button>
      </div>
    </div>
  );
}
