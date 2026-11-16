
import { Suspense } from "react";
import CatalogoCervejas from "../components/CatalogoCervejas";

export default function Home() {
  return (
    <Suspense fallback={<p>Carregando catálogo...</p>}>
      <CatalogoCervejas />
    </Suspense>
  );
}
