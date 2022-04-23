export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    ssr: false,
    head: {
        title: 'APP',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content: 'Make money by investing in AI'
            },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    },

    css: ['~/assets/scss/index.scss'],

    // Global CSS: https://go.nuxtjs.dev/config-css
    //css: ['~/assets/scss/index.scss'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: ['~/plugins/web3auth.js'],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [/* '@nuxtjs/svg',  */ 'nuxt-purgecss'],

    purgeCSS: {
        mode: 'webpack',
        enabled: true
    },

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        '@nuxtjs/style-resources'
    ],

    styleResources: {
        // your settings here
        scss: ['@/assets/scss/resources/_variables.scss', '@/assets/scss/resources/_mixins.scss'],
        less: [],
        stylus: []
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extractCSS: {
            ignoreOrder: true
        }
    },

    env: {
    },
};
