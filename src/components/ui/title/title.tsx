import { ReactNode } from 'react';
import styles from './title.module.scss';

interface ITitle {
  children: ReactNode;
  className?: string;
}

export default function Title({ children, className }: ITitle) {
  return (
    <h1 className={`${styles.title} ${className || ''}`}>
        { children }
    </h1>
  )
};
