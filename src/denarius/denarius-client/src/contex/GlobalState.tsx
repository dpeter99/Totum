import React, { createContext, useReducer } from "react";
import AppReducer, { State, Transaction } from "./AppReducer";

// Initial state
const initialState: State = {
  transactions: [],
};

type Props = {
  children: React.ReactNode;
};

// Create context
type StateContext = State & {
  deleteTransaction: (id: number) => void;
  addTransaction: (transaction: Transaction) => void;
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
  function addTransaction(transaction: Transaction) {
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

// test
// { id: 1, text: "Flower", amount: -20 },
// { id: 2, text: "Salary", amount: 300 },
// { id: 3, text: "Book", amount: -10 },
// { id: 4, text: "Camera", amount: -150 },
