import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { ITodo } from "../../types/todo.interface";
import { nanoid } from 'nanoid'
import styles from './todo.module.scss';
import TodoLayout from "./todo-layout/todo-layout";
import TodoContent from "./todo-content/todo-content";

export default function Todo() {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [inputValue, setInputValue] = useState<string>('');
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isStarted, setIsStarted] = useState<number | null>(null);
  const [inProgress, setInProgress] = useState<number | null>(null);
  const [finishedTasks, setFinishedTasks] = useState<number | null>(null);
  const [isOptionOpen, setIsOptionOpen] = useState<boolean>(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && inputValue.trim()) {
      setTodos((p) => [
        ...p,
        { id: nanoid(), text: inputValue.trim() }
      ]);
      setInputValue('');
    }
  };

  const handleMouseEnter = (id: string) => {
    setHoveredItem(id)
  }

  const handleMouseLeave = () => {
    setHoveredItem(null)
  }

  const handleDelete = (id: string) => {
    setTodos((p) => p.filter((todo) => todo.id !== id))
  }

  const handleOptionToggle = () => {
    setIsOptionOpen(p => !p)
  }
  return (
    <div className={styles.todo}>
      <TodoLayout>
        <TodoContent/>
      </TodoLayout>
    </div >
  )
};
