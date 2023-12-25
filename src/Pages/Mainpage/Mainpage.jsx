import { useState } from "react";
import AddFriend from "../../Components/AddFriend/AddFriend";
import BillForm from "../../Components/BillForm/BillForm";
import Button from "../../Components/Button/Button";
import Friendslist from "../../Components/Friendslist/Friendslist";
import "./Mainpage.css";

const initialFriends = [
  {
    id: 118836,
    name: "Talha",
    image: "/talha.jpg",
    balance: 0,
  },
  {
    id: 933372,
    name: "Sobuj",
    image: "/sobuj.jpg",
    balance: 200,
  },
  {
    id: 499476,
    name: "Sagor",
    image: "/sagor.jpg",
    balance: -150,
  },
];

export default function Mainpage() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);
  const [selectedFriend, setSelectedFriend] = useState(null);

  const handleSelection = (friend) => {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  };

  const handleNewFriend = (friend) => {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  };

  const toggleShowAddFriend = () => {
    setShowAddFriend((show) => !show);
  };

  const handleBillSplit = (value) => {
    console.log(value);
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend
      )
    );
    setSelectedFriend(null);
  };
  return (
    <>
      <h1>Eat and Split the bill!</h1>
      <div className="app">
        <div className="sidebar">
          <Friendslist
            friends={friends}
            onSelection={handleSelection}
            selectedFriend={selectedFriend}
          />

          {showAddFriend && <AddFriend addFriend={handleNewFriend} />}
          <Button onClick={toggleShowAddFriend}>
            {showAddFriend ? "Close" : "Add Friend"}
          </Button>
        </div>
        <div className="bill-form">
          {selectedFriend && (
            <BillForm
              selectedFriend={selectedFriend}
              onBillSplit={handleBillSplit}
              friends={friends}
            />
          )}
        </div>
      </div>
    </>
  );
}
