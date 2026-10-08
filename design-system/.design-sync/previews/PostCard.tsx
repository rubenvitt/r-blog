import { PostCard } from '@rubeen/lagebild';

export const Eintrag = () => (
  <PostCard
    date="2026-07-06"
    title="Ein Prompt im Wiki ist kein Nachweis: Revisionssicheres Logging und der Agent Contract"
    teaser="Der Agent Contract ist das Soll, das revisionssichere Log der Ist-Nachweis. Was DORA, GoBD und die kommende MaRisk jetzt verlangen."
    tags={['ai', 'compliance', 'observability']}
    readingTime="14 min"
  />
);

export const MitPodcast = () => (
  <PostCard
    date="2026-05-22"
    title="Phönix-Progression: Sprints brauchen Asche"
    teaser="Mein Produktivitätssystem aus 12-Week-Year, 7 Habits und einem Cycles-Framework, mit echter Aschewoche statt nur Buffer-Pause."
    tags={['meta', 'produktivitaet']}
    readingTime="11 min"
    duration="24:34"
  />
);

export const Liste = () => (
  <div>
    <PostCard date="2026-04-15" title="Wissen sammeln war nie das Problem" teaser="Klassisches PKM scheitert an der Pflege. Ein LLM-gepflegtes Wiki löst das." tags={['knowledge-management']} />
    <PostCard date="2026-03-27" title="Tools sind keine Prompts" teaser="Ein Tool-Call kann Geld bewegen und Konten verändern." tags={['ai', 'security']} duration="21:08" />
  </div>
);
