import React, { useMemo, useState } from "react";
import "./index.css";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "zhCN", label: "简体" },
  { code: "zhHK", label: "繁體" },
];

const ui = {
  en: {
    subtitle: "Hong Kong RTE packaging guide",
    guide: "Guide",
    symbolsNav: "Recycling Symbols",
    recycling: "Recycling points",
    game: "Game",
    businessNav: "For Business",
    badge: "Public education website for RTE packaging sustainability",
    heroTitle: "Make RTE packaging easier to understand, separate and recycle.",
    heroText: "A practical guide for identifying ready-to-eat food packaging in Hong Kong, checking material composition, and learning how to handle each item before disposal.",
    explore: "Explore packaging guide",
    gameBtn: "Go to learning game",
    categoryTitle: "Choose a packaging category",
    categoryText: "Start from the type of item you are holding, then open the detailed guide for that packaging.",
    viewItems: "Click to View Packaging items",
    backHome: "Back to categories",
    backCategory: "Back to item list",
    search: "Search packaging items...",
    itemCount: "items",
    openGuide: "Open detailed guide",
    status: "Disposal advice",
    recyclable: "Recyclable",
    general: "General Waste",
    convenience: "Recycling convenience",
    imagePlaceholder: "Image placeholder",
    imageHint: "Replace this with your own field observation photo later.",
    summary: "Quick summary",
    materialBreakdown: "Material composition and breakdown",
    cleaningMethod: "Cleaning method",
    recyclingSteps: "Recycling steps",
    wrongMethods: "Common incorrect methods",
    notes: "Notes",
    recyclingValue: "Recycling value",
    mustDo: "Must do",
    optional: "Optional",
    accepted: "Recyclable",
    notAccepted: "Not recyclable",
    officialDirectory: "Find more GREEN@COMMUNITY locations",
    officialDirectoryText: "For the final website, link to the official location directory because opening hours and contacts may change.",
    recyclingHeading: "GREEN@COMMUNITY examples",
    recyclingText: "These examples show how the website can present location, contact and map links without listing every mobile collection point.",
    address: "Address",
    phone: "Phone",
    email: "Email",
    openingHours: "Opening hours",
    officialPage: "Official page",
    googleMap: "Google Map",
    suitableFor: "Suitable for",
    gameHeading: "Use game as the before-and-after knowledge test.",
    gameText: "Users can play your RTE packaging game before reading the guide, then play again afterwards to compare scores and reflect knowledge improvement.",
    beforeAfter: "Before / after score comparison",
    beforeScore: "Before score",
    afterScore: "After score",
    scoreChange: "Score change",
    compared: "compared with the first attempt",
    scoreNotice: "Submitted scores will be stored anonymously and used only for this HKU MSc Environmental Management capstone project evaluation.",
    submitScore: "Submit score data",
    scoreSubmitted: "Score data submitted. Thank you!",
    aboutTitle: "About this capstone project",
    aboutText: "PackitWise RTE is a capstone project developed by students from the MSc Environmental Management programme at The University of Hong Kong. Through this website and the learning game, we aim to improve public understanding of ready-to-eat food packaging in Hong Kong, including common materials, recycling challenges and better disposal practices.",
    noResults: "No matching items found.",
    symbolsTitle: "Understand Common Recycling Symbols First",
    symbolsText: "Before checking each packaging item, you can first learn the common recycling symbols that may appear on ready-to-eat food packaging in Hong Kong.",
    symbolsImageAlt: "Common recycling symbols for ready-to-eat food packaging in Hong Kong",
    symbolsSourceNote: "Reference information from:",
    instagramTitle: "Follow us on Instagram",
    instagramText: "Stay connected with our project updates, recycling tips and educational posts on RTE food packaging in Hong Kong.",
    instagramButton: "Open Instagram",
    businessTitle: "Recommendations for Businesses",
    businessText: "Based on our project findings, we propose a phased approach for convenience stores and RTE food packaging businesses. The recommendations move from short-term consumer guidance and pilot recycling support, to mid-term packaging design improvements, and finally to longer-term collaboration across the packaging and recycling system.",
    businessShortTitle: "Short-term: Start with a small-scale pilot",
    businessShortText: "In the short term, businesses can reduce consumer confusion by testing simple recycling support in selected stores. This may include choosing one or two high-volume RTE products, setting up dedicated recycling bins, and using clear bilingual labels or posters to explain how trays, lids, films and sleeves should be handled. QR codes can also guide consumers to nearby recycling points. By reviewing participation rates, contamination levels, consumer understanding and staff feedback, businesses can decide whether the pilot is practical enough to expand.",
    businessMidTitle: "Mid-term: Improve packaging design and recyclability",
    businessMidText: "In the mid term, businesses can improve the packaging itself so that it is easier for consumers and recyclers to handle. This includes promoting design for disassembly, using removable labels or wash-off adhesives, and reducing the use of difficult-to-recycle plastics such as PVC. These changes can improve recyclability, respond to consumer expectations for more sustainable packaging, and reduce possible future regulatory or supply chain risks.",
    businessLongTitle: "Long-term: Build a more systematic packaging transition",
    businessLongText: "In the long term, businesses should move beyond individual material changes and work towards a more systematic transition. Where suitable, mono-material packaging, fully paper-based packaging, and bio-based or edible coatings could be explored. More importantly, businesses should work with local recyclers and packaging suppliers to ensure that new packaging designs are not only safe and commercially practical, but also compatible with Hong Kong’s recycling system.",
    businessOverallTitle: "Overall direction",
    businessOverallText: "Overall, we recommend a step-by-step approach. Short-term actions can focus on store-level pilots and consumer education; mid-term actions can improve labels, adhesives and material choices; and long-term actions should involve closer collaboration among retailers, packaging suppliers, recyclers and government. This allows businesses to improve packaging sustainability gradually while balancing cost, feasibility and the current limitations of Hong Kong’s recycling infrastructure.",
  },
  zhCN: {
    subtitle: "香港即食包装回收指南",
    guide: "包装指南",
    symbolsNav: "回收标识",
    recycling: "回收点",
    game: "小游戏",
    businessNav: "企业建议",
    badge: "面向公众的即食包装可持续性教育网站",
    heroTitle: "让即食包装更容易被理解、分类和回收。",
    heroText: "一个面向香港消费者的实用指南，帮助用户识别即食食品包装、查看材料组成，并学习每种包装在丢弃前应该如何处理。",
    explore: "浏览包装指南",
    gameBtn: "前往小游戏",
    categoryTitle: "选择包装类别",
    categoryText: "先根据手上的包装类型选择大类，再进入具体包装的详细指南。",
    viewItems: "点击查看具体包装",
    backHome: "返回类别",
    backCategory: "返回项目列表",
    search: "搜索包装项目……",
    itemCount: "个项目",
    openGuide: "打开详细指南",
    status: "处理建议",
    recyclable: "可回收",
    general: "一般垃圾",
    convenience: "回收便利程度",
    summary: "快速总结",
    materialBreakdown: "材料组成与拆解",
    cleaningMethod: "清洁方法",
    recyclingSteps: "回收步骤",
    wrongMethods: "常见错误操作",
    notes: "注意事项",
    recyclingValue: "回收价值",
    mustDo: "必做",
    optional: "可选",
    accepted: "可回收",
    notAccepted: "不可回收",
    officialDirectory: "查看更多绿在区区地点",
    recyclingHeading: "绿在区区地点示例",
    address: "地址",
    phone: "电话",
    email: "邮箱",
    openingHours: "开放时间",
    officialPage: "官方页面",
    googleMap: "Google 地图",
    suitableFor: "适合回收",
    gameHeading: "用小游戏做前后测试。",
    gameText: "用户可以在阅读指南前先玩一次 RTE 包装小游戏，学习后再玩一次，通过前后分数对比反映知识是否提升。",
    beforeAfter: "前后分数对比",
    beforeScore: "学习前分数",
    afterScore: "学习后分数",
    scoreChange: "分数变化",
    compared: "相比第一次尝试",
    scoreNotice: "提交的分数将以匿名形式储存，并仅用于本香港大学 MSc Environmental Management Capstone 项目的评估。",
    submitScore: "提交分数数据",
    scoreSubmitted: "分数数据已提交，谢谢！",
    aboutTitle: "关于本 Capstone 项目",
    aboutText: "PackitWise RTE 是由香港大学 MSc Environmental Management 课程学生开发的 Capstone 项目。我们希望通过这个网站和互动小游戏，提升公众对香港即食食品包装的认知，包括常见包装材料、回收难点以及更合适的处理方式。",
    noResults: "没有找到匹配的包装项目。",
    symbolsTitle: "先了解常见回收标识",
    symbolsText: "在查看不同即食食品包装前，可先了解香港即食食品包装上可能出现的常见回收标识。",
    symbolsImageAlt: "香港即食食品包装常见回收标识",
    symbolsSourceNote: "图片根据以下参考资料：",
    instagramTitle: "关注我们的 Instagram",
    instagramText: "获取更多关于香港即食食品包装回收的项目更新、回收小贴士和教育内容。",
    instagramButton: "打开 Instagram",
    businessTitle: "给企业的建议",
    businessText: "根据本项目的研究结果，我们建议便利店及即食食品包装相关企业采用分阶段方式改善包装回收。建议从短期的消费者指引和门店试点开始，逐步延伸至中期的包装设计改良，并在长期推动包装供应商、零售商和回收系统之间的合作。",
    businessShortTitle: "短期：先从小规模试点开始",
    businessShortText: "短期阶段的重点是降低消费者在回收即食食品包装时的混淆。企业可以先选择一至两类销量较高、包装结构相对清晰的产品，在部分门店设置专门的回收桶，并配合简单的双语标签和海报，说明托盘、盖子、薄膜和纸套等不同组件应如何处理。QR code 也可以用来显示附近回收点的位置、开放时间和可接受材料。通过参与率、污染程度、消费者理解程度和员工反馈，企业可以判断该模式是否适合进一步扩大。",
    businessMidTitle: "中期：改善包装设计，提高可回收性",
    businessMidText: "中期阶段可以从包装结构本身入手，减少消费者和回收商的处理难度。例如，企业可以推动易拆解设计，让消费者更容易分离不同包装组件；使用可撕除标签或可水洗胶黏剂，减少标签和胶水对回收过程的污染；同时逐步减少较难回收的塑料材料，例如 PVC。这些改变不仅可以提升包装的可回收性，也有助于回应消费者对可持续包装的期待，并降低未来可能出现的监管和供应链风险。",
    businessLongTitle: "长期：推动更系统的包装转型",
    businessLongText: "长期阶段的重点是建立更完整的可持续包装体系，而不只是改变单一包装材料。企业可以在合适的产品上推广单一材料包装，减少复合材料带来的回收困难；也可以探索以全纸质包装、生物基涂层或可食用涂层改善部分即食食品包装。更重要的是，企业需要与本地回收商和包装供应商合作，确保新包装既符合食品安全和商业需求，也能够被现有回收系统真正接收和处理。",
    businessOverallTitle: "整体方向",
    businessOverallText: "整体而言，我们建议企业采用循序渐进的方式改善即食食品包装回收。短期先通过门店试点和消费者教育减少错误弃置；中期改进包装标签、胶黏剂和材料选择，提高包装本身的可回收性；长期则需要与包装供应商、回收商、零售商和政府等持份者合作，建立更稳定的回收闭环。这样可以让企业在控制成本和操作难度的同时，逐步提升包装可持续性。",
  },
  zhHK: {
    subtitle: "香港即食食品包裝回收指南",
    guide: "包裝指南",
    symbolsNav: "回收標識",
    recycling: "回收點",
    game: "小遊戲",
    businessNav: "企業建議",
    badge: "面向公眾的即食食品包裝可持續教育網站",
    heroTitle: "令即食食品包裝更易理解、分類及回收。",
    heroText: "一個面向香港消費者的實用指南，協助用戶識別即食食品包裝、查看材料組成，並學習每種包裝在丟棄前應如何處理。",
    explore: "瀏覽包裝指南",
    gameBtn: "前往小遊戲",
    categoryTitle: "選擇包裝類別",
    categoryText: "先根據手上的包裝類型選擇大類，再進入具體包裝的詳細指南。",
    viewItems: "點擊查看具體包裝",
    backHome: "返回類別",
    backCategory: "返回項目列表",
    search: "搜尋包裝項目……",
    itemCount: "個項目",
    openGuide: "打開詳細指南",
    status: "處理建議",
    recyclable: "可回收",
    general: "一般垃圾",
    convenience: "回收便利程度",
    summary: "快速總結",
    materialBreakdown: "材料組成與拆解",
    cleaningMethod: "清潔方法",
    recyclingSteps: "回收步驟",
    wrongMethods: "常見錯誤操作",
    notes: "注意事項",
    recyclingValue: "回收價值",
    mustDo: "必做",
    optional: "可選",
    accepted: "可回收",
    notAccepted: "不可回收",
    officialDirectory: "查看更多綠在區區地點",
    recyclingHeading: "綠在區區地點例子",
    address: "地址",
    phone: "電話",
    email: "電郵",
    openingHours: "開放時間",
    officialPage: "官方頁面",
    googleMap: "Google 地圖",
    suitableFor: "適合回收",
    gameHeading: "用小遊戲做前後測試。",
    gameText: "用戶可以在閱讀指南前先玩一次 RTE 包裝小遊戲，學習後再玩一次，透過前後分數對比反映知識是否提升。",
    beforeAfter: "前後分數對比",
    beforeScore: "學習前分數",
    afterScore: "學習後分數",
    scoreChange: "分數變化",
    compared: "相比第一次嘗試",
    scoreNotice: "提交的分數將以匿名形式儲存，並只用於本香港大學 MSc Environmental Management Capstone 項目的評估。",
    submitScore: "提交分數數據",
    scoreSubmitted: "分數數據已提交，謝謝！",
    aboutTitle: "關於本 Capstone 項目",
    aboutText: "PackitWise RTE 是由香港大學 MSc Environmental Management 課程學生開發的 Capstone 項目。我們希望透過這個網站和互動小遊戲，提升公眾對香港即食食品包裝的認知，包括常見包裝材料、回收難點以及更合適的處理方式。",
    noResults: "沒有找到匹配的包裝項目。",
    symbolsTitle: "先了解常見回收標識",
    symbolsText: "在查看不同即食食品包裝前，可先了解香港即食食品包裝上可能出現的常見回收標識。",
    symbolsImageAlt: "香港即食食品包裝常見回收標識",
    symbolsSourceNote: "圖片根據以下參考資料：",
    instagramTitle: "關注我們的 Instagram",
    instagramText: "獲取更多關於香港即食食品包裝回收的項目更新、回收小貼士及教育內容。",
    instagramButton: "打開 Instagram",
    businessTitle: "給企業的建議",
    businessText: "根據本項目的研究結果，我們建議便利店及即食食品包裝相關企業採用分階段方式改善包裝回收。建議從短期的消費者指引和門店試點開始，逐步延伸至中期的包裝設計改良，並在長期推動包裝供應商、零售商和回收系統之間的合作。",
    businessShortTitle: "短期：先從小規模試點開始",
    businessShortText: "短期階段的重點是減少消費者在回收即食食品包裝時的混淆。企業可以先選擇一至兩類銷量較高、包裝結構相對清晰的產品，在部分門店設置專門的回收桶，並配合簡單的雙語標籤和海報，說明托盤、蓋子、薄膜和紙套等不同組件應如何處理。QR code 也可以用來顯示附近回收點的位置、開放時間和可接受物料。透過參與率、污染程度、消費者理解程度和員工回饋，企業可以判斷該模式是否適合進一步擴展。",
    businessMidTitle: "中期：改善包裝設計，提高可回收性",
    businessMidText: "中期階段可以從包裝結構本身入手，減少消費者和回收商的處理難度。例如，企業可以推動易拆解設計，讓消費者更容易分離不同包裝組件；使用可撕除標籤或可水洗膠黏劑，減少標籤和膠水對回收過程的污染；同時逐步減少較難回收的塑膠物料，例如 PVC。這些改變不僅可以提升包裝的可回收性，也有助於回應消費者對可持續包裝的期待，並降低未來可能出現的監管和供應鏈風險。",
    businessLongTitle: "長期：推動更系統性的包裝轉型",
    businessLongText: "長期階段的重點是建立更完整的可持續包裝體系，而不只是改變單一包裝物料。企業可以在合適的產品上推廣單一物料包裝，減少複合材料帶來的回收困難；也可以探索以全紙質包裝、生物基塗層或可食用塗層改善部分即食食品包裝。更重要的是，企業需要與本地回收商和包裝供應商合作，確保新包裝既符合食品安全和商業需求，也能夠被現有回收系統真正接收和處理。",
    businessOverallTitle: "整體方向",
    businessOverallText: "整體而言，我們建議企業採用循序漸進的方式改善即食食品包裝回收。短期先透過門店試點和消費者教育減少錯誤棄置；中期改進包裝標籤、膠黏劑和物料選擇，提高包裝本身的可回收性；長期則需要與包裝供應商、回收商、零售商和政府等持份者合作，建立更穩定的回收閉環。這樣可以讓企業在控制成本和操作難度的同時，逐步提升包裝可持續性。",
  },
};

//设置大类
const categoryMeta = {
  beverage: {
    icon: "🥤",
    name: { en: "Drinks and beverage containers", zhCN: "饮品及饮料容器", zhHK: "飲品及飲料容器" },
    desc: { en: "Bottles, cans, drink cups, cup lids and straw-related packaging.", zhCN: "饮料瓶、铝罐、饮品杯、杯盖和吸管相关包装。", zhHK: "飲品樽、鋁罐、飲品杯、杯蓋及吸管相關包裝。" },
  },
  mealBoxes: {
    icon: "🍱",
    name: { en: "Meal boxes, bowls and food containers", zhCN: "餐盒、碗及食物容器", zhHK: "餐盒、碗及食物容器" },
    desc: { en: "Main containers for rice boxes, salads, noodles, bento meals and takeaway food.", zhCN: "用于饭盒、沙拉、面食、便当和外卖食物的主要容器。", zhHK: "用於飯盒、沙律、麵食、便當及外賣食物的主要容器。" },
  },
  paperWraps: {
    icon: "🛍️",
    name: { en: "Paper bags and wrapper packaging", zhCN: "纸袋及包装纸类", zhHK: "紙袋及包裝紙類" },
    desc: { en: "Paper bags, sandwich wrappers, rice ball bags and paper-plastic packaging.", zhCN: "纸袋、三明治包装、饭团袋和纸塑复合包装。", zhHK: "紙袋、三文治包裝、飯糰袋及紙塑複合包裝。" },
  },
  pouchesSachets: {
    icon: "🍅",
    name: { en: "Pouches, sachets and snack packs", zhCN: "袋装、酱料包及零食包装", zhHK: "袋裝、醬料包及零食包裝" },
    desc: { en: "Sauce sachets, snack bags and ready-to-eat meat pouches made from flexible or composite materials.", zhCN: "酱料包、零食袋和即食肉类袋，多为软性或复合材料。", zhHK: "醬料包、零食袋及即食肉類袋，多為軟性或複合材料。" },
  },
  accessories: {
    icon: "🏷️",
    name: { en: "Labels, sealing films and cutlery packs", zhCN: "标签、封膜及餐具包装", zhHK: "標籤、封膜及餐具包裝" },
    desc: { en: "Small attached parts such as stickers, sealing films and disposable cutlery wrappers.", zhCN: "贴纸、封膜、一次性餐具包装等小型附属包装。", zhHK: "貼紙、封膜、一次性餐具包裝等小型附屬包裝。" },
  },
};

// 设置小类
const itemData = [
  {
    id: 1,
    category: "beverage",
    icon: "🧴",
    answer: "recyclable",
    image: "/images/petbottle.png",
    name: { en: "PET Drink Bottle", zhCN: "PET饮料瓶", zhHK: "PET飲料瓶" },
    explanation: { en: "A single-material PET bottle with relatively good recycling potential if emptied and clean.", zhCN: "单一PET材质，清空清洗后较容易回收。", zhHK: "單一PET材質，清空清洗後較容易回收。" }
  },
  {
    id: 2,
    category: "beverage",
    icon: "🥫",
    answer: "recyclable",
    image: "/images/aluminumcan.png",
    name: { en: "Aluminium Can", zhCN: "铝罐", zhHK: "鋁罐" },
    explanation: { en: "Aluminium has high recycling value and can usually be recycled if empty and clean.", zhCN: "铝材回收价值高，清空后通常可回收。", zhHK: "鋁材回收價值高，清空後通常可回收。" }
  },
  {
    id: 3,
    category: "beverage",
    icon: "☕",
    answer: "general",
    image: "/images/coffee.png",
    name: { en: "Takeaway Coffee Cup", zhCN: "外带咖啡杯", zhHK: "外賣咖啡杯" },
    explanation: { 
      en: "Takeaway coffee cups are usually not recyclable because they often contain plastic lining and drink residue. Please dispose of them as general waste.", 
      zhCN: "外带咖啡杯通常含有塑料内层，并容易有饮品残留，一般不可回收，请丢入一般垃圾。", 
      zhHK: "外賣咖啡杯通常含有塑膠內層，並容易有飲品殘留，一般不可回收，請丟入一般垃圾。" }
  },
  {
    id: 4,
    category: "beverage",
    icon: "🧋",
    answer: "general",
    image: "/images/bubbletea.jpg",
    name: { en: "Bubble Tea Cup", zhCN: "奶茶杯", zhHK: "奶茶杯" },
    explanation: { 
      en: "Bubble tea cups are usually not recyclable because of drink residue, sealing film, straws and mixed small components. Please dispose of them as general waste.", 
      zhCN: "奶茶杯通常因饮品残留、封膜、吸管及混合小部件而不可回收，请丢入一般垃圾。", 
      zhHK: "奶茶杯通常因飲品殘留、封膜、飲管及混合小部件而不可回收，請丟入一般垃圾。" }
  },
  {
    id: 5,
    category: "mealBoxes",
    icon: "🍱",
    answer: "general",
    image: "/images/boxlunch.png",
    name: { en: "Bento Lunch Box", zhCN: "便当盒", zhHK: "便當盒" },
    explanation: { en: "Lunch boxes often contain food residue, oil, stickers or mixed materials, so they should not be recycled unless properly cleaned and separated.", zhCN: "便当盒常有食物残留、油污、贴纸或混合材料，未清洗分离前不适合回收。", zhHK: "便當盒常有食物殘留、油污、貼紙或混合材料，未清洗分離前不適合回收。" }
  },
  {
    id: 6,
    category: "mealBoxes",
    icon: "🥡",
    answer: "general",
    image: "/images/lunchbox_lids.png",
    name: { en: "Lunch Box Lid", zhCN: "餐盒盖", zhHK: "餐盒蓋" },
    explanation: { en: "Some plastic lids may be recyclable, but food residue, labels or mixed materials can reduce recyclability.", zhCN: "部分塑料盖可能可回收，但食物残留、标签或混合材料会降低回收性。", zhHK: "部分塑膠蓋可能可回收，但食物殘留、標籤或混合材料會降低回收性。" }
  },
  {
    id: 7,
    category: "mealBoxes",
    icon: "🥗",
    answer: "general",
    image: "/images/saladbag.webp",
    name: { en: "Salad Packaging", zhCN: "沙拉包装", zhHK: "沙律包裝" },
    explanation: { 
      en: "Salad packaging often contains food residue, labels, lids and mixed plastic parts, so it is usually not recyclable. Please dispose of it as general waste.", 
      zhCN: "沙拉包装常有食物残留、标签、盖子及混合塑料部件，通常不可回收，请丢入一般垃圾。", 
      zhHK: "沙律包裝常有食物殘留、標籤、蓋及混合塑膠部件，通常不可回收，請丟入一般垃圾。" }
  },
  {
    id: 8,
    category: "mealBoxes",
    icon: "🍜",
    answer: "general",
    image: "/images/instantnoodles.png",
    name: { en: "Instant Noodle Bowl", zhCN: "泡面碗", zhHK: "即食麵碗" },
    explanation: { 
      en: "Instant noodle bowls are usually contaminated with soup, oil and food residue, so they are not suitable for recycling. Please dispose of them as general waste.", 
      zhCN: "泡面碗通常有汤、油和食物残留，不适合回收，请丢入一般垃圾。", 
      zhHK: "即食麵碗通常有湯、油和食物殘留，不適合回收，請丟入一般垃圾。" }
  },
  {
    id: 9,
    category: "paperWraps",
    icon: "🍞",
    answer: "general",
    image: "/images/bread.png",
    name: { en: "Bread Packaging", zhCN: "面包包装", zhHK: "麵包包裝" },
    explanation: { 
      en: "Bread packaging is usually soft plastic film or paper-plastic composite material, so it is not recyclable through normal recycling channels.", 
      zhCN: "面包包装通常是软塑料薄膜或纸塑复合材料，不能通过普通回收渠道回收。", 
      zhHK: "麵包包裝通常是軟塑膠薄膜或紙塑複合材料，不能透過普通回收渠道回收。" 
    }
  },
  {
    id: 10,
    category: "paperWraps",
    icon: "🥪",
    answer: "general",
    image: "/images/sandwichbox.png",
    name: { en: "Sandwich Box", zhCN: "三明治盒", zhHK: "三文治盒" },
    explanation: { en: "Sandwich boxes may combine paper, plastic windows, stickers and food residue, making recycling difficult.", zhCN: "三明治盒可能混合纸、塑料窗口、贴纸和食物残留，因此较难回收。", zhHK: "三文治盒可能混合紙、膠窗口、貼紙和食物殘留，因此較難回收。" }
  },
  {
    id: 11,
    category: "paperWraps",
    icon: "🍙",
    answer: "general",
    image: "/images/riceball.png",
    name: { en: "Rice Ball Packaging", zhCN: "饭团包装", zhHK: "飯糰包裝" },
    explanation: { en: "Rice ball packaging usually contains thin plastic film and labels, which are hard to recycle.", zhCN: "饭团包装通常含有塑料薄膜和标签，较难回收。", zhHK: "飯糰包裝通常含有塑膠薄膜和標籤，較難回收。" }
  },
  {
    id: 12,
    category: "pouchesSachets",
    icon: "🍅",
    answer: "general",
    image: "/images/ketchup.png",
    name: { en: "Ketchup Sachet", zhCN: "番茄酱小包装", zhHK: "茄汁小包裝" },
    explanation: { 
      en: "Ketchup sachets are small multi-layer soft packaging and are not recyclable. Please dispose of them as general waste.", 
      zhCN: "番茄酱小包装属于小型多层软包装，不可回收，请丢入一般垃圾。", 
      zhHK: "茄汁小包裝屬於小型多層軟包裝，不可回收，請丟入一般垃圾。" 
    }
  },
  {
    id: 13,
    category: "pouchesSachets",
    icon: "🍗",
    answer: "general",
    image: "/images/chickenbreast.png",
    name: { en: "Ready-to-Eat Chicken Breast Pouch", zhCN: "即食鸡胸肉袋", zhHK: "即食雞胸肉袋" },
    explanation: { en: "This type of pouch is usually made from multi-layer composite material, which is difficult to separate and recycle.", zhCN: "这类包装通常是多层复合材料，难以分离和回收。", zhHK: "這類包裝通常是多層複合材料，難以分離和回收。" }
  },
  {
    id: 14,
    category: "pouchesSachets",
    icon: "🥫",
    answer: "general",
    image: "/images/Sauceplasticcontainer.png",
    name: { en: "Plastic Sauce Container", zhCN: "塑料酱料盒", zhHK: "塑膠醬料盒" },
    explanation: { en: "Small sauce containers often contain oily residue and may be too small or contaminated for effective recycling.", zhCN: "小酱料盒常有油污残留，体积小且易污染，回收价值较低。", zhHK: "小醬料盒常有油污殘留，體積小且易污染，回收價值較低。" }
  },
  {
    id: 15,
    category: "accessories",
    icon: "🥤",
    answer: "general",
    image: "/images/plasticcup_film.png",
    name: { en: "Plastic Cup Sealing Film", zhCN: "塑料杯封膜", zhHK: "塑膠杯封膜" },
    explanation: { en: "Thin sealing film is light, easily contaminated and difficult to recycle.", zhCN: "封膜轻薄、易污染，通常较难回收。", zhHK: "封膜輕薄、易污染，通常較難回收。" }
  },
  {
    id: 16,
    category: "beverage",
    icon: "🥛",
    answer: "recyclable",
    image: "/images/milkbox_lid.png",
    name: { en: "Beverage / Milk cartons", zhCN: "饮料盒/牛奶盒", zhHK: "飲品盒/牛奶盒" },
    explanation: { en: "Beverage and milk cartons can be recycled if straws and plastic wrappings are removed, and the carton is rinsed, dried and flattened.", zhCN: "饮料盒和牛奶盒在移除吸管及塑料包装、清洗、晾干并压平后可以回收。", zhHK: "飲品盒和牛奶盒在移除飲管及塑膠包裝、清洗、晾乾並壓平後可以回收。" }
  },
  {
    id: 17,
    category: "accessories",
    icon: "🥤",
    answer: "recyclable",
    image: "/images/aluminum_lid.png",
    name: { en: "Aluminium Lid", zhCN: "铝盖", zhHK: "鋁蓋" },
    explanation: { en: "Aluminium can be recyclable, but it should be clean and separated from plastic or food residue.", zhCN: "铝材可回收，但需要清洁并与塑料或食物残留分开。", zhHK: "鋁材可回收，但需要清潔並與塑膠或食物殘留分開。" }
  },
  {
    id: 18,
    category: "accessories",
    icon: "🍴",
    answer: "general",
    image: "/images/tableware.png",
    name: { en: "Disposable Tableware", zhCN: "一次性餐具", zhHK: "即棄餐具" },
    explanation: { 
      en: "Disposable tableware is usually contaminated after use and has low recycling value, so it is not recyclable in normal practice. Please dispose of it as general waste.", 
      zhCN: "一次性餐具使用后通常受到污染，回收价值低，日常情况下不可回收，请丢入一般垃圾。", 
      zhHK: "即棄餐具使用後通常受到污染，回收價值低，日常情況下不可回收，請丟入一般垃圾。" 
    }
  }
];

//回收标识介绍
const recyclingSymbolImages = {
  en: "/images/recycling-symbols-en.png",
  zhCN: "/images/recycling-symbols-zhcn.png",
  zhHK: "/images/recycling-symbols-zhhk.png",
};

const recyclingSymbolSources = [
  {
    label: "Centre for Food Safety",
    url: "https://www.cfs.gov.hk/english/multimedia/multimedia_pub/files/Know_More_about_the_Plastic_Food_Packaging_and_Containers.pdf",
  },
  {
    label: "UPrinting",
    url: "https://www.uprinting.com/blog/plastic-recyling-symbols/",
  },
  {
    label: "Greenpeace Hong Kong",
    url: "https://www.greenpeace.org/hongkong/issues/plastics/update/10446/2019%E6%9C%80%E6%96%B0%E5%A1%91%E8%86%A0%E5%9B%9E%E6%94%B6%E6%94%BB%E7%95%A5/",
  },
];

//Business Section
const businessApproachImages = {
  short: "/images/business-short-term.jpg",
  mid: "/images/business-mid-term.jpg",
  long: "/images/business-long-term.jpg",
};

//引导绿在区区网站
const officialGreenDirectoryUrl = "https://www.wastereduction.gov.hk/en-hk/recycling-map";

//Instagram链接
const instagramHandle = "@PackitWise_RTE";
const instagramUrl = "https://www.instagram.com/packitwise_rte/";


//回收点示例
const recyclingPoints = [
  { name: { en: "GREEN@SHA TIN", zhCN: "绿在沙田", zhHK: "綠在沙田" }, type: { en: "Recycling Station", zhCN: "回收环保站", zhHK: "回收環保站" }, address: { en: "10 On Ping Street, Shek Mun", zhCN: "石门安平街10号", zhHK: "石門安平街10號" }, openingHours: { en: "8:00am–8:00pm", zhCN: "上午8时至晚上8时", zhHK: "上午8時至晚上8時" }, phone: "2285 9433", email: "shatin@6green.hk", officialUrl: "https://www.wastereduction.gov.hk/en-hk/waste-reduction-programme/greencommunity/greensha-tin", mapUrl: "https://www.google.com/maps/search/?api=1&query=GREEN%40SHA%20TIN%2010%20On%20Ping%20Street%20Shek%20Mun", suitable: { en: "Clean plastics, paper, metals and other accepted recyclables", zhCN: "清洁塑料、纸类、金属及其他可接收回收物", zhHK: "清潔塑料、紙類、金屬及其他可接收回收物" } },
  { name: { en: "GREEN@KWUN TONG", zhCN: "绿在观塘", zhHK: "綠在觀塘" }, type: { en: "Recycling Station", zhCN: "回收环保站", zhHK: "回收環保站" }, address: { en: "27 Sheung Yee Road, Kowloon Bay", zhCN: "九龙湾常怡道27号", zhHK: "九龍灣常怡道27號" }, openingHours: { en: "8:00am–8:00pm", zhCN: "上午8时至晚上8时", zhHK: "上午8時至晚上8時" }, phone: "2776 5700", email: "kwuntong@6green.hk", officialUrl: "https://www.wastereduction.gov.hk/en-hk/waste-reduction-programme/greencommunity/greenkwun-tong", mapUrl: "https://www.google.com/maps/search/?api=1&query=GREEN%40KWUN%20TONG%2027%20Sheung%20Yee%20Road%20Kowloon%20Bay", suitable: { en: "Clean and separated recyclables accepted by the station", zhCN: "该站接受的清洁、已分类可回收物", zhHK: "該站接收的清潔、已分類可回收物" } },
  { name: { en: "GREEN@SAI KUNG", zhCN: "绿在西贡", zhHK: "綠在西貢" }, type: { en: "Recycling Station", zhCN: "回收环保站", zhHK: "回收環保站" }, address: { en: "3 Po Lam Lane, Tseung Kwan O", zhCN: "将军澳宝林里3号", zhHK: "將軍澳寶林里3號" }, openingHours: { en: "8:00am–8:00pm", zhCN: "上午8时至晚上8时", zhHK: "上午8時至晚上8時" }, phone: "2727 7330", email: "saikung@6green.hk", officialUrl: "https://www.wastereduction.gov.hk/en-hk/waste-reduction-programme/greencommunity/greensai-kung", mapUrl: "https://www.google.com/maps/search/?api=1&query=GREEN%40SAI%20KUNG%203%20Po%20Lam%20Lane%20Tseung%20Kwan%20O", suitable: { en: "Clean recyclables after emptying and basic separation", zhCN: "清空并初步分类后的清洁可回收物", zhHK: "清空並初步分類後的清潔可回收物" } },
  { name: { en: "GREEN@KWAI CHUNG", zhCN: "绿在葵涌", zhHK: "綠在葵涌" }, type: { en: "Recycling Station", zhCN: "回收环保站", zhHK: "回收環保站" }, address: { en: "Shop 01 & 02, LG/F, Kwai Po Building, 135–147 Shek Yam Road", zhCN: "葵涌石荫路135–147号葵宝大厦低层地下01及02号铺", zhHK: "葵涌石蔭路135–147號葵寶大廈低層地下01及02號舖" }, openingHours: { en: "9:00am–7:00pm", zhCN: "上午9时至晚上7时", zhHK: "上午9時至晚上7時" }, phone: "2423 9118 / 9314 1195", email: "kwaichung@6green.hk", officialUrl: "https://www.wastereduction.gov.hk/en-hk/waste-reduction-programme/greencommunity/greenkwai-chung", mapUrl: "https://www.google.com/maps/search/?api=1&query=GREEN%40KWAI%20CHUNG%20Kwai%20Po%20Building%20Shek%20Yam%20Road", suitable: { en: "Clean and separated recyclables; check accepted items before visiting", zhCN: "清洁及已分类可回收物；前往前建议先确认接收种类", zhHK: "清潔及已分類可回收物；前往前建議先確認接收種類" } },
];

function getScore(item) {
  // 不可回收物全部统一 1/5
  if (item.answer === "general") return 1;

  // 铝罐回收价值最高
  if (item.id === 2) return 5;

  // 饮料盒 / 牛奶盒设为 4/5
  if (item.id === 16) return 4;

  // 其他可回收物默认 4/5
  return 4;
}

function getDetail(item, lang) {
  const reusable = item.answer === "recyclable";
  const generic = {
    summary: reusable
      ? { en: "This item has better recycling potential when it is empty, clean and correctly sorted.", zhCN: "这类包装在清空、清洁并正确分类后，回收潜力较高。", zhHK: "這類包裝在清空、清潔並正確分類後，回收潛力較高。" }[lang]
      : { en: "In everyday practice, this item is usually treated as general waste because of contamination, small size or mixed materials.", zhCN: "在日常情况下，这类包装通常因污染、体积小或混合材料而作为一般垃圾处理。", zhHK: "在日常情況下，這類包裝通常因污染、體積小或混合材料而作一般垃圾處理。" }[lang],
    cleaning: reusable
      ? { en: "Empty all remaining food or liquid, rinse lightly with water, and keep the item dry before recycling.", zhCN: "先清空剩余食物或液体，用清水简单冲洗，并在回收前尽量保持干燥。", zhHK: "先清空剩餘食物或液體，用清水簡單沖洗，並在回收前盡量保持乾爽。" }[lang]
      : { en: "Remove obvious food residue where possible. If the item cannot be cleaned or separated, do not mix it with clean recyclables.", zhCN: "可行情況下先去除明显食物残留；如果无法清洁或分离，不要混入干净可回收物。", zhHK: "可行情況下先去除明顯食物殘留；如無法清潔或分離，不要混入乾淨可回收物。" }[lang],
    value: reusable
      ? { en: "Medium to high. Value depends on cleanliness, material type and whether the collection point accepts it.", zhCN: "中至高。价值取决于清洁程度、材料类型和回收点是否接收。", zhHK: "中至高。價值取決於清潔程度、材料類型及回收點是否接收。" }[lang]
      : { en: "Low. The item is difficult to sort or process in normal recycling streams.", zhCN: "低。这类物品在普通回收流程中较难分拣或处理。", zhHK: "低。這類物品在普通回收流程中較難分揀或處理。" }[lang],
    note: item.explanation[lang],
  };

  const detailed = {
    1: {
      materials: [
        { part: { en: "Bottle body", zhCN: "瓶身", zhHK: "樽身" }, material: "PET", recyclable: true, note: { en: "Main recyclable component", zhCN: "主要可回收部件", zhHK: "主要可回收部件" } },
        { part: { en: "Cap", zhCN: "瓶盖", zhHK: "樽蓋" }, material: "PP / HDPE", recyclable: true, note: { en: "Keep or separate depending on local instructions", zhCN: "按回收点要求保留或分开", zhHK: "按回收點要求保留或分開" } },
        { part: { en: "Label sleeve", zhCN: "标签膜", zhHK: "標籤膜" }, material: { en: "Plastic film", zhCN: "塑料薄膜", zhHK: "塑料薄膜" }, recyclable: false, note: { en: "Remove if possible", zhCN: "可行情況下撕除", zhHK: "可行情況下撕除" } },
      ],
      wrong: [
        { en: "Leaving liquid inside", zhCN: "瓶内残留饮料", zhHK: "樽內殘留飲品" },
        { en: "Recycling with a full label sleeve when it can be removed", zhCN: "可撕除标签膜但未撕除", zhHK: "可撕除標籤膜但未撕除" },
        { en: "Mixing with general waste", zhCN: "混入一般垃圾", zhHK: "混入一般垃圾" },
      ],
      note: { en: "PET bottles are among the easier RTE-related items to recycle if they are empty and clean.", zhCN: "PET饮料瓶是较容易回收的即食相关包装，但前提是清空和保持清洁。", zhHK: "PET飲品樽是較容易回收的即食相關包裝，但前提是清空和保持清潔。" },
    },
    2: {
      materials: [
        { part: { en: "Can body", zhCN: "罐身", zhHK: "罐身" }, material: { en: "Aluminium", zhCN: "铝", zhHK: "鋁" }, recyclable: true, note: { en: "High recycling value", zhCN: "回收价值高", zhHK: "回收價值高" } },
        { part: { en: "Pull tab", zhCN: "拉环", zhHK: "拉環" }, material: { en: "Aluminium", zhCN: "铝", zhHK: "鋁" }, recyclable: true, note: { en: "Keep attached where possible", zhCN: "尽量保留在罐身上", zhHK: "盡量保留在罐身上" } },
      ],
      wrong: [
        { en: "Leaving drink residue inside", zhCN: "罐内残留饮料", zhHK: "罐內殘留飲品" },
        { en: "Putting aluminium cans into plastic recycling", zhCN: "放入塑料回收箱", zhHK: "放入塑料回收箱" },
        { en: "Throwing into general waste", zhCN: "直接丢入一般垃圾", zhHK: "直接丟入一般垃圾" },
      ],
      note: { en: "Aluminium has high recycling value and is usually worth separating from mixed waste.", zhCN: "铝材回收价值高，通常值得从混合垃圾中分开。", zhHK: "鋁材回收價值高，通常值得從混合垃圾中分開。" },
    },
    13: {
      materials: [
        { part: { en: "Base tray", zhCN: "盒身", zhHK: "盒身" }, material: { en: "PP / PET / paper-based material", zhCN: "PP / PET / 纸基材料", zhHK: "PP / PET / 紙基材料" }, recyclable: false, note: { en: "Check material and contamination first", zhCN: "需先判断材质和污染情况", zhHK: "需先判斷材質及污染情況" } },
        { part: { en: "Lid", zhCN: "盒盖", zhHK: "盒蓋" }, material: { en: "Different plastic or film", zhCN: "不同塑料或封膜", zhHK: "不同塑料或封膜" }, recyclable: false, note: { en: "Mixed materials reduce recyclability", zhCN: "混合材质降低回收性", zhHK: "混合材質降低回收性" } },
        { part: { en: "Sticker / label", zhCN: "贴纸 / 标签", zhHK: "貼紙 / 標籤" }, material: { en: "Paper + adhesive", zhCN: "纸 + 胶", zhHK: "紙 + 膠" }, recyclable: false, note: { en: "Remove where possible", zhCN: "可行情況下移除", zhHK: "可行情況下移除" } },
      ],
      wrong: [
        { en: "Recycling the whole box without checking material", zhCN: "不检查材质就整盒回收", zhHK: "不檢查材質就整盒回收" },
        { en: "Leaving oil and food residue", zhCN: "残留油污和食物", zhHK: "殘留油污及食物" },
        { en: "Not separating lid, base and label", zhCN: "不分离盒盖、盒身和标签", zhHK: "不分離盒蓋、盒身及標籤" },
      ],
      note: { en: "Bento boxes are confusing because the base, lid and labels may be made of different materials.", zhCN: "便当盒容易让人误判，因为盒身、盒盖和标签可能属于不同材料。", zhHK: "便當盒容易令人誤判，因為盒身、盒蓋及標籤可能屬於不同材料。" },
    },
  };

  const d = detailed[item.id];
  return {
    ...generic,
    materials: d?.materials || [
      { part: { en: "Main packaging body", zhCN: "主要包装主体", zhHK: "主要包裝主體" }, material: categoryMeta[item.category].name[lang], recyclable: reusable, note: item.explanation },
      { part: { en: "Attached label / film", zhCN: "附着标签 / 薄膜", zhHK: "附着標籤 / 薄膜" }, material: { en: "Mixed or small accessory", zhCN: "混合或小型配件", zhHK: "混合或小型配件" }, recyclable: false, note: { en: "Remove if possible", zhCN: "可行情況下移除", zhHK: "可行情況下移除" } },
    ],
    wrong: d?.wrong || [
      { en: "Putting dirty packaging into clean recycling bins", zhCN: "把脏包装放入干净回收箱", zhHK: "把污糟包裝放入乾淨回收箱" },
      { en: "Assuming all plastic-looking items are recyclable", zhCN: "以为看起来像塑料就一定可回收", zhHK: "以為看起來似塑料就一定可回收" },
      { en: "Ignoring labels, films or food residue", zhCN: "忽略标签、封膜或食物残留", zhHK: "忽略標籤、封膜或食物殘留" },
    ],
    note: d?.note?.[lang] || generic.note,
  };
}

function getSteps(item, lang) {
  if (item.id === 16) {
    return {
      en: [
        "Remove straws and plastic wrappings",
        "Cut a corner",
        "Rinse and dry",
        "Flatten the carton",
        "Place it in an accepted recycling point"
      ],
      zhCN: [
        "移除吸管和塑料包装",
        "剪开一个角",
        "清洗并晾干",
        "压平饮料盒",
        "投放到可接收的回收点"
      ],
      zhHK: [
        "移除飲管和塑膠包裝",
        "剪開一個角",
        "清洗並晾乾",
        "壓平飲品盒",
        "投放到可接收的回收點"
      ],
    }[lang];
  }

  if (item.answer === "recyclable") {
    return {
      en: [
        "Empty remaining contents",
        "Rinse if needed",
        "Separate removable labels, lids or caps",
        "Dry the item",
        "Place in an accepted recycling point"
      ],
      zhCN: [
        "清空内容物",
        "需要时简单冲洗",
        "分离可移除的标签、盖子或瓶盖",
        "沥干水分",
        "投放到可接收的回收点"
      ],
      zhHK: [
        "清空內容物",
        "需要時簡單沖洗",
        "分離可移除的標籤、蓋或樽蓋",
        "瀝乾水分",
        "投放到可接收的回收點"
      ],
    }[lang];
  }

  return [];
}

function ScoreDots({ score }) {
  return <div className="flex gap-1">{Array.from({ length: 5 }).map((_, i) => <span key={i} className={i < score ? "text-emerald-700" : "text-slate-300"}>★</span>)}</div>;
}

function SectionTitle({ title, children }) {
  return <div className="mx-auto mb-8 max-w-3xl text-center"><h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">{title}</h2>{children && <p className="mt-4 text-base leading-7 text-slate-600">{children}</p>}</div>;
}

function TopNav({ lang, setLang, t, setPage }) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/60 bg-[#f7f6ef]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between">
        <button onClick={() => setPage("home")} className="flex items-center gap-3 text-left">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-700 text-2xl text-white shadow-lg">♻️</div>
          <div><p className="text-xl font-black tracking-tight text-slate-950">PackitWise RTE</p><p className="text-xs font-medium text-slate-500">{t.subtitle}</p></div>
        </button>
        <div className="flex flex-wrap items-center gap-3 md:justify-end">
          <div className="hidden items-center gap-5 text-sm font-semibold text-slate-700 lg:flex">
            <a href="#guide" className="hover:text-emerald-700">{t.guide}</a>
            <a href="#symbols" className="hover:text-emerald-700">{t.symbolsNav}</a>
            <a href="#recycling" className="hover:text-emerald-700">{t.recycling}</a>
            <a href="#game" className="hover:text-emerald-700">{t.game}</a>
            <a href="#business" className="hover:text-emerald-700">{t.businessNav}</a>
          </div>
          <div className="flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm">
            {LANGS.map((option) => <button key={option.code} onClick={() => setLang(option.code)} className={`rounded-xl px-3 py-2 text-sm font-bold transition ${lang === option.code ? "bg-emerald-700 text-white" : "text-slate-600 hover:bg-slate-50"}`}>{option.label}</button>)}
          </div>
        </div>
      </nav>
    </header>
  );
}

//回收信息组件
function RecyclingSymbolsSection({ lang, t }) {
  return (
    <section id="symbols" className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={t.symbolsTitle}>
          {t.symbolsText}
        </SectionTitle>

        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-slate-200 bg-white p-5 shadow-sm md:p-8">
          <img
            src={recyclingSymbolImages[lang]}
            alt={t.symbolsImageAlt}
            className="w-full rounded-[1.75rem] border border-slate-100 object-contain"
          />

          <p className="mt-4 text-xs leading-6 text-slate-500">
            {t.symbolsSourceNote}{" "}
            {recyclingSymbolSources.map((source, index) => (
              <React.Fragment key={source.url}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-emerald-700 underline underline-offset-2 hover:text-emerald-800"
                >
                  {source.label}
                </a>
                {index < recyclingSymbolSources.length - 1 ? "; " : "."}
              </React.Fragment>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

function HomePage({ lang, t, openCategory }) {
  const categoryKeys = Object.keys(categoryMeta);
  return (
    <>
      <section className="relative overflow-hidden px-5 py-14 md:py-24">
        <div className="absolute left-[-8rem] top-20 h-80 w-80 rounded-full bg-emerald-200/50 blur-3xl" />
        <div className="absolute bottom-0 right-[-6rem] h-96 w-96 rounded-full bg-orange-200/50 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-5 inline-flex rounded-full border border-emerald-200 bg-white/70 px-4 py-2 text-sm font-semibold text-emerald-800 shadow-sm">✨ {t.badge}</div>
            <h1 className="text-4xl font-black leading-tight tracking-tight text-slate-950 md:text-7xl">{t.heroTitle}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">{t.heroText}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row"><a href="#guide" className="rounded-2xl bg-emerald-700 px-6 py-4 text-center font-bold text-white shadow-xl hover:bg-emerald-800">{t.explore} ›</a><a href="#game" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 text-center font-bold text-slate-900 shadow-sm">{t.gameBtn} ↗</a></div>
          </div>
          <div className="rounded-[2.5rem] border border-white bg-white/80 p-5 shadow-2xl shadow-slate-900/10">
            <div className="rounded-[2rem] bg-gradient-to-br from-emerald-700 to-emerald-950 p-6 text-white">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-100">PackitWise method</p>
              <h2 className="mt-2 text-2xl font-black">Category → Item → Detailed guide</h2>
              <div className="mt-6 grid gap-3">
                {categoryKeys.slice(0, 4).map((key) => <div key={key} className="rounded-2xl bg-white/12 p-4 ring-1 ring-white/15"><span className="mr-2 text-2xl">{categoryMeta[key].icon}</span>{categoryMeta[key].name[lang]}</div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <RecyclingSymbolsSection lang={lang} t={t} />

      <section id="guide" className="px-5 py-16">
        <SectionTitle title={t.categoryTitle}>{t.categoryText}</SectionTitle>
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categoryKeys.map((key) => {
            const count = itemData.filter((item) => item.category === key).length;
            return <button key={key} onClick={() => openCategory(key)} className="rounded-[2rem] border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"><div className="mb-5 flex items-start justify-between"><div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-emerald-50 text-4xl">{categoryMeta[key].icon}</div><span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-bold text-orange-800">{count}</span></div><h3 className="text-xl font-black text-slate-950">{categoryMeta[key].name[lang]}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{categoryMeta[key].desc[lang]}</p><p className="mt-5 font-bold text-emerald-700">{t.viewItems} →</p></button>;
          })}
        </div>
      </section>
    </>
  );
}
//item列表小图显示
function CategoryPage({ lang, t, category, openDetail, goHome }) {
  const [query, setQuery] = useState("");
  const items = useMemo(() => itemData.filter((item) => item.category === category && [item.name.en, item.name.zhCN, item.name.zhHK, item.explanation.en, item.explanation.zhCN, item.explanation.zhHK].join(" ").toLowerCase().includes(query.toLowerCase())), [category, query]);
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <button onClick={goHome} className="mb-6 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm hover:border-emerald-300">← {t.backHome}</button>
        <div className="mb-8 rounded-[2.5rem] bg-gradient-to-br from-emerald-700 to-emerald-950 p-8 text-white shadow-xl">
          <div className="text-5xl">{categoryMeta[category].icon}</div><h1 className="mt-4 text-4xl font-black">{categoryMeta[category].name[lang]}</h1><p className="mt-3 max-w-2xl leading-7 text-emerald-50/85">{categoryMeta[category].desc[lang]}</p>
        </div>
        <div className="mb-6 flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between"><input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t.search} className="rounded-2xl bg-slate-50 px-4 py-3 text-sm outline-none md:min-w-[24rem]" /><p className="text-sm text-slate-500">{items.length} {t.itemCount}</p></div>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => <button key={item.id} onClick={() => openDetail(item.id)} className="rounded-[2rem] border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-emerald-300 hover:shadow-xl"><div className="mb-4 flex items-start justify-between gap-3"><div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-3xl bg-slate-100">{item.image ? (<img src={item.image} alt={item.name[lang]} className="h-full w-full object-cover" />) : (<span className="text-4xl">{item.icon}</span>)}</div><span className={`rounded-full px-3 py-1 text-xs font-bold ${item.answer === "recyclable" ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-700"}`}>{item.answer === "recyclable" ? t.recyclable : t.general}</span></div><h3 className="text-lg font-black text-slate-950">{item.name[lang]}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{item.explanation[lang]}</p><div className="mt-4 flex items-center justify-between"><ScoreDots score={getScore(item)} /><span className="font-bold text-emerald-700">{t.openGuide} →</span></div></button>)}
        </div>
      </div>
    </section>
  );
}

//详情页设定
function DetailPage({ lang, t, item, goCategory }) {
  const detail = getDetail(item, lang);
  const steps = getSteps(item, lang);
  const score = getScore(item);
  const isRecyclable = item.answer === "recyclable";
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-7xl">
        <button onClick={goCategory} className="mb-6 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 shadow-sm hover:border-emerald-300">← {t.backCategory}</button>
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex min-h-[22rem] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50 text-center">{item.image ? (<img src={item.image} alt={item.name[lang]} className="h-full max-h-[22rem] w-full object-contain p-6" />) : (<div><div className="text-8xl">{item.icon}</div><p className="mt-4 text-xl font-black text-slate-950">{t.imagePlaceholder}</p><p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-slate-600">{t.imageHint}</p></div>)}</div>
          </div>
          <div className="rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">{categoryMeta[item.category].name[lang]}</p>
            <h1 className="mt-2 text-4xl font-black text-slate-950">{item.name[lang]}</h1>
            <div className="mt-5 flex flex-wrap gap-3"><span className={`rounded-full px-4 py-2 text-sm font-bold ${isRecyclable ? "bg-emerald-100 text-emerald-800" : "bg-slate-100 text-slate-700"}`}>{isRecyclable ? t.recyclable : t.general}</span><span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-bold text-orange-800">{t.convenience}: {score}/5</span></div>
            <div className="mt-5"><ScoreDots score={score} /></div>
            <div className="mt-6 rounded-2xl bg-slate-50 p-5"><p className="font-black text-slate-950">{t.summary}</p><p className="mt-2 leading-7 text-slate-600">{detail.summary}</p></div>
          </div>
        </div>

        {isRecyclable && (
  <>
    <GuideSection title={t.materialBreakdown}>
      <div className="grid gap-4 md:grid-cols-2">
        {detail.materials.map((part, index) => (
          <div key={index} className="rounded-3xl bg-slate-50 p-5">
            <div className="mb-2 flex flex-wrap items-center gap-3">
              <h3 className="text-lg font-black text-slate-950">{part.part[lang]}</h3>
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-700">
                {typeof part.material === "string" ? part.material : part.material[lang]}
              </span>
              <span className={part.recyclable ? "font-bold text-emerald-700" : "font-bold text-red-500"}>
                {part.recyclable ? `✓ ${t.accepted}` : `× ${t.notAccepted}`}
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-600">{part.note[lang]}</p>
          </div>
        ))}
      </div>
    </GuideSection>

    <GuideSection title={t.cleaningMethod}>
      <p className="text-lg leading-8 text-slate-600">{detail.cleaning}</p>
    </GuideSection>
  </>
)}

        {isRecyclable ? (
  <GuideSection title={t.recyclingSteps}>
    <div className="space-y-4">
      {steps.map((step, index) => (
        <div key={step} className="flex gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-lg font-black text-white">
            {index + 1}
          </div>
          <div>
            <p className="text-lg font-black text-slate-950">{step}</p>
            <span className="mt-1 inline-flex rounded-lg bg-red-100 px-2 py-1 text-xs font-bold text-red-700">
              {t.mustDo}
            </span>
          </div>
        </div>
      ))}
    </div>
  </GuideSection>
) : (
  <GuideSection title={t.status}>
    <div className="rounded-3xl bg-slate-50 p-5">
      <p className="text-lg font-black text-slate-950">
        {
          {
            en: "This item is not recyclable. Please dispose of it directly in the general waste bin.",
            zhCN: "此物品不可回收，建议直接放入一般垃圾箱中。",
            zhHK: "此物品不可回收，建議直接放入一般垃圾箱中。"
          }[lang]
        }
      </p>
    </div>
  </GuideSection>
)}

        <GuideSection title={`❌ ${t.wrongMethods}`} tone="danger">
          <div className="grid gap-3">{detail.wrong.map((wrong, index) => <div key={index} className="rounded-2xl bg-red-50 p-4 text-red-700"><strong>{wrong[lang]}</strong></div>)}</div>
        </GuideSection>

        <div className="grid gap-5 md:grid-cols-2">
          <GuideSection title={`📝 ${t.notes}`} compact><p className="leading-7 text-slate-600">{detail.note}</p></GuideSection>
          <GuideSection title={`💰 ${t.recyclingValue}`} compact><p className="leading-7 text-slate-600">{detail.value}</p></GuideSection>
        </div>
      </div>
    </section>
  );
}

function GuideSection({ title, children, compact }) {
  return <div className={`mt-8 rounded-[2rem] border border-slate-200 bg-white shadow-sm ${compact ? "p-6" : "p-8"}`}><h2 className="mb-5 text-2xl font-black text-slate-950">{title}</h2>{children}</div>;
}

function RecyclingSection({ lang, t }) {
  return <section id="recycling" className="px-5 py-16"><SectionTitle title={t.recyclingHeading} /> <div className="mx-auto mb-6 max-w-7xl rounded-[2rem] border border-emerald-200 bg-emerald-50 p-5 text-sm leading-6 text-emerald-900"> <a href={officialGreenDirectoryUrl} target="_blank" rel="noreferrer" className="mt-3 inline-flex rounded-2xl bg-emerald-700 px-4 py-2 font-bold text-white hover:bg-emerald-800">{t.officialDirectory} ↗</a></div><div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">{recyclingPoints.map((point) => <div key={point.name.en} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"><h3 className="text-xl font-black text-slate-950">📍 {point.name[lang]}</h3><p className="mt-2 text-sm font-bold text-emerald-700">{point.type[lang]}</p><div className="mt-4 grid gap-3 text-sm"><InfoBlock label={t.address} value={point.address[lang]} /><div className="grid gap-3 sm:grid-cols-2"><InfoBlock label={t.phone} value={point.phone} /><InfoBlock label={t.openingHours} value={point.openingHours[lang]} /></div><InfoBlock label={t.email} value={point.email} /><InfoBlock label={t.suitableFor} value={point.suitable[lang]} /></div><div className="mt-5 flex flex-wrap gap-3"><a href={point.officialUrl} target="_blank" rel="noreferrer" className="rounded-2xl bg-emerald-700 px-4 py-2 text-sm font-bold text-white hover:bg-emerald-800">{t.officialPage} ↗</a><a href={point.mapUrl} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-800 hover:border-emerald-300">{t.googleMap} ↗</a></div></div>)}</div></section>;
}

function InfoBlock({ label, value }) {
  return <div className="rounded-2xl bg-slate-50 p-4"><p className="font-bold text-slate-950">{label}</p><p className="mt-1 leading-6 text-slate-700">{value}</p></div>;
}

//Business Section
function BusinessRecommendationSection({ t }) {
  const approaches = [
    {
      key: "short",
      image: businessApproachImages.short,
      title: t.businessShortTitle,
      text: t.businessShortText,
      alt: "Short-term approach for RTE packaging recycling",
    },
    {
      key: "mid",
      image: businessApproachImages.mid,
      title: t.businessMidTitle,
      text: t.businessMidText,
      alt: "Mid-term recommendations for RTE packaging design",
    },
    {
      key: "long",
      image: businessApproachImages.long,
      title: t.businessLongTitle,
      text: t.businessLongText,
      alt: "Long-term recommendations for RTE packaging transition",
    },
  ];

  return (
    <section id="business" className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle title={t.businessTitle}>
          {t.businessText}
        </SectionTitle>

        <div className="space-y-10">
          {approaches.map((approach) => (
            <div
              key={approach.key}
              className="rounded-[2.5rem] border border-slate-200 bg-white p-5 shadow-sm md:p-8"
            >
              <img
                src={approach.image}
                alt={approach.alt}
                className="w-full rounded-[1.75rem] border border-slate-100 object-contain"
              />

              <div className="mt-6 rounded-[2rem] bg-slate-50 p-6">
                <h3 className="text-2xl font-black text-slate-950">
                  {approach.title}
                </h3>

                <p className="mt-3 text-base leading-8 text-slate-600">
                  {approach.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] border border-emerald-200 bg-emerald-50 p-6">
          <h3 className="text-2xl font-black text-emerald-950">
            {t.businessOverallTitle}
          </h3>

          <p className="mt-3 text-base leading-8 text-emerald-900">
            {t.businessOverallText}
          </p>
        </div>
      </div>
    </section>
  );
}

//Game Section
function GameSection({ t }) {
  const [beforeScore, setBeforeScore] = useState("");
  const [afterScore, setAfterScore] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const before = Number(beforeScore);
  const after = Number(afterScore);
  const hasResult =
    beforeScore !== "" &&
    afterScore !== "" &&
    !Number.isNaN(before) &&
    !Number.isNaN(after);

  const diff = hasResult ? after - before : 0;
  const pct = hasResult && before > 0 ? Math.round((diff / before) * 100) : 0;

  const GOOGLE_SHEET_WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwgQet7KR-9ECUuHMgwhjVUVZtJb79uODu6SpUpqJ1hIMQ_GN3Q05Xod50eqhFxFmeV/exec";

const submitScoreToGA4 = async () => {
  if (!hasResult) return;

  const scoreData = {
    before_score: before,
    after_score: after,
    score_improvement: diff,
    score_improvement_percent: pct,
    score_change_type: diff > 0 ? "improved" : diff === 0 ? "no_change" : "decreased",
  };

  // Send to GA4
  window.gtag?.("event", "main_score_submit", {
    ...scoreData,
    source_section: "main_website_game_score_form",
  });

  // Save raw data to Google Sheet
  try {
    await fetch(GOOGLE_SHEET_WEB_APP_URL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(scoreData),
    });

    setSubmitted(true);
  } catch (error) {
    console.error("Failed to save score data:", error);
    setSubmitted(true);
  }
};
return (
  <section id="game" className="bg-emerald-950 px-5 py-16 text-white">
    <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-center">
      <div>
        <h2 className="text-3xl font-black tracking-tight md:text-5xl">
          {t.gameHeading}
        </h2>

        <a
          href="https://packitwise.vercel.app"
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            window.gtag?.("event", "main_game_link_click", {
              event_category: "engagement",
              event_label: "main_website_game_button",
              source_section: "main_website_game_section",
            });
          }}
          className="mt-7 inline-flex rounded-2xl bg-white px-6 py-4 font-bold text-emerald-950 shadow-xl hover:bg-emerald-50"
        >
          PackitWise Game ↗
        </a>
      </div>

      <div className="rounded-[2rem] border border-white/15 bg-white/10 p-5 backdrop-blur">
        <p className="mb-3 font-bold text-white">{t.beforeAfter}</p>

        <div className="grid gap-3 sm:grid-cols-2">
          <label>
            <span className="mb-1 block text-sm text-emerald-100">
              {t.beforeScore}
            </span>
            <input
              type="number"
              min="0"
              value={beforeScore}
              onChange={(e) => {
                setBeforeScore(e.target.value);
                setSubmitted(false);
              }}
              className="w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-slate-950 outline-none"
              placeholder="e.g. 6"
            />
          </label>

          <label>
            <span className="mb-1 block text-sm text-emerald-100">
              {t.afterScore}
            </span>
            <input
              type="number"
              min="0"
              value={afterScore}
              onChange={(e) => {
                setAfterScore(e.target.value);
                setSubmitted(false);
              }}
              className="w-full rounded-2xl border border-white/20 bg-white px-4 py-3 text-slate-950 outline-none"
              placeholder="e.g. 9"
            />
          </label>
        </div>

        {hasResult && (
          <div className="mt-4 rounded-2xl bg-orange-300/15 p-4 text-sm leading-6 text-orange-50 ring-1 ring-orange-200/20">
            {t.scoreChange}:{" "}
            <strong>
              {diff >= 0 ? "+" : ""}
              {diff}
            </strong>
            {before > 0 && (
              <span>
                {" "}
                ({pct >= 0 ? "+" : ""}
                {pct}% {t.compared})
              </span>
            )}
            .
          </div>
        )}

        <button
          type="button"
          onClick={submitScoreToGA4}
          disabled={!hasResult}
          className="mt-4 rounded-2xl bg-orange-300 px-5 py-3 font-bold text-emerald-950 shadow-lg hover:bg-orange-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {t.submitScore}
        </button>

        <p className="mt-2 text-xs leading-5 text-emerald-100/80">
          {t.scoreNotice}
        </p>

        {submitted && (
          <p className="mt-3 text-sm text-emerald-100">
            {t.scoreSubmitted}
          </p>
        )}
      </div>
    </div>
  </section>
);
}

export default function PackitWiseRTEWebsite() {
  const [lang, setLang] = useState("en");
  const [page, setPage] = useState("home");
  const [category, setCategory] = useState("beverage");
  const [selectedId, setSelectedId] = useState(1);
  const t = ui[lang];
  const selectedItem = itemData.find((item) => item.id === selectedId) || itemData[0];
  const openCategory = (key) => { setCategory(key); setPage("category"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const openDetail = (id) => { setSelectedId(id); setPage("detail"); window.scrollTo({ top: 0, behavior: "smooth" }); };
  return (
    <main className="min-h-screen bg-[#f7f6ef] text-slate-900">
      <TopNav lang={lang} setLang={setLang} t={t} setPage={setPage} />
      {page === "home" && <HomePage lang={lang} t={t} openCategory={openCategory} />}
      {page === "category" && <CategoryPage lang={lang} t={t} category={category} openDetail={openDetail} goHome={() => setPage("home")} />}
      {page === "detail" && <DetailPage lang={lang} t={t} item={selectedItem} goCategory={() => setPage("category")} />}
      <RecyclingSection lang={lang} t={t} />
      <GameSection t={t} />
      <BusinessRecommendationSection t={t} />
      <section className="px-5 py-16">
  <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-sm md:p-10">
    <h2 className="text-3xl font-black text-slate-950">{t.aboutTitle}</h2>

    <p className="mt-4 max-w-3xl text-base leading-8 text-slate-600">
      {t.aboutText}
    </p>

    <div className="mt-8 border-t border-slate-200 pt-6">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-700">
        Instagram
      </p>

      <h3 className="mt-2 text-2xl font-black text-slate-950">
        {t.instagramFollow}
      </h3>

      <p className="mt-3 max-w-3xl text-base leading-7 text-slate-600">
        {t.instagramText}
      </p>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <p className="text-lg font-black text-emerald-700">
          {instagramHandle}
        </p>

        <a
          href={instagramUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => {
            window.gtag?.("event", "instagram_link_click", {
              event_category: "engagement",
              event_label: "about_section_instagram_button",
              source_section: "about_section",
            });
          }}
          className="inline-flex w-fit rounded-2xl bg-emerald-700 px-5 py-3 text-sm font-bold text-white shadow-lg hover:bg-emerald-800"
        >
          {t.instagramButton} ↗
        </a>
      </div>
    </div>
  </div>
</section>
      <footer className="border-t border-slate-200 px-5 py-8"><div className="mx-auto max-w-7xl text-sm text-slate-500">© PackitWise RTE Capstone Project</div></footer>
    </main>
  );
}
