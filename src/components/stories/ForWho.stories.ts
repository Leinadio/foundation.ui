import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ForWho } from "@/components/ui/for-who";

const meta = {
  title: "Landing Page/ForWho",
  component: ForWho,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ForWho>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomContent: Story = {
  args: {
    title: "Adapté à tous les types d&apos;entreprises",
    description:
      "Une solution flexible qui s&apos;adapte à vos besoins spécifiques, quelle que soit la taille de votre organisation.",
    badge: { text: "ADAPTABLE", isBadge: true },
  },
};

export const DifferentCompanySizes: Story = {
  args: {
    title: "Solutions sur mesure",
    description: "Chaque entreprise a des besoins uniques. Nous nous adaptons.",
    badge: { text: "SUR MESURE", isBadge: false },
    companySizes: [
      {
        id: "enterprises",
        title: "Pour les grandes entreprises",
        description:
          "Déployez la validation d&apos;idées à l&apos;échelle de votre organisation avec des outils d&apos;administration avancés.",
      },
      {
        id: "consultants",
        title: "Pour les consultants",
        description:
          "Offrez des services de validation d&apos;idées à vos clients avec des rapports détaillés et personnalisables.",
      },
      {
        id: "freelancers",
        title: "Pour les freelances",
        description:
          "Validez vos propres idées de projets et celles de vos clients avec un outil professionnel et accessible.",
      },
      {
        id: "nonprofits",
        title: "Pour les associations",
        description:
          "Évaluez l&apos;impact potentiel de vos initiatives sociales et optimisez vos programmes d&apos;action.",
      },
    ],
  },
};

export const MinimalContent: Story = {
  args: {
    title: "Simple et efficace",
    description: "Une approche minimaliste pour des résultats maximaux.",
    badge: { text: "MINIMAL", isBadge: false },
    companySizes: [
      {
        id: "startups",
        title: "Startups",
        description: "Validez vos idées rapidement et efficacement.",
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
