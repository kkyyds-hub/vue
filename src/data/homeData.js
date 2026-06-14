import { yanyunAssets } from './assetManifest'

export const heroKeywords = ['开放世界', '武侠动作', '山河探索', '传统文化']

export const scrollStats = [
  { value: '山河', label: '开放远行' },
  { value: '武学', label: '兵器交锋' },
  { value: '奇术', label: '万法入局' },
  { value: '风貌', label: '画面归档' },
]

export const featureCards = [
  {
    id: 'open',
    label: '真开放',
    english: 'Open World',
    title: '无缝山河，自由寻踪',
    summary: '以山海远景、城郭烟火与探索线索串联开放世界，不把未确认画面强行标成具体地点。',
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
    summary: '从可靠素材出发整理兵器与武学气质，记录不同流派的定位、关键词与战斗反馈。',
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
    subtitle: '山海、城郭与远景承载不同探索密度，也让资料入口更像一卷可展开的江湖图。',
    points: ['山水远景、城郭生活与隐秘路径各有风物', '时间、天气与玩家行动牵动江湖变化', '地宫、奇遇与远景共同铺开开放世界'],
  },
  combat: {
    title: '以武学为笔',
    subtitle: '剑、枪、双刀、扇、伞等兵器共同构成动作与策略层次。',
    points: ['兵器定位鲜明，出手节奏各不相同', '门派招式、连段思路与克制关系彼此交织', '攻守转换与战斗反馈更接近真正的武侠较量'],
  },
  mystic: {
    title: '奇术入局，动静皆法',
    subtitle: '太极、点穴、狮吼功、蛤蟆功等奇术让江湖探索不止于战斗。',
    points: ['控制、位移、破局与趣味交互各成门道', '武侠想象与开放世界互动彼此呼应', '一招一式都可能成为探索江湖的钥匙'],
  },
  culture: {
    title: '万象人间，有物有情',
    subtitle: '百工百器、建筑营造、历法天象与民俗游艺，让资料平台不只收录战力。',
    points: ['传统工艺与场景用途藏在市井细节里', '医术、营造、游艺等百业共同构成江湖生活', '从战斗之外看见一个更完整的人间'],
  },
}

export const worldScenes = [
  {
    id: 'open-world',
    title: '山海远行',
    subtitle: '山海、远景与初入江湖的开阔感。',
    image: yanyunAssets.worldWater.file,
    sourceKey: 'worldWater',
    tags: ['山海', '远行', '开放世界'],
  },
  {
    id: 'city-life',
    title: '城郭烟火',
    subtitle: '古代城镇、人群与生活气息。',
    image: yanyunAssets.worldCity.file,
    sourceKey: 'worldCity',
    tags: ['城郭', '市井', '人间'],
  },
  {
    id: 'mystic',
    title: '中式谜境',
    subtitle: '奇术、谜题与中式志怪氛围。',
    image: yanyunAssets.worldMystic.file,
    sourceKey: 'worldMystic',
    tags: ['奇术', '谜境', '志怪'],
  },
  {
    id: 'combat',
    title: '兵器交锋',
    subtitle: '山河之间，武学动作与战斗反馈交织。',
    image: yanyunAssets.worldCombat.file,
    sourceKey: 'worldCombat',
    tags: ['武学', '动作', '战斗'],
  },
  {
    id: 'culture',
    title: '舞乐人间',
    subtitle: '城楼、舞乐与万象人间的文化气质。',
    image: yanyunAssets.worldCulture.file,
    sourceKey: 'worldCulture',
    tags: ['舞乐', '文化', '人间'],
  },
]

export const weaponPreviews = [
  {
    id: 'sword',
    name: '剑',
    image: yanyunAssets.weaponSword.file,
    role: '均衡近战',
    tags: ['灵动', '连击', '破势'],
    summary: '适合正面拆招与灵活追击，是进入江湖时最容易建立节奏感的兵器。',
    detail: '剑法讲究进退有度，基础攻防、连段衔接与破势反馈清晰，是最能体现游侠气质的兵器之一。',
  },
  {
    id: 'martial',
    name: '百门武学',
    image: yanyunAssets.weaponMartial.file,
    role: '流派变化',
    tags: ['百门', '招式', '身法'],
    summary: '不同流派带来不同的节奏、姿态和战斗理解。',
    detail: '百门武学不只是一组技能，而是让角色在战斗、探索和身份表达中拥有更多变化。',
  },
  {
    id: 'fan',
    name: '扇',
    image: yanyunAssets.weaponFan.file,
    role: '灵巧牵制',
    tags: ['牵制', '身法', '雅致'],
    summary: '以轻巧姿态制造节奏变化，在资料呈现上兼具战斗与江湖气质。',
    detail: '扇适合呈现武侠作品中“以柔制刚”的审美，也能与控制、位移和远近切换玩法关联。',
  },
  {
    id: 'ice',
    name: '冷色兵刃',
    image: yanyunAssets.weaponIce.file,
    role: '风格展示',
    tags: ['锋刃', '冷色', '流派'],
    summary: '以冷色视觉呈现兵刃与角色姿态，强调武学风格差异。',
    detail: '该图用于武器风格展示，不强行绑定到具体兵器，避免素材误用。',
  },
]
