import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/HomePage/Home";
import App from "../App";
import { ListTransactions } from "../pages/ListTransactionsPage/ListTransactions";
import { AddTransaction } from "../pages/AddTransactionPage/AddTransaction";

export const routeAddresses = {
  home: {
    to: "/",
    label: "Dashboard",
  },
  listTransactions: {
    to: "/list-transactions",
    label: "List Transactions",
  },
  addTransaction: {
    to: "/add-transaction",
    label: "New Transaction",
  },
};
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: routeAddresses.home.to, element: <Home /> },
      {
        path: routeAddresses.listTransactions.to,
        element: <ListTransactions />,
      },
      { path: routeAddresses.addTransaction.to, element: <AddTransaction /> },
    ],
  },
]);
