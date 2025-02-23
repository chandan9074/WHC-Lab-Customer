/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "whc-lab-test.s3.ap-southeast-1.amazonaws.com",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "192.168.10.61",
                port: "5002",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "192.168.10.61",
                port: "5095",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "5002",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "192.168.68.101",
                port: "5002",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "192.168.68.138",
                port: "5002",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "192.168.10.5",
                port: "5003",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "whc-lab-backend.s2.zaagsys.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "whc-internal.s3.zaagsys.com",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "5091.006.ngrok.dev",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "https://api.ipify.org",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "192.168.68.154",
                port: "5003",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "192.168.10.117",
                port: "5002",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "192.168.10.14",
                port: "5003",
                pathname: "/**",
            },
        ],
    },
    reactStrictMode: false,
    webpack: (config) => {
        config.resolve.alias.canvas = false;
        return config;
    },
    // experimental: {
    //     turbo: {
    //         resolveAlias: {
    //             canvas: "./empty-module.ts",
    //         },
    //     },
    // },
    // async redirects() {
    //     return [
    //         {
    //             source: "/profile",
    //             destination: "/profile/",
    //             permanent: true,
    //         },
    //     ];
    // },
};

// module.exports = nextConfig;

const withVideos = require("next-videos");

// module.exports = withVideos();

module.exports = {
    ...nextConfig,
    ...withVideos(),
};
