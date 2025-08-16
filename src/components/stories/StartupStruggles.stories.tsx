import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { StartupStruggles } from "../../ui/startup-struggles";

const meta = {
  title: "Landing Page/StartupStruggles",
  component: StartupStruggles,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["red", "blue", "green", "purple", "orange"],
    },
    fromColor: {
      control: "select",
      options: ["red-600", "blue-600", "green-600", "purple-600", "orange-600"],
    },
    viaColor: {
      control: "select",
      options: ["red-900", "blue-900", "green-900", "purple-900", "orange-900"],
    },
  },
} satisfies Meta<typeof StartupStruggles>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: (
      <>
        <span className="text-red-600">85%</span> des startups échouent car les{" "}
        <span className="text-red-600">fondateurs abandonnent</span>
      </>
    ),
    description:
      "Entre la technique, le business et les deadlines... Il y a tant de choses à gérer qu'on finit par perdre de vue l'essentiel.",
    badge: { text: "RÉALITÉ DU TERRAIN", isBadge: true },
    color: "red",
    fromColor: "red-600",
    viaColor: "red-900",
  },
};

export const WithCustomColors: Story = {
  args: {
    title: (
      <>
        <span className="text-blue-600">Innovation</span> et <span className="text-blue-600">excellence</span>
      </>
    ),
    description: "Découvrez comment notre approche révolutionne le développement d'applications.",
    badge: { text: "NOUVELLE APPROCHE", isBadge: true },
    color: "blue",
    fromColor: "blue-600",
    viaColor: "blue-900",
  },
};

export const WithCustomData: Story = {
  args: {
    title: "Défis du développement moderne",
    description: "Les développeurs font face à de nombreux défis dans la création d'applications modernes.",
    badge: { text: "DÉVELOPPEMENT", isBadge: true },
    color: "green",
    fromColor: "green-600",
    viaColor: "green-900",
    data: [
      {
        title: "Performance",
        paragraphs: [
          "Optimiser les temps de chargement et la réactivité de l'interface utilisateur.",
          "Gérer efficacement la mémoire et les ressources système.",
        ],
        image: {
          src: "/illu/headache-destructive.svg",
          alt: "Illustration de la performance",
          className: "w-8/12 mx-auto block",
          width: 1,
          height: 1,
        },
      },
      {
        title: "Sécurité",
        paragraphs: [
          "Protéger les données sensibles des utilisateurs.",
          "Implémenter des mesures de sécurité robustes.",
        ],
        image: {
          src: "/illu/late_1-destructive.svg",
          alt: "Illustration de la sécurité",
          className: "w-8/12 mx-auto block",
          width: 1,
          height: 1,
        },
      },
      {
        title: "Maintenabilité",
        paragraphs: [
          "Créer un code lisible et bien structuré.",
          "Faciliter les futures modifications et améliorations.",
        ],
        image: {
          src: "/illu/limited_ressource-destructive.svg",
          alt: "Illustration de la maintenabilité",
          className: "w-8/12 mx-auto block",
          width: 1,
          height: 1,
        },
      },
    ],
  },
};

export const Minimal: Story = {
  args: {
    title: "Titre simple",
    description: "Description simple sans badge.",
    badge: { text: "TEXTE SIMPLE", isBadge: false },
    color: "purple",
    fromColor: "purple-600",
    viaColor: "purple-900",
    data: [
      {
        title: "Étape unique",
        paragraphs: ["Une seule étape pour illustrer le composant."],
        image: {
          src: "/illu/headache-destructive.svg",
          alt: "Illustration simple",
          className: "w-8/12 mx-auto block",
          width: 1,
          height: 1,
        },
      },
    ],
  },
};
