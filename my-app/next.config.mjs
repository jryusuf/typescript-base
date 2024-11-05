/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
    },
    output: 'export',
    reactStrictMode: true,
    swcMinify: true,
};

export default nextConfig;
