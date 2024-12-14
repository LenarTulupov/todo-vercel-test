import { ReactNode } from 'react';
import styles from './title.module.scss';

interface ITitle {
  children: ReactNode;
  className?: string;
  center?: boolean;
}

export default function Title({
  children,
  className,
  center = false }: ITitle) {
  return (
    <h1
      className={`
        ${styles.title} 
        ${className || ''}
        ${center ? styles.center : ''}
    `}>
      {children}
    </h1>
  )
};
