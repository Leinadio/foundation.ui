import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { WithWithout } from ".";
import {
  Clock,
  Frown,
  AlertTriangle,
  TrendingDown,
  Users,
  Zap,
  Smile,
  Shield,
  TrendingUp,
  UserCheck,
} from "lucide-react";

const meta = {
  title: "Blocks/Landing Page/WithWithout",
  component: WithWithout,
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
      description: "Description de la section",
    },
    badgeText: {
      control: "text",
      description: "Texte du badge",
    },
    beforeScenarios: {
      control: "object",
      description: "Scénarios avant la solution",
    },
    afterScenarios: {
      control: "object",
      description: "Scénarios après la solution",
    },
  },
} satisfies Meta<typeof WithWithout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Transformez votre façon de travailler",
    description: "Découvrez l'impact concret de notre solution sur votre quotidien professionnel",
    badgeText: "Transformez votre façon de travailler",
    beforeScenarios: [
      {
        icon: Clock,
        title: "Perte de temps considérable",
        description: "Plusieurs heures perdues chaque semaine à chercher des informations dispersées",
      },
      {
        icon: Frown,
        title: "Frustration quotidienne",
        description: "Stress et irritation face aux processus manuels répétitifs et chronophages",
      },
      {
        icon: AlertTriangle,
        title: "Erreurs fréquentes",
        description: "Risques d'erreurs humaines dans la saisie et le traitement des données",
      },
      {
        icon: TrendingDown,
        title: "Productivité limitée",
        description: "Difficultés à suivre les performances et à identifier les axes d'amélioration",
      },
      {
        icon: Users,
        title: "Communication fragmentée",
        description: "Informations éparpillées entre différents outils et équipes",
      },
    ],
    afterScenarios: [
      {
        icon: Zap,
        title: "Efficacité maximale",
        description: "Automatisation des tâches répétitives, gain de 80% de temps sur les processus",
      },
      {
        icon: Smile,
        title: "Satisfaction au travail",
        description: "Interface intuitive et workflows optimisés pour une expérience utilisateur fluide",
      },
      {
        icon: Shield,
        title: "Fiabilité garantie",
        description: "Validation automatique et contrôles intégrés pour éliminer les erreurs",
      },
      {
        icon: TrendingUp,
        title: "Performance optimisée",
        description: "Tableaux de bord en temps réel et analytics avancés pour piloter l'activité",
      },
      {
        icon: UserCheck,
        title: "Collaboration renforcée",
        description: "Centralisation des données et outils de collaboration intégrés",
      },
    ],
  },
};

export const Minimal: Story = {
  args: {
    title: "Avant vs Après",
    description: "Comparaison simple",
    badgeText: "COMPARAISON",
    beforeScenarios: [
      {
        icon: Clock,
        title: "Avant",
        description: "Situation initiale",
      },
    ],
    afterScenarios: [
      {
        icon: Zap,
        title: "Après",
        description: "Situation améliorée",
      },
    ],
  },
};

export const CustomIcons: Story = {
  args: {
    title: "Évolution des processus",
    description: "Comment nos outils transforment votre workflow",
    badgeText: "ÉVOLUTION",
    beforeScenarios: [
      {
        icon: TrendingDown,
        title: "Processus manuel",
        description: "Tâches répétitives et chronophages",
      },
      {
        icon: Users,
        title: "Équipe dispersée",
        description: "Manque de coordination entre les membres",
      },
    ],
    afterScenarios: [
      {
        icon: TrendingUp,
        title: "Processus automatisé",
        description: "Tâches optimisées et rapides",
      },
      {
        icon: UserCheck,
        title: "Équipe coordonnée",
        description: "Collaboration fluide et efficace",
      },
    ],
  },
};
