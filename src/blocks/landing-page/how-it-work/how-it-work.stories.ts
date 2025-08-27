import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { HowItWork } from "@/blocks/landing-page/how-it-work";

const meta = {
  title: "Blocks/Landing Page/HowItWork",
  component: HowItWork,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HowItWork>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomContent: Story = {
  args: {
    title: "Comment ça marche — en 3 étapes simples",
    description: "L'IA vous aide à clarifier votre idée, analyser votre marché et structurer un plan d'action concret.",
    badgeText: "GUIDE",
  },
};

export const TwoSteps: Story = {
  args: {
    title: "Deux étapes pour démarrer",
    description: "Commencez vite, avancez mieux.",
    badgeText: "RAPIDE",
    steps: [
      {
        step: "Étape 1",
        title: "Décrivez votre idée",
        description: "Saisissez votre idée, même vague. L'IA s'occupe du reste.",
        objective: "🎯 Clarifier votre intention",
        image: { src: "/window.svg", alt: "Fenêtre illustrative" },
        layout: "text-image",
      },
      {
        step: "Étape 2",
        title: "Recevez une analyse",
        description: "Marché, audience, problématique, proposition de valeur.",
        objective: "📈 Obtenir une vision exploitable",
        image: { src: "/vercel.svg", alt: "Logo Vercel" },
        layout: "image-text",
      },
    ],
  },
};

export const AlternateLayouts: Story = {
  args: {
    title: "Mise en page alternée",
    description: "Une alternance visuelle pour une lecture fluide.",
    badgeText: "ALTERNANCE",
    steps: [
      {
        step: "Étape 1",
        title: "Lancez le projet",
        description: "Décrivez le contexte en quelques lignes.",
        objective: "🧭 Poser les bases",
        image: { src: "/next.svg", alt: "Logo Next.js" },
        layout: "text-image",
      },
      {
        step: "Étape 2",
        title: "Explorez l'analyse",
        description: "L'IA vous apporte une vue d'ensemble.",
        objective: "🔎 Voir clair rapidement",
        image: { src: "/window.svg", alt: "Fenêtre illustrative" },
        layout: "image-text",
      },
      {
        step: "Étape 3",
        title: "Passez à l'action",
        description: "Un plan structuré pour avancer.",
        objective: "🚀 Mettre en œuvre",
        image: { src: "/vercel.svg", alt: "Logo Vercel" },
        layout: "text-image",
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
