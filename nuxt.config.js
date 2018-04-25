const nodeExternals = require('webpack-node-externals');


module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'bicycle-store',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: 'https://fonts.googleapis.com/css?family=Lobster&amp;subset=cyrillic' },
    ]
  },
  css: [
    '~/assets/normalize.css',
    '~/assets/main.scss',
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  modules: [
    '@nuxtjs/axios',
  ],
  plugins: [
    '~/plugins/vue-awesome.js',
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    styleResources: {
      scss: [
        './assets/variables.scss',
      ],
    },
    extend(config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
        });
      }

      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            // default value for `whitelist` is
            // [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i]
            whitelist: [/es6-promise|\.(?!(?:js|json)$).{1,5}$/i, /^vue-awesome/]  // https://github.com/Justineo/vue-awesome#using-with-nuxtjs
          })
        ]
      }
    },
  }
}
