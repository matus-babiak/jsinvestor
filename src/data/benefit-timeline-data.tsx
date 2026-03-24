import {
  Smartphone,
  Phone,
  Lock,
  Percent,
  Users,
  Moon,
  Layers,
} from "lucide-react";
import type { TimelineItem } from "@/components/ui/radial-orbital-timeline";

export const benefitTimelineData: TimelineItem[] = [
  {
    id: 7,
    title: "4 piliere budovania majetku",
    date: "",
    content: (
      <ul className="list-none space-y-2 text-sm md:text-base">
        <li>
          <strong className="text-foreground font-semibold">
            Inteligentné ETF stratégie
          </strong>{" "}
          <span className="text-muted-foreground">
            (Stabilný a predvídateľný rast vášho majetku)
          </span>
        </li>
        <li>
          <strong className="text-foreground font-semibold">
            Investičné nehnuteľnosti
          </strong>{" "}
          <span className="text-muted-foreground">
            (Presné ROI kalkulácie a riešenie financovania)
          </span>
        </li>
        <li>
          <strong className="text-foreground font-semibold">
            Fondy kvalifikovaných investorov
          </strong>{" "}
          <span className="text-muted-foreground">
            (Exkluzívne príležitosti so stabilnými výnosmi 7–10 %)
          </span>
        </li>
        <li>
          <strong className="text-foreground font-semibold">
            Renta a skutočná sloboda
          </strong>{" "}
          <span className="text-muted-foreground">
            (Bezpečná výstupná stratégia zameraná na pasívny príjem)
          </span>
        </li>
      </ul>
    ),
    category: "Pilier",
    icon: Layers,
    relatedIds: [],
    status: "in-progress",
    energy: 90,
  },
  {
    id: 6,
    title: "Istota a bezpečie",
    date: "",
    content: (
      <>
        Najväčším benefitom je <strong className="text-foreground">úplné delegovanie zodpovednosti.</strong> Získate{" "}
        <strong className="text-foreground">kľudný spánok</strong> a istotu, že je o váš majetok{" "}
        <strong className="text-foreground">odborne a bezpečne postarané.</strong>
      </>
    ),
    category: "Benefit",
    icon: Moon,
    relatedIds: [1, 2, 5],
    status: "completed",
    energy: 100,
  },
  {
    id: 1,
    title: "Prehľad celého majetku na jednom mieste",
    date: "",
    content: (
      <>
        Inovatívna aplikácia <strong className="text-foreground">UFO</strong>, v ktorej máte pod jednou strechou všetky svoje{" "}
        <strong className="text-foreground">investície, poistné zmluvy, nehnuteľnosti aj hypotéky.</strong> Ráno ju otvoríte a vidíte{" "}
        <strong className="text-foreground">dokonalý prehľad</strong> a exaktný rast vášho čistého majetku v reálnom čase.
      </>
    ),
    category: "Benefit",
    icon: Smartphone,
    relatedIds: [],
    status: "in-progress",
    energy: 95,
  },
  {
    id: 2,
    title: "Stabilný partner kedykoľvek k dispozícii",
    date: "",
    content: (
      <>
        Na dôležité finančné rozhodnutia <strong className="text-foreground">už nikdy nebudete sami.</strong> Získavate{" "}
        <strong className="text-foreground">priamy prístup k svojmu sprievodcovi.</strong> Sme vám k dispozícii, či už prepočítavate nákup investičného bytu, idete alokovať mimoriadny bonus, alebo potrebujete{" "}
        <strong className="text-foreground">zachovať chladnú hlavu počas paniky na trhoch.</strong>
      </>
    ),
    category: "Benefit",
    icon: Phone,
    relatedIds: [1],
    status: "in-progress",
    energy: 100,
  },
  {
    id: 4,
    title: "Férové poplatky bez skrytých nákladov",
    date: "",
    content: (
      <>
        <strong className="text-foreground">Absolútne transparentný systém</strong> bez skrytých bankových poplatkov. Správa vášho majetku do{" "}
        <strong className="text-foreground">50 000 € je úplne zadarmo (0 %).</strong> Až po prekonaní tejto hranice platíte{" "}
        <strong className="text-foreground">zlomkový a férový poplatok (0,27 % až 0,49 %)</strong>, pretože chceme rásť spoločne s vami.
      </>
    ),
    category: "Benefit",
    icon: Percent,
    relatedIds: [1],
    status: "completed",
    energy: 90,
  },
  {
    id: 3,
    title: "Exkluzívne príležitosti a neverejné fondy",
    date: "",
    content: (
      <>
        Prístup k <strong className="text-foreground">neverejným Fondom kvalifikovaných investorov (FKI).</strong> Otvárame vám dvere k{" "}
        <strong className="text-foreground">prémiovým projektom</strong>, ktoré sú pre bežného retailového klienta v banke absolútne nedostupné.
      </>
    ),
    category: "Benefit",
    icon: Lock,
    relatedIds: [1],
    status: "in-progress",
    energy: 80,
  },
  {
    id: 5,
    title: "Prístup do súkromnej skupiny investorov",
    date: "",
    content: (
      <>
        <strong className="text-foreground">Exkluzívny vstup</strong> do uzavretej komunity investorov. Získate{" "}
        <strong className="text-foreground">pravidelné mesačné PDF reporty a analýzy</strong>, ktoré vám transparentne vysvetľujú reálnu situáciu na trhoch na základe dát –{" "}
        <strong className="text-foreground">bez paniky a zbytočného stresu médií.</strong>
      </>
    ),
    category: "Benefit",
    icon: Users,
    relatedIds: [1, 2],
    status: "in-progress",
    energy: 75,
  },
];
