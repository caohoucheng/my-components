
# my-components

自用组件托管项目代码

## 在本地运行

Clone 这个 project

```bash
  git clone https://github.com/caohoucheng/my-components.git
```

前往项目目录

```bash
  cd my-components
```

安装依赖

```bash
  npm install
```

启动服务器

```bash
  npm run serve
```

## 打包

项目打包

```bash
  npm run build
```

组件打包

```bash
  npm run build:p # vue-cli-service build --target lib ./src/components/index.js --name lib --dest lib
```

## 发布npm包

`1.修改package.json version`

```json
{
    "name": "@caocc/components",
    "version": "0.0.1",//=>0.0.X
    "private": false,
    ...
}

```

`2.登录npm`

```bash
  npm login
```

`3.发布更新`

```bash
  npm run pub # npm publish --access public
```

## 文档打包

`1.编写docs文件下的vuepress文档`

[vuepress传送门](https://www.vuepress.cn/)

`2.打包`

前往项目目录

```bash
  cd docs
```

执行打包命令

```bash
  vuepress build
```

## 文档发布

切换分支到文档分支

```bash
  git checkout gh-pages
```

执行打包命令 : 将`master`分支下(`docs编辑分支`)`docs文件`检出,并将docs打包后的`dist`文件下内容复制到`根目录`

```bash
  npm run build # git checkout master docs && xcopy /e /y .\\docs\\.vuepress\\dist\\* .\\
```

发布

`提交代码到gh-pages分支,gh-pages为GitHub Pages,前往settings/pages 下 设置Source后将会生成该分支`
[详情](https://docs.github.com/cn/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 文档

[文档地址](https://caohoucheng.github.io/my-components/)

## 使用方法/示例

```bash
  npm i @caocc/components
```

```javascript

import components from '@caocc/components'

import '@caocc/components/lib/lib.css'

Vue.use(components)

```
