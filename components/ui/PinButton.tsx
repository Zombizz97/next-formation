"use client";
import clsx from "clsx";
import type { WebsiteDocument } from "@/prismicio-types";
import { usePinsStore } from "@/stores/website.store";

type PinButtonProps = {
  website: WebsiteDocument;
  className?: string;
};

export default function PinButton({ website, className }: PinButtonProps) {
  const isPinned = usePinsStore((state) => state.isPinned(website.uid));
  const toggleWebsite = usePinsStore((state) => state.toggleWebsite);

  return (
    <button
      type="button"
      aria-pressed={isPinned}
      onClick={() => toggleWebsite(website)}
      className={clsx(
        "inline-flex items-center justify-center gap-2 rounded-full border px-3 py-2 text-sm font-bold transition hover:scale-[1.02]",
        isPinned
          ? "border-dark bg-dark text-white"
          : "border-dark/15 bg-white/90 text-dark",
        className,
      )}
    >
      <span className="material-symbols-outlined text-[20px]">
        {isPinned ? "keep" : "keep_off"}
      </span>
    </button>
  );
}

