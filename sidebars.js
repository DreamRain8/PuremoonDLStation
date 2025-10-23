/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
    // By default, Docusaurus generates a sidebar from the docs folder structure
    tutorialSidebar: [{
            type: 'doc',
            id: 'games',
            label: '🎮Mobile Games',
        },
        {
            type: 'doc',
            id: 'desktop',
            label: '🖥️Desktop Games',
        },
        {
            type: 'doc',
            id: 'faq',
            label: '❓FAQ',
        },
        {
            type: 'category',
            label: 'ℹ️Site information',
            collapsed: true,
            items: [
                'info/about',
                'info/project',
                'info/donate',
            ],
        },
        {
            type: 'category',
            label: '📝Changelog',
            collapsed: true,
            items: [
                'updatelog/main',
                'updatelog/ctnode',
            ],
        },
    ],
    // But you can create a sidebar manually
    /*
    tutorialSidebar: [
      {
        type: 'category',
        label: 'Tutorial',
        items: ['hello'],
      },
    ],
     */
};

module.exports = sidebars;