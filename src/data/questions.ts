export type Axis = "EI" | "SN" | "TF" | "JP";

export interface QuestionOption {
  text: string;
  trait: string;
}

export interface Question {
  id: number;
  axis: Axis;
  text: string;
  optionA: QuestionOption;
  optionB: QuestionOption;
}

export const questions: Question[] = [
  {
    id: 1,
    axis: "EI",
    text: "새로운 사람들과 만나는 모임에 가면?",
    optionA: { text: "먼저 말을 걸며 활기를 얻는다", trait: "E" },
    optionB: { text: "지켜보다가 필요할 때만 대화한다", trait: "I" },
  },
  {
    id: 2,
    axis: "EI",
    text: "주말을 보내는 방식으로 더 끌리는 쪽은?",
    optionA: { text: "친구들과 어울려 시간을 보낸다", trait: "E" },
    optionB: { text: "혼자만의 시간을 충분히 갖는다", trait: "I" },
  },
  {
    id: 3,
    axis: "EI",
    text: "생각을 정리하는 방식은?",
    optionA: { text: "말을 하면서 생각이 정리된다", trait: "E" },
    optionB: { text: "먼저 속으로 충분히 생각한 뒤 말한다", trait: "I" },
  },
  {
    id: 4,
    axis: "SN",
    text: "새로운 일을 배울 때 더 편한 방식은?",
    optionA: { text: "구체적인 사례와 단계별 설명", trait: "S" },
    optionB: { text: "전체적인 개념과 원리부터 이해", trait: "N" },
  },
  {
    id: 5,
    axis: "SN",
    text: "대화할 때 더 흥미로운 주제는?",
    optionA: { text: "실제로 있었던 구체적인 경험담", trait: "S" },
    optionB: { text: "가능성, 상상, 미래에 대한 이야기", trait: "N" },
  },
  {
    id: 6,
    axis: "SN",
    text: "문제를 해결할 때 더 의지하는 것은?",
    optionA: { text: "직접 경험하고 검증된 방법", trait: "S" },
    optionB: { text: "떠오르는 아이디어와 직관", trait: "N" },
  },
  {
    id: 7,
    axis: "TF",
    text: "결정을 내릴 때 더 중요하게 보는 것은?",
    optionA: { text: "논리적으로 맞는지, 효율적인지", trait: "T" },
    optionB: { text: "사람들의 감정과 관계에 미칠 영향", trait: "F" },
  },
  {
    id: 8,
    axis: "TF",
    text: "친구가 고민을 털어놓을 때 나는?",
    optionA: { text: "원인을 분석하고 해결책을 제시한다", trait: "T" },
    optionB: { text: "먼저 공감하고 마음을 다독인다", trait: "F" },
  },
  {
    id: 9,
    axis: "TF",
    text: "더 듣기 좋은 평가는?",
    optionA: { text: "\"참 논리적이고 객관적이다\"", trait: "T" },
    optionB: { text: "\"참 따뜻하고 배려심이 많다\"", trait: "F" },
  },
  {
    id: 10,
    axis: "JP",
    text: "여행을 갈 때 나는?",
    optionA: { text: "일정과 동선을 미리 계획해둔다", trait: "J" },
    optionB: { text: "일단 떠나서 그때그때 정한다", trait: "P" },
  },
  {
    id: 11,
    axis: "JP",
    text: "마감이 있는 일을 할 때 나는?",
    optionA: { text: "미리미리 끝내야 마음이 편하다", trait: "J" },
    optionB: { text: "마감 직전에 집중해서 끝낸다", trait: "P" },
  },
  {
    id: 12,
    axis: "JP",
    text: "책상이나 방 정리 상태는?",
    optionA: { text: "정해진 자리에 정돈되어 있다", trait: "J" },
    optionB: { text: "필요한 걸 그때그때 꺼내 쓴다", trait: "P" },
  },
];
