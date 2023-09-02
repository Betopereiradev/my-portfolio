import styles from "./hero.module.css";

export default function Hero() {
  return (
    <div className={styles.container}>
      <p>Olá!👋</p>
      <p>Eu sou o</p>
      <h2 className={styles.nome}>
        Alberto Pereira<span className={styles.digitando}>|</span>{" "}
      </h2>

      <p className={styles.cargo}>Desenvolvedor Front-End</p>

      <img className={styles.flutuando} src="../../src/assets/seta-down.png" alt="" />
    </div>
  );
}
