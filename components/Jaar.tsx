'use client';

import { useVandaag } from '@/lib/datum';

export function Jaar() {
  const vandaag = useVandaag();
  return <>{vandaag?.getFullYear() ?? ''}</>;
}
