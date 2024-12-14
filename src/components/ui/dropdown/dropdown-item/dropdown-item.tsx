import { ReactNode } from 'react';
import styles from './dropdown-item.module.scss';

interface IDropdownItem {
  children: ReactNode;
}

export default function DropdownItem({ children }: IDropdownItem) {
  return (
    <li className={styles.item}>
      {children}
    </li>
  )
};
