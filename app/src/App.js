import logo from "./logo.svg";
import "./App.css";
import TodoProvider from "./Context/Context";
import AddTodo from "./Components/AddTodo/AddTodo";
import Todos from "./Components/Todos/Todos";
function App() {
  return (
    <div className="App">
      <TodoProvider>
        <AddTodo />
        <Todos />
      </TodoProvider>
    </div>
  );
}

export default App;
