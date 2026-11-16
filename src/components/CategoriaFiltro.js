import styles from "./CategoriaFiltro.module.css";

export default function CategoriaFiltro({
  categoria,
  onCategoriaChange
}) {
  const categorias = [
    { id: "ale", nome: "Ale" },
    { id: "stouts", nome: "Stout" },
    { id: "red-ale", nome: "Red Ale" }
  ];

  return (
    <div className={styles.filtros}>
      {categorias.map((item) => (
        <button
          key={item.id}
          type="button"
          className={
            categoria === item.id
              ? styles.ativo
              : styles.botao
          }
          onClick={() => onCategoriaChange(item.id)}
        >
          {item.nome}
        </button>
      ))}
    </div>
  );
}
