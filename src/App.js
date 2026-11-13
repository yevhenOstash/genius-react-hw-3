import { useState } from "react";
import "./App.css";
import ChildComponent from "./ChildComponent";

function App() {
  const onChangeInput = (e) => {
    const inputValue = e.target.value;
    setInput(inputValue);
  };

  const onKeyEntered = (e) => {
    if (e.key === "Enter") onClickListAdd();
  };

  const [input, setInput] = useState("");
  const [list] = useState([]);

  const [todo, setTodo] = useState([
    { id: 1, name: "firstTodo" },
    { id: 2, name: "secondTodo" },
    { id: 3, name: "thirdTodo" },
    { id: 4, name: "fourthTodo" },
    { id: 5, name: "fifthTodo" },
  ]);

  const onDelete = (idd) => {
    setTodo(todo.filter((element) => element.id !== idd));
    setId(id - 1);
  };

  const [id, setId] = useState(5);

  const onClickListAdd = () => {
    if (!input.trim()) return;
    setTodo([...todo, { id: id, name: input }]);
    setId(id + 1);
    setInput("");
  };

  return (
    <div>
      <input
        onKeyDown={onKeyEntered}
        placeholder="new task"
        onChange={onChangeInput}
        type="text"
        value={input}
      />
      <h1>{id}</h1>
      <ul>
        {list.map((e, i) => (
          <li key={i}>{e}</li>
        ))}
      </ul>
      <ChildComponent onDelete={onDelete} todo={todo} />
      <button onClick={onClickListAdd}>Add TO DO</button>
    </div>
  );
}

export default App;
