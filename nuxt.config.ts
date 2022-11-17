// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'IWM-Archi-front',
        }
    },
    components: {
        dirs: [
            {
                path: '~/src/nuxt/components/',
                global: true
            },
            '~/components'
        ]
    },
    typescript: {
        strict: true
    },
    dir: {
        pages: './src/nuxt/pages/'
    }
})
