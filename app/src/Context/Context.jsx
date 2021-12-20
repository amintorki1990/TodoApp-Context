import { createContext, useState } from "react";
import { v4 as uuid } from "uuid";

export const todoContext = createContext();

const TodoProvider = ({ children }) => {
  const [theme, setTheme] = useState("lightMode");
  const [todos, setTodos] = useState([]);
  const addTodo = (inputValue) => {
    if (inputValue !== "") {
      const updatedTodo = [
        ...todos,
        { id: uuid(), title: inputValue, completed: false },
      ];
      setTodos(updatedTodo);
    }
  };
  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((item) => item.id !== todoId);
    setTodos(updatedTodos);
  };

  const handleCompleted = (id) => {
    console.log(todos.filter((item) => item.id === id)[0]);
    todos.filter((item) => item.id === id)[0].completed = !todos.filter(
      (item) => item.id === id
    )[0].completed;

    setTodos([...todos]);
  };

  return (
    <todoContext.Provider
      value={{
        todos,
        setTodos,
        addTodo,
        removeTodo,
        handleCompleted,
        theme,
        setTheme,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};
export default TodoProvider;
