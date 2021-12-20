import { useState } from "react";
import "./AddTodo.css";
import { todoContext } from "../../Context/Context";
import { useContext } from "react";
const AddTodo = () => {
  const { addTodo } = useContext(todoContext);
  const [inputValue, setInputValue] = useState("");
  const keyEnter = (e) => {
    if (e.keyCode === 13) {
      addTodo(inputValue);
      setInputValue("");
    }
  };
  return (
    <div>
      <span className="span">Todos Amin</span>{" "}
      <div className="root">
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyUp={(e) => keyEnter(e)}
        />
        <button
          onClick={(e) => {
            addTodo(inputValue);
            setInputValue("");
          }}
        >
          Add
        </button>
      </div>
    </div>
  );
};
export default AddTodo;
