// ✅ Obtener funciones desde tu API
async function obtenerFunciones() {
  const res = await fetch("http://localhost:4000/api/funciones", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.error("Error al obtener las funciones");
    return [];
  }

  return res.json();
}

export default async function FuncionesPage() {
  const funciones = await obtenerFunciones();

  return (
    <main className="container py-5 text-center">

      {/* ✅ Título principal */}
      <h1 className="titulo-obra mb-5">Funciones y Entradas</h1>

      {/* ✅ Subtítulo */}
      <h2 className="subtitulo mb-4">Próximas Presentaciones</h2>

      {/* ✅ Grid de funciones */}
      <div className="row justify-content-center">
        {Array.isArray(funciones) &&
          funciones.map((funcion, index) => (
            <div key={index} className="col-12 col-md-4 mb-4">

              <div className="p-4 rounded shadow bg-light h-100 d-flex flex-column justify-content-between">

                {/* ✅ Imagen */}
                {funcion.imagen && (
                  <img
                    src={funcion.imagen}
                    alt={funcion.titulo}
                    className="img-fluid rounded mb-3"
                  />
                )}

                {/* ✅ Título */}
                <h3 className="mt-2" style={{ fontWeight: 700 }}>
                  {funcion.titulo}
                </h3>

                {/* ✅ Descripción */}
                <p className="mt-2" style={{ fontSize: "1rem" }}>
                  {funcion.descripcion}
                </p>

                {/* ✅ Fecha y hora */}
                <p className="mt-2" style={{ fontSize: "1.1rem", fontWeight: 600 }}>
                  {funcion.fecha} — {funcion.hora}
                </p>

                {/* ✅ Botón de compra */}
                <a
                  href={funcion.linkEntradas || "#"}
                  className="btn btn-dark mt-3"
                  style={{ fontWeight: 600 }}
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
