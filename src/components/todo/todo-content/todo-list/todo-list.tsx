import { ReactNode } from "react";
import styles from './todo-list.module.scss';

interface ITodoList {
  children: ReactNode;
  full?: boolean;
}

export default function TodoList({ children, full = false }: ITodoList) {
  return (
    <ul className={`${styles.list} ${full ? styles.full : ''}`}>
      {children}
    </ul>
  )
};
