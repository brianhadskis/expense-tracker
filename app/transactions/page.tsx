import { columns } from "@/app/transactions/columns";
import { authConfig } from "@/auth";
import { TransactionForm } from "@/components/TransactionForm";
import DataTable from "@/components/ui/data-table";
import { getServerSession } from "next-auth";
import * as z from "zod";
import { getTransactions } from "../actions/transactions";

export const transactionSchema = z.object({
  id: z.string(),
  amount: z.number().nonnegative(),
  date: z.date(),
  time: z.boolean(),
  description: z.string(),
  subcategory: z.object({
    id: z.string(),
    name: z.string(),
    category: z.object({
      id: z.string(),
      name: z.string(),
      group: z.object({
        id: z.string(),
        name: z.string(),
      }),
    }),
  }),
});

export default async function Page() {
  const session = await getServerSession(authConfig);
  const user = session?.user;
  if (!user) {
    // This should never be seen!
    return <div>Not logged in</div>;
  }
  const transactions = await getTransactions(user);
  return (
    <main className=" mt-[5rem]">
      <TransactionForm user={user} />
      <DataTable columns={columns} data={transactions} />
    </main>
  );
}
