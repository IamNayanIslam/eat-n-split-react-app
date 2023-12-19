import { useState } from "react";
import Button from "../Button/Button";

export default function AddFriend({ addFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !image)
      return alert("Please write friend name and image URL!");
    const newFriend = {
      id: crypto.randomUUID(),
      name,
      image,
      balance: 0,
    };

    addFriend(newFriend);

    console.log(newFriend);
    setName("");
    setImage("");
  };

  return (
    <>
      <form action="#" className="form-add-friend">
        <label htmlFor="">👨🏻‍🤝‍👨🏻Friend Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="">🌆Image URL</label>
        <input
          type="text"
          placeholder="/name.jpg"
          value={image}
          onChange={(e) => setImage(e.target.value.toLowerCase())}
        />
        <Button onClick={handleSubmit}>Add</Button>
      </form>
    </>
  );
}
