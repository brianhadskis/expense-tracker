"use client";

import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Navbar() {
  return (
    <NavigationMenu className="flex gap-5 h-[3rem] list-none">
      <NavigationMenuItem className="flex justify-center h-full items-center">
        <NavigationMenuLink
          className="h-2/3 rounded-full text-gray-600 hover:text-gray-800 hover:bg-slate-100 p-3"
          asChild
        >
          <Link href="/dashboard" className="flex justify-center items-center">
            Dashboard
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="flex justify-center h-full items-center">
        <NavigationMenuLink
          className="h-2/3 rounded-full text-gray-600 hover:text-gray-800 hover:bg-slate-100 p-3"
          asChild
        >
          <Link href="/reports" className="flex justify-center items-center">
            Reports
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="flex justify-center h-full items-center">
        <NavigationMenuLink
          className="h-2/3 rounded-full text-gray-600 hover:text-gray-800 hover:bg-slate-100 p-3"
          asChild
        >
          <Link
            href="/transactions"
            className="flex justify-center items-center"
          >
            Transactions
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="flex justify-center h-full items-center">
        <NavigationMenuLink
          className="h-2/3 rounded-full text-gray-600 hover:text-gray-800 hover:bg-slate-100 p-3"
          asChild
        >
          <Link href="/bills" className="flex justify-center items-center">
            Bills
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="flex justify-center h-full items-center">
        <NavigationMenuLink
          className="h-2/3 rounded-full text-gray-600 hover:text-gray-800 hover:bg-slate-100 p-3"
          asChild
        >
          <Link href="/budgets" className="flex justify-center items-center">
            Budgets
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem className="flex justify-center h-full items-center">
        <NavigationMenuLink
          className="h-2/3 rounded-full text-gray-600 hover:text-gray-800 hover:bg-slate-100 p-3"
          asChild
        >
          <Link href="/goals" className="flex justify-center items-center">
            Goals
          </Link>
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenu>
  );
}
