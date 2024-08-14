import React, { useState } from "react";

function Form() {
  const [input, setInput] = useState<string>("");

  const handleForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // To avoid error, checking if it's undefined is a must.
    if (typeof window !== "undefined") {
      const todos: string[] = JSON.parse(localStorage.getItem("todos") || "[]");
      localStorage.setItem("todos", JSON.stringify([...todos, input]));
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
      />
      <button type="submit" className="button-add">
        Add To-Do
      </button>
    </form>
  );
}

export default Form;
