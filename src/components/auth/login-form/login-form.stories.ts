import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { LoginForm } from "@/components/auth/login-form";

const meta = {
  title: "Components/Auth/LoginForm",
  component: LoginForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isLoading: {
      control: { type: "boolean" },
    },
    onLoginSubmit: {
      action: "login submitted",
    },
    onGoogleAuth: {
      action: "google auth clicked",
    },
    onGithubAuth: {
      action: "github auth clicked",
    },
  },
} satisfies Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    onLoginSubmit: async (data) => {
      console.log("Login data:", data);
      return Promise.resolve();
    },
    onGoogleAuth: async () => {
      console.log("Google auth clicked");
      return Promise.resolve();
    },
    onGithubAuth: async () => {
      console.log("Github auth clicked");
      return Promise.resolve();
    },
  },
};

export const LoadingState: Story = {
  args: {
    ...Default.args,
    isLoading: true,
  },
};

export const WithFormValidation: Story = {
  args: {
    ...Default.args,
    onLoginSubmit: async (data) => {
      if (!data.email || !data.password) {
        alert("Veuillez remplir tous les champs");
        return;
      }
      if (!data.email.includes("@")) {
        alert("Email invalide");
        return;
      }
      if (data.password.length < 6) {
        alert("Le mot de passe doit contenir au moins 6 caractères");
        return;
      }
      alert("Connexion réussie !");
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Testez la validation du formulaire en soumettant avec des données invalides.",
      },
    },
  },
};

export const WithResetPasswordFlow: Story = {
  args: {
    ...Default.args,
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
    onGoogleAuth: async () => {
      alert("Authentification Google déclenchée");
      return Promise.resolve();
    },
    onGithubAuth: async () => {
      alert("Authentification Github déclenchée");
      return Promise.resolve();
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

export const SimulateError: Story = {
  args: {
    ...Default.args,
    onLoginSubmit: async (data) => {
      console.log("Login attempt with:", data);
      alert("Erreur : Email ou mot de passe incorrect");
      return Promise.reject(new Error("Invalid credentials"));
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Simule une erreur de connexion pour tester la gestion d'erreur.",
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
