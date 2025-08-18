import { Header } from "@/components/ui/header";
import { Button } from "@/components/ui/button";

export function ComponentTest() {
  const navigationLinks = [
    { id: "home", label: "Accueil", href: "#home" },
    { id: "features", label: "Fonctionnalités", href: "#features" },
    { id: "pricing", label: "Tarifs", href: "#pricing" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  return (
    <div>
      <Header navigationLinks={navigationLinks}>
        <Header.AuthSection>
          <Button variant="outline" size="sm">
            Connexion
          </Button>
          <Button size="sm">S&apos;inscrire</Button>
        </Header.AuthSection>

        <Header.AuthSectionMobile>
          <Button variant="outline" className="w-full justify-start">
            Connexion
          </Button>
          <Button className="w-full justify-start">S&apos;inscrire</Button>
        </Header.AuthSectionMobile>
      </Header>
      {/* 
      <main className="pt-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Test du Header avec Context API</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Ce composant démontre l&apos;utilisation du Header avec l&apos;approche Context API.
          </p>

          <div className="mt-8 space-y-4">
            <section id="home" className="py-16 border rounded-lg">
              <h2 className="text-2xl font-bold text-center">Section Accueil</h2>
            </section>

            <section id="features" className="py-16 border rounded-lg">
              <h2 className="text-2xl font-bold text-center">Section Fonctionnalités</h2>
            </section>

            <section id="pricing" className="py-16 border rounded-lg">
              <h2 className="text-2xl font-bold text-center">Section Tarifs</h2>
            </section>

            <section id="contact" className="py-16 border rounded-lg">
              <h2 className="text-2xl font-bold text-center">Section Contact</h2>
            </section>
          </div>
        </div>
      </main> */}
    </div>
  );
}
