export const heroKeywords = ['开放世界', '武侠动作', '山河探索', '传统文化']

export const scrollStats = [
  { value: 'Open World', label: '江湖无界' },
  { value: 'Wuxia', label: '武学奇术' },
  { value: 'Qinghe', label: '山河区域' },
  { value: 'Culture', label: '文化建树' },
]

export const featureCards = [
  {
    id: 'open',
    label: '真开放',
    english: 'Open World',
    title: '无缝山河，自由寻踪',
    summary: '从清河水岸到开封市井，再到河西风沙，以区域线索串联探索、奇遇与收集。',
    points: ['无缝地图', '山河探索', '奇遇线索'],
  },
  {
    id: 'wuxia',
    label: '真武侠',
    english: 'Wuxia',
    title: '以武入局，见招拆招',
    summary: '围绕武学、奇术与门派传闻整理资料，让招式、心法与战斗节奏更容易被理解。',
    points: ['武学体系', '奇术妙用', '见招拆招'],
  },
  {
    id: 'action',
    label: '真动作',
    english: 'Action',
    title: '十八般兵器，攻守有度',
    summary: '从剑、枪、双刀到扇与伞，记录不同武器的定位、关键词与战斗反馈。',
    points: ['十八般武器', '攻守博弈', '战斗反馈'],
  },
  {
    id: 'echo',
    label: '真共鸣',
    english: 'Resonance',
    title: '百工百器，万象人间',
    summary: '建筑营造、历法天象、民俗游艺、岐黄医术等文化线索，构成更完整的江湖底色。',
    points: ['百工百器', '民俗游艺', '岐黄医术'],
  },
]

export const showcaseTabs = [
  { key: 'world', label: '山河' },
  { key: 'combat', label: '武学' },
  { key: 'mystic', label: '奇术' },
  { key: 'culture', label: '文化' },
]

export const showcasePanels = {
  world: {
    title: '以山河为卷',
    subtitle: '清河、开封、河西等区域承载不同地貌、城镇与探索密度。',
    points: ['区域资料按地貌、市井、地宫与奇遇线索归档', '以时间、天气与玩家行动串联探索体验', '保留后续地图筛选与收藏入口'],
  },
  combat: {
    title: '以武学为笔',
    subtitle: '剑、枪、双刀、扇、伞等兵器共同构成动作与策略层次。',
    points: ['记录武器定位、出手节奏与适用场景', '整理门派招式、连段思路与克制关系', '为完整武学图鉴页预留数据结构'],
  },
  mystic: {
    title: '奇术入局，动静皆法',
    subtitle: '太极、点穴、狮吼功、蛤蟆功等奇术让江湖探索不止于战斗。',
    points: ['按控制、位移、破局与趣味交互分类', '强调武侠想象与开放世界互动结合', '为后续奇术演示组件预留扩展字段'],
  },
  culture: {
    title: '万象人间，有物有情',
    subtitle: '百工百器、建筑营造、历法天象与民俗游艺，让资料平台不只收录战力。',
    points: ['记录传统文化元素与场景用途', '将医术、营造、游艺等内容纳入探索线索', '以收藏与专题页承接深度内容'],
  },
}

export const weaponPreviews = [
  {
    id: 'sword',
    name: '剑',
    role: '均衡近战',
    tags: ['灵动', '连击', '破势'],
    summary: '适合正面拆招与灵活追击，是进入江湖时最容易建立节奏感的兵器。',
    detail: '剑法讲究进退有度，适合展示基础攻防、连段衔接与破势反馈。后续图鉴页可继续补充招式来源、适配奇术与实战场景。',
  },
  {
    id: 'spear',
    name: '枪',
    role: '中距压制',
    tags: ['突进', '控距', '穿刺'],
    summary: '以距离和起手优势见长，适合处理开阔场景中的强敌与群战。',
    detail: '枪的资料可围绕控距、突进、挑击与硬直管理展开，体现动作系统中的攻守博弈。',
  },
  {
    id: 'dual-blades',
    name: '双刀',
    role: '高速爆发',
    tags: ['迅捷', '爆发', '贴身'],
    summary: '强调近身压迫与连续输出，适合喜欢快节奏战斗的游侠。',
    detail: '双刀卡片后续可扩展攻速、连击收益、闪避衔接等字段，作为武学图鉴的轻量预览。',
  },
  {
    id: 'fan',
    name: '扇',
    role: '灵巧牵制',
    tags: ['牵制', '身法', '雅致'],
    summary: '以轻巧姿态制造节奏变化，在资料呈现上兼具战斗与江湖气质。',
    detail: '扇适合呈现武侠作品中“以柔制刚”的审美，也能与控制、位移和远近切换玩法关联。',
  },
  {
    id: 'umbrella',
    name: '伞',
    role: '攻防转换',
    tags: ['格挡', '反制', '机巧'],
    summary: '攻防一体，具备强烈辨识度，可作为平台中高记忆点的兵器条目。',
    detail: '伞的资料可强调防守、反击与机关感，适合在首页中承担“非传统武器”的视觉亮点。',
  },
  {
    id: 'mystic',
    name: '奇术',
    role: '江湖破局',
    tags: ['太极', '点穴', '狮吼功'],
    summary: '不局限于兵器，奇术让探索、战斗与互动拥有更多解法。',
    detail: '奇术包含太极、点穴、狮吼功、蛤蟆功等武侠想象，可在后续页面细分为战斗、探索、趣味交互等类型。',
  },
]

export const mapAreas = [
  {
    id: 'qinghe',
    name: '清河',
    english: 'Qinghe',
    status: '已收录',
    keywords: ['水岸', '村镇', '初入江湖'],
    summary: '水色与烟火气交织的起点区域，适合承载新手游侠的探索线索。',
    more: '后续可补充地宫入口、支线人物、采集点与奇遇条件。',
  },
  {
    id: 'kaifeng',
    name: '开封',
    english: 'Kaifeng',
    status: '重点整理',
    keywords: ['市井', '楼阁', '人间百态'],
    summary: '繁华城郭与江湖暗线并行，适合整理人物、商铺与城内事件。',
    more: '可扩展为城区地图、NPC 索引和市井玩法专题。',
  },
  {
    id: 'hexi',
    name: '河西',
    english: 'Hexi',
    status: '线索归档',
    keywords: ['风沙', '边地', '远行'],
    summary: '以苍茫地貌和远行感形成对比，适合呈现大地图探索尺度。',
    more: '未来可加入风物志、路线推荐与隐藏挑战记录。',
  },
  {
    id: 'unknown',
    name: '待探索',
    english: 'Unknown',
    status: '未开放',
    keywords: ['新版本', '传闻', '预留'],
    summary: '为新版本、活动区域与玩家发现预留入口，保持资料平台可迭代。',
    more: '当前仅展示占位状态，不跳转真实内容。',
  },
]
