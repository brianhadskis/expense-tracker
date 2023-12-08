import React from "react";

import { Settings } from "lucide-react";
import { Moon, Sun } from "lucide-react";
import Navbar from "./navbar";

export default function Header() {
  return (
    <header className="fixed w-full bg-slate-700 text-slate-100">
      <div className="relative flex flex-col">
        <div className="flex justify-between mr-8 ml-8">
          <h1 className="text-3xl font-bold m-4">Expense Tracker</h1>
          <div className="flex gap-4 justify-center items-center text-2xl">
            <Sun />
            <Settings />
          </div>
        </div>

        <div className="flex items-center justify-center absolute -bottom-1/3 left-1/2 -translate-x-1/2 bg-white rounded-full shadow-md pl-5 pr-5">
          <Navbar />
        </div>
      </div>
    </header>
  );
}
