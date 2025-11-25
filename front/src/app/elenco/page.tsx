async function obtenerElenco() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/elenco`, {
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
      <h1 className="titulo-obra mb-5">Elenco</h1>
      <h2 className="subtitulo mb-4">Actuación y Cuerpo en Escena</h2>

      <div className="row justify-content-center">
        {Array.isArray(elenco) &&
          elenco.map((actor, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <div className="actor-card">
                <img src={actor.imagen} alt={actor.nombre} />
                <h4>{actor.nombre}</h4>
                <p>{actor.descripcion}</p>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}

