import styles from './todo-item-text.module.scss';

interface ITodoItemText {
  text: string;
}

export default function TodoItemText({ text }: ITodoItemText) {
  return (
    <div className={styles['todo__item-text']}>
      <input type="radio" className={styles.input} />
      <span>{text}</span>
    </div>
  )
};
