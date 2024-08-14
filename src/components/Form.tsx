import React, { useState } from "react";

type FormProps = {
  setLists: (lists: string[]) => void;
};
function Form({ setLists }: FormProps) {
  const [input, setInput] = useState<string>("");

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim() === "") {
      return null;
    }
    // To avoid error, checking if it's undefined is a must.
    if (typeof window !== "undefined") {
      const todos: string[] = JSON.parse(localStorage.getItem("todos") || "[]");
      localStorage.setItem("todos", JSON.stringify([...todos, input]));
      setLists([...todos, input]);
      setInput("");
    }
  };
  return (
    <form onSubmit={handleForm}>
      <input
        type="text"
        className="input-field"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What's your to-do?"
      />
      <button type="submit" className="button-add">
        Add To-Do
      </button>
    </form>
  );
}

export default Form;
