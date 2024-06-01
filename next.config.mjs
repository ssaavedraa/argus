/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/api/:path*',
          destination: 'http://localhost:3001/:path*',
        },
        {
          source: '/auth/:path*',
          destination: 'http://localhost:8080/:path*',
        },
      ]
    } else {
      return [
        {
          source: '/api/:path*',
          destination: 'https://hex.api.santiagosaavedra.com.co/:path*',
        },
      ]
    }
  },
}

export default nextConfig
