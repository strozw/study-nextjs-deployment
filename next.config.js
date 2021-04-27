// This file was automatically added by layer0 init.
// You should commit this file to source control.
const { withLayer0, withServiceWorker } = require('@layer0/next/config')

const npmConfigArgv = JSON.parse(process?.env.npm_config_argv || '{}')
const isLayer0 = (npmConfigArgv?.cooked?.[1] || '').includes('layer0')

const nextConfig = {
	future: {
    webpack5: true,
  },
}

module.exports = isLayer0
  ? withLayer0(
    withServiceWorker({
      // Output sourcemaps so that stacktraces have original source filenames and line numbers when tailing
      // the logs in the Layer0 developer console.
      layer0SourceMaps: true,
      ...nextConfig
    })
  )
  : nextConfig

