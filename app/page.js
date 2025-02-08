import ButtonAction from "./components/ButtonAction/ButtonAction";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <h3>No tienes ruletas</h3>
      <section>
        <ButtonAction>Agregar ruleta</ButtonAction>
      </section>
    </main>
  );
}
