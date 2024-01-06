"use server";

import { User } from "next-auth";
import prisma from "@/lib/db";
import type { Subcategory, Transaction } from "@prisma/client";
import { transactionFormSchema } from "@/validators/transactions";
import type { TransactionFormSchemaType } from "@/validators/transactions";

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

export async function addTransaction(
  item: TransactionFormSchemaType,
  user: User
) {
  console.log(user);
  const transaction = await prisma.transaction.create({
    data: {
      date: item.date,
      amount: item.amount,
      description: item.description,
      subcategoryId: item.subcategoryId,
      userId: user.id,
    },
  });

  return transaction;
}
