import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowLeft } from "lucide-react";

const Dakujeme = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center py-12 px-4">
      <div className="w-full max-w-[560px] text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h1 className="font-serif text-2xl sm:text-3xl text-foreground leading-tight mb-4">
          Ďakujeme, že ste sa ozvali
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed mb-4">
          <strong className="text-foreground">Ozveme sa vám najneskôr do 24 hodín</strong> na zadaný e-mail alebo telefón.
        </p>
        <p className="text-sm text-muted-foreground leading-relaxed mb-8">
          Vaša odpoveď nám pomáha pripraviť sa na náš spoločný hovor. Berieme <strong className="text-foreground">váš záujem o ucelený systém seriózne</strong> —
          preto si <strong className="text-foreground">váš čas neberieme zbytočnými formalitami</strong>. Ak máte akútnu otázku, môžete nás kedykoľvek kontaktovať
          priamo. <strong className="text-foreground">Tešíme sa na rozhovor s vami.</strong>
        </p>
        <Button asChild variant="outline" className="rounded-full border-primary text-primary hover:bg-primary/10">
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Späť na úvodnú stránku
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Dakujeme;
