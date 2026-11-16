
"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loading from "./Loading/Loading";
import CategoriaFiltro from "./CategoriaFiltro";
import CervejaCard from "./CervejaCard";
import { buscarCervejas } from "../services/cervejaService";
import styles from "../app/page.module.css";

const categoriasValidas = ["ale", "stouts", "red-ale"];

export default function CatalogoCervejas() {
  const searchParams = useSearchParams();

  const categoriaURL = searchParams.get("categoria");

  const categoria = categoriasValidas.includes(categoriaURL)
    ? categoriaURL
    : "ale";

  const [cervejas, setCervejas] = useState([]);
  const [erro, setErro] = useState("");
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    let ativo = true;

    async function carregarCervejas() {
      setCarregando(true);
      setErro("");
      setCervejas([]);

      try {
        const dados = await buscarCervejas(categoria);

        const cervejasUnicas = Array.from(
        new Map(dados.map((cerveja) => [cerveja.id, cerveja])).values()
        );

        if (ativo) {
        setCervejas(cervejasUnicas);
        }
      } catch (error) {
        console.error(error);

        if (ativo) {
          setErro("Não foi possível carregar as cervejas.");
        }
      } finally {
        if (ativo) {
          setCarregando(false);
        }
      }
    }

    carregarCervejas();

    return () => {
      ativo = false;
    };
  }, [categoria]);

  function alterarCategoria(novaCategoria) {
    const url = new URL(window.location.href);
    url.searchParams.set("categoria", novaCategoria);

    window.history.pushState(null, "", url);
  }

  return (
    <main className={styles.container}>
      <h1 className={styles.titulo}>
        Catálogo de Cervejas Importadas
      </h1>

      <p className={styles.subtitulo}>
        Explore nossa seleção de cervejas.
      </p>

      <CategoriaFiltro
        categoria={categoria}
        onCategoriaChange={alterarCategoria}
      />

      <Loading loading={carregando} />

      {erro && <p>{erro}</p>}

      {!carregando && !erro && (
        <div className="catalogo">
          {cervejas.map((cerveja) => (
            <CervejaCard
              key={`${categoria}-${cerveja.id}`}
              cerveja={cerveja}
              categoria={categoria}
            />
          ))}
        </div>
      )}
    </main>
  );
}
