import React, { useEffect, useState } from "react";

function Edit({ listToEdit, lists }) {
  console.log("lists: ", lists);
  const [todoToEdit, setTodoToEdit] = useState<string>("");
  console.log("listToEdit: ", listToEdit);

  useEffect(() => {
    const toEdit = lists[listToEdit];
    setTodoToEdit(toEdit);
  }, []);

  return <div>{todoToEdit}</div>;
}

export default Edit;
