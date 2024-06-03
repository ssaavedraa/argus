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
          destination: 'https://hex.api.santiagosaavedra.com.co/:path*',
        },
      ]
    }
  },
}

export default nextConfig
