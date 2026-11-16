
"use client";

import { useState } from "react";

const PLACEHOLDER = "/cerveja-placeholder.svg";

export default function CervejaImagem({
  src,
  alt,
  className
}) {
  const [imagemComErro, setImagemComErro] = useState(false);

  const imagemAtual =
    !src || imagemComErro ? PLACEHOLDER : src;

  return (
    <img
      key={src}
      src={imagemAtual}
      alt={alt || "Imagem de cerveja"}
      className={className}
      onError={() => setImagemComErro(true)}
    />
  );
}
