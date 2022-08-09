const themeConfig = require("./configs/themeConfig");
const markdown = require('./configs/markdown')
const plugins = require('./configs/plugins')

module.exports = {
    title: "施强前端博客",
    description: "施强,施强前端,施强前端博客",
    base: "/blog/",
    keywords: "施强,施强前端,施强前端博客",
    themeConfig,
    plugins,
    markdown
}