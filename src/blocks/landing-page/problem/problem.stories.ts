import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Problem } from ".";

const meta = {
  title: "Blocks/Landing Page/Problem",
  component: Problem,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    title: {
      control: "text",
      description: "Titre de la section",
    },
    description: {
      control: "text",
      description: "Description du problème",
    },
    badgeText: {
      control: "text",
      description: "Texte du badge",
    },
    steps: {
      control: "object",
      description: "Étapes du problème",
    },
  },
} satisfies Meta<typeof Problem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Le problème",
    description:
      "En tant que freelance, répondre rapidement et professionnellement aux demandes clients est essentiel, mais chronophage. Chaque minute compte.",
    badgeText: "RÉALITÉ DU TERRAIN",
    steps: [
      {
        emoji: "😰",
        title: "Temps perdu à créer des devis manuellement",
        description: "Risque d'oublier de répondre",
      },
      {
        emoji: "😔",
        title: "Risque d'oublier de répondre",
        description: "Manque de professionnalisme perçu",
      },
      {
        emoji: "😰",
        title: "Manque de professionnalisme perçu",
        description: "Perte de clients potentiels",
      },
    ],
  },
};

export const CustomSteps: Story = {
  args: {
    title: "Autres défis",
    description: "Découvrez les autres problèmes auxquels font face les freelances.",
    badgeText: "DÉFIS",
    steps: [
      {
        emoji: "⏰",
        title: "Gestion du temps",
        description: "Difficile de prioriser les tâches importantes",
      },
      {
        emoji: "💰",
        title: "Facturation",
        description: "Suivi des paiements et relances",
      },
      {
        emoji: "📧",
        title: "Communication",
        description: "Répondre à tous les emails clients",
      },
      {
        emoji: "📊",
        title: "Reporting",
        description: "Analyser les performances et métriques",
      },
    ],
  },
};

export const Minimal: Story = {
  args: {
    title: "Problème simple",
    description: "Un problème en une seule étape.",
    badgeText: "SIMPLE",
    steps: [
      {
        emoji: "❌",
        title: "Un seul problème",
        description: "Description du problème unique",
      },
    ],
  },
};
