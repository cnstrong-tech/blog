const navConfig = require('../../config/navConfig')
const sidebarConfig = require("../../config/sidebarConfig")

module.exports = {
    title: "施强前端博客",
    description: "",
    base: "/blog/",
    theme: "reco",
    locales: {
        '/': {
          lang: 'zh-CN'
        }
    },
    markdown: {
        lineNumbers: true, // 代码显示行号
        toc: {
            includeLevel: [1,2,3,4]
        }
    },
    themeConfig: {
        // logo: "/assets/logo.png",
        repo: "https://github.com/cnstrong-tech",
        nav: navConfig,
        subSidebar: "auto",
        sidebar: sidebarConfig
    }
}