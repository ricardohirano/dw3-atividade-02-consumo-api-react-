
import Link from "next/link";
import styles from "./CervejaCard.module.css";
import CervejaImagem from "./CervejaImagem";

export default function CervejaCard({ cerveja, categoria }) {
  return (
    <Link
      href={`/cerveja/${categoria}/${cerveja.id}`}
      className={styles.card}
    >
      <CervejaImagem
        src={cerveja.image}
        alt={cerveja.name}
        className={styles.imagem}
      />

      <h2>{cerveja.name}</h2>

      <p>Preço: {cerveja.price}</p>

      <p>
        Avaliação: {cerveja.rating?.average?.toFixed(1) ?? "N/A"}
      </p>

      <span className={styles.detalhes}>
        Ver detalhes
      </span>
    </Link>
  );
}
