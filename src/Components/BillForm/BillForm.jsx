import { useState } from "react";
import Button from "../Button/Button";

export default function BillForm({ selectedFriend, onBillSplit }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoIsPaying, setWhoIsPaying] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bill || !paidByUser) return;

    onBillSplit(whoIsPaying === "user" ? paidByFriend : -paidByFriend);
  };
  return (
    <form action="#" className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFriend?.name}</h2>
      <label htmlFor="">💰Bill Value</label>
      <input
        type="text"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />
      <label htmlFor="">🧍‍♂️You'r Expense</label>
      <input
        type="text"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />
      <label htmlFor="">👨🏻‍🤝‍👨🏻{selectedFriend?.name}'s Expense</label>
      <input type="text" disabled value={paidByFriend} />
      <label htmlFor="">🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend?.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}
