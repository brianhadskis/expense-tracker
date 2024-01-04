"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { Transaction } from "@prisma/client";
import { format } from "date-fns";

export const columns: ColumnDef<Transaction>[] = [
  {
    header: "Group",
    accessorKey: "subcategory.category.group.name",
  },
  {
    header: "Category",
    accessorKey: "subcategory.category.name",
  },
  {
    header: "Subcategory",
    accessorKey: "subcategory.name",
  },
  {
    header: "Description",
    accessorKey: "description",
  },
  {
    header: "Amount",
    accessorKey: "amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div>{formatted}</div>;
    },
  },
  {
    header: "Date",
    accessorKey: "date",
    cell: ({ row }) => {
      const date = row.getValue("date") as Date;
      const formatted = format(date, "MMMM d, yyyy");

      return <div>{formatted}</div>;
    },
  },
];
