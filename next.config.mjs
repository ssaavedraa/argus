/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/cms/:path*',
          destination: 'http://localhost:8080/api/:path*',
        },
      ]
    } else {
      return [
        {
          source: '/api/:path*',
          destination: `${process.env.API_DOMAIN}/api:/path*`,
        },
      ]
    }
  },
}

export default nextConfig
