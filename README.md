<p align="center">
  <img width="280" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556184510512&di=9a483c0ca84df59070ea4610ed73f63f&imgtype=0&src=http%3A%2F%2Ffile2.rrxh5.cc%2Fg2%2Fc1%2F2018%2F06%2F25%2F1529860716565.jpg" alt="logo">
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

