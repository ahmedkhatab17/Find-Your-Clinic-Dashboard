/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/api/backend/:path*',
        destination: 'http://findyourclinic.runasp.net/api/:path*',
      },
    ];
  },
};

export default nextConfig;
