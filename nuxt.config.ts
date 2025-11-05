import tailwindcss from "@tailwindcss/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/ui',
    'nuxt-og-image',
    'nuxt-llms'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ]
  },
  css: ['~/assets/css/main.css'],
  content: {
    build: {
      markdown: {
        toc: {
          searchDepth: 1
        }
      }
    }
  },
  nitro: {
    prerender: {
      routes: [
        '/'
      ],
      crawlLinks: true,
      autoSubfolderIndex: false
    }
  },
  ui: {
    global: true
  },
  llms: {
  domain: 'http://localhost:3000',
  title: 'Mi Documentación',
  description: 'Documentación interna de mi proyecto con Nuxt.',
  full: {
    title: 'Mi Documentación Completa',
    description: 'Versión completa de la documentación del proyecto.'
  },
  sections: [
    {
      title: 'Introducción',
      contentCollection: 'docs',
      contentFilters: [
        { field: 'path', operator: 'LIKE', value: '/introduccion%' }
      ]
    },
    {
      title: 'Guía',
      contentCollection: 'docs',
      contentFilters: [
        { field: 'path', operator: 'LIKE', value: '/guia%' }
      ]
    }
  ]
}

})