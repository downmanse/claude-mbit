import type { MbtiType } from "@/data/mbtiTypes";

interface ResultDetailsProps {
  type: MbtiType;
}

function Chip({ label, tone }: { label: string; tone: "strength" | "weakness" }) {
  const toneClass =
    tone === "strength"
      ? "bg-brand-50 text-brand-600"
      : "bg-gray-100 text-gray-600";
  return (
    <span className={`inline-block rounded-full px-3 py-1 text-sm font-medium ${toneClass}`}>
      #{label}
    </span>
  );
}

export function ResultDetails({ type }: ResultDetailsProps) {
  return (
    <div className="mt-6 flex w-full flex-col gap-6">
      <section>
        <h3 className="mb-2 text-base font-bold text-gray-800">특징</h3>
        <ul className="list-inside list-disc space-y-1 text-sm text-gray-600">
          {type.traits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-2 text-base font-bold text-gray-800">강점</h3>
        <div className="flex flex-wrap gap-2">
          {type.strengths.map((strength) => (
            <Chip key={strength} label={strength} tone="strength" />
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-2 text-base font-bold text-gray-800">약점</h3>
        <div className="flex flex-wrap gap-2">
          {type.weaknesses.map((weakness) => (
            <Chip key={weakness} label={weakness} tone="weakness" />
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-2 text-base font-bold text-gray-800">추천 직업</h3>
        <ul className="grid grid-cols-2 gap-2 text-sm text-gray-600">
          {type.recommendedJobs.map((job) => (
            <li key={job} className="rounded-lg bg-gray-50 px-3 py-2">
              {job}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
