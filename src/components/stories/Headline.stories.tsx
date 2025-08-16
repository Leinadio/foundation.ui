import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { Headline } from "@/components/ui/headline";

const meta = {
  title: "Common/Headline",
  component: Headline,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: "select",
      options: ["red", "blue", "green", "purple", "orange"],
    },
  },
} satisfies Meta<typeof Headline>;

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
  },
};

export const WithCustomColor: Story = {
  args: {
    title: (
      <>
        <span className="text-blue-600">Innovation</span> et <span className="text-blue-600">excellence</span>
      </>
    ),
    description: "Découvrez comment notre approche révolutionne le développement d'applications.",
    badge: { text: "NOUVELLE APPROCHE", isBadge: true },
    color: "blue",
  },
};

export const WithoutBadge: Story = {
  args: {
    title: "Titre simple sans badge",
    description: "Une description simple pour un titre sans badge.",
    badge: { text: "TEXTE SIMPLE", isBadge: false },
    color: "green",
  },
};

export const LongTitle: Story = {
  args: {
    title: (
      <>
        <span className="text-purple-600">Développement</span> d&apos;applications{" "}
        <span className="text-purple-600">modernes</span> avec une <span className="text-purple-600">architecture</span>{" "}
        robuste
      </>
    ),
    description: "Une approche complète pour construire des applications évolutives et maintenables.",
    badge: { text: "ARCHITECTURE", isBadge: true },
    color: "purple",
  },
};
