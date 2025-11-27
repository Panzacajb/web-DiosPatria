// ✅ Revalidar cada 1 hora
export const revalidate = 60;

// ✅ Interfaz para el tipo Actor
interface Actor {
  nombre: string;
  descripcion: string;
  imagen: string;
}

// ✅ Función para obtener el elenco desde la API interna
async function obtenerElenco(): Promise<Actor[]> {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/elenco`, {
      next: { revalidate: 60 }, // ISR: Revalidate cada 1 hora
    });

    if (!res.ok) {
      console.error("Error al obtener el elenco:", res.status);
      return [];
    }

    const data: Actor[] = await res.json();
    return data;
  } catch (error) {
    console.error("Error al obtener el elenco:", error);
    return [];
  }
}

// ✅ Componente principal
export default async function ElencoPage() {
  const elenco: Actor[] = await obtenerElenco();

  // Divisiones
  const primerActor = elenco.slice(0, 1);
  const grupo1 = elenco.slice(1, 5); // siguientes 4
  const grupo2 = elenco.slice(5, 9); // siguientes 4

  return (
    <main className="container py-5 text-center">
      {/* ✅ Título principal del elenco (centrado) */}
      <h1 className="titulo-obra mb-5">Elenco</h1>

      {/* Primer actor */}
      {/* ✅ Subtítulo (centrado) */}
      <h2 className="subtitulo mb-4">Director</h2>
      <div className="row justify-content-center">
        {primerActor.map((actor, index) => (
          <div key={index} className="col-12 col-md-6 mb-4 actor-separado">
            {/* ✅ Primer actor: tarjeta horizontal para descripciones largas */}
            <div className="actor-card actor-card--horizontal">
              {/* ✅ Imagen del actor (alineada a la izquierda en horizontal) */}
              <img src={actor.imagen} alt={actor.nombre} className="card-img" />
              <div>
                {/* ✅ Nombre (se mantiene la jerarquía) */}
                <h4>{actor.nombre}</h4>
                {/* ✅ Descripción larga en formato horizontal (texto a la izquierda para mejor lectura) */}
                <p className="texto-justificado actor-desc">{actor.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Grupo 1 */}
      {grupo1.length > 0 && (
        <>
          {/* ✅ Subtítulo grupo 1 (centrado) */}
          <h2 className="subtitulo mt-5 mb-4">Familia Arosteli</h2>
          <div className="row justify-content-center">
            {grupo1.map((actor, index) => (
              <div key={index + 1} className="col-6 col-md-3 mb-4">
                <div className="actor-card">
                  {/* ✅ Imagen del actor (centrada por `.card-img`) */}
                  <img src={actor.imagen} alt={actor.nombre} className="card-img" />
                  <h4>{actor.nombre}</h4>
                  {/* ✅ Descripción justificada */}
                  <p className="texto-justificado">{actor.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}

      {/* Grupo 2 */}
      {grupo2.length > 0 && (
        <>
          {/* ✅ Subtítulo grupo 2 (centrado) */}
          <h2 className="subtitulo mt-5 mb-4">Familia Peretti</h2>
          <div className="row justify-content-center">
            {grupo2.map((actor, index) => (
              <div key={index + 5} className="col-6 col-md-3 mb-4">
                <div className="actor-card">
                  {/* ✅ Imagen del actor (centrada por `.card-img`) */}
                  <img src={actor.imagen} alt={actor.nombre} className="card-img" />
                  <h4>{actor.nombre}</h4>
                  {/* ✅ Descripción justificada */}
                  <p className="texto-justificado">{actor.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </main>
  );
}
