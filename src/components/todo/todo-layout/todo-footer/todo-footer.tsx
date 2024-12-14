import Button from '../../ui/button/button';
import styles from './todo-footer.module.scss';

interface ITodoFooter {
  itemsCount: number;
}

export default function TodoFooter({ itemsCount }: ITodoFooter) {
  return (
    <footer className={styles.footer}>
      <div>
        {itemsCount} items left
      </div>
      <div className={styles['footer__col-center']}>
        <Button>All</Button>
        <Button>Active</Button>
        <Button>Completed</Button>
      </div>
      <Button>Clear completed</Button>
    </footer>
  )
};
