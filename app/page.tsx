import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center text-center">
      <div className="mb-10 grid grid-cols-4 gap-2">
        {["ISTJ", "ISFJ", "INFJ", "INTJ", "ISTP", "ISFP", "INFP", "INTP", "ESTP", "ESFP", "ENFP", "ENTP", "ESTJ", "ESFJ", "ENFJ", "ENTJ"].map(
          (code) => (
            <span
              key={code}
              className="rounded-lg bg-white/70 px-2 py-1 text-[11px] font-semibold text-brand-600 shadow-sm"
            >
              {code}
            </span>
          )
        )}
      </div>

      <h1 className="text-2xl font-extrabold text-gray-800 sm:text-3xl">나의 MBTI 찾기</h1>
      <p className="mt-3 text-sm text-gray-500">12개 질문, 3분이면 충분해요</p>

      <Link
        href="/test"
        className="mt-10 min-h-[56px] w-full max-w-xs rounded-card bg-brand-500 px-6 py-4 text-lg font-bold text-white shadow-md transition hover:bg-brand-600"
      >
        테스트 시작하기
      </Link>

      <Link href="/stats" className="mt-4 text-sm font-medium text-gray-500 underline">
        지금까지의 통계 보기
      </Link>
    </div>
  );
}
