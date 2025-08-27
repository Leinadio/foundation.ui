import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { HeroVideo } from ".";

const meta = {
  title: "Blocks/Landing Page/HeroVideo",
  component: HeroVideo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    videoSrc: {
      control: "text",
      description: "URL de la vidéo",
    },
    thumbnailSrc: {
      control: "text",
      description: "URL de la miniature",
    },
    thumbnailAlt: {
      control: "text",
      description: "Texte alternatif de la miniature",
    },
  },
} satisfies Meta<typeof HeroVideo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    videoSrc: "/videos/hero_en.mp4",
    thumbnailSrc: "/videos/hero_en_thumbnail.png",
    thumbnailAlt: "Vidéo de démonstration",
  },
};

export const CustomVideo: Story = {
  args: {
    videoSrc: "/videos/hero_en.mp4",
    thumbnailSrc: "/videos/hero_en_thumbnail.png",
    thumbnailAlt: "Vidéo de démonstration",
  },
};

export const ShortVideo: Story = {
  args: {
    videoSrc: "/videos/short_demo.mp4",
    thumbnailSrc: "/videos/short_demo_thumbnail.png",
    thumbnailAlt: "Démo courte",
  },
};
