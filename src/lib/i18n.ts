// Sprachen des Blogs. Deutsch ist das Original und liegt ohne Präfix unter /, alle anderen
// unter /<code>/. Übersetzte Posts liegen in src/content/translations/<code>/<slug>.mdx
// und behalten den Slug des Originals, darum ist die Gegen-URL immer nur ein Präfixwechsel.

export const LOCALES = ['de', 'en', 'fr', 'nl', 'sv', 'nb', 'pott'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'de';

interface LocaleInfo {
  /** Name in der eigenen Sprache, für den Umschalter. */
  label: string;
  /** Kurzform im Umschalter-Button. */
  short: string;
  /** Wert für <html lang>. */
  htmlLang: string;
  /** hreflang für Suchmaschinen; null = nicht als Alternative melden (Spaß-Fassung). */
  hreflang: string | null;
  /** Für Intl.DateTimeFormat / og:locale. */
  ogLocale: string;
}

export const LOCALE_INFO: Record<Locale, LocaleInfo> = {
  de: { label: 'Deutsch', short: 'DE', htmlLang: 'de', hreflang: 'de', ogLocale: 'de_DE' },
  en: { label: 'English', short: 'EN', htmlLang: 'en', hreflang: 'en', ogLocale: 'en_US' },
  fr: { label: 'Français', short: 'FR', htmlLang: 'fr', hreflang: 'fr', ogLocale: 'fr_FR' },
  nl: { label: 'Nederlands', short: 'NL', htmlLang: 'nl', hreflang: 'nl', ogLocale: 'nl_NL' },
  sv: { label: 'Svenska', short: 'SV', htmlLang: 'sv', hreflang: 'sv', ogLocale: 'sv_SE' },
  nb: { label: 'Norsk', short: 'NO', htmlLang: 'nb', hreflang: 'nb', ogLocale: 'nb_NO' },
  // Private-use-Subtag: Screenreader lesen Deutsch, Pagefind baut einen eigenen Index.
  pott: {
    label: 'Ruhrpott',
    short: 'PO',
    htmlLang: 'de-x-pott',
    hreflang: null,
    ogLocale: 'de_DE',
  },
};

/** Sprachen mit Präfix, also alles außer dem Original. */
export const TRANSLATED_LOCALES = LOCALES.filter((l) => l !== DEFAULT_LOCALE);

export function getLocale(url: URL): Locale {
  const first = url.pathname.split('/')[1];
  return (TRANSLATED_LOCALES as readonly string[]).includes(first)
    ? (first as Locale)
    : DEFAULT_LOCALE;
}

/** Pfad ohne Sprachpräfix, z. B. /en/blog/x/ → /blog/x/. */
export function stripLocale(pathname: string): string {
  const locale = getLocale(new URL(pathname, 'https://x'));
  return locale === DEFAULT_LOCALE ? pathname : pathname.slice(locale.length + 1) || '/';
}

/** Deutschen Pfad in eine Sprache übersetzen: localePath('en', '/blog/x') → /en/blog/x */
export function localePath(locale: Locale, path: string): string {
  if (locale === DEFAULT_LOCALE) return path;
  return path === '/' ? `/${locale}/` : `/${locale}${path}`;
}

export type Alternates = Partial<Record<Locale, string>>;

/** Alternativen für einen deutschen Pfad, der in den angegebenen Sprachen existiert. */
export function alternatesFor(path: string, locales: readonly Locale[] = LOCALES): Alternates {
  return Object.fromEntries(locales.map((l) => [l, localePath(l, path)]));
}

const de = {
  'nav.blog': 'Blog',
  'nav.projects': 'Projekte',
  'nav.talks': 'Talks',
  'nav.tags': 'Tags',
  'nav.about': 'Über mich',
  'header.search': 'Suche',
  'header.theme': 'Theme wechseln',
  'lang.button': 'Sprache wählen',
  'lang.auto': 'Automatisch',
  'lang.autoHint': 'folgt deinem Browser',
  'lang.missing': 'Startseite, diese Seite gibt es dort nicht',
  'footer.more': 'Weitere Links',
  'footer.transparency': 'KI-Transparenz',
  'home.kicker': 'Software · Teams · Katastrophenschutz',
  'home.hello': 'Hey, ich bin',
  'home.intro':
    'Ich schreibe über Softwareentwicklung, Zusammenarbeit und pragmatische Lösungen in komplexen Kontexten – aus Projekten, dem Consulting bei <a href="https://www.innoq.com/de/staff/ruben-vitt/">INNOQ</a> und an der Schnittstelle zum Katastrophenschutz.',
  'home.readLatest': 'Neueste Posts lesen',
  'home.latest': 'Neueste Posts',
  'home.empty': 'Noch keine Posts vorhanden.',
  'home.upcoming': 'Demnächst unterwegs',
  'home.allTalks': 'Alle Talks →',
  'home.building': 'Woran ich baue',
  'home.allProjects': 'Alle Projekte →',
  'home.title': 'rubeen.dev — Blog',
  'home.description':
    'Ich schreibe über Softwareentwicklung, Zusammenarbeit und pragmatische Lösungen in komplexen Kontexten – aus Projekten, dem Consulting und an der Schnittstelle zum Katastrophenschutz.',
  'post.readingTime': 'min Lesezeit',
  'post.updated': 'Aktualisiert',
  'post.podcastNote': 'Dialog und Stimmen dieser Audio-Fassung sind vollständig KI-generiert.',
  'card.publishedAt': 'erschienen bei',
  'card.with': 'mit',
  'card.inEnglish': 'auf Englisch',
  'tags.title': 'Tags',
  'tags.empty': 'Noch keine Tags vorhanden.',
  'tags.all': '← Alle Tags',
  'tags.post': 'Post',
  'tags.posts': 'Posts',
  'callout.info': 'Hinweis',
  'callout.tip': 'Tipp',
  'callout.warning': 'Achtung',
  'callout.danger': 'Gefahr',
  'ai.generated': 'Mit KI erstellt',
  'ai.assisted': 'Mit KI-Unterstützung',
  'ai.generatedText': 'Text und Bilder dieses Artikels wurden mit generativer KI erzeugt.',
  'ai.assistedText':
    'Dieser Artikel wurde mit generativer KI überarbeitet, etwa für Lektorat und Recherche.',
  'ai.translatedText':
    'Diese Fassung wurde mit generativer KI aus dem deutschen Original übersetzt.',
  'ai.responsibility': 'Redaktionelle Verantwortung',
  'ai.howThisBlog': 'Wie dieser Blog KI einsetzt',
  'ai.ariaLabel': 'Transparenzhinweis zu KI-generierten Inhalten',
  'search.error': 'Suche konnte nicht geladen werden. Im Dev-Modus bitte erst builden.',
  'diagram.zoom': 'Diagramm vergrößern',
  'diagram.reset': 'Ansicht zurücksetzen',
  'diagram.close': 'Schließen',
  'rss.description': 'Ein Blog über Web-Development und Technologie',
  'about.title': 'Über mich — rubeen.dev',
  'about.description':
    'Über Ruben – Consultant bei INNOQ, Softwareentwickler und Engagierter im Katastrophenschutz.',
  'about.heading': 'Über mich',
  'about.heroAlt': 'Softwareentwicklung trifft Katastrophenschutz – zwei Welten, die ich verbinde',
  // HTML erlaubt, Absätze getrennt durch Leerzeile.
  'about.body': `Ich schreibe hier, um Gedanken zu sortieren, Erfahrungen festzuhalten und Dinge so aufzubereiten, dass sie auch für andere nützlich sind.

Ich bin Ruben und arbeite als Consultant bei <a href="https://www.innoq.com/de/staff/ruben-vitt/">INNOQ</a>. Mich interessieren gute technische Lösungen, klare Kommunikation und die Frage, wie Teams in komplexen Situationen zu vernünftigen Entscheidungen kommen.

Neben meiner Arbeit in der Softwareentwicklung engagiere ich mich in der Fachgruppe Information und Kommunikation im Katastrophenschutz. Diese beiden Welten verbinde ich bereits in Projekten wie <a href="https://uav.iuk-ue.de">uav.iuk-ue.de</a> – und genau diese Verbindung wird auch in diesem Blog immer wieder eine Rolle spielen.

Auf diesem Blog schreibe ich über Themen, die mich fachlich beschäftigen: Erfahrungen aus Projekten, Gedanken zu Software und Zusammenarbeit, Lernnotizen und Beobachtungen aus dem Arbeitsalltag. Nicht als endgültige Wahrheiten, sondern als Versuch, Dinge besser zu verstehen und verständlich zu machen.

Ich mag einen breiten Blick auf Technik. Statt mich nur über ein einzelnes Spezialgebiet zu definieren, interessiert mich das Zusammenspiel von Entwicklung, Architektur, Zusammenarbeit und Lernen. Gute Arbeit entsteht für mich dort, wo fachliche Tiefe auf Pragmatismus trifft – und wo Komplexität nicht größer gemacht wird, als sie sein muss.

In Projekten schätze ich Klarheit, Verantwortung und respektvolle Zusammenarbeit. Ich arbeite gern strukturiert, denke mich schnell in neue Themen ein und versuche, Lösungen so zu gestalten, dass sie nicht nur heute funktionieren, sondern auch später noch sinnvoll sind.

Dieser Blog ist mein persönlicher fachlicher Raum. Er zeigt, worüber ich nachdenke, wie ich arbeite und was mir wichtig ist: Substanz statt Buzzwords, Lernen statt Pose und Lösungen, die in der Praxis tragen.

Wenn dich ein Thema anspricht oder du dich austauschen möchtest, freue ich mich über eine Nachricht.`,
  'about.contact': 'Kontakt',
  'about.writeMe': 'Schreib mir',
  'transparency.title': 'KI-Transparenz — rubeen.dev',
  'transparency.description':
    'Wie auf rubeen.dev generative KI eingesetzt wird, wie Inhalte gekennzeichnet sind und wer die redaktionelle Verantwortung trägt.',
  'transparency.heading': 'KI-Transparenz',
  // HTML; Platzhalter {person} = redaktionell verantwortliche Person, {podcastPost} = Link auf den Werkzeug-Post.
  'transparency.body': `<p>Ich schreibe auf diesem Blog über AI Systems Engineering – und benutze die Werkzeuge, über die ich schreibe, auch selbst. Diese Seite sagt, wo genau. Nicht als Kleingedrucktes, sondern weil du wissen sollst, was du hier liest.</p>
<h2>Was von der KI kommt</h2>
<ul>
<li><strong>Artikeltexte</strong> – Der Fließtext der Beiträge wird von einem Sprachmodell erzeugt. Themenwahl, These, Struktur, Beispiele und Quellen kommen von mir.</li>
<li><strong>Übersetzungen</strong> – Maßgeblich ist das deutsche Original. Alle anderen Sprachfassungen werden daraus mit generativer KI übersetzt und in einem zweiten KI-Durchgang geprüft.</li>
<li><strong>Bilder</strong> – Hero- und Illustrationsbilder sind KI-generiert. Sie sind bewusst illustrativ gehalten und zeigen keine realen Personen, Orte oder Ereignisse. Screenshots aus echten Anwendungen sind echt.</li>
<li><strong>Podcast-Folgen</strong> – Dialogskript und Stimmen der Audio-Fassungen sind vollständig synthetisch. Die Sprecher sind keine realen Personen. Wie diese Pipeline gebaut ist, steht in <a href="{podcastPost}">AI-Werkzeuge für den eigenen Blog</a>.</li>
</ul>
<h2>Wer verantwortlich ist</h2>
<p>Die redaktionelle Verantwortung für alle hier veröffentlichten Inhalte trägt <strong>{person}</strong>. Kein Text geht ungelesen online: Ich prüfe jeden Beitrag vor der Veröffentlichung inhaltlich, korrigiere, kürze und verwerfe, was nicht stimmt. Fehler, die trotzdem stehen bleiben, sind meine – nicht die des Modells.</p>
<p>Wenn dir etwas auffällt, das sachlich falsch ist oder erfunden wirkt: <a href="mailto:hello@rubeen.dev">schreib mir</a>. Ich korrigiere das und weise die Änderung im Beitrag aus.</p>
<h2>Wie gekennzeichnet wird</h2>
<p>Jeder Beitrag trägt einen Hinweis. Er unterscheidet zwei Stufen:</p>
<ul>
<li><strong>Mit KI erstellt</strong> – Text und Bilder wurden von generativer KI erzeugt. Das ist auf diesem Blog der Regelfall.</li>
<li><strong>Mit KI-Unterstützung</strong> – Der Text stammt von mir, KI wurde nur für Lektorat oder Recherche eingesetzt.</li>
</ul>
<p>Beiträge ohne generative KI tragen keinen Hinweis. Die Stufe steht oben in der Metazeile neben Datum und Lesezeit, wer den Beitrag öffnet, sieht sie also, bevor er zu lesen anfängt. Sie verlinkt auf den ausführlichen Hinweis mit der redaktionellen Verantwortung am Ende des Beitrags.</p>
<h2>Rechtlicher Rahmen</h2>
<p>Seit dem 2. August 2026 gelten die Transparenzpflichten aus <span class="whitespace-nowrap">Art. 50</span> der KI-Verordnung (EU) 2024/1689. Für veröffentlichte KI-generierte Texte verlangt <span class="whitespace-nowrap">Art. 50 Abs. 4</span> eine Offenlegung, sofern sie die Öffentlichkeit über Angelegenheiten von öffentlichem Interesse informieren; die Pflicht entfällt, wenn der Inhalt einer menschlichen Überprüfung unterzogen wurde und eine benannte Person die redaktionelle Verantwortung trägt. <span class="whitespace-nowrap">Art. 50 Abs. 5</span> verlangt, dass Hinweise klar, eindeutig und spätestens bei der ersten Wahrnehmung erfolgen.</p>
<p>Ob dieser Blog überhaupt unter die Norm fällt, ist im Einzelfall diskutabel – die Ausnahme für redaktionell verantwortete Inhalte würde hier greifen. Ich kennzeichne trotzdem, und zwar durchgängig. Nicht weil ich muss, sondern weil ein Blog über KI-Systeme schlecht dabei mauern kann, wie er selbst entsteht.</p>`,
};

export type UiKey = keyof typeof de;

const en: Record<UiKey, string> = {
  'nav.blog': 'Blog',
  'nav.projects': 'Projects',
  'nav.talks': 'Talks',
  'nav.tags': 'Tags',
  'nav.about': 'About',
  'header.search': 'Search',
  'header.theme': 'Toggle theme',
  'lang.button': 'Choose language',
  'lang.auto': 'Automatic',
  'lang.autoHint': 'follows your browser',
  'lang.missing': 'home page, this page isn’t translated',
  'footer.more': 'More links',
  'footer.transparency': 'AI transparency',
  'home.kicker': 'Software · Teams · Civil protection',
  'home.hello': 'Hey, I’m',
  'home.intro':
    'I write about software development, collaboration and pragmatic solutions in complex settings – from client projects, my consulting work at <a href="https://www.innoq.com/en/staff/ruben-vitt/">INNOQ</a>, and the place where software meets civil protection.',
  'home.readLatest': 'Read the latest posts',
  'home.latest': 'Latest posts',
  'home.empty': 'No posts yet.',
  'home.upcoming': 'Coming up',
  'home.allTalks': 'All talks →',
  'home.building': 'What I’m building',
  'home.allProjects': 'All projects →',
  'home.title': 'rubeen.dev — Blog',
  'home.description':
    'I write about software development, collaboration and pragmatic solutions in complex settings – from projects, consulting, and the place where software meets civil protection.',
  'post.readingTime': 'min read',
  'post.updated': 'Updated',
  'post.podcastNote': 'The dialogue and voices of this audio version are entirely AI-generated.',
  'card.publishedAt': 'published at',
  'card.with': 'with',
  'card.inEnglish': 'in English',
  'tags.title': 'Tags',
  'tags.empty': 'No tags yet.',
  'tags.all': '← All tags',
  'tags.post': 'post',
  'tags.posts': 'posts',
  'callout.info': 'Note',
  'callout.tip': 'Tip',
  'callout.warning': 'Heads-up',
  'callout.danger': 'Danger',
  'ai.generated': 'Made with AI',
  'ai.assisted': 'AI-assisted',
  'ai.generatedText': 'The text and images of this article were created with generative AI.',
  'ai.assistedText':
    'This article was revised with generative AI, for example for editing and research.',
  'ai.translatedText': 'This version was translated from the German original with generative AI.',
  'ai.responsibility': 'Editorial responsibility',
  'ai.howThisBlog': 'How this blog uses AI',
  'ai.ariaLabel': 'Transparency notice on AI-generated content',
  'search.error': 'Search could not be loaded. In dev mode, run a build first.',
  'diagram.zoom': 'Enlarge diagram',
  'diagram.reset': 'Reset view',
  'diagram.close': 'Close',
  'rss.description': 'A blog about software engineering, AI systems and technology',
  'about.title': 'About — rubeen.dev',
  'about.description':
    'About Ruben – consultant at INNOQ, software developer and civil protection volunteer.',
  'about.heading': 'About me',
  'about.heroAlt': 'Software development meets civil protection – two worlds I bring together',
  'about.body': `I write here to sort my thoughts, hold on to what I’ve learned, and put things in a shape that’s useful to other people too.

I’m Ruben, and I work as a consultant at <a href="https://www.innoq.com/en/staff/ruben-vitt/">INNOQ</a>. I care about good technical solutions, clear communication, and how teams reach sensible decisions when things get complicated.

Outside of software development, I volunteer in an information and communications unit in German civil protection. I already bring those two worlds together in projects like <a href="https://uav.iuk-ue.de">uav.iuk-ue.de</a>, and that connection will keep showing up on this blog.

Here I write about what keeps me busy professionally: lessons from projects, thoughts on software and collaboration, learning notes and observations from everyday work. Not as final truths, but as an attempt to understand things better and explain them well.

I like a broad view of technology. Rather than defining myself by a single specialty, I’m interested in how development, architecture, collaboration and learning play together. To me, good work happens where depth meets pragmatism, and where complexity isn’t made bigger than it has to be.

In projects I value clarity, ownership and respectful collaboration. I like working in a structured way, get into new topics quickly, and try to build solutions that don’t just work today but still make sense later.

This blog is my personal professional space. It shows what I think about, how I work and what matters to me: substance over buzzwords, learning over posing, and solutions that hold up in practice.

If a topic speaks to you or you’d like to talk, I’d be happy to hear from you.`,
  'about.contact': 'Contact',
  'about.writeMe': 'Write to me',
  'transparency.title': 'AI transparency — rubeen.dev',
  'transparency.description':
    'How rubeen.dev uses generative AI, how content is labeled, and who holds editorial responsibility.',
  'transparency.heading': 'AI transparency',
  'transparency.body': `<p>On this blog I write about AI systems engineering, and I use the tools I write about myself. This page says exactly where. Not as fine print, but because you should know what you’re reading.</p>
<h2>What comes from AI</h2>
<ul>
<li><strong>Article text</strong> – The body text of the posts is generated by a language model. The choice of topic, the thesis, structure, examples and sources come from me.</li>
<li><strong>Translations</strong> – The German original is the reference. All other language versions are translated from it with generative AI and reviewed in a second AI pass.</li>
<li><strong>Images</strong> – Hero images and illustrations are AI-generated. They are deliberately illustrative and show no real people, places or events. Screenshots of real applications are real.</li>
<li><strong>Podcast episodes</strong> – The dialogue script and voices of the audio versions (German only) are fully synthetic. The speakers are not real people. How that pipeline is built is described in <a href="{podcastPost}">AI tools for your own blog</a>.</li>
</ul>
<h2>Who is responsible</h2>
<p>Editorial responsibility for all content published here lies with <strong>{person}</strong>. No text goes online unread: I check every post before publication, correct it, cut it, and throw out what isn’t right. Mistakes that still slip through are mine, not the model’s.</p>
<p>If you notice something that is factually wrong or looks made up: <a href="mailto:hello@rubeen.dev">write to me</a>. I’ll fix it and note the change in the post.</p>
<h2>How content is labeled</h2>
<p>Every post carries a notice. It distinguishes two levels:</p>
<ul>
<li><strong>Made with AI</strong> – Text and images were generated by generative AI. On this blog, that’s the norm.</li>
<li><strong>AI-assisted</strong> – I wrote the text myself; AI was only used for editing or research.</li>
</ul>
<p>Posts without generative AI carry no notice. The level appears at the top of the post next to the date and reading time, so you see it before you start reading. It links to the full notice, including editorial responsibility, at the end of the post.</p>
<h2>Legal framework</h2>
<p>Since August 2, 2026, the transparency obligations of <span class="whitespace-nowrap">Article 50</span> of the EU AI Act (Regulation (EU) 2024/1689) apply. For published AI-generated text, <span class="whitespace-nowrap">Article 50(4)</span> requires disclosure where the text informs the public on matters of public interest; the obligation does not apply if the content has undergone human review and a named person holds editorial responsibility. <span class="whitespace-nowrap">Article 50(5)</span> requires notices to be clear, distinguishable and given at the latest at the time of first exposure.</p>
<p>Whether this blog falls under the rule at all is debatable; the exception for editorially controlled content would probably apply. I label everything anyway, consistently. Not because I have to, but because a blog about AI systems shouldn’t be cagey about how it’s made itself.</p>`,
};

// Weitere Sprachen ergänzen fehlende Schlüssel mit Englisch (Deutsch bei der Pott-Fassung).
import { fr, nl, sv, nb, pott } from './i18n-locales';

const dictionaries: Record<Locale, Partial<Record<UiKey, string>>> = {
  de,
  en,
  fr,
  nl,
  sv,
  nb,
  pott,
};

export function useTranslations(locale: Locale) {
  const fallback = locale === 'pott' ? de : en;
  return (key: UiKey, vars: Record<string, string> = {}) =>
    (dictionaries[locale][key] ?? (locale === 'de' ? de[key] : fallback[key])).replace(
      /\{(\w+)\}/g,
      (m, name) => vars[name] ?? m,
    );
}
