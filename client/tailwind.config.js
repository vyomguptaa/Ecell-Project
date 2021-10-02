module.exports = {
    purge: ["./src/*{.js}", "./public/index.html"],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            theme: {
                fontFamily: {
                    sans: ['"PT Sans"', "sans-serif", "calibri"],
                    serif: ["calibri"],
                },
            },
            colors: {
                reddit_dark: {
                    DEFAULT: "#F9F9F9",
                    brighter: "#1a1a1a",
                    brightest: "#272728",
                    search_holder: "#DEE2E6",
                    search_bar: "#d8dce4",
                    post_box: "#d4e8f3",
                },
                reddit_head: {
                    DEFAULT: "#07161D",
                },
                reddit_border: {
                    DEFAULT: "#212529",
                    search: "#cccccc",
                },
                reddit_text: {
                    DEFAULT: "rgb(215, 218, 220)",
                    darker: "#818384",
                },
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};