export default function ObraHero() {
  return (
    <section className="container py-5 text-center">

      {/* Título */}
      <h1 className="titulo-obra">
        Dios, Patria y Familia
      </h1>

      <p className="lead subtitulo">
        Una obra intensa que cuestiona los pilares de nuestra identidad.
      </p>

      {/* Imagen del flyer */}
     <img
        src="/obra.jpg"
        alt="Flyer de la obra Dios, Patria y Familia"
        className="flyer rounded shadow my-4"
      />


      {/* Caja de información */}
      <div className="info-box mx-auto" style={{ maxWidth: "600px" }}>
        <p><strong>Fechas de estreno:</strong> Sábado 13 y Domingo 14 de Diciembre</p>
        <p><strong>Hora:</strong> 20hs</p>

        <p>
          <strong>Lugar:</strong> Pje Agustín Pérez 12 – Espacio Circulaxia
        </p>

        {/* Link a Google Maps */}
        <a
          href="https://www.google.com/maps/place/Espacio+Cirulaxia/@-31.4054237,-64.1777104,15z/data=!4m6!3m5!1s0x9432987154f59d95:0xf5a8d5ad6728aa5a!8m2!3d-31.4054237!4d-64.1777104!16s%2Fg%2F1233140s3?entry=tts"
          target="_blank"
          rel="noopener noreferrer"
          className="d-block mt-2"
        >
          Ver ubicación en Google Maps
        </a>

      </div>

      {/* Botón de WhatsApp */}
      <a
        href="https://wa.me/5492995533683?text=Hola%2C%20quiero%20reservar%20entradas%20para%20Dios%2C%20Patria%20y%20Familia"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-success btn-lg mt-4"
      >
        Reservar por WhatsApp
      </a>
    </section>
  );
}
