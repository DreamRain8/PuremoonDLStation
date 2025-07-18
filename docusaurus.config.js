// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Puremoon',
    tagline: '「简单的移动端音游资源集」',
    url: 'https://pmnet.work',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    i18n: {
        defaultLocale: 'zh-CN',
        locales: ['zh-CN'],
    },
    organizationName: 'DreamRain',
    projectName: 'PuremoonDLStation',
    stylesheets: [],
    scripts: [],
    plugins: [
        [
            '@easyops-cn/docusaurus-search-local',
            {
                // `hashed` is recommended as long-term-cache of index file is possible.
                hashed: true,
                // For Docs using Chinese, The `language` is recommended to set to:
                language: ["en", "zh"],
                highlightSearchTermsOnTargetPage: false,
                indexDocs: true,
                indexPages: true,
                translations: {
                    "search_placeholder": "搜索",
                    "see_all_results": "查看全部结果",
                    "no_results": "无结果。",
                    "search_results_for": "\"{{ keyword }}\"的搜索结果",
                    "search_the_documentation": "搜索文档",
                    "count_documents_found": "找到{{ count }}篇文档中含有关键词\"{{ keyword }}\"。",
                    "count_documents_found_plural": "找到{{ count }}篇文档中含有关键词\"{{ keyword }}\"。",
                    "no_documents_were_found": "没有找到相关文档。"
                }
            },
        ],
        [
            '@docusaurus/plugin-pwa',
            {
                debug: true,
                offlineModeActivationStrategies: [
                    'appInstalled',
                    'standalone',
                    'queryString',
                ],
                pwaHead: [{
                        tagName: 'link',
                        rel: 'icon',
                        href: 'img/pwa/icon-192x192.png',
                    },
                    {
                        tagName: 'link',
                        rel: 'manifest',
                        href: 'manifest.json',
                    },
                    {
                        tagName: 'meta',
                        name: 'theme-color',
                        content: '#8e4bbc',
                    },
                    {
                        tagName: 'meta',
                        name: 'apple-mobile-web-app-capable',
                        content: 'yes',
                    },
                    {
                        tagName: 'meta',
                        name: 'apple-mobile-web-app-status-bar-style',
                        content: '#000',
                    },
                    {
                        tagName: 'link',
                        rel: 'apple-touch-icon',
                        href: 'img/pwa/icon-192x192.png',
                    },
                    {
                        tagName: 'link',
                        rel: 'mask-icon',
                        href: 'img/puremoon.svg',
                        color: '#8e4bbc',
                    },
                    {
                        tagName: 'meta',
                        name: 'msapplication-TileImage',
                        content: 'img/pwa/icon-192x192.png',
                    },
                    {
                        tagName: 'meta',
                        name: 'msapplication-TileColor',
                        content: '#000',
                    },
                ],
            },
        ],
    ],
    presets: [
        [
            '@docusaurus/preset-classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl: 'https://github.com/DreamRain8/PuremoonDLStation/edit/main/',
                    routeBasePath: "/",
                    showLastUpdateTime: true,
                    showLastUpdateAuthor: true,
                },
                blog: {
                    path: 'blog',
                    blogTitle: 'Puremoon 博客',
                    blogSidebarTitle: '所有文章',
                    blogSidebarCount: 'ALL',
                    showReadingTime: true,
                    postsPerPage: 5,
                    feedOptions: {
                        type: 'all',
                        copyright: `Copyright © 2024 - ${new Date().getFullYear()} Puremoon Network.`,
                    },
                    // Please change this to your repo.
                    editUrl: 'https://github.com/DreamRain8/PuremoonDLStation/edit/main/',
                },
                theme: {
                    customCss: [
                        require.resolve('./src/css/custom.css'),
                    ],
                },
                sitemap: {
                    changefreq: 'weekly',
                    priority: 0.5,
                },
                gtag: {
                    trackingID: 'G-GYBNM0NDE5',
                    anonymizeIP: true,
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
        announcementBar: {
            id: 'support_us',
            content: '下载站的健康发展离不开您的支持。<a href="/info/donate">前往捐赠页→</a>',
            backgroundColor: '#a26ac8',
            textColor: '#fff',
            isCloseable: true,
        },
        docs: {
            sidebar: {
                hideable: true,
            },
        },
        navbar: {
            title: 'Puremoon下载站',
            logo: {
                alt: 'Puremoon Logo',
                src: 'img/puremoon.webp',
            },
            items: [
                // left
                {
                    type: 'doc',
                    docId: 'games',
                    position: 'left',
                    label: '游戏下载',
                },
                {
                    to: 'blog',
                    label: '站点博客',
                    position: 'left'
                },
                // right
                {
                    label: '更新日志',
                    to: 'updatelog/main',
                    position: 'right',
                },
                {
                    label: '捐赠与支持',
                    to: 'info/donate',
                    position: 'right',
                },
                {
                    href: 'https://space.bilibili.com/673409542',
                    position: 'right',
                    className: 'header-bili-link',
                    'aria-label': 'Bilibili',
                },
                {
                    href: 'https://github.com/DreamRain8/PuremoonDLStation',
                    position: 'right',
                    className: 'header-github-link',
                    'aria-label': 'GitHub repository',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [{
                    title: '法律信息',
                    items: [{
                            label: '使用条款',
                            to: 'policies/tos',
                        },
                        {
                            label: '隐私政策',
                            to: 'policies/privacy',
                        },
                        {
                            label: '未成年人保护指引',
                            to: 'policies/minor',
                        },
                        {
                            label: '站点内容转载规范',
                            to: 'policies/repost',
                        },
                        {
                            label: '站点游戏收录标准',
                            to: 'policies/inclusion',
                        },
                        {
                            label: '版权与许可',
                            to: 'policies/licenses',
                        },
                    ]
                },
                {
                    title: '站点相关',
                    items: [{
                            label: '服务器状态',
                            href: 'https://uptime.pmnet.work/status/puremoon',
                        },
                        {
                            label: '更新日志',
                            to: 'changelog/main',
                        },
                        {
                            label: '使用帮助',
                            to: 'faq',
                        }, {
                            label: '捐赠支持',
                            to: 'info/donate'
                        }
                    ],
                },
                {
                    title: '社群',
                    items: [{
                            label: '站点博客',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub Repo',
                            href: 'https://github.com/DreamRain8/PuremoonDLStation',
                        },
                        {
                            label: '哔哩哔哩',
                            href: 'https://space.bilibili.com/673409542',
                        },
                    ],
                },
                {
                    title: '赞助商',
                    items: [{
                            label: '伊linxiyy',
                            href: 'https://yilx.net/',
                        },{
                            label: '皮梦',
                            href: 'https://pmya.xyz/',
                        }
                    ],
                },
                {
                    title: '友情链接',
                    items: [{
                            label: 'Konmai 音游下载站',
                            href: 'https://616.sb',
                        },
                        {
                            label: '云露露Bot 一款游戏信息查询机器人',
                            href: 'https://yll.sdbit.net.cn',
                        },
                    ],
                },
            ],
            logo: {
                alt: 'Puremoon Network Logo',
                src: 'img/team.png',
                href: 'info/project',
            },
            copyright: `
            <p><small>
            Copyright © 2024 - ${new Date().getFullYear()} Puremoon Network. Bulit with <a href="https://docusaurus.io/zh-CN">Docusaurus</a>.<br>
            本站与 lowiro limited、SEGA Corporation 及 Pigeon Games 无任何关联与往来。
            </small><small>
            <a href="//beian.miit.gov.cn/">粤ICP备2025410684号-1</a> 
            </small><p>
            `,
        },
        prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
        },
    }),
};

module.exports = config;