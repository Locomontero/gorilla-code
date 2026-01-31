/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
            },
            keyframes: {
                pulseGlow: {
                    '0%, 100%': { filter: 'brightness(1)' },
                    '50%': { filter: 'brightness(1.5)' },
                },
            },
        },
    },
    plugins: [],
}
