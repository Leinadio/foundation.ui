import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { AuthDialog } from "@/components/ui/auth-dialog";

const meta = {
  title: "Components/AuthDialog",
  component: AuthDialog,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    defaultTab: {
      control: { type: "select" },
      options: ["login", "register"],
    },
    isLoading: {
      control: { type: "boolean" },
    },
  },
} satisfies Meta<typeof AuthDialog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultTab: "login",
    isLoading: false,
    onLogin: (data) => {
      console.log("Login:", data);
    },
    onRegister: (data) => {
      console.log("Register:", data);
    },
    onGoogleAuth: () => {
      console.log("Google auth clicked");
    },
    onGithubAuth: () => {
      console.log("Github auth clicked");
    },
    onResetPassword: (data) => {
      console.log("Reset password:", data);
    },
  },
};

export const LoginTab: Story = {
  args: {
    ...Default.args,
    defaultTab: "login",
  },
};

export const RegisterTab: Story = {
  args: {
    ...Default.args,
    defaultTab: "register",
  },
};

export const LoadingState: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const ControlledOpen: Story = {
  args: {
    ...Default.args,
    isOpen: true,
    onOpenChange: (open) => {
      console.log("Dialog open state:", open);
    },
  },
};

export const WithResetPasswordFlow: Story = {
  args: {
    ...Default.args,
    defaultTab: "login",
    onResetPassword: (data) => {
      alert("Lien de réinitialisation envoyé à : " + data.email);
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Cliquez sur 'Mot de passe oublié ?' pour tester le flux de réinitialisation.",
      },
    },
  },
};

export const SocialAuthOnly: Story = {
  args: {
    ...Default.args,
    onGoogleAuth: () => {
      alert("Authentification Google déclenchée");
    },
    onGithubAuth: () => {
      alert("Authentification Github déclenchée");
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Testez uniquement les boutons d'authentification sociale.",
      },
    },
  },
};

export const Mobile: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Tablet: Story = {
  args: {
    ...Default.args,
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
