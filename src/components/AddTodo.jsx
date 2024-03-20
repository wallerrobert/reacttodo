import { useState } from "react";

export function AddTodo({ settodolist, todolist }) {
  const [inputvalue, setinputvalue] = useState("");

  function addToList() {
    // settodolist((prevstate) => {
    //   const arr = prevstate;
    //   arr.push(inputvalue);
    //   return arr;
    // });
    const arr = [...todolist];
    arr.push(inputvalue);
    settodolist(arr);
    setinputvalue("");
    localStorage.setItem("list", JSON.stringify(arr))
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        addToList();
      }}
    >
      <input
        type="text"
        value={inputvalue}
        onChange={(event) => setinputvalue(event.target.value)}
      />
      <button type="submit">add</button>
    </form>
  );
}
