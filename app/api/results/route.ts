import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import { mbtiCodes } from "@/data/mbtiTypes";

// MVP 단계에서는 Supabase 대신 로컬 JSON 파일로 결과를 집계한다 (PRD 7장 "가정" 참고, 추후 DB로 교체).
const DATA_FILE = path.join(process.cwd(), "data", "results.json");

type ResultCounts = Record<string, number>;

async function readCounts(): Promise<ResultCounts> {
  const raw = await fs.readFile(DATA_FILE, "utf-8");
  return JSON.parse(raw) as ResultCounts;
}

async function writeCounts(counts: ResultCounts): Promise<void> {
  await fs.writeFile(DATA_FILE, JSON.stringify(counts, null, 2), "utf-8");
}

function buildStats(counts: ResultCounts) {
  const total = mbtiCodes.reduce((sum, code) => sum + (counts[code] ?? 0), 0);
  const distribution = mbtiCodes
    .map((code) => {
      const count = counts[code] ?? 0;
      return {
        code,
        count,
        percentage: total > 0 ? Math.round((count / total) * 1000) / 10 : 0,
      };
    })
    .sort((a, b) => b.count - a.count);

  return { total, distribution };
}

export async function GET() {
  const counts = await readCounts();
  return NextResponse.json(buildStats(counts));
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const code: unknown = body?.code;

  if (typeof code !== "string" || !mbtiCodes.includes(code)) {
    return NextResponse.json({ error: "invalid mbti code" }, { status: 400 });
  }

  const counts = await readCounts();
  counts[code] = (counts[code] ?? 0) + 1;
  await writeCounts(counts);

  return NextResponse.json(buildStats(counts));
}
