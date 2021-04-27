const { withLayer0, withServiceWorker } = require('@layer0/next/config')

const isLayer0 = 
  ((process?.mainModule.path || '').includes('layer0')) ||
  (process.env.npm_lifecycle_script || '').includes('layer0')

const nextConfig = {
	future: {
    webpack5: true,
  },
}

module.exports = isLayer0 
  ? withLayer0({
    layer0SourceMaps: true,
    ...nextConfig
  })
  : nextConfig

// module.exports = isLayer0 
//   ? withLayer0(
//     withServiceWorker({
//       layer0SourceMaps: true,
//       ...nextConfig
//     })
//   )
//   : nextConfig
