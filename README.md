# Puremoon下载站 - 做一个简单的游戏下载站

<img alt="Website" src="https://img.shields.io/website?style=flat-square&url=https%3A%2F%2Fpuremoondlstation.pages.dev"><img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Lytsu/lowlight?style=flat-square"><img alt="GitHub Release Date" src="https://img.shields.io/github/release-date/Lytsu/lowlight?style=flat-square"><img alt="GitHub commit activity" src="https://img.shields.io/github/commit-activity/w/Lytsu/lowlight?style=flat-square">

Puremoon 下载站 是一个提供各种游戏下载的下载站，为部分不便于下载游戏的玩家提供游戏的下载服务。

此项目为 Puremoon 下载站 的前端部分，后端部分由于原理简单，不再单独建立项目。

## 版本更迭

PuremoonDLStation 2.x 是目前即将更新的版本，由 [Docusaurus 2](https://docusaurus.io/) 构建，使用 React 实现，您可以前往其网站和项目首页查看详情。

PuremoonDLStation 1.x 是本站上一个在生产环境部署的版本，由 [Alist](https://alist.nn.ci) 构建，使用 Go 实现；1.x 版本正在现今的生产环境进行部署。

## 项目状态

![Alt](https://repobeats.axiom.co/api/embed/1346b06cd07c3ce11ccba830b506b7829adf33d5.svg "Repobeats analytics image")

## 安装使用

建议事先查看 [Docusaurus 文档](https://docusaurus.io/zh-CN/docs/) 来了解如何使用。

至少需要安装：[Node.js](https://nodejs.org/en/download/) 版本 >= 16.14、[Yarn](https://yarnpkg.com/en/) 版本 >= 1.5。

### 获取项目文件

可以通过 Git 简单克隆本项目的文件（需要安装：[Git](https://git-scm.com/)）：

```bash
git clone https://github.com/DreamRain8/PuremoonDLStation.git
```

亦可以直接下载项目源文件的 .zip 压缩包。

### 安装项目依赖

```bash
yarn install
# 或者使用以下命令
yarn
```

`yarn install` 命令可以安装 `package.json` 里的包依赖，并将包及它的所有依赖项保存到 `yarn.lock` 文件中。

### 本地调试

```bash
yarn start
```

这条命令会启动一个用于调试的本地服务器，并打开一个浏览器窗口。

大多数变化都是实时反映在页面上的，除非遇到问题，您不需要手动重启这个本地服务器。

### 构建站点

```bash
yarn build
```

这条命令会在 `build` 目录生成静态内容， 你可以使用任何静态页面托管服务（如 [Vercel](https://vercel.com/)、[GitHub Pages](https://pages.github.com/)、[Netlify](https://www.netlify.com/) 等）来部署这些内容。

### 部署站点

#### 支持一键部署的静态托管服务

[Vercel](https://vercel.com/)、[Netlify](https://www.netlify.com/) 以及 [Cloudflare Pages](https://pages.cloudflare.com/) 等静态托管服务，支持通过 GitHub 或 GitLab 仓库直接获取项目文件并部署，并在仓库有更新时自动更新部署。

#### Github Pages

如果您使用 Bash （大部分 Linux 发行版默认的终端），则使用以下命令：

```bash
GIT_USER=<你的 GitHub 用户名> USE_SSH=true yarn deploy
```

如果您使用 Windows 上的命令提示符或 PowerShell ，则使用以下命令：

```powershell
cmd /C 'set "GIT_USER=<你的 GitHub 用户名>" && yarn deploy'
```

如果你需要使用 GitHub Pages 托管网页，以上命令可以方便地构建你的网站，并将内容推送到 `gh-pages` 分支。

详情请参阅 [Docusaurus 部署文档](https://docusaurus.io/zh-CN/docs/deployment)。

#### Cloudflare Pages

在所有的步骤开始之前，你需要：

- fork 该项目到你的 GitHub 仓库
- 将你的 Github 账户关联到 Cloudflare Pages
- 在 GitHub 上为 Cloudflare Pages [应用](https://github.com/settings/installations/24751745) 配置存储库访问权限

之后，进入 Cloudflare Pages 控制台，点击 `创建项目` 按钮，选择 `连接到 Git` 作为源，然后选择你之前 fork 的仓库，点击 `开始设置` 按钮。

在构建设置中，请将 `架构预设` 设置为 `Docusaurus`，并将 `构建命令` 设置为 `yarn install && yarn build`。

（**重要**）然后添加一个名为 `NODE_VERSION` 的环境变量，其值为 `16.14`。

在等待 Cloudflare Pages 构建并部署完成后，在 `自定义域` 选项中配置你准备部署到的实际域名。

其他关于 Cloudflare Pages 的信息，请参阅 [Cloudflare Pages 文档](https://developers.cloudflare.com/pages/how-to)。

## 访问本站

访问以下域名中的一个，即可进入本站：

- **[pmnet.top](https://pmnet.top)**
- [nhe.lv](https://nhe.lv/)

以下为其他用户赞助的域名：

- [chunyueyun.yilx.cc](https://chunyueyun.yilx.cc)

## Stargazers over time

[![Stargazers over time](https://starchart.cc/Lytsu/lowlight.svg)](https://starchart.cc/Lytsu/lowlight)

## 联系我们

[bilibili:Puremoon音游下载站](https://space.bilibili.com/673409542)

[QQ群: 674102755](http://qm.qq.com/cgi-bin/qm/qr?_wv=1027&k=NhIUf3dm7QRTbsT8-oJaQ8a7bWjoc5FG&authKey=CijTxPtWqmP0TfpHrpelxkGua%2BC2aoYhtpRPx%2BR3rybibYEH6gM5laMsh%2BzKDCk7&noverify=0&group_code=674102755)

Email: 3859227514#qq.com(#→@)
