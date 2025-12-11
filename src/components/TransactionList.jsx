import React, {useContext} from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const {transactions} = useContext(GlobalContext)
  function curr() {
    curr = balance - spent;
  }

  return (
    <>
      <h3>History</h3>
      <div className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
               
      </div>
    </>
  );
};
