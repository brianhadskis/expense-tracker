"use server";

import { User } from "next-auth";
import { Group } from "@prisma/client";
import prisma from "@/lib/db";

export async function getCategories(user: User) {
  const categories = await prisma.category.findMany({
    where: {
      userId: user.id,
    },
  });

  return categories;
}

export async function getCategoriesByGroupId(groupId: string) {
  const categories = await prisma.category.findMany({
    where: {
      groupId,
    },
  });

  return categories;
}
