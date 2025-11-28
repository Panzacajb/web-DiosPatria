import Link from "next/link";

export default function ObraHero() {
  return (
    <section className="container py-5 text-center">

      {/* ✅ Título principal (centrado) */}
      <h1 className="titulo-obra">Dios, Patria y Familia</h1>

      {/* ✅ Lead descriptivo (centrado para sinopsis principal) */}
      <p className="lead subtitulo lead-centrado">
        El Domingo al mediodía, en la parrilla se escucha el chisporroteo del carbón y los primeros vermú con soda empiezan a desfilar. El asado como excusa reúne a todos alrededor de la mesa, cada familia es un mundo y esta no es la excepción.
        Sean ustedes testigos de este encuentro donde se expondrán los valores y las miserias de una realidad que nos atraviesa como argentinos.
        Bienvenidos a nuestra casa, pasen y pónganse cómodos que en 5’ sale.

      </p>

      <img
        src="/obra.jpg"
        alt="Flyer de la obra Dios, Patria y Familia"
        className="flyer"
      />

      {/* ✅ Cuadro de información centrado (clase `.info-box--center`) */}
      <div className="info-box mx-auto info-box--center" style={{ maxWidth: "600px" }}>
        <p><strong>Fechas de estreno:</strong> Sábado 13 y Domingo 14 de Diciembre</p>
        <p><strong>Hora:</strong> 20:00hs</p>
        <p><strong>Lugar:</strong> Pje Agustín Pérez 12 – Espacio Cirulaxia</p>

        <a
          href="https://www.google.com/maps/place/Espacio+Cirulaxia+teatro/@-31.4054237,-64.1777104,15z/data=!4m6!3m5!1s0x9432987154f59d95:0xf5a8d5ad6728aa5a!8m2!3d-31.4054511!4d-64.1776324!16s%2Fg%2F1233140s3?entry=ttu&g_ep=EgoyMDI1MTEyMy4xIKXMDSoASAFQAw%3D%3D"
          target="_blank"
          rel="noopener noreferrer"
          className="d-block mt-2"
        >
          Ver ubicación en Google Maps
        </a>
      </div>

        {/* ✅ Botón de compra: ahora enlaza a la página interna `/funciones` (navegación interna) */}
        <Link href="/funciones" className="btn btn-whatsapp mt-4 btn-center">
          Comprar entradas
        </Link>

    </section>
  );
}

