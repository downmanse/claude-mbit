import { mbtiTypes } from "@/data/mbtiTypes";

export interface DistributionItem {
  code: string;
  count: number;
  percentage: number;
}

interface StatsChartProps {
  distribution: DistributionItem[];
  highlightCode?: string | null;
}

export function StatsChart({ distribution, highlightCode }: StatsChartProps) {
  const maxPercentage = Math.max(...distribution.map((item) => item.percentage), 1);

  return (
    <div className="flex w-full flex-col gap-2.5">
      {distribution.map((item) => {
        const type = mbtiTypes[item.code];
        const widthPercent = Math.max((item.percentage / maxPercentage) * 100, 4);
        const isDimmed = Boolean(highlightCode) && item.code !== highlightCode;

        return (
          <div key={item.code} className="flex items-center gap-3" title={type?.nickname}>
            <span className="w-12 shrink-0 text-sm font-bold text-gray-700">{item.code}</span>
            <div className="h-5 flex-1 overflow-hidden rounded-full bg-white/60">
              <div
                className="h-full rounded-full transition-all duration-500"
                style={{
                  width: `${widthPercent}%`,
                  backgroundColor: type?.color ?? "#8b5cf6",
                  opacity: isDimmed ? 0.35 : 1,
                }}
              />
            </div>
            <span className="w-10 shrink-0 text-right text-xs font-medium text-gray-500">
              {item.percentage}%
            </span>
          </div>
        );
      })}
    </div>
  );
}
