var tailwindcss = require("tailwindcss");

module.exports = {
    parser: require("postcss-scss"),
    plugins: [
        require("precss"),
        require("postcss-cssnext"),
        tailwindcss("./config/tailwind.config.js")
    ]
};
