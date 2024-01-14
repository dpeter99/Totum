import { Transaction } from "../models/Transaction";
import { TransactionService } from "denarius-client-api";

export interface Transactions {
  transactions: Transaction[];
}

type Action = { type: "POPULATE"; payload: Transactions };
//| { type: "ADD_TRANSACTION"; newTransaction: Transaction };

export const TransactionsReducer = (
  state: Transactions,
  action: Action,
): Transactions => {
  switch (action.type) {
    case "POPULATE":
      return {
        ...state,
        transactions: action.payload.transactions,
      };
    default:
      return state;
  }
};
