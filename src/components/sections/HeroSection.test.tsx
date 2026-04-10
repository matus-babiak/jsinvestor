import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { HeroSection } from "./HeroSection";

describe("HeroSection", () => {
  it("renders main value proposition and link to dotazník", () => {
    render(<HeroSection />);

    expect(
      screen.getByRole("heading", {
        name: /Investovanie potrebuje plán/i,
      }),
    ).toBeInTheDocument();

    const cta = screen.getByRole("link", { name: /Získať JS Wealth Map™/i });
    expect(cta).toHaveAttribute("href", "/dotaznik");
  });
});
