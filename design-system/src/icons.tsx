import type { ReactElement } from 'react';

export type IconName = 'info' | 'tip' | 'warning' | 'danger' | 'spark' | 'arrow' | 'search' | 'moon' | 'audio' | 'heart';

const PATHS: Record<IconName, string[]> = {
  info: ['M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z', 'M12 11v5', 'M12 8h.01'],
  tip: ['M9 18h6', 'M10 21h4', 'M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3Z'],
  warning: ['M10.3 3.9 2.4 18a2 2 0 0 0 1.7 3h15.8a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z', 'M12 9v4', 'M12 17h.01'],
  danger: ['M7.9 2h8.2L22 7.9v8.2L16.1 22H7.9L2 16.1V7.9Z', 'M15 9l-6 6', 'M9 9l6 6'],
  spark: ['M12 3v4', 'M12 17v4', 'M3 12h4', 'M17 12h4', 'M12 8l1.5 2.5L16 12l-2.5 1.5L12 16l-1.5-2.5L8 12l2.5-1.5Z'],
  arrow: ['M7 17 17 7', 'M8 7h9v9'],
  search: ['M11 19a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z', 'm21 21-4.3-4.3'],
  moon: ['M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z'],
  audio: ['M3 14v-2a9 9 0 0 1 18 0v2', 'M21 15a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2Z', 'M3 15a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2Z'],
  heart: ['M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3 .5-4.5 2-1.5-1.5-2.7-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7Z'],
};

export interface IconProps {
  /** Linien-Icon im 24er-Raster, 1.8px Strich, Farbe über currentColor. */
  name: IconName;
  className?: string;
}

/** Linien-Icon des Designsystems. Größe über CSS (width/height), Farbe über color. */
export function Icon({ name, className }: IconProps): ReactElement {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {PATHS[name].map((d, i) => (
        <path key={i} d={d} />
      ))}
    </svg>
  );
}
