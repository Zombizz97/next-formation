import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { WebsiteDocument } from "@/prismicio-types";

type PinsState = {
  pinnedWebsites: WebsiteDocument[];
  isPinned: (uid?: string) => boolean;
  pinWebsite: (website: WebsiteDocument) => void;
  unpinWebsite: (uid: string) => void;
  toggleWebsite: (website: WebsiteDocument) => void;
  clearPins: () => void;
};

const STORAGE_KEY = "next-formation-pins";

export const usePinsStore = create<PinsState>()(
  persist(
    (set, get) => ({
      pinnedWebsites: [],
      isPinned: (uid) =>
        Boolean(uid) && get().pinnedWebsites.some((website) => website.uid === uid),
      pinWebsite: (website) =>
        set((state) => {
          if (!website.uid || state.pinnedWebsites.some((item) => item.uid === website.uid)) {
            return state;
          }

          return { pinnedWebsites: [...state.pinnedWebsites, website] };
        }),
      unpinWebsite: (uid) =>
        set((state) => ({
          pinnedWebsites: state.pinnedWebsites.filter((website) => website.uid !== uid),
        })),
      toggleWebsite: (website) =>
        set((state) => {
          if (!website.uid) {
            return state;
          }

          const isPinned = state.pinnedWebsites.some((item) => item.uid === website.uid);

          return {
            pinnedWebsites: isPinned
              ? state.pinnedWebsites.filter((item) => item.uid !== website.uid)
              : [...state.pinnedWebsites, website],
          };
        }),
      clearPins: () => set({ pinnedWebsites: [] }),
    }),
    {
      name: STORAGE_KEY,
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
      partialize: (state) => ({ pinnedWebsites: state.pinnedWebsites }),
    },
  ),
);

