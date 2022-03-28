const path = require("path")

module.exports = {
  webpack: (config) => {
    config.resolve.alias["~"] = path.resolve(__dirname, "src")
    return config
  },
  env: {
    BEARCATEVENTS_API: process.env.BEARCATEVENTS_API
  },
  reactStrictMode: true,
}
