# WiFi QR Code Generator - Cloudflare Pages 部署指南

## 域名信息
- **域名**: wifi-qr-code.online
- **部署平台**: Cloudflare Pages

## 部署步骤

### 1. 连接 GitHub 仓库到 Cloudflare Pages

1. 登录 [Cloudflare Dashboard](https://dash.cloudflare.com)
2. 进入 **Workers & Pages** > **Create application** > **Pages**
3. 选择 **Connect to Git**
4. 授权并选择此仓库
5. 配置构建设置:
   - **Project name**: `wifi-qr-code`
   - **Production branch**: `main`
   - **Framework preset**: `Next.js (Static HTML Export)`
   - **Build command**: `npm run build`
   - **Build output directory**: `out`
   - **Root directory**: `wifi-qr-generator`

### 2. 配置自定义域名

1. 部署成功后，进入项目设置
2. 点击 **Custom domains** > **Set up a custom domain**
3. 输入 `wifi-qr-code.online`
4. Cloudflare 会自动配置 DNS（因为域名已托管在 Cloudflare）
5. 等待 SSL 证书自动配置

### 3. 配置 WWW 重定向（推荐）

在 Cloudflare DNS 中:
1. 添加 CNAME 记录: `www` -> `wifi-qr-code.pages.dev`
2. 或在 **Bulk Redirects** 中配置 www 到 non-www 重定向

### 4. 环境变量（如需要）

在 Cloudflare Pages 设置中添加:
- **Settings** > **Environment variables**
- 目前项目无需环境变量

## 验证部署

部署后检查以下内容:
- [ ] 主页正常加载: https://wifi-qr-code.online
- [ ] 打印页面正常: https://wifi-qr-code.online/print/
- [ ] QR 码生成功能正常
- [ ] robots.txt 正确: https://wifi-qr-code.online/robots.txt
- [ ] sitemap.xml 正确: https://wifi-qr-code.online/sitemap.xml

## 后续优化

### 添加 OG 图片
在 `public/` 目录添加 `og-image.png` (1200x630 像素)，用于社交分享预览。

### Google Search Console
1. 访问 [Google Search Console](https://search.google.com/search-console)
2. 添加网站 `wifi-qr-code.online`
3. 使用 DNS 验证（推荐，因为已托管在 Cloudflare）
4. 提交 sitemap: `https://wifi-qr-code.online/sitemap.xml`

### 性能监控
- Cloudflare Analytics 自动启用
- 可选: 添加 Google Analytics 或 Plausible

## 项目结构

```
wifi-qr-generator/
├── app/                    # Next.js App Router 页面
├── components/             # React 组件
├── hooks/                  # 自定义 Hooks
├── lib/                    # 工具函数
├── public/                 # 静态资源
│   ├── _headers           # Cloudflare 安全头配置
│   └── _redirects         # SPA 路由配置
├── out/                    # 构建输出 (git ignored)
├── wrangler.toml          # Cloudflare 配置
└── next.config.mjs        # Next.js 配置 (静态导出)
```

## 构建命令

```bash
# 开发
npm run dev

# 构建
npm run build

# 本地预览构建结果
npx serve out
```
