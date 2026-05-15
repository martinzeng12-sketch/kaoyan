# 割了吧杨b林森专属私董考研网

一个可直接部署的广东考研择校静态网站，包含院校池、地图点位、学校官网、研招入口、官网图片、星级评价、横向备考时间线和统考估算倒计时。

## 本地运行

```bash
node server.mjs
```

打开：

```text
http://localhost:8765/
```

也可以直接用任意静态服务器托管本目录。

如果本机有 npm，也可以运行：

```bash
npm start
```

## 部署

这是纯静态网站，可以部署到：

- GitHub Pages：上传整个目录，入口文件是 `index.html`
- Netlify：拖拽整个目录，或连接仓库
- Vercel：导入仓库，保持默认静态部署即可

## 数据说明

- 院校数据在 `app.js` 里维护。
- 学校图片已缓存到 `official-images/`，避免官网防盗链导致图片失效。
- 用户新增/删除院校会保存在访问者自己的浏览器 `localStorage` 中，不会上传到服务器。
- 初试倒计时是统考窗口估算，不代表每所学校或申请制项目的官方日期。

## 文件结构

```text
index.html          页面结构
styles.css          界面样式和动效
app.js              院校数据和交互逻辑
official-images/    官网来源图片缓存
server.mjs          本地静态服务器
netlify.toml        Netlify 部署配置
vercel.json         Vercel 部署配置
```
