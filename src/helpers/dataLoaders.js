// @flow

const fs = require('fs')
const path = require('path')
const klaw = require('klaw')
const matter = require('gray-matter')

exports.getContent = function (contentPath) {
  const items = []
  return new Promise((resolve, reject) => {
    if (fs.existsSync(contentPath)) {
      klaw(contentPath)
        .on('data', item => {
          if (path.extname(item.path) === '.md') {
            const data = fs.readFileSync(item.path, 'utf8')
            const dataObj = matter(data)
            dataObj.data.slug = dataObj.data.title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '')
            // delete dataObj.orig
            items.push(dataObj)
          }
        })
        .on('error', e => {
          reject(e)
        })
    } 
    resolve(items)
  })
}

exports.getJson = function (file) {
  return JSON.parse(fs.readFileSync(file, 'utf8'));
}