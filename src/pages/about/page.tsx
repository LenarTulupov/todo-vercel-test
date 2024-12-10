import Container from "../../components/ui/container/container"
import Title from "../../components/ui/title/title"
import styles from './page.module.scss';

export default function AboutPage() {
  return (
    <div>
      <Container>
        <Title className={styles.title}>
          Здесь я сделал тестовое задание
        </Title>
      </Container>
    </div>
  )
};
