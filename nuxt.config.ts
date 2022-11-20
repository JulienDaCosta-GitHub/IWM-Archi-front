// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'IWM TDD Front',
        }
    },
    components: {
        dirs: [
            {
                path: '~/src/adapters/primary/nuxt/components/',
                global: true
            },
            '~/components'
        ]
    },
    typescript: {
        strict: true
    },
    modules: [
        '@pinia/nuxt',
    ],
    dir: {
        // assets: 'custom-assets',
        layouts: './src/adapters/primary/nuxt/layouts',
        // middleware: 'custom-middleware',
        pages: './src/adapters/primary/nuxt/pages/'
        // static: 'custom-static',
        // store: 'custom-store'
    },
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
})