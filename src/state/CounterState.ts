import { create } from "zustand";

interface Counter {
  count: number;
  increaseCount: () => void;
  decreaseCount: () => void;
}

export const CounterState = create<Counter>()((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  decreaseCount: () =>
    set((state) => ({ count: Math.max(state.count - 1, 0) })),
}));
