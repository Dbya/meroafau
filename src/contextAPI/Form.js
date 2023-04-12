import React, { useContext, useState, useEffect } from "react";
import { ContextList } from "./ContextList";

const Form = () => {
  const { addUser, removeAll, editingItem, edit } = useContext(ContextList);
  const [title, setTitle] = useState("");

  const handleChange = (e) => {
    setTitle(e.target.value);
    console.log(title);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // addUser(title);
    // console.log(title);
    // setTitle("")
    if (edit === null) {
      addUser(title);
      // console.log(title);
      setTitle("");
    } else {
      editingItem(title, edit.id);
    }
  };
  useEffect(() => {
    if (edit !== null) {
      setTitle(edit.title);
      console.log(edit);
    } else {
      setTitle("");
    }
  }, [edit]);
  return (
    <div>
      <form onSubmit={handleSubmit} action="">
        <input
          onChange={handleChange}
          value={title ?? ""}
          type="text"
          required
        />
        <button type="submit">{!edit ? "Add Task" : "Update"}</button>
        <br />
        <button onClick={removeAll}>clearTask</button>
      </form>
    </div>
  );
};

export default Form;
