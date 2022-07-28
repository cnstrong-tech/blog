module.exports = {
    title: "施强前端博客",
    description: "施强前端博客",
    base: "/blog/",
    theme: "reco",
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    themeConfig: {
        nav: [
            {text: '首页', link: "/"},
            {
                text: "规范",
                items: [
                    {text: "eslint规范", link: ""},
                    {text: "git commit规范", link: ""},
                ]
            }
        ],
        subSidebar: "auto",
        sidebar: [
            {
                title: '欢迎学习',
                path: '/',
                collapsable: false, // 不折叠
                children: [
                    { title: "学前必读", path: "/" }
                ]
            },
            {
              title: "基础学习",
              path: '/handbook/ConditionalTypes',
              collapsable: false, // 不折叠
              children: [
                { title: "条件类型", path: "/handbook/ConditionalTypes" },
                { title: "泛型", path: "/handbook/Generics" }
              ],
            }
          ]
    }
}