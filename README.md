# 島嶼散步冊

一個把城市走讀整理成可持續擴充內容的 Astro 靜態網站。

## 本機開發

```bash
npm install
npm run dev
```

開啟終端機顯示的網址即可預覽。正式建置與檢查：

```bash
npm run check
npm run build
npm run preview
```

## 新增一條散步路線

1. 閱讀根目錄的 [`AGENTS.md`](./AGENTS.md)。
2. 在 `src/content/walks/` 複製一個既有 Markdown 檔案。
3. 修改 frontmatter 與正文，確保所有欄位符合 `src/content.config.ts`。
4. 把封面 SVG 或圖片放到 `public/images/`，並提供 `coverAlt`。
5. 執行 `npm run check` 和 `npm run build`。

新增檔案後，路線索引與 `/walks/[slug]/` 詳細頁會自動產生。

## GitHub Pages

網站預設部署到：

`https://kubouo.github.io/island-walkbook/`

push 到 `main` 後，`.github/workflows/deploy.yml` 會執行檢查、建置與 Pages 部署。首次使用時，請在 repository 的 Settings → Pages 確認 Source 設為 GitHub Actions。

## 專案規則

內容、元件、樣式與 AI 協作規則都集中在 [`AGENTS.md`](./AGENTS.md)。任何新增頁面或內容前，先閱讀該檔案。
