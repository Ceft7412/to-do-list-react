import React, { useEffect, useState } from "react";

function Todos() {
  const [fetching, setFetching] = useState<boolean>(true);
  const [lists, setLists] = useState<string[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const todos: string[] = JSON.parse(localStorage.getItem("todos") || "[]");
      setLists(todos);
      setFetching(false);
    }
  }, []);
  if (fetching) {
    return;
  }

  return (
    <>
      {lists.map((list, index) => (
        <div key={index}>{list}</div>
      ))}
    </>
  );
}

export default Todos;
