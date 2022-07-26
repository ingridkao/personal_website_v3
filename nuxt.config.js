const Info = {
    locale: "zh-TW",
    title: "Ingrid Kao",
    description: "放一些日常",
    url: "https://www.ingridkao.net/",
    image: "mainImage.png"
}
//https://www.nuxtjs.cn/faq/github-pages

const RouterBase = process.env.DEPLOY_ENV === 'GH_PAGES'? {base: '/personal_website_v3/'}: {}

export default {
    // Target: https://go.nuxtjs.dev/config-target
    target: 'static',
    router: {
        ...RouterBase
    },

    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: Info.title,
        htmlAttrs: {
            lang: Info.locale
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'format-detection', content: 'telephone=no' },

            { hid: "og:type",  property: "og:type", content: "website" },
            { hid: "og:locale",property: "og:locale", content: Info.locale },
            { hid: "og:title", property: "og:title", content: Info.title },
            { hid: "og:site_name",  property: "og:site_name", content: Info.title },
            { hid: "twitter:title", name: "twitter:title", content: Info.title },
      
            { hid: "og:url",   property: "og:url", content: Info.url },
            { hid: "twitter:url", name: "twitter:url", content: Info.url },
      
            { hid: 'description', name: 'description', content: Info.description},
            { hid: "og:description", property: "og:description", content: Info.description },
            { hid: "twitter:description", name: "twitter:description", content: Info.description },
      
            { hid: "og:image", property: "og:image", content: Info.image },
            { hid: "twitter:image", name: "twitter:image", content: Info.image }
      
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/chakra
        '@chakra-ui/nuxt',
        // https://go.nuxtjs.dev/emotion
        '@nuxtjs/emotion',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    // https://nuxtjs.org/docs/features/loading
    loading: {
        color: '#7acedc',
        height: '3px'
    }
}
