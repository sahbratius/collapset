// https://nuxt.com/docs/api/configuration/nuxt-config
const BASE_URL = "http://localhost:3000";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: true,
  nitro: { preset: "static" },

  app: {
    head: {
      title: "Collapset | Український, політичний майнкрафт сервер",
      htmlAttrs: { lang: "uk" },
      meta: [
        {
          name: "description",
          content:
            "Вітаємо! Це офіційний сайт українського сервера майнкрафт Collapset. Наша мета — стати найкращим сервером в Україні!", // Опис що буде показуватися гуглу
        },
        { property: "og:site_name", content: "Collapset" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "theme-color", content: "#ea580c" },
      ],
      link: [
        // { rel: "canonical", href: "https://ваша-доменна-адреса.com/" },
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      ],
    },
    // @ts-ignore
    rootAttrs: {
      class: "select-none",
    },
  },
  sitemap: { url: BASE_URL },
  robots: {
    sitemap: [`${BASE_URL}/sitemap.xml`],
    // disallow: ['/'],
    allow: ["/"],
  },
  modules: [
    // "@nuxt/image",
    "@nuxt/ui",
    "@nuxtjs/mdc",
    // "nuxt-twemoji"
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
  ],
  css: ["./app/assets/styles.css"],
  vite: {
    build: {
      minify: "esbuild",
      cssCodeSplit: false,
    },
  },
});