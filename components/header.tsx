import { Bell, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Navbar from "./navbar";
import { getServerSession } from "next-auth";
import AccountMenu from "./AccountMenu";

export default async function Header() {
  const session = await getServerSession();
  const user = session?.user;
  return (
    <header className="fixed top-0 w-full bg-background/75 backdrop-blur-lg transition-all text-foreground border-b border-border">
      <div className="flex items-center justify-between mx-auto">
        <div className="pl-5 w-35 flex flex-col">
          <h1 className="text-lg text-primary font-extrabold lg:text-xl text-center">
            Expense
          </h1>
          <h1 className="text-lg text-primary font-extrabold lg:text-xl text-center">
            Tracker
          </h1>
        </div>

        <div className="hidden sm:block">
          <Navbar />
        </div>

        <div className="flex gap-6 justify-center items-center text-lg my-3 mx-5">
          <div className="w-[100px] flex justify-center items-center">
            {!user && (
              <div>
                <Link
                  href="/api/auth/signin"
                  className={cn(
                    buttonVariants({
                      variant: "default",
                      size: "sm",
                    })
                  )}
                >
                  <p>Log in</p>
                </Link>
              </div>
            )}
            {user && <AccountMenu user={user} />}
          </div>
        </div>
      </div>
    </header>
  );
}
