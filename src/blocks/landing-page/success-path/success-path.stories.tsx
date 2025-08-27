import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SuccessPath } from "@/blocks/landing-page/success-path";
import { CheckCircle, Users, Zap, TrendingUp } from "lucide-react";

const meta = {
  title: "Blocks/Landing Page/SuccessPath",
  component: SuccessPath,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
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
    fromColor: "blue-600",
    viaColor: "blue-900",
  },
};

export const TaskListOnly: Story = {
  args: {
    title: "Organisation claire (exemple liste de tâches)",
    description:
      "Avec une structure organisée, chaque tâche trouve sa place et chaque membre de l'équipe sait exactement quoi faire et quand.",
    badgeText: "EXEMPLE",
    fromColor: "green-600",
    viaColor: "emerald-500",
    data: [
      {
        type: "task-list",
        title: "Organisation claire",
        paragraphs: ["Chaque membre de l'équipe sait exactement quoi faire et quand."],
        features: [
          { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Tâches priorisées automatiquement" },
          { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Délais respectés" },
          { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Communication centralisée" },
        ],
        featuresLayout: "list",
        summary: {
          icon: <TrendingUp />,
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
    badgeText: "EXEMPLE",
    fromColor: "green-600",
    viaColor: "emerald-500",
    data: [
      {
        type: "card-list",
        title: "Collaboration fluide",
        paragraphs: ["Visibilité complète sur l'avancement de l'équipe."],
        features: [
          { icon: <Users className="w-5 h-5 text-primary" />, text: "Équipe synchronisée" },
          { icon: <Zap className="w-5 h-5 text-primary" />, text: "Réactivité maximale" },
        ],
        featuresLayout: "grid",
        summary: {
          icon: <TrendingUp />,
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
    badgeText: "EXEMPLE",
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
          icon: <TrendingUp className="w-5 h-5" />,
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
    badgeText: "VARIANTE",
    fromColor: "green-600",
    viaColor: "emerald-500",
    data: [
      {
        type: "task-list",
        title: "Grille de fonctionnalités",
        paragraphs: ["Visualisation compacte des avantages clés."],
        features: [
          { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Gain de clarté" },
          { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Meilleure priorisation" },
          { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Suivi simple" },
          { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Focus équipe" },
        ],
        featuresLayout: "grid",
        summary: {
          icon: <TrendingUp className="w-5 h-5" />,
          label: "Résultat",
          text: "+30% d'efficacité opérationnelle",
        },
      },
    ],
  },
};
