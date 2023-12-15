import { Home, BarChart, Table, Mail, Goal, Scale, LogIn } from "lucide-react";

export const NAVIGATION = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: Home,
    loginRequired: true,
  },
  {
    name: "Reports",
    href: "/reports",
    icon: BarChart,
    loginRequired: true,
  },
  {
    name: "Transactions",
    href: "/transactions",
    icon: Table,
    loginRequired: true,
  },
  {
    name: "Budgets",
    href: "/budgets",
    icon: Scale,
    loginRequired: true,
  },
  {
    name: "Bills",
    href: "/bills",
    icon: Mail,
    loginRequired: true,
  },
  {
    name: "Goals",
    href: "/goals",
    icon: Goal,
    loginRequired: true,
  },
  {
    name: "Login",
    href: "/login",
    icon: LogIn,
  },
];
