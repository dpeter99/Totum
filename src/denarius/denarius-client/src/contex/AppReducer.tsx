export type Transaction = {
  id: number;
  text: string;
  amount: number;
};

export interface State {
  transactions: Transaction[];
}

type Action =
  | { type: "DELETE_TRANSACTION"; payload: number }
  | { type: "ADD_TRANSACTION"; payload: Transaction };

export default (state: State, action: Action): State => {
  switch (action.type) {
    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction.id !== action.payload,
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };
    default:
      return state;
  }
};
