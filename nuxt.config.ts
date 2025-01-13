// nuxt.config.js
export default {
  ssr: true,

  head: {
    title: "My Personal Blog",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "My personal blog and portfolio",
      },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  },

  css: ["~/assets/css/main.css", "bootstrap/dist/css/bootstrap.min.css"],

  plugins: [
    "~/plugins/vue-transitions.js",
    { src: "~/plugins/bootstrap.client.js", mode: "client" },
  ],
  components: true,
  pageTransition: {
    name: "page",
    mode: "out-in",
  },
};
