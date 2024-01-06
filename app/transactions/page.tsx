import { columns } from "@/app/transactions/columns";
import { authConfig } from "@/auth";
import { TransactionForm } from "@/components/TransactionForm";
import DataTable from "@/components/ui/data-table";
import { getServerSession } from "next-auth";
import { getTransactions } from "../actions/transactions";

export default async function Page() {
  const session = await getServerSession(authConfig);
  const user = session?.user;
  if (!user) {
    // This should never be seen!
    return <div>Not logged in</div>;
  }

  //@ts-expect-error
  const transactions = await getTransactions(user);
  return (
    <main className=" mt-[5rem]">
      {/*@ts-expect-error*/}
      <TransactionForm user={user} />
      <DataTable columns={columns} data={transactions} />
    </main>
  );
}
