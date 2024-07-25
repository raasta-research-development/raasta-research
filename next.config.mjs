/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    MUX_TOKEN_ID: process.env.MUX_TOKEN_ID,
    MUX_TOKEN_SECRET: process.env.MUX_TOKEN_SECRET,
  },
};

export default nextConfig;
