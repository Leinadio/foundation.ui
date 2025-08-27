import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { SuccessPath } from "@/blocks/landing-page/success-path";
import { CheckCircle, TrendingUp } from "lucide-react";

const meta = {
  title: "Blocks/Landing Page/SuccessPath",
  component: SuccessPath,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    data: { control: "object" },
  },
} satisfies Meta<typeof SuccessPath>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const TaskListOnly: Story = {
  args: {
    title: "Organisation claire (exemple liste de tâches)",
    description:
      "Avec une structure organisée, chaque tâche trouve sa place et chaque membre de l'équipe sait exactement quoi faire et quand.",
    badgeText: "EXEMPLE",
    data: [
      {
        title: "Organisation claire",
        paragraphs: ["Chaque membre de l'équipe sait exactement quoi faire et quand."],
        features: [
          { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Tâches priorisées automatiquement" },
          { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Délais respectés" },
          { icon: <CheckCircle className="w-5 h-5 text-primary" />, text: "Communication centralisée" },
        ],
        summary: {
          icon: <TrendingUp />,
          label: "Résultat",
          text: "+65% de productivité en équipe",
        },
      },
    ],
  },
};
