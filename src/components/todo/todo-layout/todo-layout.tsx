import { Outlet } from "react-router-dom";
import Title from "../../ui/title/title";
import TodoFooter from "../todo-footer/todo-footer";

export default function TodoLayout({ children }) {
  return (
    <>
      <header>
        <Title>Todos</Title>
      </header>
       { children }
      <TodoFooter itemsCount={todos.length} />
    </>
  )
};
