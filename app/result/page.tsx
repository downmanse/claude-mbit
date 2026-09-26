"use client";

import { Suspense, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { mbtiTypes } from "@/data/mbtiTypes";
import { ResultCard } from "@/components/ResultCard";
import { ResultDetails } from "@/components/ResultDetails";
import { ShareButtons } from "@/components/ShareButtons";

function ResultContent() {
  const searchParams = useSearchParams();
  const code = searchParams.get("type") ?? "";
  const type = mbtiTypes[code];
  const cardRef = useRef<HTMLDivElement>(null);

  if (!type) {
    return (
      <div className="flex w-full flex-1 flex-col items-center justify-center gap-4 text-center">
        <p className="text-gray-600">결과를 찾을 수 없습니다.</p>
        <Link href="/test" className="font-bold text-brand-600 underline">
          테스트 다시 하기
        </Link>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center pb-8">
      <ResultCard ref={cardRef} type={type} />
      <ResultDetails type={type} />
      <ShareButtons targetRef={cardRef} mbtiCode={type.code} />

      <div className="mt-8 flex w-full gap-3">
        <Link
          href="/test"
          className="min-h-[48px] flex-1 rounded-card border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-600 hover:bg-white/60"
        >
          다시 테스트하기
        </Link>
        <Link
          href={`/stats?type=${type.code}`}
          className="min-h-[48px] flex-1 rounded-card border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-600 hover:bg-white/60"
        >
          전체 통계 보기
        </Link>
      </div>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense fallback={null}>
      <ResultContent />
    </Suspense>
  );
}
