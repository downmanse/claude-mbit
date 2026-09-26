export interface AxisScore {
  ei: number;
  sn: number;
  tf: number;
  jp: number;
}

const AXIS_TRAIT_MAP: Record<string, keyof AxisScore> = {
  E: "ei",
  I: "ei",
  S: "sn",
  N: "sn",
  T: "tf",
  F: "tf",
  J: "jp",
  P: "jp",
};

const POSITIVE_TRAIT: Record<keyof AxisScore, string> = {
  ei: "E",
  sn: "S",
  tf: "T",
  jp: "J",
};

const NEGATIVE_TRAIT: Record<keyof AxisScore, string> = {
  ei: "I",
  sn: "N",
  tf: "F",
  jp: "P",
};

/**
 * answers: 각 문항에서 선택한 trait(예: "E", "I", "S" ...)의 배열
 * 각 축에서 양(positive) 성향을 선택하면 +1, 음(negative) 성향을 선택하면 -1로 누적한다.
 * 동점일 경우 기본값으로 첫 번째 성향(E/S/T/J)을 우선한다 — PRD의 "가정" 사항.
 */
export function calculateMbti(answers: string[]): string {
  const score: AxisScore = { ei: 0, sn: 0, tf: 0, jp: 0 };

  for (const trait of answers) {
    const axis = AXIS_TRAIT_MAP[trait];
    if (!axis) continue;
    const delta = trait === POSITIVE_TRAIT[axis] ? 1 : -1;
    score[axis] += delta;
  }

  const code =
    (score.ei >= 0 ? POSITIVE_TRAIT.ei : NEGATIVE_TRAIT.ei) +
    (score.sn >= 0 ? POSITIVE_TRAIT.sn : NEGATIVE_TRAIT.sn) +
    (score.tf >= 0 ? POSITIVE_TRAIT.tf : NEGATIVE_TRAIT.tf) +
    (score.jp >= 0 ? POSITIVE_TRAIT.jp : NEGATIVE_TRAIT.jp);

  return code;
}

export function calculateAxisScores(answers: string[]): AxisScore {
  const score: AxisScore = { ei: 0, sn: 0, tf: 0, jp: 0 };
  for (const trait of answers) {
    const axis = AXIS_TRAIT_MAP[trait];
    if (!axis) continue;
    const delta = trait === POSITIVE_TRAIT[axis] ? 1 : -1;
    score[axis] += delta;
  }
  return score;
}
