import { create } from "zustand";

export const useMacBookStore = create<{ color: string, size: string, texture: string, setColor: (color: string) => void, setSize: (size: string) => void, setTexture: (texture: string) => void, reset: () => void }>((set) => ({
    color: "#2e2c2e",
    size: "16",
    texture: '/videos/feature-1.mp4',
    
    setColor: (color: string) => set({ color }),
    setSize: (size: string) => set({ size }),
    setTexture: (texture: string) => set({ texture }),

    reset: () => set({ color: "#2e2c2e", size: "16", texture: '/videos/feature-1.mp4' }),
}));