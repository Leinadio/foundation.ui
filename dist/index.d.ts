import React from 'react';
export { Hero, HeroProps } from './hero.js';

interface AuthDialogProps {
    /** Élément déclencheur pour ouvrir le dialog */
    trigger?: React.ReactNode;
    /** État d'ouverture du dialog (contrôlé) */
    open?: boolean;
    /** Callback appelé lors du changement d'état d'ouverture */
    onOpenChange?: (open: boolean) => void;
    /** Onglet par défaut ('login' ou 'register') */
    defaultTab?: "login" | "register";
    /** Callback appelé lors de la soumission du formulaire de connexion */
    onLogin?: (data: {
        email: string;
        password: string;
    }) => void;
    /** Callback appelé lors de la soumission du formulaire d'inscription */
    onRegister?: (data: {
        name: string;
        email: string;
        password: string;
        confirmPassword: string;
    }) => void;
    /** État de chargement */
    isLoading?: boolean;
}
declare function AuthDialog({ trigger, open, onOpenChange, defaultTab, onLogin, onRegister, isLoading, }: AuthDialogProps): React.JSX.Element;

type CheckoutButtonClientProps = {
    amount?: number;
    currency?: string;
    onCheckout: () => Promise<void>;
};
declare function CheckoutButton({ amount, currency, onCheckout }: CheckoutButtonClientProps): React.JSX.Element;

export { AuthDialog, CheckoutButton };
