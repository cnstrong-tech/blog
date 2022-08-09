// const sidebar = require('./sidebarConfig');
const nav = require('./navConfig')

module.exports = {
    repoLabel: "GitHub",
    docsDir: 'docs',
    repo:  "coco723/blog",
    editLinks: true,
    editLinkText: '发现有错误?前往GitHub指正', 
    smoothScroll: true, 
    displayAllHeaders: false,
    lastUpdated: "上次更新",
    nav,
    sidebar: 'auto',
}