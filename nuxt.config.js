export default {
    mode: 'universal',
    /*
    ** Headers of the page
    */
    head: {
        title: 'Vue SweetAlert Icons',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Clean animated status icons for your Vue project. Based on SweetAlert\'s status icons' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
    },
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#758be2' },
    /*
    ** Global CSS
    */
    css: [],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        './plugins/vue-sweetalert-icons.js',
    ],
    /*
    ** Nuxt.js dev-modules
    */
    devModules: [
        // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
        '@nuxtjs/tailwindcss',
    ],
    /*
    ** Nuxt.js modules
    */
    modules: [],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        },
    },
};
