// front/src/app/api/funciones/route.js
export async function GET() {
  const funciones = [
    {
      id: 1,
      titulo: "Función Inaugural",
      descripcion: "La primera presentación oficial de la obra.",
      fecha: "2025-01-15",
      hora: "20:30",
      imagen: "https://via.placeholder.com/600x400",
      linkEntradas: "https://wa.me/5492995533683?text=Hola%2C%20quiero%20reservar%20entradas%20para%20Dios%2C%20Patria%20y%20Familia"
    },
    {
      id: 2,
      titulo: "Segunda Función",
      descripcion: "Una nueva oportunidad para disfrutar la obra.",
      fecha: "2025-01-16",
      hora: "20:30",
      imagen: "https://via.placeholder.com/600x400",
      linkEntradas: "https://wa.me/5492995533683?text=Hola%2C%20quiero%20reservar%20entradas%20para%20Dios%2C%20Patria%20y%20Familia"
    }
  ];

  return Response.json(funciones);
}
