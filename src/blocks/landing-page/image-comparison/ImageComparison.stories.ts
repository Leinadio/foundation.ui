import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { ImageComparison } from ".";

const meta = {
  title: "Blocks/Landing Page/ImageComparison",
  component: ImageComparison,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
  argTypes: {
    // Le composant n'a pas de props, il utilise des images en dur
  },
} satisfies Meta<typeof ImageComparison>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithCustomImages: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "Ce composant affiche une comparaison d'images avec un slider interactif. Les images sont actuellement codées en dur dans le composant.",
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
