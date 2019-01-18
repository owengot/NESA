var glob = require('glob');
var path = require('path');

// Enhance Nuxt's generate process by gathering all content files from Netifly CMS
// automatically and match it to the path of your Nuxt routes.
// The Nuxt routes are generate by Nuxt automatically based on the pages folder.
var dynamicRoutes = getDynamicPaths({
  '/page': 'page/posts/*.json',
  '/news': 'news/posts/*.json',
  '/events': 'events/posts/*.json',
  '/projects': 'projects/posts/*.json',
});

module.exports = {

  modules: [
    '@nuxtjs/axios',
    ['@reallifedigital/nuxt-image-loader-module', {
      imagesBaseDir: 'static',
      imageStyles: {
        small: {
          macros: ['scaleAndCrop|160|90']
        },
        medium: {
          macros: ['scaleAndCrop|320|180']
        },
        large: {
          macros: ['scaleAndCrop|640|360']
        },
      }
    }],
    [
      '@nuxtjs/markdownit'
    ]
  ],
  script: [{
    src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js",
    type: "text/javascript"
  }],
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    injected: true,
    html: true,
  },
  plugins: [{
      src: '~/plugins/VueFlickity.js',
      ssr: false
    },
    {
      src: '~/plugins/VueMarkdown.js',
      ssr: false
    },
    {
      src: '~/plugins/Medium.js',
      ssr: false
    },
    {
      src: '~plugins/vue-js-modal',
      ssr: true
    },

  ],
  loading: { color: '#016895' },
  css: [
    // SCSS file in the project
    '@/assets/sass/global.sass'
  ],
  head: {
    title: 'NESA Academy',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: 'Home of the New European Surgery Academy'
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Exo+2|Open+Sans:400,600,700'
      }
    ],

  },
  generate: {
    routes: dynamicRoutes
  },
  build: {
    extend(config, {
      isDev,
      isClient
    }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

/**
 * Create an array of URLs from a list of files
 * @param {*} urlFilepathTable
 */
function getDynamicPaths(urlFilepathTable) {
  return [].concat(
    ...Object.keys(urlFilepathTable).map(url => {
      var filepathGlob = urlFilepathTable[url];
      return glob
        .sync(filepathGlob, {
          cwd: 'content'
        })
        .map(filepath => `${url}/${path.basename(filepath, '.json')}`);
    })
  );
}
