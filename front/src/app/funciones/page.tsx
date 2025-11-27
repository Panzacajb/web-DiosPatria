// ✅ Revalidar cada 1 hora
export const revalidate = 60;

// ✅ Función para obtener las funciones desde la API interna
async function obtenerFunciones() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/funciones`, {
      next: { revalidate: 60 }, // ISR: Revalidate cada 1 hora
    });

    if (!res.ok) {
      console.error("Error al obtener las funciones:", res.status);
      return [];
    }

    return res.json();
  } catch (error) {
    console.error("Error al obtener las funciones:", error);
    return [];
  }
}

// ✅ Página principal de funciones con estética teatral
export default async function FuncionesPage() {
  const funciones = await obtenerFunciones();

  return (
    <main className="container py-5 text-center">

      {/* ✅ Título principal con estilo grotesco criollo (centrado) */}
      <h1 className="titulo-obra mb-5">Funciones y Entradas</h1>

      {/* ✅ Subtítulo teatral (centrado) */}
      <h2 className="subtitulo mb-4">Próximas Presentaciones</h2>

      {/* ✅ Grid de funciones */}
      <div className="row justify-content-center funciones-row">
        {Array.isArray(funciones) &&
          funciones.map((funcion, index) => (
            <div
              key={index}
              className={`col-12 col-md-4 mb-4 ${index === 0 ? 'funcion-principal' : index === 1 ? 'funcion-secundaria' : ''}`}
            >

              {/* ✅ Tarjeta teatral */}
              <div className="funcion-card">

                {/* ✅ Título */}
                <h3>{funcion.titulo}</h3>

                {/* ✅ Descripción */}
                {/* ✅ Descripción justificada (CSS global aplica `texto-justificado`) */}
                <p className="texto-justificado">{funcion.descripcion}</p>

                 {/* ✅ Imagen */}
                {funcion.imagen && (
                  /* ✅ Imagen de función centrada por la clase `.card-img` */
                  <img
                    src={funcion.imagen}
                    alt={funcion.titulo}
                    className="card-img"
                  />
                )}

                {/* ✅ Fecha y hora */}
                <p className="funcion-fecha">
                  {funcion.fecha} — {funcion.hora}
                </p>

                {/* ✅ Botón teatral */}
                  {/* ✅ Botón centrado dentro de la tarjeta */}
                  <a
                    href={funcion.linkEntradas || "#"}
                    className="btn-funcion btn-center"
                  >
                    Comprar Entradas
                  </a>

              </div>
            </div>
          ))}
      </div>

    </main>
  );
}
