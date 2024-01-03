import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/HomePage/Home";
import App from "../App";
import { ListTransactions } from "../pages/ListTransactionsPage/ListTransactions";
import { AddTransaction } from "../pages/AddTransactionPage/AddTransaction";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/list-transactions", element: <ListTransactions /> },
      { path: "/add-transaction", element: <AddTransaction /> },
    ],
  },
]);
