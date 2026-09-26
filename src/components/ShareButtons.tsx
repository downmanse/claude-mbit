"use client";

import { useState } from "react";
import { toPng } from "html-to-image";

interface ShareButtonsProps {
  targetRef: React.RefObject<HTMLElement>;
  mbtiCode: string;
}

export function ShareButtons({ targetRef, mbtiCode }: ShareButtonsProps) {
  const [isSaving, setIsSaving] = useState(false);
  const [copyMessage, setCopyMessage] = useState<string | null>(null);

  const handleSaveImage = async () => {
    if (!targetRef.current) return;
    setIsSaving(true);
    try {
      const dataUrl = await toPng(targetRef.current, { pixelRatio: 2 });
      const link = document.createElement("a");
      link.download = `mbti-${mbtiCode}.png`;
      link.href = dataUrl;
      link.click();
    } finally {
      setIsSaving(false);
    }
  };

  const handleShare = async () => {
    const shareText = `나는 ${mbtiCode}! 당신의 MBTI는?`;
    const shareUrl = typeof window !== "undefined" ? window.location.href : "";

    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ title: "MBTI 테스트 결과", text: shareText, url: shareUrl });
        return;
      } catch {
        // 사용자가 공유를 취소한 경우 링크 복사로 대체한다.
      }
    }

    try {
      await navigator.clipboard.writeText(`${shareText} ${shareUrl}`);
      setCopyMessage("링크가 복사되었습니다");
      setTimeout(() => setCopyMessage(null), 2000);
    } catch {
      setCopyMessage("복사에 실패했습니다");
      setTimeout(() => setCopyMessage(null), 2000);
    }
  };

  return (
    <div className="mt-6 flex w-full flex-col gap-2">
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleSaveImage}
          disabled={isSaving}
          className="min-h-[48px] flex-1 rounded-card bg-brand-500 px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-600 disabled:opacity-60"
        >
          {isSaving ? "저장 중..." : "이미지로 저장"}
        </button>
        <button
          type="button"
          onClick={handleShare}
          className="min-h-[48px] flex-1 rounded-card border border-brand-400 px-4 py-3 text-sm font-bold text-brand-600 transition hover:bg-brand-50"
        >
          공유하기
        </button>
      </div>
      {copyMessage && (
        <p className="text-center text-xs text-gray-500" role="status">
          {copyMessage}
        </p>
      )}
    </div>
  );
}
