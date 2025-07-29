import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";

import { CheckoutButton } from ".";

// Configuration de base pour les stories du CheckoutButton
const meta = {
  title: "Components/Common/CheckoutButton",
  component: CheckoutButton,
  parameters: {
    // Centre le composant dans le Canvas
    layout: "centered",
  },
  // Génère automatiquement la documentation
  tags: ["autodocs"],
  // Configuration des contrôles
  argTypes: {
    amount: {
      control: { type: "number", min: 0, step: 0.01 },
      description: "Montant à payer",
    },
    currency: {
      control: { type: "select" },
      options: ["eur", "usd", "gbp"],
      description: "Devise du paiement",
    },
    onCheckout: {
      description: "Fonction appelée lors du clic sur le bouton de paiement",
    },
  },
  // Arguments par défaut avec une fonction simulée
  args: {
    onCheckout: fn().mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 2000))),
  },
} satisfies Meta<typeof CheckoutButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// Story par défaut avec un montant standard
export const Default: Story = {
  args: {
    amount: 29.99,
    currency: "eur",
  },
};

// Story sans montant affiché
export const WithoutAmount: Story = {
  args: {
    currency: "eur",
  },
};

// Story avec un montant élevé
export const HighAmount: Story = {
  args: {
    amount: 299.99,
    currency: "eur",
  },
};

// Story avec différentes devises
export const USD: Story = {
  args: {
    amount: 34.99,
    currency: "usd",
  },
};

export const GBP: Story = {
  args: {
    amount: 24.99,
    currency: "gbp",
  },
};

// Story qui simule une erreur
export const WithError: Story = {
  args: {
    amount: 19.99,
    currency: "eur",
    onCheckout: fn().mockImplementation(() => Promise.reject(new Error("Erreur de paiement simulée"))),
  },
};

// Story avec un délai plus long pour tester l'état de chargement
export const LongLoading: Story = {
  args: {
    amount: 49.99,
    currency: "eur",
    onCheckout: fn().mockImplementation(() => new Promise((resolve) => setTimeout(resolve, 5000))),
  },
};
