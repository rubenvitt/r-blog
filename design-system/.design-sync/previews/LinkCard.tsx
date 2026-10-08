import { LinkCard } from '@rubeen/lagebild';

export const Extern = () => (
  <LinkCard
    domain="owasp.org"
    title="OWASP Top 10 for LLM Applications"
    description="Die zehn häufigsten Risiken in LLM-Anwendungen, von Prompt Injection bis Excessive Agency."
    href="https://owasp.org/www-project-top-10-for-large-language-model-applications/"
  />
);

export const Intern = () => <LinkCard domain="rubeen.dev/blog" title="Tools sind keine Prompts" href="/blog/tools-sind-keine-prompts" />;
