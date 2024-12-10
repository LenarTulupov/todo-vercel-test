import Navigation from "../../../components/ui/navigation/navigation";
import styles from './pages-layout-header.module.scss';

export default function PagesLayoutHeader() {
  return (
    <header className={styles.header}>
      <Navigation />
    </header>
  )
};
