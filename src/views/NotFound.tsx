import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <div className="text-center max-w-md">
        <p className="font-sans text-6xl font-extrabold text-primary/20 select-none">404</p>
        <h1 className="mt-2 font-serif text-2xl font-semibold text-foreground md:text-3xl">
          Stránka nebola nájdená
        </h1>
        <p className="mt-3 text-base text-muted-foreground">
          Adresa, ktorú hľadáte, tu neexistuje alebo bola presunutá. Vráťte sa na úvodnú stránku.
        </p>
        <Button
          asChild
          className="mt-8 font-sans font-semibold rounded-full px-6 py-3"
        >
          <Link href="/">
            <Home className="mr-2 h-4 w-4" />
            Vrátiť sa na hlavnú stránku
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
