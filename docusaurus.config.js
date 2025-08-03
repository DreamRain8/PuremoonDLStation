// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'Puremoon Download Station',
    tagline: '「Simple Rhythm Game Resource Collection」',
    url: 'https://www.puremoon.net',
    baseUrl: '/',
    onBrokenLinks: 'warn',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',
    i18n: {
        defaultLocale: 'en-US',
        locales: ['en-US'],
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
                    blogTitle: 'Puremoon Blog',
                    blogSidebarTitle: 'All articles',
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
            title: 'Puremoon Download Station',
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
                    label: 'Resources',
                },
                {
                    to: 'blog',
                    label: 'Blog',
                    position: 'left'
                },
                // right
                {
                    label: 'Changelog',
                    to: 'updatelog/main',
                    position: 'right',
                },
                {
                    label: 'Donate & Support Us',
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
                    title: 'Legal information',
                    items: [{
                            label: 'Terms of Use',
                            to: 'policies/tos',
                        },
                        {
                            label: 'Privacy Policy',
                            to: 'policies/privacy',
                        },
                        {
                            label: 'Protection of minors',
                            to: 'policies/minor',
                        },
                        {
                            label: 'Content repost specifications',
                            to: 'policies/repost',
                        },
                        {
                            label: 'Resource inclusion criteria',
                            to: 'policies/inclusion',
                        },
                        {
                            label: 'Copyright & License',
                            to: 'policies/licenses',
                        },
                    ]
                },
                {
                    title: 'Site related',
                    items: [{
                            label: 'Service Status',
                            href: 'https://uptime.pmnet.work/status/puremoon',
                        },
                        {
                            label: 'Changelog',
                            to: 'changelog/main',
                        },
                        {
                            label: 'Help in use',
                            to: 'faq',
                        }, {
                            label: '捐赠支持',
                            to: 'info/donate'
                        }
                    ],
                },
                {
                    title: 'Community',
                    items: [{
                            label: 'Blog',
                            to: 'blog',
                        },
                        {
                            label: 'GitHub Repo',
                            href: 'https://github.com/DreamRain8/PuremoonDLStation',
                        },
                        {
                            label: 'BiliBili',
                            href: 'https://space.bilibili.com/673409542',
                        },
                    ],
                },
                {
                    title: 'Sponsers',
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
                    title: 'Links',
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
            We are not affiliated or dealing with lowiro limited, SEGA Corporation or Pigeon Games.
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