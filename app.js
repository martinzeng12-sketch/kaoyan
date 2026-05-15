function createId() {
  if (globalThis.crypto?.randomUUID) {
    return globalThis.crypto.randomUUID();
  }
  return `school-${Date.now()}-${Math.random().toString(36).slice(2)}`;
}

function readStoredSchools(key) {
  try {
    return globalThis.localStorage?.getItem(key) || null;
  } catch {
    return null;
  }
}

function writeStoredSchools(key, value) {
  try {
    globalThis.localStorage?.setItem(key, value);
  } catch {
    // file:// or privacy settings can block storage; the in-memory table still works.
  }
}

const seedSchools = [
  {
    id: createId(),
    name: "中山大学",
    city: "广州 / 深圳 / 珠海",
    major: "985 / 综合类 / 医学、人文、经管、理工",
    priority: "冲刺",
    status: "待核验",
    source: "https://graduate.sysu.edu.cn/zsw/index.php",
    note: "第一梯队冲刺校。先核对招生目录、推免比例、复试线和校区安排。"
  },
  {
    id: createId(),
    name: "华南理工大学",
    city: "广州",
    major: "985 / 工科强校 / 管理、建筑、材料、计算机",
    priority: "冲刺",
    status: "待核验",
    source: "https://yz.scut.edu.cn/",
    note: "工科和管理方向冲刺校。重点看专业课大纲、复试差额比例。"
  },
  {
    id: createId(),
    name: "暨南大学",
    city: "广州 / 深圳 / 珠海",
    major: "211 / 经管、新闻传播、文学、医学",
    priority: "稳妥",
    status: "已收藏",
    source: "https://yz.jnu.edu.cn/",
    note: "热门专业竞争不低，适合把近三年复试名单和录取名单单独整理。"
  },
  {
    id: createId(),
    name: "华南师范大学",
    city: "广州 / 佛山",
    major: "211 / 教育学、心理学、文学、计算机",
    priority: "稳妥",
    status: "重点跟进",
    source: "https://yz.scnu.edu.cn/",
    note: "教育类和心理类重点关注。看参考书、分方向招生和复试笔试科目。"
  },
  {
    id: createId(),
    name: "华南农业大学",
    city: "广州",
    major: "双一流 / 农学、食品、生物、兽医、经管",
    priority: "稳妥",
    status: "待核验",
    source: "https://yzb.scau.edu.cn/",
    note: "农学、食品、生物相关方向值得放入稳妥梯队，也可作交叉学科备选。"
  },
  {
    id: createId(),
    name: "广州医科大学",
    city: "广州",
    major: "双一流 / 临床医学、公共卫生、基础医学",
    priority: "冲刺",
    status: "待核验",
    source: "https://yjs.gzhmu.edu.cn/",
    note: "医学方向强校。必须核对附属医院、专硕规培、复试科室安排。"
  },
  {
    id: createId(),
    name: "广州中医药大学",
    city: "广州",
    major: "双一流 / 中医学、中药学、中西医结合",
    priority: "稳妥",
    status: "待核验",
    source: "https://yjsy.gzucm.edu.cn/zsgz1/ssszs/1.htm",
    note: "中医药方向核心候选，适合单独整理导师、医院和方向。"
  },
  {
    id: createId(),
    name: "南方医科大学",
    city: "广州",
    major: "医学 / 临床、基础医学、公共卫生、护理",
    priority: "冲刺",
    status: "待核验",
    source: "https://portal.smu.edu.cn/yzw/index.htm",
    note: "医学类竞争强，优先核验各学院复试细则和拟录取名单。"
  },
  {
    id: createId(),
    name: "南方科技大学",
    city: "深圳",
    major: "新型研究型 / 理工、计算机、材料、生物",
    priority: "冲刺",
    status: "待核验",
    source: "https://yzbm.sustech.edu.cn/",
    note: "科研导向明显，注意普通招考、推免比例和学院要求。"
  },
  {
    id: createId(),
    name: "深圳大学",
    city: "深圳",
    major: "综合类 / 计算机、设计、经管、建筑、法学",
    priority: "稳妥",
    status: "待核验",
    source: "https://yz.szu.edu.cn/",
    note: "城市机会强，注意住宿、学费、奖助政策和竞争热度。"
  },
  {
    id: createId(),
    name: "广东工业大学",
    city: "广州",
    major: "工科 / 自动化、计算机、机械、材料、管理",
    priority: "稳妥",
    status: "待核验",
    source: "https://yzw.gdut.edu.cn/",
    note: "适合和华工、深大同方向做梯度对比。"
  },
  {
    id: createId(),
    name: "广州大学",
    city: "广州",
    major: "综合类 / 教育、土木、计算机、数学、管理",
    priority: "保底",
    status: "待核验",
    source: "https://yjsy.gzhu.edu.cn/",
    note: "把学院官网通知也加入收藏，避免只看研究生院首页。"
  },
  {
    id: createId(),
    name: "广东外语外贸大学",
    city: "广州",
    major: "语言外贸 / 外语、翻译、国商、法学、新闻传播",
    priority: "稳妥",
    status: "待核验",
    source: "https://yz.gdufs.edu.cn/",
    note: "语言、翻译、国际商务方向重点候选，注意专业课真题和口试要求。"
  },
  {
    id: createId(),
    name: "广东财经大学",
    city: "广州 / 佛山",
    major: "财经政法 / 金融、会计、税务、法学、新闻传播",
    priority: "保底",
    status: "待核验",
    source: "https://yzb.gdufe.edu.cn/",
    note: "经管、法学类可做稳妥或保底，重点看专硕招生人数和复试线。"
  },
  {
    id: createId(),
    name: "汕头大学",
    city: "汕头",
    major: "综合类 / 医学、新闻传播、工科、商科",
    priority: "保底",
    status: "待核验",
    source: "https://www.gs.stu.edu.cn/",
    note: "粤东核心候选，适合愿意接受非广深城市但看重性价比的方案。"
  },
  {
    id: createId(),
    name: "东莞理工学院",
    city: "东莞",
    major: "理工应用 / 计算机、机械、材料、化工",
    priority: "保底",
    status: "待核验",
    source: "https://yzw.dgut.edu.cn/",
    note: "制造业城市资源好，理工科可作为保底或调剂备选。"
  },
  {
    id: createId(),
    name: "广东技术师范大学",
    city: "广州",
    major: "师范应用 / 教育、职教、民族学、计算机",
    priority: "保底",
    status: "待核验",
    source: "https://yjszs.gpnu.edu.cn/index.htm",
    note: "教育类、职教师资方向可重点看，适合与华师、广大做梯度。"
  },
  {
    id: createId(),
    name: "广东海洋大学",
    city: "湛江",
    major: "海洋水产 / 食品、海洋科学、水产、农学",
    priority: "保底",
    status: "待核验",
    source: "https://yjs.gdou.edu.cn/",
    note: "海洋、水产、食品方向有特色；城市因素要和职业规划一起权衡。"
  },
  {
    id: createId(),
    name: "广东药科大学",
    city: "广州 / 中山 / 云浮",
    major: "药学医药 / 药学、中药学、公共卫生",
    priority: "保底",
    status: "待核验",
    source: "https://yjsy.gdpu.edu.cn/",
    note: "药学、公卫相关方向可纳入医学类备选池。"
  },
  {
    id: createId(),
    name: "广东医科大学",
    city: "湛江 / 东莞",
    major: "医学 / 临床、基础医学、药学、护理",
    priority: "保底",
    status: "待核验",
    source: "https://yjsxy.gdmu.edu.cn/",
    note: "医学方向保底备选，注意校区、医院基地和专硕要求。"
  },
  {
    id: createId(),
    name: "佛山大学",
    city: "佛山",
    major: "应用综合 / 机械、材料、土木、教育",
    priority: "保底",
    status: "待核验",
    source: "https://www.fosu.edu.cn/yanjiusheng/",
    note: "珠三角应用型备选，建议核验学校更名后的研招入口和专业目录。"
  },
  {
    id: createId(),
    name: "五邑大学",
    city: "江门",
    major: "应用综合 / 纺织、机械、电子信息、管理",
    priority: "保底",
    status: "待核验",
    source: "https://www.wyu.edu.cn/yjsc/",
    note: "适合做珠三角非广深保底池，重点看是否有你的一级学科。"
  }
];

const imageByScene = {
  guangzhou: "https://images.unsplash.com/photo-1599571234909-29ed5d1321d6?auto=format&fit=crop&w=1100&q=80",
  shenzhen: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1100&q=80",
  campus: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1100&q=80",
  lab: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?auto=format&fit=crop&w=1100&q=80",
  medical: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1100&q=80",
  art: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1100&q=80",
  ocean: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1100&q=80"
};

const officialImages = {
  "中山大学": "https://www.sysu.edu.cn/images/ztpic20250523-sysu.jpg",
  "华南理工大学": "https://yz.scut.edu.cn/_upload/article/images/de/ce/971b26dd46f2846b9bedd3c550c8/c4c0574f-16ec-4835-a199-d5b0499dd1f3.jpg",
  "暨南大学": "https://yz.jnu.edu.cn/_upload/article/images/49/14/5f2797a74f31b03f56a21a24df48/0b4f7fad-7042-43fd-ad75-9bc7a535b723.jpg",
  "华南师范大学": "http://statics.scnu.edu.cn/pics/yz/2015/1007/20151007064502611.jpg",
  "华南农业大学": "https://yzb.scau.edu.cn/_upload/article/images/b8/15/484afd6040b19b4b1614ecb4806d/cc9c1f6e-d982-41ac-aa4f-4f34800ec3b2.jpg",
  "广州医科大学": "https://www.gzhmu.edu.cn/banner/20260430.jpg",
  "广州中医药大学": "https://www.gzucm.edu.cn/images/bann1.jpg",
  "南方医科大学": "https://portal.smu.edu.cn/yzw/images/xiongfeng.png",
  "南方科技大学": "https://yzbm.sustech.edu.cn/login/images/login_banner.png",
  "深圳大学": "https://yz.szu.edu.cn/images/img1.png",
  "广东工业大学": "https://yzw.gdut.edu.cn/images/banner01.png",
  "广州大学": "https://yjsy.gzhu.edu.cn/images/banner.jpg",
  "广东外语外贸大学": "https://yz.gdufs.edu.cn/images/1.jpg",
  "广东财经大学": "https://yzb.gdufe.edu.cn/_upload/article/images/b0/1e/459c52aa42a5a4377dad70355bac/8a3f4fcc-2072-4b71-a404-3a13456c2390.png",
  "汕头大学": "https://www.gs.stu.edu.cn/static/img/banner/12.jpg",
  "东莞理工学院": "https://yzw.dgut.edu.cn/images2025/banner01.jpg",
  "广东技术师范大学": "https://yjszs.gpnu.edu.cn/images/tushuguan2.jpg",
  "广东海洋大学": "https://www.gdou.edu.cn/banner/xuexijiaoyuzhuyedatu.jpg",
  "广东药科大学": "https://www.gdpu.edu.cn/images/banner.jpg",
  "广东医科大学": "https://yjsxy.gdmu.edu.cn/images/banner.png",
  "佛山大学": "https://www.fosu.edu.cn/favicon.ico",
  "五邑大学": "https://www.wyu.edu.cn/2023ym/images/e-bg1.jpg",
  "北京大学深圳研究生院": "https://www.pkusz.edu.cn/images22/part5-bg.jpg",
  "清华大学深圳国际研究生院": "https://www.sigs.tsinghua.edu.cn/_upload/article/images/2e/6c/cad69f324a9f9db75a49211bb3c5/52467097-ae8f-40e8-9463-62d43ed98100.jpg",
  "哈尔滨工业大学（深圳）": "https://www.hitsz.edu.cn/_upload/article/images/d5/31/c87f68f24801bac1fa8062cc82c0/911844ad-45e7-4f1b-ad02-d4fd2472b07c.jpg",
  "香港中文大学（深圳）": "https://www.cuhk.edu.cn/sites/webmaster.prod1.dpsite04.cuhk.edu.cn/files/styles/crop_freeform/public/2023-07/88899.jpg?itok=fNFhiQRO",
  "深圳北理莫斯科大学": "https://www.smbu.edu.cn/images/cont3_pic.jpg",
  "深圳技术大学": "https://www.sztu.edu.cn/images/sy-vrpic.jpg",
  "北京师范大学珠海校区": "https://www.bnu.edu.cn/images/2026-05/490f5a79bce24209a53267cf46959906.jpg",
  "北京师范大学-香港浸会大学联合国际学院": "https://www.bnbu.edu.cn/en_img/about_pic-2024.jpg",
  "广东以色列理工学院": "https://www.gtiit.edu.cn/upload/banner/6dc14709-754f-426c-9c85-42bccee612b9.jpg",
  "广州体育学院": "https://grad.gzsport.edu.cn/template/default/index/images/picTz01.jpg",
  "广州美术学院": "https://yjs.gzarts.edu.cn/top_bg.jpg",
  "星海音乐学院": "https://yjsb.xhcom.edu.cn/favicon.ico",
  "仲恺农业工程学院": "https://news.zhku.edu.cn/system/_content/download.jsp?owner=1315402037&urltype=news.DownloadAttachUrl&wbfileid=05FBCD67E0AC76491E1CB825F81AEF4D",
  "广东金融学院": "https://yjs.gduf.edu.cn/images/2024biyezhao.jpg",
  "岭南师范学院": "https://d.lingnan.edu.cn/yjsc/images/P2-1.jpg",
  "广东石油化工学院": "https://www.gdupt.edu.cn/images/ban1.jpg",
  "肇庆学院": "https://www.zqu.edu.cn/images/25/11/10/11sp5c4a1x/Topicsimg1.jpg",
  "惠州学院": "https://www.hzu.edu.cn/_upload/article/images/42/35/0b15b61b4be7b2933129c01e482f/fb23c4c1-7f18-47c3-bfd1-f53191f2f97c.jpg",
  "广州航海学院": "https://www.gzmtu.edu.cn/__local/B/DC/F6/A21E86C527179E3D90CC708A53A_D1AA1B6D_5A9FB.jpg",
  "广东第二师范学院": "https://www.gdei.edu.cn/_upload/article/images/e2/91/873ee42945548103f7119d69c00c/3a9d633c-7bfd-4b07-9d20-8f4cf25e49f3.jpg",
  "广东省社会科学院": "https://www.gdass.gov.cn/favicon.ico",
  "中国科学院深圳先进技术研究院": "https://www.siat.ac.cn/zjsiat/images/P020241220633548187493.png"
};

const cachedOfficialImages = {
  "中山大学": "./official-images/01-中山大学.jpg",
  "华南理工大学": "./official-images/02-华南理工大学.jpg",
  "暨南大学": "./official-images/03-暨南大学.jpg",
  "华南师范大学": "./official-images/04-华南师范大学.jpg",
  "华南农业大学": "./official-images/05-华南农业大学.jpg",
  "广州医科大学": "./official-images/06-广州医科大学.jpg",
  "广州中医药大学": "./official-images/07-广州中医药大学.jpg",
  "南方医科大学": "./official-images/08-南方医科大学.png",
  "南方科技大学": "./official-images/09-南方科技大学.png",
  "深圳大学": "./official-images/10-深圳大学.png",
  "广东工业大学": "./official-images/11-广东工业大学.png",
  "广州大学": "./official-images/12-广州大学.jpg",
  "广东外语外贸大学": "./official-images/13-广东外语外贸大学.jpg",
  "广东财经大学": "./official-images/14-广东财经大学.png",
  "汕头大学": "./official-images/15-汕头大学.jpg",
  "东莞理工学院": "./official-images/16-东莞理工学院.jpg",
  "广东技术师范大学": "./official-images/17-广东技术师范大学.jpg",
  "广东海洋大学": "./official-images/18-广东海洋大学.jpg",
  "广东药科大学": "./official-images/19-广东药科大学.jpg",
  "广东医科大学": "./official-images/20-广东医科大学.png",
  "佛山大学": "./official-images/21-佛山大学.ico",
  "五邑大学": "./official-images/22-五邑大学.jpg",
  "北京大学深圳研究生院": "./official-images/23-北京大学深圳研究生院.jpg",
  "清华大学深圳国际研究生院": "./official-images/24-清华大学深圳国际研究生院.jpg",
  "哈尔滨工业大学（深圳）": "./official-images/25-哈尔滨工业大学-深圳.jpg",
  "香港中文大学（深圳）": "./official-images/26-香港中文大学-深圳.jpg",
  "深圳北理莫斯科大学": "./official-images/27-深圳北理莫斯科大学.jpg",
  "深圳技术大学": "./official-images/28-深圳技术大学.jpg",
  "北京师范大学珠海校区": "./official-images/29-北京师范大学珠海校区.jpg",
  "北京师范大学-香港浸会大学联合国际学院": "./official-images/30-北京师范大学-香港浸会大学联合国际学院.jpg",
  "广东以色列理工学院": "./official-images/31-广东以色列理工学院.jpg",
  "广州体育学院": "./official-images/32-广州体育学院.jpg",
  "广州美术学院": "./official-images/33-广州美术学院.jpg",
  "仲恺农业工程学院": "./official-images/35-仲恺农业工程学院.png",
  "广东金融学院": "./official-images/36-广东金融学院.jpg",
  "岭南师范学院": "./official-images/37-岭南师范学院.jpg",
  "广东石油化工学院": "./official-images/38-广东石油化工学院.jpg",
  "肇庆学院": "./official-images/39-肇庆学院.jpg",
  "广州航海学院": "./official-images/41-广州航海学院.jpg",
  "广东第二师范学院": "./official-images/42-广东第二师范学院.jpg",
  "中国科学院深圳先进技术研究院": "./official-images/44-中国科学院深圳先进技术研究院.png"
};

const officialWebsites = {
  "中山大学": "https://www.sysu.edu.cn/",
  "华南理工大学": "https://www.scut.edu.cn/",
  "暨南大学": "https://www.jnu.edu.cn/",
  "华南师范大学": "https://www.scnu.edu.cn/",
  "华南农业大学": "https://www.scau.edu.cn/",
  "广州医科大学": "https://www.gzhmu.edu.cn/",
  "广州中医药大学": "https://www.gzucm.edu.cn/",
  "南方医科大学": "https://www.smu.edu.cn/",
  "南方科技大学": "https://www.sustech.edu.cn/",
  "深圳大学": "https://www.szu.edu.cn/",
  "广东工业大学": "https://www.gdut.edu.cn/",
  "广州大学": "https://www.gzhu.edu.cn/",
  "广东外语外贸大学": "https://www.gdufs.edu.cn/",
  "广东财经大学": "https://www.gdufe.edu.cn/",
  "汕头大学": "https://www.stu.edu.cn/",
  "东莞理工学院": "https://www.dgut.edu.cn/",
  "广东技术师范大学": "https://www.gpnu.edu.cn/",
  "广东海洋大学": "https://www.gdou.edu.cn/",
  "广东药科大学": "https://www.gdpu.edu.cn/",
  "广东医科大学": "https://www.gdmu.edu.cn/",
  "佛山大学": "https://www.fosu.edu.cn/",
  "五邑大学": "https://www.wyu.edu.cn/",
  "北京大学深圳研究生院": "https://www.pkusz.edu.cn/",
  "清华大学深圳国际研究生院": "https://www.sigs.tsinghua.edu.cn/",
  "哈尔滨工业大学（深圳）": "https://www.hitsz.edu.cn/",
  "香港中文大学（深圳）": "https://www.cuhk.edu.cn/zh-hans",
  "深圳北理莫斯科大学": "https://www.smbu.edu.cn/",
  "深圳技术大学": "https://www.sztu.edu.cn/",
  "北京师范大学珠海校区": "https://zh.bnu.edu.cn/",
  "北京师范大学-香港浸会大学联合国际学院": "https://www.uic.edu.cn/",
  "广东以色列理工学院": "https://www.gtiit.edu.cn/",
  "广州体育学院": "https://www.gzsport.edu.cn/",
  "广州美术学院": "https://www.gzarts.edu.cn/",
  "星海音乐学院": "https://www.xhcom.edu.cn/",
  "仲恺农业工程学院": "https://www.zhku.edu.cn/",
  "广东金融学院": "https://www.gduf.edu.cn/",
  "岭南师范学院": "https://www.lingnan.edu.cn/",
  "广东石油化工学院": "https://www.gdupt.edu.cn/",
  "肇庆学院": "https://www.zqu.edu.cn/",
  "惠州学院": "https://www.hzu.edu.cn/",
  "广州航海学院": "https://www.gzmtu.edu.cn/",
  "广东第二师范学院": "https://www.gdei.edu.cn/",
  "广东省社会科学院": "https://www.gdass.gov.cn/",
  "中国科学院深圳先进技术研究院": "https://www.siat.ac.cn/"
};

function makeSchool(school) {
  return {
    id: createId(),
    status: "待核验",
    source: "",
    note: "先用研招网和学校研究生招生网核验当年目录、名额和复试要求。",
    ...school
  };
}

seedSchools.push(
  makeSchool({
    name: "北京大学深圳研究生院",
    city: "深圳",
    major: "研究生院 / 城市规划、金融、信息工程、新材料",
    priority: "冲刺",
    source: "https://www.pkusz.edu.cn/",
    note: "名校深圳平台，适合高分冲刺；要单独核对学院招生单位和报名代码。"
  }),
  makeSchool({
    name: "清华大学深圳国际研究生院",
    city: "深圳",
    major: "研究生院 / 电子信息、材料、环境、海洋、数据",
    priority: "冲刺",
    source: "https://www.sigs.tsinghua.edu.cn/",
    note: "科研和交叉学科导向强，适合把导师方向放到第一优先级核验。"
  }),
  makeSchool({
    name: "哈尔滨工业大学（深圳）",
    city: "深圳",
    major: "985校区 / 计算机、电子信息、机械、材料",
    priority: "冲刺",
    source: "https://yzb.hitsz.edu.cn/",
    note: "工科冲刺选择，注意与哈工大本部招生简章、深圳校区目录对应关系。"
  }),
  makeSchool({
    name: "香港中文大学（深圳）",
    city: "深圳",
    major: "中外合作 / 数据科学、金融、管理、理工、人文社科",
    priority: "冲刺",
    source: "https://www.cuhk.edu.cn/zh-hans/admissions/graduate",
    note: "培养体系和申请逻辑与统考院校不同，适合作为申请制补充路径。"
  }),
  makeSchool({
    name: "深圳北理莫斯科大学",
    city: "深圳",
    major: "中外合作 / 理学、材料、语言、经济管理",
    priority: "稳妥",
    source: "https://www.smbu.edu.cn/",
    note: "中外合作办学，注意申请条件、语言要求和培养模式。"
  }),
  makeSchool({
    name: "深圳技术大学",
    city: "深圳",
    major: "应用技术 / 工程、设计、药学、管理",
    priority: "保底",
    source: "https://www.sztu.edu.cn/",
    note: "新兴应用型院校，硕士招生专业需以当年研招网为准。"
  }),
  makeSchool({
    name: "北京师范大学珠海校区",
    city: "珠海",
    major: "985校区 / 教育、心理、文理基础学科",
    priority: "冲刺",
    source: "https://zh.bnu.edu.cn/",
    note: "珠海校区资源强，教育心理方向尤其值得核验招生单位。"
  }),
  makeSchool({
    name: "北京师范大学-香港浸会大学联合国际学院",
    city: "珠海",
    major: "中外合作 / 传播、管理、数据、环境、人文社科",
    priority: "稳妥",
    source: "https://www.uic.edu.cn/",
    note: "英文培养和申请制属性明显，适合作为广深珠之外的国际化备选。"
  }),
  makeSchool({
    name: "广东以色列理工学院",
    city: "汕头",
    major: "中外合作 / 理工、化工、材料、生物技术",
    priority: "稳妥",
    source: "https://www.gtiit.edu.cn/",
    note: "偏科研和英文培养，适合关注理工交叉与海外衔接的同学。"
  }),
  makeSchool({
    name: "广州体育学院",
    city: "广州",
    major: "体育 / 体育教育训练、运动人体科学、体育专硕",
    priority: "保底",
    source: "https://grad.gzsport.edu.cn/",
    note: "体育类专门院校，重点核验专项测试、复试技能和导师方向。"
  }),
  makeSchool({
    name: "广州美术学院",
    city: "广州",
    major: "艺术 / 美术、设计、艺术理论",
    priority: "稳妥",
    source: "https://yjs.gzarts.edu.cn/",
    note: "作品集、专业创作和导师匹配很关键，不能只看初试分数。"
  }),
  makeSchool({
    name: "星海音乐学院",
    city: "广州",
    major: "艺术 / 音乐、舞蹈、艺术管理",
    priority: "稳妥",
    source: "https://yjsb.xhcom.edu.cn/",
    note: "艺术类复试占比和专业展示重要，适合单独做作品准备清单。"
  }),
  makeSchool({
    name: "仲恺农业工程学院",
    city: "广州",
    major: "农业工程 / 食品、园艺、资源环境、工程",
    priority: "保底",
    source: "https://yjs.zhku.edu.cn/",
    note: "农工与食品方向可作特色备选，关注是否有目标一级学科。"
  }),
  makeSchool({
    name: "广东金融学院",
    city: "广州",
    major: "财经 / 金融、保险、会计、应用经济",
    priority: "保底",
    source: "https://yjs.gduf.edu.cn/",
    note: "财经类应用方向备选，适合与广财、暨大经管类做梯度比较。"
  }),
  makeSchool({
    name: "岭南师范学院",
    city: "湛江",
    major: "师范 / 教育、文学、化学、生态",
    priority: "保底",
    source: "https://d.lingnan.edu.cn/yjsc/",
    note: "粤西师范类备选，适合教育类同学拉开城市和竞争梯度。"
  }),
  makeSchool({
    name: "广东石油化工学院",
    city: "茂名",
    major: "石化工科 / 化工、材料、控制、环境",
    priority: "保底",
    source: "https://www.gdupt.edu.cn/",
    note: "石化产业特色明显，适合理工应用方向保底或调剂备选。"
  }),
  makeSchool({
    name: "肇庆学院",
    city: "肇庆",
    major: "综合应用 / 教育、电子信息、旅游、生态",
    priority: "保底",
    source: "https://www.zqu.edu.cn/",
    note: "作为扩展候选，务必在研招网核对当年是否有你的专业招生。"
  }),
  makeSchool({
    name: "惠州学院",
    city: "惠州",
    major: "应用综合 / 电子信息、材料、教育、化工",
    priority: "保底",
    source: "https://www.hzu.edu.cn/",
    note: "珠三角东岸扩展候选，适合就业城市优先的同学核验。"
  }),
  makeSchool({
    name: "广州航海学院",
    city: "广州",
    major: "交通航运 / 船舶、交通运输、物流工程",
    priority: "保底",
    source: "https://www.gzmtu.edu.cn/",
    note: "航运交通特色备选，先核验是否有当年硕士招生专业。"
  }),
  makeSchool({
    name: "广东第二师范学院",
    city: "广州",
    major: "师范 / 教育、教师发展、基础学科",
    priority: "保底",
    source: "https://www.gdei.edu.cn/",
    note: "师范类扩展候选，适合关注教育硕士和联合培养信息。"
  }),
  makeSchool({
    name: "广东省社会科学院",
    city: "广州",
    major: "科研院所 / 经济、社会学、法学、区域发展",
    priority: "保底",
    source: "https://www.gdass.gov.cn/",
    note: "不是高校但可能有研究生培养信息，社科方向可作为补充线索。"
  }),
  makeSchool({
    name: "中国科学院深圳先进技术研究院",
    city: "深圳",
    major: "科研院所 / 计算机、生物医学工程、人工智能",
    priority: "冲刺",
    source: "https://www.siat.ac.cn/",
    note: "科研院所路线，适合科研导向强的理工医交叉同学。"
  })
);

const cityCoords = {
  "广州": [23.1291, 113.2644],
  "深圳": [22.5431, 114.0579],
  "珠海": [22.2711, 113.5767],
  "汕头": [23.3541, 116.6819],
  "佛山": [23.0215, 113.1214],
  "东莞": [23.0207, 113.7518],
  "湛江": [21.2707, 110.3594],
  "江门": [22.5787, 113.0819],
  "茂名": [21.6629, 110.9255],
  "肇庆": [23.0472, 112.4651],
  "惠州": [23.1115, 114.4152]
};

const schoolProfiles = {
  "中山大学": { lat: 23.0964, lng: 113.2973, scene: "campus", intro: "广东综合实力最强的冲刺院校之一，多校区布局，医学、人文社科、理工和经管都很强。", ratings: { study: 5, life: 4, career: 5, transit: 4, pressure: 5 } },
  "华南理工大学": { lat: 23.1515, lng: 113.3472, scene: "campus", intro: "华南工科核心院校，工学、建筑、材料、管理等方向热度高，适合有明确专业课优势的同学。", ratings: { study: 5, life: 4, career: 5, transit: 4, pressure: 5 } },
  "暨南大学": { lat: 23.1293, lng: 113.3498, scene: "guangzhou", intro: "热门 211 综合院校，经管、新闻传播、文学和医学方向关注度高，城市资源和校友网络都不错。", ratings: { study: 4, life: 4, career: 5, transit: 5, pressure: 4 } },
  "华南师范大学": { lat: 23.1408, lng: 113.3505, scene: "campus", intro: "教育学、心理学和师范类方向的广东核心选择，适合教育系统、教师发展和学术路线。", ratings: { study: 4, life: 4, career: 4, transit: 5, pressure: 4 } },
  "华南农业大学": { lat: 23.1589, lng: 113.3577, scene: "campus", intro: "双一流农业生命方向强校，校园空间感好，农学、食品、生物、兽医等专业值得重点看。", ratings: { study: 4, life: 5, career: 4, transit: 4, pressure: 3 } },
  "广州医科大学": { lat: 23.1362, lng: 113.2604, scene: "medical", intro: "医学双一流院校，临床医学和公共卫生方向强，附属医院资源是择校关键。", ratings: { study: 5, life: 4, career: 5, transit: 5, pressure: 5 } },
  "广州中医药大学": { lat: 23.1491, lng: 113.2646, scene: "medical", intro: "中医药方向核心院校，中医学、中药学和中西医结合适合做专门路线规划。", ratings: { study: 4, life: 4, career: 4, transit: 5, pressure: 4 } },
  "南方医科大学": { lat: 23.1851, lng: 113.3211, scene: "medical", intro: "医学实力强，临床、基础医学、公卫、护理方向都值得看，复试和医院基地信息很重要。", ratings: { study: 5, life: 4, career: 5, transit: 4, pressure: 5 } },
  "南方科技大学": { lat: 22.5996, lng: 114.0022, scene: "lab", intro: "深圳新型研究型大学，科研导向强，理工、计算机、材料和生命科学方向很有吸引力。", ratings: { study: 5, life: 4, career: 5, transit: 3, pressure: 5 } },
  "深圳大学": { lat: 22.5337, lng: 113.9327, scene: "shenzhen", intro: "深圳城市红利明显，计算机、设计、经管、建筑等方向热度高，适合就业导向强的同学。", ratings: { study: 4, life: 4, career: 5, transit: 5, pressure: 4 } },
  "广东工业大学": { lat: 23.0393, lng: 113.3943, scene: "lab", intro: "工科稳妥梯队重点校，自动化、计算机、机械、材料等方向适合与华工、深大拉梯度。", ratings: { study: 4, life: 4, career: 4, transit: 4, pressure: 3 } },
  "广州大学": { lat: 23.0433, lng: 113.3731, scene: "guangzhou", intro: "广州本地综合院校，教育、土木、计算机、数学等方向适合做稳妥或保底组合。", ratings: { study: 3, life: 4, career: 4, transit: 4, pressure: 3 } },
  "广东外语外贸大学": { lat: 23.2045, lng: 113.2969, scene: "campus", intro: "语言外贸特色明显，外语、翻译、国商、新闻传播和法学方向可重点关注。", ratings: { study: 4, life: 4, career: 4, transit: 4, pressure: 3 } },
  "广东财经大学": { lat: 23.0933, lng: 113.3542, scene: "guangzhou", intro: "财经政法方向实用度高，金融、会计、税务、法学等专硕适合做就业导向选择。", ratings: { study: 3, life: 4, career: 4, transit: 4, pressure: 3 } },
  "汕头大学": { lat: 23.4164, lng: 116.6321, scene: "campus", intro: "粤东核心综合院校，医学、新闻传播、商科和工科有特色，性价比路线值得看。", ratings: { study: 3, life: 4, career: 3, transit: 3, pressure: 2 } },
  "东莞理工学院": { lat: 23.0416, lng: 113.7478, scene: "lab", intro: "东莞制造业资源好，理工科应用方向适合作保底或调剂备选。", ratings: { study: 3, life: 4, career: 4, transit: 3, pressure: 2 } },
  "广东技术师范大学": { lat: 23.1352, lng: 113.3696, scene: "campus", intro: "教育、职教、民族学和计算机方向可看，适合与华师、广大做师范梯度。", ratings: { study: 3, life: 4, career: 3, transit: 4, pressure: 2 } },
  "广东海洋大学": { lat: 21.2708, lng: 110.3022, scene: "ocean", intro: "海洋、水产、食品方向有辨识度，城市和专业适配度要一起衡量。", ratings: { study: 3, life: 4, career: 3, transit: 2, pressure: 2 } },
  "广东药科大学": { lat: 23.0532, lng: 113.4028, scene: "medical", intro: "药学、中药学、公卫等方向可作医学医药类备选，注意校区分布。", ratings: { study: 3, life: 4, career: 3, transit: 4, pressure: 2 } },
  "广东医科大学": { lat: 21.2609, lng: 110.3664, scene: "medical", intro: "湛江和东莞校区布局，医学类保底备选要重点看医院基地和专业型要求。", ratings: { study: 3, life: 3, career: 3, transit: 2, pressure: 3 } },
  "佛山大学": { lat: 23.0374, lng: 113.1216, scene: "campus", intro: "佛山应用型综合院校，机械、材料、土木、教育等方向可作珠三角保底。", ratings: { study: 3, life: 4, career: 4, transit: 3, pressure: 2 } },
  "五邑大学": { lat: 22.5805, lng: 113.082, scene: "campus", intro: "江门综合院校，电子信息、机械、纺织等方向适合珠西保底组合。", ratings: { study: 3, life: 4, career: 3, transit: 3, pressure: 2 } },
  "北京大学深圳研究生院": { lat: 22.5968, lng: 113.9658, scene: "shenzhen", intro: "北大深圳研究生培养平台，名校资源和深圳产业环境叠加，适合强冲刺和申请制关注。", ratings: { study: 5, life: 4, career: 5, transit: 4, pressure: 5 } },
  "清华大学深圳国际研究生院": { lat: 22.5935, lng: 113.9733, scene: "lab", intro: "清华深圳研究生平台，交叉学科、工程技术和科研资源突出。", ratings: { study: 5, life: 4, career: 5, transit: 4, pressure: 5 } },
  "哈尔滨工业大学（深圳）": { lat: 22.5927, lng: 113.9691, scene: "lab", intro: "哈工大深圳校区工科认可度高，适合计算机、电子信息、机械和材料方向冲刺。", ratings: { study: 5, life: 4, career: 5, transit: 4, pressure: 5 } },
  "香港中文大学（深圳）": { lat: 22.6899, lng: 114.2055, scene: "shenzhen", intro: "国际化培养氛围明显，数据、金融、管理、理工和人文社科均有申请制路线。", ratings: { study: 5, life: 4, career: 5, transit: 3, pressure: 4 } },
  "深圳北理莫斯科大学": { lat: 22.6932, lng: 114.2131, scene: "shenzhen", intro: "中外合作办学，理工和语言文化特色明显，适合考虑国际化培养的同学。", ratings: { study: 4, life: 4, career: 4, transit: 3, pressure: 3 } },
  "深圳技术大学": { lat: 22.7028, lng: 114.342, scene: "lab", intro: "深圳应用技术型新兴院校，工程、设计和医药相关方向可作为扩展候选。", ratings: { study: 3, life: 4, career: 4, transit: 2, pressure: 2 } },
  "北京师范大学珠海校区": { lat: 22.3527, lng: 113.5489, scene: "campus", intro: "北师大珠海校区环境好，教育心理和基础学科资源强，适合教育类冲刺。", ratings: { study: 5, life: 5, career: 4, transit: 3, pressure: 4 } },
  "北京师范大学-香港浸会大学联合国际学院": { lat: 22.3488, lng: 113.5439, scene: "campus", intro: "珠海中外合作院校，英文培养和国际化环境明显，适合补充申请路径。", ratings: { study: 4, life: 5, career: 4, transit: 3, pressure: 3 } },
  "广东以色列理工学院": { lat: 23.4077, lng: 116.7197, scene: "lab", intro: "理工科中外合作院校，英文和科研导向明显，适合理工交叉方向探索。", ratings: { study: 4, life: 3, career: 3, transit: 2, pressure: 3 } },
  "广州体育学院": { lat: 23.1522, lng: 113.3207, scene: "campus", intro: "体育类专门院校，专项能力、复试技能和导师方向比普通表格信息更关键。", ratings: { study: 3, life: 4, career: 3, transit: 4, pressure: 3 } },
  "广州美术学院": { lat: 23.0448, lng: 113.3861, scene: "art", intro: "美术与设计方向专门院校，作品集、创作方向和导师匹配是核心。", ratings: { study: 4, life: 4, career: 4, transit: 4, pressure: 4 } },
  "星海音乐学院": { lat: 23.0415, lng: 113.3926, scene: "art", intro: "音乐艺术类专门院校，复试展示和专业积累权重高。", ratings: { study: 4, life: 4, career: 3, transit: 4, pressure: 4 } },
  "仲恺农业工程学院": { lat: 23.0986, lng: 113.2821, scene: "campus", intro: "农业工程和食品方向有特色，可作为农学食品类保底或特色备选。", ratings: { study: 3, life: 4, career: 3, transit: 5, pressure: 2 } },
  "广东金融学院": { lat: 23.1512, lng: 113.3618, scene: "guangzhou", intro: "金融应用方向明确，适合与广财、暨大经管类一起比较。", ratings: { study: 3, life: 4, career: 4, transit: 4, pressure: 3 } },
  "岭南师范学院": { lat: 21.2719, lng: 110.3442, scene: "campus", intro: "粤西师范类备选，教育、文学和基础学科方向适合降低城市竞争。", ratings: { study: 3, life: 3, career: 3, transit: 2, pressure: 2 } },
  "广东石油化工学院": { lat: 21.6683, lng: 110.9238, scene: "lab", intro: "石化和工科应用特色明显，适合化工、材料、环境和控制方向扩展。", ratings: { study: 3, life: 3, career: 3, transit: 2, pressure: 2 } },
  "肇庆学院": { lat: 23.0533, lng: 112.4587, scene: "campus", intro: "肇庆综合应用型候选，适合做广佛深之外的低竞争扩展池。", ratings: { study: 2, life: 4, career: 2, transit: 2, pressure: 1 } },
  "惠州学院": { lat: 23.0837, lng: 114.4144, scene: "campus", intro: "惠州区位连接深圳东莞，应用学科可作为就业城市优先的扩展候选。", ratings: { study: 2, life: 4, career: 3, transit: 3, pressure: 1 } },
  "广州航海学院": { lat: 23.0826, lng: 113.4702, scene: "ocean", intro: "交通航运特色院校，适合航运、物流、交通运输方向先做资格核验。", ratings: { study: 2, life: 4, career: 3, transit: 3, pressure: 1 } },
  "广东第二师范学院": { lat: 23.0968, lng: 113.3511, scene: "campus", intro: "师范类扩展候选，教育硕士或联合培养信息需要以当年官方为准。", ratings: { study: 2, life: 4, career: 3, transit: 4, pressure: 1 } },
  "广东省社会科学院": { lat: 23.1288, lng: 113.293, scene: "guangzhou", intro: "社科类科研院所线索，适合经济、社会学、区域发展等方向做补充搜索。", ratings: { study: 3, life: 4, career: 3, transit: 5, pressure: 2 } },
  "中国科学院深圳先进技术研究院": { lat: 22.6048, lng: 113.9924, scene: "lab", intro: "深圳科研院所路线，人工智能、生物医学工程和计算机交叉方向值得关注。", ratings: { study: 5, life: 4, career: 5, transit: 3, pressure: 5 } }
};

seedSchools.forEach((school) => {
  const city = Object.keys(cityCoords).find((item) => school.city.includes(item));
  const profile = schoolProfiles[school.name] || {};
  const scene = profile.scene || (school.major.includes("医学") ? "medical" : school.major.includes("艺术") ? "art" : city === "深圳" ? "shenzhen" : "campus");
  Object.assign(school, {
    lat: profile.lat || cityCoords[city]?.[0] || 23.1291,
    lng: profile.lng || cityCoords[city]?.[1] || 113.2644,
    image: cachedOfficialImages[school.name] || officialImages[school.name] || profile.image || imageByScene[scene],
    imageSource: officialImages[school.name] || "",
    website: officialWebsites[school.name] || school.source || "",
    intro: profile.intro || `${school.name}是${school.city}方向的候选点，适合先核验当年招生目录、复试线和学院通知。`,
    ratings: profile.ratings || { study: 3, life: 3, career: 3, transit: 3, pressure: 2 }
  });
});

const timeline = [
  {
    date: "现在-6月",
    startMonth: 5,
    endMonth: 6,
    title: "确定 8-12 所候选院校",
    text: "按冲刺、稳妥、保底三档收集招生目录、初试科目、复试线、参考书。"
  },
  {
    date: "7月-8月",
    startMonth: 7,
    endMonth: 8,
    title: "压缩到 3-5 个主目标",
    text: "结合暑期复习进度、专业课资料可得性、城市成本和就业方向做取舍。"
  },
  {
    date: "9月",
    startMonth: 9,
    endMonth: 9,
    title: "核对招生简章和目录",
    text: "以当年官方发布为准，确认统招名额、考试科目、报考限制和报名时间。"
  },
  {
    date: "10月",
    startMonth: 10,
    endMonth: 10,
    title: "网上报名与信息确认",
    text: "保存报名号、确认报考点要求，建立准考证、报名表和缴费凭证备份。"
  },
  {
    date: "12月-次年3月",
    startMonth: 12,
    endMonth: 15,
    title: "初试与复试准备",
    text: "初试后立即整理复试科目、导师方向、往年面试问题和调剂备选。"
  }
];

const examTarget = new Date("2026-12-26T08:30:00+08:00");
const examTargetLabel = "2026-12-26 08:30";
const examEstimateNote = "下一届官方初试日期未公布时，仅按往年12月下旬窗口估算";
const countdownNeedsVerify = new Set([
  "香港中文大学（深圳）",
  "深圳北理莫斯科大学",
  "北京师范大学-香港浸会大学联合国际学院",
  "广东以色列理工学院",
  "广东省社会科学院"
]);

const storageKey = "gdPostgradSchools.v4";

let schools = loadSchools();
let selectedId = schools[0]?.id;
let priorityFilter = "全部";

const rowsEl = document.querySelector("#schoolRows");
const detailEl = document.querySelector("#detailCard");
const mapCardEl = document.querySelector("#mapSchoolCard");
const searchInput = document.querySelector("#searchInput");
const form = document.querySelector("#schoolForm");
let campusMap;
const markers = new Map();

function loadSchools() {
  const stored = readStoredSchools(storageKey);
  if (!stored) return seedSchools;

  try {
    const parsed = JSON.parse(stored);
    return Array.isArray(parsed) && parsed.length ? parsed : seedSchools;
  } catch {
    return seedSchools;
  }
}

function persist() {
  writeStoredSchools(storageKey, JSON.stringify(schools));
}

function filteredSchools() {
  const query = searchInput.value.trim().toLowerCase();
  return schools.filter((school) => {
    const matchesQuery = [school.name, school.city, school.major, school.note, school.intro]
      .join(" ")
      .toLowerCase()
      .includes(query);
    const matchesPriority = priorityFilter === "全部" || school.priority === priorityFilter;
    return matchesQuery && matchesPriority;
  });
}

function priorityClass(priority) {
  return {
    "冲刺": "sprint",
    "稳妥": "steady",
    "保底": "safe"
  }[priority] || "steady";
}

function renderMetrics() {
  document.querySelector("#schoolCount").textContent = schools.length;
  document.querySelector("#priorityCount").textContent = schools.filter((school) => school.priority === "冲刺").length;
  document.querySelector("#verifyCount").textContent = schools.filter((school) => school.status === "待核验").length;
  document.querySelector("#sourceCount").textContent = schools.filter((school) => school.source).length;
  document.querySelector("#countdownDays").textContent = countdownText();
}

function daysUntilExam() {
  return Math.max(0, Math.ceil((examTarget.getTime() - Date.now()) / 86400000));
}

function countdownText() {
  return `${daysUntilExam()}天`;
}

function schoolCountdownLabel(school) {
  if (countdownNeedsVerify.has(school.name)) {
    return "待核验";
  }
  return `统考估算 ${countdownText()}`;
}

function renderRows() {
  const visibleSchools = filteredSchools();
  rowsEl.innerHTML = "";

  if (!visibleSchools.length) {
    rowsEl.innerHTML = '<tr><td colspan="7">没有匹配的院校，换个关键词试试。</td></tr>';
    return;
  }

  visibleSchools.forEach((school) => {
    const row = document.createElement("tr");
    row.className = school.id === selectedId ? "selected" : "";
    row.dataset.id = school.id;
    row.innerHTML = `
      <td>
        <div class="school-name">
          <strong>${escapeHtml(school.name)}</strong>
          <span>${escapeHtml(school.note || "未填写备注")}</span>
        </div>
      </td>
      <td>${escapeHtml(school.city)}</td>
      <td>${escapeHtml(school.major)}</td>
      <td><span class="pill ${priorityClass(school.priority)}">${escapeHtml(school.priority)}</span></td>
      <td><span class="status">${escapeHtml(school.status)}</span></td>
      <td><span class="countdown-pill ${countdownNeedsVerify.has(school.name) ? "verify" : ""}">${schoolCountdownLabel(school)}</span></td>
      <td>${school.source ? '<a href="' + escapeAttribute(school.source) + '" data-nav-url="' + escapeAttribute(school.source) + '">打开</a>' : "未填"}</td>
    `;
    row.addEventListener("click", () => {
      selectSchool(school.id, { fly: true, revealInline: true });
    });
    rowsEl.appendChild(row);

    if (school.id === selectedId) {
      const detailRow = document.createElement("tr");
      detailRow.className = "inline-detail-row";
      detailRow.innerHTML = `
        <td colspan="7">
          ${renderInlineSchoolInfo(school)}
        </td>
      `;
      const photo = detailRow.querySelector(".inline-school-photo");
      const fallback = detailRow.querySelector(".inline-image-fallback");
      photo.addEventListener("error", () => {
        photo.hidden = true;
        fallback.hidden = false;
      });
      rowsEl.appendChild(detailRow);
    }
  });
}

function renderInlineSchoolInfo(school) {
  const websiteUrl = school.website || school.source;
  const admissionsUrl = school.source && school.source !== websiteUrl ? school.source : "";

  return `
    <div class="inline-school-card">
      <div class="inline-school-media">
        <img class="inline-school-photo" src="${escapeAttribute(school.image)}" alt="${escapeAttribute(school.name)}校园图" />
        <div class="inline-image-fallback" hidden>
          <strong>${escapeHtml(school.name)}</strong>
          <span>官网图片暂时无法加载</span>
        </div>
      </div>
      <div class="inline-school-info">
        <div class="inline-school-head">
          <div>
            <p class="eyebrow">院校详情</p>
            <h3>${escapeHtml(school.name)}</h3>
          </div>
          <span class="pill ${priorityClass(school.priority)}">${escapeHtml(school.priority)}</span>
        </div>
        <p class="school-intro">${escapeHtml(school.intro)}</p>
        <div class="inline-rating-grid">
          ${ratingRow("学习资源", school.ratings.study)}
          ${ratingRow("生活环境", school.ratings.life)}
          ${ratingRow("就业机会", school.ratings.career)}
          ${ratingRow("交通便利", school.ratings.transit)}
          ${ratingRow("竞争强度", school.ratings.pressure)}
        </div>
        <div class="map-actions inline-actions">
          ${websiteUrl ? '<button class="text-btn primary" data-nav-url="' + escapeAttribute(websiteUrl) + '">学校官网</button>' : '<span class="text-btn primary">待补官网</span>'}
          ${admissionsUrl ? '<button class="text-btn" data-nav-url="' + escapeAttribute(admissionsUrl) + '">研招入口</button>' : ""}
          <button class="text-btn" data-map-focus="${escapeAttribute(school.id)}">地图定位</button>
        </div>
      </div>
    </div>
  `;
}

function renderDetail() {
  const school = schools.find((item) => item.id === selectedId) || filteredSchools()[0] || schools[0];
  if (!school) {
    detailEl.innerHTML = "<p>还没有目标院校。</p>";
    return;
  }

  selectedId = school.id;
  detailEl.innerHTML = `
    <div class="detail-top">
      <div>
        <p class="eyebrow">当前目标</p>
        <h3>${escapeHtml(school.name)}</h3>
        <p>${escapeHtml(school.note || "暂无备注")}</p>
      </div>
      <span class="pill ${priorityClass(school.priority)}">${escapeHtml(school.priority)}</span>
    </div>
    <div class="detail-list">
      <div><span>城市</span><strong>${escapeHtml(school.city)}</strong></div>
      <div><span>方向</span><strong>${escapeHtml(school.major)}</strong></div>
      <div><span>状态</span><strong>${escapeHtml(school.status)}</strong></div>
      <div><span>下一步</span><strong>${nextAction(school.status)}</strong></div>
    </div>
    ${school.source ? '<a href="' + escapeAttribute(school.source) + '" data-nav-url="' + escapeAttribute(school.source) + '">打开官方入口</a>' : ""}
    <button class="delete-btn" data-delete="${escapeAttribute(school.id)}"><i data-lucide="trash-2"></i><span>移除目标</span></button>
  `;

  const deleteButton = detailEl.querySelector("[data-delete]");
  deleteButton.addEventListener("click", () => {
    schools = schools.filter((item) => item.id !== school.id);
    selectedId = schools[0]?.id;
    persist();
    render();
  });
}

function initMap() {
  const mapEl = document.querySelector("#campusMap");
  if (!mapEl) return;

  if (!window.L) {
    mapEl.innerHTML = '<div class="map-fallback">地图组件加载失败。院校池和详情仍可使用；联网后刷新页面即可显示地图。</div>';
    return;
  }

  campusMap = L.map(mapEl, {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([23.12, 113.55], 8);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: "&copy; OpenStreetMap"
  }).addTo(campusMap);
}

function renderMapMarkers() {
  if (!campusMap || !window.L) return;

  markers.forEach((marker) => marker.remove());
  markers.clear();

  const visibleSchools = filteredSchools();
  visibleSchools.forEach((school) => {
    const marker = L.marker([school.lat, school.lng], {
      title: school.name,
      icon: L.divIcon({
        className: `school-marker ${priorityClass(school.priority)}`,
        html: school.name.slice(0, 1),
        iconSize: [30, 30],
        iconAnchor: [15, 15]
      })
    })
      .addTo(campusMap)
      .bindTooltip(school.name, { direction: "top", offset: [0, -12] });

    marker.on("click", () => selectSchool(school.id));
    markers.set(school.id, marker);
  });

  if (visibleSchools.length) {
    const bounds = L.latLngBounds(visibleSchools.map((school) => [school.lat, school.lng]));
    campusMap.fitBounds(bounds, { padding: [36, 36], maxZoom: 10 });
  }
}

function renderMapDetail() {
  const school = schools.find((item) => item.id === selectedId) || filteredSchools()[0] || schools[0];
  if (!school) {
    mapCardEl.innerHTML = "<p>还没有学校可展示。</p>";
    return;
  }

  const websiteUrl = school.website || school.source;
  const admissionsUrl = school.source && school.source !== websiteUrl ? school.source : "";
  const actionsHtml = [
    websiteUrl
      ? '<button class="text-btn primary" data-nav-url="' + escapeAttribute(websiteUrl) + '">学校官网</button>'
      : '<span class="text-btn primary">待补官网</span>',
    admissionsUrl
      ? '<button class="text-btn" data-nav-url="' + escapeAttribute(admissionsUrl) + '">研招入口</button>'
      : "",
    '<button class="text-btn" data-focus-table="' + escapeAttribute(school.id) + '">定位表格</button>'
  ].filter(Boolean).join("");

  mapCardEl.innerHTML = `
    <img class="school-photo" src="${escapeAttribute(school.image)}" alt="${escapeAttribute(school.name)}校园与城市环境图" />
    <div class="image-fallback" hidden>
      <strong>${escapeHtml(school.name)}</strong>
      <span>官网图片暂时无法加载，已保留官方入口，不使用重复或非官方替代图。</span>
    </div>
    <div class="school-card-body">
      <div>
        <p class="eyebrow">地图选中</p>
        <h3>${escapeHtml(school.name)}</h3>
      </div>
      <div class="school-meta">
        <span class="meta-chip">${escapeHtml(school.city)}</span>
        <span class="meta-chip">${escapeHtml(school.priority)}</span>
        <span class="meta-chip">${escapeHtml(school.status)}</span>
      </div>
      <p class="school-intro">${escapeHtml(school.intro)}</p>
      <div class="rating-list">
        ${ratingRow("学习资源", school.ratings.study)}
        ${ratingRow("生活环境", school.ratings.life)}
        ${ratingRow("就业机会", school.ratings.career)}
        ${ratingRow("交通便利", school.ratings.transit)}
        ${ratingRow("竞争强度", school.ratings.pressure)}
      </div>
      <div class="map-actions">
        ${actionsHtml}
      </div>
    </div>
  `;

  const tableButton = mapCardEl.querySelector("[data-focus-table]");
  tableButton.addEventListener("click", () => {
    document.querySelector("#schools").scrollIntoView({ behavior: "smooth", block: "start" });
  });

  const photo = mapCardEl.querySelector(".school-photo");
  const fallback = mapCardEl.querySelector(".image-fallback");
  photo.addEventListener("error", () => {
    photo.hidden = true;
    fallback.hidden = false;
  });
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-nav-url]");
  if (!target) return;

  event.preventDefault();
  event.stopPropagation();
  window.location.assign(target.dataset.navUrl);
});

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-map-focus]");
  if (!target) return;

  event.preventDefault();
  event.stopPropagation();
  const school = schools.find((item) => item.id === target.dataset.mapFocus);
  if (school && campusMap) {
    campusMap.flyTo([school.lat, school.lng], 11, { duration: 0.7 });
    markers.get(school.id)?.openTooltip();
  }
  document.querySelector("#mapExplorer").scrollIntoView({ behavior: "smooth", block: "start" });
});

function ratingRow(label, value) {
  const score = Math.max(1, Math.min(5, Number(value) || 3));
  return `
    <div class="rating-row">
      <span>${escapeHtml(label)}</span>
      <span class="stars" aria-label="${score} 星">${"★".repeat(score)}${"☆".repeat(5 - score)}</span>
      <small>${score}/5</small>
    </div>
  `;
}

function selectSchool(id, options = {}) {
  selectedId = id;
  render();

  const school = schools.find((item) => item.id === selectedId);
  const marker = markers.get(selectedId);
  if (options.fly && school && campusMap) {
    campusMap.flyTo([school.lat, school.lng], 11, { duration: 0.7 });
  }
  if (marker) {
    marker.openTooltip();
  }
  if (options.revealInline) {
    requestAnimationFrame(() => {
      document.querySelector(".inline-detail-row")?.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    });
  }
}

function nextAction(status) {
  if (status === "已收藏") return "补齐近三年复试线";
  if (status === "重点跟进") return "整理学院和导师信息";
  return "核验招生目录与初试科目";
}

function renderTimeline() {
  document.querySelector("#timelineList").innerHTML = timeline
    .map((item) => `
      <div class="timeline-item">
        <time>${escapeHtml(item.date)}</time>
        <div>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.text)}</p>
        </div>
      </div>
    `)
    .join("");

  document.querySelector("#examTargetText").textContent = `${examEstimateNote}：${examTargetLabel}`;
  const currentMonth = new Date().getMonth() + 1;
  document.querySelector("#timelineRail").innerHTML = timeline
    .map((item, index) => {
      const normalizedMonth = currentMonth < 4 ? currentMonth + 12 : currentMonth;
      const isActive = normalizedMonth >= item.startMonth && normalizedMonth <= item.endMonth;
      return `
        <article class="timeline-card ${isActive ? "active" : ""}" style="animation-delay: ${120 + index * 70}ms">
          <time>${escapeHtml(item.date)}</time>
          <strong>${escapeHtml(item.title)}</strong>
          <p>${escapeHtml(item.text)}</p>
        </article>
      `;
    })
    .join("");
}

function render() {
  renderMetrics();
  renderRows();
  renderDetail();
  renderMapMarkers();
  renderMapDetail();
  renderTimeline();
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value = "") {
  return escapeHtml(value).replaceAll("`", "&#096;");
}

function toCsv() {
  const header = ["学校", "城市", "方向", "优先级", "状态", "来源", "备注"];
  const body = schools.map((school) => [
    school.name,
    school.city,
    school.major,
    school.priority,
    school.status,
    school.source,
    school.note
  ]);
  return [header, ...body]
    .map((row) => row.map((cell) => `"${String(cell || "").replaceAll('"', '""')}"`).join(","))
    .join("\n");
}

searchInput.addEventListener("input", render);

document.querySelectorAll(".segment").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".segment").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    priorityFilter = button.dataset.priority;
    render();
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(form);
  const school = Object.fromEntries(formData.entries());
  school.id = createId();
  const city = Object.keys(cityCoords).find((item) => school.city.includes(item));
  school.lat = cityCoords[city]?.[0] || 23.1291;
  school.lng = cityCoords[city]?.[1] || 113.2644;
  school.image = imageByScene[city === "深圳" ? "shenzhen" : "campus"];
  school.intro = school.note || `${school.name}是新增候选学校，建议先补齐官网、招生目录、复试线和导师信息。`;
  school.ratings = { study: 3, life: 3, career: 3, transit: 3, pressure: 2 };
  schools = [school, ...schools];
  selectedId = school.id;
  form.reset();
  persist();
  render();
});

document.querySelector("#exportCsv").addEventListener("click", () => {
  const blob = new Blob(["\ufeff" + toCsv()], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = "割了吧杨b林森专属私董考研网院校池.csv";
  anchor.click();
  URL.revokeObjectURL(url);
});

document.querySelector("#resetData").addEventListener("click", () => {
  schools = seedSchools.map((school) => ({ ...school, id: createId() }));
  selectedId = schools[0].id;
  persist();
  render();
});

initMap();
render();
