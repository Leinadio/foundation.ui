import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { FeatureBentoGrid } from ".";

const meta = {
  title: "Landing Page/FeatureBentoGrid",
  component: FeatureBentoGrid,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FeatureBentoGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomContent: Story = {
  args: {
    title: "Fonctionnalités IA avancées",
    description: "Découvrez comment l'intelligence artificielle révolutionne votre productivité.",
    badge: { text: "IA", isBadge: true },
  },
};

export const MinimalBento: Story = {
  args: {
    title: "Fonctionnalités essentielles",
    description: "Les outils de base pour démarrer.",
    badge: { text: "ESSENTIEL", isBadge: false },
    bentoItems: [
      {
        title: "Génération de contenu",
        description: "L'IA crée du contenu unique et pertinent.",
        skeleton: "SkeletonOne",
        className: "md:col-span-2",
        icon: "IconClipboardCopy",
      },
      {
        title: "Correction automatique",
        description: "Laissez l'IA corriger vos documents.",
        skeleton: "SkeletonTwo",
        className: "md:col-span-1",
        icon: "IconFileBroken",
      },
    ],
  },
};

export const WithHoverFeatures: Story = {
  args: {
    title: "Fonctionnalités interactives",
    description: "Explorez nos fonctionnalités avec des effets de survol.",
    badge: { text: "INTERACTIF", isBadge: true },
    hoverFeatures: [
      {
        title: "Analyse en temps réel",
        description: "Obtenez des insights instantanés sur vos données.",
        icon: "IconTableColumn",
      },
      {
        title: "Suggestions contextuelles",
        description: "L'IA propose des améliorations pertinentes.",
        icon: "IconSignature",
      },
      {
        title: "Résumé automatique",
        description: "Condensez vos documents en quelques clics.",
        icon: "IconBoxAlignRightFilled",
      },
    ],
  },
};

export const Mobile: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Tablet: Story = {
  args: {},
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
