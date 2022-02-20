const postcssPresetEnv = require("postcss-preset-env")
const tailwind = require("tailwindcss")

const config = () => ({
  plugins: [
    postcssPresetEnv({
      stage: 0,
    }),
    tailwind("./tailwind.config.js"),
  ],
})

module.exports = config
