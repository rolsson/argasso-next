const images = require('remark-images')
const emoji = require('remark-emoji')

const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [
      images,
      emoji
    ]
  }
})

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'mdx']
// })

module.exports = {
    webpack: (config) => {
      config.module.rules.push(
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      )
  
      return config
    },
  }