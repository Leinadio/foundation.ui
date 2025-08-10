// import { DEFAULT_SIDEBAR_CONFIG } from "./utils";
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar";
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
// import { ProfilUserSidebar } from '../ProfilUserSidebar';
import Link from "next/link";
import { PlusCircle, CreditCard, HelpCircle, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { WorkflowHistorySidebar } from '../WorkflowHistorySidebar';
// import AvailableReport from '@/components/AvailableReport';
// import { getDictionary } from '@/app/[lang]/dictionaries';

interface AppSidebarProps {
  variant: "sidebar" | "floating" | "inset";
  headerContent?: React.ReactNode;
  mainContent?: React.ReactNode;
}

export function AppSidebar({ variant, headerContent, mainContent }: AppSidebarProps) {
  const defaultHeaderContent = (
    <>
      <SidebarMenu>
        <SidebarMenuItem>
          <SidebarMenuButton size="lg" asChild>
            <Link href={`/`}>
              <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                <Image src="/icon/logo.svg" alt="Womi logo" width={100} height={100} />
              </div>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-semibold">{"Womi"}</span>
              </div>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      </SidebarMenu>

      {/* <ProfilUserSidebar /> */}

      <SidebarGroup>
        <Link href={`/`}>
          <Button className="w-full hover:bg-amber-200" size="lg">
            <PlusCircle className="mr-2 h-4 w-4" />
            {"Créer un rapport"}
          </Button>
        </Link>
      </SidebarGroup>

      <SidebarSeparator />

      {/* Crédits */}
      <SidebarGroup>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link href={`/`}>
                <CreditCard className="h-4 w-4" />
                <div className="grid flex-1">
                  <div className="flex items-center justify-between">
                    <span>{"Rapports complets disponibles"}</span>
                    {/* <AvailableReport /> */}
                  </div>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </>
  );

  const defaultMainContent = <SidebarGroup>{/* <WorkflowHistorySidebar dict={dict} lang={lang} /> */}</SidebarGroup>;

  return (
    <Sidebar side="left" variant={variant}>
      {headerContent ? (
        <SidebarHeader>{headerContent}</SidebarHeader>
      ) : (
        <SidebarHeader>{defaultHeaderContent}</SidebarHeader>
      )}

      {mainContent ? (
        <SidebarContent>{mainContent}</SidebarContent>
      ) : (
        <SidebarContent>{defaultMainContent}</SidebarContent>
      )}

      <SidebarFooter>
        <SidebarSeparator />
        {/* Aide et Support */}
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={`/`}>
                  <HelpCircle className="h-4 w-4" />
                  <div className="grid flex-1">
                    <span>{"FAQ"}</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href={`/`}>
                  <MessageCircle className="h-4 w-4" />
                  <div className="grid flex-1">
                    <span>{"Support"}</span>
                  </div>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter>
    </Sidebar>
  );
}
