/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
const nextConfig = {
    output: 'export',
    compiler: {
        removeConsole: isProd,
    },
};

export default nextConfig;
