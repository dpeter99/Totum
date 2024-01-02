import { FunctionComponent, useContext } from "react";
import { GlobalContext } from "../contex/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList: FunctionComponent = () => {
  // this is originally "context.transaction", but can be simplified like so
  const { transactions } = useContext(GlobalContext);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction
            key={transaction.id}
            transaction={transaction}
          ></Transaction>
        ))}
      </ul>
    </>
  );
};
