import { create } from "zustand";

interface TestState {
  answers: string[];
  currentIndex: number;
  answerAt: (index: number, trait: string) => void;
  goToPrevious: () => void;
  reset: () => void;
}

export const useTestStore = create<TestState>((set) => ({
  answers: [],
  currentIndex: 0,
  answerAt: (index, trait) =>
    set((state) => {
      const answers = [...state.answers];
      answers[index] = trait;
      return { answers, currentIndex: index + 1 };
    }),
  goToPrevious: () =>
    set((state) => ({
      currentIndex: Math.max(0, state.currentIndex - 1),
    })),
  reset: () => set({ answers: [], currentIndex: 0 }),
}));
