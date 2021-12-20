import { useContext } from "react";
import { todoContext } from "../../Context/Context";
import { DeleteOutlined, CheckOutlined } from "@ant-design/icons";
import "./Todos.css";
const Todos = () => {
  const { todos, removeTodo, handleCompleted } = useContext(todoContext);

  if (!todos.length) return <div className="rootTodo">List is Empty !</div>;
  return (
    <div className="todos">
      {todos.map((item) => (
        <div
          key={item.id}
          style={{ textDecoration: item.completed ? "line-through" : "" }}
        >
          {item.title}
          <span>
            <span className={item.completed ? "line-through" : ""}>
              <CheckOutlined
                className="check"
                onClick={() => handleCompleted(item.id)}
              />
            </span>
            <span className="deleted">
              <DeleteOutlined onClick={() => removeTodo(item.id)} />
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
export default Todos;
