var path = require('path')
var fs = require('fs')

const shimDir = path.join(__dirname, 'shims')
try {
  fs.mkdirSync(shimDir)
} catch (err) {
  // ignore
}

// Custom babel resolver for importing Meteor packages
module.exports = function resolveModuleSource(source) {
  const match = /^meteor\/(.*)/.exec(source)
  if (match) {
    const shimFile = path.join(shimDir, match[1] + '.js')
    let exists
    try {
      exists = fs.statSync(shimFile).isFile()
    } catch (err) {
      // ignore
    }
    if (!exists) fs.writeFileSync(shimFile, 'module.exports = Package.' + match[1].replace(/\//g, '.'))
    return shimFile
  }
  return source
}