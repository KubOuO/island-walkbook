# AGENTS.md — 島嶼散步冊

## 專案目的

島嶼散步冊是給週末城市散步者使用的繁體中文靜態網站。它把一段 1–3 小時的城市路線整理成可閱讀、可複製、可繼續新增的內容單元。

每次修改都要同時維持兩件事：讀者能清楚完成一次散步，下一位 AI 或維護者能用相同方法新增下一條路線。

## 技術與指令

- 技術：Astro、TypeScript、Markdown content collections、原生 CSS。
- `npm install`：安裝依賴。
- `npm run dev`：啟動本機開發伺服器。
- `npm run check`：執行 Astro 與 TypeScript 檢查，也會驗證內容 frontmatter。
- `npm run build`：產生 GitHub Pages 使用的 `dist/`。
- `npm run preview`：預覽最後一次 production build。

完成修改前至少要執行 `npm run check`、`npm run build` 與 `git diff --check`。

## 目錄責任

- `src/content/walks/`：每條散步路線一個 Markdown 檔案，這是路線內容的唯一來源。
- `src/content.config.ts`：內容 schema。新增欄位前要先更新 schema，再更新使用它的元件。
- `src/components/`：可重用的導覽、路線卡、篩選器、步驟時間線與來源清單。
- `src/pages/`：頁面組合與路由。不要在頁面中複製完整路線資料。
- `src/styles/global.css`：設計 tokens、全域排版、響應式與無障礙樣式。
- `public/images/`：本地圖片與 SVG。內容 frontmatter 的 `cover` 只能引用這裡的檔名。
- `.github/workflows/deploy.yml`：GitHub Pages 自動建置與部署。

## 新增路線流程

1. 先讀取本檔案與 `src/content.config.ts`。
2. 在 `src/content/walks/` 新增唯一 slug 的 `.md` 檔案。
3. 填齊 `title`、`city`、`district`、`durationMinutes`、`distanceKm`、`pace`、`bestTime`、`tags`、`cover`、`coverAlt`、`summary`、`transit`、`stops`、`sources`。
4. `stops` 至少包含兩站，每站要有時間、名稱、觀察說明與 `lookFor`。
5. 所有可查證的歷史、交通或地點描述都要在 `sources` 放入公開 URL。
6. 圖片必須有清楚的替代文字；不能把文字資訊只放在圖片裡。
7. 優先重用現有元件，不在路線頁重新寫卡片、meta 或時間線 markup。
8. 執行 `npm run check` 與 `npm run build`，確認索引頁與動態頁都能產生。

## 內容與文案規則

- 使用繁體中文、句子大小寫，不使用不必要的全大寫標籤。
- 以讀者的行走節奏描述路線，不用誇張的旅遊宣傳語。
- 一段文字只完成一個任務：交代方向、提供觀察提示或補充背景。
- `summary` 控制在適合路線卡閱讀的長度；詳細脈絡放在 Markdown 正文。
- 導覽文字要說清楚點擊後會去哪裡，例如「查看完整路線」。

## UI、無障礙與效能

- 不新增需要 API key 的地圖、分析或外部資料服務。
- 所有互動控制項都要能以鍵盤操作，並保留可見的 `:focus-visible` 樣式。
- 需支援 390px、768px、1440px 以上寬度。
- 動畫只用來提示頁面進入或使用者操作，並尊重 `prefers-reduced-motion`。
- 保持圖片本地化、尺寸合理、`alt` 有意義；裝飾性 SVG 使用空 alt 或以 CSS 呈現。
- 內文行長維持在適合閱讀的範圍，不用滿版文字牆。

## AI 修改協議

開始修改前先檢查目前路由、內容 schema 與既有元件。先提出最小的檔案變更，再實作；不要為了新增一條路線而改動整個設計系統。

如果需求涉及新型內容，先判斷它是否應該成為 Markdown schema 欄位；不要把內容硬編碼在 Astro component。若 schema 或設計規則改變，要同步更新 README 與本檔案。

回報時要說明：改了哪些行為、如何驗證、是否需要手動設定 GitHub Pages。不要把機密、token 或本機環境檔提交到 repository。

## Definition of Done

- 內容符合 schema，且有來源與圖片替代文字。
- 相關頁面能在 `npm run build` 中成功產生。
- 桌面與手機版排版可讀，鍵盤 focus 清楚。
- 導覽、圖片、CSS 與 `/island-walkbook/` base path 在 production build 中正確。
- 修改已在 README、內容規則或元件文件中留下必要說明。
