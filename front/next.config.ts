import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // ✅ Mejoras para despliegue en Vercel
  reactCompiler: true,
  reactStrictMode: true,
  poweredByHeader: false,
  // Habilitar formatos modernos para optimización de imágenes al build
  images: {
    formats: ["image/avif", "image/webp"]
  }
};

export default nextConfig;
