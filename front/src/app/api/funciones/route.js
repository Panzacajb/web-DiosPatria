import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const funciones = [
      {
        id: 1,
        titulo: "Función Inaugural",
        descripcion: "La primera presentación oficial de la obra.",
        fecha: "13-12",
        hora: "20:00",
        imagen: "/funciones/funcion-inaugural.jpg",
        linkEntradas: "https://wa.me/5492995533683?text=Hola%2C%20quiero%20reservar%20entradas%20para%20la%2C%20funci%C3%B3n%20del%2013%20de%20Dios%2C%20Patria%20y%20Familia"
      },
      {
        id: 2,
        titulo: "Segunda Función",
        descripcion: "Una nueva oportunidad para disfrutar la obra.",
        fecha: "14-12",
        hora: "20:00",
        imagen: "/funciones/segunda-funcion.jpg",
        linkEntradas: "https://wa.me/5492995533683?text=Hola%2C%20quiero%20reservar%20entradas%20para%20la%2C%20funci%C3%B3n%20del%2014%20de%20Dios%2C%20Patria%20y%20Familia"
      }
    ];

    return NextResponse.json(funciones, { status: 200 });
  } catch (error) {
    console.error('Error en GET /api/funciones:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
