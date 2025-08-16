import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { ShowcaseBlog } from "@/components/ui/showcase-blog";

const meta = {
  title: "Landing Page/ShowcaseBlog",
  component: ShowcaseBlog,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ShowcaseBlog>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [],
  },
};

export const CustomContent: Story = {
  args: {
    title: "Projets inspirants",
    description: "Découvrez des réalisations exceptionnelles qui démontrent le potentiel des technologies modernes.",
    items: [],
  },
};

export const MinimalShowcase: Story = {
  args: {
    title: "Projets sélectionnés",
    description: "Une sélection de nos meilleures réalisations.",
    items: [
      {
        id: "project-1",
        title: "Application e-commerce moderne",
        description:
          "Une plateforme de vente en ligne construite avec les dernières technologies web, offrant une expérience utilisateur exceptionnelle.",
        href: "https://example.com",
        image:
          "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        id: "project-2",
        title: "Dashboard analytique",
        description:
          "Interface de visualisation de données en temps réel, conçue pour offrir des insights actionnables aux équipes.",
        href: "https://example.com",
        image:
          "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
      },
    ],
  },
};

export const TechShowcase: Story = {
  args: {
    title: "Technologies innovantes",
    description: "Explorez comment les technologies de pointe transforment le développement web moderne.",
    items: [
      {
        id: "vue-3",
        title: "Vue 3 : La révolution de la réactivité",
        description:
          "Découvrez comment Vue 3 a introduit le système de réactivité Composition API, révolutionnant la façon dont nous construisons des applications web.",
        href: "https://vuejs.org",
        image:
          "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        id: "svelte",
        title: "Svelte : Le framework invisible",
        description:
          "Explorez comment Svelte compile votre code en JavaScript vanilla ultra-optimisé, éliminant la nécessité d&apos;un framework runtime.",
        href: "https://svelte.dev",
        image:
          "https://images.unsplash.com/photo-1551250928-243dc937c49d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjN8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        id: "nuxt",
        title: "Nuxt 3 : Le framework Vue full-stack",
        description:
          "Apprenez comment Nuxt 3 combine la puissance de Vue 3 avec des fonctionnalités full-stack comme le rendu côté serveur et l&apos;API routes.",
        href: "https://nuxt.com",
        image:
          "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
      },
    ],
  },
};

export const BusinessShowcase: Story = {
  args: {
    title: "Success stories business",
    description: "Découvrez comment nos solutions ont transformé des entreprises et accéléré leur croissance.",
    items: [
      {
        id: "startup-success",
        title: "De startup à scale-up en 12 mois",
        description:
          "Comment une jeune startup a utilisé nos outils de validation d&apos;idées pour pivoter et atteindre 1M€ de chiffre d&apos;affaires.",
        href: "https://example.com",
        image:
          "https://images.unsplash.com/photo-1551250928-e4a05afaed1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjR8fHx8fHwyfHwxNzIzODA2OTM5fA&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        id: "enterprise-transformation",
        title: "Transformation digitale d&apos;une entreprise traditionnelle",
        description:
          "Le parcours d&apos;une entreprise centenaire qui a modernisé ses processus grâce à nos solutions technologiques.",
        href: "https://example.com",
        image:
          "https://images.unsplash.com/photo-1548324215-9133768e4094?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMzF8fHx8fHwyfHwxNzIzNDM1MzA1fA&ixlib=rb-4.0.3&q=80&w=1080",
      },
      {
        id: "agency-growth",
        title: "Une agence qui triple son chiffre d&apos;affaires",
        description:
          "Comment une agence web a utilisé nos outils pour optimiser ses processus et augmenter sa productivité de 300%.",
        href: "https://example.com",
        image:
          "https://images.unsplash.com/photo-1550070881-a5d71eda5800?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w2NDI3NzN8MHwxfGFsbHwxMjV8fHx8fHwyfHwxNzIzNDM1Mjk4fA&ixlib=rb-4.0.3&q=80&w=1080",
      },
    ],
  },
};

export const Mobile: Story = {
  args: {
    items: [],
  },
  parameters: {
    viewport: {
      defaultViewport: "mobile1",
    },
  },
};

export const Tablet: Story = {
  args: {
    items: [],
  },
  parameters: {
    viewport: {
      defaultViewport: "tablet",
    },
  },
};
