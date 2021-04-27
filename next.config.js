// This file was automatically added by layer0 init.
// You should commit this file to source control.
const { withLayer0, withServiceWorker } = require('@layer0/next/config')

const isLayer0 = (process.env.npm_package_scripts_layer0_deploy || '').includes('layer0')

const nextConfig = {
	future: {
    webpack5: true,
  },
}

let finalConfig = null

if (isLayer0) {
  finalConfig = withLayer0(
    withServiceWorker({
      // Output sourcemaps so that stacktraces have original source filenames and line numbers when tailing
      // the logs in the Layer0 developer console.
      layer0SourceMaps: true,
      ...nextConfig
    })
  )
} else {
  finalConfig = nextConfig
}

module.exports = finalConfig
