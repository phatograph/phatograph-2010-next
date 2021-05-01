module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.ya?ml$/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: 'js-yaml-loader',
        },
      ],
    })

    return config
  },
  i18n: {
    locales: ['en', 'th'],
    defaultLocale: 'en',
  },
}
