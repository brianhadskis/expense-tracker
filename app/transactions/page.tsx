import { getTransactions } from "../actions/transactions";
import { authConfig } from "@/auth";
import DataTable from "@/components/ui/data-table";
import { columns } from "@/app/transactions/columns";
import { User, getServerSession } from "next-auth";

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
      <DataTable columns={columns} data={transactions} />
    </main>
  );
}
