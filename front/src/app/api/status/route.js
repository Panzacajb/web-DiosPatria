import { NextResponse } from 'next/server';

export const runtime = 'nodejs';

export async function GET() {
  try {
    return NextResponse.json(
      {
        ok: true,
        message: "Backend funcionando",
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error en GET /api/status:', error);
    return NextResponse.json(
      { ok: false, error: 'Error interno del servidor' },
      { status: 500 }
    );
  }
}
