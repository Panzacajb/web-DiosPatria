import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  try {
    const elenco = [
      {
        nombre: "Actor 1",
        descripcion: "Descripción breve del actor 1",
        imagen: "/actores/actor1.jpg"
      },
      {
        nombre: "Actor 2",
        descripcion: "Descripción breve del actor 2",
        imagen: "/actores/actor2.jpg"
      },
      {
        nombre: "Actor 3",
        descripcion: "Descripción breve del actor 3",
        imagen: "/actores/actor3.jpg"
      },
      {
        nombre: "Actor 4",
        descripcion: "Descripción breve del actor 4",
        imagen: "/actores/actor4.jpg"
      }
    ];

    return NextResponse.json(elenco, { status: 200 });
  } catch (error) {
    console.error('Error en GET /api/elenco:', error);
    return NextResponse.json(
      { error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
