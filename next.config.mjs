/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static assets in /public work automatically
  // React strict mode for development warnings
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: '(?<subdomain>.*)\\.vercel\\.app',
          },
        ],
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
