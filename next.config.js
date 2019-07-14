// @flow

const withSass = require('@zeit/next-sass')
const path = require('path')
const images = require('remark-images')
const emoji = require('remark-emoji')

const fs = require('fs')
const klaw = require('klaw')
const matter = require('gray-matter')

const load = require('./src/helpers/dataLoaders')


const withMDX = require('@zeit/next-mdx')({
  options: {
    mdPlugins: [
      images,
      emoji
    ]
  }
})

// fix: prevents error when .css files are required by node
if (typeof require !== 'undefined') {
  require.extensions['.sass'] = (file) => {}
}

// module.exports = withMDX({
//   pageExtensions: ['js', 'jsx', 'mdx']
// })
const { join } = require('path')
const { promisify } = require('util')
// const copyFile = promisify(fs.copyFile)

module.exports = withSass({
  exportPathMap: async function (defaultPathMap, {dev, dir, outDir, distDir, buildId}) {
    if (dev) {
      debugger
      return defaultPathMap
    }
    const posts = load.getContent('./content/nyheter')
    console.log(posts)
    console.log("exportPathMap", defaultPathMap)
    const pages = posts.reduce(
      (pages, post) =>
      Object.assign({}, pages, {
        [`/post/${post.id}`]: {
          page: '/post',
          query: { id: post.id }
        }
      }), {})
    console.log("pages", pages)
    return defaultPathMap
  },
  webpack: (config, options) => {
      // Further custom configuration here
      config.resolve.alias = {
          ...(config.resolve.alias || {}),
          "_variables.sass": path.resolve(__dirname, './_variables.sass'), 
      }
      config.module.rules.push(
        {
          test: /\.md$/,
          use: 'raw-loader'
        }
      )
      // console.log("config", config)
      return config
  }
})

// module.exports = {
//     webpack: (config) => {
//       config.module.rules.push(
//         {
//           test: /\.md$/,
//           use: 'raw-loader'
//         }
//       )
  
//       return config
//     },
//   }

// function getContent (contentPath) {
//   const items = []
//   const getFiles = () => new Promise(resolve => {
//     if (fs.existsSync(contentPath)) {
//       klaw(contentPath)
//         .on('data', item => {
//           if (path.extname(item.path) === '.md') {
//             const data = fs.readFileSync(item.path, 'utf8')
//             const dataObj = matter(data)
//             dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
//             // delete dataObj.orig
//             items.push(dataObj)
//           }
//         })
//         .on('error', e => {
//           console.log(e)
//         })
//         .on('end', () => {
//           resolve(items)
//         })
//     } else {
//       resolve(items)
//     }
//   })
//   return getFiles()
// }
