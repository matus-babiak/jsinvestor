"use client";

import NotFound from "@/views/NotFound";

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  // Pri akýchkoľvek chybách zobrazíme rovnakú NotFound stránku.
  // reset tu zámerne nepoužívame, aby používateľ vždy videl konzistentnú správu.
  void error;
  void reset;
  return <NotFound />;
}

