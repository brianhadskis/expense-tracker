"use client";

import { ColumnDef } from "@tanstack/react-table";
import type { Transaction } from "@prisma/client";

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
  },
  {
    header: "Date",
    accessorKey: "date",
  },
  {
    header: "Time",
    accessorKey: "time",
  },
];
