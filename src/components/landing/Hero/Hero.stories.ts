import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Hero } from ".";

// Configuration de base pour les stories du Hero
const meta = {
  title: "Components/Landing/Hero",
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
export const Default: Story = {};

// Story avec un fond sombre (exemple de variante)
export const DarkBackground: Story = {
  parameters: {
    backgrounds: {
      default: "dark",
    },
  },
};

// Story pour mobile (viewport réduit)
export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

// Story pour tablette
export const Tablet: Story = {
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
