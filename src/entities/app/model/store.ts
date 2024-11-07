import { create } from "zustand";

interface AppState {
  language: string;
  setLanguage: (language: string) => void;
  // Add other global states here as needed
}

export const useAppStore = create<AppState>((set) => ({
  language: "en", // default language
  setLanguage: (language) => set({ language }),
  // Initialize other global states here
}));
