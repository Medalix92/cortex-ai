import BreadcrumbHeader from "@/components/features/Breadcrumb";
import { DesktopSidebar, MobileSidebar } from "@/components/features/Sidebar";
import { ThemeToggle } from "@/components/features/ThemeToggle";
import { Separator } from "@/components/ui/separator";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen">
      <DesktopSidebar />
      <div className="flex flex-col flex-1 min-h-screen">
        <header className="flex items-center justify-between px-6 py-4 container">
          <MobileSidebar />
          <BreadcrumbHeader />
          <div className="flex items-center gap-2 ">
            <ThemeToggle />
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </header>
        <Separator />
        <div className="overflow-auto">
          <div className="flex-1 container py-4 text-foreground">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default layout;
