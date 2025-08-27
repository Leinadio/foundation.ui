import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { RegisterForm } from "@/components/auth/register-form";

const meta = {
  title: "Forms/RegisterForm",
  component: RegisterForm,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    isLoading: {
      control: { type: "boolean" },
    },
    onRegisterSubmit: {
      action: "register submitted",
    },
    onGoogleAuth: {
      action: "google auth clicked",
    },
    onGithubAuth: {
      action: "github auth clicked",
    },
  },
} satisfies Meta<typeof RegisterForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
    onRegisterSubmit: async (data) => {
      console.log("Register data:", data);
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
    onRegisterSubmit: async (data) => {
      if (!data.name || !data.email || !data.password || !data.confirmPassword) {
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
      if (data.password !== data.confirmPassword) {
        alert("Les mots de passe ne correspondent pas");
        return;
      }
      if (data.name.length < 2) {
        alert("Le nom doit contenir au moins 2 caractères");
        return;
      }
      alert("Inscription réussie !");
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          "Testez la validation du formulaire en soumettant avec des données invalides ou des mots de passe non correspondants.",
      },
    },
  },
};

export const PasswordMismatch: Story = {
  args: {
    ...Default.args,
    onRegisterSubmit: async (data) => {
      if (data.password !== data.confirmPassword) {
        alert("Erreur : Les mots de passe ne correspondent pas");
        return;
      }
      alert("Inscription réussie !");
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Testez spécifiquement la validation de correspondance des mots de passe.",
      },
    },
  },
};

export const SocialAuthOnly: Story = {
  args: {
    ...Default.args,
    onGoogleAuth: async () => {
      alert("Inscription avec Google déclenchée");
      return Promise.resolve();
    },
    onGithubAuth: async () => {
      alert("Inscription avec Github déclenchée");
      return Promise.resolve();
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Testez uniquement les boutons d'authentification sociale pour l'inscription.",
      },
    },
  },
};

export const SimulateError: Story = {
  args: {
    ...Default.args,
    onRegisterSubmit: async (data) => {
      console.log("Register attempt with:", data);
      alert("Erreur : Cet email est déjà utilisé");
      return Promise.reject(new Error("Email already exists"));
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Simule une erreur d'inscription pour tester la gestion d'erreur.",
      },
    },
  },
};

export const WeakPassword: Story = {
  args: {
    ...Default.args,
    onRegisterSubmit: async (data) => {
      if (data.password.length < 8) {
        alert("Le mot de passe doit contenir au moins 8 caractères");
        return;
      }
      if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(data.password)) {
        alert("Le mot de passe doit contenir au moins une minuscule, une majuscule et un chiffre");
        return;
      }
      alert("Inscription réussie avec un mot de passe fort !");
    },
  },
  parameters: {
    docs: {
      description: {
        story: "Testez la validation de mot de passe fort avec des critères spécifiques.",
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
