import { Button, Hero } from '@rubeen/lagebild';

export const Startseite = () => (
  <Hero
    eyebrow="Software · Teams · Katastrophenschutz"
    title="Hey, ich bin "
    highlight="Ruben."
    lead="Ich schreibe über Softwareentwicklung, Zusammenarbeit und pragmatische Lösungen in komplexen Kontexten – aus Projekten, dem Consulting und an der Schnittstelle zum Katastrophenschutz."
    actions={
      <>
        <Button variant="primary" href="#posts">Neueste Posts lesen</Button>
        <Button href="/about">Über mich</Button>
      </>
    }
  />
);

export const Kompakt = () => <Hero title="Tags" lead="Alle Themen, über die ich schreibe, nach Anzahl der Artikel." />;
