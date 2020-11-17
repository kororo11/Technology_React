import React, { useReducer, useRef, useCallback } from "react";
import TodoTmplate from "./component/TodoTemplate";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";

function createBulTodos() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      return todos.concat(action.todo);
    case "REMOVE":
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default:
      return todos;
  }
}

const App = () => {
  const [todos, dispath] = useReducer(todoReducer, undefined, createBulTodos);

  const nextId = useRef(2501);

  const onInsert = useCallback((text) => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispath({ type: "INSERT", todo });
    nextId.current += 1;
  }, []);

  const onRemove = useCallback((id) => {
    dispath({ type: "REMOVE", id });
  }, []);

  const onToggle = useCallback((id) => {
    dispath({ type: "TOGGLE", id });
  }, []);

  return (
    <TodoTmplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTmplate>
  );
};

export default App;
