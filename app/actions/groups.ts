"use server";

import { User } from "next-auth";
import prisma from "@/lib/db";

export async function getGroups(user: User) {
  const groups = await prisma.group.findMany({
    where: {
      userId: user.id,
    },
  });

  return groups;
}
