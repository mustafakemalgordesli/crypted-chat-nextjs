/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        // nextScriptWorkers: true,
        forceSwcTransforms: true,
    },
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            process.env.NEXT_PUBLIC_IMAGE_SERVICE_HOST
        ]
    }
}

module.exports = nextConfig
