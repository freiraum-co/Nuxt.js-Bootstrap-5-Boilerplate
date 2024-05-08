export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",
  // Server
  server: {
    host: "0.0.0.0",
  },
  sitemap: {
    hostname: "https://www.fewo-lamm.de",
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: (title) =>
      [title, "Gasthaus Lamm"].filter(Boolean).join(" - "),
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" }],
    script: [
      {
        src: "https://polyfill.io/v3/polyfill.min.js?features=es6",
        body: true,
      },
    ],
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/bootstrap.client.js" },
    { src: "~/plugins/lazysizes.client.js" },
  ],
  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    // https://github.com/nuxt-community/robots-module
    "@nuxtjs/robots",
    // https://sitemap.nuxtjs.org/
    "@nuxtjs/sitemap",
    "bootstrap-vue/nuxt",
    "@nuxtjs/markdownit",
  ],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],
  markdownit: {
    runtime: true, // Support `$md()`
  },
  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    loaders: {
      vue: {
        compilerOptions: {
          whitespace: "condense",
          preserveWhitespace: false,
        },
      },
      sass: {
        implementation: require("sass"),
      },
      scss: {
        implementation: require("sass"),
      },
    },
  },
};
