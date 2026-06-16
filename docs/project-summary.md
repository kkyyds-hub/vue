# 项目开发说明

## 1. 项目定位

本项目是一个以《燕云十六声》为主题的 Vue 前端资料展示平台，重点呈现“山河 + 武学 + 文化”的资料结构。页面以中文内容为主，结合少量英文栏目小字，形成适合期末展示的沉浸式资料站。

## 2. 页面结构

- `/`：首页，包含 Hero、江湖风貌轮播、资料入口、江湖四象与兵器谱预览。
- `/explore`：山河图志，展示清河、开封、河西、不见山和开封皇宫扩展空间。
- `/skills`：武学图鉴，提供搜索、分类筛选、资料级别筛选、详情查看与收藏。
- `/culture`：十六声文化，展示文化总纲、文化主题索引、详情面板与阅读线索。
- `/profile`：我的武林录，读取本地收藏并展示已入卷武学。

## 3. 组件清单

- 通用组件：`AppHeader`、`AppFooter`、`DetailModal`、`FavoriteButton`、`SearchBox`、`EmptyState`
- 首页组件：`HeroBanner`、`FeatureCard`、`WorldScenesCarousel`、`JianghuShowcase`、`WeaponSlider`
- 山河图志组件：`ExploreHero`、`RegionNavigator`、`RegionVisualPanel`、`RegionDetailPanel`、`ExploreTimeline`、`CultureIndex`
- 武学图鉴组件：`SkillsHero`、`SkillFilterBar`、`SkillCard`、`SkillStats`、`SkillDetailPanel`
- 十六声文化组件：`CultureHero`、`CultureFeatureGrid`、`CultureFeatureCard`、`CultureDetailPanel`、`CultureTimeline`

## 4. 数据文件说明

- `src/data/homeData.js`：首页标签、特色卡、轮播、江湖四象与兵器预览数据。
- `src/data/exploreData.js`：山河区域、附属卷、探索线索与文化索引数据。
- `src/data/skillsData.js`：武学分类、资料级别与武学条目数据。
- `src/data/cultureData.js`：十六声文化总纲、文化主题与阅读线索数据。
- `src/data/assetManifest.js`：本地图片与官方来源的对应关系。

## 5. 交互功能说明

- 首页轮播支持自动播放、左右切换和大图预览。
- 山河图志通过区域列表切换主图和区域详情。
- 武学图鉴支持关键词搜索、分类筛选、资料级别筛选、空状态提示和详情查看。
- 十六声文化支持点击文化卡片切换详情面板。
- 顶部导航支持页面跳转和当前路由高亮。

## 6. 本地存储收藏说明

武学图鉴的收藏状态使用 `localStorage` 保存，键名为 `yanyun-skill-favorites`。刷新页面后，收藏条目会继续保留，并在“我的武林录”中同步展示。

## 7. 官方素材来源说明

项目优先使用《燕云十六声》中文官网、主题页和官方新闻页中的公开素材，并在 `assetManifest.js` 中记录本地路径、来源页面、获取方式和风险备注。页面运行时不依赖远程图片 URL。

## 8. 后续可扩展方向

- 为山河图志增加更多区域附属卷和地点索引。
- 为武学图鉴补充更细的武器展示图与奇术图源。
- 为十六声文化增加独立文化专题详情。
- 为我的武林录加入探索记录、偏好筛选和收藏分组。
