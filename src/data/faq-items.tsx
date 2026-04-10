import type { ReactNode } from "react";

export type FaqItem = { id: string; question: string; answer: ReactNode };

export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Prečo by som potreboval vás, keď investujem sám cez appku?",
    answer: (
      <>
        Appka je nástroj, nie stratégia. <strong>Nevie vám povedať, kedy zmeniť portfólio, kedy kúpiť investičný byt,</strong> ako daňovo optimalizovať zisky alebo <strong>kedy začať čerpať rentu.</strong> A keď trh padne o 30 % a vstanete s panikou, appka vám nezdvihne telefón. Ja áno. To je rozdiel medzi nástrojom a partnerom.
      </>
    ),
  },
  {
    id: "faq-2",
    question: "Koľko ma to celé bude stáť? Aké sú presné poplatky?",
    answer: (
      <>
        Začíname na <strong>férovej sadzbe 0,49 % ročne</strong> za správu portfólia do 100 000 €. Nad 100 000 € platíte <strong>už len exkluzívnych 0,35 % p.a.</strong> Plus maximálne 1 % vstupný poplatok z vkladov. Žiadne skryté náklady, <strong>všetko je vopred jasné a férovo dohodnuté.</strong>
        <br />
        <br />
        Bežná banka si bere 1,5 – 2 % ročne. Za 30 rokov vás to pripraví až o tretinu majetku. Pri mesačnej investícii 300 € to znamená <strong>rozdiel až 117 000 € vo váš prospech.</strong>
      </>
    ),
  },
  {
    id: "faq-3",
    question: "Sú moje peniaze v bezpečí?",
    answer: (
      <>
        Áno. Som licencovaný správca majetku pod prísnym dohľadom Národnej banky Slovenska (NBS). <strong>Vaše peniaze sú uložené na investičných účtoch na vaše meno,</strong> nie na mojom účte. Mám nad nimi nulový prístup. Ja len riadim stratégiu.
      </>
    ),
  },
  {
    id: "faq-4",
    question: "Stratím kontrolu nad svojimi peniazmi?",
    answer: (
      <>
        Práve naopak, získate dokonalý prehľad. V aplikácii UFO vidíte <strong>v reálnom čase celý svoj majetok</strong>: ako klesá hypotéka, rastú fondy, koľko vám zostáva v nehnuteľnostiach. Na jeden klik viete, o koľko eur ste celkovo bohatší. <strong>Vaše peniaze zostávajú flexibilné a stratégiu vieme kedykoľvek prispôsobiť.</strong>
      </>
    ),
  },
  {
    id: "faq-5",
    question: "Čo sa stane s mojím majetkom, ak sa mi niečo stane?",
    answer: (
      <>
        V rámci JS Wealth Map™ vám nastavíme presný postup, ako bezpečne previesť majetok na vašich blízkych. Od základného právneho procesu až po zverenecké fondy, ktoré využívajú najbohatší. <strong>Váš majetok bude chránený a vaša rodina zabezpečená.</strong>
      </>
    ),
  },
  {
    id: "faq-6",
    question: "Prečo sú vaše poplatky tak nízke? Nie je v tom háčik?",
    answer: (
      <>
        Nie je. Banky si berú 1,5 – 2 % ročne, pretože predávajú vlastné drahé produkty a platia pobočky, reklamy a tisícky zamestnancov. Ja fungujem v režime otvorenej architektúry. <strong>Vyberám najlepšie fondy z celého sveta a nemám zbytočné náklady. Zarábam až vtedy, keď váš majetok rastie.</strong> To je férovosť, nie háčik.
      </>
    ),
  },
];
