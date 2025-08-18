import { Hero } from "@/components/ui/hero";

export function ComponentTest() {
  const handleLogin = (data: { email: string; password: string }) => {
    console.log(data);
  };

  const handleRegister = (data: { name: string; email: string; password: string; confirmPassword: string }) => {
    console.log(data);
  };

  const handleOpenChange = (open: boolean) => {
    console.log(open);
  };

  return (
    <Hero
      badge="Test"
      title="Test"
      description="Test"
      buttonText="Test"
      onLogin={handleLogin}
      onRegister={handleRegister}
      authDialogOnOpenChange={handleOpenChange}
    />
  );
}
