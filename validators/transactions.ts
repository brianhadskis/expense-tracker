import { z } from "zod";
import type { Group, Category, Subcategory } from "@prisma/client";

export const transactionFormSchema = z.object({
  date: z.coerce.date(),
  amount: z.coerce.number().nonnegative(),
  description: z.string(),
  groupId: z.string(),
  categoryId: z.string(),
  subcategoryId: z.string(),
});
