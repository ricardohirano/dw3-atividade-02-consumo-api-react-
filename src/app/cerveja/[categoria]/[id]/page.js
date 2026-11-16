
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

import CervejaDetalhes from "../../../../components/CervejaDetalhes";
import { buscarCervejaPorId } from "../../../../services/cervejaService";
import Loading from "../../../../components/Loading/Loading";

export default function DetalhesCerveja() {
  const { id, categoria } = useParams();

  const [cerveja, setCerveja] = useState(null);
  const [carregando, setCarregando] = useState(true);
  const [erro, setErro] = useState("");

  useEffect(() => {
    async function carregarCerveja() {
      setCarregando(true);
      setErro("");

      try {
        const dados = await buscarCervejaPorId(id, categoria);
        setCerveja(dados);
      } catch (error) {
        console.error(error);
        setErro("Não foi possível carregar a cerveja.");
      } finally {
        setCarregando(false);
      }
    }

    if (id) {
      carregarCerveja();
    }
  }, [id, categoria]);

  if (carregando) {
    return <Loading loading={true} />;
  }

  if (erro) {
    return (
      <main>
        <p>{erro}</p>
        <Link href="/">Voltar ao catálogo</Link>
      </main>
    );
  }

  if (!cerveja || !cerveja.id) {
    return (
      <main>
        <p>Cerveja não encontrada.</p>
        <Link href="/">Voltar ao catálogo</Link>
      </main>
    );
  }

  return (
    <CervejaDetalhes
      cerveja={cerveja}
      categoria={categoria}
    />
  );
}
