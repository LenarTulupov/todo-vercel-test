import FooterContent from "./footer-content/footer-content";
import styles from './pages-layout-footer.module.scss';

export default function PagesLayoutFooter() {
  return (
    <footer className={styles.footer}>
      <FooterContent />
    </footer>
  )
};
