// 2026浙江综评五校数据（增强版 v2 - 含照片、分数、专业详情、TOP5推荐）
const schoolData = [
  {
    "name": "香港中文大学（深圳）",
    "short": "港中深",
    "plan": "三一260人 + 统招16人（共276人）",
    "model": "631（高考60% + 校测30% + 学考10%）",
    "tuition": "14万/年",
    "xk": "理科试验班：物+化；经管/人文试验班：不限",
    "score2025": "三一录取重点集中在645分以上（260人）；统招661–693分",
    "score_ref": "三一 645+（260人） | 统招 661–693（均分670，16人）",
    "score_note": "2025浙江总录取276人（三一260人+统招16人），来自79所中学。统招最高693、均分670、最低661",
    "photo": "https://www.cuhk.edu.cn/sites/all/themes/cuhk/images/campus_bg.jpg",
    "url": "https://admissions.cuhk.edu.cn/",
    "top5": ["人工智能","金融工程","计算机科学与技术","数据科学与大数据技术","金融学"],
    "majors": [
      {"大类":"经济管理试验班","选考":"不限","专业":[
        {"name":"金融学","detail":"经管学院王牌，CFA认证合作，培养投行/基金/券商人才。核心课程：投资学、公司金融、金融衍生品、固定收益证券。就业：高盛、摩根、中金、中信等。","url":"https://sme.cuhk.edu.cn/"},
        {"name":"经济学","detail":"理论与应用并重，研究微观/宏观经济学、计量经济学。核心课程：中级微观/宏观经济学、计量经济学、博弈论。深造：多数赴英美顶尖高校读研。","url":"https://sme.cuhk.edu.cn/"},
        {"name":"会计学","detail":"ACCA/CIMA认证，国际化会计培养。核心课程：中级财务会计、审计学、管理会计、税法。就业：四大会计师事务所、跨国企业财务部。","url":"https://sme.cuhk.edu.cn/"},
        {"name":"市场营销","detail":"数字营销+品牌管理+消费者行为。核心课程：市场营销原理、消费者行为学、品牌管理、数字营销。","url":"https://sme.cuhk.edu.cn/"},
        {"name":"国际商务","detail":"含环球供应链与物流管理方向（三校合作）。核心课程：国际贸易、跨文化管理、全球供应链。","url":"https://sme.cuhk.edu.cn/"},
        {"name":"大数据管理与应用","detail":"商科+数据科学交叉。核心课程：数据挖掘、商业智能、Python数据分析、机器学习。就业：互联网商业分析、咨询。","url":"https://sme.cuhk.edu.cn/"}
      ]},
      {"大类":"理科试验班","选考":"物+化","专业":[
        {"name":"人工智能","detail":"⭐ TOP推荐。2026新增学院，机器学习、计算机视觉、NLP方向。核心课程：深度学习、强化学习、自然语言处理。就业：AI研究员、算法工程师，年薪30-60万+。","url":"https://sds.cuhk.edu.cn/"},
        {"name":"计算机科学与技术","detail":"⭐ TOP推荐。ACM竞赛强校，系统/网络/AI方向。核心课程：数据结构、操作系统、数据库、计算机网络。就业：腾讯、字节、华为等。","url":"https://sds.cuhk.edu.cn/"},
        {"name":"数据科学与大数据技术","detail":"⭐ TOP推荐。统计学+计算机交叉。核心课程：数据挖掘、机器学习、大数据计算、统计学习。就业：数据科学家、量化分析师。","url":"https://sds.cuhk.edu.cn/"},
        {"name":"统计学","detail":"数理统计+应用统计。核心课程：概率论、数理统计、回归分析、多元统计。深造率极高。","url":"https://sds.cuhk.edu.cn/"},
        {"name":"金融工程","detail":"⭐ TOP推荐。三院联合培养（数据科学+经管+理工），量化金融方向。核心课程：随机过程、金融工程、量化投资。就业：对冲基金、投行量化部。","url":"https://sds.cuhk.edu.cn/"},
        {"name":"临床医学","detail":"⭐ TOP推荐。六年制，全英文教学，香港中文大学医学院体系。核心课程：解剖、生理、病理、内外妇儿。含金量极高。","url":"https://med.cuhk.edu.cn/"},
        {"name":"数学与应用数学","detail":"纯数学+应用数学。核心课程：数学分析、高等代数、实变函数、偏微分方程。","url":"https://sse.cuhk.edu.cn/"},
        {"name":"物理学","detail":"理论物理+应用物理。核心课程：理论力学、量子力学、固体物理。适合深造。","url":"https://sse.cuhk.edu.cn/"},
        {"name":"化学","detail":"有机化学、物理化学、分析化学。核心课程配套先进实验室。","url":"https://sse.cuhk.edu.cn/"},
        {"name":"材料科学与工程","detail":"新能源材料、纳米材料方向。核心课程：材料科学基础、高分子物理与化学。","url":"https://sse.cuhk.edu.cn/"},
        {"name":"新能源科学与工程","detail":"太阳能、氢能、储能技术。核心课程：热力学、传热学、新能源系统。","url":"https://sse.cuhk.edu.cn/"},
        {"name":"电子与计算机工程","detail":"ECE交叉，芯片设计+嵌入式系统。核心课程：数字电路、信号与系统、VLSI设计。","url":"https://sse.cuhk.edu.cn/"},
        {"name":"生物信息学","detail":"生物+数据科学交叉。核心课程：生物信息学、基因组学、蛋白质组学。","url":"https://med.cuhk.edu.cn/"},
        {"name":"生物医学工程","detail":"医疗器械、医学影像。核心课程：信号处理、医学成像、生物力学。","url":"https://med.cuhk.edu.cn/"},
        {"name":"药学","detail":"药物化学+药理学+药剂学。核心课程：药物化学、药剂学、药理学。","url":"https://med.cuhk.edu.cn/"},
        {"name":"生物科学","detail":"分子生物、细胞生物。核心课程：生物化学、分子生物学、遗传学。","url":"https://med.cuhk.edu.cn/"}
      ]},
      {"大类":"人文科学试验班","选考":"不限","专业":[
        {"name":"应用心理学","detail":"认知心理学、社会心理学、心理咨询。核心课程：心理学导论、心理统计、认知心理学。","url":"https://hss.cuhk.edu.cn/"},
        {"name":"城市管理","detail":"城市规划+公共政策。核心课程：城市经济学、城市规划原理、公共政策分析。","url":"https://hss.cuhk.edu.cn/"},
        {"name":"国际组织与全球治理","detail":"国际关系+全球治理。核心课程：国际关系理论、全球治理、国际法。","url":"https://hss.cuhk.edu.cn/"}
      ]}
    ],
    "banxing": [
      {"name":"丘成桐数学与AI英才班（丘班）","detail":"2026年新设。报名时提交申请，入学测试考核，录取后直接入读。由丘成桐教授领衔，培养数学与AI交叉拔尖人才，本研贯通培养。","url":"https://admissions.cuhk.edu.cn/"},
      {"name":"哥伦比亚大学3+2直硕班（哥大班）","detail":"港中深与美国哥伦比亚大学工程学院联合推出，亚洲唯一。前3年在港中深完成本科，第4年赴哥大交流并获港中深学士学位，第5年直升哥大硕士。对接专业：计算机、数据科学、统计、金融工程。","url":"https://sse.cuhk.edu.cn/page/1970"},
      {"name":"深港双主修项目","detail":"跨学科数据分析+X / 航天科学与地球信息学+X / 材料科学与工程学+X。学生在深圳和香港各修读两年，获得两个主修学位。","url":"https://admissions.cuhk.edu.cn/"},
      {"name":"环球供应链与物流管理","detail":"港中深+UBC（英属哥伦比亚大学）+CBS（哥本哈根商学院）三校合作项目，国际商务专业下设方向，有人数限制。","url":"https://sme.cuhk.edu.cn/"}
    ]
  },
  {
    "name": "华南理工大学",
    "short": "华南理工",
    "plan": "36人（仅广州国际校区）",
    "model": "631（高考60% + 校测30% + 学考10%）",
    "tuition": "9.5万/年",
    "xk": "全部专业：物+化",
    "score2025": "综评录取最低分 641分（36人）",
    "score_ref": "综评最低 641（36人） | 普通批 655–664（位次 5,258–8,590）",
    "score_note": "631模式（高考60%+校测30%+学考10%）。不可转入其他校区。生医工/软物质不招色盲色弱",
    "photo": "https://www.scut.edu.cn/images/2024-09/2e6a9c0a7e3f4d5a8b1c2d3e4f5a6b7c.jpg",
    "url": "https://xxgk.scut.edu.cn/",
    "top5": ["人工智能","集成电路设计与集成系统","微电子科学与工程","机器人工程","数据科学与大数据技术"],
    "majors": [
      {"大类":"广州国际校区（综评招生）","选考":"物+化","专业":[
        {"name":"人工智能","detail":"⭐ TOP推荐。机器学习、计算机视觉、NLP方向。核心课程：机器学习、深度学习、自然语言处理、计算机视觉。就业：AI公司、互联网大厂。","url":"https://www2.scut.edu.cn/s/167/t/100/p/11/c/189/list.htm"},
        {"name":"集成电路设计与集成系统","detail":"⭐ TOP推荐。芯片设计+EDA工具。核心课程：半导体物理、模拟/数字IC设计、VLSI设计。就业：华为海思、中芯国际等。国家急需紧缺专业。","url":"https://www2.scut.edu.cn/microelectronics/"},
        {"name":"微电子科学与工程","detail":"⭐ TOP推荐。半导体器件+芯片制造工艺。核心课程：固体电子学、微纳加工技术、半导体物理。就业：芯片产业核心岗位。","url":"https://www2.scut.edu.cn/microelectronics/"},
        {"name":"机器人工程","detail":"⭐ TOP推荐。智能机器人+自动化。核心课程：机器人学、自动控制、机器视觉、嵌入式系统。就业：大疆、华为等智能制造企业。","url":"https://www2.scut.edu.cn/s/167/t/100/p/11/c/189/list.htm"},
        {"name":"数据科学与大数据技术","detail":"⭐ TOP推荐。大数据分析+机器学习。核心课程：数据挖掘、机器学习、分布式计算、统计学习。就业：数据分析师、数据工程师。","url":"https://www2.scut.edu.cn/s/167/t/100/p/11/c/189/list.htm"},
        {"name":"智能制造工程","detail":"工业4.0+智能制造系统。核心课程：智能制造技术、工业物联网、数字孪生、智能装备。","url":"https://www2.scut.edu.cn/gzic/"},
        {"name":"生物医学工程","detail":"医疗器械+生物材料（不招色盲色弱）。核心课程：生物力学、医学成像、生物材料、医疗器械设计。","url":"https://www2.scut.edu.cn/gzic/"},
        {"name":"软物质科学与工程（示范班）","detail":"⭐ 特色示范班。前沿交叉学科，研究软物质材料（液晶、胶体、高分子等）。核心课程：软物质物理、高分子科学、胶体与界面化学。不招色盲色弱。","url":"https://www2.scut.edu.cn/gzic/"}
      ]}
    ],
    "banxing": [
      {"name":"软物质科学与工程示范班","detail":"华南理工广州国际校区特色班型，研究软物质前沿科学。全英文授课，小班化培养，注重科研创新能力。","url":"https://www2.scut.edu.cn/gzic/"}
    ]
  },
  {
    "name": "南方科技大学",
    "short": "南科大",
    "plan": "60人（综评）+ 3人（普通批）",
    "model": "631（高考60% + 校测30% + 学考10%）",
    "tuition": "6,000/年（中外合作13.5万/年）",
    "xk": "全部专业：物+化",
    "score2025": "综评录取分 639–670分；平行志愿投档线 660分",
    "score_ref": "综评 639–670（60人） | 平行志愿 660（3人）",
    "score_note": "2025年首次在浙江平行志愿招生（人工智能3人）。综评60人+平行志愿3人=共63人",
    "photo": "https://www.sustech.edu.cn/images/campus.jpg",
    "url": "https://zs.sustech.edu.cn/",
    "top5": ["人工智能","计算机科学与技术","微电子科学与工程","金融学","临床医学"],
    "majors": [
      {"大类":"按物理学大类录取，入学不分专业","选考":"物+化","专业":[
        {"name":"人工智能","detail":"⭐ TOP推荐。2025新增专业。机器学习、深度学习、计算机视觉。核心课程：机器学习、深度学习、强化学习、计算机视觉。就业：AI头部企业。","url":"https://cse.sustech.edu.cn/"},
        {"name":"计算机科学与技术","detail":"⭐ TOP推荐。系统/网络/AI/安全方向，图灵班特色培养。核心课程：数据结构、操作系统、计算机网络、编译原理。就业：腾讯/字节/华为。","url":"https://cse.sustech.edu.cn/"},
        {"name":"微电子科学与工程","detail":"⭐ TOP推荐。芯片设计+集成电路，集成电路卓越班。核心课程：半导体物理、集成电路设计、VLSI。就业：芯片行业紧缺人才。","url":"https://sme.sustech.edu.cn/"},
        {"name":"金融学","detail":"⭐ TOP推荐。量化金融+金融科技方向。核心课程：金融工程、量化投资、风险管理、金融计量。就业：投行/基金/券商。","url":"https://business.sustech.edu.cn/"},
        {"name":"临床医学","detail":"⭐ TOP推荐。2025新增。卓越医师班培养。核心课程：人体解剖学、生理学、病理学、内外科学。","url":"https://med.sustech.edu.cn/"},
        {"name":"数学与应用数学","detail":"菲尔兹班培养。核心课程：数学分析、高等代数、实变函数、拓扑学。适合深造。","url":"https://math.sustech.edu.cn/"},
        {"name":"物理学","detail":"攀峰班/从游班培养。核心课程：理论力学、量子力学、电动力学。科研导向。","url":"https://phy.sustech.edu.cn/"},
        {"name":"机器人工程","detail":"智能机器人系统。核心课程：机器人学、机器视觉、运动控制、SLAM。","url":"https://sme.sustech.edu.cn/"},
        {"name":"生物医学工程","detail":"医疗器械+生物材料。核心课程：生物力学、医学成像、生物材料。","url":"https://bme.sustech.edu.cn/"},
        {"name":"材料科学与工程","detail":"新能源材料、纳米材料。核心课程：材料科学基础、材料物理性能。","url":"https://mse.sustech.edu.cn/"},
        {"name":"通信工程","detail":"5G/6G通信、信号处理。核心课程：通信原理、数字信号处理、信息论。","url":"https://eee.sustech.edu.cn/"},
        {"name":"航空航天工程","detail":"飞行器设计、空天动力。核心课程：空气动力学、飞行力学、推进系统。","url":"https://mae.sustech.edu.cn/"}
      ]},
      {"大类":"中外合作（伦敦国王学院医学院）","选考":"物+化","专业":[
        {"name":"生物医学科学","detail":"南科大+伦敦国王学院联合培养。全英文授课，毕业获双学位。第二学年开学前需雅思6.5（单项≥6）。学费13.5万/年。","url":"https://med.sustech.edu.cn/"},
        {"name":"生物医学工程","detail":"南科大+伦敦国王学院联合培养。医疗器械、医学成像方向。毕业获双学位。学费13.5万/年。","url":"https://bme.sustech.edu.cn/"}
      ]}
    ],
    "banxing": [
      {"name":"从游班","detail":"顶尖科学家导师制培养。由院士/国家级人才担任导师，一对一指导，本研贯通。面向有强烈科研兴趣的学生。","url":"https://zs.sustech.edu.cn/"},
      {"name":"基础科学攀峰班","detail":"理科拔尖培养计划。面向数学、物理、化学等基础学科，本研贯通，深造率极高。","url":"https://zs.sustech.edu.cn/"},
      {"name":"交叉科学创新班","detail":"跨学科培养，鼓励学生在AI+生物、物理+材料等交叉领域探索创新。","url":"https://zs.sustech.edu.cn/"},
      {"name":"计算机图灵班","detail":"计算机方向拔尖培养。配备ACM金牌教练，注重算法竞赛和科研能力。","url":"https://cse.sustech.edu.cn/"},
      {"name":"数学菲尔兹班","detail":"数学方向拔尖培养。小班化精英教学，培养数学研究人才。","url":"https://math.sustech.edu.cn/"},
      {"name":"集成电路卓越班","detail":"2025新增。面向芯片设计与制造，培养集成电路行业紧缺人才。","url":"https://sme.sustech.edu.cn/"},
      {"name":"生物创新挑战班","detail":"2025新增。生物科学方向拔尖培养，注重创新实验和科研能力。","url":"https://bio.sustech.edu.cn/"},
      {"name":"卓越医师班","detail":"2025新增。临床医学方向精英培养，小班教学+临床实践。","url":"https://med.sustech.edu.cn/"}
    ]
  },
  {
    "name": "上海科技大学",
    "short": "上科大",
    "plan": "28人（提前批，全国18省市招生）",
    "model": "校园开放日加分（A档+20/B档+15/C档+10）+ 高考",
    "tuition": "7,000/年",
    "xk": "全部专业：物+化",
    "score2025": "高考裸分 648–673分（浙江录取28人）",
    "score_ref": "高考裸分 648–673 | 2024参考 671–699（26人）",
    "score_note": "2025年浙江录取28人（2024年26人）。校园开放日加分10-20分。承诺满足第一志愿",
    "photo": "https://www.shanghaitech.edu.cn/images/campus.jpg",
    "url": "https://admission.shanghaitech.edu.cn/",
    "top5": ["计算机科学与技术","电子信息工程","材料科学与工程","生物医学工程","数学与应用数学"],
    "majors": [
      {"大类":"全部10个专业（满足第一志愿）","选考":"物+化","专业":[
        {"name":"计算机科学与技术","detail":"⭐ TOP推荐。国家级一流专业。AI/系统/安全方向。核心课程：数据结构、操作系统、计算机网络、机器学习。全员进实验室科研。就业：BAT、字节跳动等。","url":"https://sist.shanghaitech.edu.cn/"},
        {"name":"电子信息工程","detail":"⭐ TOP推荐。省级一流专业。集成电路设计+通信+信号处理。核心课程：信号与系统、数字电路、通信原理、嵌入式系统。就业：华为、中兴等。","url":"https://sist.shanghaitech.edu.cn/"},
        {"name":"材料科学与工程","detail":"⭐ TOP推荐。双一流建设学科。新能源材料、纳米材料。核心课程：材料科学基础、固体物理、材料表征。全员进实验室。","url":"https://spst.shanghaitech.edu.cn/"},
        {"name":"生物医学工程","detail":"⭐ TOP推荐。医疗器械+医学影像+脑科学。核心课程：生物力学、医学成像、神经工程。就业：联影医疗、迈瑞等。","url":"https://bme.shanghaitech.edu.cn/"},
        {"name":"数学与应用数学","detail":"⭐ TOP推荐。应用数学+数据科学。核心课程：数学分析、高等代数、概率论、数值计算。深造率高。","url":"https://ims.shanghaitech.edu.cn/"},
        {"name":"物理学","detail":"凝聚态物理、量子信息。核心课程：理论力学、量子力学、固体物理。科研导向。","url":"https://spst.shanghaitech.edu.cn/"},
        {"name":"化学","detail":"有机化学、材料化学。核心课程：有机化学、物理化学、仪器分析。","url":"https://spst.shanghaitech.edu.cn/"},
        {"name":"生物科学","detail":"分子生物、细胞生物、神经科学。核心课程：生物化学、分子生物学、遗传学。","url":"https://slst.shanghaitech.edu.cn/"},
        {"name":"生物技术","detail":"基因工程、蛋白质工程。核心课程：基因工程、发酵工程、生物分离工程。","url":"https://slst.shanghaitech.edu.cn/"},
        {"name":"工业设计","detail":"智能产品设计+人机交互。核心课程：设计思维、人机工程、原型制作。","url":"https://sist.shanghaitech.edu.cn/"}
      ]}
    ],
    "banxing": [
      {"name":"全员导师制","detail":"每位本科生入学即配备专属学术导师，师生比极高。导师均为活跃的科研一线教授。","url":"https://admission.shanghaitech.edu.cn/"},
      {"name":"100%本科生进实验室","detail":"所有本科生从大一开始参与真实科研项目，在教授实验室进行科研实践。","url":"https://admission.shanghaitech.edu.cn/"},
      {"name":"校园开放日加分","detail":"A档+20分 / B档+15分 / C档+10分。考生最终成绩 = 高考总分 + 校园开放日成绩。","url":"https://admission.shanghaitech.edu.cn/"}
    ]
  },
  {
    "name": "昆山杜克大学",
    "short": "昆山杜克",
    "plan": "~23人",
    "model": "64（高考60% + 校评40%）",
    "tuition": "19万/年",
    "xk": "物+化为主",
    "score2025": "综评录取分 610–661分（浙江23人）",
    "score_ref": "综评 610–661分（高考裸分） | 入围需达特殊线（592分）",
    "score_note": "2025年浙江录取23人，学军紫金港3人、湖州中学3人等。全国录取350人",
    "photo": "https://dukekunshan.edu.cn/sites/default/files/campus-hero.jpg",
    "url": "https://admissions.dukekunshan.edu.cn/",
    "top5": ["数据科学与大数据技术","经济学","材料科学与工程","国际事务与国际关系","数字媒体艺术"],
    "majors": [
      {"大类":"通识博雅，大二定专业","选考":"物+化为主","专业":[
        {"name":"数据科学与大数据技术","detail":"⭐ TOP推荐。全国排名第3（A++）。核心课程：数据挖掘、机器学习、大数据计算、统计学习。全英文授课，大三可赴美国杜克。就业：顶尖科技公司数据科学家。","url":"https://dukekunshan.edu.cn/academics/"},
        {"name":"经济学","detail":"⭐ TOP推荐。微观/宏观经济学+计量经济学。核心课程：中级微观/宏观经济学、计量经济学、博弈论。深造率高，可申请美国顶尖经济系。","url":"https://dukekunshan.edu.cn/academics/"},
        {"name":"材料科学与工程","detail":"⭐ TOP推荐。纳米材料、能源材料、生物材料。核心课程：材料科学基础、固体物理、材料表征。配套先进实验室。","url":"https://dukekunshan.edu.cn/academics/"},
        {"name":"国际事务与国际关系","detail":"⭐ TOP推荐。全国排名第3（A+）。核心课程：国际关系理论、比较政治学、国际法、全球治理。国际组织/外交方向。","url":"https://dukekunshan.edu.cn/academics/"},
        {"name":"数字媒体艺术","detail":"⭐ TOP推荐。交互设计+数字影像+游戏设计。核心课程：数字媒体基础、交互设计、3D建模。技术与艺术结合。","url":"https://dukekunshan.edu.cn/academics/"},
        {"name":"数学与应用数学","detail":"纯数学+应用数学。核心课程：数学分析、高等代数、实变函数、概率论。深造率高。","url":"https://dukekunshan.edu.cn/academics/"},
        {"name":"生物科学","detail":"分子生物+细胞生物。核心课程：生物化学、分子生物学、遗传学、细胞生物学。","url":"https://dukekunshan.edu.cn/academics/"},
        {"name":"化学","detail":"有机化学+分析化学。核心课程：有机化学、物理化学、分析化学。","url":"https://dukekunshan.edu.cn/academics/"},
        {"name":"全球健康学","detail":"公共卫生+流行病学。核心课程：全球健康概论、流行病学、卫生政策。","url":"https://dukekunshan.edu.cn/academics/"},
        {"name":"环境科学","detail":"环境化学+生态学+环境政策。核心课程：环境科学导论、环境化学、生态学。","url":"https://dukekunshan.edu.cn/academics/"},
        {"name":"历史学","detail":"中国史+世界史+公众史学。核心课程：中国史、世界史、史学理论。","url":"https://dukekunshan.edu.cn/academics/"}
      ]}
    ],
    "banxing": [
      {"name":"美国杜克学期","detail":"所有本科生在大三可赴美国杜克大学（全美排名前10）学习一个完整学期，与杜克本校学生同堂上课，费用不变。","url":"https://dukekunshan.edu.cn/academics/"},
      {"name":"三证毕业","detail":"毕业生同时获得昆山杜克大学学士学位、毕业证书，以及美国杜克大学学士学位。三证全球认可。","url":"https://dukekunshan.edu.cn/academics/"},
      {"name":"全英文小班教学","detail":"100%全英文授课，80%以上课堂≤20人，师生比1:8。每位学生获得充分的个性化关注。","url":"https://dukekunshan.edu.cn/academics/"}
    ]
  }
];

window.zongpingData = schoolData;
