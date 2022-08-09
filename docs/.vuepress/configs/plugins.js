module.exports = [
    '@vuepress/back-to-top',
    'vuepress-plugin-baidu-autopush',
    'vuepress-plugin-table-of-contents',
    [
        '@vuepress/active-header-links',
        {
          sidebarLinkSelector: '.sidebar-link',
          headerAnchorSelector: '.header-anchor',
        },
    ],
    [
        '@vuepress/medium-zoom',
        {
        selector: '.medium-zoom',
        delay: 1000,
        options: {
            margin: 24,
            scrollOffset: 0,
        },
        },
    ],
    [
        '@vuepress/pwa', 
        {
          serviceWorker: true,
          updatePopup: {
            '/zh/': {
              message: '发现有新的内容更新,马上更新',
              buttonText: '刷新',
            },
          },
        },
    ],
    [
        'vuepress-plugin-auto-sidebar',
        {
          titleMode: 'titlecase',
          collapsable: {
            open: true
          },
        },
    ],
    [
        {
          name: 'page-plugin',
          globalUIComponents: [
            'global-AttionFixed',
            'global-ToBottom',
            'global-RightBar',
            'global-Cat',
            'global-Copy',
          ],
        },
    ],
    [
        'vuepress-plugin-clean-urls',
        {
          normalSuffix: '/',
          indexSuffix: '/',
          notFoundPath: '/404.html',
        },
    ],
]