/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                even: "0 0 10px rgba(0, 0, 0, 0.15)", // Even shadow around the card
            },
        },
    },
    plugins: [],
};
