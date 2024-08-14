import { useState, useEffect } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
  const [lists, setLists] = useState<string[]>([]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const todos: string[] = JSON.parse(localStorage.getItem("todos") || "[]");
      setLists(todos);
    }
  }, []);
  return (
    <>
      <main className="container">
        <section className="item item1">
          <Form setLists={setLists} />
        </section>
        <section className="item item2">
          <h2>To-do List</h2>
          <Todos lists={lists} setLists={setLists} />
        </section>
      </main>
    </>
  );
}

export default App;
