import { Callout } from '@rubeen/lagebild';

export const Hinweis = () => <Callout tone="info">Der Agent Contract beschreibt, was ein Agent darf. Das Log beweist, was er getan hat.</Callout>;

export const Tipp = () => <Callout tone="tip">Idempotency-Key aus der Request-ID ableiten, nicht aus dem Prompt.</Callout>;

export const Achtung = () => <Callout tone="warning">Auth gehört vor den Tool-Call, nicht in den Prompt. Ein Modell lässt sich überreden, eine Policy nicht.</Callout>;

export const Gefahr = () => <Callout tone="danger">Produktions-Credentials gehören nie in den Systemprompt.</Callout>;

export const EigenerTitel = () => (
  <Callout tone="info" title="Kurz gesagt">
    <p>Evals gehören in die CI, nicht in ein Notebook.</p>
  </Callout>
);
