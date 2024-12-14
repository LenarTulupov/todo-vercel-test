import { ReactNode } from "react";
import styles from './button.module.scss';

interface IButton {
  children: ReactNode;
  variant?: 'default' | 'dropdown';
}

export default function Button({ children, variant = 'default' }: IButton) {
  return (
    <button className={`${styles.button} ${styles[variant]}`}>
      {children}
    </button>
  )
};
