"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { NAVIGATION } from "@/config";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const pathName = usePathname();
  return (
    <NavigationMenu className="list-none gap-1">
      {NAVIGATION.map((nav) => {
        const isActive = nav.href === pathName;
        const NavIcon = nav.icon;
        return (
          <NavigationMenuItem key={nav.name}>
            <NavigationMenuLink asChild>
              <Link
                href={nav.href}
                className={buttonVariants({
                  variant: isActive ? "secondary" : "ghost",
                  size: "default",
                  className: cn("gap-1.5"),
                })}
              >
                <NavIcon />
                <p className="hidden lg:flex">{nav.name}</p>
              </Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        );
      })}
    </NavigationMenu>
  );
}
