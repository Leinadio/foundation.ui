import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Pricing } from "@/components/ui/pricing";

const meta = {
  title: "Landing Page/Pricing",
  component: Pricing,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Pricing>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomContent: Story = {
  args: {
    title: "Tarifs adaptés à vos besoins",
    description: "Choisissez le plan qui correspond le mieux à votre utilisation et à votre budget.",
  },
};

export const MinimalPricing: Story = {
  args: {
    title: "Deux plans simples",
    description: "Commencez gratuitement ou passez au niveau supérieur.",
    pricingPlans: [
      {
        name: "Gratuit",
        monthlyPrice: "0",
        yearlyPrice: "0",
        description: "Pour commencer",
        features: ["3 projets", "Support communautaire"],
        limitations: ["Fonctionnalités limitées"],
        buttonText: "Commencer",
        popular: false,
      },
      {
        name: "Premium",
        monthlyPrice: "19",
        yearlyPrice: "190",
        description: "Pour les utilisateurs avancés",
        features: ["Projets illimités", "Support prioritaire", "Toutes les fonctionnalités"],
        limitations: [],
        buttonText: "Choisir Premium",
        popular: true,
      },
    ],
  },
};

export const StartupPricing: Story = {
  args: {
    title: "Tarifs startup-friendly",
    description: "Des prix adaptés aux budgets des jeunes entreprises.",
    pricingPlans: [
      {
        name: "Starter",
        monthlyPrice: "9",
        yearlyPrice: "90",
        description: "Pour les startups en démarrage",
        features: ["10 projets", "50 GB de stockage", "Support email"],
        limitations: ["Pas d&apos;API", "Fonctionnalités limitées"],
        buttonText: "Démarrer",
        popular: false,
      },
      {
        name: "Growth",
        monthlyPrice: "49",
        yearlyPrice: "490",
        description: "Pour les startups en croissance",
        features: ["Projets illimités", "500 GB de stockage", "Support prioritaire", "API basique"],
        limitations: ["Pas de SSO"],
        buttonText: "Croître",
        popular: true,
      },
      {
        name: "Scale",
        monthlyPrice: "199",
        yearlyPrice: "1990",
        description: "Pour les startups à l&apos;échelle",
        features: ["Tout du plan Growth", "Stockage illimité", "SSO", "Support dédié"],
        limitations: [],
        buttonText: "Scaler",
        popular: false,
      },
    ],
  },
};

export const EnterprisePricing: Story = {
  args: {
    title: "Solutions entreprise",
    description: "Des plans adaptés aux grandes organisations avec des besoins complexes.",
    pricingPlans: [
      {
        name: "Business",
        monthlyPrice: "199",
        yearlyPrice: "1990",
        description: "Pour les équipes moyennes",
        features: ["100 utilisateurs", "1 TB de stockage", "Support prioritaire", "API complète"],
        limitations: ["Pas de SSO", "Pas de conformité"],
        buttonText: "Démarrer",
        popular: false,
      },
      {
        name: "Enterprise",
        monthlyPrice: "499",
        yearlyPrice: "4990",
        description: "Pour les grandes entreprises",
        features: ["Utilisateurs illimités", "Stockage illimité", "SSO et SAML", "Conformité SOC2", "Support 24/7"],
        limitations: [],
        buttonText: "Contacter les ventes",
        popular: true,
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
