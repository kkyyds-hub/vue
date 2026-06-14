export const heroKeywords = ['开放世界', '武侠动作', '山河探索', '传统文化']

export const scrollStats = [
  { value: '山河', label: '开放远行' },
  { value: '武学', label: '兵器交锋' },
  { value: '奇术', label: '万法入局' },
  { value: '画卷', label: '实机画面' },
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
    points: ['水岸、城郭、边地各有风物与传闻', '时间、天气与玩家行动牵动江湖变化', '地宫、奇遇与远景共同铺开开放世界'],
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

export const galleryItems = [
  {
    id: 'bamboo',
    title: '竹林幽径',
    subtitle: '清河林间、水雾与远行氛围',
    image: '/assets/yanyun/gallery-bamboo.jpg',
  },
  {
    id: 'village',
    title: '水车村落',
    subtitle: '田园聚落与山脚风物',
    image: '/assets/yanyun/gallery-village.jpg',
  },
  {
    id: 'tower',
    title: '塔影远山',
    subtitle: '夕照、古塔与远景层次',
    image: '/assets/yanyun/gallery-tower.jpg',
  },
  {
    id: 'flower-field',
    title: '幽花荒径',
    subtitle: '荒村、花海与隐秘线索',
    image: '/assets/yanyun/gallery-flower-field.jpg',
  },
]

export const weaponPreviews = [
  {
    id: 'sword',
    name: '剑',
    image: '/assets/yanyun/weapon-sword.jpg',
    role: '均衡近战',
    tags: ['灵动', '连击', '破势'],
    summary: '适合正面拆招与灵活追击，是进入江湖时最容易建立节奏感的兵器。',
    detail: '剑法讲究进退有度，基础攻防、连段衔接与破势反馈清晰，是最能体现游侠气质的兵器之一。',
  },
  {
    id: 'spear',
    name: '枪',
    image: '/assets/yanyun/weapon-spear.jpg',
    role: '中距压制',
    tags: ['突进', '控距', '穿刺'],
    summary: '以距离和起手优势见长，适合处理开阔场景中的强敌与群战。',
    detail: '枪的资料可围绕控距、突进、挑击与硬直管理展开，体现动作系统中的攻守博弈。',
  },
  {
    id: 'dual-blades',
    name: '双刀',
    image: '/assets/yanyun/weapon-dual-blades.jpg',
    role: '高速爆发',
    tags: ['迅捷', '爆发', '贴身'],
    summary: '强调近身压迫与连续输出，适合喜欢快节奏战斗的游侠。',
    detail: '双刀重在贴身压迫、闪避衔接与连续进攻，适合在短时间内打出明快的战斗节奏。',
  },
  {
    id: 'fan',
    name: '扇',
    image: '/assets/yanyun/weapon-fan.jpg',
    role: '灵巧牵制',
    tags: ['牵制', '身法', '雅致'],
    summary: '以轻巧姿态制造节奏变化，在资料呈现上兼具战斗与江湖气质。',
    detail: '扇适合呈现武侠作品中“以柔制刚”的审美，也能与控制、位移和远近切换玩法关联。',
  },
  {
    id: 'umbrella',
    name: '伞',
    image: '/assets/yanyun/weapon-umbrella.jpg',
    role: '攻防转换',
    tags: ['格挡', '反制', '机巧'],
    summary: '攻防一体，具备强烈辨识度，可作为平台中高记忆点的兵器条目。',
    detail: '伞的资料可强调防守、反击与机关感，适合在首页中承担“非传统武器”的视觉亮点。',
  },
  {
    id: 'mystic',
    name: '奇术',
    image: '/assets/yanyun/gallery-flower-field.jpg',
    role: '江湖破局',
    tags: ['太极', '点穴', '狮吼功'],
    summary: '不局限于兵器，奇术让探索、战斗与互动拥有更多解法。',
    detail: '奇术包含太极、点穴、狮吼功、蛤蟆功等武侠想象，既能入战，也能成为探索与互动的别样解法。',
  },
]

export const mapAreas = [
  {
    id: 'qinghe',
    name: '清河竹林',
    english: 'Qinghe',
    image: '/assets/yanyun/area-qinghe.jpg',
    status: '已收录',
    keywords: ['竹林', '水雾', '幽径'],
    summary: '竹影与水雾铺开清河的静谧气质，适合承载初入江湖的探索线索。',
    more: '林间视野层次清楚，适合整理采集、奇遇与隐秘路径。',
  },
  {
    id: 'village',
    name: '水车村落',
    english: 'Village',
    image: '/assets/yanyun/area-village.jpg',
    status: '重点整理',
    keywords: ['水车', '村舍', '田园'],
    summary: '水车、村舍与山脚景观构成烟火气入口，适合承接人物与支线传闻。',
    more: '村落空间有明显生活痕迹，适合整理 NPC、采集点和日常玩法。',
  },
  {
    id: 'tower',
    name: '塔影远山',
    english: 'Tower',
    image: '/assets/yanyun/area-tower.jpg',
    status: '线索归档',
    keywords: ['古塔', '夕照', '远山'],
    summary: '古塔与远山形成开阔视线，适合呈现大地图的远景尺度。',
    more: '夕照氛围明确，适合做路线推荐、观景点和拍照点资料。',
  },
  {
    id: 'unknown',
    name: '幽花荒径',
    english: 'Wilderness',
    image: '/assets/yanyun/area-flower-field.jpg',
    status: '江湖传闻',
    keywords: ['荒村', '花海', '隐秘'],
    summary: '幽蓝花海与荒村气质并置，适合收纳传闻、怪谈和隐秘线索。',
    more: '画面偏冷、气氛浓烈，可以作为探索专题中的悬疑入口。',
  },
]
