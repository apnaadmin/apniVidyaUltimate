/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental:{
        serverActions:true,
        mdxRs:true,
        serverComponentsExternalPackages:['mongoose']
    },
    images: {
        remotePatterns: [
          {
            protocol: "http",
            hostname: "**",
          },
        ],
      },
}

module.exports = nextConfig
