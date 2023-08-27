import "./styles.css";
import { CreateToDo, ToDoList, FilterToDo } from "./components/ToDo";
import { useState, useRef, useEffect } from "react";
import { Header } from "./layouts/Header";
import CookieBanner from "./layouts/CookieBanner";

export default function App() {
  const [todos, setTodos] = useState([
    { id: "1", title: "testToDo", date: "01.01.1000" },
    { id: "2", title: "testToDo", date: "01.01.1000" }
  ]);
  const ref = useRef()
  useEffect(() => {
document.title="My tasks"
  }, [])
  // const [filteredTodos, setFilteredTodos] = useState([]);
  return (
    <div className="App">
      <Header todos={todos} setTodos={setTodos} />
      <ToDoList />
      <CookieBanner/>
      {/* <FilterToDo todos={todos} setFilteredTodos={setFilteredTodos} /> */}
    </div>
  );
}
