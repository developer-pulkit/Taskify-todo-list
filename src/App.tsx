import React, { useState } from "react";
import "./App.css";
import InputFields from "./components/InputFields";
import TodoList from "./components/TodoList";
import { Todo } from "./model";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  console.log(todos);
  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="App">
      <span className="heading"> T-a-s-k-i-f-y</span>
      <InputFields todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {/* TodoList */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
