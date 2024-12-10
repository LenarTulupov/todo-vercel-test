import { navList } from "../../../constants/nav-list";
import styles from './navigation.module.scss';
import Container from "../container/container";
import ListItem from "../list-item/list-item";

export default function Navigation() {
  return (
    <div className={styles.nav}>
      <Container>
        <ul className={styles.nav__list}>
          {navList.map((item) => (
            <ListItem href={item.path} key={item.id}>
              {item.name.slice(0, 1).toUpperCase() + item.name.slice(1)}
            </ListItem>
          ))}
        </ul>
      </Container>
    </div>
  )
};
