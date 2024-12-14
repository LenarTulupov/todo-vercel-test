import { ReactNode } from "react"
import styles from './dropdown-list.module.scss';

interface IDropdownList {
  children: ReactNode;
}

export default function DropdownList({ children }: IDropdownList) {
  return (
    <ul className={styles.list}>
      {children}
    </ul>
  )
};
