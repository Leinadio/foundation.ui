import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Hero } from "@/blocks/landing-page/hero";

// Configuration de base pour les stories du Hero
const meta = {
  title: "Landing Page/Hero",
  component: Hero,
  parameters: {
    // Utilise le layout par défaut car Hero est un composant pleine largeur
    layout: "fullscreen",
  },
  // Génère automatiquement la documentation
  tags: ["autodocs"],
  // Définit les contrôles pour les props
  argTypes: {
    titleHighlight: {
      control: "text",
      description: "Partie du titre à mettre en évidence avec une couleur différente",
    },
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story par défaut
export const Default: Story = {
  args: {
    badge: "🚀 Nouveau - Validation d'idée par IA",
    title: "Testez votre idée de business avant de perdre du temps",
    titleHighlight: "(ou de l'argent)",
    description:
      "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle.",
  },
};

// Story avec un fond sombre (exemple de variante)
export const DarkBackground: Story = {
  args: {
    badge: "🚀 Nouveau - Validation d'idée par IA",
    title: "Testez votre idée de business avant de perdre du temps",
    titleHighlight: "(ou de l'argent)",
    description:
      "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle.",
  },
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

// Story pour mobile (viewport réduit)
export const Mobile: Story = {
  args: {
    badge: "🚀 Nouveau - Validation d'idée par IA",
    title: "Testez votre idée de business avant de perdre du temps",
    titleHighlight: "(ou de l'argent)",
    description:
      "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle.",
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Story pour tablette
export const Tablet: Story = {
  args: {
    badge: "🚀 Nouveau - Validation d'idée par IA",
    title: "Testez votre idée de business avant de perdre du temps",
    titleHighlight: "(ou de l'argent)",
    description:
      "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle.",
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};

// Nouvelle story montrant l'utilisation du titleHighlight
export const WithHighlight: Story = {
  args: {
    badge: "✨ Fonctionnalité",
    title: "Créez des applications",
    titleHighlight: "en quelques minutes",
    description:
      "Notre plateforme vous permet de développer rapidement des applications modernes et performantes sans compromis sur la qualité.",
  },
};

// Story sans titleHighlight
export const WithoutHighlight: Story = {
  args: {
    badge: "📱 Application",
    title: "Interface simple et intuitive",
    description:
      "Une expérience utilisateur fluide et agréable pour tous vos utilisateurs, quel que soit leur niveau technique.",
  },
};
