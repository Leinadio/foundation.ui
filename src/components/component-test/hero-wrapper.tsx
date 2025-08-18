"use client";

import { Hero, HeroProps } from "@/components/ui/hero";

export function HeroWithAuth(props: HeroProps) {
  async function handleLogin(_data: { email: string; password: string }) {
    try {
      console.log("Connexion réussie: ", _data);
      return;
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      return;
    }
  }

  async function handleRegister(_data: { name: string; email: string; password: string; confirmPassword: string }) {
    try {
      console.log("Inscription réussie: ", _data);
      return;
    } catch (error) {
      console.error("Erreur lors de l'inscription:", error);
      return;
    }
  }

  return <Hero {...props} onLogin={handleLogin} onRegister={handleRegister} />;
}
