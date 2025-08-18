"use client";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Badge } from "@/components/ui/badge";
import { AuthDialog } from "@/components/ui/auth-dialog";
import { Menu } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface HeaderProps {
  navigationLinks: NavLink[];
  isConnected: boolean;
  dashboardUrl?: string;
  onLogin?: (data: { email: string; password: string }) => void;
  onRegister?: (data: { name: string; email: string; password: string; confirmPassword: string }) => void;
  authDialogOnOpenChange?: (open: boolean) => void;
  authDialogIsOpen?: boolean;
  authDialogIsLoading?: boolean;
  authDialogDefaultTab?: "login" | "register";
}

export function Header({
  navigationLinks,
  isConnected,
  dashboardUrl,
  onLogin,
  onRegister,
  authDialogOnOpenChange,
  authDialogIsOpen,
  authDialogIsLoading,
  authDialogDefaultTab,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (!element) {
      return;
    }

    const headerHeight = 80;
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10 && currentScrollY > lastScrollY);
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background ${
        isScrolled ? "backdrop-blur-md border-b border-border shadow-sm py-0" : "py-2"
      }`}
    >
      <div
        className={`container max-w-6xl mx-auto px-4 lg:px-0 flex items-center justify-between transition-all duration-300 h-16`}
      >
        <div className="transition-transform duration-300">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">F</span>
            </div>
            <span className="font-bold text-xl text-foreground">Foundation Builder</span>
          </div>
        </div>

        <div className="hidden md:flex items-center justify-end flex-1 gap-4">
          <NavigationMenu>
            <NavigationMenuList>
              {navigationLinks.map((link) => (
                <NavigationMenuItem key={link.id}>
                  <NavigationMenuLink
                    className={cn(navigationMenuTriggerStyle(), "cursor-pointer", "bg-background text-foreground")}
                    onClick={() => handleScrollToSection(link.href)}
                  >
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center gap-4">
            {isConnected ? (
              <Button variant="outline" size="sm" asChild>
                <a href={dashboardUrl}>Dashboard</a>
              </Button>
            ) : (
              <AuthDialog
                isOpen={authDialogIsOpen}
                defaultTab={authDialogDefaultTab}
                isLoading={authDialogIsLoading}
                onLogin={onLogin}
                onRegister={onRegister}
                onOpenChange={authDialogOnOpenChange}
              >
                <Button size="sm">Commencer</Button>
              </AuthDialog>
            )}
          </div>
        </div>

        <div className="md:hidden ml-auto">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Ouvrir le menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Navigation</SheetTitle>
                <SheetDescription className="text-left">Accédez rapidement aux différentes sections</SheetDescription>
              </SheetHeader>

              <nav className="flex flex-col space-y-4 mt-8">
                {navigationLinks.map((link) => (
                  <SheetClose asChild key={link.id}>
                    <Button
                      variant="ghost"
                      className="justify-start text-left h-auto p-3"
                      onClick={() => handleScrollToSection(link.href)}
                    >
                      {link.label}
                    </Button>
                  </SheetClose>
                ))}
              </nav>

              <div className="mt-8 pt-8 border-t border-border space-y-4">
                <Badge variant="secondary" className="w-fit">
                  Authentification
                </Badge>
                <div className="flex flex-col space-y-3">
                  {isConnected ? (
                    <Button variant="outline" className="w-full justify-start" asChild>
                      <a href={dashboardUrl}>Dashboard</a>
                    </Button>
                  ) : (
                    <AuthDialog
                      isOpen={authDialogIsOpen}
                      defaultTab={authDialogDefaultTab}
                      isLoading={authDialogIsLoading}
                      onLogin={onLogin}
                      onRegister={onRegister}
                      onOpenChange={authDialogOnOpenChange}
                    >
                      <Button className="w-full justify-start">Commencer</Button>
                    </AuthDialog>
                  )}
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
