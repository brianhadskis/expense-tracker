"use server";

import { User } from "next-auth";
import { Category } from "@prisma/client";
import prisma from "@/lib/db";

export async function getSubCategories(user: User) {
  const subcategories = await prisma.subcategory.findMany({
    where: {
      userId: user.id,
    },
  });

  return subcategories;
}

export async function getSubCategoriesByCategory(category: Category) {
  const categories = await prisma.subcategory.findMany({
    where: {
      categoryId: category.id,
    },
  });

  return categories;
}
