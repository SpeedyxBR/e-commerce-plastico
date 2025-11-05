/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'utfs.io',
      },
      {
        protocol: 'https',
        hostname: '**', // Permite qualquer domínio HTTPS (para desenvolvimento)
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '',
        pathname: '/**',
      },
    ],
    // Fallback para domínios antigos (deprecated mas ainda funciona)
    domains: ['utfs.io'],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
