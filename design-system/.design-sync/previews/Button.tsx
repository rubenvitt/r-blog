import { Button } from '@rubeen/lagebild';

export const Varianten = () => (
  <div className="rv-row">
    <Button variant="primary">Neueste Posts lesen</Button>
    <Button>Über mich</Button>
    <Button variant="ghost">Alle anzeigen</Button>
  </div>
);

export const MitIcon = () => (
  <div className="rv-row">
    <Button icon="audio">Als Podcast hören</Button>
    <Button icon="search">Suchen</Button>
  </div>
);

export const Klein = () => (
  <div className="rv-row">
    <Button size="s" variant="primary">Abonnieren</Button>
    <Button size="s">Transkript</Button>
  </div>
);

export const Deaktiviert = () => <Button disabled>Wird geladen</Button>;
