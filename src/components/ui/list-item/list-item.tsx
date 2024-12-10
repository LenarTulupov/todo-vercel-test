import { ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from './list-item.module.scss';

interface IListItem {
  children: ReactNode;
  href: string;
}

export default function ListItem({ children, href }: IListItem) {
  return (
    <li className={styles.item}>
      <Link to={href}>
        {children}
      </Link>
    </li>
  )
};
