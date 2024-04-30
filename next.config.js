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
                protocol: "http",
                hostname: "192.168.68.154",
                port: "5003",
                pathname: "/**",
            },
        ],
    },
    reactStrictMode: false,
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
