import axios from "axios";

const API_URL = "https://api.sampleapis.com/beers";


export async function buscarCervejas(categoria = "ale") {
  const resposta = await axios.get(
    `${API_URL}/${categoria}`
  );

  const cervejasValidas = resposta.data.filter((cerveja) => {
    return (
      cerveja.id != null &&
      typeof cerveja.name === "string" &&
      cerveja.name.trim() !== "" &&
      !cerveja.name.includes("{{") &&
      typeof cerveja.price === "string" &&
      !cerveja.price.includes("{{")
    );
  });

  return cervejasValidas;
}


export async function buscarCervejaPorId(id, categoria = "ale") {
  const resposta = await axios.get(
    `${API_URL}/${categoria}/${id}`
  );

  return resposta.data;
}
