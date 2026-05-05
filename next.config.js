/** @type {import('next').NextConfig} */
const nextConfig = {
  // Izinkan header custom mempengaruhi cache (rentan)
  generateEtags: false,
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'Cache-Control',
          value: 'public, max-age=3600, s-maxage=3600', // cache lama
        },
        // Tidak ada Vary pada header X-Poison → celah!
      ],
    },
  ],
};
module.exports = nextConfig;
