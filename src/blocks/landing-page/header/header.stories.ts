import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Header } from ".";

const meta = {
  title: "Blocks/Landing Page/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    navigationLinks: {
      control: "object",
      description: "Liens de navigation du header",
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    navigationLinks: [
      { id: "fonctionnalites", label: "Fonctionnalités", href: "#fonctionnalites" },
      { id: "tarifs", label: "Tarifs", href: "#tarifs" },
      { id: "faq", label: "FAQ", href: "#faq" },
    ],
  },
};

export const WithManyLinks: Story = {
  args: {
    navigationLinks: [
      { id: "accueil", label: "Accueil", href: "#accueil" },
      { id: "fonctionnalites", label: "Fonctionnalités", href: "#fonctionnalites" },
      { id: "tarifs", label: "Tarifs", href: "#tarifs" },
      { id: "blog", label: "Blog", href: "#blog" },
      { id: "contact", label: "Contact", href: "#contact" },
      { id: "faq", label: "FAQ", href: "#faq" },
    ],
  },
};

export const Minimal: Story = {
  args: {
    navigationLinks: [{ id: "accueil", label: "Accueil", href: "#accueil" }],
  },
};

export const WithAuthSection: Story = {
  args: {
    navigationLinks: [
      { id: "fonctionnalites", label: "Fonctionnalités", href: "#fonctionnalites" },
      { id: "tarifs", label: "Tarifs", href: "#tarifs" },
      { id: "faq", label: "FAQ", href: "#faq" },
    ],
  },
  parameters: {
    docs: {
      description: {
        story:
          "Cette story montre le header avec des liens de navigation. Pour ajouter des sections d'authentification, utilisez les composants Header.AuthSection et Header.AuthSectionMobile.",
      },
    },
  },
};
