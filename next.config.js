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
        protocol:'https',
        hostname:"t.scdn.co"
      },
      {
        protocol:'https',
        hostname:"newjams-images.scdn.co"
      },
      {
        protocol:'https',
        hostname:"dailymix-images.scdn.co"
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
      },
      {
        protocol:'https',
        hostname:"charts-images.scdn.co"
      },
      {
        protocol:'https',
        hostname:"daily-mix.scdn.co"
      },
      {
        protocol:'https',
        hostname:"mixed-media-images.spotifycdn.com"
      },
      {
        protocol:"https",
        hostname:"seeded-session-images.scdn.co"
      }
    ],
  }
}

module.exports = nextConfig
