export default function ObraHero() {
  return (
    <section className="container py-5 text-center">

      <h1 className="titulo-obra">Dios, Patria y Familia</h1>

      <p className="lead subtitulo">
        En un domingo cualquiera bajo el cielo Cordobés...
      </p>

      <img
        src="/obra.jpg"
        alt="Flyer de la obra Dios, Patria y Familia"
        className="flyer"
      />

      <div className="info-box mx-auto" style={{ maxWidth: "600px" }}>
        <p><strong>Fechas de estreno:</strong> Sábado 13 y Domingo 14 de Diciembre</p>
        <p><strong>Hora:</strong> 20hs</p>
        <p><strong>Lugar:</strong> Pje Agustín Pérez 12 – Espacio Cirulaxia</p>

        <a
          href="https://www.google.com/maps/place/Espacio+Cirulaxia"
          target="_blank"
          rel="noopener noreferrer"
          className="d-block mt-2"
        >
          Ver ubicación en Google Maps
        </a>
      </div>

      <a
        href="https://wa.me/5492995533683?text=Hola..."
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-whatsapp mt-4"
        
      >
        Comprar entradas
      </a>

    </section>
  );
}

