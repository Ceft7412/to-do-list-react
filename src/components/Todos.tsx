import React, { useEffect, useState } from "react";
import Confirmation from "./Modal/Confirmation";
import Edit from "./Modal/Edit";

function Todos({ lists, setLists }) {
  const [fetching, setFetching] = useState<boolean>(true);
  const [list, setList] = useState<number>();

  const [modal, setModal] = useState<boolean>(false);
  const [editModal, setEditModal] = useState<boolean>(false);
  console.log("modal: ", modal);

  const handleDeleteClick = (index: number) => {
    setList(index);
    setModal(true);
  };

  const handleEditClick = (index: number) => {
    setEditModal(true);
    setList(index);
  };
  return (
    <>
      {lists.map((list, index) => (
        <div key={index} className="todo-list">
          {editModal && <Edit listToEdit={list} lists={lists} />}
          <span className="todo-list__title">{list}</span>
          <div className="todo-list__actions">
            <button onClick={() => handleEditClick(index)}>Edit</button>

            <button type="button" onClick={() => handleDeleteClick(index)}>
              Delete
            </button>
            {modal && (
              <Confirmation setModal={setModal} listToDelete={list} setLists={setLists} />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Todos;
