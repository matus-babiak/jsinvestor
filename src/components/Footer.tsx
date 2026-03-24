import { Instagram, Youtube, Linkedin, Music } from "lucide-react";
import logoWhite from "@/assets/js-investor-logo-biele.png";
import brandPattern from "@/assets/js-brand-pattern.svg";
import { assetSrc } from "@/lib/utils";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden w-full">
      <img
        src={assetSrc(brandPattern)}
        alt=""
        className="absolute -right-20 -bottom-28 w-[400px] h-auto opacity-[0.08] pointer-events-none select-none brightness-200"
        aria-hidden="true"
      />

      {/* Jeden kontajner: rovnaké ohraničenie pre grid aj oddeľovač */}
      <div className="content-width relative z-10 px-6 py-10 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr_1fr] gap-8 md:gap-10 lg:gap-12 mb-10">
          {/* Stĺpec 1: Logo + popis + GDPR */}
          <div className="text-left min-w-0">
            <img src={assetSrc(logoWhite)} alt="JS Investor" className="h-10 w-auto mb-3" />
            <p className="text-primary-foreground/80 text-base leading-relaxed mb-3">
              Registrovaní v NBS pod číslom <strong className="text-primary-foreground">282999</strong>.
              <br />
              Sprievodca budovaním majetku pre ambicióznych ľudí.
            </p>
            <a
              href="https://www.jsinvestor.sk/wp-content/uploads/2025/03/GDPR-a-VOP.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-primary-foreground/60 hover:text-primary-foreground/90 transition-colors underline inline-block"
            >
              Ochrana osobných údajov (GDPR)
            </a>
          </div>

          {/* Stĺpec 2: Kontakt + sociálne ikony */}
          <div className="text-left min-w-0">
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest text-primary-foreground mb-3">
              Kontakt
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80 mb-4">
              <li>
                <a href="tel:+421902519328" className="hover:text-primary-foreground transition-colors">
                  +421 902 519 328
                </a>
              </li>
              <li>
                <a href="mailto:info@ivanjasik.sk" className="hover:text-primary-foreground transition-colors">
                  info@ivanjasik.sk
                </a>
              </li>
              <li>Veľká okružná 17, 010 01 Žilina</li>
            </ul>
            <div className="flex gap-2">
              <a
                href="https://www.instagram.com/js.investor/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@Ivanjasik"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://open.spotify.com/show/3yLIJ0QOSFnJPkR4JT2ZJs"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="Spotify"
              >
                <Music className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/ivan-ja%C5%A1%C3%ADk-7256801a2/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Stĺpec 3: Firemné údaje */}
          <div className="text-left min-w-0">
            <h4 className="font-sans font-semibold text-sm uppercase tracking-widest text-primary-foreground mb-3">
              Firemné údaje
            </h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="font-semibold text-primary-foreground/90">Jashik s.r.o.</li>
              <li>IČO: 54253969</li>
              <li>DIČ: 2121623086</li>
              <li>IČ DPH: SK2121623086</li>
            </ul>
          </div>
        </div>

        {/* Čiara na celú šírku kontajnera – rovnaký ľavý/pravý okraj ako stĺpce */}
        <div className="border-t border-primary-foreground/15 pt-6 text-center">
          <p className="text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} Jashik s.r.o. Všetky práva vyhradené.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
