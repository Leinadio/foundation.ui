import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HeroRow } from "@/components/ui/hero-row";
import { Button } from "@/components/ui/button";
import { Icons, Variant } from "@/components/ui/icons";

const meta = {
  title: "Landing Page/HeroRow",
  component: HeroRow,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    badge: {
      control: "text",
      description: "Texte du badge en haut du hero",
    },
    title: {
      control: "text",
      description: "Titre principal du hero",
    },
    description: {
      control: "text",
      description: "Description détaillée du hero",
    },
    className: {
      control: "text",
      description: "Classes CSS additionnelles",
    },
  },
} satisfies Meta<typeof HeroRow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    badge: "🚀 Nouveau - Validation d'idée par IA",
    title: "Testez votre idée de business avant de perdre du temps",
    description:
      "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle.",
  },
};

export const WithCustomCTA: Story = {
  args: {
    badge: "💼 Pour les freelances",
    title: "Envoyez un devis automatiquement dès qu'un client vous contacte",
    description:
      "Notre extension Chrome détecte les demandes entrantes et génère un devis instantanément, prêt à être envoyé. Gagnez du temps, professionnalisez vos échanges, et ne ratez plus jamais une opportunité.",
    children: (
      <HeroRow.CtaSection>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" variant="outline">
            Voir la démo
          </Button>
          <Button size="lg">Commencer gratuitement</Button>
        </div>
      </HeroRow.CtaSection>
    ),
  },
};

export const WithCustomVisual: Story = {
  args: {
    badge: "🎨 Design moderne",
    title: "Créez des interfaces exceptionnelles",
    description:
      "Notre plateforme vous offre tous les outils nécessaires pour concevoir des expériences utilisateur remarquables et des interfaces visuellement attrayantes.",
    children: (
      <HeroRow.VisualSection>
        <div className="relative">
          <div className="w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-3xl flex items-center justify-center shadow-2xl">
            <div className="text-center space-y-4">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto animate-bounce">
                <span className="text-3xl">🎯</span>
              </div>
              <p className="text-lg font-semibold text-foreground">Interface moderne</p>
              <p className="text-sm text-muted-foreground">Design responsive</p>
            </div>
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl animate-bounce shadow-lg">
            <div className="w-full h-full flex items-center justify-center">
              <Icons variant={Variant.ArrowDown1} className="w-8 h-8 text-white" />
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-br from-green-500/40 to-emerald-500/40 rounded-xl animate-pulse shadow-lg">
            <div className="w-full h-full flex items-center justify-center">
              <Icons variant={Variant.ArrowDown1} className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      </HeroRow.VisualSection>
    ),
  },
};

export const WithBothCustomSections: Story = {
  args: {
    badge: "⚡ Performance maximale",
    title: "Optimisez votre application pour la vitesse",
    description:
      "Découvrez comment nos outils d'optimisation peuvent améliorer drastiquement les performances de votre application web et offrir une expérience utilisateur fluide.",
    children: (
      <>
        <HeroRow.CtaSection>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" variant="outline">
              Tester la performance
            </Button>
            <Button size="lg">Optimiser maintenant</Button>
          </div>
        </HeroRow.CtaSection>
        <HeroRow.VisualSection>
          <div className="relative">
            <div className="w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-3xl flex items-center justify-center shadow-2xl">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto">
                  <Icons variant={Variant.ArrowDown4} color="white" className="w-8 h-8" />
                </div>
                <p className="text-sm font-medium text-foreground">Performance</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Optimisé</span>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-500/40 to-cyan-500/40 rounded-lg animate-bounce"></div>
          </div>
        </HeroRow.VisualSection>
      </>
    ),
  },
};

export const MinimalContent: Story = {
  args: {
    badge: "✨ Simple",
    title: "Titre court et impactant",
    description: "Description concise et efficace pour un message direct.",
  },
};

export const LongContent: Story = {
  args: {
    badge: "🌟 Fonctionnalité avancée avec un badge très long",
    title:
      "Un titre très long qui peut s'étendre sur plusieurs lignes pour tester la responsivité et l'adaptation du composant",
    description:
      "Une description très détaillée qui peut s'étendre sur plusieurs lignes pour tester comment le composant s'adapte au contenu long et comment il gère l'espacement et la mise en page avec du texte étendu.",
  },
};

export const BusinessFocused: Story = {
  args: {
    badge: "🏢 Solutions entreprise",
    title: "Transformez votre organisation avec nos outils",
    description:
      "Nos solutions d'entreprise sont conçues pour s'adapter aux besoins complexes des grandes organisations, offrant scalabilité, sécurité et performance.",
    children: (
      <HeroRow.CtaSection>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button size="lg" variant="outline">
            Demander une démo
          </Button>
          <Button size="lg">Contacter les ventes</Button>
        </div>
      </HeroRow.CtaSection>
    ),
  },
};

export const WithCustomStyling: Story = {
  args: {
    badge: "🎨 Style personnalisé",
    title: "HeroRow avec classes CSS personnalisées",
    description: "Ce composant utilise des classes CSS personnalisées pour modifier l'apparence et le comportement.",
    className: "bg-gradient-to-r from-primary/5 to-secondary/5 py-20",
  },
};

export const Mobile: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Tablet: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

export const DarkTheme: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};
