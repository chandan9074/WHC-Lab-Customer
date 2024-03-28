/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/sections/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "our-product": "url('/assets/Images/product_bg.png')",
            },
            keyframes: {
                fadeIn: {
                    "0%": { opacity: "0" },
                    "100%": { opacity: "1" },
                },
            },
            animation: {
                fadeIn: "fadeIn 0.3s ease-in-out",
            },
            colors: {
                "brand-blue-100": "#B3BCC6",
                "brand-blue-500": "#0B2848",
                "brand-blue-800": "#061628",
                "brand-blue-800-80%": "rgba(6, 22, 40, 0.80)",
                "stroke-new": "#EBEDF0",
                "light-gray": "rgba(235, 237, 240, 0.15)",
                "stroke-white": "#E7EAED",
                "brand-green-200": "#D7E6B9",
                "brand-green-500": "#A8C866",
                "neutral-10": "#FAFBFB",
                "neutral-40": "#DFE2E6",
                "neutral-50": "#C2C7D0",
                "neutral-100": "#7A8699",
                "neutral-200": "#6B788E",
                "neutral-300": "#5D6B82",
                "neutral-400": "#505F79",
                "neutral-700": "#243757",
                "neutral-800": "#15294B",
            },
            fontFamily: {
                poppins: ['var(--font-poppins)'],
                montserrat: ['var(--font-montserrat)'],
            }
        },
    },
    plugins: [],
};
