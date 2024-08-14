import React, { useEffect, useState } from "react";

function Edit({ listToEdit, lists, setLists, setEditIndex }) {
  const [edited, setEdited] = useState<string>("");
  console.log(edited);
  const [todoToEdit, setTodoToEdit] = useState<string>("");

  useEffect(() => {
    const toEdit = lists[listToEdit];
    setTodoToEdit(toEdit);
  }, []);
  console.log("listToEdit: ", todoToEdit);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      const todos: string[] = JSON.parse(localStorage.getItem("todos") || "[]");
      todos[listToEdit] = todoToEdit;
      localStorage.setItem("todos", JSON.stringify(todos));
      setLists(todos);
      setEditIndex(null);
    }
  };
  return (
    <div className="edit-pop-up">
      <form onSubmit={handleSubmit}>
        <input
          className="edit-input"
          type="text"
          value={todoToEdit}
          onChange={(e) => setTodoToEdit(e.target.value)}
        />
      </form>
    </div>
  );
}

export default Edit;
