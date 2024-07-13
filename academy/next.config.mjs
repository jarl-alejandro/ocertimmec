/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.occertimmec.com',
                pathname: '**',
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8001',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
