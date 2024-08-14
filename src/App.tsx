import Form from "./components/Form";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <main className="container">
        <section className="item item1">
          <Form />
        </section>
        <section className="item item2">
          <h2>To-do List</h2>
          <Todos />
        </section>
      </main>
    </>
  );
}

export default App;
