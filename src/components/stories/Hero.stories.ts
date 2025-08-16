import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Hero } from ".";

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
  // Le Hero n'a pas de props pour le moment, donc pas d'argTypes nécessaire
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story par défaut
export const Default: Story = {
  args: {
    badge: "🚀 Nouveau - Validation d'idée par IA",
    title: "Testez votre idée de business avant de perdre du temps (ou de l'argent)",
    description:
      "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle.",
    buttonText: "Testez votre idée",
  },
};

// Story avec un fond sombre (exemple de variante)
export const DarkBackground: Story = {
  args: {
    badge: "🚀 Nouveau - Validation d'idée par IA",
    title: "Testez votre idée de business avant de perdre du temps (ou de l'argent)",
    description:
      "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle.",
    buttonText: "Testez votre idée",
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
    title: "Testez votre idée de business avant de perdre du temps (ou de l'argent)",
    description:
      "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle.",
    buttonText: "Testez votre idée",
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
    title: "Testez votre idée de business avant de perdre du temps (ou de l'argent)",
    description:
      "Notre IA analyse votre idée sous tous les angles – marché, cible, problème, solution, business model – et vous fournit une validation claire, rapide et visuelle.",
    buttonText: "Testez votre idée",
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
