"use server";

import { User } from "next-auth";
import prisma from "@/lib/db";

export async function getTransactions(user: User) {
  const transactions = await prisma.transaction.findMany({
    where: {
      userId: user.id,
    },
    include: {
      subcategory: {
        include: {
          category: {
            include: {
              group: true,
            },
          },
        },
      },
    },
  });

  return transactions;
}
