import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Component as FAQ } from "@/components/ui/faq";

const meta = {
  title: "Landing Page/FAQ",
  component: FAQ,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof FAQ>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const CustomContent: Story = {
  args: {
    heading: "Questions fréquentes",
    description: "Trouvez rapidement les réponses à vos questions les plus courantes.",
    badge: "AIDE",
    headingHighlight: "Trouvez vos réponses.",
  },
};

export const BusinessFAQ: Story = {
  args: {
    heading: "Questions business",
    description: "Tout ce que vous devez savoir sur nos services et notre approche.",
    badge: "BUSINESS",
    headingHighlight: "Clarifions vos doutes.",
    items: [
      {
        id: "business-1",
        question: "Comment fonctionne la validation d&apos;idées ?",
        answer:
          "Notre IA analyse votre idée sous tous les angles : marché, cible, problème, solution et business model. Vous recevez un rapport détaillé en quelques secondes.",
      },
      {
        id: "business-2",
        question: "Quels sont les délais de livraison ?",
        answer:
          "L&apos;analyse est instantanée. Vous recevez votre rapport de validation en moins de 30 secondes après avoir saisi votre idée.",
      },
      {
        id: "business-3",
        question: "Puis-je utiliser l&apos;outil pour plusieurs idées ?",
        answer:
          "Oui, selon votre plan, vous pouvez valider autant d&apos;idées que vous le souhaitez. Le plan gratuit permet 3 projets par mois.",
      },
      {
        id: "business-4",
        question: "Les analyses sont-elles confidentielles ?",
        answer:
          "Absolument. Toutes vos idées et analyses restent strictement confidentielles. Nous ne partageons jamais vos informations.",
      },
    ],
  },
};

export const TechnicalFAQ: Story = {
  args: {
    heading: "Support technique",
    description: "Besoin d&apos;aide pour utiliser nos outils ? Consultez ces questions techniques.",
    badge: "TECHNIQUE",
    headingHighlight: "Résolvons vos problèmes.",
    items: [
      {
        id: "tech-1",
        question: "Quels navigateurs sont supportés ?",
        answer:
          "Notre plateforme fonctionne sur tous les navigateurs modernes : Chrome, Firefox, Safari, Edge. Nous recommandons Chrome pour une expérience optimale.",
      },
      {
        id: "tech-2",
        question: "Puis-je exporter mes rapports ?",
        answer:
          "Oui, tous les rapports peuvent être exportés en PDF ou partagés via un lien privé. Les utilisateurs Pro peuvent également exporter en formats Excel et Word.",
      },
      {
        id: "tech-3",
        question: "L&apos;outil fonctionne-t-il sur mobile ?",
        answer:
          "Parfaitement ! Notre interface est entièrement responsive et optimisée pour tous les appareils : ordinateurs, tablettes et smartphones.",
      },
      {
        id: "tech-4",
        question: "Comment sécuriser mon compte ?",
        answer:
          "Nous recommandons l&apos;activation de l&apos;authentification à deux facteurs (2FA) et l&apos;utilisation de mots de passe forts et uniques.",
      },
    ],
  },
};

export const MinimalFAQ: Story = {
  args: {
    heading: "Questions essentielles",
    description: "Les réponses aux questions les plus importantes.",
    badge: "ESSENTIEL",
    headingHighlight: "En bref.",
    items: [
      {
        id: "minimal-1",
        question: "Combien ça coûte ?",
        answer:
          "Nous proposons un plan gratuit et des plans payants à partir de 29€/mois. Consultez notre page de tarification pour plus de détails.",
      },
      {
        id: "minimal-2",
        question: "Puis-je annuler à tout moment ?",
        answer:
          "Oui, vous pouvez annuler votre abonnement à tout moment sans frais supplémentaires. Votre accès reste actif jusqu&apos;à la fin de la période facturée.",
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
