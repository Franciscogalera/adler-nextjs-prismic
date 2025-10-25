import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow unsafe-eval and unsafe-inline for Prismic in development
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: process.env.NODE_ENV === "development"
              ? "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://static.cdn.prismic.io; style-src 'self' 'unsafe-inline';"
              : "script-src 'self' https://static.cdn.prismic.io; style-src 'self';",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
