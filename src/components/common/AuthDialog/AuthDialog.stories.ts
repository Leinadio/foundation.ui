import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AuthDialog } from "./index";

const meta: Meta<typeof AuthDialog> = {
  title: "Common/AuthDialog",
  component: AuthDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultTab: {
      control: "select",
      options: ["login", "register"],
    },
    isLoading: {
      control: "boolean",
    },
    open: {
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultTab: "login",
    isLoading: false,
  },
};

export const RegisterTab: Story = {
  args: {
    defaultTab: "register",
    isLoading: false,
  },
};

export const Loading: Story = {
  args: {
    defaultTab: "login",
    isLoading: true,
  },
};

export const Controlled: Story = {
  args: {
    defaultTab: "login",
    isLoading: false,
  },
};
