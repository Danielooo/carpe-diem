import { useSyncExternalStore } from 'react';

const DAG_MS = 86_400_000;

let gelezenDatum: Date | null = null;

/** De datum wijzigt niet vanzelf, dus er valt niets te abonneren. */
const geenAbonnement = () => () => {};

function opDeClient(): Date {
  gelezenDatum ??= new Date();
  return gelezenDatum;
}

const opDeServer = () => null;

/**
 * Null tijdens server-render en hydratatie, daarna de datum van de bezoeker.
 * De server staat in een andere tijdzone, dus die mag deze datum niet invullen.
 */
export function useVandaag(): Date | null {
  return useSyncExternalStore(geenAbonnement, opDeClient, opDeServer);
}

/** Hele dagen sinds 1 januari: 0 op nieuwjaarsdag. */
export function dagIndex(datum: Date): number {
  const jaar = datum.getFullYear();
  const middernacht = new Date(jaar, datum.getMonth(), datum.getDate());
  return Math.round((middernacht.getTime() - new Date(jaar, 0, 1).getTime()) / DAG_MS);
}

export function dagenInJaar(jaar: number): number {
  const schrikkeljaar = (jaar % 4 === 0 && jaar % 100 !== 0) || jaar % 400 === 0;
  return schrikkeljaar ? 366 : 365;
}
