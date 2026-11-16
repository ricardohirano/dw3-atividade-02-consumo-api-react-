import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <p>BeerCatalog — Projeto acadêmico DW3</p>

        <p>
          Dados fornecidos pela API pública SampleAPIs
        </p>
      </div>
    </footer>
  );
}
