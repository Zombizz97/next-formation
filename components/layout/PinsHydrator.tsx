"use client";

import { useEffect } from "react";
import { usePinsStore } from "@/stores/website.store";

export default function PinsHydrator() {
  useEffect(() => {
    usePinsStore.persist.rehydrate();

    const handleStorage = (event: StorageEvent) => {
      if (event.key === "next-formation-pins") {
        usePinsStore.persist.rehydrate();
      }
    };

    window.addEventListener("storage", handleStorage);

    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return null;
}

