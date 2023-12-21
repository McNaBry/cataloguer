/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader'
    })
 
    return config
  },
}

module.exports = nextConfig
