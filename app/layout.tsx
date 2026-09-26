import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "나의 MBTI 찾기",
  description: "12개 질문, 3분이면 충분해요. 나의 MBTI 유형을 확인해보세요.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <main className="mx-auto flex min-h-screen w-full max-w-[560px] flex-col items-center px-4 py-8">
          {children}
        </main>
      </body>
    </html>
  );
}
