import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactElement, ReactNode } from 'react';
import { Icon, type IconName } from './icons';
import { AVATAR_DATA_URI } from './avatar';

function cx(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(' ');
}

/* ---------- Button ---------- */

export interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  /** secondary (Standard), primary (Signalorange, höchstens einmal pro Ansicht), ghost (leise Folgeaktion in Petrol). */
  variant?: 'secondary' | 'primary' | 'ghost';
  /** m = 40px hoch (Standard), s = 32px. */
  size?: 'm' | 's';
  /** Rendert einen Link (<a>) mit Button-Optik. */
  href?: string;
  /** Linien-Icon vor dem Label. */
  icon?: IconName;
  type?: 'button' | 'submit' | 'reset';
  children?: ReactNode;
}

/** Schaltfläche oder Link mit Button-Optik. Label beginnt mit dem Verb: „Neueste Posts lesen“. */
export function Button({ variant = 'secondary', size = 'm', href, icon, className, children, type = 'button', ...rest }: ButtonProps): ReactElement {
  const cls = cx('rv-btn', variant !== 'secondary' && `rv-btn-${variant}`, size === 's' && 'rv-btn-s', className);
  const content = (
    <>
      {icon && <Icon name={icon} />}
      {children}
    </>
  );
  if (href) {
    return (
      <a href={href} className={cls} {...(rest as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={cls} {...rest}>
      {content}
    </button>
  );
}

/* ---------- Tag ---------- */

export interface TagProps {
  /** Tag-Name in Kleinbuchstaben mit Bindestrich, ohne #. */
  children: string;
  href?: string;
  /** Markiert den gerade gefilterten Tag. */
  active?: boolean;
  /** Anzahl Artikel, z. B. auf der Tag-Übersicht. */
  count?: number;
}

/** Thema eines Artikels als Mono-Etikett mit orangem #. */
export function Tag({ children, href, active = false, count }: TagProps): ReactElement {
  const cls = cx('rv-tag', active && 'rv-tag-active');
  const inner = (
    <>
      {children}
      {count != null && <span className="rv-tag-count">{count}</span>}
    </>
  );
  return href ? (
    <a href={href} className={cls} aria-current={active ? 'page' : undefined}>
      {inner}
    </a>
  ) : (
    <span className={cls}>{inner}</span>
  );
}

/* ---------- MetaLine ---------- */

export interface MetaLineProps {
  /** Teile der Lage-Zeile, z. B. ['2026-07-06', '14 min Lesezeit']. Leere Einträge werden ausgelassen. */
  items: ReactNode[];
}

/** Lage-Zeile: Datum (ISO), Lesezeit, Kontext in Mono, mit Mittelpunkten getrennt. */
export function MetaLine({ items }: MetaLineProps): ReactElement {
  const parts = items.filter((it) => it != null && it !== false && it !== '');
  return (
    <div className="rv-meta">
      {parts.map((it, i) => (
        <span key={i} style={{ display: 'contents' }}>
          {i > 0 && (
            <span className="rv-meta-sep" aria-hidden="true">
              ·
            </span>
          )}
          <span>{it}</span>
        </span>
      ))}
    </div>
  );
}

/* ---------- PostCard ---------- */

export interface PostCardProps {
  title: string;
  /** ISO-Datum, z. B. 2026-07-06. */
  date: string;
  teaser?: string;
  tags?: string[];
  /** z. B. "14 min" */
  readingTime?: string;
  /** Podcast-Dauer, z. B. "24:34" — zeigt den Audio-Hinweis. */
  duration?: string;
  href?: string;
}

/** Eintrag der Artikelliste wie im Einsatztagebuch: Datum links, Eintrag rechts, Haarlinie oben. Mehrere untereinander bilden die Liste. */
export function PostCard({ title, date, teaser, tags = [], readingTime, duration, href = '#' }: PostCardProps): ReactElement {
  return (
    <article className="rv-post">
      <time className="rv-post-date" dateTime={date}>
        {date}
      </time>
      <div className="rv-post-body">
        <h3 className="rv-post-title">
          <a href={href}>{title}</a>
        </h3>
        {teaser && <p className="rv-post-teaser">{teaser}</p>}
        <div className="rv-post-tags">
          {readingTime && <MetaLine items={[readingTime]} />}
          {duration && (
            <span className="rv-post-audio">
              <Icon name="audio" />
              Podcast {duration}
            </span>
          )}
          {tags.map((t) => (
            <Tag key={t} href={`/tags/${t}`}>
              {t}
            </Tag>
          ))}
        </div>
      </div>
    </article>
  );
}

/* ---------- Callout ---------- */

const CALLOUT_LABELS = { info: 'Hinweis', tip: 'Tipp', warning: 'Achtung', danger: 'Gefahr' } as const;

export interface CalloutProps {
  /** info (petrol), tip (moss), warning (amber), danger. Jeder Ton trägt Wort und Icon. */
  tone?: 'info' | 'tip' | 'warning' | 'danger';
  /** Ersetzt das Standardlabel („Hinweis“, „Tipp“, „Achtung“, „Gefahr“). */
  title?: string;
  children: ReactNode;
}

/** Hervorgehobener Hinweis im Artikeltext. */
export function Callout({ tone = 'info', title, children }: CalloutProps): ReactElement {
  return (
    <aside className={cx('rv-callout', tone !== 'info' && `rv-callout-${tone}`)} role="note">
      <Icon name={tone} className="rv-callout-icon" />
      <span className="rv-callout-label">{title ?? CALLOUT_LABELS[tone]}</span>
      <div className="rv-callout-body">{children}</div>
    </aside>
  );
}

/* ---------- AiNote ---------- */

const AI_TEXT = {
  assisted: { label: 'Mit KI-Unterstützung', text: 'Dieser Artikel wurde mit generativer KI überarbeitet, etwa für Lektorat und Recherche.' },
  generated: { label: 'Mit KI erstellt', text: 'Text und Bilder dieses Artikels wurden mit generativer KI erzeugt.' },
} as const;

export interface AiNoteProps {
  /** assisted oder generated — die Texte sind fest. */
  level?: 'assisted' | 'generated';
  /** Link zur KI-Transparenz-Seite. */
  href?: string;
}

/** Transparenzhinweis nach Art. 50 KI-VO. Steht oberhalb des Artikeltexts, nie im Footer. */
export function AiNote({ level = 'assisted', href = '/ki-transparenz' }: AiNoteProps): ReactElement {
  const c = AI_TEXT[level];
  return (
    <aside className="rv-ai" role="note" aria-label="Transparenzhinweis zu KI-generierten Inhalten">
      <Icon name="spark" />
      <div>
        <span className="rv-ai-label">{c.label}</span>
        {c.text} Redaktionelle Verantwortung: Ruben Vitt. <a href={href}>Wie dieser Blog KI einsetzt</a>
      </div>
    </aside>
  );
}

/* ---------- LinkCard ---------- */

export interface LinkCardProps {
  title: string;
  /** Domain oder Pfad, z. B. owasp.org — steht zuerst, in Mono. */
  domain: string;
  description?: string;
  href?: string;
}

/** Verweis auf eine Quelle mitten im Text. */
export function LinkCard({ title, domain, description, href = '#' }: LinkCardProps): ReactElement {
  return (
    <a className="rv-link" href={href}>
      <span className="rv-link-domain">{domain}</span>
      <Icon name="arrow" className="rv-link-arrow" />
      <span className="rv-link-title">{title}</span>
      {description && <span className="rv-link-desc">{description}</span>}
    </a>
  );
}

/* ---------- CodeBlock ---------- */

export interface CodeBlockProps {
  filename?: string;
  /** Sprache, rechts in der Kopfzeile, z. B. "ts". */
  lang?: string;
  /** Code als Text; für Hervorhebung Spans mit den Klassen k (Keyword), s (String), c (Kommentar). */
  children: ReactNode;
}

/** Codeblock, in beiden Themes dunkel. */
export function CodeBlock({ filename, lang, children }: CodeBlockProps): ReactElement {
  return (
    <figure className="rv-code" style={{ margin: 0 }}>
      {(filename || lang) && (
        <figcaption className="rv-code-head">
          <span>{filename ?? ''}</span>
          <span className="rv-code-lang">{lang ?? ''}</span>
        </figcaption>
      )}
      <pre>
        <code>{children}</code>
      </pre>
    </figure>
  );
}

/* ---------- Prose ---------- */

export interface ProseProps {
  /** Normale HTML-Elemente: h2, h3, p, a, mark, blockquote, ul/ol, code mit Klasse rv-inline-code. */
  children: ReactNode;
}

/** Container für Artikeltext: h2 mit Signal-Marker, Links unterstrichen in Petrol, Zitate in der Display-Schrift. */
export function Prose({ children }: ProseProps): ReactElement {
  return <div className="rv-prose">{children}</div>;
}

/* ---------- SiteHeader ---------- */

export interface SiteHeaderProps {
  /** Aktiver Bereich der Hauptnavigation. */
  active?: 'Blog' | 'Tags' | 'Über mich';
  /** Avatar neben der Wortmarke; Standard ist Rubens Hund. null blendet ihn aus und zeigt das Signal-Quadrat. */
  avatarSrc?: string | null;
}

const NAV: Array<[NonNullable<SiteHeaderProps['active']>, string]> = [
  ['Blog', '/'],
  ['Tags', '/tags'],
  ['Über mich', '/about'],
];

/** Kopfzeile jeder Seite: Avatar und Wortmarke, Hauptnavigation, Suche, Theme-Schalter. */
export function SiteHeader({ active, avatarSrc = AVATAR_DATA_URI }: SiteHeaderProps): ReactElement {
  return (
    <header className="rv-header">
      <a className="rv-brand" href="/">
        {avatarSrc ? <img className="rv-brand-avatar" src={avatarSrc} alt="" /> : <span className="rv-brand-mark" aria-hidden="true" />}
        <span>
          rubeen<span className="rv-brand-tld">.dev</span>
        </span>
      </a>
      <div className="rv-row">
        <nav className="rv-nav" aria-label="Hauptnavigation">
          {NAV.map(([label, href]) => (
            <a key={label} href={href} aria-current={active === label ? 'page' : undefined}>
              {label}
            </a>
          ))}
        </nav>
        <button className="rv-icon-btn" type="button" aria-label="Suche öffnen">
          <Icon name="search" />
        </button>
        <button className="rv-icon-btn" type="button" aria-label="Farbschema wechseln">
          <Icon name="moon" />
        </button>
      </div>
    </header>
  );
}

/* ---------- SiteFooter ---------- */

export interface SiteFooterProps {
  /** Jahr im Copyright; Standard ist das aktuelle Jahr. */
  year?: number;
}

/** Fußzeile mit Copyright und Sponsor, KI-Transparenz, RSS. */
export function SiteFooter({ year = new Date().getFullYear() }: SiteFooterProps): ReactElement {
  return (
    <footer className="rv-footer">
      <span>© {year} Ruben Vitt</span>
      <nav aria-label="Weitere Links">
        <a href="https://github.com/sponsors/rubenvitt">Sponsor</a>
        <a href="/ki-transparenz">KI-Transparenz</a>
        <a href="/rss.xml">RSS</a>
      </nav>
    </footer>
  );
}

/* ---------- Hero ---------- */

export interface HeroProps {
  /** Zeile über dem Titel, in Mono mit Signal-Quadrat. */
  eyebrow?: string;
  /** Titel vor der Markierung, z. B. "Hey, ich bin ". */
  title: string;
  /** Hervorgehobener Teil des Titels (Signal-Unterlegung), z. B. "Ruben." */
  highlight?: string;
  lead?: string;
  /** Buttons darunter, typischerweise ein primary und ein secondary Button. */
  actions?: ReactNode;
}

/** Hero der Startseite mit Lagekarten-Raster. Einmal pro Seite. */
export function Hero({ eyebrow, title, highlight, lead, actions }: HeroProps): ReactElement {
  return (
    <section className="rv-hero">
      <div className="rv-hero-grid" aria-hidden="true" />
      {eyebrow && (
        <p className="rv-hero-eyebrow">
          <b>■</b> {eyebrow}
        </p>
      )}
      <h1 className="rv-hero-title">
        {title}
        {highlight && <mark>{highlight}</mark>}
      </h1>
      {lead && <p className="rv-hero-lead">{lead}</p>}
      {actions && <div className="rv-row rv-hero-actions">{actions}</div>}
    </section>
  );
}

/* ---------- ArticleHeader ---------- */

export interface ArticleHeaderProps {
  title: string;
  /** ISO-Datum */
  date: string;
  readingTime?: string;
  /** Podcast-Dauer, erscheint in der Lage-Zeile. */
  duration?: string;
  description?: string;
  tags?: string[];
}

/** Kopf einer Artikelseite ohne Titelbild: Lage-Zeile, Titel, Intro, Tags. */
export function ArticleHeader({ title, date, readingTime, duration, description, tags = [] }: ArticleHeaderProps): ReactElement {
  return (
    <header className="rv-article-head">
      <MetaLine items={[date, readingTime && `${readingTime} Lesezeit`, duration && `Podcast ${duration}`]} />
      <h1 className="rv-article-title">{title}</h1>
      {description && <p className="rv-article-lead">{description}</p>}
      {tags.length > 0 && (
        <div className="rv-row">
          {tags.map((t) => (
            <Tag key={t} href={`/tags/${t}`}>
              {t}
            </Tag>
          ))}
        </div>
      )}
    </header>
  );
}
