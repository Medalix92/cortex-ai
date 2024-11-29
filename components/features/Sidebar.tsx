"use client";

import {
  CoinsIcon,
  HomeIcon,
  Layers2Icon,
  LucideProps,
  MenuIcon,
  ShieldCheckIcon,
} from "lucide-react";
import Logo from "./Logo";
import { Button, buttonVariants } from "../ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { ForwardRefExoticComponent, RefAttributes, useState } from "react";

const routes = [
  {
    title: "Home",
    href: "",
    icon: HomeIcon,
  },
  {
    title: "Workflows",
    href: "workflows",
    icon: Layers2Icon,
  },
  {
    title: "Credentials",
    href: "credentials",
    icon: ShieldCheckIcon,
  },
  {
    title: "Billing",
    href: "billing",
    icon: CoinsIcon,
  },
];

const getActiveRoute = (pathname: string) => {
  console.log(pathname);
  return (
    routes.find(
      (route) => route.href.length > 0 && pathname.includes(route.href)
    ) ?? routes[0]
  );
};

type Routeconfig =
  | {
      title: string;
      href: string;
      icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
      >;
    }
  | undefined;

const NavItems = ({
  activeRoute,
  onClick,
}: {
  activeRoute: Routeconfig;
  onClick?: () => void;
}) => (
  <div className="flex flex-col gap-2 p-2 ">
    {routes.map((route, index) => (
      <Link
        onClick={onClick}
        key={route.href}
        href={`/${route.href}`}
        className={buttonVariants({
          variant:
            activeRoute?.href === route.href
              ? "sidebarButtonActive"
              : "sidebarButton",
        })}
      >
        <route.icon size={20} />

        {route.title}
      </Link>
    ))}
  </div>
);

export const DesktopSidebar = () => {
  const pathname = usePathname();
  const activeRoute = getActiveRoute(pathname);
  console.log("activeRoute", activeRoute?.href);
  console.log("pathname", pathname);
  return (
    <div className="hidden relative md:block w-[280px] overflow-hidden bg-primary/5 dark:bg-secondary/30 dark:text-foreground text-muted-foreground border-r-2 border-separate ">
      <div className="flex items-center justify-center gap-2 border-b-[1px] border-separate p-4 ">
        <Logo />
      </div>
      <NavItems activeRoute={activeRoute} />
    </div>
  );
};

export const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const activeRoute = getActiveRoute(pathname);
  return (
    <div className="block border-separate bg-background md:hidden">
      <nav className="container px-0 flex items-center justify-between">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button size={"icon"} variant={"ghost"}>
              <MenuIcon size={24} />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="min-w-[400px] space-y-4 w-full overflow-hidden"
            side={"left"}
          >
            <Logo />
            <NavItems
              activeRoute={activeRoute}
              onClick={() => setIsOpen(false)}
            />
          </SheetContent>
        </Sheet>
      </nav>
    </div>
  );
};
