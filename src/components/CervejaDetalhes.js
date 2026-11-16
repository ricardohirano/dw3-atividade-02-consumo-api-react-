
import Link from "next/link";
import styles from "./CervejaDetalhes.module.css";
import CervejaImagem from "./CervejaImagem";

export default function CervejaDetalhes({ cerveja, categoria }) {
  return (
    <main className={styles.container}>
      <Link href={`/?categoria=${categoria}`} className={styles.voltar}>
        ← Voltar ao catálogo
      </Link>

      <div className={styles.detalhes}>
        <div className={styles.imagemContainer}>
          <CervejaImagem
            src={cerveja.image}
            alt={cerveja.name}
            className={styles.imagem}
          />
        </div>

        <div className={styles.informacoes}>
          <h1>{cerveja.name}</h1>

          <p>
            <strong>Preço:</strong> {cerveja.price}
          </p>

          <p>
            <strong>Avaliação média:</strong>{" "}
            {cerveja.rating?.average?.toFixed(1) ?? "N/A"}
          </p>

          <p>
            <strong>Número de avaliações:</strong>{" "}
            {cerveja.rating?.reviews ?? "N/A"}
          </p>

          <p>
            <strong>Identificador:</strong> {cerveja.id}
          </p>
        </div>
      </div>
    </main>
  );
}
