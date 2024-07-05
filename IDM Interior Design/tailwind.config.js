const colors = require('tailwindcss/colors');
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ["./public/**/*.{html,js}"],
    theme: {
        colors: {
            brand: "#A91D54",
            transparent: 'transparent',
            current: 'currentColor',
            black: colors.black,
            white: colors.white,
            gray: colors.gray,
            red: colors.red,
            orange: colors.orange,
            amber: colors.amber,
            yellow: colors.yellow,
            lime: colors.lime,
            green: colors.green,
            emerald: colors.emerald,
            teal: colors.teal,
            cyan: colors.cyan,
            sky: colors.sky,
            blue: colors.blue,
            indigo: colors.indigo,
            violet: colors.violet,
            purple: colors.purple,
            fuchsia: colors.fuchsia,
            pink: colors.pink,
            rose: colors.rose,
        },
        extend: {
            height: {
                navScreen: "calc(100% - 72px)"
            },
            backgroundImage: {
                fdheromob: "url(assets/hero-img/fd-hero-mob1.webp)",
                fdbanner: "url(assets/hero-img/hero.webp)",
                fdhightlight: "url(assets/banner-img/highlight-banner.webp)",
                fdglobal: 'linear-gradient(45deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 13%, rgba(255, 255, 255, 0) 13%, #ffd6e0 100%)',
                fdarrow: "url(assets/banner-img/sky-right.webp)",
                fdhitech: "url(assets/banner-img/hitech.webp)",
                eligibleBg: "url(assets/hero-img/elibilityBg.webp)",


            },
        },
    },
    plugins: [],
}