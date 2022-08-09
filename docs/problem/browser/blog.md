# 搭建过程问题记录

## 1. issue中的md文件编译
- 实例：侧边栏配置
```json
{
  title: "测试",
  path: "https://github.com/cnstrong-tech/blog/issues/1",
},
```
- 编译后报错：
  
![](assets/error.png)
仔细看路径多了`/`，尝试了多种方式，未解决


## 2. logo配置
`.vuepress/config.js`的`themeConfig`配置
```js
 logo: "/assets/logo.png",
```

图片无法成功加载，待解决



