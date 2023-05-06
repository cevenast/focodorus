/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images:{
    remotePatterns: [
      {
        protocol:'https',
        hostname:"i.scdn.co"
      },
      {
        protocol:"https",
        hostname:"mosaic.scdn.co"
      },
      {
        protocol:"https",
        hostname:"thisis-images.scdn.co"
      },
      {
        protocol:"https",
        hostname:"seed-mix-image.spotifycdn.com"
      }
    ],
  }
}

module.exports = nextConfig
