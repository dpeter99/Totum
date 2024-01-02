import { FormEvent, FunctionComponent, useContext, useState } from "react";
import { GlobalContext } from "../contex/GlobalState";
import { Transaction } from "../contex/AppReducer";

export const AddTransaction: FunctionComponent = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState<number | null>(null);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isAmountValid = amount !== null;

    if (!isAmountValid) {
      return;
    }

    const newTransaction: Transaction = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: +amount!,
    };

    addTransaction(newTransaction);
  };

  const toNumberOptional = (value: string) => {
    if (Number.parseInt(value)) {
      return Number(value);
    }

    return null;
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount ?? ""}
            onChange={(e) => setAmount(toNumberOptional(e.target.value))}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
