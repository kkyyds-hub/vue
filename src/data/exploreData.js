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
    status: '山河卷一',
    tone: '青绿水岸',
    image: yanyunAssets.worldWater.file,
    imageAlt: '山海水岸远景，作为清河初入江湖氛围图',
    visualNote: '水岸远景素材，用于呈现清河的开阔山水与起点气质。',
    title: '江湖起承之地',
    keywords: ['水岸', '村落', '原野', '洞窟', '初入江湖'],
    summary:
      '清河适合作为山河图志的开卷：水岸、原野与村落构成柔和的江湖起点，开阔自然风貌之下，也藏着洞窟、旧径与可继续追寻的探索线索。',
    clues: ['从水岸与村落辨认初入江湖的生活尺度', '沿原野、山径与洞窟建立探索路线', '留意白草青山之下的隐秘入口与地方传闻'],
  },
  {
    id: 'kaifeng',
    name: '开封',
    enName: 'Kaifeng',
    status: '城郭卷',
    tone: '朱红灯火',
    image: yanyunAssets.worldCulture.file,
    imageAlt: '灯火楼阁与舞乐场景，作为开封城郭烟火氛围图',
    visualNote: '灯火楼阁与人间舞乐素材，用于呈现开封的城郭烟火。',
    title: '城郭烟火之地',
    keywords: ['都城', '灯火', '市井', '宫阙', '人间'],
    summary:
      '开封更接近“入世”的一面：城郭、灯火、市井与宫阙把江湖放进人群之中。这里的重点不是单一风景，而是人声、街巷、楼阁与历史气息交织出的生活密度。',
    clues: ['观察城门、街巷、楼阁之间的空间层次', '把灯火、市井与人群作为风貌索引', '从建筑与日常活动里寻找人间线索'],
  },
  {
    id: 'hexi',
    name: '河西',
    enName: 'Hexi',
    status: '边地卷',
    tone: '风沙残阳',
    image: yanyunAssets.worldCombat.file,
    imageAlt: '风沙火光与战斗远景，作为河西边塞风沙氛围图',
    visualNote: '风沙火光素材，用于归纳河西的边塞、远行与压迫感。',
    title: '边塞风沙之地',
    keywords: ['风沙', '关隘', '残阳', '远行', '边地'],
    summary:
      '河西适合承接远行感：风沙、关隘与残阳把视线推向更开阔的边地。这里的图志写法应偏向地貌与氛围，不把尚未充分展开的信息写成固定剧情。',
    clues: ['以风沙色调和开阔视野建立边塞印象', '把关隘、远路与残阳作为导览关键词', '记录战斗气息与远行路线之间的关系'],
  },
  {
    id: 'bujian',
    name: '不见山',
    enName: 'Bujian Mountain',
    status: '迷踪卷',
    tone: '玄红迷雾',
    image: yanyunAssets.worldMystic.file,
    imageAlt: '国风解谜与夜色古观，作为不见山迷踪氛围图',
    visualNote: '国风解谜素材，用于呈现不见山的未知、迷雾与悬念。',
    title: '迷踪未明之地',
    keywords: ['山影', '迷雾', '未知', '残碑', '暗线'],
    summary:
      '不见山更适合作为悬念卷宗：山影、迷雾、残碑与暗线指向尚未完全揭开的区域气质。页面只做风貌归纳，保留未知感，不提前写死谜底。',
    clues: ['从山影、古观与迷雾建立神秘感', '把残碑、符号与暗线视作可追踪线索', '保留未知，不用确定结论替代探索悬念'],
  },
]

export const exploreTimeline = [
  {
    id: 'qinghe-start',
    title: '清河初入',
    keyword: '水岸开卷',
    summary: '从村落、原野与水岸进入江湖，把自然风貌和探索起点先串起来。',
  },
  {
    id: 'kaifeng-life',
    title: '开封入世',
    keyword: '城郭人间',
    summary: '走进街巷、灯火与人群，让江湖从山野延伸到更密集的市井生活。',
  },
  {
    id: 'hexi-road',
    title: '河西远行',
    keyword: '边地风沙',
    summary: '沿着关隘、残阳与风沙继续向外，把远行感和边塞气质纳入图志。',
  },
  {
    id: 'bujian-mystery',
    title: '不见山迷踪',
    keyword: '迷雾暗线',
    summary: '以山影、残碑和未知线索收束本卷，留下继续探索的悬念。',
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
