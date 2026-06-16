import { yanyunAssets } from './assetManifest'

export const exploreHero = {
  title: '山河图志',
  subtitle: '从清河水岸到开封灯火，从河西风沙到不见山迷踪，沿着区域风貌读懂燕云江湖。',
  image: yanyunAssets.hero.file,
  imageAlt: '燕云十六声山河远景',
}

export const exploreStats = [
  { value: '四境', label: '区域卷宗' },
  { value: '风貌', label: '山河画面' },
  { value: '线索', label: '探索索引' },
  { value: '人间', label: '文化万象' },
]

export const exploreRegions = [
  {
    id: 'qinghe',
    name: '清河',
    enName: 'Qinghe',
    status: '已开放',
    tone: '故土原野',
    image: yanyunAssets.worldWater.file,
    imageAlt: '山海水岸远景，作为清河初入江湖氛围图',
    visualNote: '当前沿用水岸远景素材；下一步建议替换为清河主题页总览或神仙渡相关官方图。',
    title: '江湖起承之地 / 故土与故事原点',
    keywords: ['原野', '村庄', '酒乡', '竹林', '洞窟', '旧居'],
    summary:
      '清河是游侠归心的起点。原野、村庄、酒乡与竹林旧居交织成最初的江湖记忆，而白草青山之下，洞窟与旧事又悄然通向更深处。',
    clues: ['从原野、村庄与酒乡辨认故土气质', '以竹林旧居、旧闻与归乡感作为故事入口', '留意地下洞窟、旧径与地方传闻中的探索秘密'],
    recommendedFileName: 'region-qinghe-main.webp',
    sourceUrl: 'https://www.yysls.cn/2024/yydsj/qh/',
    riskNote: '当前图片为通用山河远景，内容稳定但不是清河主题页直接截图。',
  },
  {
    id: 'kaifeng',
    name: '开封',
    enName: 'Kaifeng',
    status: '已开放',
    tone: '百业都城',
    image: yanyunAssets.worldCulture.file,
    imageAlt: '灯火楼阁与舞乐场景，作为开封城郭烟火氛围图',
    visualNote: '当前沿用灯火楼阁素材；下一步建议替换为开封主题页樊楼、金街或常平仓相关画面。',
    title: '繁华都城 / 百业中枢 / 江湖繁华渊薮',
    keywords: ['樊楼', '金街', '常平仓', '开封府', '角门里', '宫城', '市井'],
    summary:
      '开封不是单纯的繁华背景，而是百业、人群、法度与暗潮交织的都城。樊楼与金街写出声色烟火，常平仓、开封府、角门里与宫城则把阶层、秩序和地下势力一并纳入图志。',
    clues: ['以樊楼、金街与市井灯火建立都城烟火', '从常平仓与开封府观察民生、法度与治理结构', '把角门里、宫城与隐秘空间作为暗潮线索'],
    recommendedFileName: 'region-kaifeng-main.webp',
    sourceUrl: 'https://www.yysls.cn/',
    riskNote: '当前图片用于城郭烟火氛围，后续应替换为开封主题页或官方新闻的明确画面。',
  },
  {
    id: 'hexi',
    name: '河西',
    enName: 'Hexi',
    status: '已开放',
    tone: '诗意边塞',
    image: yanyunAssets.worldCombat.file,
    imageAlt: '风沙火光与战斗远景，作为河西边塞风沙氛围图',
    visualNote: '当前沿用风沙火光素材；下一步建议替换为河西版本新闻中的边塞预研图或文章头图。',
    title: '诗意边塞 / 大漠史诗 / 历史回响',
    keywords: ['玉门关', '黄沙', '残阳', '凉州', '边塞诗', '时间回溯'],
    summary:
      '河西不是单调沙漠，而是一卷取意于诗的边塞长卷。玉门关、凉州、黄沙与残阳共同构成大漠史诗感，时间回溯与历史残响则让远行不止于地貌观看。',
    clues: ['以玉门关、凉州与边塞诗意建立区域识别', '把黄沙、残阳和远路作为大漠长卷的视觉线索', '保留时间回溯与历史回响的氛围，不写死具体剧情'],
    recommendedFileName: 'region-hexi-main.webp',
    sourceUrl: 'https://www.yysls.cn/',
    riskNote: '当前图片为风沙战斗氛围图，适合临时承接河西气质但不是专属主图。',
  },
  {
    id: 'bujian',
    name: '不见山',
    enName: 'Bujian Mountain',
    status: '概念卷宗 / 后续区域',
    tone: '机关山城',
    image: yanyunAssets.worldMystic.file,
    imageAlt: '国风解谜与夜色古观，作为不见山迷踪氛围图',
    visualNote: '当前沿用国风解谜素材；下一步建议替换为不见山官方新闻或预研图。',
    title: '墨门机关山城 / 求真之地',
    keywords: ['峰林', '云海', '机关', '水利', '墨家', '求真'],
    summary:
      '不见山当前应作为后续区域的概念卷宗处理。它的重点不是玄幻仙山，而是峰林云海、墨门机括、水利设施与求真精神交织出的山城气质。',
    clues: ['以峰林、云海和绝壁建立山水奇景', '把机关、水利与墨家精神作为风貌归纳', '标注为后续区域，不提前写死剧情或机制'],
    recommendedFileName: 'region-bujian-concept.webp',
    sourceUrl: 'https://www.yysls.cn/',
    riskNote: '当前素材只承接机关解谜氛围，不应被标注为完整已开放区域实景。',
  },
]

export const exploreExtensions = [
  {
    id: 'kaifeng-palace',
    name: '开封皇宫',
    enName: 'The Imperial Palace',
    status: '开封扩展',
    title: '开封扩展区域 / 支线镇守空间',
    keywords: ['宫墙', '秘库', '天牢', '水牢', '殿宇', '禁中'],
    summary:
      '开封皇宫不作为独立大世界主区域处理，更适合放在开封的扩展卷中。页面只记录宫墙、秘库、天牢、水牢与禁中殿宇的空间气质，不展开深层剧情。',
    recommendedFileName: 'region-palace-water-prison.webp',
    sourceUrl: 'https://www.yysls.cn/news/official/20260313/37780_1291029.html',
    riskNote: '更偏支线与镇守空间，不宜当作首页或山河图志主区域。',
  },
]

export const exploreTimeline = [
  {
    id: 'qinghe-start',
    title: '清河初入',
    keyword: '故土开卷',
    summary: '从原野、村庄、酒乡与竹林旧居进入江湖，把游侠故土和故事原点先串起来。',
  },
  {
    id: 'kaifeng-life',
    title: '开封入世',
    keyword: '百业暗潮',
    summary: '走进樊楼、金街、常平仓与角门里，让都城烟火、法度秩序和暗潮并置。',
  },
  {
    id: 'hexi-road',
    title: '河西远行',
    keyword: '边塞诗卷',
    summary: '沿玉门关、凉州与黄沙残阳继续远行，把诗意边塞和历史回响纳入图志。',
  },
  {
    id: 'bujian-mystery',
    title: '不见山迷踪',
    keyword: '机关求真',
    summary: '以峰林、云海、机关与水利线索收束本卷，作为后续区域的概念卷宗。',
  },
]

export const cultureIndexes = [
  {
    id: 'architecture',
    name: '建筑营造',
    enName: 'Architecture',
    summary: '从村落屋舍到城郭楼阁，建筑不是背景板，而是辨认区域气质和人间秩序的入口。',
  },
  {
    id: 'crafts',
    name: '百工百器',
    enName: 'Crafts',
    summary: '器物、工艺与日常用具共同铺开江湖生活，让探索不只停留在战斗和远景。',
  },
  {
    id: 'calendar',
    name: '历法天象',
    enName: 'Calendar',
    summary: '时间、天气与天象变化影响观看山河的方式，也让同一片风景拥有不同情绪。',
  },
  {
    id: 'folk-games',
    name: '民俗游艺',
    enName: 'Folk Games',
    summary: '街巷娱乐、节令活动与民间玩法，把江湖写得更有人声，也更接近真实生活。',
  },
  {
    id: 'medicine',
    name: '岐黄医术',
    enName: 'Medicine',
    summary: '医术线索让人物、地方与生计彼此关联，为山河图志补上一层民生纹理。',
  },
  {
    id: 'stunts',
    name: '中式绝活',
    enName: 'Chinese Stunts',
    summary: '点穴、轻功、奇术和市井绝活相互映照，构成更鲜明的武侠想象。',
  },
  {
    id: 'city-life',
    name: '市井烟火',
    enName: 'City Life',
    summary: '摊贩、人群、灯火与街谈巷语，让开封等城郭区域从景观变成可阅读的人间。',
  },
  {
    id: 'rumor',
    name: '江湖传闻',
    enName: 'Rumors',
    summary: '传闻适合串联区域暗线：不剧透结论，只保留可追踪、可回望的探索方向。',
  },
]
