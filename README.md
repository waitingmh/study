<p align="center">
  <img width="280" src="http://ss.csdn.net/p?https://mmbiz.qpic.cn/mmbiz_png/ctwVEjeYQ2ic9QVvaUJoxwiaL1eFJ7iaKgctekHq9ENYq8qZaN7PWNtglzXkVefb4PdhX80YnQzRjBeIWib6uDKkcQ/0?wx_fmt=png" alt="logo">
</p>

## Target
Collect quality content & classical problem

Contributions are welcome!

## Edit Content
``` bash
# 启动开发服务
npm run dev

# 添加导航 text&link
modify /src/.vuepress/config.js
such as: 
 {
  text: '快速搭建开发环境',
  link: '/zh/standard/Start.md'
 }

# 创建一个 markdown 文件
touch /src/zh/standard/Start.md

# 添加内容

# 构建为静态文件
npm run build

# 提交代码到仓库
```

## Development

> Please make sure your version of Node.js is greater than 8.

``` bash
npm run dev # serves VuePress' own docs with itself
```

## Deploy
``` bash
npm run build
```

## Contribute
- Send pr to add excellent content
- Help us improve our content on exist pages  

![improve](/src/.vuepress/public//img/improve.png)

## License

MIT

