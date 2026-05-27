import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Désactiver ESLint pendant le build (le linting se fait séparément)
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Les erreurs TS sont vérifiées séparément avec tsc --noEmit
    ignoreBuildErrors: false,
  },
  // Supprimer le warning de workspace root
  outputFileTracingRoot: process.cwd(),
  // Réduire les warnings d'hydratation en dev
  reactStrictMode: true,
  // Optimisations pour les animations
  experimental: {
    optimizePackageImports: ['framer-motion', 'lucide-react'],
  },
};

export default nextConfig;
