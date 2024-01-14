import React, { createContext, useReducer } from "react";
import { Transactions, TransactionsReducer } from "./TransactionsReducer";
import { testTransactions } from "../pages/ListTransactionsPage/TestTransactions";
import { TransactionService } from "denarius-client-api";
import { Transaction } from "../models/Transaction";
import { Props } from "../util/types";

// Initial state
const initialState: Transactions = {
  transactions: await TransactionService.getApiV1Transaction({}).then(
    (transactionsFromDB) =>
      transactionsFromDB.map((t) => Transaction.toModel(t)),
  ),
};

// Create context
type TransactionsModel = Transactions & {
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: Transaction) => Promise<void>;
};
export const TransactionContext = createContext<TransactionsModel>(null!);

// Provider component
export const TransactionsProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(TransactionsReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    // dispatch({
    //   type: "DELETE_TRANSACTION",
    //   payload: id,
    // });
  }
  async function addTransaction(transaction: Transaction) {
    //TODO: Error checking
    try {
      await TransactionService.postApiV1Transaction({
        requestBody: Transaction.toDatabaseFormat(transaction),
      });

      const transactions = await TransactionService.getApiV1Transaction(
        {},
      ).then((transactionsFromDB) =>
        transactionsFromDB.map((t) => Transaction.toModel(t)),
      );

      dispatch({
        type: "POPULATE",
        payload: { transactions },
      });
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <TransactionContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
