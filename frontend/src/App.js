import "./App.css";
import AddTodo from "./components/AddTodo";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <div className="font-bold">Project To Learn Redux Toolkit</div>
      <AddTodo />
      <Todos />
      
    </>
  );
}

export default App;
