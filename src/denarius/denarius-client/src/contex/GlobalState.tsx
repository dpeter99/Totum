import React, { createContext, useReducer } from "react";
import AppReducer, { State } from "./AppReducer";
import { testTransactions } from "../pages/ListTransactionsPage/TestTransactions";
import { TransactionService } from "denarius-client-api";
import { TransactionModel } from "../models/TransactionModel";

const today = new Date();

// Initial state
const initialState: State = {
  transactions: await TransactionService.getApiV1Transaction({
    //orderby: "date desc",
    // filter: `date gt 2024-01-01`,
    // filter: `date gt ${new Date(
    //   today.setMonth(today.getMonth() - 2),
    // ).toLocaleDateString("en-UK", {
    //   year: "numeric",
    //   month: "numeric",
    //   day: "numeric",
    // })}`,
  }).then((transactionsFromDB) =>
    transactionsFromDB.map((t) => TransactionModel.toModel(t)),
  ),
};

type Props = {
  children: React.ReactNode;
};

// Create context
type StateContext = State & {
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: TransactionModel) => void;
};
export const GlobalContext = createContext<StateContext>(null!);

// Provider component
export const GlobalProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(id: number) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction: TransactionModel) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
