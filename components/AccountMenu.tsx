"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { Button, buttonVariants } from "./ui/button";
import { User } from "next-auth";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { LogOut, Moon, Settings, Sun } from "lucide-react";
import UserAvatar from "./UserAvatar";
import { signOut } from "next-auth/react";
import { useTheme } from "next-themes";
import { Label } from "./ui/label";
import { Switch } from "./ui/switch";

export default function AccountMenu({ user }: { user: User }) {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // close dropdown when user clicks outside of it
    function handleClickOutside(event: MouseEvent) {
      if (!event.target) return;
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);

  function handleLogout() {
    signOut();
    setOpen(false);
  }

  return (
    <DropdownMenu open={open}>
      <DropdownMenuTrigger asChild>
        <Button onClick={() => setOpen(!open)} variant={"ghost"}>
          <UserAvatar user={user} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent ref={ref}>
        <DropdownMenuItem>
          {theme === "dark" ? <Moon /> : <Sun />}
          <Label htmlFor="dark-mode">
            Dark Mode
            <Switch
              id="dark-mode"
              checked={theme === "dark"}
              onCheckedChange={(checked) => {
                setTheme(checked ? "dark" : "light");
              }}
            />
          </Label>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setOpen(false)}>
          <Settings />
          <p>Settings</p>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLogout()}>
          <LogOut />
          <p>Log out</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
