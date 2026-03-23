"use client";
import Website from "@/components/ui/Website";
import { usePinsStore } from "@/stores/website.store";

export default function PinsContent() {
  const pinnedWebsites = usePinsStore((state) => state.pinnedWebsites);
  const clearPins = usePinsStore((state) => state.clearPins);

  return (
    <main className="px-6 py-12">
      <header className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-sm uppercase tracking-wide text-medium-dark">
            Vos pages sauvegardées
          </p>
          <h1 className="text-4xl uppercase leading-tight">Pins</h1>
          <p className="text-sm text-medium-dark">
            {pinnedWebsites.length} site(s) épinglé(s)
          </p>
        </div>

        {pinnedWebsites.length > 0 && (
          <button
            type="button"
            onClick={clearPins}
            className="inline-flex items-center justify-center rounded-lg border border-dark px-4 py-3 font-bold text-dark transition hover:bg-dark hover:text-white"
          >
            Tout retirer
          </button>
        )}
      </header>

      {pinnedWebsites.length > 0 ? (
        <div className="grid gap-x-4 gap-y-8 pt-12 md:grid-cols-4">
          {pinnedWebsites.map((website) => (
            <div key={website.uid}>
              <Website website={website} />
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-12 flex flex-col items-center gap-6 rounded-2xl border border-dashed border-dark/15 px-6 py-16 text-center">
          <p className="text-2xl font-bold">Aucune page épinglée pour le moment</p>
          <p className="max-w-xl text-medium-dark">
            Ajoute des pages depuis les cartes de sites ou depuis une page détail
            pour les retrouver ici.
          </p>
        </div>
      )}
    </main>
  );
}


