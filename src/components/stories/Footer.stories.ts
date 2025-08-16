import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Youtube, MessageCircle, BookOpen, Rocket } from "lucide-react";
import { Footer } from "../../ui/footer";

const meta = {
  title: "Landing Page/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Footer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomCallToAction: Story = {
  args: {
    callToAction: {
      badge: "🎯 Prêt à transformer ?",
      title: "Commencez votre transformation digitale aujourd&apos;hui",
      description:
        "Rejoignez des milliers d&apos;entreprises qui ont déjà transformé leurs processus grâce à nos solutions innovantes.",
      primaryButtonText: "Démarrer maintenant",
      secondaryButtonText: "Demander une démo",
    },
  },
};

export const CustomFooterLinks: Story = {
  args: {
    footerLinks: {
      product: {
        title: "Solutions",
        links: [
          { name: "Validation d&apos;idées", href: "#validation" },
          { name: "Analyse de marché", href: "#market" },
          { name: "Business plan", href: "#business-plan" },
          { name: "Intelligence artificielle", href: "#ai" },
        ],
      },
      company: {
        title: "À propos",
        links: [
          { name: "Notre histoire", href: "#story" },
          { name: "Équipe", href: "#team" },
          { name: "Missions", href: "#missions" },
          { name: "Partenaires", href: "#partners" },
        ],
      },
      support: {
        title: "Aide",
        links: [
          { name: "Centre d&apos;aide", href: "#help" },
          { name: "Tutoriels", href: "#tutorials" },
          { name: "FAQ", href: "#faq" },
          { name: "Support technique", href: "#support" },
        ],
      },
      legal: {
        title: "Légal",
        links: [
          { name: "Mentions légales", href: "/legal" },
          { name: "CGU", href: "/terms" },
          { name: "Confidentialité", href: "/privacy" },
          { name: "Cookies", href: "/cookies" },
        ],
      },
    },
  },
};

export const CustomSocialLinks: Story = {
  args: {
    socialLinks: [
      { name: "YouTube", href: "https://youtube.com", icon: Youtube },
      { name: "Discord", href: "https://discord.gg", icon: MessageCircle },
      { name: "Medium", href: "https://medium.com", icon: BookOpen },
      { name: "Product Hunt", href: "https://producthunt.com", icon: Rocket },
    ],
  },
};

export const CustomCompanyInfo: Story = {
  args: {
    companyInfo: {
      name: "Foundation Builder Pro",
      logo: "/logo.svg",
      copyright: "Foundation Builder Pro. Tous droits réservés.",
    },
  },
};

export const MinimalFooter: Story = {
  args: {
    callToAction: {
      badge: "💡",
      title: "Besoin d&apos;aide ?",
      description: "Notre équipe est là pour vous accompagner.",
      primaryButtonText: "Nous contacter",
      secondaryButtonText: "Documentation",
    },
    footerLinks: {
      product: {
        title: "Produit",
        links: [
          { name: "Fonctionnalités", href: "#features" },
          { name: "Tarifs", href: "#pricing" },
        ],
      },
      company: {
        title: "Entreprise",
        links: [
          { name: "À propos", href: "#about" },
          { name: "Contact", href: "#contact" },
        ],
      },
    },
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
