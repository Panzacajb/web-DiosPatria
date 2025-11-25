async function obtenerElenco() {
  const res = await fetch("http://localhost:4000/api/elenco", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error al obtener el elenco");
    return [];
  }

  return res.json();
}

export default async function ElencoPage() {
  const elenco = await obtenerElenco();

  return (
    <main className="container py-5 text-center">

      {/* ✅ Título principal */}
      <h1 className="titulo-obra mb-5">Elenco</h1>

      {/* ✅ Subtítulo */}
      <h2 className="subtitulo mb-4">Actuación y Cuerpo en Escena</h2>

      {/* ✅ Grid de actores */}
      <div className="row justify-content-center">
        {Array.isArray(elenco) &&
          elenco.map((actor, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <img
                src={actor.imagen}
                alt={actor.nombre}
                className="img-fluid rounded shadow"
              />
              <h4 className="mt-3" style={{ fontWeight: 600 }}>
                {actor.nombre}
              </h4>
              <p style={{ fontSize: "1rem" }}>{actor.descripcion}</p>
            </div>
          ))}
      </div>

    </main>
  );
}
