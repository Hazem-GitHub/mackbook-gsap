import { create } from "zustand";

export const useMacBookStore = create<{ color: string, size: string, setColor: (color: string) => void, setSize: (size: string) => void, reset: () => void }>((set) => ({
    color: "#2e2c2e",
    size: "16",
    setColor: (color: string) => set({ color }),
    setSize: (size: string) => set({ size }),
    reset: () => set({ color: "#2e2c2e", size: "16" }),
}));