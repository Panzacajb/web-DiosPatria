"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer-teatro text-center">

      {/* ✅ Ornamento superior (se mantiene) */}
      <div className="footer-divider"></div>

      {/* ✅ Información del espacio */}
      <p className="footer-text">
        Una producción teatral independiente desde Córdoba, Argentina.
      </p>

      <p className="footer-text">
        Espacio Cirulaxia — Pje Agustín Pérez 12
      </p>
       
        {/* ✅ Ornamento inferior */}
      <div className="footer-bottom-ornament">
        ✦ ✹ ✦
      </div>

      {/* ✅ Enlaces útiles */}
      <p className="footer-text">
        <Link href="/elenco" className="footer-link">Elenco</Link> ·{" "}
        <Link href="/funciones" className="footer-link">Funciones</Link> ·{" "}
        <a
          href="https://www.instagram.com/diospatriayfamiliaobra"
          target="_blank"
          rel="noopener noreferrer"
          className="footer-link"
        >
          Seguinos
        </a>
      </p>
      {/* ✅ Derechos */}
      <p className="footer-text" style={{ marginTop: "0.5rem", opacity: 0.8 }}>
        © {new Date().getFullYear()} — Todos los derechos reservados
      </p>

    </footer>
  );
}
