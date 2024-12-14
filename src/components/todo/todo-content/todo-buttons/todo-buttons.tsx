import { todoButtons } from "../../../../constants/todo-buttons";
import IconButton from "../../../ui/icon-button/icon-button";
import { nanoid } from 'nanoid'
import styles from './todo-buttons.module.scss';

export default function TodoButtons() {
  return (
    <ul className={styles.list}>
      {todoButtons.map((button) => (
        <li key={nanoid()} className={styles.item}>
          <IconButton>
            {button.icon}
          </IconButton>
        </li>
      ))}
    </ul>
  )
};
