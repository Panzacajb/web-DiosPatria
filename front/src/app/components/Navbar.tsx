"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-teatro">
      <div className="container">

        {/* Brand teatral */}
        <Link href="/" className="navbar-brand">
          Dios, Patria y Familia
        </Link>

        {/* Botón mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link href="/elenco" className="nav-link">
                Elenco
              </Link>
            </li>

            <li className="nav-item">
              <Link href="/funciones" className="nav-link">
                Funciones
              </Link>
            </li>

          </ul>
        </div>

      </div>
    </nav>
  );
}
