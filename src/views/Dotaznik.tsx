"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight, Layout } from "lucide-react";

const WEBHOOK_URL = process.env.NEXT_PUBLIC_WEBHOOK_URL as string | undefined;

const CTA_LEAD_LABEL = "Naplánovať bezplatné stretnutie";

const MAX_POINTS = 19;
const QUESTION_COUNT = 4;

// Q1 — rovnaká pre všetkých (index 0=A, 1=B, 2=C, 3=D → určuje variant Q2)
const Q1 = {
  label: "Otázka 1 z 4",
  question: "Čo chcete vo svojich financiách zmeniť?",
  sub: "Nie každý rieši to isté. Chceme vedieť, kde naozaj stojíte — aby sme váš čas nezneužili na všeobecné odpovede.",
  options: [
    { letter: "A", text: "Chcem si vybudovať pasívny príjem — aby peniaze pracovali za mňa", pts: 4 },
    { letter: "B", text: "Mám úspory, ktoré mi ležia na účte a strácajú hodnotu", pts: 3 },
    { letter: "C", text: "Mám rozhádzané investície — chcem z toho urobiť jeden fungujúci systém", pts: 5 },
    { letter: "D", text: "Zatiaľ len sledujem — chcem pochopiť, kde začať", pts: 0 },
  ],
};

// Q2 — podmienková (variant A/B/C/D podľa q1Answer 0/1/2/3)
const Q2_VARIANTS = [
  {
    label: "Otázka 2 z 4",
    question: "Akú mesačnú rentu by ste považovali za životnú zmenu?",
    sub: "Konkrétne číslo nám pomôže nastaviť realistický systém — nie ideálny scenár.",
    options: [
      { letter: "A", text: "Do 500 € mesačne", pts: 2 },
      { letter: "B", text: "500 € – 1 500 € mesačne", pts: 4 },
      { letter: "C", text: "Nad 1 500 € mesačne", pts: 5 },
    ],
  },
  {
    label: "Otázka 2 z 4",
    question: "Ako dlho tie peniaze čakajú na lepšie využitie?",
    sub: "Každý rok nečinnosti je reálna strata. Chceme vedieť, o čom hovoríme.",
    options: [
      { letter: "A", text: "Menej ako rok", pts: 2 },
      { letter: "B", text: "1 – 3 roky", pts: 3 },
      { letter: "C", text: "Viac ako 3 roky", pts: 5 },
    ],
  },
  {
    label: "Otázka 2 z 4",
    question: "Čo vám na aktuálnom stave vadí najviac?",
    sub: "Za každým chaotickým portfóliom je iný dôvod. Chceme pochopiť ten váš.",
    options: [
      { letter: "A", text: "Neviem, či investujem správne — chýba mi spätná väzba", pts: 4 },
      { letter: "B", text: "Platím poplatky, ale výsledky nevidím", pts: 4 },
      { letter: "C", text: "Nemám prehľad — neviem presne, kde čo mám a prečo", pts: 5 },
    ],
  },
  {
    label: "Otázka 2 z 4",
    question: "Čo vás doteraz brzdilo začať?",
    sub: "Väčšina ľudí nečaká na peniaze. Čaká na istotu, že robí správnu vec.",
    options: [
      { letter: "A", text: "Neviem, kde začať — príliš veľa informácií, žiadny systém", pts: 1 },
      { letter: "B", text: "Bojím sa urobiť chybu — radšej počkám, kým budem vedieť viac", pts: 1 },
      { letter: "C", text: "Skúšal som, ale nevedel som vyhodnotiť, či to robím správne", pts: 2 },
    ],
  },
];

const Q3 = {
  label: "Otázka 3 z 4",
  question: "Čo ste pre tento cieľ doteraz spravili?",
  sub: "Nie je to test. Pomôže nám to nastaviť, čo má pre vás zmysel ako ďalší krok.",
  options: [
    { letter: "A", text: "Zatiaľ nič — teprve sa rozhliadam", pts: 0 },
    { letter: "B", text: "Čítal som, počúval podcasty, vzdelávam sa", pts: 2 },
    { letter: "C", text: "Niečo som investoval alebo mám poradcu, ale cítim, že to nie je ono", pts: 3 },
    { letter: "D", text: "Mám konkrétnu sumu a konkrétny cieľ — hľadám odborníka, nie tipy", pts: 5 },
  ],
};

const Q4 = {
  label: "Otázka 4 z 4",
  question: "S akým objemom reálne pracujeme?",
  sub: "Aby sme vám nenavrhli niečo, čo pre vás nedáva zmysel. Ani príliš veľké, ani príliš malé.",
  options: [
    { letter: "A", text: "Menej ako 300 € mesačne", pts: 0 },
    { letter: "B", text: "300 € – 1 000 € mesačne alebo jednorazovo do 20 000 €", pts: 3 },
    { letter: "C", text: "Nad 1 000 € mesačne alebo jednorazovo nad 20 000 €", pts: 5 },
  ],
};

const RESULTS = [
  {
    tag: "Vzdelávanie & komunita",
    tagClass: "bg-muted text-muted-foreground",
    icon: "🌱",
    iconBg: "bg-muted",
    title: "Najlepší moment začať bol včera. Druhý najlepší je dnes.",
    profile: "Začiatočník / DIY",
    paragraphs: [
      "Vaše odpovede ukazujú, že ste momentálne na začiatku — alebo preferujete mať veci vo vlastných rukách. Oboje je v poriadku.",
      "To, čo teraz potrebujete, nie je správca majetku. Je to pevný základ — ako peniaze fungujú, ako nad nimi uvažovať a kde nerobiť zbytočné chyby.",
      "Ivan pravidelne vzdeláva komunitu ľudí, ktorí sa k financiám stavajú vážne. Prvých 15 dní máte zadarmo.",
    ],
    ctas: [{ label: "Vyskúšať komunitu 15 dní zadarmo", href: "https://jsmentor.sk/herohero", primary: true }],
  },
  {
    tag: "Rastúci investor",
    tagClass: "bg-amber-100 text-amber-900",
    icon: "📈",
    iconBg: "bg-amber-100",
    title: "Zarábate dobre. Vaše peniaze to zatiaľ nevedia.",
    profile: "Rastúci investor",
    paragraphs: [
      "Máte príjem, máte potenciál — chýba vám ucelený systém. Ľudia vo vašej situácii väčšinou skončia buď v bankovom fonde s vysokými poplatkami, alebo náhodne klikajú v investičnej aplikácii bez stratégie. Ani jedno nie je systém.",
      "Vaše peniaze medzičasom ticho strácajú hodnotu — nie dramaticky, ale istotne. Tento stav je presne riešiteľný. Nepotrebujete hneď veľký kapitál ani komplexnú správu. Potrebujete vedieť, kde stojíte a čo spraviť ako prvé.",
      "Dohodnite si bezplatný hovor so špecialistom. Nie predajný call — konkrétna diagnostika vašej situácie a jasný ďalší krok.",
    ],
    ctas: [
      { label: "Naplánovať bezplatné stretnutie", href: "/dakujeme", primary: true },
      { label: "Chcem sa zatiaľ vzdelávať", href: "https://jsmentor.sk/herohero", primary: false },
    ],
  },
  {
    tag: "JS Wealth Map™",
    tagClass: "bg-primary text-primary-foreground",
    icon: "💼",
    iconBg: "bg-primary/10",
    title: "Vaše peniaze pracujú. Len nie naplno — a nie pre vás.",
    profile: "Slovenský Henry",
    paragraphs: [
      "Zarábate nadštandardne. Máte kapitál, máte cieľ. Chýba vám niekto, kto sa na váš majetok pozrie ako na celok — nie ako na sériu izolovaných produktov.",
      "JS Wealth Map™ nie je ďalší fond ani aplikácia. Je to komplexný systém budovania majetku postavený na štyroch pilieroch: ETF stratégie, investičná nehnuteľnosť, daňová optimalizácia a dlhodobá renta. Všetko prepojené, všetko viditeľné na jednom mieste.",
      "Prvý krok je bezplatný strategický hovor priamo s Ivanom. Nie konzultácia — diagnostika vášho majetku s konkrétnym výstupom. Bez záväzku.",
    ],
    ctas: [
      { label: "Naplánovať bezplatné stretnutie", href: "/dakujeme", primary: true },
      { label: "Chcem sa zatiaľ vzdelávať", href: "https://jsmentor.sk/herohero", primary: false },
    ],
  },
];

const FORM_TITLES = {
  low: {
    title: "Váš profil naznačuje, že ste pripravení urobiť ďalší krok.",
    sub: "Zanechajte kontakt — pripravíme sa na hovor za vás. Žiadne obchodné emaily. Len konkrétny hovor s konkrétnym výstupom.",
  },
  high: {
    title: "Na základe vašich odpovedí pre vás Ivan pripraví konkrétnu majetkovú mapu.",
    sub: "Hovor trvá 30 minút a má jasný výstup. Žiadne obchodné emaily. Len konkrétny hovor s konkrétnym výstupom.",
  },
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const GDPR_LINK = "https://www.jsinvestor.sk/wp-content/uploads/2025/03/GDPR-a-VOP.pdf";

type StepNum = 0 | 1 | 2 | 3 | 4 | 5;

const Dotaznik = () => {
  const [step, setStep] = useState<StepNum>(0);
  const [q1Answer, setQ1Answer] = useState<number | null>(null);
  const [points, setPoints] = useState<Record<number, number>>({ 1: 0, 2: 0, 3: 0, 4: 0 });
  const [selectedOption, setSelectedOption] = useState<Record<number, number>>({});
  const [resultCategory, setResultCategory] = useState<1 | 2 | 3 | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [gdpr, setGdpr] = useState(false);
  const [errors, setErrors] = useState({ form: false, gdpr: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalPoints = Object.values(points).reduce((a, b) => a + b, 0);

  const progressPct =
    resultCategory !== null ? 100 : step === 0 ? 0 : step <= 4 ? (step / QUESTION_COUNT) * 100 : 100;

  const getCurrentQuestion = () => {
    if (step === 1) return Q1;
    if (step === 2 && q1Answer !== null) return Q2_VARIANTS[q1Answer];
    if (step === 3) return Q3;
    if (step === 4) return Q4;
    return null;
  };

  const handleSelectOption = (stepIndex: number, pts: number, optionIndex: number) => {
    setSelectedOption((prev) => ({ ...prev, [stepIndex]: optionIndex }));
    setPoints((prev) => ({ ...prev, [stepIndex]: pts }));
    if (stepIndex === 1) setQ1Answer(optionIndex);
    setTimeout(() => {
      if (stepIndex === 4) {
        const newTotal = totalPoints - (points[4] ?? 0) + pts;
        if (newTotal <= 6) {
          setResultCategory(1);
        } else {
          setStep(5);
        }
      } else {
        setStep((stepIndex + 1) as StepNum);
      }
    }, 220);
  };

  const handlePrev = () => {
    if (step === 1) setStep(0);
    else if (step >= 2 && step <= 5) setStep((step - 1) as StepNum);
  };

  const buildLeadPayload = (resultCat?: number) => {
    const cat = resultCat ?? resultCategory ?? (totalPoints <= 13 ? 2 : 3);
    const q1Opt = Q1.options[selectedOption[1] ?? 0];
    const q2Variant = Q2_VARIANTS[q1Answer ?? 0];
    const q2Opt = q2Variant?.options[selectedOption[2] ?? 0];
    const q3Opt = Q3.options[selectedOption[3] ?? 0];
    const q4Opt = Q4.options[selectedOption[4] ?? 0];
    return {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      name: `${firstName.trim()} ${lastName.trim()}`.trim(),
      email: email.trim(),
      phone: phone.trim(),
      totalPoints,
      resultCategory: cat,
      submittedAt: new Date().toISOString(),
      q1_letter: q1Opt?.letter,
      q1_text: q1Opt?.text,
      q1_points: points[1] ?? 0,
      q2_letter: q2Opt?.letter,
      q2_text: q2Opt?.text,
      q2_points: points[2] ?? 0,
      q3_letter: q3Opt?.letter,
      q3_text: q3Opt?.text,
      q3_points: points[3] ?? 0,
      q4_letter: q4Opt?.letter,
      q4_text: q4Opt?.text,
      q4_points: points[4] ?? 0,
    };
  };

  const handleSubmitContact = async () => {
    const formValid =
      firstName.trim() &&
      lastName.trim() &&
      EMAIL_REGEX.test(email.trim()) &&
      phone.trim().length >= 6;
    const gdprValid = gdpr;
    setErrors({ form: !formValid, gdpr: !gdprValid });
    if (!formValid || !gdprValid) return;

    const cat = totalPoints <= 13 ? 2 : 3;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/ecomail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: firstName.trim(),
          lastName: lastName.trim(),
          email: email.trim(),
          phone: phone.trim(),
        }),
      });
      if (!response.ok) {
        // Ecomail zlyhalo – aj tak zobrazíme výsledok
      }
    } catch {
      // Bez hlášky
    } finally {
      setIsSubmitting(false);
    }

    setResultCategory(cat);
  };

  const handleCtaClick = async (cta: { label: string; href: string }) => {
    if (cta.label !== CTA_LEAD_LABEL || !WEBHOOK_URL) return;
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(buildLeadPayload()),
      });
    } catch {
      // Bez hlášky
    }
  };

  const router = useRouter();
  const showResult = resultCategory !== null;
  const resultData = resultCategory ? RESULTS[resultCategory - 1] : null;
  const isFormStep = step === 5;
  const currentQuestion = getCurrentQuestion();
  const formTitle = totalPoints <= 13 ? FORM_TITLES.low : FORM_TITLES.high;

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-8 px-4">
      <div className="w-full max-w-[526px] bg-card rounded-2xl shadow-lg border border-border overflow-hidden">
        <div className="h-1 bg-border w-full">
          <div
            className="h-full bg-primary transition-all duration-400 ease-out"
            style={{ width: `${progressPct}%` }}
          />
        </div>

        {!showResult && (
          <div className="p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 rounded-md bg-primary flex items-center justify-center flex-shrink-0">
                <Layout className="w-3.5 h-3.5 text-primary-foreground" />
              </div>
              <span className="font-serif text-base font-semibold text-foreground tracking-tight">JS Wealth Map™</span>
            </div>

            {/* Úvodná obrazovka */}
            {step === 0 && (
              <div className="animate-in fade-in duration-300 text-center">
                <h1 className="font-serif text-xl sm:text-2xl text-foreground leading-tight mb-3">
                  Zistite, aký investičný profil máte — a čo s tým spraviť.
                </h1>
                <p className="text-sm text-muted-foreground leading-snug mb-8">
                  4 otázky. 3 minúty. Konkrétny výsledok.
                </p>
                <Button
                  size="sm"
                  className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => setStep(1)}
                >
                  Začať <ChevronRight className="w-4 h-4 ml-1" />
                </Button>
              </div>
            )}

            {/* Otázky 1–4 */}
            {currentQuestion && step >= 1 && step <= 4 && (
              <div className="animate-in fade-in duration-300">
                <p className="text-[11px] font-sans font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                  {currentQuestion.label}
                </p>
                <h1 className="font-serif text-xl sm:text-2xl text-foreground leading-tight mb-1">
                  {currentQuestion.question}
                </h1>
                <p className="text-sm text-muted-foreground leading-snug mb-6">{currentQuestion.sub}</p>
                <div className="flex flex-col gap-2">
                  {currentQuestion.options.map((opt, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => handleSelectOption(step, opt.pts, i)}
                      className={cn(
                        "flex items-start gap-3 rounded-lg border-2 px-4 py-3 text-left transition-all",
                        "bg-muted/50 border-border hover:border-primary hover:bg-primary/5",
                        selectedOption[step] === i && "border-primary bg-primary/10"
                      )}
                    >
                      <span
                        className={cn(
                          "w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-semibold flex-shrink-0 mt-0.5 border-2",
                          selectedOption[step] === i ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground"
                        )}
                      >
                        {opt.letter}
                      </span>
                      <span className="text-sm font-sans text-foreground leading-snug pt-0.5">{opt.text}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Formulár (krok 5, len pri skóre 7+) */}
            {isFormStep && (
              <div className="animate-in fade-in duration-300">
                <p className="text-[11px] font-sans font-medium text-muted-foreground uppercase tracking-wider mb-1.5">
                  Posledný krok
                </p>
                <h1 className="font-serif text-xl sm:text-2xl text-foreground leading-tight mb-1">
                  {formTitle.title}
                </h1>
                <p className="text-sm text-muted-foreground leading-snug mb-6">{formTitle.sub}</p>
                <div className="space-y-4 mb-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">
                        Meno
                      </label>
                      <Input
                        type="text"
                        placeholder="Ján"
                        autoComplete="given-name"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className="bg-muted/50 placeholder:text-muted-foreground/45"
                      />
                    </div>
                    <div>
                      <label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">
                        Priezvisko
                      </label>
                      <Input
                        type="text"
                        placeholder="Novák"
                        autoComplete="family-name"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className="bg-muted/50 placeholder:text-muted-foreground/45"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">
                      E-mail
                    </label>
                    <Input
                      type="email"
                      placeholder="jan@priklad.sk"
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-muted/50 placeholder:text-muted-foreground/45"
                    />
                  </div>
                  <div>
                    <label className="text-[11px] font-medium text-muted-foreground uppercase tracking-wider block mb-1.5">
                      Telefón
                    </label>
                    <Input
                      type="tel"
                      placeholder="+421 900 000 000"
                      autoComplete="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="bg-muted/50 placeholder:text-muted-foreground/45"
                    />
                  </div>
                </div>
                <label className="flex items-start gap-3 cursor-pointer mb-4">
                  <Checkbox
                    id="gdpr"
                    checked={gdpr}
                    onCheckedChange={(checked) => setGdpr(checked === true)}
                    className="mt-0.5"
                  />
                  <span className="text-xs text-muted-foreground leading-relaxed">
                    Súhlasím so spracovaním osobných údajov za účelom zaslania výsledku dotazníka a prípadného kontaktovania v súvislosti s finančným poradenstvom. Vaše údaje nebudú poskytnuté tretím stranám. Súhlas môžete kedykoľvek odvolať. Viac informácií nájdete v{" "}
                    <a href={GDPR_LINK} target="_blank" rel="noopener noreferrer" className="text-primary underline">
                      podmienkach ochrany osobných údajov
                    </a>
                    .
                  </span>
                </label>
                {errors.form && (
                  <p className="text-sm text-destructive mb-2">Vyplňte prosím meno, priezvisko, platný e-mail a telefónne číslo.</p>
                )}
                {errors.gdpr && (
                  <p className="text-sm text-destructive mb-2">Pre pokračovanie je potrebný súhlas so spracovaním osobných údajov.</p>
                )}
              </div>
            )}

            {/* Footer: Späť + 4 bodky + CTA formulára */}
            {(step >= 1 || isFormStep) && (
              <div className="flex items-center justify-between gap-4 mt-8 pt-4 border-t border-border">
                {step >= 1 && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handlePrev}
                    className="rounded-full border-primary text-primary hover:bg-primary/10"
                  >
                    ← Späť
                  </Button>
                )}
                {step < 1 && <div />}
                <div className="flex gap-1.5 items-center flex-1 justify-center">
                  {Array.from({ length: QUESTION_COUNT }).map((_, i) => (
                    <div
                      key={i}
                      className={cn(
                        "w-1.5 h-1.5 rounded-full transition-all",
                        (step > i + 1 || isFormStep || showResult) ? "bg-primary" : step === i + 1 ? "bg-primary scale-125" : "bg-border"
                      )}
                    />
                  ))}
                </div>
                {isFormStep ? (
                  <Button
                    size="sm"
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleSubmitContact}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Vyhodnocujem…" : "Zobraziť výsledok"} <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                ) : (
                  <div className="w-[100px]" />
                )}
              </div>
            )}
          </div>
        )}

        {showResult && resultData && (
          <div className="p-6 sm:p-8 animate-in fade-in duration-400">
            <div className={cn("w-14 h-14 rounded-full flex items-center justify-center text-2xl mb-3", resultData.iconBg)}>
              {resultData.icon}
            </div>
            <span className={cn("inline-block text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full mb-3", resultData.tagClass)}>
              {resultData.tag}
            </span>
            <h2 className="font-serif text-xl sm:text-2xl text-foreground leading-tight mb-3">{resultData.title}</h2>
            <div className="h-1.5 bg-border rounded-full overflow-hidden mb-1">
              <div
                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${Math.round((totalPoints / MAX_POINTS) * 100)}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-muted-foreground mb-4">
              <span>
                Skóre: <strong className="text-foreground">{totalPoints}</strong> / {MAX_POINTS}
              </span>
              <span>Profil: {resultData.profile}</span>
            </div>
            <div className="space-y-4 mb-6">
              {resultData.paragraphs.map((p, i) => (
                <p key={i} className="text-sm text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <div className="flex flex-col gap-2">
              {resultData.ctas.map((cta, i) => {
                if (cta.href.startsWith("/")) {
                  return (
                    <a
                      key={i}
                      href={cta.href}
                      onClick={(e) => {
                        if (cta.label === CTA_LEAD_LABEL && WEBHOOK_URL) {
                          e.preventDefault();
                          handleCtaClick(cta).then(() => router.push(cta.href));
                        }
                      }}
                      className={cn(
                        "flex items-center justify-between gap-2 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all",
                        cta.primary
                          ? "bg-primary border-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-muted/50 border-border text-foreground hover:border-primary hover:bg-primary/5"
                      )}
                    >
                      <span>{cta.label}</span>
                      <ChevronRight className="w-4 h-4 flex-shrink-0" />
                    </a>
                  );
                }
                return (
                  <a
                    key={i}
                    href={cta.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "flex items-center justify-between gap-2 rounded-lg border-2 px-4 py-3 text-sm font-medium transition-all",
                      cta.primary
                        ? "bg-primary border-primary text-primary-foreground hover:bg-primary/90"
                        : "bg-muted/50 border-border text-foreground hover:border-primary hover:bg-primary/5"
                    )}
                  >
                    <span>{cta.label}</span>
                    <ChevronRight className="w-4 h-4 flex-shrink-0" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dotaznik;
