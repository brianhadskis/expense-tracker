import { Bell, Settings, Sun, User } from "lucide-react";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white/75 backdrop-blur-lg transition-all text-teal-800 border-b border-slate-300">
      <div className="flex items-center justify-between mx-auto">
        <div className="pl-5 w-35 flex flex-col">
          <h1 className="text-lg font-extrabold lg:text-xl text-center">
            Expense
          </h1>
          <h1 className="text-lg font-extrabold lg:text-xl text-center">
            Tracker
          </h1>
        </div>

        <div className="hidden sm:block">
          <Navbar />
        </div>

        <div className="flex gap-6 justify-center items-center text-lg my-3 mx-5">
          <div className="w-[100px] flex justify-center items-center">
            <div>
              <Link
                href="/login"
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
          </div>
        </div>
      </div>
    </header>
  );
}
