// https://nuxt.com/docs/api/configuration/nuxt-config
const BASE_URL = "https://collapset.vercel.app";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: "static",
    compressPublicAssets: false,
  },
  experimental: {
    appManifest: false,
  },
  app: {
    head: {
      title: "Collapset | Головна сторінка",
      htmlAttrs: { lang: "uk" },
      meta: [
        {
          name: "google-site-verification",
          content: "_4zxC7OKzbEBNuU1G3Qau5iIWorwJxbvepeVa7Qz0IM",
        },
        {
          name: "description",
          content:
            "Вітаємо! Це офіційний сайт українського сервера майнкрафт Collapset. Наша мета — стати найкращим сервером в Україні!",
        },
        { property: "og:site_name", content: "Collapset" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#ea580c" },
      ],
      link: [
        { rel: "canonical", href: BASE_URL },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
      ],
    },
    // @ts-ignore
    rootAttrs: {
      class: "select-none",
    },
  },
  sitemap: {
    // @ts-ignore
    hostname: BASE_URL,
    routes: [
      "/rules",
      "/donate",
      "/mechanics",
      "/mechanics/class",
      "/mechanics/fractions",
      "/event/1",
    ],
  },
  robots: {
    sitemap: [`${BASE_URL}/sitemap.xml`],
    // disallow: ['/'],
    allow: ["/"],
  },
  modules: [
   // "@nuxt/image",
    "@nuxt/ui", // "nuxt-twemoji"
    "@nuxtjs/mdc",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
  ],
  css: ["./app/assets/styles.css"],
  build: {
    // @ts-ignore
    extractCSS: true,
    // splitChunks: { layouts: true, pages: true, commons: true },
    terser: { compress: true, mangle: true },
  },
});
