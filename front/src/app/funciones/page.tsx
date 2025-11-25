// ✅ Función para obtener las funciones desde el backend
async function obtenerFunciones() {
  // ✅ Usar URL absoluta para evitar errores en SSR
  const baseUrl = process.env.NEXT_PUBLIC_URL ?? "";
  const res = await fetch(`${baseUrl}/api/funciones`, {
    cache: "no-store",
  });

  // ✅ Manejo de errores si la API falla
  if (!res.ok) {
    console.error("Error al obtener las funciones");
    return [];
  }

  // ✅ Devolver el JSON con las funciones
  return res.json();
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

              {/* ✅ Tarjeta teatral (idéntica a actor-card) */}
              <div className="funcion-card">

                {/* ✅ Imagen con borde grueso y filtro teatral */}
                {funcion.imagen && (
                  <img
                    src={funcion.imagen}
                    alt={funcion.titulo}
                  />
                )}

                {/* ✅ Título con tipografía Anton */}
                <h3>{funcion.titulo}</h3>

                {/* ✅ Descripción */}
                <p>{funcion.descripcion}</p>

                {/* ✅ Fecha y hora con estilo destacado */}
                <p className="funcion-fecha">
                  {funcion.fecha} — {funcion.hora}
                </p>

                {/* ✅ Botón teatral (no Bootstrap genérico) */}
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