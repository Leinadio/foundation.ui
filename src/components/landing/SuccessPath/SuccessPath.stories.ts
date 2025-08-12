import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { SuccessPath } from ".";

const meta = {
  title: "Landing Page/SuccessPath",
  component: SuccessPath,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["green", "blue", "red", "purple", "orange"],
    },
    fromColor: {
      control: "select",
      options: ["green-600", "blue-600", "red-600", "purple-600", "orange-600"],
    },
    viaColor: {
      control: "select",
      options: ["emerald-500", "green-800", "blue-900", "red-900", "purple-900", "orange-800"],
    },
  },
} satisfies Meta<typeof SuccessPath>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomColors: Story = {
  args: {
    color: "blue",
    fromColor: "blue-600",
    viaColor: "blue-900",
  },
};

export const TaskListOnly: Story = {
  args: {
    title: "Organisation claire (exemple liste de tâches)",
    description:
      "Avec une structure organisée, chaque tâche trouve sa place et chaque membre de l'équipe sait exactement quoi faire et quand.",
    badge: { text: "EXEMPLE", isBadge: true },
    color: "green",
    fromColor: "green-600",
    viaColor: "emerald-500",
    data: [
      {
        type: "task-list",
        title: "Organisation claire",
        paragraphs: ["Chaque membre de l'équipe sait exactement quoi faire et quand."],
        features: [
          { icon: "CheckCircle", text: "Tâches priorisées automatiquement" },
          { icon: "CheckCircle", text: "Délais respectés" },
          { icon: "CheckCircle", text: "Communication centralisée" },
        ],
        featuresLayout: "list",
        summary: {
          icon: "TrendingUp",
          label: "Résultat",
          text: "+65% de productivité en équipe",
        },
      },
    ],
  },
};

export const CardListOnly: Story = {
  args: {
    title: "Collaboration fluide (exemple cartes)",
    description: "Fini les malentendus et les tâches dupliquées. L'équipe travaille en harmonie.",
    badge: { text: "EXEMPLE", isBadge: true },
    color: "green",
    fromColor: "green-600",
    viaColor: "emerald-500",
    data: [
      {
        type: "card-list",
        title: "Collaboration fluide",
        paragraphs: ["Visibilité complète sur l'avancement de l'équipe."],
        features: [
          { icon: "Users", text: "Équipe synchronisée" },
          { icon: "Zap", text: "Réactivité maximale" },
        ],
        featuresLayout: "grid",
        summary: {
          icon: "TrendingUp",
          label: "Impact",
          text: "Réduction de 80% des réunions inutiles",
        },
      },
    ],
  },
};

export const BulletsOnly: Story = {
  args: {
    title: "Croissance accélérée (exemple bullets)",
    description: "Avec les bonnes fondations, concentrez-vous sur ce qui compte : créer de la valeur.",
    badge: { text: "EXEMPLE", isBadge: true },
    color: "green",
    fromColor: "green-600",
    viaColor: "emerald-500",
    data: [
      {
        type: "bullets-list",
        title: "Croissance accélérée",
        paragraphs: ["Votre startup peut se concentrer sur la valeur et grandir."],
        bullets: [
          "Focus retrouvé sur le produit",
          "Équipe motivée et alignée",
          "Livraisons dans les temps",
          "Clients satisfaits et fidèles",
        ],
        summary: {
          icon: "TrendingUp",
          label: "Transformation",
          text: "Des bases solides pour accélérer la traction",
        },
      },
    ],
  },
};

export const GridFeatures: Story = {
  args: {
    title: "Fonctionnalités sous forme de grille",
    description: "Exemple avec rendu en grille pour les features.",
    badge: { text: "VARIANTE", isBadge: true },
    color: "green",
    fromColor: "green-600",
    viaColor: "emerald-500",
    data: [
      {
        type: "task-list",
        title: "Grille de fonctionnalités",
        paragraphs: ["Visualisation compacte des avantages clés."],
        features: [
          { icon: "CheckCircle", text: "Gain de clarté" },
          { icon: "CheckCircle", text: "Meilleure priorisation" },
          { icon: "CheckCircle", text: "Suivi simple" },
          { icon: "CheckCircle", text: "Focus équipe" },
        ],
        featuresLayout: "grid",
        summary: {
          icon: "TrendingUp",
          label: "Résultat",
          text: "+30% d'efficacité opérationnelle",
        },
      },
    ],
  },
};
