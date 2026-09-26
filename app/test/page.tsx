"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { questions } from "@/data/questions";
import { calculateMbti } from "@/lib/calculateMbti";
import { useTestStore } from "@/store/useTestStore";
import { ProgressBar } from "@/components/ProgressBar";
import { QuestionCard } from "@/components/QuestionCard";

export default function TestPage() {
  const router = useRouter();
  const { answers, currentIndex, answerAt, goToPrevious, reset } = useTestStore();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[currentIndex];

  const handleSelect = async (trait: string) => {
    answerAt(currentIndex, trait);

    const isLastQuestion = currentIndex === questions.length - 1;
    if (!isLastQuestion) return;

    const finalAnswers = [...answers];
    finalAnswers[currentIndex] = trait;

    setIsSubmitting(true);
    const mbtiCode = calculateMbti(finalAnswers);

    try {
      await fetch("/api/results", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code: mbtiCode }),
      });
    } catch {
      // 통계 저장 실패가 결과 표시를 막지 않도록 무시한다.
    } finally {
      reset();
      router.push(`/result?type=${mbtiCode}`);
    }
  };

  if (!currentQuestion) {
    return null;
  }

  return (
    <div className="flex w-full flex-1 flex-col justify-center gap-8">
      <div className="flex items-center gap-3">
        {currentIndex > 0 && (
          <button
            type="button"
            onClick={goToPrevious}
            aria-label="이전 문항으로"
            className="flex h-10 w-10 items-center justify-center rounded-full text-gray-500 hover:bg-white/60"
          >
            ←
          </button>
        )}
        <div className="flex-1">
          <ProgressBar current={isSubmitting ? questions.length : currentIndex} total={questions.length} />
        </div>
      </div>

      <QuestionCard question={currentQuestion} onSelect={handleSelect} />
    </div>
  );
}
