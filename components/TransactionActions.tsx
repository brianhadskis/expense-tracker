import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { TransactionForm } from "./TransactionForm";
import { User } from "next-auth";

interface TransactionFormProps {
  user: User;
}

function TransactionActions(props: TransactionFormProps) {
  return (
    <section className="flex justify-between p-4">
      <p>Search goes here...</p>
      <Dialog>
        <DialogTrigger asChild>
          <Button variant="default">Add Transaction</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Add Transaction</DialogTitle>
            <DialogDescription>
              Fill out the form below to add a new transaction.
            </DialogDescription>
          </DialogHeader>
          <TransactionForm user={props.user} />
        </DialogContent>
      </Dialog>
    </section>
  );
}

export default TransactionActions;
