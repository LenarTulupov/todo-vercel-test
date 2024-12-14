import { ReactNode } from "react";
import styles from './todo-item.module.scss';

interface ITodoItem {
  children: ReactNode;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  className?: string;
}

export default function TodoItem({ 
  children, 
  onMouseEnter, 
  onMouseLeave,
  className }: ITodoItem) {
  return (
    <button 
      className={`${styles.item} ${className || ''}`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </button>
  )
};
