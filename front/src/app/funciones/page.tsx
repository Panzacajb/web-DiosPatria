// ✅ Revalidar cada 1 hora
export const revalidate = 3600;

// ✅ Función para obtener las funciones desde la API interna
async function obtenerFunciones() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const res = await fetch(`${baseUrl}/api/funciones`, {
      next: { revalidate: 3600 }, // ISR: Revalidate cada 1 hora
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

      {/* ✅ Título principal con estilo grotesco criollo */}
      <h1 className="titulo-obra mb-5">Funciones y Entradas</h1>

      {/* ✅ Subtítulo teatral */}
      <h2 className="subtitulo mb-4">Próximas Presentaciones</h2>

      {/* ✅ Grid de funciones */}
      <div className="row justify-content-center">
        {Array.isArray(funciones) &&
          funciones.map((funcion, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">

              {/* ✅ Tarjeta teatral */}
              <div className="funcion-card">

                {/* ✅ Imagen */}
                {funcion.imagen && (
                  <img
                    src={funcion.imagen}
                    alt={funcion.titulo}
                  />
                )}

                {/* ✅ Título */}
                <h3>{funcion.titulo}</h3>

                {/* ✅ Descripción */}
                <p>{funcion.descripcion}</p>

                {/* ✅ Fecha y hora */}
                <p className="funcion-fecha">
                  {funcion.fecha} — {funcion.hora}
                </p>

                {/* ✅ Botón teatral */}
                <a
                  href={funcion.linkEntradas || "#"}
                  className="btn-funcion"
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
