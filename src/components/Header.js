import Link from "next/link";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image
            src="/beer-map-logo.png"
            alt="Logo Beer Map"
            width={48}
            height={48}
            className={styles.logoImagem}
          />

          <span>Beer Map</span>
        </Link>

        <p className={styles.descricao}>
          Explore o universo das cervejas.
        </p>
      </div>
    </header>
  );
}
