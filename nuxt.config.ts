// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" },
        {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css", integrity:"sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN", crossorigin:"anonymous"}
      ],
      script: [
        {src:"https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js", integrity:"sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL", crossorigin:"anonymous"}
      ]
    }
  },

  appConfig: {
    apikey: process.env.SUPABASE_API_KEYS,
    baseUrl: process.env.SUPABASE_URL,
    secretKey: process.env.SUPABASE_SECRETS_KEY,
    storageUrl: process.env.SUPABASE_STORAGE_URL,
    baseStorageUrl: process.env.SUPABASE_GET_STORAGE_URL,
  },

  devtools: { enabled: true },
  modules: ['@vite-pwa/nuxt' , '@nuxtjs/tailwindcss' , '@pinia/nuxt'],
  
  tailwindcss: {
    cssPath: "~assets/css/tailwind.css",
    configPath: "~/tailwind.config.ts",
  },
  
  pwa: {
   manifest: {
    name: "SMK Coding",
    short_name: "SMK Coding",
    theme_color: "#fff",
    background_color: "#fff",
    display: "standalone",
    orientation: "portrait",
    scope: "/",
    start_url: "/",
    icons: [
    {
      src: "images/icons/icon-72x72.png",
      sizes: "72x72",
      type: "image/png"
    },
    {
      src: "images/icons/icon-96x96.png",
      sizes: "96x96",
      type: "image/png"
    },
    {
      src: "images/icons/icon-128x128.png",
      sizes: "128x128",
      type: "image/png"
    },
    {
      src: "images/icons/icon-144x144.png",
      sizes: "144x144",
      type: "image/png"
    },
    {
      src: "images/icons/icon-152x152.png",
      sizes: "152x152",
      type: "image/png"
    },
    {
      src: "images/icons/icon-192x192.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "images/icons/icon-384x384.png",
      sizes: "384x384",
      type: "image/png"
    },
    {
      src: "images/icons/icon-512x512.png",
      sizes: "512x512",
      type: "image/png"
    }
  ]
   }
  }
})
