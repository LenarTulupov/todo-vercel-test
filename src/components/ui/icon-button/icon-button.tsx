import { ReactNode } from "react"
import styles from './icon-button.module.scss';

interface IIconButton {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function IconButton({ children, className, onClick }: IIconButton) {
  return (
    <button 
      className={`${styles['icon-button']} ${className || ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
};
