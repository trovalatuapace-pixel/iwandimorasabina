import { notFound } from "next/navigation";

/** Qualsiasi indirizzo che non corrisponde a una pagina mostra la 404 in stile del sito. */
export default function CatchAll() {
  notFound();
}
