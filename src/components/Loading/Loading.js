import styles from "./Loading.module.css";

export default function Loading({ loading }) {
  if (!loading) return null;

  return (
    <div
      className={styles.loading}
      role="status"
      aria-live="polite"
    >
      <div className={styles.garrafas} aria-hidden="true">
        {[1, 2, 3].map((numero) => (
          <svg
            key={numero}
            className={styles.garrafa}
            viewBox="0 0 54 116"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22 5h10v20c0 7 8 12 8 22v56c0 5-4 8-8 8H22c-5 0-8-3-8-8V47c0-10 8-15 8-22Z"
              className={styles.corpo}
            />
            <rect
              x="17"
              y="55"
              width="20"
              height="35"
              rx="3"
              className={styles.rotulo}
            />
            <path
              d="M22 5h10"
              className={styles.tampa}
            />
          </svg>
        ))}
      </div>

      <p className={styles.texto}>Carregando cervejas...</p>
    </div>
  );
}
