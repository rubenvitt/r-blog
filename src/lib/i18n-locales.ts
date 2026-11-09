// UI-Texte der übrigen Sprachen. Schlüssel und Bedeutung: siehe `de` in i18n.ts.
import type { UiKey } from './i18n';

type Dict = Partial<Record<UiKey, string>>;

export const fr: Dict = {
  'nav.blog': 'Blog',
  'nav.projects': 'Projets',
  'nav.talks': 'Conférences',
  'nav.tags': 'Tags',
  'nav.about': 'À propos',
  'header.search': 'Rechercher',
  'header.theme': 'Changer de thème',
  'lang.button': 'Choisir la langue',
  'lang.auto': 'Automatique',
  'lang.autoHint': 'suit votre navigateur',
  'lang.missing': 'page d’accueil, cette page n’est pas traduite',
  'footer.more': 'Autres liens',
  'footer.transparency': 'Transparence IA',
  'home.kicker': 'Logiciel · Équipes · Protection civile',
  'home.hello': 'Bonjour, je suis',
  'home.intro':
    'J’écris sur le développement logiciel, la collaboration et les solutions pragmatiques dans des contextes complexes – à partir de projets, de mon activité de conseil chez <a href="https://www.innoq.com/en/staff/ruben-vitt/">INNOQ</a> et de là où le logiciel rencontre la protection civile.',
  'home.readLatest': 'Lire les derniers articles',
  'home.latest': 'Derniers articles',
  'home.empty': 'Aucun article pour le moment.',
  'home.upcoming': 'Prochainement',
  'home.allTalks': 'Toutes les conférences →',
  'home.building': 'Ce que je construis',
  'home.allProjects': 'Tous les projets →',
  'home.title': 'rubeen.dev — Blog',
  'home.description':
    'J’écris sur le développement logiciel, la collaboration et les solutions pragmatiques dans des contextes complexes – à partir de projets, du conseil et de là où le logiciel rencontre la protection civile.',
  'post.readingTime': 'min de lecture',
  'post.updated': 'Mis à jour',
  'post.podcastNote':
    'Le dialogue et les voix de cette version audio sont entièrement générés par IA.',
  'card.publishedAt': 'publié chez',
  'card.with': 'avec',
  'card.inEnglish': 'en anglais',
  'tags.title': 'Tags',
  'tags.empty': 'Aucun tag pour le moment.',
  'tags.all': '← Tous les tags',
  'tags.post': 'article',
  'tags.posts': 'articles',
  'callout.info': 'Remarque',
  'callout.tip': 'Astuce',
  'callout.warning': 'Attention',
  'callout.danger': 'Danger',
  'ai.generated': 'Créé avec l’IA',
  'ai.assisted': 'Avec l’aide de l’IA',
  'ai.generatedText': 'Le texte et les images de cet article ont été créés avec l’IA générative.',
  'ai.assistedText':
    'Cet article a été retravaillé avec l’IA générative, par exemple pour la relecture et la recherche.',
  'ai.translatedText': 'Cette version a été traduite de l’original allemand avec l’IA générative.',
  'ai.responsibility': 'Responsabilité éditoriale',
  'ai.howThisBlog': 'Comment ce blog utilise l’IA',
  'ai.ariaLabel': 'Mention de transparence sur les contenus générés par IA',
  'search.error': 'La recherche n’a pas pu être chargée. En mode dev, lancez d’abord un build.',
  'diagram.zoom': 'Agrandir le diagramme',
  'diagram.reset': 'Réinitialiser la vue',
  'diagram.close': 'Fermer',
  'rss.description': 'Un blog sur le développement web et la technologie',
  'about.title': 'À propos — rubeen.dev',
  'about.description':
    'À propos de Ruben – consultant chez INNOQ, développeur logiciel et bénévole dans la protection civile.',
  'about.heading': 'À propos de moi',
  'about.heroAlt':
    'Le développement logiciel rencontre la protection civile – deux mondes que je relie',
  'about.body': `J’écris ici pour mettre de l’ordre dans mes idées, garder une trace de ce que je vis et présenter les choses de façon à ce qu’elles servent aussi à d’autres.

Je m’appelle Ruben et je suis consultant chez <a href="https://www.innoq.com/en/staff/ruben-vitt/">INNOQ</a>. Ce qui m’intéresse, ce sont les bonnes solutions techniques, une communication claire et la manière dont les équipes parviennent à des décisions raisonnables dans des situations complexes.

En parallèle du développement logiciel, je m’engage dans un groupe spécialisé Information et Communication de la protection civile allemande. Je relie déjà ces deux mondes dans des projets comme <a href="https://uav.iuk-ue.de">uav.iuk-ue.de</a> – et c’est précisément ce lien qui reviendra régulièrement sur ce blog.

J’y écris sur les sujets qui m’occupent professionnellement : retours d’expérience de projets, réflexions sur le logiciel et la collaboration, notes d’apprentissage et observations du quotidien. Non pas comme des vérités définitives, mais comme une tentative de mieux comprendre les choses et de les rendre compréhensibles.

J’aime avoir une vision large de la technique. Plutôt que de me définir par une seule spécialité, je m’intéresse à la façon dont le développement, l’architecture, la collaboration et l’apprentissage s’articulent. Pour moi, le bon travail naît là où la profondeur technique rencontre le pragmatisme – et là où l’on ne rend pas les choses plus complexes qu’elles ne le sont.

Dans les projets, j’apprécie la clarté, le sens des responsabilités et une collaboration respectueuse. J’aime travailler de manière structurée, je me plonge vite dans de nouveaux sujets et j’essaie de concevoir des solutions qui ne fonctionnent pas seulement aujourd’hui, mais qui auront encore du sens demain.

Ce blog est mon espace professionnel personnel. Il montre ce à quoi je réfléchis, comment je travaille et ce qui compte pour moi : de la substance plutôt que des buzzwords, apprendre plutôt que prendre la pose, et des solutions qui tiennent dans la pratique.

Si un sujet vous parle ou si vous souhaitez échanger, je serai ravi d’avoir de vos nouvelles.`,
  'about.contact': 'Contact',
  'about.writeMe': 'Écrivez-moi',
  'transparency.title': 'Transparence IA — rubeen.dev',
  'transparency.description':
    'Comment rubeen.dev utilise l’IA générative, comment les contenus sont signalés et qui en assume la responsabilité éditoriale.',
  'transparency.heading': 'Transparence IA',
  'transparency.body': `<p>Sur ce blog, j’écris sur l’AI Systems Engineering, et j’utilise moi-même les outils dont je parle. Cette page dit précisément où. Pas en petits caractères, mais parce que vous devez savoir ce que vous lisez.</p>
<h2>Ce qui vient de l’IA</h2>
<ul>
<li><strong>Textes des articles</strong> – Le corps des articles est généré par un modèle de langage. Le choix du sujet, la thèse, la structure, les exemples et les sources viennent de moi.</li>
<li><strong>Traductions</strong> – L’original allemand fait foi. Toutes les autres versions linguistiques en sont traduites avec l’IA générative, puis vérifiées lors d’un second passage par IA.</li>
<li><strong>Images</strong> – Les images d’en-tête et les illustrations sont générées par IA. Elles sont volontairement illustratives et ne montrent ni personnes, ni lieux, ni événements réels. Les captures d’écran d’applications réelles sont authentiques.</li>
<li><strong>Épisodes de podcast</strong> – Le script des dialogues et les voix des versions audio (en allemand uniquement) sont entièrement synthétiques. Les intervenants ne sont pas des personnes réelles. La construction de ce pipeline est décrite dans <a href="{podcastPost}">Des outils d’IA pour mon propre blog</a>.</li>
</ul>
<h2>Qui est responsable</h2>
<p>La responsabilité éditoriale de tous les contenus publiés ici incombe à <strong>{person}</strong>. Aucun texte n’est mis en ligne sans avoir été lu : je vérifie chaque article avant publication, je le corrige, je le raccourcis et j’écarte ce qui n’est pas juste. Les erreurs qui subsistent malgré tout sont les miennes, pas celles du modèle.</p>
<p>Si vous remarquez quelque chose de factuellement faux ou qui semble inventé : <a href="mailto:hello@rubeen.dev">écrivez-moi</a>. Je le corrigerai et signalerai la modification dans l’article.</p>
<h2>Comment les contenus sont signalés</h2>
<p>Chaque article porte une mention. Elle distingue deux niveaux :</p>
<ul>
<li><strong>Créé avec l’IA</strong> – Le texte et les images ont été générés par IA générative. Sur ce blog, c’est la norme.</li>
<li><strong>Avec l’aide de l’IA</strong> – J’ai écrit le texte moi-même ; l’IA n’a servi qu’à la relecture ou à la recherche.</li>
</ul>
<p>Les articles réalisés sans IA générative ne portent aucune mention. Le niveau apparaît en haut de l’article, à côté de la date et du temps de lecture : vous le voyez donc avant de commencer à lire. Il renvoie à la mention complète, responsabilité éditoriale comprise, à la fin de l’article.</p>
<h2>Cadre juridique</h2>
<p>Depuis le 2 août 2026, les obligations de transparence de l’<span class="whitespace-nowrap">article 50</span> du règlement européen sur l’IA (règlement (UE) 2024/1689) s’appliquent. Pour les textes générés par IA et publiés, l’<span class="whitespace-nowrap">article 50, paragraphe 4</span>, impose de le signaler lorsque le texte est publié dans le but d’informer le public sur des questions d’intérêt public ; cette obligation ne s’applique pas lorsque le contenu a fait l’objet d’un examen humain et qu’une personne désignée en assume la responsabilité éditoriale. L’<span class="whitespace-nowrap">article 50, paragraphe 5</span>, exige que ces informations soient fournies de manière claire et reconnaissable, au plus tard au moment de la première exposition.</p>
<p>Savoir si ce blog relève même de cette règle est discutable ; l’exception pour les contenus placés sous responsabilité éditoriale s’appliquerait probablement. Je signale pourtant tout, de façon systématique. Pas parce que j’y suis obligé, mais parce qu’un blog sur les systèmes d’IA ne devrait pas faire de mystère sur la façon dont il est lui-même fabriqué.</p>`,
};

export const nl: Dict = {
  'nav.blog': 'Blog',
  'nav.projects': 'Projecten',
  'nav.talks': 'Talks',
  'nav.tags': 'Tags',
  'nav.about': 'Over mij',
  'header.search': 'Zoeken',
  'header.theme': 'Thema wisselen',
  'lang.button': 'Taal kiezen',
  'lang.auto': 'Automatisch',
  'lang.autoHint': 'volgt je browser',
  'lang.missing': 'startpagina, deze pagina is niet vertaald',
  'footer.more': 'Meer links',
  'footer.transparency': 'AI-transparantie',
  'home.kicker': 'Software · Teams · Rampenbestrijding',
  'home.hello': 'Hoi, ik ben',
  'home.intro':
    'Ik schrijf over softwareontwikkeling, samenwerking en pragmatische oplossingen in complexe situaties – vanuit projecten, mijn werk als consultant bij <a href="https://www.innoq.com/en/staff/ruben-vitt/">INNOQ</a> en het raakvlak met de rampenbestrijding.',
  'home.readLatest': 'Lees de nieuwste posts',
  'home.latest': 'Nieuwste posts',
  'home.empty': 'Nog geen posts.',
  'home.upcoming': 'Binnenkort onderweg',
  'home.allTalks': 'Alle talks →',
  'home.building': 'Waar ik aan bouw',
  'home.allProjects': 'Alle projecten →',
  'home.title': 'rubeen.dev — Blog',
  'home.description':
    'Ik schrijf over softwareontwikkeling, samenwerking en pragmatische oplossingen in complexe situaties – vanuit projecten, consultancy en het raakvlak met de rampenbestrijding.',
  'post.readingTime': 'min leestijd',
  'post.updated': 'Bijgewerkt',
  'post.podcastNote':
    'De dialoog en de stemmen van deze audioversie zijn volledig door AI gegenereerd.',
  'card.publishedAt': 'verschenen bij',
  'card.with': 'met',
  'card.inEnglish': 'in het Engels',
  'tags.title': 'Tags',
  'tags.empty': 'Nog geen tags.',
  'tags.all': '← Alle tags',
  'tags.post': 'post',
  'tags.posts': 'posts',
  'callout.info': 'Opmerking',
  'callout.tip': 'Tip',
  'callout.warning': 'Let op',
  'callout.danger': 'Gevaar',
  'ai.generated': 'Gemaakt met AI',
  'ai.assisted': 'Met hulp van AI',
  'ai.generatedText': 'De tekst en afbeeldingen van dit artikel zijn gemaakt met generatieve AI.',
  'ai.assistedText':
    'Dit artikel is bewerkt met generatieve AI, bijvoorbeeld voor eindredactie en research.',
  'ai.translatedText': 'Deze versie is met generatieve AI vertaald uit het Duitse origineel.',
  'ai.responsibility': 'Redactionele verantwoordelijkheid',
  'ai.howThisBlog': 'Hoe deze blog AI gebruikt',
  'ai.ariaLabel': 'Transparantieverklaring over door AI gegenereerde inhoud',
  'search.error': 'Zoeken kon niet worden geladen. Draai in dev-modus eerst een build.',
  'diagram.zoom': 'Diagram vergroten',
  'diagram.reset': 'Weergave herstellen',
  'diagram.close': 'Sluiten',
  'rss.description': 'Een blog over webdevelopment en technologie',
  'about.title': 'Over mij — rubeen.dev',
  'about.description':
    'Over Ruben – consultant bij INNOQ, softwareontwikkelaar en vrijwilliger bij de rampenbestrijding.',
  'about.heading': 'Over mij',
  'about.heroAlt': 'Softwareontwikkeling ontmoet rampenbestrijding – twee werelden die ik verbind',
  'about.body': `Ik schrijf hier om mijn gedachten te ordenen, ervaringen vast te leggen en dingen zo uit te werken dat ze ook voor anderen nuttig zijn.

Ik ben Ruben en ik werk als consultant bij <a href="https://www.innoq.com/en/staff/ruben-vitt/">INNOQ</a>. Ik ben geïnteresseerd in goede technische oplossingen, heldere communicatie en de vraag hoe teams in complexe situaties tot verstandige beslissingen komen.

Naast mijn werk in de softwareontwikkeling zet ik me in voor een vakgroep Informatie en Communicatie binnen de Duitse rampenbestrijding. Die twee werelden verbind ik al in projecten als <a href="https://uav.iuk-ue.de">uav.iuk-ue.de</a> – en juist die verbinding komt op deze blog steeds weer terug.

Hier schrijf ik over onderwerpen die me vakmatig bezighouden: ervaringen uit projecten, gedachten over software en samenwerking, leernotities en observaties uit de dagelijkse praktijk. Niet als definitieve waarheden, maar als poging om dingen beter te begrijpen en begrijpelijk te maken.

Ik kijk graag breed naar techniek. In plaats van mezelf te definiëren via één specialisme, interesseert mij het samenspel van development, architectuur, samenwerking en leren. Goed werk ontstaat voor mij waar vakinhoudelijke diepgang en pragmatisme samenkomen – en waar complexiteit niet groter wordt gemaakt dan nodig.

In projecten waardeer ik helderheid, verantwoordelijkheid en respectvolle samenwerking. Ik werk graag gestructureerd, duik snel in nieuwe onderwerpen en probeer oplossingen zo te ontwerpen dat ze niet alleen vandaag werken, maar ook later nog zinvol zijn.

Deze blog is mijn persoonlijke vakmatige ruimte. Hij laat zien waar ik over nadenk, hoe ik werk en wat ik belangrijk vind: inhoud in plaats van buzzwords, leren in plaats van poseren en oplossingen die in de praktijk standhouden.

Spreekt een onderwerp je aan of wil je van gedachten wisselen? Dan hoor ik graag van je.`,
  'about.contact': 'Contact',
  'about.writeMe': 'Stuur me een bericht',
  'transparency.title': 'AI-transparantie — rubeen.dev',
  'transparency.description':
    'Hoe rubeen.dev generatieve AI inzet, hoe inhoud wordt gelabeld en wie de redactionele verantwoordelijkheid draagt.',
  'transparency.heading': 'AI-transparantie',
  'transparency.body': `<p>Op deze blog schrijf ik over AI Systems Engineering, en de tools waarover ik schrijf, gebruik ik zelf ook. Deze pagina vertelt precies waar. Niet als kleine lettertjes, maar omdat je moet weten wat je hier leest.</p>
<h2>Wat van AI komt</h2>
<ul>
<li><strong>Artikelteksten</strong> – De lopende tekst van de posts wordt gegenereerd door een taalmodel. Onderwerpkeuze, stelling, structuur, voorbeelden en bronnen komen van mij.</li>
<li><strong>Vertalingen</strong> – Het Duitse origineel is leidend. Alle andere taalversies worden daaruit vertaald met generatieve AI en in een tweede AI-ronde gecontroleerd.</li>
<li><strong>Afbeeldingen</strong> – Hero-afbeeldingen en illustraties zijn door AI gegenereerd. Ze zijn bewust illustratief en tonen geen echte personen, plaatsen of gebeurtenissen. Screenshots van echte applicaties zijn echt.</li>
<li><strong>Podcastafleveringen</strong> – Het dialoogscript en de stemmen van de audioversies (alleen in het Duits) zijn volledig synthetisch. De sprekers zijn geen echte personen. Hoe die pipeline in elkaar zit, staat in <a href="{podcastPost}">AI-tools voor mijn eigen blog</a>.</li>
</ul>
<h2>Wie verantwoordelijk is</h2>
<p>De redactionele verantwoordelijkheid voor alle inhoud die hier verschijnt, ligt bij <strong>{person}</strong>. Geen tekst gaat ongelezen online: ik controleer elke post vóór publicatie inhoudelijk, corrigeer, kort in en schrap wat niet klopt. Fouten die er toch in blijven staan, zijn van mij – niet van het model.</p>
<p>Valt je iets op dat feitelijk onjuist is of verzonnen lijkt: <a href="mailto:hello@rubeen.dev">stuur me een bericht</a>. Ik corrigeer het en vermeld de wijziging in de post.</p>
<h2>Hoe inhoud wordt gelabeld</h2>
<p>Elke post heeft een label. Dat onderscheidt twee niveaus:</p>
<ul>
<li><strong>Gemaakt met AI</strong> – Tekst en afbeeldingen zijn gemaakt door generatieve AI. Op deze blog is dat de regel.</li>
<li><strong>Met hulp van AI</strong> – De tekst heb ik zelf geschreven; AI is alleen gebruikt voor eindredactie of research.</li>
</ul>
<p>Posts zonder generatieve AI hebben geen label. Het niveau staat bovenaan de post naast de datum en de leestijd, dus je ziet het voordat je begint te lezen. Het linkt naar de volledige toelichting, inclusief de redactionele verantwoordelijkheid, onderaan de post.</p>
<h2>Juridisch kader</h2>
<p>Sinds 2 augustus 2026 gelden de transparantieverplichtingen uit <span class="whitespace-nowrap">artikel 50</span> van de AI-verordening (Verordening (EU) 2024/1689). Voor gepubliceerde, door AI gegenereerde tekst eist <span class="whitespace-nowrap">artikel 50, lid 4</span>, dat dit bekend wordt gemaakt als de tekst wordt gepubliceerd om het publiek te informeren over aangelegenheden van algemeen belang; die verplichting geldt niet als de inhoud door een mens is beoordeeld en een aangewezen persoon de redactionele verantwoordelijkheid draagt. <span class="whitespace-nowrap">Artikel 50, lid 5</span>, eist dat de informatie duidelijk en herkenbaar wordt verstrekt, uiterlijk op het moment van de eerste blootstelling.</p>
<p>Of deze blog überhaupt onder die regel valt, is discutabel; de uitzondering voor inhoud onder redactionele verantwoordelijkheid zou hier waarschijnlijk van toepassing zijn. Ik label toch alles, consequent. Niet omdat het moet, maar omdat een blog over AI-systemen niet geheimzinnig hoort te doen over hoe hij zelf tot stand komt.</p>`,
};

export const sv: Dict = {
  'nav.blog': 'Blogg',
  'nav.projects': 'Projekt',
  'nav.talks': 'Föredrag',
  'nav.tags': 'Taggar',
  'nav.about': 'Om mig',
  'header.search': 'Sök',
  'header.theme': 'Byt tema',
  'lang.button': 'Välj språk',
  'lang.auto': 'Automatiskt',
  'lang.autoHint': 'följer din webbläsare',
  'lang.missing': 'startsidan, den här sidan är inte översatt',
  'footer.more': 'Fler länkar',
  'footer.transparency': 'AI-transparens',
  'home.kicker': 'Mjukvara · Team · Krisberedskap',
  'home.hello': 'Hej, jag heter',
  'home.intro':
    'Jag skriver om mjukvaruutveckling, samarbete och pragmatiska lösningar i komplexa sammanhang – utifrån projekt, mitt konsultarbete på <a href="https://www.innoq.com/en/staff/ruben-vitt/">INNOQ</a> och mötet mellan mjukvara och krisberedskap.',
  'home.readLatest': 'Läs de senaste inläggen',
  'home.latest': 'Senaste inläggen',
  'home.empty': 'Inga inlägg ännu.',
  'home.upcoming': 'Snart på gång',
  'home.allTalks': 'Alla föredrag →',
  'home.building': 'Det här bygger jag på',
  'home.allProjects': 'Alla projekt →',
  'home.title': 'rubeen.dev — Blogg',
  'home.description':
    'Jag skriver om mjukvaruutveckling, samarbete och pragmatiska lösningar i komplexa sammanhang – utifrån projekt, konsultuppdrag och mötet mellan mjukvara och krisberedskap.',
  'post.readingTime': 'min läsning',
  'post.updated': 'Uppdaterad',
  'post.podcastNote': 'Dialogen och rösterna i den här ljudversionen är helt AI-genererade.',
  'card.publishedAt': 'publicerad hos',
  'card.with': 'med',
  'card.inEnglish': 'på engelska',
  'tags.title': 'Taggar',
  'tags.empty': 'Inga taggar ännu.',
  'tags.all': '← Alla taggar',
  'tags.post': 'inlägg',
  'tags.posts': 'inlägg',
  'callout.info': 'Obs',
  'callout.tip': 'Tips',
  'callout.warning': 'Varning',
  'callout.danger': 'Fara',
  'ai.generated': 'Skapad med AI',
  'ai.assisted': 'Med AI-stöd',
  'ai.generatedText': 'Texten och bilderna i den här artikeln har skapats med generativ AI.',
  'ai.assistedText':
    'Den här artikeln har bearbetats med generativ AI, till exempel för språkgranskning och research.',
  'ai.translatedText':
    'Den här versionen har översatts från det tyska originalet med generativ AI.',
  'ai.responsibility': 'Redaktionellt ansvar',
  'ai.howThisBlog': 'Så använder den här bloggen AI',
  'ai.ariaLabel': 'Transparensinformation om AI-genererat innehåll',
  'search.error': 'Sökningen kunde inte laddas. I dev-läge behöver du köra en build först.',
  'diagram.zoom': 'Förstora diagrammet',
  'diagram.reset': 'Återställ vyn',
  'diagram.close': 'Stäng',
  'rss.description': 'En blogg om webbutveckling och teknik',
  'about.title': 'Om mig — rubeen.dev',
  'about.description':
    'Om Ruben – konsult på INNOQ, mjukvaruutvecklare och engagerad i krisberedskap.',
  'about.heading': 'Om mig',
  'about.heroAlt': 'Mjukvaruutveckling möter krisberedskap – två världar som jag förenar',
  'about.body': `Jag skriver här för att sortera mina tankar, ta vara på erfarenheter och formulera saker så att de blir användbara även för andra.

Jag heter Ruben och arbetar som konsult på <a href="https://www.innoq.com/en/staff/ruben-vitt/">INNOQ</a>. Jag intresserar mig för bra tekniska lösningar, tydlig kommunikation och frågan om hur team kommer fram till förnuftiga beslut i komplexa situationer.

Vid sidan av mjukvaruutvecklingen engagerar jag mig i en fackgrupp för information och kommunikation inom den tyska krisberedskapen. De två världarna förenar jag redan i projekt som <a href="https://uav.iuk-ue.de">uav.iuk-ue.de</a> – och just den kopplingen kommer att dyka upp gång på gång här i bloggen.

Här skriver jag om ämnen som sysselsätter mig i yrket: erfarenheter från projekt, tankar om mjukvara och samarbete, studieanteckningar och iakttagelser från vardagen på jobbet. Inte som slutgiltiga sanningar, utan som ett försök att förstå saker bättre och göra dem begripliga.

Jag gillar att se brett på teknik. I stället för att definiera mig genom ett enda specialområde intresserar jag mig för samspelet mellan utveckling, arkitektur, samarbete och lärande. För mig uppstår bra arbete där djup ämneskunskap möter pragmatism – och där komplexiteten inte görs större än den behöver vara.

I projekt värdesätter jag tydlighet, ansvar och respektfullt samarbete. Jag arbetar gärna strukturerat, sätter mig snabbt in i nya ämnen och försöker utforma lösningar som inte bara fungerar i dag utan också håller måttet längre fram.

Den här bloggen är mitt personliga yrkesrum. Den visar vad jag funderar på, hur jag arbetar och vad som är viktigt för mig: substans i stället för buzzwords, lärande i stället för posering och lösningar som håller i praktiken.

Om något ämne tilltalar dig eller om du vill bolla tankar blir jag glad att höra av dig.`,
  'about.contact': 'Kontakt',
  'about.writeMe': 'Skriv till mig',
  'transparency.title': 'AI-transparens — rubeen.dev',
  'transparency.description':
    'Hur rubeen.dev använder generativ AI, hur innehållet märks och vem som har det redaktionella ansvaret.',
  'transparency.heading': 'AI-transparens',
  'transparency.body': `<p>I den här bloggen skriver jag om AI Systems Engineering, och jag använder själv verktygen jag skriver om. Den här sidan berättar exakt var. Inte som finstilt, utan för att du ska veta vad du läser här.</p>
<h2>Det här kommer från AI</h2>
<ul>
<li><strong>Artikeltexter</strong> – Brödtexten i inläggen genereras av en språkmodell. Ämnesval, tes, struktur, exempel och källor kommer från mig.</li>
<li><strong>Översättningar</strong> – Det tyska originalet är det som gäller. Alla andra språkversioner översätts från det med generativ AI och granskas i en andra AI-omgång.</li>
<li><strong>Bilder</strong> – Hero-bilder och illustrationer är AI-genererade. De är medvetet illustrativa och visar inga verkliga personer, platser eller händelser. Skärmdumpar från riktiga applikationer är äkta.</li>
<li><strong>Poddavsnitt</strong> – Dialogmanus och röster i ljudversionerna (bara på tyska) är helt syntetiska. Talarna är inte verkliga personer. Hur den pipelinen är byggd beskrivs i <a href="{podcastPost}">AI-verktyg för min egen blogg</a>.</li>
</ul>
<h2>Vem som ansvarar</h2>
<p>Det redaktionella ansvaret för allt innehåll som publiceras här ligger hos <strong>{person}</strong>. Ingen text går ut oläst: jag granskar varje inlägg innan det publiceras, rättar, kortar och stryker det som inte stämmer. Fel som ändå blir kvar är mina – inte modellens.</p>
<p>Om du ser något som är sakligt fel eller verkar påhittat: <a href="mailto:hello@rubeen.dev">skriv till mig</a>. Jag rättar det och anger ändringen i inlägget.</p>
<h2>Så märks innehållet</h2>
<p>Varje inlägg har en märkning. Den skiljer mellan två nivåer:</p>
<ul>
<li><strong>Skapad med AI</strong> – Text och bilder har genererats med generativ AI. I den här bloggen är det normalfallet.</li>
<li><strong>Med AI-stöd</strong> – Texten har jag skrivit själv; AI har bara använts för språkgranskning eller research.</li>
</ul>
<p>Inlägg utan generativ AI har ingen märkning. Nivån står överst i inlägget bredvid datum och lästid, så du ser den innan du börjar läsa. Den länkar till den fullständiga informationen, inklusive det redaktionella ansvaret, i slutet av inlägget.</p>
<h2>Rättslig ram</h2>
<p>Sedan den 2 augusti 2026 gäller transparenskraven i <span class="whitespace-nowrap">artikel 50</span> i EU:s AI-förordning (förordning (EU) 2024/1689). För publicerad AI-genererad text kräver <span class="whitespace-nowrap">artikel 50.4</span> att detta anges om texten publiceras i syfte att informera allmänheten om frågor av allmänt intresse; skyldigheten gäller inte om innehållet har genomgått mänsklig granskning och en utsedd person har det redaktionella ansvaret. <span class="whitespace-nowrap">Artikel 50.5</span> kräver att informationen lämnas på ett tydligt och urskiljbart sätt senast vid den första exponeringen.</p>
<p>Om den här bloggen alls omfattas av regeln går att diskutera; undantaget för innehåll under redaktionellt ansvar skulle sannolikt gälla. Jag märker ändå allt, konsekvent. Inte för att jag måste, utan för att en blogg om AI-system inte borde vara hemlighetsfull om hur den själv blir till.</p>`,
};

export const nb: Dict = {
  'nav.blog': 'Blogg',
  'nav.projects': 'Prosjekter',
  'nav.talks': 'Foredrag',
  'nav.tags': 'Tagger',
  'nav.about': 'Om meg',
  'header.search': 'Søk',
  'header.theme': 'Bytt tema',
  'lang.button': 'Velg språk',
  'lang.auto': 'Automatisk',
  'lang.autoHint': 'følger nettleseren din',
  'lang.missing': 'forsiden, denne siden er ikke oversatt',
  'footer.more': 'Flere lenker',
  'footer.transparency': 'AI-åpenhet',
  'home.kicker': 'Programvare · Team · Beredskap',
  'home.hello': 'Hei, jeg heter',
  'home.intro':
    'Jeg skriver om programvareutvikling, samarbeid og pragmatiske løsninger i komplekse sammenhenger – fra prosjekter, rådgivningsarbeidet mitt i <a href="https://www.innoq.com/en/staff/ruben-vitt/">INNOQ</a> og der programvare møter beredskap.',
  'home.readLatest': 'Les de nyeste innleggene',
  'home.latest': 'Nyeste innlegg',
  'home.empty': 'Ingen innlegg ennå.',
  'home.upcoming': 'Snart på farten',
  'home.allTalks': 'Alle foredrag →',
  'home.building': 'Dette bygger jeg på',
  'home.allProjects': 'Alle prosjekter →',
  'home.title': 'rubeen.dev — Blogg',
  'home.description':
    'Jeg skriver om programvareutvikling, samarbeid og pragmatiske løsninger i komplekse sammenhenger – fra prosjekter, rådgivning og der programvare møter beredskap.',
  'post.readingTime': 'min lesetid',
  'post.updated': 'Oppdatert',
  'post.podcastNote': 'Dialogen og stemmene i denne lydversjonen er helt AI-generert.',
  'card.publishedAt': 'publisert hos',
  'card.with': 'med',
  'card.inEnglish': 'på engelsk',
  'tags.title': 'Tagger',
  'tags.empty': 'Ingen tagger ennå.',
  'tags.all': '← Alle tagger',
  'tags.post': 'innlegg',
  'tags.posts': 'innlegg',
  'callout.info': 'Merk',
  'callout.tip': 'Tips',
  'callout.warning': 'Obs',
  'callout.danger': 'Fare',
  'ai.generated': 'Laget med AI',
  'ai.assisted': 'Med AI-hjelp',
  'ai.generatedText': 'Teksten og bildene i denne artikkelen er laget med generativ AI.',
  'ai.assistedText':
    'Denne artikkelen er bearbeidet med generativ AI, for eksempel til språkvask og research.',
  'ai.translatedText': 'Denne versjonen er oversatt fra den tyske originalen med generativ AI.',
  'ai.responsibility': 'Redaksjonelt ansvar',
  'ai.howThisBlog': 'Slik bruker denne bloggen AI',
  'ai.ariaLabel': 'Åpenhetsmerknad om AI-generert innhold',
  'search.error': 'Søket kunne ikke lastes. I dev-modus må du kjøre en build først.',
  'diagram.zoom': 'Forstørr diagrammet',
  'diagram.reset': 'Tilbakestill visningen',
  'diagram.close': 'Lukk',
  'rss.description': 'En blogg om webutvikling og teknologi',
  'about.title': 'Om meg — rubeen.dev',
  'about.description':
    'Om Ruben – konsulent i INNOQ, programvareutvikler og frivillig i beredskapsarbeid.',
  'about.heading': 'Om meg',
  'about.heroAlt': 'Programvareutvikling møter beredskap – to verdener jeg knytter sammen',
  'about.body': `Jeg skriver her for å sortere tankene mine, ta vare på erfaringer og bearbeide ting slik at de også er nyttige for andre.

Jeg heter Ruben og jobber som konsulent i <a href="https://www.innoq.com/en/staff/ruben-vitt/">INNOQ</a>. Jeg er opptatt av gode tekniske løsninger, tydelig kommunikasjon og hvordan team kommer fram til fornuftige beslutninger i komplekse situasjoner.

Ved siden av jobben med programvareutvikling engasjerer jeg meg i en faggruppe for informasjon og kommunikasjon i den tyske beredskapen. De to verdenene knytter jeg allerede sammen i prosjekter som <a href="https://uav.iuk-ue.de">uav.iuk-ue.de</a> – og akkurat den forbindelsen kommer til å dukke opp igjen og igjen i denne bloggen.

Her skriver jeg om temaer som opptar meg faglig: erfaringer fra prosjekter, tanker om programvare og samarbeid, læringsnotater og observasjoner fra arbeidshverdagen. Ikke som endelige sannheter, men som et forsøk på å forstå ting bedre og gjøre dem forståelige.

Jeg liker å se bredt på teknologi. I stedet for å definere meg gjennom ett enkelt spesialfelt er jeg interessert i samspillet mellom utvikling, arkitektur, samarbeid og læring. For meg oppstår godt arbeid der faglig dybde møter pragmatisme – og der kompleksiteten ikke gjøres større enn den trenger å være.

I prosjekter setter jeg pris på klarhet, ansvar og respektfullt samarbeid. Jeg liker å jobbe strukturert, setter meg raskt inn i nye temaer og prøver å utforme løsninger som ikke bare fungerer i dag, men som også gir mening senere.

Denne bloggen er mitt personlige faglige rom. Den viser hva jeg tenker på, hvordan jeg jobber og hva som er viktig for meg: substans framfor buzzwords, læring framfor posering og løsninger som holder i praksis.

Hvis et tema treffer deg, eller du har lyst til å utveksle tanker, blir jeg glad for en melding.`,
  'about.contact': 'Kontakt',
  'about.writeMe': 'Skriv til meg',
  'transparency.title': 'AI-åpenhet — rubeen.dev',
  'transparency.description':
    'Hvordan rubeen.dev bruker generativ AI, hvordan innhold merkes og hvem som har det redaksjonelle ansvaret.',
  'transparency.heading': 'AI-åpenhet',
  'transparency.body': `<p>I denne bloggen skriver jeg om AI Systems Engineering, og jeg bruker selv verktøyene jeg skriver om. Denne siden forteller nøyaktig hvor. Ikke som liten skrift, men fordi du skal vite hva du leser her.</p>
<h2>Dette kommer fra AI</h2>
<ul>
<li><strong>Artikkeltekster</strong> – Brødteksten i innleggene genereres av en språkmodell. Temavalg, tese, struktur, eksempler og kilder kommer fra meg.</li>
<li><strong>Oversettelser</strong> – Den tyske originalen er den som gjelder. Alle andre språkversjoner oversettes fra den med generativ AI og kontrolleres i en ny AI-runde.</li>
<li><strong>Bilder</strong> – Hero-bilder og illustrasjoner er AI-generert. De er bevisst illustrative og viser ingen virkelige personer, steder eller hendelser. Skjermbilder fra ekte applikasjoner er ekte.</li>
<li><strong>Podkastepisoder</strong> – Dialogmanus og stemmer i lydversjonene (bare på tysk) er helt syntetiske. Talerne er ikke virkelige personer. Hvordan denne pipelinen er bygget, står i <a href="{podcastPost}">AI-verktøy for min egen blogg</a>.</li>
</ul>
<h2>Hvem som har ansvaret</h2>
<p>Det redaksjonelle ansvaret for alt innhold som publiseres her, ligger hos <strong>{person}</strong>. Ingen tekst går ut ulest: Jeg gjennomgår hvert innlegg før publisering, retter, kutter og forkaster det som ikke stemmer. Feil som likevel blir stående, er mine – ikke modellens.</p>
<p>Hvis du ser noe som er faktisk feil eller virker oppdiktet: <a href="mailto:hello@rubeen.dev">skriv til meg</a>. Jeg retter det og opplyser om endringen i innlegget.</p>
<h2>Slik merkes innholdet</h2>
<p>Hvert innlegg har en merking. Den skiller mellom to nivåer:</p>
<ul>
<li><strong>Laget med AI</strong> – Tekst og bilder er laget med generativ AI. I denne bloggen er det normalen.</li>
<li><strong>Med AI-hjelp</strong> – Teksten har jeg skrevet selv; AI er bare brukt til språkvask eller research.</li>
</ul>
<p>Innlegg uten generativ AI har ingen merking. Nivået står øverst i innlegget ved siden av dato og lesetid, så du ser det før du begynner å lese. Det lenker til den fullstendige merknaden, inkludert det redaksjonelle ansvaret, nederst i innlegget.</p>
<h2>Rettslig ramme</h2>
<p>Fra 2. august 2026 gjelder åpenhetspliktene i <span class="whitespace-nowrap">artikkel 50</span> i EUs AI-forordning (forordning (EU) 2024/1689). For publisert AI-generert tekst krever <span class="whitespace-nowrap">artikkel 50 nr. 4</span> at dette opplyses når teksten publiseres for å informere offentligheten om saker av allmenn interesse; plikten gjelder ikke dersom innholdet har gjennomgått menneskelig kontroll og en navngitt person har det redaksjonelle ansvaret. <span class="whitespace-nowrap">Artikkel 50 nr. 5</span> krever at opplysningene gis på en klar og tydelig måte senest ved første eksponering.</p>
<p>Om denne bloggen i det hele tatt faller inn under regelen, kan diskuteres; unntaket for innhold under redaksjonelt ansvar ville trolig gjelde her. Jeg merker likevel alt, konsekvent. Ikke fordi jeg må, men fordi en blogg om AI-systemer ikke bør være hemmelighetsfull om hvordan den selv blir til.</p>`,
};

export const pott: Dict = {
  'nav.blog': 'Blog',
  'nav.projects': 'Baustellen',
  'nav.talks': 'Talks',
  'nav.tags': 'Tags',
  'nav.about': 'Dat bin ich',
  'header.search': 'Ma kucken',
  'header.theme': 'Licht an, Licht aus',
  'lang.button': 'Sprache aussuchen',
  'lang.auto': 'Automatisch',
  'lang.autoHint': 'macht, wat dein Browser sacht',
  'lang.missing': 'Startseite, die Seite gibbet da nich',
  'footer.more': 'Noch mehr Links',
  'footer.transparency': 'KI-Transparenz',
  'home.kicker': 'Software · Kumpels · Katastrophenschutz',
  'home.hello': 'Tach Kumpel, ich bin',
  'home.intro':
    'Ich schreib hier über Softwareentwicklung, Zusammenarbeit und Lösungen, die wat taugen, auch wenn et kompliziert wird – aus Projekten, ausm Consulting bei <a href="https://www.innoq.com/de/staff/ruben-vitt/">INNOQ</a> und da, wo dat Ganze auf’n Katastrophenschutz trifft.',
  'home.readLatest': 'Getz die neuesten Posts lesen',
  'home.latest': 'Frisch ausse Grube',
  'home.empty': 'Hier is noch nix.',
  'home.upcoming': 'Wo ich demnächst auftauch',
  'home.allTalks': 'Alle Talks →',
  'home.building': 'Woran ich grad am Bauen bin',
  'home.allProjects': 'Alle Baustellen →',
  'home.title': 'rubeen.dev — Blog',
  'home.description':
    'Ich schreib über Softwareentwicklung, Zusammenarbeit und Lösungen, die wat taugen, auch wenn et kompliziert wird – aus Projekten, ausm Consulting und da, wo dat Ganze auf’n Katastrophenschutz trifft.',
  'post.readingTime': 'min am Lesen',
  'post.updated': 'Nachgebessert',
  'post.podcastNote':
    'Dialog und Stimmen von dieser Audio-Fassung sind komplett KI-generiert. Da sitzt keiner am Mikro.',
  'card.publishedAt': 'erschienen bei',
  'card.with': 'mit',
  'card.inEnglish': 'auf Englisch',
  'tags.title': 'Tags',
  'tags.empty': 'Hier gibbet noch keine Tags.',
  'tags.all': '← Alle Tags',
  'tags.post': 'Post',
  'tags.posts': 'Posts',
  'callout.info': 'Hömma',
  'callout.tip': 'Tipp vom Kumpel',
  'callout.warning': 'Pass bloß auf',
  'callout.danger': 'Finger wech',
  'ai.generated': 'Mit KI gemacht',
  'ai.assisted': 'Mit KI-Hilfe',
  'ai.generatedText': 'Text und Bilder von diesem Artikel hat ’ne generative KI gemacht.',
  'ai.assistedText':
    'Über diesen Artikel is ’ne generative KI drübergegangen, so für Lektorat und Recherche.',
  'ai.translatedText':
    'Diese Fassung hat ’ne generative KI aus dem deutschen Original ins Ruhrdeutsche übertragen.',
  'ai.responsibility': 'Wer dafür geradesteht',
  'ai.howThisBlog': 'Wie dat hier mit der KI läuft',
  'ai.ariaLabel': 'Transparenzhinweis zu KI-generierten Inhalten',
  'search.error': 'Suche will nich laden. Im Dev-Modus ers ma builden.',
  'diagram.zoom': 'Diagramm größer machen',
  'diagram.reset': 'Wieder normal machen',
  'diagram.close': 'Zumachen',
  'rss.description': 'Ein Blog über Web-Development und Technik, aussem Pott',
  'about.title': 'Dat bin ich — rubeen.dev',
  'about.description':
    'Über Ruben – Consultant bei INNOQ, Softwareentwickler und im Katastrophenschutz dabei.',
  'about.heading': 'Dat bin ich',
  'about.heroAlt':
    'Softwareentwicklung trifft Katastrophenschutz – zwei Welten, die ich zusammenbring',
  'about.body': `Ich schreib hier, um meine Gedanken zu sortieren, Erfahrungen festzuhalten und Sachen so aufzubereiten, dat die auch für andere wat bringen.

Ich bin Ruben und arbeite als Consultant bei <a href="https://www.innoq.com/de/staff/ruben-vitt/">INNOQ</a>. Mich interessieren gute technische Lösungen, klare Ansagen und die Frage, wie Teams in komplizierten Lagen zu vernünftigen Entscheidungen kommen.

Neben der Softwareentwicklung bin ich in der Fachgruppe Information und Kommunikation im Katastrophenschutz dabei. Die beiden Welten bring ich schon in Projekten wie <a href="https://uav.iuk-ue.de">uav.iuk-ue.de</a> zusammen – und genau dat wird hier im Blog auch immer wieder ’ne Rolle spielen.

Hier schreib ich über dat, wat mich fachlich umtreibt: Erfahrungen aus Projekten, Gedanken zu Software und Zusammenarbeit, Lernnotizen und wat mir im Arbeitsalltach so auffällt. Nich als letzte Wahrheit, sondern als Versuch, Sachen besser zu verstehen und so zu erklären, dat man se kapiert.

Ich kuck gern breit auf Technik. Statt mich nur über ein einziges Spezialgebiet zu definieren, interessiert mich, wie Entwicklung, Architektur, Zusammenarbeit und Lernen zusammenspielen. Gute Arbeit entsteht für mich da, wo fachliche Tiefe auf Pragmatismus trifft – und wo man dat Ganze nich komplizierter macht, als et sein muss.

In Projekten mag ich Klarheit, Verantwortung und dat man anständig miteinander umgeht. Ich arbeite gern strukturiert, fuchs mich schnell in neue Themen rein und bau Lösungen so, dat die nich nur heute laufen, sondern auch später noch Sinn machen.

Dieser Blog is mein persönlicher fachlicher Raum. Hier sieht man, worüber ich nachdenk, wie ich arbeite und wat mir wichtig is: Butter bei die Fische statt Buzzwords, Lernen statt Pose und Lösungen, die auch auf Schicht halten.

Wenn dich ’n Thema anspricht oder du ma quatschen willst, schreib mir einfach. Da freu ich mich drüber, woll?`,
  'about.contact': 'Kontakt',
  'about.writeMe': 'Schreib ma',
  'transparency.title': 'KI-Transparenz — rubeen.dev',
  'transparency.description':
    'Wie auf rubeen.dev generative KI benutzt wird, wie dat gekennzeichnet is und wer die redaktionelle Verantwortung trägt.',
  'transparency.heading': 'KI-Transparenz',
  'transparency.body': `<p>Ich schreib auf diesem Blog über AI Systems Engineering – und benutz die Werkzeuge, über die ich schreib, auch selber. Auf dieser Seite steht, wo genau. Nich als Kleingedrucktes, sondern weil du wissen sollst, wat du hier liest.</p>
<h2>Wat von der KI kommt</h2>
<ul>
<li><strong>Artikeltexte</strong> – Den Fließtext von den Beiträgen erzeugt ein Sprachmodell. Themenwahl, These, Struktur, Beispiele und Quellen kommen von mir.</li>
<li><strong>Übersetzungen</strong> – Maßgeblich is dat deutsche Original. Alle anderen Sprachfassungen, die Ruhrpott-Fassung inklusive, werden daraus mit generativer KI übersetzt und in ’nem zweiten KI-Durchgang geprüft.</li>
<li><strong>Bilder</strong> – Hero- und Illustrationsbilder sind KI-generiert. Die sind mit Absicht illustrativ und zeigen keine echten Personen, Orte oder Ereignisse. Screenshots aus echten Anwendungen sind echt.</li>
<li><strong>Podcast-Folgen</strong> – Dialogskript und Stimmen von den Audio-Fassungen (nur auf Hochdeutsch) sind komplett synthetisch. Die Sprecher sind keine echten Menschen. Wie die Pipeline gebaut is, steht in <a href="{podcastPost}">AI-Werkzeuch für’n eigenen Blog</a>.</li>
</ul>
<h2>Wer dafür geradesteht</h2>
<p>Die redaktionelle Verantwortung für alles, wat hier veröffentlicht wird, trägt <strong>{person}</strong>. Kein Text geht ungelesen raus: Ich prüf jeden Beitrag vorm Veröffentlichen inhaltlich, korrigier, kürz und schmeiß raus, wat nich stimmt. Fehler, die trotzdem stehen bleiben, gehen auf meine Kappe – nich auf die vom Modell.</p>
<p>Wenn dir wat auffällt, dat sachlich falsch is oder ausgedacht aussieht: <a href="mailto:hello@rubeen.dev">schreib mir</a>. Ich korrigier dat und schreib die Änderung im Beitrag dazu.</p>
<h2>Wie gekennzeichnet wird</h2>
<p>Jeder Beitrag hat ’nen Hinweis. Der unterscheidet zwei Stufen:</p>
<ul>
<li><strong>Mit KI gemacht</strong> – Text und Bilder hat generative KI erzeugt. Dat is auf diesem Blog der Normalfall.</li>
<li><strong>Mit KI-Hilfe</strong> – Den Text hab ich selber geschrieben, KI war nur für Lektorat oder Recherche dabei.</li>
</ul>
<p>Beiträge ohne generative KI haben keinen Hinweis. Die Stufe steht oben in der Metazeile neben Datum und Lesezeit, wer den Beitrag aufmacht, sieht se also, bevor er anfängt zu lesen. Se verlinkt auf den ausführlichen Hinweis mit der redaktionellen Verantwortung am Ende vom Beitrag.</p>
<h2>Wat dat Gesetz sacht</h2>
<p>Seit dem 2. August 2026 gelten die Transparenzpflichten aus <span class="whitespace-nowrap">Art. 50</span> der KI-Verordnung (EU) 2024/1689. Für veröffentlichte KI-generierte Texte verlangt <span class="whitespace-nowrap">Art. 50 Abs. 4</span> eine Offenlegung, sofern die Texte die Öffentlichkeit über Angelegenheiten von öffentlichem Interesse informieren; die Pflicht entfällt, wenn der Inhalt von einem Menschen überprüft wurde und eine benannte Person die redaktionelle Verantwortung trägt. <span class="whitespace-nowrap">Art. 50 Abs. 5</span> verlangt, dat Hinweise klar, eindeutig und spätestens bei der ersten Wahrnehmung kommen.</p>
<p>Ob dieser Blog überhaupt unter die Norm fällt, kann man diskutieren – die Ausnahme für redaktionell verantwortete Inhalte würd hier wahrscheinlich greifen. Ich kennzeichne trotzdem, und zwar durchgängig. Nich weil ich muss, sondern weil ’n Blog über KI-Systeme schlecht rumdrucksen kann, wie er selber entsteht. Butter bei die Fische eben.</p>`,
};
