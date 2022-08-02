//https://sitemap.nuxtjs.org/usage/sitemap-options
export const MainLink = [
    {
        url: '/',
        // changefreq: 'daily',
        priority: 1, // 網頁的重要程度，0.1 - 1
        lastmod: '2022-08-02'
    },
    {
        url: '/Book',
        title: '閱讀',
        subtitle: 'Read',
        priority: 0.9,
    },
    {
        url: '/Coding',
        title: '叩叮',
        subtitle: 'Coding',
        priority: 0.9,
    },
    {
        url: '/Investment',
        title: '投資',
        subtitle: 'Investment',
        priority: 0.9,
    },
    // {
    //     url: '/BlogMD',
    //     title: 'Blog',
    //     subtitle: 'BlogMD',
    //     priority: 1,
    // },
    // {
    //     url: '/about',
    //     title: '關於',
    //     subtitle: 'About',
    //     priority: 1,
    // }
]
export default {
    hostname: 'https://ingridkao.github.io/personal_website_v3/',
    gzip: true,
    exclude: [
        '/404',
    ],
    routes: MainLink
}