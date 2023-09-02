import styles from "./sobre.module.css";

export default function Sobre() {
  return (
    <div className={styles.container}>
      <div>
        <h3>Conheça um pouco</h3>
        <h2>Sobre mim</h2>
      </div>

      <div>
        <p>
          Desde criança sempre fui apaixonado por tecnologia, desenvolvimento e
          design. Há cerca de 2 anos conheci o mundo do desenvolvimento
          Front-end onde me encontrei 100%, pois juntava tudo que eu sempre
          gostei e, desde então, venho me dedicando aos estudos para me tornar
          um profissional competente, desenvolvendo sites e projetos pessoais
          que resolvessem algum problema pessoal que eu tinha.
        </p>
      </div>
      
    </div>
  );
}
