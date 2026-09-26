import { forwardRef } from "react";
import type { MbtiType } from "@/data/mbtiTypes";

interface ResultCardProps {
  type: MbtiType;
}

export const ResultCard = forwardRef<HTMLDivElement, ResultCardProps>(
  function ResultCard({ type }, ref) {
    return (
      <div
        ref={ref}
        className="w-full rounded-card p-8 text-center text-white shadow-lg"
        style={{ backgroundColor: type.color }}
      >
        <p className="text-sm font-medium opacity-80">당신의 유형은</p>
        <h1 className="mt-2 text-5xl font-extrabold tracking-wide">{type.code}</h1>
        <p className="mt-2 text-lg font-semibold">{type.nickname}</p>
        <p className="mt-4 text-sm leading-relaxed opacity-90">{type.description}</p>
      </div>
    );
  }
);
