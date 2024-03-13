/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.occertimmec.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
