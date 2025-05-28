/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export", // ✅ This enables static HTML export
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: {
        unoptimized: true,
        domains: ["placeholder.svg"],
    },
    experimental: {
        optimizePackageImports: ["lucide-react"],
    },
};

export default nextConfig;
