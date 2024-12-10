import { Outlet } from "react-router-dom";
import PagesLayoutHeader from "./pages-layout-header/pages-layout-header";
import PagesLayoutFooter from "./pages-layout-footer/pages-layout-footer";
import styles from './pages-layout.module.scss';

export default function PagesLayout() {
  return (
    <div className={styles.layout}>
      <PagesLayoutHeader />
      <main className={styles.main}>
        <Outlet />
      </main>
      <PagesLayoutFooter />
    </div>
  )
};
