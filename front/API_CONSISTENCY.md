# Consistencia API: Local vs Vercel

## ✅ Cambios realizados

### 1. **APIs actualizadas con NextResponse**
- **Archivo**: `/src/app/api/*/route.js`
- **Cambio**: Usamos `NextResponse` en lugar de `Response` para mayor compatibilidad
- **Beneficio**: Funciona igual en local y Vercel

```javascript
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // Especifica Node.js runtime

export async function GET() {
  try {
    // Tu lógica aquí
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: '...' }, { status: 500 });
  }
}
```

### 2. **Runtime explícito**
- `export const runtime = 'nodejs';` garantiza que Vercel use Node.js runtime
- Sin esto, Vercel podría usar Edge Runtime (que tiene limitaciones)

### 3. **Manejo de errores consistente**
- Todas las APIs tienen try/catch
- Respuestas con códigos HTTP explícitos (200, 500)
- Logs en consola para debugging

## 🚀 Testing Local

```bash
# Iniciar servidor de desarrollo
npm run dev

# Probar APIs
curl http://localhost:3000/api/status
curl http://localhost:3000/api/elenco
curl http://localhost:3000/api/funciones
```

## 📤 Desplegar en Vercel

1. **Verifica que todo funciona en local** (✓ hecho)
2. **Push a GitHub**:
   ```bash
   git add .
   git commit -m "Hacer APIs consistentes para local y Vercel"
   git push
   ```
3. **Vercel deployará automáticamente**
4. **Las APIs funcionarán igual** en production

## 🔍 Archivos clave

- `src/app/api/elenco/route.js` ✅
- `src/app/api/funciones/route.js` ✅
- `src/app/api/status/route.js` ✅
- `next.config.ts` ✅
- `.vercelignore` ✅

## 📋 Checklist antes de desplegar

- [x] Compilación local con `npm run build` ✓
- [x] Servidor de desarrollo con `npm run dev` ✓
- [x] APIs responden correctamente
- [ ] Testear en Vercel
- [ ] Verificar logs en Vercel dashboard
