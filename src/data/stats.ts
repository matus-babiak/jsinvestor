import type { LucideIcon } from "lucide-react";
import { Building2, ShieldCheck, Users, Wallet } from "lucide-react";

export const stats: { value: string; label: string; Icon: LucideIcon }[] = [
  { value: "3 044 000 €", label: "v ETF správe majetku", Icon: Wallet },
  { value: "5 460 000 €", label: "v nehnuteľnostiach získaných vďaka našej stratégii.", Icon: Building2 },
  { value: "531", label: "klientov, s ktorými dlhodobo spolupracujeme.", Icon: Users },
  {
    value: "Licencia NBS",
    label: "Správca pod dohľadom NBS s 8+ rokmi skúseností.",
    Icon: ShieldCheck,
  },
];
