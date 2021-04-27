// This file was automatically added by layer0 init.
// You should commit this file to source control.
const { withLayer0, withServiceWorker } = require('@layer0/next/config')

const isLayer0 = 
  ((process.mainModule.path || '').includes('layer0')) ||
  (process.env.npm_lifecycle_script || '').includes('layer0')

console.log({ isLayer0 })

const nextConfig = {
	future: {
    webpack5: true,
  },
}

if (isLayer0) {
  module.exports = withLayer0(
    withServiceWorker({
      // Output sourcemaps so that stacktraces have original source filenames and line numbers when tailing
      // the logs in the Layer0 developer console.
      layer0SourceMaps: true,
      ...nextConfig
    })
  )
} else {
  module.exports = nextConfig
}
