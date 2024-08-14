import React, { useEffect, useState } from "react";
import Confirmation from "./Modal/Confirmation";
import Edit from "./Modal/Edit";

function Todos({ lists, setLists }) {
  const [fetching, setFetching] = useState<boolean>(true);
  const [list, setList] = useState<number>();

  const [deleteIndex, setDeleteIndex] = useState<number | null>(null);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleDeleteClick = (index: number) => {
    setList(index);
    setDeleteIndex(index);
  };

  const handleEditClick = (index: number) => {
    setEditIndex(index);
    setList(index);
  };

  if (lists.length === 0) {
    return <div className="nothing">No to-do list yet.</div>;
  }
  return (
    <>
      {lists.map((list, index) => (
        <div key={index} className="todo-list">
          {editIndex === index && (
            <Edit
              listToEdit={index}
              lists={lists}
              setLists={setLists}
              setEditIndex={setEditIndex}
            />
          )}
          <span className="todo-list__title">{list}</span>
          <div className="todo-list__actions">
            <button onClick={() => handleEditClick(index)}>Edit</button>

            <button type="button" onClick={() => handleDeleteClick(index)}>
              Delete
            </button>
            {deleteIndex === index && (
              <Confirmation
                setModal={setDeleteIndex}
                listToDelete={list}
                setLists={setLists}
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Todos;
