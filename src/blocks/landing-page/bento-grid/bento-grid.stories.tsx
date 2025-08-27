import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { FeatureBentoGrid } from "@/blocks/landing-page/bento-grid";
import {
  IconSignature,
  IconTableColumn,
  IconBoxAlignRightFilled,
  IconMailSearch,
  IconFileDescription,
  IconSend,
  IconLayoutDashboard,
  IconAlarm,
  IconBriefcase,
  IconBolt,
  IconFeather,
  IconHeadphones,
} from "@tabler/icons-react";

const meta: Meta<typeof FeatureBentoGrid> = {
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
    title: "Ce que l’extension peut faire pour vous",
    description: "Tout ce qu’il vous faut pour faire bonne impression, sans effort.",
    badgeText: "FONCTIONNALITÉS",
    bentoItems: [
      {
        title: "Détection intelligente d’email",
        description: "Comprend automatiquement les demandes client",
        skeleton: "SkeletonOne",
        className: "md:col-span-1",
        icon: <IconMailSearch />,
      },
      {
        title: "Génération de devis",
        description: "Créez un devis PDF à partir de modèles personnalisés",
        skeleton: "SkeletonTwo",
        className: "md:col-span-1",
        icon: <IconFileDescription />,
      },
      {
        title: "Réponse en 1 clic",
        description: "Un bouton intégré dans Gmail pour envoyer le devis",
        skeleton: "SkeletonThree",
        className: "md:col-span-1",
        icon: <IconSend />,
      },
      {
        title: "Dashboard de suivi",
        description: "Visualisez vos prospects, devis envoyés, relances à faire",
        skeleton: "SkeletonFour",
        className: "md:col-span-2",
        icon: <IconLayoutDashboard />,
      },
      {
        title: "Relance automatique",
        description: "Relance configurable après 2, 3 ou 5 jours",
        skeleton: "SkeletonFive",
        className: "md:col-span-1",
        icon: <IconAlarm />,
      },
    ],
    hoverFeatures: [
      {
        title: "Pensé pour les freelances",
        description: "Gérez votre prospection sans perdre de temps",
        icon: <IconBriefcase />,
      },
      {
        title: "Simple & rapide",
        description: "Pas de formation requise. C’est plug & play.",
        icon: <IconBolt />,
      },
      {
        title: "Extension légère",
        description: "Aucun ralentissement de votre navigateur",
        icon: <IconFeather />,
      },
      {
        title: "Support en ligne 24/7",
        description: "Une équipe (ou un bot) à votre écoute",
        icon: <IconHeadphones />,
      },
    ],
  },
};

export const MinimalBento: Story = {
  args: {},
};

export const WithHoverFeatures: Story = {
  args: {
    title: "Fonctionnalités interactives",
    description: "Explorez nos fonctionnalités avec des effets de survol.",
    badgeText: "INTERACTIF",
    hoverFeatures: [
      {
        title: "Analyse en temps réel",
        description: "Obtenez des insights instantanés sur vos données.",
        icon: <IconTableColumn />,
      },
      {
        title: "Suggestions contextuelles",
        description: "L'IA propose des améliorations pertinentes.",
        icon: <IconSignature />,
      },
      {
        title: "Résumé automatique",
        description: "Condensez vos documents en quelques clics.",
        icon: <IconBoxAlignRightFilled />,
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
