export const SITE_ORIGIN = 'https://rubeen.dev';
export const SITE_HOSTNAME = 'rubeen.dev';
export const DEFAULT_SITE_DESCRIPTION = 'Ein Blog über Web-Development und Technologie';

export const HOME_PAGE = {
  path: '/',
  title: 'rubeen.dev — Blog',
  description:
    'Ich schreibe über Softwareentwicklung, Zusammenarbeit und pragmatische Lösungen in komplexen Kontexten – aus Projekten, dem Consulting und an der Schnittstelle zum Katastrophenschutz.',
} as const;

export const ABOUT_PAGE = {
  path: '/about',
  title: 'Über mich — rubeen.dev',
  description: 'Über Ruben – Consultant, Softwareentwickler und Engagierter im Katastrophenschutz.',
} as const;

/** Natürliche Person, die die redaktionelle Verantwortung i.S.d. Art. 50 Abs. 4 KI-VO trägt. */
export const EDITORIAL_RESPONSIBILITY = 'Ruben Vitt';

export const AI_TRANSPARENCY_PAGE = {
  path: '/ki-transparenz',
  title: 'KI-Transparenz — rubeen.dev',
  description:
    'Wie auf rubeen.dev generative KI eingesetzt wird, wie Inhalte gekennzeichnet sind und wer die redaktionelle Verantwortung trägt.',
} as const;
