// ✅ Revalidar cada 1 hora
export const revalidate = 3600;

// ✅ Función para obtener el elenco desde la API interna
async function obtenerElenco() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/elenco`, {
      next: { revalidate: 3600 }, // ISR: Revalidate cada 1 hora
    });

    if (!res.ok) {
      console.error("Error al obtener el elenco:", res.status);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error al obtener el elenco:", error);
    return [];
  }
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

