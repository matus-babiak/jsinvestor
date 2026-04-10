/** Simulácia dopadu poplatkov — farby podľa brand mockupu */
export const feeImpact = {
  bg: "#F2EDE9",
  competitorBar: "#8B7E6F",
  jsBar: "#2D5A3F",
  competitorEnd: 453_000,
  jsEnd: 570_000,
} as const;

export const feeComparisonOldNegatives = [
  "Tabuľková stratégia",
  "Žiadny plán",
  "Zbytočné dane z výnosov",
  "Výnosy pod trhovým priemerom",
  "Predaj namiesto poradenstva",
] as const;

export const feeComparisonNewPositives = [
  "Individuálna stratégia",
  "Investičné nehnuteľnosti",
  "Neverejné fondy (FKI)",
  "Individualita = lepší výnos",
  "Rentové a dividendové účty",
] as const;
