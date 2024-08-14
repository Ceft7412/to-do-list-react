import React from "react";

function Confirmation({ setModal, listToDelete, setLists }) {
  const handleDelete = () => {
    if (typeof window !== "undefined") {
      const todos: string[] = JSON.parse(localStorage.getItem("todos") || "[]");
      const updatedTodos = todos.filter((_, index) => index !== listToDelete);
      console.log("updatedTodos: ", updatedTodos);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      setLists(updatedTodos);
      setModal(false);
    }
  };
  return (
    <div className="background-modal">
      <div className="modal">
        <div className="modal__header">
          <div className="modal__exit" onClick={() => setModal(false)}>
            <span>X</span>
          </div>
        </div>
        <div className="modal__body">Are you sure you want to delete this to-do?</div>
        <div className="modal__footer">
          <button className="modal__action" type="button" onClick={() => setModal(false)}>
            Cancel
          </button>
          <button className="modal__action" onClick={handleDelete}>
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Confirmation;
