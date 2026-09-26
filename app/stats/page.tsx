"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { mbtiTypes } from "@/data/mbtiTypes";
import { StatsChart, type DistributionItem } from "@/components/StatsChart";

function StatsContent() {
  const searchParams = useSearchParams();
  const myType = searchParams.get("type");
  const [total, setTotal] = useState<number | null>(null);
  const [distribution, setDistribution] = useState<DistributionItem[]>([]);

  useEffect(() => {
    let isMounted = true;
    fetch("/api/results")
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return;
        setTotal(data.total);
        setDistribution(data.distribution);
      });
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="flex w-full flex-1 flex-col items-center pb-8">
      <p className="text-sm text-gray-500">지금까지</p>
      <p className="mt-1 text-2xl font-extrabold text-gray-800">
        {total === null ? "-" : total.toLocaleString()}명이 테스트했어요
      </p>

      {myType && mbtiTypes[myType] && (
        <p className="mt-2 rounded-full bg-brand-100 px-4 py-1 text-sm font-semibold text-brand-600">
          내 유형: {myType} ({mbtiTypes[myType].nickname})
        </p>
      )}

      <div className="mt-6 w-full">
        {distribution.length > 0 && (
          <StatsChart distribution={distribution} highlightCode={myType} />
        )}
      </div>

      <Link
        href="/test"
        className="mt-6 min-h-[48px] w-full max-w-xs rounded-card bg-brand-500 px-6 py-3 text-center text-base font-bold text-white shadow-md hover:bg-brand-600"
      >
        나도 테스트하기
      </Link>
    </div>
  );
}

export default function StatsPage() {
  return (
    <Suspense fallback={null}>
      <StatsContent />
    </Suspense>
  );
}
