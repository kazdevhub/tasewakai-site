const guideModal=document.getElementById("guideModal"),guideTransition=document.getElementById("guideTransition"),supportModal=document.getElementById("supportModal"),storeModal=document.getElementById("storeModal"),toolModal=document.getElementById("toolModal"),sakuraLayer=document.getElementById("sakuraLayer"),cursorSakuraLayer=document.getElementById("cursorSakuraLayer"),preloader=document.getElementById("preloader");
const statusIcons={ready:"assets/status-note.png",success:"assets/status-success.png",warning:"assets/status-warning.png",error:"assets/status-error.png",blocked:"assets/status-blocked.png",construction:"assets/status-construction.png"};
const DISCORD_INVITE_CODE="P26h5nPSXD";
const cp1252Bytes={"€":0x80,"‚":0x82,"ƒ":0x83,"„":0x84,"…":0x85,"†":0x86,"‡":0x87,"ˆ":0x88,"‰":0x89,"Š":0x8a,"‹":0x8b,"Œ":0x8c,"Ž":0x8e,"‘":0x91,"’":0x92,"“":0x93,"”":0x94,"•":0x95,"–":0x96,"—":0x97,"˜":0x98,"™":0x99,"š":0x9a,"›":0x9b,"œ":0x9c,"ž":0x9e,"Ÿ":0x9f};
const kanaQuestions=[{"q": "ã‚", "a": "a"}, {"q": "ã„", "a": "i"}, {"q": "ã†", "a": "u"}, {"q": "ãˆ", "a": "e"}, {"q": "ãŠ", "a": "o"}, {"q": "ã‹", "a": "ka"}, {"q": "ã", "a": "ki"}, {"q": "ã", "a": "ku"}, {"q": "ã‘", "a": "ke"}, {"q": "ã“", "a": "ko"}, {"q": "ã•", "a": "sa"}, {"q": "ã—", "a": "shi"}, {"q": "ã™", "a": "su"}, {"q": "ã›", "a": "se"}, {"q": "ã", "a": "so"}, {"q": "ãŸ", "a": "ta"}, {"q": "ã¡", "a": "chi"}, {"q": "ã¤", "a": "tsu"}, {"q": "ã¦", "a": "te"}, {"q": "ã¨", "a": "to"}, {"q": "ãª", "a": "na"}, {"q": "ã«", "a": "ni"}, {"q": "ã¬", "a": "nu"}, {"q": "ã­", "a": "ne"}, {"q": "ã®", "a": "no"}, {"q": "ã¯", "a": "ha"}, {"q": "ã²", "a": "hi"}, {"q": "ãµ", "a": "fu"}, {"q": "ã¸", "a": "he"}, {"q": "ã»", "a": "ho"}, {"q": "ã¾", "a": "ma"}, {"q": "ã¿", "a": "mi"}, {"q": "ã‚€", "a": "mu"}, {"q": "ã‚", "a": "me"}, {"q": "ã‚‚", "a": "mo"}, {"q": "ã‚„", "a": "ya"}, {"q": "ã‚†", "a": "yu"}, {"q": "ã‚ˆ", "a": "yo"}, {"q": "ã‚‰", "a": "ra"}, {"q": "ã‚Š", "a": "ri"}, {"q": "ã‚‹", "a": "ru"}, {"q": "ã‚Œ", "a": "re"}, {"q": "ã‚", "a": "ro"}, {"q": "ã‚", "a": "wa"}, {"q": "ã‚’", "a": "wo"}, {"q": "ã‚“", "a": "n"}];
const kanjiQuestions=[{"q": "æ—¥", "a": "sun / day"}, {"q": "æœˆ", "a": "moon / month"}, {"q": "ç«", "a": "fire"}, {"q": "æ°´", "a": "water"}, {"q": "æœ¨", "a": "tree"}, {"q": "é‡‘", "a": "gold / money"}, {"q": "åœŸ", "a": "earth / soil"}, {"q": "äºº", "a": "person"}, {"q": "å±±", "a": "mountain"}, {"q": "å·", "a": "river"}, {"q": "ç”°", "a": "rice field"}, {"q": "å£", "a": "mouth"}, {"q": "ç›®", "a": "eye"}, {"q": "è€³", "a": "ear"}, {"q": "æ‰‹", "a": "hand"}, {"q": "è¶³", "a": "foot"}, {"q": "åŠ›", "a": "power"}, {"q": "ç”·", "a": "man"}, {"q": "å¥³", "a": "woman"}, {"q": "å­", "a": "child"}, {"q": "å­¦", "a": "study"}, {"q": "ç”Ÿ", "a": "life / student"}, {"q": "å…ˆ", "a": "previous / ahead"}, {"q": "å¤§", "a": "big"}, {"q": "å°", "a": "small"}, {"q": "ä¸­", "a": "middle"}, {"q": "ä¸Š", "a": "up"}, {"q": "ä¸‹", "a": "down"}, {"q": "å·¦", "a": "left"}, {"q": "å³", "a": "right"}, {"q": "ä¸€", "a": "one"}, {"q": "äºŒ", "a": "two"}, {"q": "ä¸‰", "a": "three"}];
const wordQuestions=[{"q": "ã“ã‚“ã«ã¡ã¯", "a": "hello"}, {"q": "ã‚ã‚ŠãŒã¨ã†", "a": "thank you"}, {"q": "æ—¥æœ¬", "a": "Japan"}, {"q": "å­¦ç”Ÿ", "a": "student"}, {"q": "å…ˆç”Ÿ", "a": "teacher"}, {"q": "å­¦æ ¡", "a": "school"}, {"q": "æ°´", "a": "water"}, {"q": "ç«æ›œæ—¥", "a": "Tuesday"}, {"q": "ä»Šæ—¥", "a": "today"}, {"q": "æ˜Žæ—¥", "a": "tomorrow"}, {"q": "æ˜¨æ—¥", "a": "yesterday"}, {"q": "å‹é”", "a": "friend"}, {"q": "çŠ¬", "a": "dog"}, {"q": "çŒ«", "a": "cat"}, {"q": "æœ¬", "a": "book"}, {"q": "è»Š", "a": "car"}, {"q": "é›»è»Š", "a": "train"}, {"q": "é§…", "a": "station"}, {"q": "é£Ÿã¹ã‚‹", "a": "to eat"}, {"q": "é£²ã‚€", "a": "to drink"}, {"q": "è¡Œã", "a": "to go"}, {"q": "è¦‹ã‚‹", "a": "to see"}, {"q": "èžã", "a": "to listen"}, {"q": "è©±ã™", "a": "to speak"}];
const jlptDeck={
  n5:[
    {q:"æ—¥",a:"sun / day",on:"ãƒ‹ãƒãƒ»ã‚¸ãƒ„",kun:"ã²ãƒ»ã‹",example:"æ—¥æœ¬ / ã«ã»ã‚“ / Japan",note:"One of the first kanji learners meet. It appears in dates, days, and Japan itself."},
    {q:"æœˆ",a:"moon / month",on:"ã‚²ãƒ„ãƒ»ã‚¬ãƒ„",kun:"ã¤ã",example:"æœˆæ›œæ—¥ / ã’ã¤ã‚ˆã†ã³ / Monday",note:"Used for both the moon and calendar months, so it appears constantly in schedules."},
    {q:"äºº",a:"person",on:"ã‚¸ãƒ³ãƒ»ãƒ‹ãƒ³",kun:"ã²ã¨",example:"æ—¥æœ¬äºº / ã«ã»ã‚“ã˜ã‚“ / Japanese person",note:"A core kanji for people, nationality, and human-related words."},
    {q:"å±±",a:"mountain",on:"ã‚µãƒ³",kun:"ã‚„ã¾",example:"å¯Œå£«å±± / ãµã˜ã•ã‚“ / Mt. Fuji",note:"Simple shape, huge usefulness. It appears in place names everywhere."},
    {q:"å·",a:"river",on:"ã‚»ãƒ³",kun:"ã‹ã‚",example:"å·å£ / ã‹ã‚ãã¡ / river mouth",note:"Often used in place names and geography."},
    {q:"ç«",a:"fire",on:"ã‚«",kun:"ã²",example:"ç«æ›œæ—¥ / ã‹ã‚ˆã†ã³ / Tuesday",note:"Part of the weekday cycle and many fire/heat words."},
    {q:"æ°´",a:"water",on:"ã‚¹ã‚¤",kun:"ã¿ãš",example:"æ°´æ›œæ—¥ / ã™ã„ã‚ˆã†ã³ / Wednesday",note:"A basic nature kanji that appears in drinks, water, and weekday names."},
    {q:"æœ¨",a:"tree / wood",on:"ãƒ¢ã‚¯ãƒ»ãƒœã‚¯",kun:"ã",example:"æœ¨æ›œæ—¥ / ã‚‚ãã‚ˆã†ã³ / Thursday",note:"Used for trees, wood, and Thursday."},
    {q:"é‡‘",a:"gold / money",on:"ã‚­ãƒ³ãƒ»ã‚³ãƒ³",kun:"ã‹ã­",example:"é‡‘æ›œæ—¥ / ãã‚“ã‚ˆã†ã³ / Friday",note:"Important for money, metal, gold, and Friday."},
    {q:"åœŸ",a:"earth / soil",on:"ãƒ‰ãƒ»ãƒˆ",kun:"ã¤ã¡",example:"åœŸæ›œæ—¥ / ã©ã‚ˆã†ã³ / Saturday",note:"Appears in soil, land, and Saturday."},
    {q:"å­¦",a:"study",on:"ã‚¬ã‚¯",kun:"ã¾ãªã¶",example:"å­¦ç”Ÿ / ãŒãã›ã„ / student",note:"A must-know school and learning kanji."},
    {q:"ç”Ÿ",a:"life / birth",on:"ã‚»ã‚¤ãƒ»ã‚·ãƒ§ã‚¦",kun:"ã„ãã‚‹ãƒ»ã†ã¾ã‚Œã‚‹",example:"å…ˆç”Ÿ / ã›ã‚“ã›ã„ / teacher",note:"Very flexible: life, birth, student, fresh, and more."}
  ],
  n4:[
    {q:"ä¼š",a:"meet / association",on:"ã‚«ã‚¤",kun:"ã‚ã†",example:"ä¼šç¤¾ / ã‹ã„ã—ã‚ƒ / company",note:"Useful for meetings, groups, and companies."},
    {q:"ç¤¾",a:"company / shrine",on:"ã‚·ãƒ£",kun:"ã‚„ã—ã‚",example:"ä¼šç¤¾ / ã‹ã„ã—ã‚ƒ / company",note:"Often appears in work and organization words."},
    {q:"åº—",a:"shop",on:"ãƒ†ãƒ³",kun:"ã¿ã›",example:"åº—å“¡ / ã¦ã‚“ã„ã‚“ / shop clerk",note:"A practical kanji for stores and shopping."},
    {q:"é§…",a:"station",on:"ã‚¨ã‚­",kun:"-",example:"æ±äº¬é§… / ã¨ã†ãã‚‡ã†ãˆã / Tokyo Station",note:"Essential for travel in Japan."},
    {q:"é›»",a:"electricity",on:"ãƒ‡ãƒ³",kun:"-",example:"é›»è»Š / ã§ã‚“ã—ã‚ƒ / train",note:"Used in trains, phones, electricity, and electronics."},
    {q:"è»Š",a:"car / vehicle",on:"ã‚·ãƒ£",kun:"ãã‚‹ã¾",example:"é›»è»Š / ã§ã‚“ã—ã‚ƒ / train",note:"Vehicle kanji used in train, bicycle, and car words."},
    {q:"è²·",a:"buy",on:"ãƒã‚¤",kun:"ã‹ã†",example:"è²·ã„ç‰© / ã‹ã„ã‚‚ã® / shopping",note:"One of the most useful daily-life action kanji."},
    {q:"å£²",a:"sell",on:"ãƒã‚¤",kun:"ã†ã‚‹",example:"å£²åº— / ã°ã„ã¦ã‚“ / stand / kiosk",note:"Often paired mentally with buy."},
    {q:"æ—",a:"family / tribe",on:"ã‚¾ã‚¯",kun:"-",example:"å®¶æ— / ã‹ãžã / family",note:"Shows up in family and group identity words."},
    {q:"æ—…",a:"travel",on:"ãƒªãƒ§",kun:"ãŸã³",example:"æ—…è¡Œ / ã‚Šã‚‡ã“ã† / trip",note:"Core travel kanji."},
    {q:"æ–™",a:"fee / material",on:"ãƒªãƒ§ã‚¦",kun:"-",example:"æ–™ç† / ã‚Šã‚‡ã†ã‚Š / cooking",note:"Appears in fees, materials, and cooking."},
    {q:"ç†",a:"reason / logic",on:"ãƒª",kun:"-",example:"æ–™ç† / ã‚Šã‚‡ã†ã‚Š / cooking",note:"Used in reason, science, and management words."}
  ],
  n3:[
    {q:"çµŒé¨“",a:"experience",on:"ã‚±ã‚¤ã‚±ãƒ³",kun:"-",example:"çµŒé¨“ãŒã‚ã‚‹ / ã‘ã„ã‘ã‚“ãŒã‚ã‚‹ / to have experience",note:"Common in work, life stories, and introductions."},
    {q:"ç’°å¢ƒ",a:"environment",on:"ã‚«ãƒ³ã‚­ãƒ§ã‚¦",kun:"-",example:"è‡ªç„¶ç’°å¢ƒ / ã—ãœã‚“ã‹ã‚“ãã‚‡ã† / natural environment",note:"Useful for news, school essays, and society topics."},
    {q:"æ”¿æ²»",a:"politics",on:"ã‚»ã‚¤ã‚¸",kun:"-",example:"æ”¿æ²»å®¶ / ã›ã„ã˜ã‹ / politician",note:"A news and society word built from rule/governance kanji."},
    {q:"çµŒæ¸ˆ",a:"economy",on:"ã‚±ã‚¤ã‚¶ã‚¤",kun:"-",example:"æ—¥æœ¬çµŒæ¸ˆ / ã«ã»ã‚“ã‘ã„ã–ã„ / Japanese economy",note:"Important for news and business language."},
    {q:"æ–‡åŒ–",a:"culture",on:"ãƒ–ãƒ³ã‚«",kun:"-",example:"æ—¥æœ¬æ–‡åŒ– / ã«ã»ã‚“ã¶ã‚“ã‹ / Japanese culture",note:"A core N3-level word for society and identity."},
    {q:"æ­´å²",a:"history",on:"ãƒ¬ã‚­ã‚·",kun:"-",example:"æ­´å²ã‚’å­¦ã¶ / ã‚Œãã—ã‚’ã¾ãªã¶ / study history",note:"Useful in school, travel, and culture contexts."},
    {q:"åŽŸå› ",a:"cause / reason",on:"ã‚²ãƒ³ã‚¤ãƒ³",kun:"-",example:"äº‹æ•…ã®åŽŸå›  / ã˜ã“ã®ã’ã‚“ã„ã‚“ / cause of an accident",note:"Very common for explanations and news."},
    {q:"çµæžœ",a:"result",on:"ã‚±ãƒƒã‚«",kun:"-",example:"è©¦é¨“ã®çµæžœ / ã—ã‘ã‚“ã®ã‘ã£ã‹ / exam result",note:"Pairs naturally with cause, effort, and tests."},
    {q:"åŠªåŠ›",a:"effort",on:"ãƒ‰ãƒªãƒ§ã‚¯",kun:"-",example:"åŠªåŠ›ã™ã‚‹ / ã©ã‚Šã‚‡ãã™ã‚‹ / to make an effort",note:"A motivational and school/work-friendly N3 word."},
    {q:"é–¢ä¿‚",a:"relationship / connection",on:"ã‚«ãƒ³ã‚±ã‚¤",kun:"-",example:"å‹äººé–¢ä¿‚ / ã‚†ã†ã˜ã‚“ã‹ã‚“ã‘ã„ / friendship relationship",note:"Useful for people, business, and abstract connections."},
    {q:"é€£çµ¡",a:"contact / communication",on:"ãƒ¬ãƒ³ãƒ©ã‚¯",kun:"-",example:"é€£çµ¡ã™ã‚‹ / ã‚Œã‚“ã‚‰ãã™ã‚‹ / to contact",note:"Daily practical word for messaging someone."},
    {q:"æº–å‚™",a:"preparation",on:"ã‚¸ãƒ¥ãƒ³ãƒ“",kun:"-",example:"æº–å‚™ã§ããŸ / ã˜ã‚…ã‚“ã³ã§ããŸ / ready",note:"Common for events, school, travel, and work."}
  ],
  n2:[],
  n1:[]
};
const jlptWordDeck=[
  {q:"æ—¥æœ¬èªž",a:"Japanese language",reading:"ã«ã»ã‚“ã”",example:"æ—¥æœ¬èªžã‚’å‹‰å¼·ã—ã¦ã„ã¾ã™ã€‚"},
  {q:"æ—…è¡Œ",a:"trip / travel",reading:"ã‚Šã‚‡ã“ã†",example:"äº¬éƒ½ã¸æ—…è¡Œã—ã¾ã™ã€‚"},
  {q:"ç´„æŸ",a:"promise / appointment",reading:"ã‚„ããã",example:"å‹é”ã¨ç´„æŸãŒã‚ã‚Šã¾ã™ã€‚"},
  {q:"èª¬æ˜Ž",a:"explanation",reading:"ã›ã¤ã‚ã„",example:"å…ˆç”ŸãŒèª¬æ˜Žã—ã¾ã—ãŸã€‚"},
  {q:"å¿…è¦",a:"necessary",reading:"ã²ã¤ã‚ˆã†",example:"ç·´ç¿’ãŒå¿…è¦ã§ã™ã€‚"},
  {q:"å®‰å…¨",a:"safe / safety",reading:"ã‚ã‚“ãœã‚“",example:"å®‰å…¨ã«å¸°ã£ã¦ãã ã•ã„ã€‚"},
  {q:"è‡ªç”±",a:"freedom",reading:"ã˜ã‚†ã†",example:"è‡ªç”±ãªæ™‚é–“ãŒã‚ã‚Šã¾ã™ã€‚"},
  {q:"å°†æ¥",a:"future",reading:"ã—ã‚‡ã†ã‚‰ã„",example:"å°†æ¥ã®å¤¢ã¯ä½•ã§ã™ã‹ã€‚"}
];
const jlptFallbackDeck={
  n2:[
    {q:"責任",a:"responsibility",on:"セキニン",kun:"せめる・まかせる",example:"責任を持つ / せきにんをもつ / to take responsibility",note:"A serious N2 word for duties, promises, and trust.",strokes:20},
    {q:"制度",a:"system / institution",on:"セイド",kun:"つくる・たび",example:"教育制度 / きょういくせいど / education system",note:"Useful for society, school, work, and news topics.",strokes:18},
    {q:"資源",a:"resources",on:"シゲン",kun:"もと",example:"自然資源 / しぜんしげん / natural resources",note:"Appears often in economy, environment, and news language.",strokes:26},
    {q:"評価",a:"evaluation / assessment",on:"ヒョウカ",kun:"あたい",example:"高く評価する / たかくひょうかする / to highly value",note:"A common work, school, and review word.",strokes:19}
  ],
  n1:[
    {q:"概念",a:"concept / idea",on:"ガイネン",kun:"おおむね",example:"基本概念 / きほんがいねん / basic concept",note:"Academic N1 vocabulary for abstract discussion.",strokes:28},
    {q:"矛盾",a:"contradiction",on:"ムジュン",kun:"ほこ・たて",example:"矛盾している / むじゅんしている / to be contradictory",note:"Great for essays, debates, and advanced explanations.",strokes:14},
    {q:"謙虚",a:"humility / modesty",on:"ケンキョ",kun:"へりくだる",example:"謙虚な態度 / けんきょなたいど / humble attitude",note:"A high-level word for character and behavior.",strokes:30},
    {q:"顕著",a:"remarkable / noticeable",on:"ケンチョ",kun:"あらわれる",example:"顕著な変化 / けんちょなへんか / noticeable change",note:"Useful in reports, news, and formal writing.",strokes:29}
  ]
};
let jlptKanjiLoaded=false;
const prefPins=[
  {romaji:"HokkaidÅ",jp:"åŒ—æµ·é“",cities:"Sapporo, Asahikawa, Hakodate",x:67,y:12},
  {romaji:"Aomori",jp:"é’æ£®",cities:"Aomori, Hirosaki, Hachinohe",x:60,y:38},
  {romaji:"Iwate",jp:"å²©æ‰‹",cities:"Morioka, Ichinoseki, Hanamaki",x:64,y:42},
  {romaji:"Miyagi",jp:"å®®åŸŽ",cities:"Sendai, Ishinomaki, ÅŒsaki",x:63,y:48},
  {romaji:"Akita",jp:"ç§‹ç”°",cities:"Akita, Yokote, Daisen",x:57,y:41},
  {romaji:"Yamagata",jp:"å±±å½¢",cities:"Yamagata, Tsuruoka, Sakata",x:58,y:47},
  {romaji:"Fukushima",jp:"ç¦å³¶",cities:"Fukushima, KÅriyama, Iwaki",x:60,y:53},
  {romaji:"Ibaraki",jp:"èŒ¨åŸŽ",cities:"Mito, Tsukuba, Hitachi",x:62,y:59},
  {romaji:"Tochigi",jp:"æ ƒæœ¨",cities:"Utsunomiya, Oyama, NikkÅ",x:58,y:56},
  {romaji:"Gunma",jp:"ç¾¤é¦¬",cities:"Maebashi, Takasaki, Isesaki",x:54,y:55},
  {romaji:"Saitama",jp:"åŸ¼çŽ‰",cities:"Saitama, Kawaguchi, Kawagoe",x:56,y:60},
  {romaji:"Chiba",jp:"åƒè‘‰",cities:"Chiba, Funabashi, Kashiwa",x:62,y:63},
  {romaji:"Tokyo",jp:"æ±äº¬",cities:"Tokyo, HachiÅji, Machida",x:57,y:63},
  {romaji:"Kanagawa",jp:"ç¥žå¥ˆå·",cities:"Yokohama, Kawasaki, Sagamihara",x:56,y:66},
  {romaji:"Niigata",jp:"æ–°æ½Ÿ",cities:"Niigata, Nagaoka, JÅetsu",x:51,y:51},
  {romaji:"Toyama",jp:"å¯Œå±±",cities:"Toyama, Takaoka, Uozu",x:44,y:57},
  {romaji:"Ishikawa",jp:"çŸ³å·",cities:"Kanazawa, Komatsu, Hakusan",x:41,y:60},
  {romaji:"Fukui",jp:"ç¦äº•",cities:"Fukui, Sabae, Tsuruga",x:37,y:64},
  {romaji:"Yamanashi",jp:"å±±æ¢¨",cities:"KÅfu, Kai, Fujiyoshida",x:52,y:64},
  {romaji:"Nagano",jp:"é•·é‡Ž",cities:"Nagano, Matsumoto, Ueda",x:49,y:58},
  {romaji:"Gifu",jp:"å²é˜œ",cities:"Gifu, Takayama, ÅŒgaki",x:42,y:63},
  {romaji:"Shizuoka",jp:"é™å²¡",cities:"Shizuoka, Hamamatsu, Fuji",x:49,y:69},
  {romaji:"Aichi",jp:"æ„›çŸ¥",cities:"Nagoya, Toyota, Toyohashi",x:43,y:69},
  {romaji:"Mie",jp:"ä¸‰é‡",cities:"Tsu, Yokkaichi, Suzuka",x:40,y:73},
  {romaji:"Shiga",jp:"æ»‹è³€",cities:"ÅŒtsu, Hikone, Kusatsu",x:37,y:66},
  {romaji:"Kyoto",jp:"äº¬éƒ½",cities:"Kyoto, Uji, Maizuru",x:33,y:66},
  {romaji:"Osaka",jp:"å¤§é˜ª",cities:"Osaka, Sakai, HigashiÅsaka",x:32,y:70},
  {romaji:"HyÅgo",jp:"å…µåº«",cities:"Kobe, Himeji, Nishinomiya",x:27,y:67},
  {romaji:"Nara",jp:"å¥ˆè‰¯",cities:"Nara, Kashihara, Ikoma",x:35,y:71},
  {romaji:"Wakayama",jp:"å’Œæ­Œå±±",cities:"Wakayama, Tanabe, Hashimoto",x:33,y:76},
  {romaji:"Tottori",jp:"é³¥å–",cities:"Tottori, Yonago, Kurayoshi",x:24,y:64},
  {romaji:"Shimane",jp:"å³¶æ ¹",cities:"Matsue, Izumo, Hamada",x:17,y:67},
  {romaji:"Okayama",jp:"å²¡å±±",cities:"Okayama, Kurashiki, Tsuyama",x:24,y:70},
  {romaji:"Hiroshima",jp:"åºƒå³¶",cities:"Hiroshima, Fukuyama, Kure",x:17,y:73},
  {romaji:"Yamaguchi",jp:"å±±å£",cities:"Yamaguchi, Shimonoseki, Ube",x:11,y:76},
  {romaji:"Tokushima",jp:"å¾³å³¶",cities:"Tokushima, Anan, Naruto",x:29,y:79},
  {romaji:"Kagawa",jp:"é¦™å·",cities:"Takamatsu, Marugame, Mitoyo",x:26,y:75},
  {romaji:"Ehime",jp:"æ„›åª›",cities:"Matsuyama, Imabari, Uwajima",x:18,y:78},
  {romaji:"KÅchi",jp:"é«˜çŸ¥",cities:"KÅchi, Shimanto, Nankoku",x:22,y:83},
  {romaji:"Fukuoka",jp:"ç¦å²¡",cities:"Fukuoka, KitakyÅ«shÅ«, Kurume",x:9,y:78},
  {romaji:"Saga",jp:"ä½è³€",cities:"Saga, Karatsu, Tosu",x:6,y:82},
  {romaji:"Nagasaki",jp:"é•·å´Ž",cities:"Nagasaki, Sasebo, Isahaya",x:4,y:86},
  {romaji:"Kumamoto",jp:"ç†Šæœ¬",cities:"Kumamoto, Yatsushiro, Amakusa",x:9,y:87},
  {romaji:"ÅŒita",jp:"å¤§åˆ†",cities:"ÅŒita, Beppu, Nakatsu",x:14,y:83},
  {romaji:"Miyazaki",jp:"å®®å´Ž",cities:"Miyazaki, MiyakonjÅ, Nobeoka",x:14,y:91},
  {romaji:"Kagoshima",jp:"é¹¿å…å³¶",cities:"Kagoshima, Kirishima, Kanoya",x:8,y:94},
  {romaji:"Okinawa",jp:"æ²–ç¸„",cities:"Naha, Okinawa City, Uruma",x:76,y:78}
];
const popularCityPins=[
  {name:"Sapporo",jp:"æœ­å¹Œ",pref:"HokkaidÅ",x:67,y:12,note:"Popular northern city known for snow, food, and winter festivals."},
  {name:"Sendai",jp:"ä»™å°",pref:"Miyagi",x:63,y:48,note:"Major TÅhoku city with easy access to culture, food, and coastal trips."},
  {name:"Tokyo",jp:"æ±äº¬",pref:"Tokyo",x:57,y:63,note:"Japan's capital and the biggest culture, travel, shopping, and business hub."},
  {name:"Yokohama",jp:"æ¨ªæµœ",pref:"Kanagawa",x:56,y:66,note:"Popular port city next to Tokyo with waterfront areas and Chinatown."},
  {name:"Nagoya",jp:"åå¤å±‹",pref:"Aichi",x:43,y:69,note:"Large central Japan city known for transport, food, and industry."},
  {name:"Kyoto",jp:"äº¬éƒ½",pref:"Kyoto",x:33,y:66,note:"Historic city famous for temples, shrines, gardens, and traditional streets."},
  {name:"Osaka",jp:"å¤§é˜ª",pref:"Osaka",x:32,y:70,note:"Popular Kansai city known for food, nightlife, shopping, and comedy culture."},
  {name:"Kobe",jp:"ç¥žæˆ¸",pref:"HyÅgo",x:27,y:68,note:"Port city near Osaka known for harbor views, food, and city-mountain scenery."},
  {name:"Hiroshima",jp:"åºƒå³¶",pref:"Hiroshima",x:17,y:73,note:"Western Japan city known for history, food, and access to Miyajima."},
  {name:"Fukuoka",jp:"ç¦å²¡",pref:"Fukuoka",x:9,y:78,note:"Popular KyÅ«shÅ« city known for ramen, shopping, nightlife, and airport access."},
  {name:"Naha",jp:"é‚£è¦‡",pref:"Okinawa",x:76,y:78,note:"Main Okinawa city and a common starting point for island travel."}
];
const calibratedPrefPoints=[
  [72,15],[61,39],[66,46],[66,54],[60,46],[61,53],[64,60],
  [66,66],[63,63],[59,63],[61,68],[67,70],[63,70],[61,73],
  [55,57],[49,63],[43,64],[40,68],[58,70],[56,64],[50,68],
  [57,75],[52,72],[49,76],[46,69],[43,68],[46,70],[39,68],
  [47,72],[45,76],[34,66],[27,69],[35,70],[31,72],[22,75],
  [40,78],[38,75],[30,79],[34,82],[17,78],[13,80],[9,83],
  [15,86],[21,82],[21,90],[14,93],[78,86]
];
const calibratedCityPoints={
  Sapporo:[64,23],
  Sendai:[66,54],
  Tokyo:[63,70],
  Yokohama:[61,73],
  Nagoya:[52,72],
  Kyoto:[43,68],
  Osaka:[46,70],
  Kobe:[39,69],
  Hiroshima:[31,72],
  Fukuoka:[17,78],
  Naha:[78,86]
};
prefPins.forEach((pref,index)=>{const point=calibratedPrefPoints[index];if(point){pref.x=point[0];pref.y=point[1]}});
popularCityPins.forEach(city=>{const point=calibratedCityPoints[city.name];if(point){city.x=point[0];city.y=point[1]}});
const prefExplanations={
  "HokkaidÅ":"Japan's northernmost prefecture, known for wide nature, snow, seafood, and Sapporo.",
  Tokyo:"Japan's capital prefecture and one of the country's main culture, business, and travel hubs.",
  Kyoto:"Historic Kansai prefecture known for temples, shrines, traditional streets, and Kyoto city.",
  Osaka:"Urban Kansai prefecture known for food, shopping, entertainment, and Osaka city.",
  Hiroshima:"Western Japan prefecture known for Hiroshima city, history, food, and nearby island trips.",
  Fukuoka:"KyÅ«shÅ« gateway prefecture known for Fukuoka city, ramen, shopping, and easy travel access.",
  Okinawa:"Southern island prefecture known for beaches, subtropical culture, and Naha."
};
const japanRegions=[
  {id:"hokkaido",romaji:"Hokkaido",kanji:"åŒ—æµ·é“",hiragana:"ã»ã£ã‹ã„ã©ã†",x:72,y:18,tilt:-4,prefectures:"Hokkaido",summary:"Japan's wide northern region, known for snow, open landscapes, seafood, and Ainu cultural roots.",history:"Hokkaido became formally developed as Japan's northern frontier during the Meiji period. Its older Ainu history, colder climate, and wide agricultural land give it a very different feeling from Honshu."},
  {id:"tohoku",romaji:"Tohoku",kanji:"æ±åŒ—",hiragana:"ã¨ã†ã»ã",x:63,y:47,tilt:5,prefectures:"Aomori, Iwate, Miyagi, Akita, Yamagata, Fukushima",summary:"Northern Honshu, famous for festivals, mountains, rice fields, hot springs, and deep seasonal changes.",history:"Tohoku was long seen as Japan's northern heartland, with powerful local clans, mountain faith, and farming traditions. Its festivals and dialects still carry a strong regional identity."},
  {id:"kanto",romaji:"Kanto",kanji:"é–¢æ±",hiragana:"ã‹ã‚“ã¨ã†",x:63,y:68,tilt:-2,prefectures:"Tokyo, Kanagawa, Chiba, Saitama, Ibaraki, Tochigi, Gunma",summary:"Tokyo and its surrounding plains form one of Japan's busiest cultural and economic centers.",history:"Kanto grew around Edo, later Tokyo, and became the center of modern Japanese government, rail, media, and pop culture. It is where old shrine towns and megacity life sit side by side."},
  {id:"chubu",romaji:"Chubu",kanji:"ä¸­éƒ¨",hiragana:"ã¡ã‚…ã†ã¶",x:50,y:65,tilt:4,prefectures:"Niigata, Toyama, Ishikawa, Fukui, Yamanashi, Nagano, Gifu, Shizuoka, Aichi",summary:"Central Japan, stretching from the Japan Alps to Nagoya, Mount Fuji, and coastal trade routes.",history:"Chubu links eastern and western Japan. Mountain provinces, castle towns, post roads, and industrial cities all meet here, making it one of Japan's most geographically varied regions."},
  {id:"kansai",romaji:"Kansai",kanji:"é–¢è¥¿",hiragana:"ã‹ã‚“ã•ã„",x:43,y:72,tilt:-5,prefectures:"Kyoto, Osaka, Hyogo, Nara, Wakayama, Shiga, Mie",summary:"Historic western center of Japan, known for Kyoto, Osaka, Nara, temples, food, and old capitals.",history:"Kansai held Japan's ancient capitals for centuries. Nara and Kyoto shaped court culture, Buddhism, architecture, and literature, while Osaka became a merchant city famous for food and trade."},
  {id:"chugoku",romaji:"Chugoku",kanji:"ä¸­å›½",hiragana:"ã¡ã‚…ã†ã”ã",x:29,y:71,tilt:3,prefectures:"Tottori, Shimane, Okayama, Hiroshima, Yamaguchi",summary:"Western Honshu, with coastal cities, islands, mountains, history, and routes toward Kyushu.",history:"Chugoku connected Japan to trade routes through the Seto Inland Sea. Hiroshima, old castle towns, and shrine islands give the region a mix of memory, maritime culture, and local pride."},
  {id:"shikoku",romaji:"Shikoku",kanji:"å››å›½",hiragana:"ã—ã“ã",x:35,y:80,tilt:-4,prefectures:"Tokushima, Kagawa, Ehime, Kochi",summary:"Japan's smallest main island, known for pilgrimage routes, udon, mountains, rivers, and coastlines.",history:"Shikoku is famous for the 88-temple pilgrimage linked to Kukai. Its smaller scale, rugged terrain, and island culture make it feel quieter and more traditional than Japan's huge urban regions."},
  {id:"kyushu",romaji:"Kyushu",kanji:"ä¹å·ž",hiragana:"ãã‚…ã†ã—ã‚…ã†",x:17,y:83,tilt:4,prefectures:"Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Kagoshima",summary:"Southwestern Japan, known for ramen, hot springs, volcanoes, port history, and early foreign exchange.",history:"Kyushu was one of Japan's major gateways to Asia and Europe. Nagasaki trade, volcanic landscapes, samurai domains, and lively cities like Fukuoka give the region a bold personality."},
  {id:"okinawa",romaji:"Okinawa",kanji:"æ²–ç¸„",hiragana:"ãŠããªã‚",x:78,y:86,tilt:-2,prefectures:"Okinawa",summary:"Southern island region with Ryukyu heritage, subtropical beaches, music, food, and island history.",history:"Okinawa was once the Ryukyu Kingdom, a maritime culture with strong links across East and Southeast Asia. Its language, music, food, and history remain distinct within Japan."}
];
let regionScriptMode="romaji",activeRegionIndex=0;
japanRegions.splice(0,japanRegions.length,
  {id:"hokkaido",romaji:"Hokkaido",kanji:"北海道",hiragana:"ほっかいどう",image:"assets/region-hokkaido.png",prefectures:"Hokkaido",summary:"Japan's wide northern region, known for snow, open landscapes, seafood, hot springs, and Ainu cultural roots.",history:"Hokkaido became formally developed as Japan's northern frontier during the Meiji period, while Ainu culture gives the island a much older story. Its colder climate, huge farmland, and frontier cities make it feel distinct from Honshu.",culture:"Ainu heritage, winter festivals, wide farming towns, ski culture, and calm northern nature.",foods:"Sapporo ramen, jingisukan, seafood bowls, dairy sweets, melon, soup curry.",landmarks:"Sapporo Snow Festival, Biei blue pond, Hakodate night view, Furano lavender fields, Shiretoko.",facts:"Hokkaido is Japan's largest prefecture by area and has some of the country's strongest seasonal scenery.",important:"Sapporo, Hakodate, Asahikawa, Otaru"},
  {id:"tohoku",romaji:"Tohoku",kanji:"東北",hiragana:"とうほく",image:"assets/region-tohoku.png",prefectures:"Aomori, Iwate, Miyagi, Akita, Yamagata, Fukushima",summary:"Northern Honshu, famous for festivals, mountains, rice fields, hot springs, snow, and deep seasonal changes.",history:"Tohoku was long seen as Japan's northern heartland, with powerful local clans, mountain faith, farming traditions, and resilient coastal communities. Its festivals and dialects carry a strong regional identity.",culture:"Nebuta floats, mountain worship, onsen villages, rice culture, samurai towns, and local dialects.",foods:"Kiritanpo, gyutan, zunda mochi, wanko soba, apples, seafood.",landmarks:"Matsushima Bay, Hirosaki Castle, Yamadera, Ouchi-juku, Lake Towada.",facts:"Tohoku is one of the best regions for seeing Japan's snowy winters and huge summer festivals.",important:"Sendai, Aomori, Morioka, Akita, Yamagata, Fukushima"},
  {id:"kanto",romaji:"Kanto",kanji:"関東",hiragana:"かんとう",image:"assets/region-kanto.png",prefectures:"Tokyo, Kanagawa, Chiba, Saitama, Ibaraki, Tochigi, Gunma",summary:"Tokyo and its surrounding plains form one of Japan's busiest cultural, economic, media, and transport centers.",history:"Kanto grew around Edo, later Tokyo, and became the center of modern Japanese government, rail, business, media, and pop culture. Old shrine towns and megacity life sit side by side.",culture:"Tokyo pop culture, shrine towns, commuter cities, museums, universities, nightlife, and old Edo traditions.",foods:"Monjayaki, sushi, Yokohama ramen, gyoza, natto, senbei.",landmarks:"Tokyo Tower, Asakusa, Shibuya, Nikko Toshogu, Kamakura, Yokohama Minato Mirai.",facts:"The Greater Tokyo Area is one of the largest metropolitan regions in the world.",important:"Tokyo, Yokohama, Chiba, Saitama, Utsunomiya, Mito, Maebashi"},
  {id:"chubu",romaji:"Chubu",kanji:"中部",hiragana:"ちゅうぶ",image:"assets/region-chugoku.png",prefectures:"Niigata, Toyama, Ishikawa, Fukui, Yamanashi, Nagano, Gifu, Shizuoka, Aichi",summary:"Central Japan, stretching from the Japan Alps to Nagoya, Mount Fuji, old post towns, and coastal trade routes.",history:"Chubu links eastern and western Japan. Mountain provinces, castle towns, post roads, craft cities, and industrial centers all meet here, making it one of Japan's most varied regions.",culture:"Alpine villages, tea fields, samurai districts, manufacturing cities, traditional crafts, and castle towns.",foods:"Miso katsu, hitsumabushi, soba, Hida beef, tea, seafood from the Japan Sea.",landmarks:"Mount Fuji, Shirakawa-go, Kanazawa, Matsumoto Castle, Tateyama Kurobe Alpine Route.",facts:"Chubu contains both Mount Fuji and the Japanese Alps, giving it huge geographic range.",important:"Nagoya, Kanazawa, Niigata, Nagano, Shizuoka, Gifu, Toyama"},
  {id:"kansai",romaji:"Kansai",kanji:"関西",hiragana:"かんさい",image:"assets/region-chubu.png",prefectures:"Kyoto, Osaka, Hyogo, Nara, Wakayama, Shiga, Mie",summary:"Historic western center of Japan, known for Kyoto, Osaka, Nara, temples, comedy, old capitals, and food culture.",history:"Kansai held Japan's ancient capitals for centuries. Nara and Kyoto shaped court culture, Buddhism, architecture, and literature, while Osaka grew into a merchant city famous for food and trade.",culture:"Old capitals, temples, Kansai dialect, comedy, merchant energy, tea culture, and traditional arts.",foods:"Takoyaki, okonomiyaki, kaiseki, Kobe beef, matcha sweets, kushikatsu.",landmarks:"Fushimi Inari, Osaka Castle, Nara Park, Himeji Castle, Koyasan, Lake Biwa.",facts:"Many ideas people imagine as traditional Japan come from Kansai's long capital history.",important:"Osaka, Kyoto, Kobe, Nara, Wakayama, Otsu, Tsu"},
  {id:"chugoku",romaji:"Chugoku",kanji:"中国",hiragana:"ちゅうごく",image:"assets/region-shikoku.png",prefectures:"Tottori, Shimane, Okayama, Hiroshima, Yamaguchi",summary:"Western Honshu, with coastal cities, islands, mountains, maritime routes, shrine islands, and layered history.",history:"Chugoku connected Japan to trade routes through the Seto Inland Sea. Hiroshima, old castle towns, shrine islands, and mountain communities give the region memory, maritime culture, and local pride.",culture:"Seto Inland Sea travel, castle towns, shrine islands, folk legends, coastal trade, and quiet mountain communities.",foods:"Hiroshima okonomiyaki, oysters, momiji manju, Izumo soba, pufferfish.",landmarks:"Miyajima, Hiroshima Peace Memorial Park, Tottori Sand Dunes, Izumo Taisha, Kurashiki.",facts:"The name Chugoku means middle country in a historical regional sense, not the country China.",important:"Hiroshima, Okayama, Matsue, Tottori, Yamaguchi"},
  {id:"shikoku",romaji:"Shikoku",kanji:"四国",hiragana:"しこく",image:"assets/region-kansai.png",prefectures:"Tokushima, Kagawa, Ehime, Kochi",summary:"Japan's smallest main island, known for pilgrimage routes, udon, mountains, rivers, coasts, and quiet towns.",history:"Shikoku is famous for the 88-temple pilgrimage linked to Kukai. Its rugged terrain, island culture, and smaller cities make it feel quieter and more traditional than Japan's huge urban regions.",culture:"Pilgrimage culture, rural temples, dance festivals, citrus orchards, rivers, and coastal towns.",foods:"Sanuki udon, katsuo tataki, sudachi, jakoten, mikan.",landmarks:"Dogo Onsen, Naruto whirlpools, Iya Valley, Ritsurin Garden, Kochi Castle.",facts:"The Shikoku pilgrimage is one of Japan's most famous spiritual journeys.",important:"Takamatsu, Matsuyama, Kochi, Tokushima"},
  {id:"kyushu",romaji:"Kyushu",kanji:"九州",hiragana:"きゅうしゅう",image:"assets/region-kyushu.png",prefectures:"Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Kagoshima",summary:"Southwestern Japan, known for ramen, hot springs, volcanoes, port history, castles, and early foreign exchange.",history:"Kyushu was one of Japan's major gateways to Asia and Europe. Nagasaki trade, volcanic landscapes, samurai domains, and lively cities like Fukuoka give the region a bold personality.",culture:"Port history, onsen towns, volcano landscapes, lively food stalls, ceramics, and southern samurai heritage.",foods:"Hakata ramen, castella, tonkotsu, chicken nanban, karashi renkon, mentaiko.",landmarks:"Kumamoto Castle, Beppu Onsen, Sakurajima, Dazaifu Tenmangu, Nagasaki harbor.",facts:"Kyushu has some of Japan's most active volcanic landscapes and famous hot spring areas.",important:"Fukuoka, Nagasaki, Kumamoto, Kagoshima, Beppu, Miyazaki, Saga"},
  {id:"okinawa",romaji:"Okinawa",kanji:"沖縄",hiragana:"おきなわ",image:"assets/region-okinawa.png",prefectures:"Okinawa",summary:"Southern island region with Ryukyu heritage, subtropical beaches, music, food, coral seas, and island history.",history:"Okinawa was once the Ryukyu Kingdom, a maritime culture with strong links across East and Southeast Asia. Its language, music, food, and history remain distinct within Japan.",culture:"Ryukyu dance, sanshin music, island festivals, coral sea culture, pottery, and subtropical daily life.",foods:"Okinawa soba, goya champuru, sata andagi, taco rice, beni imo sweets.",landmarks:"Shuri Castle, Kokusai-dori, Kerama Islands, Churaumi Aquarium, Ishigaki and Miyako beaches.",facts:"Okinawa's culture developed through sea trade and has a different rhythm from mainland Japan.",important:"Naha, Okinawa City, Ishigaki, Miyakojima, Nago"}
);
const ECON_SECRET="tasewakai-pre-alpha-local-v03";
const storeItems=[
  {id:"dango",name:"Hanami Dango",price:260,img:"assets/store-dango.png",desc:"Spring practice treat for steady learners.",rarity:"common",market:"stable"},
  {id:"onigiri",name:"Cute Onigiri",price:320,img:"assets/store-onigiri-cute.png",desc:"Soft starter snack for lesson breaks.",rarity:"common",market:"stable"},
  {id:"sakura_charm",name:"Sakura Charm",price:520,img:"assets/store-sakura-premium.png",desc:"A small blossom charm for clean streak energy.",rarity:"rare",market:"seasonal"},
  {id:"cat_note",name:"Neko Study Note",price:640,img:"assets/store-cat-note-premium.png",desc:"A friendly study note from the shop counter.",rarity:"rare",market:"stable"},
  {id:"takoyaki",name:"Festival Takoyaki",price:760,img:"assets/store-takoyaki.png",desc:"Osaka street reward with warm market demand.",rarity:"rare",market:"volatile"},
  {id:"koinobori",name:"Koinobori Set",price:920,img:"assets/store-koinobori-premium.png",desc:"Seasonal sky festival display for your passport.",rarity:"epic",market:"seasonal"},
  {id:"omamori",name:"Sakura Omamori",price:1080,img:"assets/store-omamori-premium.png",desc:"Protection charm for brave Japanese learners.",rarity:"epic",market:"stable"},
  {id:"koi_pair",name:"Koi Pair Charm",price:1280,img:"assets/store-koi-premium.png",desc:"Flowing luck collectible with calm water glow.",rarity:"epic",market:"volatile"},
  {id:"wave_scroll",name:"Moon Wave Scroll",price:1440,img:"assets/store-wave-premium.png",desc:"Night sea pattern for rare collection slots.",rarity:"legendary",market:"cooling"},
  {id:"torii_gate",name:"Mini Torii Gate",price:1680,img:"assets/store-torii-premium.png",desc:"Shrine path decoration with premium aura.",rarity:"legendary",market:"rising"},
  {id:"red_lantern",name:"Red Matsuri Lantern",price:1900,img:"assets/store-red-lantern-premium.png",desc:"Warm festival lantern for evening profile glow.",rarity:"legendary",market:"seasonal"},
  {id:"fuji_emblem",name:"Fuji Sunrise Emblem",price:2400,img:"assets/store-fuji-premium.png",desc:"Premium mountain collectible for patient learners.",rarity:"mythic",market:"rising"},
  {id:"fukubukuro",name:"Fukubukuro Fortune Bag",price:2800,img:"assets/store-fukubukuro-premium.png",desc:"Mystery lucky bag with dramatic price swings.",rarity:"mythic",market:"volatile"},
  {id:"castle_relic",name:"Sakura Castle Relic",price:3600,img:"assets/store-castle-premium.png",desc:"High-tier collector display for serious grinders.",rarity:"divine",market:"rare"}
];
const STORE_MARKET_KEY="tasewakaiStoreMarketV2";
const STORE_ROTATION_KEY="tasewakaiStoreRotationV1";
const STORE_GIFT_COOLDOWN_MS=60000;
function getStoreMarket(){
  const now=Date.now();
  let market=null;
  try{market=JSON.parse(localStorage.getItem(STORE_MARKET_KEY)||"null")}catch(error){market=null}
  if(!market||!market.nextShift||now>market.nextShift){
    const trendPool=["calm","festival demand","cooling prices","collector rush"];
    market={trend:trendPool[Math.floor(Math.random()*trendPool.length)],inflation:Number((1.12+Math.random()*.24).toFixed(3)),shifts:{},nextShift:now+(1000*60*(7+Math.floor(Math.random()*9))),changedAt:now};
    storeItems.forEach(item=>{
      const rarityWeight={common:.06,rare:.09,epic:.12,legendary:.15,mythic:.18,divine:.22}[item.rarity]||.08;
      const bias=item.market==="rising"?.045:item.market==="cooling"?-.045:0;
      const direction=Math.random()>.5?1:-1;
      market.shifts[item.id]=Number((bias+(direction*Math.random()*rarityWeight)).toFixed(3));
    });
    localStorage.setItem(STORE_MARKET_KEY,JSON.stringify(market));
  }
  return market;
}
function getStoreShift(item,market=getStoreMarket()){
  return Number((market.shifts?.[item.id]||0).toFixed(3));
}
function getStorePrice(item,market=getStoreMarket()){
  const shift=getStoreShift(item,market);
  return Math.max(50,Math.round(item.price*(market.inflation+shift)/10)*10);
}
function formatStoreTimer(market=getStoreMarket()){
  const minutes=Math.max(1,Math.ceil((market.nextShift-Date.now())/60000));
  return `${minutes} min`;
}
function getStoreRotation(){
  const now=Date.now();
  let rotation=null;
  try{rotation=JSON.parse(localStorage.getItem(STORE_ROTATION_KEY)||"null")}catch(error){rotation=null}
  if(!rotation||!rotation.nextRefresh||now>rotation.nextRefresh){
    const common=storeItems.filter(item=>item.rarity==="common"||item.rarity==="rare");
    const special=storeItems.filter(item=>item.rarity==="epic"||item.rarity==="legendary");
    const premium=storeItems.filter(item=>item.rarity==="mythic"||item.rarity==="divine");
    const pick=(items,count)=>items.slice().sort(()=>Math.random()-.5).slice(0,count).map(item=>item.id);
    const activeIds=[...pick(common,4),...pick(special,3),...pick(premium,1)];
    const featured=activeIds[Math.floor(Math.random()*activeIds.length)];
    rotation={activeIds,featured,leavingSoon:activeIds.slice(-2),nextRefresh:now+(1000*60*(12+Math.floor(Math.random()*9))),merchant:Boolean(Math.random()>.7),createdAt:now};
    localStorage.setItem(STORE_ROTATION_KEY,JSON.stringify(rotation));
  }
  return rotation;
}
function getRotatingStoreItems(){
  const rotation=getStoreRotation();
  const active=rotation.activeIds.map(id=>storeItems.find(item=>item.id===id)).filter(Boolean);
  return active.length?active:storeItems.slice(0,8);
}
function formatRotationTimer(rotation=getStoreRotation()){
  return `${Math.max(1,Math.ceil((rotation.nextRefresh-Date.now())/60000))} min`;
}
function getAveragePurchasePrice(id){
  const ledger=progress.purchaseLedger?.[id];
  return ledger?.qty?Math.round(ledger.total/ledger.qty):0;
}
function getSellQuote(item,market=getStoreMarket()){
  const rarityRate={common:.54,rare:.60,epic:.67,legendary:.73,mythic:.80,divine:.86}[item.rarity]||.55;
  const tax=.08;
  const demand=Math.max(-.18,Math.min(.24,getStoreShift(item,market)));
  const current=getStorePrice(item,market);
  const gross=Math.round(current*(rarityRate+demand));
  const net=Math.max(1,Math.round(gross*(1-tax)/10)*10);
  const avg=getAveragePurchasePrice(item.id);
  return {gross,net,tax:Math.max(0,gross-net),avg,profit:avg?net-avg:0};
}
function getManekiPhrase(market=getStoreMarket(),rotation=getStoreRotation()){
  const avg=storeItems.reduce((sum,item)=>sum+getStoreShift(item,market),0)/storeItems.length;
  const rareActive=getRotatingStoreItems().some(item=>["legendary","mythic","divine"].includes(item.rarity));
  const lines=rotation.merchant?["A special trader has arrived!","Fresh goods from distant regions!","Something unusual appeared today."]:rareActive?["My whiskers sense something rare!","Don't miss this one!","That's not something you see every day."]:avg>.02?["Looks like collectors are spending today!","Sakura items are gaining attention!","The market feels lively!"]:avg<-.02?["Hmm... some prices are cooling down.","Collectors seem patient today.","A quiet market can hide opportunities."]:["Welcome back!","Have a look around.","Saving YEN is important too!","Every collector starts somewhere."];
  return lines[Math.floor((Date.now()/5000)%lines.length)];
}
const LOCAL_PHRASES=[
  {japanese:"今日はどうだった？",romaji:"Kyou wa dou datta?",english:"How was your day?",category:"Friends",tone:"Casual"},
  {japanese:"駅はどこですか？",romaji:"Eki wa doko desu ka?",english:"Where is the station?",category:"Travel",tone:"Polite"},
  {japanese:"おすすめは何ですか？",romaji:"Osusume wa nan desu ka?",english:"What do you recommend?",category:"Restaurant",tone:"Polite"},
  {japanese:"ボイスチャットに入る？",romaji:"Boisu chatto ni hairu?",english:"Are you joining voice chat?",category:"Gaming / Discord",tone:"Casual"}
];
const phraseCategoryKeywords={Travel:"駅",School:"学校",Friends:"友達",Restaurant:"レストラン","Daily Life":"今日","Gaming / Discord":"ゲーム"};
const phraseCategoryIcons={All:"✦",School:"🏫",Travel:"✈️",Friends:"👥",Restaurant:"🍜","Gaming / Discord":"🎮","Daily Life":"🏠"};
function decodeMojibakeText(value){if(typeof value!=="string"||!/[ÃÂÅãæçèéåäœ€]/.test(value))return value;const bytes=[];for(const ch of value){const code=ch.charCodeAt(0),byte=code<=255?code:cp1252Bytes[ch];if(byte===undefined)return value;bytes.push(byte)}try{const decoded=new TextDecoder("utf-8",{fatal:false}).decode(new Uint8Array(bytes));return decoded.includes("�")?value:decoded}catch(error){return value}}
function repairDataText(value){if(Array.isArray(value)){value.forEach((item,index)=>value[index]=repairDataText(item));return value}if(value&&typeof value==="object"){Object.keys(value).forEach(key=>{const fixedKey=decodeMojibakeText(key),fixedValue=repairDataText(value[key]);if(fixedKey!==key){delete value[key];value[fixedKey]=fixedValue}else value[key]=fixedValue});return value}return decodeMojibakeText(value)}
function repairJapaneseTextData(){[kanaQuestions,kanjiQuestions,wordQuestions,jlptDeck,jlptWordDeck,prefPins,popularCityPins,prefExplanations,japanRegions].forEach(repairDataText)}
repairJapaneseTextData();
let trainerMode="kana",currentQuestion=null,lockAnswer=false,mapLayerMode="regions",lastRewardAt=0,lastJlptQuestionKey="",hintUsedThisQuestion=false;
let jlptCorrectCount=Number(localStorage.getItem("tasewakaiJlptCorrectCount")||"0");
let reviewQueue=JSON.parse(localStorage.getItem("tasewakaiJlptReviewQueue")||"[]");
let jlptBossState=JSON.parse(localStorage.getItem("tasewakaiJlptBossState")||"{}");
jlptBossState.hp??=100;jlptBossState.index??=0;jlptBossState.defeated??=0;
let jlptAdventure=JSON.parse(localStorage.getItem("tasewakaiJlptAdventure")||"{}");
jlptAdventure.phase??="learning";jlptAdventure.learnedSet??=0;jlptAdventure.reviewCorrect??=0;jlptAdventure.successCards??=0;jlptAdventure.bossReady??=false;jlptAdventure.freeHints??=0;jlptAdventure.xpBoost??=0;
jlptAdventure.knownCards??=[];jlptAdventure.skippedCards??=[];jlptAdventure.trainingOnly??=false;jlptAdventure.sessionMode??="guided";
const jlptBosses=["Forest Spirit","Shrine Guardian","Mountain Keeper","Dragon Scholar","Imperial Sage"];
const jlptWorlds={n5:"N5 Forest",n4:"N4 Village",n3:"N3 Mountains",n2:"N2 Capital",n1:"N1 Imperial Palace",words:"Vocabulary Road",review:"Review Path"};
const jlptCompanions={
  ready:{img:"assets/jlpt-konata-thinking.gif",text:"Pick a path: learn new cards, or jump straight into training."},
  correct:{img:"assets/jlpt-konata-celebrate.gif",text:"Nice hit. The review path is getting stronger."},
  wrong:{img:"assets/jlpt-konata-tired.gif",text:"No stress. I added it to review so it comes back later."},
  known:{img:"assets/jlpt-chika-thumbs-up.webp",text:"Marked as known. I will show fresher cards first."},
  hint:{img:"assets/jlpt-konata-thinking.gif",text:"Hint opened. Try to answer before peeking next time."},
  training:{img:"assets/jlpt-anime-thumbs.gif",text:"Training-only mode: straight questions, no learning gate."},
  event:{img:"assets/jlpt-konata-happy.gif",text:"A random event appeared on your journey."}
};
const jlptRandomEvents=[
  {icon:"🌸",name:"Sakura Spirit",text:"Bonus EXP wind surrounds your next reward.",effect:"xp"},
  {icon:"📜",name:"Lost Scroll",text:"You found a free hint for this session.",effect:"hint"},
  {icon:"🦊",name:"Fox Messenger",text:"Bonus vocabulary insight unlocked.",effect:"vocab"},
  {icon:"🏮",name:"Shrine Visit",text:"Temporary XP boost activated.",effect:"boost"},
  {icon:"🎁",name:"Treasure Chest",text:"A small YEN reward appeared.",effect:"yen"},
  {icon:"🗻",name:"Traveler Encounter",text:"A bonus challenge is waiting.",effect:"challenge"},
  {icon:"💎",name:"Rare Discovery",text:"Achievement progress increased.",effect:"rare"}
];
const kanjiStrokeFallback={日:4,月:4,人:2,山:3,川:3,火:4,水:4,木:4,金:8,土:3,学:8,生:5,会:6,社:7,店:8,駅:14,電:13,車:7,道:12,場:12,銀:14,病:10,院:10,勉:10,強:11,開:12,閉:11,質:15,問:11,答:12,体:7,旅:10,館:16,映:9,画:8,運:12,転:11,連:10,絡:12,歴:14,史:5,結:12,果:8,由:5,悲:12,喜:12,怒:9,静:14,働:13,選:15,議:20};
let progress=JSON.parse(localStorage.getItem("tasewakaiTrainerProgress")||"{}");
progress.name??="Guest Learner";progress.points??=0;progress.exp??=0;progress.level??=1;progress.yen??=0;progress.streak??=0;progress.lastNameChange??=0;progress.nameLogs??=[];progress.economyHash??="";progress.triedLearning??=false;progress.inventory??={};progress.purchaseLedger??={};progress.sellHistory??=[];progress.giftHistory??=[];progress.lastGiftAt??=0;progress.nameBonusClaimed??=false;
progress.memberSince??=new Date().toISOString();progress.passportNo??=`TW-${Math.floor(1000+Math.random()*9000)}-${String(Date.now()).slice(-4)}`;progress.stats??={kanji:0,vocab:0,lessons:0,daysActive:1,events:0,contributions:0};progress.collections??={templeStamps:0,sakuraPetals:0,festivalItems:0,shrineCharms:0,seasonal:0};progress.lastActiveDate??=todayKey();
let leaderboard=JSON.parse(localStorage.getItem("tasewakaiTrainerLeaderboard")||"[]");
let catTrainerPick=Math.random()>.5?"n5":"trainer",lastHudSakuraTier="",counterAnimationToken=0;
let dailyPhrases=[...LOCAL_PHRASES],selectedPhraseIndex=0,activePhraseCategory="All",phrasesLoaded=false;
let phraseProgress=JSON.parse(localStorage.getItem("tasewakaiPhraseProgress")||"{}");
const ONLINE_LEADERBOARD_ENDPOINT="/api/leaderboard";
const memberJourneyRanks=[
  {level:1,icon:"assets/hud-sakura-sprig.png",title:"New Arrival",jp:"Shinjin",desc:"A new face who has just entered TASEWAKAI."},
  {level:3,icon:"assets/store-sakura-premium.png",title:"Sakura Wanderer",jp:"Sakura no Tabibito",desc:"Beginning to explore the community."},
  {level:5,icon:"assets/icon-daily-calendar.png",title:"Study Companion",jp:"Manabi no Nakama",desc:"Actively learning and joining discussions."},
  {level:7,icon:"assets/store-paper-lantern-premium.png",title:"Culture Explorer",jp:"Bunka Tankenka",desc:"Discovering Japanese culture and traditions."},
  {level:10,icon:"assets/store-torii-premium.png",title:"Shrine Keeper",jp:"Jinja no Mamorite",desc:"A familiar and trusted member."},
  {level:13,icon:"assets/store-red-lantern-premium.png",title:"Lantern Guide",jp:"Chochin no Annainin",desc:"Helping newcomers find their path."},
  {level:16,icon:"assets/badge-laurel-star.png",title:"Kitsune Scholar",jp:"Kitsune no Gakusha",desc:"Knowledgeable and respected by learners."},
  {level:20,icon:"assets/store-wave-premium.png",title:"TASEWAKAI Envoy",jp:"Kai no Shisha",desc:"Represents the spirit of TASEWAKAI."},
  {level:25,icon:"assets/badge-gold-star-coin.png",title:"Moonlit Sage",jp:"Tsuki no Kenja",desc:"A veteran member with deep experience."},
  {level:30,icon:"assets/badge-ribbon-medal.png",title:"TASEWAKAI Legend",jp:"Kai no Densetsu",desc:"One of the most dedicated members."}
];
const dailyHubItems=[
  {word:"旅",meaning:"journey",kanji:"道",phrase:"今日は一緒に勉強しよう。",quest:"Learn one phrase",fortune:"Omikuji: small luck"},
  {word:"仲間",meaning:"companion",kanji:"学",phrase:"また明日会いましょう。",quest:"Answer one kana card",fortune:"Omikuji: good wind"},
  {word:"文化",meaning:"culture",kanji:"会",phrase:"日本語を少し話せます。",quest:"Complete one JLPT card",fortune:"Omikuji: lucky lantern"},
  {word:"桜",meaning:"sakura",kanji:"花",phrase:"ゆっくり進みましょう。",quest:"Save your passport name",fortune:"Omikuji: bright path"}
];
const seasonEvents=[
  {name:"Tanabata Festival",month:6,day:7},
  {name:"Summer Matsuri",month:7,day:15},
  {name:"Autumn Leaves Festival",month:10,day:20},
  {name:"Winter Shrine Visit",month:0,day:1},
  {name:"Cherry Blossom Season",month:2,day:25}
];
const levelBadgeItems=[
  {level:5,name:"Sakura Petal",img:"assets/badge-level-5-small.png"},
  {level:10,name:"Scholar Scroll",img:"assets/badge-level-10-small.png"},
  {level:20,name:"Shrine Gate",img:"assets/badge-level-20-small.png"},
  {level:30,name:"Lantern Motion",img:"assets/badge-level-30-small.png"},
  {level:40,name:"Festival Fan",img:"assets/badge-level-40-small.png"},
  {level:50,name:"Fuji Legend",img:"assets/badge-level-50-small.png"},
  {level:60,name:"Sunrise Vanguard",img:"assets/badge-level-60.png"},
  {level:90,name:"Golden Legend",img:"assets/badge-level-90.png"}
];
window.addEventListener("load",()=>{setTimeout(()=>preloader.classList.add("hidden"),520);loadJlptKanjiFile();createMapPins();loadTrainer();animateCounters();initMilestoneBar();fetchDiscordMemberCount();if(localStorage.getItem("tasewakaiGuideHidden")!=="true")setTimeout(openGuide,1180);setTimeout(showTrainerCatOnce,2400)});
function economyHash(p=progress){const raw=[p.name,p.points,p.exp,p.level,p.yen,p.streak,p.lastNameChange,ECON_SECRET].join("|");let h=0;for(let i=0;i<raw.length;i++)h=((h<<5)-h+raw.charCodeAt(i))|0;return String(h)}
function verifyEconomy(){if(!progress.economyHash){progress.economyHash=economyHash();saveProgress();return true}return progress.economyHash===economyHash()}
function sealEconomy(){progress.economyHash=economyHash()}
function openGuide(){guideTransition.classList.add("active");setTimeout(()=>{guideTransition.classList.remove("active");guideModal.classList.add("active")},780)}function closeGuide(){guideModal.classList.remove("active")}function hideGuideForever(){localStorage.setItem("tasewakaiGuideHidden","true");closeGuide()}function openSupport(){supportModal.classList.add("active")}function closeSupport(){supportModal.classList.remove("active")}
function openTool(tool){
  toolModal.classList.add("active");
  document.querySelectorAll(".tool-view").forEach(v=>v.classList.add("hidden"));
  if(tool==="trainer"){
    markLearningTried();
    document.getElementById("trainerTool").classList.remove("hidden");
    setTrainerMode("kana");
  }
  if(tool==="n5"){
    markLearningTried();
    document.getElementById("n5Tool").classList.remove("hidden");
    mountN5Quiz();
    setTrainerMode("n5");
    loadJlptKanjiFile().then(()=>{if(!document.getElementById("n5Tool")?.classList.contains("hidden")&&isJlptMode())nextQuestion()});
  }
  if(tool==="phrases"){
    document.getElementById("phrasesTool").classList.remove("hidden");
    initDailyPhrases();
  }
  if(tool==="map"){
    document.getElementById("mapTool").classList.remove("hidden");
    renderBetaGate();
  }
}
function closeTool(){toolModal.classList.remove("active")}
[guideModal,supportModal,storeModal,toolModal,document.getElementById("betaCrewModal")].forEach(m=>m?.addEventListener("click",e=>{if(e.target===m)m.classList.remove("active")}));document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeGuide();closeSupport();closeStore();closeTool();closeRegionScreen();closeBetaCrew()}});
function triggerTeamBarrier(card){if(!card)return;card.classList.remove("barrier-active");void card.offsetWidth;card.classList.add("barrier-active");setTimeout(()=>card.classList.remove("barrier-active"),950)}
function triggerSpotlightBurst(card){if(!card)return;card.classList.remove("spotlight-burst");void card.offsetWidth;card.classList.add("spotlight-burst");setTimeout(()=>card.classList.remove("spotlight-burst"),850)}
function triggerFeatureBurst(event,card){if(!card)return;card.classList.remove("feature-clicked");void card.offsetWidth;card.classList.add("feature-clicked");const rect=card.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top,colors=["#ff3f91","#ffd27a","#42ffa7","#57b7ff","#9a66ff","#ffffff"];for(let i=0;i<18;i++){const spark=document.createElement("i");spark.className="feature-spark";const angle=(Math.PI*2/18)*i+Math.random()*0.34,dist=42+Math.random()*54;spark.style.left=x+"px";spark.style.top=y+"px";spark.style.setProperty("--spark-x",Math.cos(angle)*dist+"px");spark.style.setProperty("--spark-y",Math.sin(angle)*dist+"px");spark.style.setProperty("--spark-color",colors[i%colors.length]);spark.style.animationDelay=(Math.random()*0.08)+"s";card.appendChild(spark);setTimeout(()=>spark.remove(),760)}setTimeout(()=>card.classList.remove("feature-clicked"),520)}
function showTrainerCatOnce(){if(localStorage.getItem("tasewakaiTrainerCatSeen")==="true"||progress.triedLearning)return;if(guideModal?.classList.contains("active")){setTimeout(showTrainerCatOnce,2200);return}const helper=document.getElementById("trainerCatHelper"),text=document.getElementById("catPromptText");if(!helper||!text)return;catTrainerPick=Math.random()>.5?"n5":"trainer";text.textContent=catTrainerPick==="n5"?"Try one JLPT kanji card?":"Try one kana question?";helper.classList.remove("hidden")}
function dismissTrainerCat(){localStorage.setItem("tasewakaiTrainerCatSeen","true");document.getElementById("trainerCatHelper")?.classList.add("hidden")}
function openCatTrainerPick(){dismissTrainerCat();openTool(catTrainerPick)}
function copyDiscordTag(event,tag,button){event.stopPropagation();const done=()=>{button.classList.add("copied");button.textContent="Copied: "+tag;setTimeout(()=>{button.classList.remove("copied");button.textContent="Discord: "+tag},1300)};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(tag).then(done).catch(done)}else done()}
function openBetaCrew(){document.getElementById("betaCrewModal")?.classList.add("active")}
function closeBetaCrew(){document.getElementById("betaCrewModal")?.classList.remove("active")}
function createSakura(){const petal=document.createElement("img");const imgs=["assets/icon-fan.png","assets/icon-fishcake.png","assets/icon-onsen.png"];petal.className="sakura";petal.src=imgs[Math.floor(Math.random()*imgs.length)];petal.style.left=Math.random()*100+"vw";petal.style.width=Math.random()*14+20+"px";petal.style.animationDuration=Math.random()*5+7+"s";petal.style.opacity=Math.random()*.38+.18;sakuraLayer.appendChild(petal);setTimeout(()=>petal.remove(),13000)}setInterval(createSakura,760);
let lastCursorPetal=0;document.addEventListener("mousemove",e=>{if(window.innerWidth<=820)return;const now=Date.now();if(now-lastCursorPetal<60)return;lastCursorPetal=now;const p=document.createElement("div");p.className="cursor-petal";p.textContent=Math.random()>.5?"\u685c":"\u273f";p.style.left=e.clientX+(Math.random()*16-8)+"px";p.style.top=e.clientY+(Math.random()*16-8)+"px";p.style.fontSize=Math.random()*8+10+"px";cursorSakuraLayer.appendChild(p);setTimeout(()=>p.remove(),900)});
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")})},{threshold:.13});document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
function animateCounters(){const token=++counterAnimationToken;document.querySelectorAll(".counter").forEach(counter=>{const target=Number(counter.dataset.target),start=performance.now(),duration=1250;function update(now){if(token!==counterAnimationToken)return;const p=Math.min((now-start)/duration,1),e=1-Math.pow(1-p,3);counter.textContent=Math.floor(e*target).toLocaleString();if(p<1)requestAnimationFrame(update);else counter.textContent=target.toLocaleString()}requestAnimationFrame(update)})}
function normalizePhrase(item){if(!item)return null;return {...item,difficulty:item.difficulty||guessPhraseDifficulty(item),tone:item.tone||"Casual",category:item.category||"Daily Life"}}
function guessPhraseDifficulty(item){const text=(item?.japanese||"")+String(item?.romaji||"");if(/[予約質問電車切符先生]/.test(text))return"N4";if(/[参加通話予定宿題]/.test(text))return"N5";return"N5"}
function phraseKey(item){return `${item?.japanese||""}|${item?.english||""}`}
function todayKey(){return new Date().toISOString().slice(0,10)}
function savePhraseProgress(){localStorage.setItem("tasewakaiPhraseProgress",JSON.stringify(phraseProgress))}
function setPhraseStatus(text,type="ready"){const el=document.getElementById("phraseApiStatus");if(!el)return;el.textContent=text;el.className="phrase-api-pill phrase-api-status "+type}
async function initDailyPhrases(){if(!phraseProgress.learned)phraseProgress.learned=[];if(!phraseProgress.favorites)phraseProgress.favorites=[];if(!phraseProgress.daily)phraseProgress.daily={date:todayKey(),count:0,yen:0,xp:0};if(phraseProgress.daily.date!==todayKey())phraseProgress.daily={date:todayKey(),count:0,yen:0,xp:0};if(!phrasesLoaded){phrasesLoaded=true;await loadLocalPhraseFile();loadCachedApiPhrases();fetchTatoebaPhrases(false)}renderPhraseCategories();renderDailyPhrases();updatePhraseProgress()}
async function loadLocalPhraseFile(){try{const response=await fetch("data/daily-phrases.json",{cache:"no-store"});if(!response.ok)throw new Error("local phrase file unavailable");const data=await response.json();if(Array.isArray(data)&&data.length)dailyPhrases=mergePhrases([...LOCAL_PHRASES,...data]);setPhraseStatus(`${dailyPhrases.length} local phrases loaded.`,"success")}catch(error){dailyPhrases=[...LOCAL_PHRASES];setPhraseStatus("Local fallback phrases loaded.","warning")}}
function loadCachedApiPhrases(){try{const cached=JSON.parse(localStorage.getItem("tasewakaiTatoebaPhrases")||"null");if(!cached||Date.now()-cached.time>1000*60*60*24)return;if(Array.isArray(cached.items)&&cached.items.length){dailyPhrases=mergePhrases([...dailyPhrases,...cached.items]);setPhraseStatus("Cached API examples loaded.","success")}}catch(error){}}
function mergePhrases(items){const seen=new Set();return items.map(normalizePhrase).filter(item=>{if(!item||!item.japanese)return false;const key=phraseKey(item);if(seen.has(key))return false;seen.add(key);return true})}
async function fetchTatoebaPhrases(force=false){let cache=null;try{cache=JSON.parse(localStorage.getItem("tasewakaiTatoebaPhrases")||"null")}catch(error){localStorage.removeItem("tasewakaiTatoebaPhrases")}if(!force&&cache&&Date.now()-cache.time<1000*60*60*24)return;setPhraseStatus("Loading Tatoeba API examples...","loading");try{const categories=Object.keys(phraseCategoryKeywords),results=[];for(const category of categories){const params=new URLSearchParams({lang:"jpn",q:phraseCategoryKeywords[category],sort:"relevance",limit:"8",showtrans:"matching",is_unapproved:"no"});params.set("trans:lang","eng");const url=`https://api.tatoeba.org/v1/sentences?${params.toString()}`;const response=await fetch(url,{cache:"no-store"});if(!response.ok)throw new Error("Tatoeba unavailable");const data=await response.json();const sentences=(data.data||data.results||[]).slice(0,4);sentences.forEach(entry=>{const japanese=entry.text||entry.sentence||"";const translations=Array.isArray(entry.translations)?entry.translations.flat(3):[];const english=translations.find(t=>t&&t.lang==="eng"&&t.text)?.text||"Example sentence from Tatoeba.";if(japanese)results.push({japanese,romaji:"API example",english,category,tone:"Example"})})}if(results.length){localStorage.setItem("tasewakaiTatoebaPhrases",JSON.stringify({time:Date.now(),items:results}));dailyPhrases=mergePhrases([...dailyPhrases,...results]);setPhraseStatus(`${results.length} Tatoeba examples added.`,"success");renderPhraseCategories();renderDailyPhrases()}else setPhraseStatus("API had no extra examples. Local phrases stay active.","warning")}catch(error){setPhraseStatus("Tatoeba unavailable. Local phrases stay active.","warning")}}
function phrasePool(){return activePhraseCategory==="All"?dailyPhrases:dailyPhrases.filter(item=>item.category===activePhraseCategory)}
function renderPhraseCategories(){const wrap=document.getElementById("phraseCategoryList");if(!wrap)return;const categories=["All",...new Set(dailyPhrases.map(item=>item.category))];wrap.innerHTML=categories.map(category=>{const count=category==="All"?dailyPhrases.length:dailyPhrases.filter(item=>item.category===category).length;return `<button class="${category===activePhraseCategory?"active":""}" onclick="setPhraseCategory('${category.replace(/'/g,"\\'")}')"><span>${phraseCategoryIcons[category]||"✦"}</span>${category} <small>${count}</small></button>`}).join("")}
function setPhraseCategory(category){activePhraseCategory=category;selectedPhraseIndex=0;renderPhraseCategories();renderDailyPhrases()}
function renderDailyPhrases(){const pool=phrasePool();if(!pool.length)return;selectedPhraseIndex=Math.min(selectedPhraseIndex,pool.length-1);const phrase=pool[selectedPhraseIndex];document.getElementById("phraseJapanese").textContent=phrase.japanese;document.getElementById("phraseRomaji").textContent=phrase.romaji||"Romaji unavailable";document.getElementById("phraseEnglish").textContent=phrase.english||"Meaning unavailable";document.querySelector(".phrase-category-badge").textContent=`${phraseCategoryIcons[phrase.category]||"✦"} ${phrase.category}`;document.querySelector(".phrase-tone-badge").textContent=phrase.tone;document.querySelector(".phrase-difficulty-badge").textContent=phrase.difficulty||"N5";const fav=document.getElementById("phraseFavoriteBtn"),key=phraseKey(phrase);if(fav){fav.textContent=(phraseProgress.favorites||[]).includes(key)?"Favorited":"Favorite";fav.classList.toggle("active",(phraseProgress.favorites||[]).includes(key))}const grid=document.getElementById("phraseGrid");if(grid)grid.innerHTML=pool.slice(0,18).map((item,index)=>{const learned=(phraseProgress.learned||[]).includes(phraseKey(item));return `<button class="phrase-mini-card ${index===selectedPhraseIndex?"active":""} ${learned?"learned":""}" onclick="selectDailyPhrase(${index})"><span>${phraseCategoryIcons[item.category]||"✦"} ${item.category} · ${item.difficulty||"N5"}</span><strong>${item.japanese}</strong><small>${item.english||""}</small><em>${learned?"Learned":"+YEN +EXP"}</em></button>`}).join("");updatePhraseProgress()}
function selectDailyPhrase(index){selectedPhraseIndex=index;renderDailyPhrases()}
function randomDailyPhrase(){const pool=phrasePool();if(!pool.length)return;selectedPhraseIndex=Math.floor(Math.random()*pool.length);renderDailyPhrases()}
async function copyDailyPhrase(){const pool=phrasePool(),phrase=pool[selectedPhraseIndex];if(!phrase)return;const text=`${phrase.japanese}\n${phrase.romaji||""}\n${phrase.english||""}`;try{await navigator.clipboard.writeText(text);setPhraseStatus("Phrase copied.","success")}catch(error){setPhraseStatus("Copy unavailable in this browser.","warning")}}
function toggleFavoritePhrase(){const phrase=phrasePool()[selectedPhraseIndex];if(!phrase)return;const key=phraseKey(phrase);phraseProgress.favorites=phraseProgress.favorites||[];phraseProgress.favorites=phraseProgress.favorites.includes(key)?phraseProgress.favorites.filter(item=>item!==key):[key,...phraseProgress.favorites];savePhraseProgress();renderDailyPhrases();setPhraseStatus(phraseProgress.favorites.includes(key)?"Phrase favorited.":"Favorite removed.","success")}
function speakDailyPhrase(){const phrase=phrasePool()[selectedPhraseIndex];if(!phrase||!window.speechSynthesis){setPhraseStatus("Audio unavailable in this browser.","warning");return}speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(phrase.japanese);utterance.lang="ja-JP";utterance.rate=.88;utterance.pitch=1.02;speechSynthesis.speak(utterance);setPhraseStatus("Playing Japanese pronunciation.","success")}
function markCurrentPhraseLearned(){const phrase=phrasePool()[selectedPhraseIndex];if(!phrase)return;if(!phraseProgress.learned)phraseProgress.learned=[];if(!phraseProgress.daily||phraseProgress.daily.date!==todayKey())phraseProgress.daily={date:todayKey(),count:0,yen:0,xp:0};const key=phraseKey(phrase);if(phraseProgress.learned.includes(key)){setPhraseStatus("Already learned. Pick another phrase for rewards.","warning");return}phraseProgress.learned.unshift(key);phraseProgress.daily.count=Math.min(5,(phraseProgress.daily.count||0)+1);const yenGain=phrase.difficulty==="N4"?8:6,expGain=phrase.difficulty==="N4"?12:10;phraseProgress.daily.yen=(phraseProgress.daily.yen||0)+yenGain;phraseProgress.daily.xp=(phraseProgress.daily.xp||0)+expGain;phraseProgress.streak=Number(phraseProgress.streak||1);phraseProgress.lastLearnedDate=phraseProgress.lastLearnedDate||todayKey();if(phraseProgress.lastLearnedDate!==todayKey()){phraseProgress.streak+=1;phraseProgress.lastLearnedDate=todayKey()}progress.triedLearning=true;addPassportActivity("vocab",1);addPassportActivity("lesson",1);progress.yen=Number(progress.yen||0)+yenGain;progress.points=Number(progress.points||0)+expGain;progress.exp=Number(progress.exp||0)+expGain;progress.level=Number(progress.level||1);let next=progress.level*100;while(progress.exp>=next){progress.exp-=next;progress.level++;next=progress.level*100;progress.yen+=25}saveProgress();savePhraseProgress();updateLeaderboard();updateTrainerUI();pulseHudElement("hudYen");pulseHudElement("hudExpFill");spawnPhraseReward(yenGain,expGain);renderDailyPhrases();setPhraseStatus(`Phrase learned! +${yenGain} YEN +${expGain} XP`,"success")}
function updatePhraseProgress(){const daily=phraseProgress.daily||{count:0,yen:0,xp:0},count=Math.min(daily.count||0,5),next=Number(progress.level||1)*100,exp=Number(progress.exp||0),fill=document.getElementById("phraseProgressFill");if(document.getElementById("phraseMainLevel"))document.getElementById("phraseMainLevel").textContent=`Lv. ${progress.level||1}`;if(document.getElementById("phraseProgressCount"))document.getElementById("phraseProgressCount").textContent=`Daily phrases ${count}/5 · today +${daily.yen||0} YEN +${daily.xp||0} XP`;if(fill)fill.style.width=Math.min(exp/next*100,100)+"%";if(document.getElementById("phraseRewardYen"))document.getElementById("phraseRewardYen").textContent=`${progress.yen||0} YEN`;if(document.getElementById("phraseRewardXp"))document.getElementById("phraseRewardXp").textContent=`EXP ${exp}/${next}`;if(document.getElementById("phraseLearnedCount"))document.getElementById("phraseLearnedCount").textContent=(phraseProgress.learned||[]).length;if(document.getElementById("phraseStreakCount"))document.getElementById("phraseStreakCount").textContent=phraseProgress.streak||1;const achievements=document.getElementById("phraseAchievements");if(achievements){const learned=(phraseProgress.learned||[]).length;achievements.innerHTML=[`<span class="${learned>=1?"unlocked":""}">🌸 First Phrase</span>`,`<span class="${(phraseProgress.streak||1)>=7?"unlocked":""}">🏮 7-Day Streak</span>`,`<span class="${learned>=10?"unlocked":""}">🗻 N5 Explorer</span>`].join("")}}
function spawnPhraseReward(yen,exp){const card=document.getElementById("phraseCardMain");if(!card)return;card.classList.remove("phrase-reward-pop");void card.offsetWidth;card.classList.add("phrase-reward-pop");const burst=document.createElement("div");burst.className="phrase-reward-burst";burst.innerHTML=`<strong>+${yen} YEN</strong><span>+${exp} XP</span>`;card.appendChild(burst);for(let i=0;i<12;i++){const petal=document.createElement("i");petal.style.left=(45+Math.random()*20)+"%";petal.style.setProperty("--spark-x",(Math.random()*120-60)+"px");petal.style.setProperty("--spark-y",(-30-Math.random()*85)+"px");burst.appendChild(petal)}setTimeout(()=>burst.remove(),1200)}
function statusMarkup(type,text){const icon=statusIcons[type]||statusIcons.ready;return `<img class="status-inline-icon" src="${icon}" alt="" /> ${text}`}
function setHudSaveStatus(text,type="ready"){const status=document.getElementById("hudSaveStatus");if(status)status.innerHTML=statusMarkup(type,text)}
function setAccessMessage(text,type="construction",className=""){const message=document.getElementById("betaAccessMessage");if(!message)return;message.className=("access-message "+className).trim();message.innerHTML=statusMarkup(type,text)}
function initMilestoneBar(){const panel=document.querySelector(".milestone-panel");if(!panel)return;updateMemberCount(Number(panel.dataset.current||0),false)}
function updateMemberCount(current,live=false){const panel=document.querySelector(".milestone-panel"),memberCounter=document.getElementById("memberCounter");if(!panel)return;if(live)counterAnimationToken++;const goal=Number(panel.dataset.goal||1000),fill=document.getElementById("milestoneFill"),text=document.getElementById("milestoneText"),note=document.getElementById("milestoneNote"),pct=Math.min(current/goal*100,100);panel.dataset.current=String(current);if(memberCounter){memberCounter.dataset.target=String(current);memberCounter.textContent=current.toLocaleString()}if(fill)requestAnimationFrame(()=>fill.style.width=pct+"%");if(text)text.textContent=`${current.toLocaleString()} / ${goal.toLocaleString()}`;if(note)note.textContent=current>=goal?"Milestone reached. Party mode unlocked.":live?"Live Discord count loaded. Road to 1000 is moving.":"Update: live Discord member meter added.";if(current>=goal&&localStorage.getItem("tasewakaiMilestone1000Celebrated")!=="true"){localStorage.setItem("tasewakaiMilestone1000Celebrated","true");triggerMilestoneParty()}}
function setDiscordConnectionStatus(state,text){const status=document.getElementById("discordLiveStatus");if(!status)return;status.className=`discord-live-status ${state}`;status.innerHTML=`<span></span> ${text}`}
async function fetchDiscordMemberCount(){const note=document.getElementById("milestoneNote");try{setDiscordConnectionStatus("loading","Discord connection checking...");if(note)note.textContent="Loading live Discord member count...";const response=await fetch(`https://discord.com/api/v10/invites/${DISCORD_INVITE_CODE}?with_counts=true`,{cache:"no-store"});if(!response.ok)throw new Error("Discord count unavailable");const data=await response.json(),count=Number(data.approximate_member_count||0);if(count>0){updateMemberCount(count,true);setDiscordConnectionStatus("connected","Discord connected - live member count")}else throw new Error("Discord count missing")}catch(error){setDiscordConnectionStatus("error","Discord unavailable - preview count shown");if(note)note.textContent="Live Discord count unavailable, showing saved preview count."}}
function triggerMilestoneParty(){const panel=document.querySelector(".milestone-panel");if(panel){panel.classList.add("milestone-complete");setTimeout(()=>panel.classList.remove("milestone-complete"),2400)}for(let i=0;i<42;i++){const spark=document.createElement("div");spark.className="milestone-firework";spark.style.left=(12+Math.random()*76)+"vw";spark.style.top=(18+Math.random()*44)+"vh";spark.style.setProperty("--spark-x",(Math.random()*170-85)+"px");spark.style.setProperty("--spark-y",(Math.random()*150-75)+"px");spark.style.setProperty("--spark-color",["#ff3f91","#ffd27a","#42ffa7","#7b45ff","#ffffff"][Math.floor(Math.random()*5)]);spark.style.animationDelay=(Math.random()*0.55)+"s";document.body.appendChild(spark);setTimeout(()=>spark.remove(),1800)}}
function createMapPins(){const layer=document.getElementById("mapPinLayer");if(layer){layer.innerHTML="";prefPins.forEach(pref=>{const btn=document.createElement("button");btn.className="pref-pin";btn.style.left=pref.x+"%";btn.style.top=pref.y+"%";btn.innerHTML=`<span>${pref.jp}</span>`;btn.title=`${pref.romaji} / ${pref.jp}`;btn.onclick=()=>selectPref(pref,btn);layer.appendChild(btn)})}createCityPins();renderRegionPieces()}
function createCityPins(){const layer=document.getElementById("mapCityLayer");if(!layer)return;layer.innerHTML="";popularCityPins.forEach(city=>{const btn=document.createElement("button");btn.className="city-pin";btn.style.left=city.x+"%";btn.style.top=city.y+"%";btn.innerHTML=`<span>${city.name}</span>`;btn.title=`${city.name} / ${city.jp}`;btn.onclick=()=>selectCity(city,btn);layer.appendChild(btn)})}
function regionLabel(region){return region[regionScriptMode]||region.romaji}
function renderRegionPieces(){selectRegion(activeRegionIndex,false)}
function setRegionScript(mode){regionScriptMode=["romaji","kanji","hiragana"].includes(mode)?mode:"romaji";document.querySelectorAll(".map-script-toggle").forEach(btn=>btn.classList.toggle("active",btn.dataset.script===regionScriptMode));updateRegionPanel()}
function playRegionTransitionHook(region){window.dispatchEvent(new CustomEvent("tasewakai:region-change",{detail:{region:region.id,index:activeRegionIndex}}))}
function selectRegion(index,animate=true){activeRegionIndex=(index+japanRegions.length)%japanRegions.length;const stage=document.getElementById("regionStage"),art=document.getElementById("regionPieceArt"),region=japanRegions[activeRegionIndex];if(stage&&region){stage.className=`region-stage ${region.id}`}if(art&&animate){art.classList.remove("region-changing");void art.offsetWidth;art.classList.add("region-changing");setTimeout(()=>art.classList.remove("region-changing"),780)}updateRegionPanel();if(animate)playRegionTransitionHook(region)}
function updateRegionPanel(){const region=japanRegions[activeRegionIndex];if(!region)return;const selectedType=document.getElementById("mapSelectedType"),name=document.getElementById("regionName"),native=document.getElementById("regionNative"),summary=document.getElementById("regionSummary"),prefectures=document.getElementById("regionPrefectures"),stageName=document.getElementById("regionStageName"),stageLabel=document.getElementById("regionStageLabel"),screenTitle=document.getElementById("regionScreenTitle"),screenNative=document.getElementById("regionScreenNative"),screenHistory=document.getElementById("regionScreenHistory"),pieceImage=document.getElementById("regionPieceImage"),writingMode=document.getElementById("regionWritingMode"),rank=document.getElementById("regionCollectibleRank"),screenCulture=document.getElementById("regionScreenCulture"),screenFoods=document.getElementById("regionScreenFoods"),screenLandmarks=document.getElementById("regionScreenLandmarks"),screenFacts=document.getElementById("regionScreenFacts"),screenImportant=document.getElementById("regionScreenImportant");const label=regionLabel(region);if(selectedType)selectedType.textContent="Selected region";if(name)name.textContent=label;if(native)native.textContent=region.kanji;if(summary)summary.textContent=region.summary;if(prefectures)prefectures.textContent=`Prefectures: ${region.prefectures}`;if(stageName)stageName.textContent=label;if(stageLabel)stageLabel.textContent=`${activeRegionIndex+1} / ${japanRegions.length}`;if(pieceImage){pieceImage.src=region.image;pieceImage.alt=`${region.romaji} region fragment`}if(writingMode)writingMode.textContent=regionScriptMode.charAt(0).toUpperCase()+regionScriptMode.slice(1);if(rank)rank.textContent=`Fragment ${activeRegionIndex+1}`;if(screenTitle)screenTitle.textContent=label;if(screenNative)screenNative.textContent=`${region.kanji} / ${region.hiragana}`;if(screenHistory)screenHistory.textContent=region.history;if(screenCulture)screenCulture.textContent=region.culture;if(screenFoods)screenFoods.textContent=region.foods;if(screenLandmarks)screenLandmarks.textContent=region.landmarks;if(screenFacts)screenFacts.textContent=region.facts;if(screenImportant)screenImportant.textContent=region.important}
function nextRegion(){selectRegion(activeRegionIndex+1)}
function previousRegion(){selectRegion(activeRegionIndex-1)}
function openRegionScreen(){updateRegionPanel();document.getElementById("regionScreen")?.classList.add("active")}
function closeRegionScreen(){document.getElementById("regionScreen")?.classList.remove("active")}
function getPrefExplanation(pref){return prefExplanations[pref.romaji]||`${pref.romaji} prefecture. Basic popular cities: ${pref.cities}.`}
function updateMapPanel(type,name,jp,description,cities){const selectedType=document.getElementById("mapSelectedType"),romaji=document.getElementById("prefRomaji"),japanese=document.getElementById("prefJapanese"),explanation=document.getElementById("prefExplanation"),cityText=document.getElementById("prefCities");if(selectedType)selectedType.textContent=type;if(romaji)romaji.textContent=name;if(japanese)japanese.textContent=jp;if(explanation)explanation.textContent=description;if(cityText)cityText.textContent=cities}
function selectPref(pref,btn){document.querySelectorAll(".pref-pin").forEach(pin=>pin.classList.remove("active"));document.querySelectorAll(".city-pin").forEach(pin=>pin.classList.remove("active"));if(btn)btn.classList.add("active");updateMapPanel("Selected prefecture",pref.romaji,pref.jp,getPrefExplanation(pref),`Basic popular cities: ${pref.cities}`)}
function selectCity(city,btn){document.querySelectorAll(".pref-pin,.city-pin").forEach(pin=>pin.classList.remove("active"));if(btn)btn.classList.add("active");const pref=prefPins.find(item=>item.romaji===city.pref);updateMapPanel("Selected popular city",city.name,city.jp,city.note,`Prefecture: ${city.pref}${pref?` / ${pref.jp}`:""}`)}
function syncMapLayerControls(){const card=document.querySelector(".map-click-card"),prefToggle=document.getElementById("prefectureToggle"),cityToggle=document.getElementById("cityToggle"),prefVisible=mapLayerMode==="prefectures",cityVisible=mapLayerMode==="cities";if(card){card.classList.toggle("map-prefectures-hidden",!prefVisible);card.classList.toggle("map-cities-hidden",!cityVisible)}if(prefToggle)prefToggle.classList.toggle("active",prefVisible);if(cityToggle)cityToggle.classList.toggle("active",cityVisible)}
function setMapLayerMode(mode){mapLayerMode=mode==="cities"?"cities":"prefectures";syncMapLayerControls();if(mapLayerMode==="cities"){const cityButtons=Array.from(document.querySelectorAll(".city-pin"));const tokyoIndex=popularCityPins.findIndex(city=>city.name==="Tokyo");selectCity(popularCityPins[tokyoIndex]||popularCityPins[0],cityButtons[tokyoIndex]||cityButtons[0]);return}const prefButtons=Array.from(document.querySelectorAll(".pref-pin"));const tokyoIndex=prefPins.findIndex(pref=>pref.romaji==="Tokyo");selectPref(prefPins[tokyoIndex]||prefPins[0],prefButtons[tokyoIndex]||prefButtons[0])}
function togglePrefectureLayer(){setMapLayerMode("prefectures")}
function toggleCityLayer(){setMapLayerMode("cities")}
function toggleMapLabels(){setMapLayerMode("prefectures")}function randomPrefecture(){setMapLayerMode("prefectures");const i=Math.floor(Math.random()*prefPins.length);selectPref(prefPins[i],Array.from(document.querySelectorAll(".pref-pin"))[i])}
function loadTrainer(){const input=document.getElementById("trainerName"),hudInput=document.getElementById("hudNameInput");if(input)input.value=progress.name==="Guest Learner"?"":progress.name;if(hudInput)hudInput.value=progress.name==="Guest Learner"?"":progress.name;const ok=verifyEconomy();updateTrainerUI(ok?"":"Economy integrity warning: local data was edited.");updateLeaderboard();renderNameLogs();updatePlayerHud()}
function canChangeName(){if(!progress.lastNameChange)return true;return Date.now()-progress.lastNameChange>=7*24*60*60*1000}function timeUntilNameChange(){const left=7*24*60*60*1000-(Date.now()-progress.lastNameChange);return Math.max(Math.ceil(left/(24*60*60*1000)),1)}
function saveTrainerName(){const input=document.getElementById("trainerName"),newName=input.value.trim()||"Guest Learner",oldName=progress.name||"Guest Learner";if(newName===oldName){updateLeaderboard(true);updateTrainerUI("This name is already saved.");return}if(!canChangeName()){updateTrainerUI(`Name locked. Try again in about ${timeUntilNameChange()} day(s).`);input.value=oldName==="Guest Learner"?"":oldName;return}const bonusAwarded=!progress.nameBonusClaimed&&newName!=="Guest Learner";progress.name=newName;progress.lastNameChange=Date.now();if(bonusAwarded){progress.nameBonusClaimed=true;progress.yen+=35;progress.points+=20;progress.exp+=20}progress.nameLogs.push({from:oldName,to:newName,date:new Date().toLocaleString()});leaderboard=leaderboard.map(item=>{if(item.name===oldName)item.name=newName;return item});saveProgress();localStorage.setItem("tasewakaiTrainerLeaderboard",JSON.stringify(leaderboard));updateLeaderboard(true);updateTrainerUI(bonusAwarded?"Name saved. Starter bonus added: +35 YEN.":"Name saved. You can change it again in 7 days.");renderNameLogs();updatePlayerHud()}
function saveHudName(){const hudInput=document.getElementById("hudNameInput"),trainerInput=document.getElementById("trainerName"),newName=(hudInput?.value.trim()||"Guest Learner"),oldName=progress.name||"Guest Learner";if(trainerInput&&hudInput)trainerInput.value=hudInput.value;setHudSaveStatus("Saving profile...","ready");if(newName!==oldName&&!canChangeName()){saveTrainerName();setHudSaveStatus(`Name locked. Try again in about ${timeUntilNameChange()} day(s).`,"warning");return}saveTrainerName();setHudSaveStatus("Saved. Progress, YEN, inventory, and leaderboard are remembered here.","success")}
function saveProgress(){normalizeProgressProfile();sealEconomy();localStorage.setItem("tasewakaiTrainerProgress",JSON.stringify(progress));setHudSaveStatus("Auto-saved progress on this browser.","success")}
function updateTrainerUI(message=""){const nameDisplay=document.getElementById("trainerNameDisplay");if(!nameDisplay)return;document.getElementById("trainerNameDisplay").textContent=progress.name;document.getElementById("trainerPoints").textContent=progress.points;document.getElementById("trainerLevel").textContent=progress.level;document.getElementById("trainerExp").textContent=progress.exp;document.getElementById("trainerYen").textContent=progress.yen;document.getElementById("trainerStreak").textContent=progress.streak;const next=progress.level*100;document.getElementById("trainerNextExp").textContent=next;document.getElementById("expFill").style.width=Math.min(progress.exp/next*100,100)+"%";const lockInfo=document.getElementById("nameLockInfo");if(lockInfo){if(message)lockInfo.textContent=message;else if(!canChangeName())lockInfo.textContent=`Name locked. Change available in about ${timeUntilNameChange()} day(s).`;else lockInfo.textContent="Name can be changed once per week."}const sec=document.getElementById("securityStatus");if(sec){const ok=verifyEconomy();sec.className="security-note "+(ok?"ok":"warn");sec.innerHTML=ok?statusMarkup("success","Economy integrity: OK (local preview, not server-secure)."):statusMarkup("warning","Economy integrity: warning - local data may be edited.")}updatePlayerHud()}
function hasLearningProgress(){return !!(progress.triedLearning||progress.points>0||progress.yen>0||progress.exp>0||progress.level>1)}
function markLearningTried(){if(!progress.triedLearning){progress.triedLearning=true;addPassportActivity("lesson",0);saveProgress()}updatePlayerHud()}
function getJourneyRank(){return memberJourneyRanks.slice().reverse().find(rank=>progress.level>=rank.level)||memberJourneyRanks[0]}
function getHudRankTitle(){return getJourneyRank().title}
function getCurrentLevelBadge(){return levelBadgeItems.slice().reverse().find(item=>progress.level>=item.level)||levelBadgeItems[0]}
function getHudBadgeAsset(){return getCurrentLevelBadge().img}
function hudIcon(src,label="",className="hud-mini-img"){return `<img class="${className}" src="${src}" alt="${label}" />`}
function pulseHudElement(id){const el=document.getElementById(id);if(!el)return;el.classList.remove("hud-pop");void el.offsetWidth;el.classList.add("hud-pop");setTimeout(()=>el.classList.remove("hud-pop"),620)}
function normalizeProgressProfile(){progress.stats??={};progress.collections??={};progress.stats.kanji??=0;progress.stats.vocab??=0;progress.stats.lessons??=0;progress.stats.daysActive??=1;progress.stats.events??=0;progress.stats.contributions??=0;progress.collections.templeStamps??=0;progress.collections.sakuraPetals??=0;progress.collections.festivalItems??=0;progress.collections.shrineCharms??=0;progress.collections.seasonal??=0;if(progress.lastActiveDate!==todayKey()){progress.stats.daysActive++;progress.lastActiveDate=todayKey();progress.collections.sakuraPetals+=3}}
function addPassportActivity(type="lesson",amount=1){normalizeProgressProfile();if(type==="kanji")progress.stats.kanji+=amount;if(type==="vocab")progress.stats.vocab+=amount;if(type==="lesson")progress.stats.lessons+=amount;if(type==="event")progress.stats.events+=amount;if(type==="contribution")progress.stats.contributions+=amount;progress.collections.sakuraPetals+=Math.max(1,amount);if(progress.stats.lessons&&progress.stats.lessons%5===0)progress.collections.templeStamps++;if(progress.level>=10)progress.collections.shrineCharms=Math.max(progress.collections.shrineCharms,1);if(progress.level>=15)progress.collections.festivalItems=Math.max(progress.collections.festivalItems,1);if(progress.level>=20)progress.collections.seasonal=Math.max(progress.collections.seasonal,1)}
function nextSeasonEvent(){const now=new Date(),year=now.getFullYear();const events=seasonEvents.map(event=>{let date=new Date(year,event.month,event.day);if(date<now)date=new Date(year+1,event.month,event.day);return{...event,date}}).sort((a,b)=>a.date-b.date);return events[0]}
function renderPassportHub(){normalizeProgressProfile();const rank=getJourneyRank(),rankIndex=memberJourneyRanks.findIndex(item=>item.title===rank.title),rankPct=(rankIndex+1)/memberJourneyRanks.length*100,set=(id,text)=>{const el=document.getElementById(id);if(el)el.textContent=text};set("hudPassportNo",progress.passportNo);set("hudMemberSince",new Date(progress.memberSince).toLocaleDateString(undefined,{month:"short",day:"numeric",year:"numeric"}));set("hudJourneyProgress",`${rankIndex+1}/${memberJourneyRanks.length}`);const journeyIcon=document.getElementById("hudJourneyIcon");if(journeyIcon)journeyIcon.innerHTML=hudIcon(rank.icon,rank.title,"hud-rank-img");set("hudJourneyTitle",rank.title);set("hudJourneyJP",rank.jp);set("hudLessonsStat",progress.stats.lessons);set("hudKanjiStat",progress.stats.kanji);set("hudVocabStat",progress.stats.vocab);set("hudDaysStat",progress.stats.daysActive);const fill=document.getElementById("hudJourneyFill");if(fill)fill.style.width=rankPct+"%";const timeline=document.getElementById("hudJourneyTimeline");if(timeline)timeline.innerHTML=memberJourneyRanks.map((item,index)=>`<span class="${index<=rankIndex?"active":""}" title="${item.title}">${hudIcon(item.icon,item.title,"hud-timeline-img")}</span>`).join("");const daily=dailyHubItems[new Date().getDate()%dailyHubItems.length];set("hudDailyReward",`+${Math.min(20,5+(progress.streak||0))} YEN`);set("hudDailyWord",daily.word);set("hudDailyWordMeaning",daily.meaning);set("hudDailyQuest",daily.quest);set("hudDailyFortune",daily.fortune);const totalCollections=Object.values(progress.collections).reduce((sum,value)=>sum+Number(value||0),0);set("hudCollectionCount",String(totalCollections));const row=document.getElementById("hudCollectionRow");if(row)row.innerHTML=[["Temple Stamps",progress.collections.templeStamps,"assets/store-torii-premium.png"],["Sakura Petals",progress.collections.sakuraPetals,"assets/store-sakura-premium.png"],["Festival Items",progress.collections.festivalItems,"assets/store-red-lantern-premium.png"],["Shrine Charms",progress.collections.shrineCharms,"assets/store-omamori-premium.png"],["Seasonal",progress.collections.seasonal,"assets/store-koinobori-premium.png"]].map(([name,count,icon])=>`<span title="${name}">${hudIcon(icon,name)}<b>${count}</b></span>`).join("");const levelBadges=document.getElementById("hudLevelBadges");if(levelBadges)levelBadges.innerHTML=levelBadgeItems.map(item=>`<span class="${progress.level>=item.level?"unlocked":"locked"}" title="Lv.${item.level} ${item.name}"><img src="${item.img}" alt="" /><b>${item.level}</b></span>`).join("");const badges=document.getElementById("hudAchievementRow");if(badges)badges.innerHTML=[["assets/store-sakura-premium.png","First Lesson",progress.stats.lessons>=1],["assets/icon-daily-calendar.png","Scholar",progress.stats.lessons>=10],["assets/store-torii-premium.png","Trusted",progress.level>=10],["assets/badge-laurel-star.png","Helper",progress.stats.contributions>=3],["assets/badge-ribbon-medal.png","Legend",progress.level>=30]].map(([icon,name,on])=>`<span class="${on?"unlocked":""}" title="${name}">${hudIcon(icon,name)}</span>`).join("");const feed=document.getElementById("hudMiniFeed");if(feed)feed.innerHTML=[`${progress.name||"A learner"} earned ${progress.yen||0} YEN.`,`Journey rank: ${rank.title}.`,`${progress.stats.lessons||0} lessons completed.`].map(item=>`<p>${item}</p>`).join("");const event=nextSeasonEvent(),days=Math.max(0,Math.ceil((event.date-new Date())/86400000));set("hudSeasonEvent",event.name);set("hudEventCountdown",days===0?"Happening today":`${days} day${days===1?"":"s"} away`)}
function updatePlayerHud(){const hud=document.getElementById("playerHud");if(!hud)return;hud.classList.toggle("hidden",!hasLearningProgress());if(!hasLearningProgress())return;const next=progress.level*100,fill=Math.min(progress.exp/next*100,100),remaining=Math.max(next-progress.exp,0),hudInput=document.getElementById("hudNameInput"),passportLabel=document.querySelector(".player-hud-top small");if(passportLabel)passportLabel.textContent="Player Passport";document.getElementById("hudName").textContent=progress.name||"Guest Learner";if(hudInput&&document.activeElement!==hudInput)hudInput.value=progress.name==="Guest Learner"?"":progress.name;document.getElementById("hudLevel").textContent=progress.level;document.getElementById("hudYen").textContent=progress.yen;document.getElementById("hudExpFill").style.width=fill+"%";document.getElementById("hudExpText").textContent=`EXP ${progress.exp}/${next}`;const rankTitle=document.getElementById("hudRankTitle");if(rankTitle)rankTitle.textContent=getHudRankTitle();const nextExp=document.getElementById("hudNextExp");if(nextExp)nextExp.textContent=`${remaining} EXP to Lv.${progress.level+1}`;const tier=getHudSakuraTier(),sakuraText=document.getElementById("hudSakuraText");if(sakuraText)sakuraText.textContent=tier==="storm"?"Sakura storm":tier==="heavy"?"Sakura III":tier==="medium"?"Sakura II":"Sakura I";const market=getStoreMarket(),storeHint=document.getElementById("hudStoreHint"),affordable=getRotatingStoreItems().filter(item=>progress.yen>=getStorePrice(item,market)).length;if(storeHint)storeHint.textContent=affordable?`${affordable} market item${affordable>1?"s":""} ready`:"Earn YEN to shop";const badge=document.getElementById("hudBadge"),badgeText=document.getElementById("hudBadgeText"),achievement=document.getElementById("hudAchievement"),currentBadge=getCurrentLevelBadge(),nextBadge=levelBadgeItems.find(item=>progress.level<item.level);if(badge){badge.src=getHudBadgeAsset();badge.classList.toggle("hidden",progress.level<5)}if(achievement){achievement.classList.toggle("unlocked",progress.level>=5);achievement.classList.toggle("rare",progress.level>=20);achievement.classList.toggle("legend",progress.level>=50)}if(badgeText)badgeText.textContent=progress.level>=5?`Lv.${currentBadge.level} ${currentBadge.name}`:`Badge at Lv.${nextBadge?.level||5}`;const balance=document.getElementById("storeBalance");if(balance)balance.textContent=progress.yen;renderPassportHub();renderHudSakuraRain();if(!document.getElementById("phrasesTool")?.classList.contains("hidden"))updatePhraseProgress()}
function getHudSakuraTier(){if(progress.level>=20)return"storm";if(progress.level>=11)return"heavy";if(progress.level>=6)return"medium";if(progress.level>=1)return"light";return"none"}
function renderHudSakuraRain(){const layer=document.getElementById("hudSakuraRain");if(!layer)return;const tier=getHudSakuraTier();if(tier===lastHudSakuraTier)return;lastHudSakuraTier=tier;const counts={none:0,light:7,medium:14,heavy:20,storm:30};layer.innerHTML="";for(let i=0;i<counts[tier];i++){const petal=document.createElement("i");petal.style.left=Math.random()*100+"%";petal.style.setProperty("--fall-x",(Math.random()*70-35)+"px");petal.style.setProperty("--fall-rot",(120+Math.random()*260)+"deg");petal.style.animationDuration=(tier==="storm"?2.9+Math.random()*2.4:4.4+Math.random()*4.4)+"s";petal.style.animationDelay=(-Math.random()*5.5)+"s";petal.style.opacity=(.35+Math.random()*.55).toFixed(2);petal.style.transform=`scale(${(.62+Math.random()*.58).toFixed(2)})`;layer.appendChild(petal)}}
function openStore(){markLearningTried();renderStore();storeModal.classList.add("active")}
function closeStore(){storeModal.classList.remove("active")}
function renderStore(){
  const grid=document.getElementById("storeGrid"),inventory=document.getElementById("inventoryRow"),balance=document.getElementById("storeBalance");
  if(!grid||!inventory)return;
  const market=getStoreMarket();
  const rotation=getStoreRotation();
  const activeItems=getRotatingStoreItems();
  if(balance)balance.textContent=progress.yen;
  renderStoreEconomyPanel(market,rotation);
  grid.innerHTML=activeItems.map(item=>{
    const owned=progress.inventory[item.id]||0;
    const price=getStorePrice(item,market);
    const shift=getStoreShift(item,market);
    const canBuy=progress.yen>=price;
    const trendClass=shift>=.02?"rising":shift<=-.02?"falling":"steady";
    const trendLabel=shift>=.02?`UP ${Math.round(shift*100)}%`:shift<=-.02?`DOWN ${Math.abs(Math.round(shift*100))}%`:"STABLE";
    const featured=rotation.featured===item.id,leaving=rotation.leavingSoon?.includes(item.id);
    return `<article class="store-item rarity-${item.rarity} market-${trendClass} ${canBuy?"":"locked"}">
      <span class="store-market-tag">${trendLabel}</span>
      ${featured?`<span class="store-featured-tag">Featured</span>`:""}
      ${leaving?`<span class="store-leaving-tag">Leaving soon</span>`:""}
      <img src="${item.img}" alt="" />
      <div>
        <span class="rarity-chip">${item.rarity}</span>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        <strong>${price} YEN</strong>
        <small>Base ${item.price} · Owned ${owned}</small>
      </div>
      <button class="btn ${canBuy?"join-btn":"ghost-btn"} small-btn" onclick="buyStoreItem('${item.id}')" ${canBuy?"":"disabled"}>Buy</button>
    </article>`;
  }).join("");
  const ownedItems=storeItems.filter(item=>progress.inventory[item.id]);
  inventory.innerHTML=ownedItems.length?ownedItems.map(item=>{const quote=getSellQuote(item,market),profitClass=quote.profit>=0?"profit":"loss",gifted=progress.giftHistory?.find(log=>log.itemId===item.id&&log.type==="received");return `<article class="inventory-card rarity-${item.rarity}">
    <img src="${item.img}" alt="" />
    <div><strong>${item.name} x${progress.inventory[item.id]}</strong><small>Sell ${quote.net} YEN · Tax ${quote.tax} · <b class="${profitClass}">${quote.profit>=0?"+":""}${quote.profit} vs buy</b></small>${gifted?`<small>Gifted by ${gifted.from}</small>`:""}</div>
    <button class="small-btn ghost-btn" onclick="sellStoreItem('${item.id}',false)">Quick Sell</button>
    <button class="small-btn ghost-btn" onclick="sellStoreItem('${item.id}',true)">Confirm Sell</button>
    <button class="small-btn join-btn" onclick="giftStoreItem('${item.id}')">Gift</button>
  </article>`}).join(""):"<small>No collectibles yet. Train first, then claim something rare.</small>";
  renderStoreHistory();
}
function renderStoreEconomyPanel(market=getStoreMarket(),rotation=getStoreRotation()){
  const panel=document.getElementById("storeEconomyPanel");
  if(!panel)return;
  const averageShift=storeItems.reduce((sum,item)=>sum+getStoreShift(item,market),0)/storeItems.length;
  const hotItem=storeItems.slice().sort((a,b)=>getStoreShift(b,market)-getStoreShift(a,market))[0];
  const discountItem=storeItems.slice().sort((a,b)=>getStoreShift(a,market)-getStoreShift(b,market))[0];
  const featured=storeItems.find(item=>item.id===rotation.featured)||hotItem;
  const leaving=(rotation.leavingSoon||[]).map(id=>storeItems.find(item=>item.id===id)).filter(Boolean);
  const heat=Math.min(100,Math.max(8,Math.round((market.inflation-1)*240)));
  panel.innerHTML=`<div class="maneki-assistant">
      <div class="maneki-bubble">${getManekiPhrase(market,rotation)}</div>
      <img src="assets/icon-lucky-cat.png" alt="Maneki Neko" />
      <span>Maneki Neko</span>
    </div>
    <div class="store-economy-head">
      <span>Market Watch</span>
      <strong>${market.trend}</strong>
    </div>
    <div class="store-economy-meter"><i style="width:${heat}%"></i></div>
    <div class="store-economy-stats">
      <span><b>${Math.round(market.inflation*100)}%</b><small>Inflation</small></span>
      <span><b>${averageShift>=0?"+":""}${Math.round(averageShift*100)}%</b><small>Avg shift</small></span>
      <span><b>${formatStoreTimer(market)}</b><small>Next move</small></span>
    </div>
    <div class="store-economy-ticker">
      <p><strong>Rising:</strong> ${hotItem.name}</p>
      <p><strong>Falling:</strong> ${discountItem.name}</p>
      <p><strong>Featured:</strong> ${featured.name}</p>
      <p><strong>Leaving Soon:</strong> ${leaving.map(item=>item.name).join(", ")||"None"}</p>
      <p><strong>Refresh:</strong> ${formatRotationTimer(rotation)}</p>
      <small>Market stock rotates slowly. Sell prices include an 8% market tax.</small>
    </div>`;
}
function buyStoreItem(id){
  const item=storeItems.find(entry=>entry.id===id),market=getStoreMarket();
  if(!item)return;
  const price=getStorePrice(item,market);
  if(progress.yen<price)return;
  progress.yen-=price;
  progress.inventory[id]=(progress.inventory[id]||0)+1;
  progress.purchaseLedger[id]??={qty:0,total:0};
  progress.purchaseLedger[id].qty+=1;
  progress.purchaseLedger[id].total+=price;
  saveProgress();
  updateTrainerUI();
  renderStore();
  const modal=document.querySelector(".store-modal");
  if(modal){modal.classList.remove("store-pop");void modal.offsetWidth;modal.classList.add("store-pop")}
}
function sellStoreItem(id,confirmSell=false){
  const item=storeItems.find(entry=>entry.id===id),market=getStoreMarket();
  if(!item||!progress.inventory[id])return;
  const quote=getSellQuote(item,market);
  if(confirmSell&&!confirm(`Sell ${item.name} for ${quote.net} YEN? Market tax: ${quote.tax} YEN.`))return;
  progress.inventory[id]-=1;
  if(progress.inventory[id]<=0)delete progress.inventory[id];
  const ledger=progress.purchaseLedger?.[id];
  if(ledger?.qty){ledger.qty=Math.max(0,ledger.qty-1);ledger.total=Math.max(0,ledger.total-(quote.avg||0))}
  progress.yen+=quote.net;
  progress.sellHistory??=[];
  progress.sellHistory.unshift({itemId:id,item:item.name,price:quote.net,profit:quote.profit,tax:quote.tax,date:new Date().toLocaleString()});
  progress.sellHistory=progress.sellHistory.slice(0,8);
  saveProgress();
  updateTrainerUI();
  renderStore();
  pulseHudElement("hudYen");
}
function giftStoreItem(id){
  const item=storeItems.find(entry=>entry.id===id);
  if(!item||!progress.inventory[id])return;
  const wait=Math.ceil((STORE_GIFT_COOLDOWN_MS-(Date.now()-(progress.lastGiftAt||0)))/1000);
  if(wait>0){alert(`Gift cooldown active. Try again in ${wait}s.`);return}
  const to=(prompt("Gift to which member?")||"").trim();
  if(!to)return;
  const message=(prompt("Optional gift message")||"").trim();
  progress.inventory[id]-=1;
  if(progress.inventory[id]<=0)delete progress.inventory[id];
  progress.lastGiftAt=Date.now();
  progress.giftHistory??=[];
  progress.giftHistory.unshift({type:"sent",itemId:id,item:item.name,to,from:progress.name||"Guest Learner",message,date:new Date().toLocaleString(),rare:["legendary","mythic","divine"].includes(item.rarity)});
  progress.giftHistory=progress.giftHistory.slice(0,8);
  saveProgress();
  updateTrainerUI();
  renderStore();
  const modal=document.querySelector(".store-modal");
  if(modal&&["legendary","mythic","divine"].includes(item.rarity)){modal.classList.remove("rare-gift-pop");void modal.offsetWidth;modal.classList.add("rare-gift-pop")}
}
function renderStoreHistory(){
  const log=document.getElementById("storeLogPanel");
  if(!log)return;
  const sells=(progress.sellHistory||[]).map(entry=>`<p><strong>Sold</strong> ${entry.item} for ${entry.price} YEN <span class="${entry.profit>=0?"profit":"loss"}">${entry.profit>=0?"+":""}${entry.profit}</span><small>${entry.date}</small></p>`);
  const gifts=(progress.giftHistory||[]).map(entry=>`<p><strong>Gifted</strong> ${entry.item} to ${entry.to||"member"}${entry.message?` · "${entry.message}"`:""}<small>${entry.date}</small></p>`);
  const rows=[...sells,...gifts].slice(0,6);
  log.innerHTML=rows.length?rows.join(""):"<p>No market history yet.</p>";
}
function reward(correct=true){progress.triedLearning=true;if(!correct){progress.streak=0;saveProgress();updateTrainerUI();return}const now=Date.now();if(now-lastRewardAt<450)return;lastRewardAt=now;progress.streak+=1;let yenGain=5,expGain=10;if(["kanji","words","n5"].includes(trainerMode)){yenGain=8;expGain=14}if(trainerMode==="n4"){yenGain=11;expGain=18}if(trainerMode==="n3"){yenGain=15;expGain=24}if(trainerMode==="n2"){yenGain=20;expGain=32}if(trainerMode==="n1"){yenGain=26;expGain=42}if(trainerMode==="review"){yenGain=10;expGain=18}if(jlptAdventure.trainingOnly&&isJlptMode()){yenGain=Math.max(3,Math.floor(yenGain*.75));expGain=Math.max(6,Math.floor(expGain*.75))}if(currentQuestion?.boss){yenGain+=28;expGain+=36;addPassportActivity("event",1)}if(progress.streak%5===0){yenGain+=10;expGain+=16}addPassportActivity(isJlptMode()?"kanji":"vocab",1);addPassportActivity("lesson",1);progress.yen+=yenGain;progress.points+=expGain;progress.exp+=expGain;let next=progress.level*100;while(progress.exp>=next){progress.exp-=next;progress.level++;next=progress.level*100;progress.yen+=25}saveProgress();updateLeaderboard();updateTrainerUI();pulseHudElement("hudYen");pulseHudElement("hudExpFill");return {yenGain,expGain}}
function resetTrainerProgress(){progress.points=0;progress.exp=0;progress.level=1;progress.yen=0;progress.streak=0;progress.inventory={};progress.purchaseLedger={};progress.sellHistory=[];progress.giftHistory=[];saveProgress();updateLeaderboard();updateTrainerUI();renderStore()}
async function updateLeaderboard(force=false){const name=progress.name||"Guest Learner";if(force||name!=="Guest Learner"||progress.points>0||progress.yen>0){const existing=leaderboard.find(item=>item.name===name);const snapshot={name,points:progress.points,level:progress.level,yen:progress.yen,rank:getHudRankTitle(),kanji:progress.stats?.kanji||0,lessons:progress.stats?.lessons||0,streak:progress.streak||0,passportNo:progress.passportNo};if(existing)Object.assign(existing,{points:Math.max(existing.points,snapshot.points),level:Math.max(existing.level,snapshot.level),yen:Math.max(existing.yen||0,snapshot.yen),rank:snapshot.rank,kanji:snapshot.kanji,lessons:snapshot.lessons,streak:snapshot.streak,passportNo:snapshot.passportNo});else leaderboard.push(snapshot);leaderboard=leaderboard.filter(item=>item.name&&item.name!=="Guest Learner").sort((a,b)=>(b.yen||0)-(a.yen||0)||b.points-a.points).slice(0,10);localStorage.setItem("tasewakaiTrainerLeaderboard",JSON.stringify(leaderboard));publishOnlineLeaderboard(snapshot)}renderLeaderboard();fetchOnlineLeaderboard()}
function toggleHudLeaderboard(){const board=document.getElementById("hudLeaderboard"),state=document.getElementById("hudLeaderboardState");if(!board)return;const hidden=board.classList.toggle("hidden");localStorage.setItem("tasewakaiHudLeaderboardHidden",String(hidden));if(state)state.textContent=hidden?"Off":"On"}
function syncHudLeaderboardState(){const hidden=localStorage.getItem("tasewakaiHudLeaderboardHidden")==="true",board=document.getElementById("hudLeaderboard"),state=document.getElementById("hudLeaderboardState");if(board)board.classList.toggle("hidden",hidden);if(state)state.textContent=hidden?"Off":"On"}
function renderLeaderboard(){syncHudLeaderboardState();const lists=document.querySelectorAll("#leaderboardList,#hudLeaderboardList");if(!lists.length)return;const html=leaderboard.length===0?"<p>No saved learners yet.</p>":leaderboard.map((item,i)=>`<div class="leaderboard-row"><span><strong>#${i+1}</strong> ${item.name}<small>${item.rank||"Learner"} · ${item.kanji||0} kanji</small></span><span>${item.yen||0} YEN - Lv.${item.level}</span></div>`).join("");lists.forEach(list=>list.innerHTML=html)}
async function fetchOnlineLeaderboard(){const mode=document.getElementById("hudOnlineMode");try{const response=await fetch(ONLINE_LEADERBOARD_ENDPOINT,{cache:"no-store"});if(!response.ok)throw new Error("offline");const data=await response.json();if(Array.isArray(data.leaderboard)&&data.leaderboard.length){leaderboard=data.leaderboard.sort((a,b)=>(b.yen||0)-(a.yen||0)||((b.points||0)-(a.points||0))).slice(0,10);localStorage.setItem("tasewakaiTrainerLeaderboard",JSON.stringify(leaderboard));if(mode)mode.textContent="online";renderLeaderboard()}}catch(error){if(mode)mode.textContent="local"}}
async function publishOnlineLeaderboard(snapshot){try{await fetch(ONLINE_LEADERBOARD_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(snapshot)})}catch(error){}}
function renderNameLogs(){const list=document.getElementById("nameLogsList");if(!list)return;if(!progress.nameLogs||progress.nameLogs.length===0){list.innerHTML="<p>No name changes yet.</p>";return}list.innerHTML=progress.nameLogs.slice().reverse().map(log=>`<div class="leaderboard-row"><span><strong>${log.from}</strong> -> <strong>${log.to}</strong></span><span>${log.date}</span></div>`).join("")}
function mountN5Quiz(){const mount=document.getElementById("n5QuizMount");if(!mount||mount.innerHTML.trim())return;mount.innerHTML=`<div id="jlptQuizView" class="jlpt-quiz-view premium-jlpt"><div class="jlpt-scene-bg" aria-hidden="true"><span class="jlpt-fuji"></span><span class="jlpt-torii-shadow"></span><i></i><i></i><i></i><i></i></div><div class="jlpt-topbar"><div><p class="mini-label" id="jlptModeLabel">JLPT N5</p><strong id="jlptRoundLabel">Learning card</strong><small id="jlptWorldLabel">N5 Forest</small></div><div class="jlpt-progress-dashboard"><span>🔥 Streak <b id="jlptStreakDash">0</b></span><span>📖 Learned <b id="jlptLearnedDash">0/30</b></span><span>💴 <b id="jlptYenDash">0</b> YEN</span><span>⭐ EXP <b id="jlptExpDash">0</b></span></div></div><div class="jlpt-path-controls"><button class="active" id="jlptGuidedBtn" onclick="setJlptSessionMode('guided')">Learn first</button><button id="jlptTrainingBtn" onclick="setJlptSessionMode('training')">I know some · train only</button><button onclick="resetKnownJlptCards()">Reset known</button></div><div class="jlpt-journey-row"><span class="active">📖 Learning Cards</span><span>🧠 Review Session</span><span>🎲 Random Event</span><span>⚔️ Optional Boss</span><span>💴 Rewards</span></div><div class="jlpt-event-card hidden" id="jlptEventCard"></div><div class="jlpt-boss-card compact hidden" id="jlptBossCard"><span class="boss-icon">🏮</span><div><p class="mini-label">Optional Boss Encounter</p><h3 id="jlptBossName">Forest Spirit</h3><div class="jlpt-meter"><span id="jlptBossHpText">Boss HP: 100%</span><div><b id="jlptBossFill"></b></div></div></div><button class="btn join-btn small-btn" id="jlptBossButton" onclick="startOptionalBoss()">Challenge</button></div><div class="jlpt-learning-layout"><section><div class="jlpt-card"><button class="kanji-info-btn" onclick="toggleKanjiInfo()">💡 Hint</button><div class="jlpt-badge-row"><span id="jlptLevelBadge">N5</span><span id="jlptStrokeBadge">4 Strokes</span><span id="jlptDifficultyBadge">Starter</span></div><div class="quiz-character jlpt-character" id="jlptPrompt">\u65e5</div><div class="jlpt-reading-grid"><span>On <b id="jlptOnReading">-</b></span><span>Kun <b id="jlptKunReading">-</b></span></div><p class="quiz-question" id="jlptQuestion">Study the kanji, readings, and examples.</p><div class="kanji-meta locked" id="kanjiMeta">Hint available · costs 3 YEN and 5 EXP</div><div class="kanji-info hidden" id="kanjiInfo"></div><div class="jlpt-card-actions"><button class="btn join-btn learn-card-btn" id="jlptLearnBtn" onclick="markJlptCardLearned()">Learn this kanji</button><button class="btn ghost-btn learn-card-btn" id="jlptKnownBtn" onclick="markJlptCardKnown()">Already know this</button></div></div><div class="answer-grid jlpt-answer-grid hidden" id="jlptAnswerGrid"></div><p class="quiz-feedback" id="jlptFeedback">Learn 5 cards to unlock a review session.</p><div class="kanji-expansion hidden" id="kanjiExpansion"></div></section><aside class="jlpt-side-progress"><div class="jlpt-companion" id="jlptCompanion"><img id="jlptCompanionImg" src="assets/jlpt-konata-thinking.gif" alt="" /><p id="jlptCompanionText">Pick a path: learn new cards, or jump straight into training.</p></div><p class="mini-label">Journey Progress</p><h3 id="jlptPhaseTitle">Learning Phase</h3><div class="jlpt-set-meter"><span id="jlptSetText">0/5 cards learned</span><div><b id="jlptSetFill"></b></div></div><div class="jlpt-known-box"><span id="jlptKnownText">Known: 0</span><span id="jlptSkippedText">Skipped: 0</span></div><div class="jlpt-achievements"><span id="jlptAchFirst">🌸 First Kanji</span><span id="jlptAchScholar">📜 Scholar</span><span id="jlptAchShrine">🏮 Shrine Explorer</span><span id="jlptAchMountain">🗻 Mountain Walker</span><span id="jlptAchBoss">🐉 Boss Slayer</span><span id="jlptAchMaster">👑 Kanji Master</span></div></aside></div></div>`}
function isJlptMode(mode=trainerMode){return["n5","n4","n3","n2","n1","words","review"].includes(mode)}
function saveJlptBossState(){localStorage.setItem("tasewakaiJlptBossState",JSON.stringify(jlptBossState))}
function saveJlptAdventure(){localStorage.setItem("tasewakaiJlptAdventure",JSON.stringify(jlptAdventure))}
function setJlptDataStatus(text,type="ready"){let status=document.getElementById("jlptDataStatus");if(!status){const anchor=document.querySelector(".jlpt-path-controls");if(!anchor)return;status=document.createElement("div");status.id="jlptDataStatus";status.className="jlpt-data-status";anchor.insertAdjacentElement("afterend",status)}status.className=`jlpt-data-status ${type}`;status.innerHTML=`<span>${text}</span><b>Local + API</b>`}
function ensureJlptFallbackDeck(){["n2","n1"].forEach(level=>{if(!Array.isArray(jlptDeck[level])||!jlptDeck[level].length)jlptDeck[level]=mergeKanjiDeck(jlptFallbackDeck[level]||[])})}
async function loadJlptKanjiFile(){ensureJlptFallbackDeck();setJlptDataStatus("Loading the full local JLPT deck...", "loading");try{const response=await fetch("data/jlpt-kanji.json",{cache:"no-store"});if(!response.ok)throw new Error("local kanji file unavailable");const data=await response.json();["n5","n4","n3","n2","n1"].forEach(level=>{if(Array.isArray(data[level]))jlptDeck[level]=mergeKanjiDeck([...data[level],...(jlptDeck[level]||[])])});jlptKanjiLoaded=true;setJlptDataStatus("Full local deck loaded. API details enrich cards while you train.", "success")}catch(error){ensureJlptFallbackDeck();setJlptDataStatus("Local JSON could not load, so the built-in N2/N1 safety deck is active.", "warning")}}
function mergeKanjiDeck(items){const seen=new Set();return items.map(repairDataText).filter(item=>{if(!item||!item.q)return false;if(seen.has(item.q))return false;seen.add(item.q);return true})}
function getCurrentBossName(){return jlptBosses[jlptBossState.index%jlptBosses.length]}
function getCurrentWorld(){return jlptWorlds[trainerMode]||"N5 Forest"}
function getJlptLevelLabel(){return trainerMode==="review"?"Review":trainerMode==="words"?"Words":trainerMode.toUpperCase()}
function getKanjiStrokeCount(card=currentQuestion){const kanji=decodeMojibakeText(card?.q||"");return card?.strokes||kanjiStrokeFallback[kanji]||Math.max(3,kanji.charCodeAt(0)%17+3)}
function getKanjiDifficulty(card=currentQuestion){const strokes=getKanjiStrokeCount(card);if(trainerMode==="n1"||strokes>=25)return"Expert";if(trainerMode==="n2"||strokes>=18)return"Advanced";if(trainerMode==="n3"||strokes>=14)return"Hard";if(trainerMode==="n4"||strokes>=9)return"Medium";return"Starter"}
function updateJlptDashboard(){const next=progress.level*100,pool=getQuestionPool(),known=(jlptAdventure.knownCards||[]).filter(key=>key.startsWith(getJlptLevelLabel()+":")).length,learned=Math.min(jlptCorrectCount+known,Math.max(pool.length,30)),hp=Math.max(0,Math.min(100,jlptBossState.hp)),phase=jlptAdventure.phase||"learning";const set=(id,text)=>{const el=document.getElementById(id);if(el)el.textContent=text};set("jlptStreakDash",progress.streak||0);set("jlptLearnedDash",`${learned}/${Math.max(pool.length,30)}`);set("jlptYenDash",progress.yen||0);set("jlptExpDash",`${progress.exp||0}/${next}`);set("jlptBossName",getCurrentBossName());set("jlptBossHpText",`Boss HP: ${hp}%`);set("jlptWorldLabel",getCurrentWorld());set("jlptPhaseTitle",phase==="boss"?"Boss Challenge":jlptAdventure.trainingOnly?"Training Only":phase==="review"?"Review Session":"Learning Phase");set("jlptSetText",jlptAdventure.trainingOnly?`Known ${known} · direct practice`:phase==="review"?`Review ${jlptAdventure.reviewCorrect||0}/3 correct`:`${Math.min(jlptAdventure.learnedSet||0,5)}/5 cards learned`);set("jlptKnownText",`Known: ${known}`);set("jlptSkippedText",`Skipped: ${(jlptAdventure.skippedCards||[]).length}`);document.getElementById("jlptGuidedBtn")?.classList.toggle("active",!jlptAdventure.trainingOnly);document.getElementById("jlptTrainingBtn")?.classList.toggle("active",!!jlptAdventure.trainingOnly);const fill=document.getElementById("jlptBossFill");if(fill)fill.style.width=hp+"%";const setFill=document.getElementById("jlptSetFill");if(setFill)setFill.style.width=(jlptAdventure.trainingOnly?Math.min(known/Math.max(pool.length,1)*100,100):phase==="review"?Math.min((jlptAdventure.reviewCorrect||0)/3*100,100):Math.min((jlptAdventure.learnedSet||0)/5*100,100))+"%";document.getElementById("jlptBossCard")?.classList.toggle("hidden",!jlptAdventure.bossReady&&phase!=="boss");document.getElementById("jlptBossButton")?.classList.toggle("hidden",phase==="boss");document.getElementById("jlptAchFirst")?.classList.toggle("unlocked",jlptCorrectCount>=1||known>=1);document.getElementById("jlptAchScholar")?.classList.toggle("unlocked",jlptCorrectCount+known>=5);document.getElementById("jlptAchShrine")?.classList.toggle("unlocked",jlptCorrectCount+known>=10);document.getElementById("jlptAchMountain")?.classList.toggle("unlocked",(trainerMode==="n3"||trainerMode==="n2"||trainerMode==="n1")&&jlptCorrectCount+known>=15);document.getElementById("jlptAchBoss")?.classList.toggle("unlocked",(jlptBossState.defeated||0)>=1);document.getElementById("jlptAchMaster")?.classList.toggle("unlocked",trainerMode==="n1"&&jlptCorrectCount+known>=30);document.querySelectorAll(".jlpt-journey-row span").forEach((item,index)=>item.classList.toggle("active",index===(phase==="learning"?0:phase==="review"?1:phase==="event"?2:phase==="boss"?3:4)))}
function damageJlptBoss(amount=12){let defeated=false;jlptBossState.hp=Math.max(0,(jlptBossState.hp??100)-amount);if(jlptBossState.hp<=0){defeated=true;jlptBossState.defeated=(jlptBossState.defeated||0)+1;jlptBossState.index=(jlptBossState.index||0)+1;jlptBossState.hp=100;spawnBossDamage(amount,true)}else spawnBossDamage(amount,false);saveJlptBossState();updateJlptDashboard();return defeated}
function spawnBossDamage(amount,defeated=false){const card=document.querySelector(".jlpt-boss-card");if(!card)return;card.classList.remove("boss-hit");void card.offsetWidth;card.classList.add("boss-hit");const hit=document.createElement("strong");hit.className="boss-damage-number";hit.textContent=defeated?"Boss Clear!":`-${amount}`;card.appendChild(hit);setTimeout(()=>hit.remove(),900)}
function applySmallJlptReward(yenGain=2,expGain=4){if(jlptAdventure.xpBoost>0){expGain+=Math.ceil(expGain*.5);jlptAdventure.xpBoost--}progress.triedLearning=true;addPassportActivity("kanji",1);addPassportActivity("lesson",1);progress.yen=Number(progress.yen||0)+yenGain;progress.points=Number(progress.points||0)+expGain;progress.exp=Number(progress.exp||0)+expGain;progress.level=Number(progress.level||1);let next=progress.level*100;while(progress.exp>=next){progress.exp-=next;progress.level++;next=progress.level*100;progress.yen+=25}saveProgress();updateLeaderboard();updateTrainerUI();pulseHudElement("hudYen");pulseHudElement("hudExpFill");return{yenGain,expGain}}
function markJlptCardLearned(){if(!currentQuestion||jlptAdventure.phase!=="learning")return;const r=applySmallJlptReward(2,4);jlptAdventure.learnedSet=(jlptAdventure.learnedSet||0)+1;jlptAdventure.successCards=(jlptAdventure.successCards||0)+1;jlptCorrectCount++;localStorage.setItem("tasewakaiJlptCorrectCount",String(jlptCorrectCount));saveJlptAdventure();spawnRewardBurst(r,false);document.getElementById("jlptFeedback").textContent=`Learned card. +${r.yenGain} YEN +${r.expGain} EXP`;if(jlptAdventure.learnedSet>=5){jlptAdventure.phase="review";jlptAdventure.reviewCorrect=0;saveJlptAdventure();setTimeout(nextQuestion,900)}else setTimeout(nextQuestion,900);updateJlptDashboard()}
function markJlptCardKnown(){if(!currentQuestion)return;const key=jlptCardKey(currentQuestion);jlptAdventure.knownCards=[key,...(jlptAdventure.knownCards||[]).filter(item=>item!==key)].slice(0,500);jlptAdventure.skippedCards=[key,...(jlptAdventure.skippedCards||[]).filter(item=>item!==key)].slice(0,120);jlptAdventure.learnedSet=(jlptAdventure.learnedSet||0)+1;jlptAdventure.successCards=(jlptAdventure.successCards||0)+1;progress.triedLearning=true;addPassportActivity("kanji",1);saveProgress();saveJlptAdventure();updateLeaderboard();updateTrainerUI();updateJlptDashboard();updateJlptCompanion("known");const feedback=document.getElementById("jlptFeedback");if(feedback)feedback.textContent="Marked as already known. I will prioritize new cards next.";if(jlptAdventure.learnedSet>=5&&!jlptAdventure.trainingOnly){jlptAdventure.phase="review";jlptAdventure.reviewCorrect=0;saveJlptAdventure()}setTimeout(nextQuestion,850)}
function startOptionalBoss(){jlptAdventure.phase="boss";jlptAdventure.bossReady=false;jlptBossState.hp=100;saveJlptAdventure();saveJlptBossState();showJlptEvent({icon:"⚔️",name:"Boss Encounter",text:`${getCurrentBossName()} appears. Correct answers damage the boss.`});setTimeout(nextQuestion,700)}
function completeJlptReview(){jlptAdventure.phase="event";jlptAdventure.learnedSet=0;jlptAdventure.reviewCorrect=0;if((jlptAdventure.successCards||0)>=10){jlptAdventure.bossReady=true;jlptAdventure.successCards=0}saveJlptAdventure();triggerJlptRandomEvent();setTimeout(()=>{jlptAdventure.phase=jlptAdventure.trainingOnly?"review":"learning";saveJlptAdventure();nextQuestion()},jlptAdventure.bossReady?1800:1500)}
function triggerJlptRandomEvent(){const event=jlptRandomEvents[Math.floor(Math.random()*jlptRandomEvents.length)];if(event.effect==="xp")applySmallJlptReward(0,10);if(event.effect==="hint")jlptAdventure.freeHints=(jlptAdventure.freeHints||0)+1;if(event.effect==="boost")jlptAdventure.xpBoost=3;if(event.effect==="yen")applySmallJlptReward(8,0);if(event.effect==="rare")jlptAdventure.rareDiscovery=true;saveJlptAdventure();showJlptEvent(event);updateJlptCompanion("event")}
function showJlptEvent(event){const card=document.getElementById("jlptEventCard");if(!card||!event)return;card.classList.remove("hidden");card.innerHTML=`<span>${event.icon}</span><div><strong>${event.name}</strong><p>${event.text}</p></div>`;card.classList.remove("event-pop");void card.offsetWidth;card.classList.add("event-pop");setTimeout(()=>card.classList.add("hidden"),2600)}
function parseExampleParts(example=""){const parts=decodeMojibakeText(example).split("/").map(part=>part.trim()).filter(Boolean);return {word:parts[0]||"例文",reading:parts[1]||"",english:parts[2]||"Example"}}
function getReviewQuestionSetup(card,pool){const type=["meaning","reading","example"][Math.floor(Math.random()*3)],example=parseExampleParts(card.example||"");if(type==="reading"){const correct=decodeMojibakeText(card.kun||card.on||card.reading||example.reading||card.a);return{answer:correct,question:"Choose the correct reading.",answers:createAnswers(pool,correct,item=>decodeMojibakeText(item.kun||item.on||item.reading||parseExampleParts(item.example||"").reading||item.a))}}if(type==="example"){const correct=example.word;return{answer:correct,question:"Choose an example word using this kanji.",answers:createAnswers(pool,correct,item=>parseExampleParts(item.example||"").word)}}return{answer:card.a,question:"Choose the correct meaning.",answers:createAnswers(pool,card.a)}}
function renderKanjiExpansion(card=currentQuestion){const box=document.getElementById("kanjiExpansion");if(!box||!card)return;const ex=parseExampleParts(card.example||""),meaning=decodeMojibakeText(card.a||""),kun=decodeMojibakeText(card.kun||card.reading||"-"),on=decodeMojibakeText(card.on||"-"),q=decodeMojibakeText(card.q||"");box.innerHTML=`<div class="expansion-head"><strong>${q}</strong><span>${meaning}</span></div><div class="expansion-grid"><div><b>Readings</b><p>${kun}</p><p>${on}</p></div><div><b>Example Words</b><p>${ex.word} ${ex.reading?`(${ex.reading})`:""}</p><p>${ex.english}</p></div><div><b>Example Sentence</b><p>${q}があります。</p><p>There is ${meaning.split("/")[0].trim()}.</p></div></div>`;box.classList.remove("hidden")}
function hideKanjiExpansion(){document.getElementById("kanjiExpansion")?.classList.add("hidden")}
async function enrichKanjiFromApis(card=currentQuestion){if(!card||!card.q||card.q.length!==1)return;const key=`tasewakaiKanjiApi:${card.q}`;try{const cached=JSON.parse(localStorage.getItem(key)||"null");if(cached&&Date.now()-cached.time<1000*60*60*24*7){Object.assign(card,cached.data);updateKanjiMetaBadges(card);return}}catch(error){}try{const response=await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(card.q)}`,{cache:"no-store"});if(!response.ok)throw new Error("KanjiAPI unavailable");const data=await response.json();const enriched={strokes:data.stroke_count,on:(data.on_readings||[]).join("・")||card.on,kun:(data.kun_readings||[]).join("・")||card.kun};Object.assign(card,enriched);localStorage.setItem(key,JSON.stringify({time:Date.now(),data:enriched}));updateKanjiMetaBadges(card)}catch(error){await enrichKanjiFromJotoba(card,key)}}
async function enrichKanjiFromJotoba(card,key){try{const response=await fetch("https://jotoba.de/api/search/words",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:card.q,language:"English",no_english:false})});if(!response.ok)throw new Error("Jotoba unavailable");const data=await response.json(),entry=(data.words||data.results||[])[0],reading=entry?.reading||entry?.kana||"";if(reading){const enriched={kun:card.kun||reading};Object.assign(card,enriched);localStorage.setItem(key,JSON.stringify({time:Date.now(),data:enriched}));updateKanjiMetaBadges(card)}}catch(error){try{localStorage.setItem(`tasewakaiJotobaQueued:${card.q}`,JSON.stringify({time:Date.now(),source:"Jotoba fallback attempted"}))}catch(_){}}}
function primaryKanji(value=""){return[...decodeMojibakeText(value)].find(char=>/[\u4e00-\u9fff]/.test(char))||""}
async function enrichKanjiFromApis(card=currentQuestion){if(!card||!card.q)return;const target=primaryKanji(card.q);if(!target)return;const key=`tasewakaiKanjiApi:${target}`;try{const cached=JSON.parse(localStorage.getItem(key)||"null");if(cached&&Date.now()-cached.time<1000*60*60*24*7){Object.assign(card,{...cached.data,apiSource:cached.data.apiSource||"KanjiAPI cache"});updateKanjiMetaBadges(card);setJlptDataStatus(`Cached API detail ready for ${target}.`,"success");return}}catch(error){}setJlptDataStatus(`Checking API details for ${target}...`,"loading");try{const response=await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(target)}`,{cache:"no-store"});if(!response.ok)throw new Error("KanjiAPI unavailable");const data=await response.json();const enriched={apiSource:"KanjiAPI",strokes:card.strokes||data.stroke_count,on:card.on&&card.on!=="-"?card.on:(data.on_readings||[]).join("・"),kun:card.kun&&card.kun!=="-"?card.kun:(data.kun_readings||[]).join("・")};Object.assign(card,enriched);localStorage.setItem(key,JSON.stringify({time:Date.now(),data:enriched}));updateKanjiMetaBadges(card);setJlptDataStatus(`API details added for ${target}.`,"success")}catch(error){await enrichKanjiFromJotoba(card,key,target)}}
async function enrichKanjiFromJotoba(card,key,target=card.q){try{const response=await fetch("https://jotoba.de/api/search/words",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:decodeMojibakeText(card.q),language:"English",no_english:false})});if(!response.ok)throw new Error("Jotoba unavailable");const data=await response.json(),entry=(data.words||data.results||[])[0],reading=entry?.reading||entry?.kana||"";if(reading){const enriched={apiSource:"Jotoba",kun:card.kun||reading};Object.assign(card,enriched);localStorage.setItem(key,JSON.stringify({time:Date.now(),data:enriched}));updateKanjiMetaBadges(card);setJlptDataStatus(`Jotoba fallback added detail for ${target}.`,"success")}}catch(error){setJlptDataStatus("API unavailable right now. Local cards are still ready.","warning");try{localStorage.setItem(`tasewakaiJotobaQueued:${target}`,JSON.stringify({time:Date.now(),source:"Jotoba fallback attempted"}))}catch(_){}}}
function updateKanjiMetaBadges(card=currentQuestion){const level=getJlptLevelLabel(),strokes=getKanjiStrokeCount(card);const set=(id,text)=>{const el=document.getElementById(id);if(el)el.textContent=text};set("jlptLevelBadge",level);set("jlptStrokeBadge",`${strokes} Strokes`);set("jlptDifficultyBadge",getKanjiDifficulty(card));set("jlptOnReading",decodeMojibakeText(card?.on||"-"));set("jlptKunReading",decodeMojibakeText(card?.kun||card?.reading||"-"))}
function setTrainerMode(mode){trainerMode=mode;document.querySelectorAll(".tab").forEach(tab=>tab.classList.toggle("active",tab.dataset.mode===mode));const inJlpt=!!document.getElementById("n5Tool")&&!document.getElementById("n5Tool").classList.contains("hidden");const quizView=document.getElementById(inJlpt?"jlptQuizView":"quizView"),leaderboardView=document.getElementById(inJlpt?"jlptLeaderboardView":"leaderboardView"),logsView=document.getElementById("logsView");if(quizView)quizView.classList.add("hidden");if(leaderboardView)leaderboardView.classList.add("hidden");if(logsView)logsView.classList.add("hidden");if(mode==="leaderboard"){if(leaderboardView)leaderboardView.classList.remove("hidden");renderLeaderboard();return}if(mode==="logs"){if(logsView)logsView.classList.remove("hidden");renderNameLogs();return}if(quizView)quizView.classList.remove("hidden");if(isJlptMode(mode)){ensureJlptFallbackDeck();const label=document.getElementById("jlptModeLabel");if(label)label.textContent=`JLPT ${getJlptLevelLabel()}`;updateJlptDashboard();if(!jlptKanjiLoaded)loadJlptKanjiFile().then(()=>{if(trainerMode===mode)nextQuestion()});nextQuestion();return}nextQuestion()}
function getQuestionPool(){ensureJlptFallbackDeck();if(trainerMode==="n5")return jlptDeck.n5||[];if(trainerMode==="n4")return jlptDeck.n4||[];if(trainerMode==="n3")return jlptDeck.n3||[];if(trainerMode==="n2")return jlptDeck.n2||[];if(trainerMode==="n1")return jlptDeck.n1||[];if(trainerMode==="review")return reviewQueue.length?reviewQueue:(jlptDeck.n5||[]);if(trainerMode==="words")return jlptWordDeck;if(trainerMode==="kanji")return kanjiQuestions;return kanaQuestions}
function jlptCardKey(card){return `${getJlptLevelLabel()}:${decodeMojibakeText(card?.q||"")}`}
function updateJlptCompanion(state="ready"){const data=jlptCompanions[state]||jlptCompanions.ready,img=document.getElementById("jlptCompanionImg"),text=document.getElementById("jlptCompanionText"),box=document.getElementById("jlptCompanion");if(img)img.src=data.img;if(text)text.textContent=data.text;if(box){box.classList.remove("reacting");void box.offsetWidth;box.classList.add("reacting")}}
function setJlptSessionMode(mode="guided"){jlptAdventure.sessionMode=mode;jlptAdventure.trainingOnly=mode==="training";jlptAdventure.phase=mode==="training"?"review":"learning";jlptAdventure.learnedSet=0;jlptAdventure.reviewCorrect=0;saveJlptAdventure();document.getElementById("jlptGuidedBtn")?.classList.toggle("active",mode==="guided");document.getElementById("jlptTrainingBtn")?.classList.toggle("active",mode==="training");updateJlptCompanion(mode==="training"?"training":"ready");nextQuestion()}
function resetKnownJlptCards(){jlptAdventure.knownCards=[];jlptAdventure.skippedCards=[];saveJlptAdventure();updateJlptDashboard();updateJlptCompanion("ready");const feedback=document.getElementById("jlptFeedback");if(feedback)feedback.textContent="Known-card list cleared. Fresh path restored.";nextQuestion()}
function pickJlptCard(pool){if(!pool.length)return null;const known=new Set(jlptAdventure.knownCards||[]),available=pool.filter(card=>!known.has(`${getJlptLevelLabel()}:${decodeMojibakeText(card.q||"")}`));const source=available.length?available:pool;let picked=source[Math.floor(Math.random()*source.length)];if(source.length>1){let guard=0;while(picked.q===lastJlptQuestionKey&&guard<12){picked=source[Math.floor(Math.random()*source.length)];guard++}}return picked}
function nextQuestion(){lockAnswer=false;if(isJlptMode())return nextJlptQuestion();const pool=getQuestionPool();currentQuestion=pool[Math.floor(Math.random()*pool.length)];document.getElementById("quizModeLabel").textContent="Kana Trainer";document.getElementById("quizPrompt").textContent=currentQuestion.q;document.getElementById("quizQuestion").textContent="Choose the correct reading.";document.getElementById("quizFeedback").textContent="Pick the correct answer.";const answers=createAnswers(pool,currentQuestion.a),grid=document.getElementById("answerGrid");grid.innerHTML="";answers.forEach(answer=>{const btn=document.createElement("button");btn.className="answer-btn premium-answer";btn.textContent=answer;btn.onclick=()=>checkAnswer(btn,answer);grid.appendChild(btn)})}
function nextJlptQuestion(){lockAnswer=false;hintUsedThisQuestion=false;if(jlptAdventure.phase==="event"||jlptAdventure.phase==="rewards")jlptAdventure.phase=jlptAdventure.trainingOnly?"review":"learning";hideKanjiExpansion();const pool=getQuestionPool(),phase=jlptAdventure.phase||"learning",bossReady=phase==="boss";const grid=document.getElementById("jlptAnswerGrid"),feedback=document.getElementById("jlptFeedback");if(!pool.length){currentQuestion=null;document.getElementById("jlptPrompt").textContent="準備中";document.getElementById("jlptQuestion").textContent="This level is still being prepared.";if(grid){grid.innerHTML="";grid.classList.add("hidden")}if(feedback)feedback.textContent="No cards found for this path yet. Try another JLPT level.";updateJlptDashboard();return}let picked=pickJlptCard(pool);if(!picked){picked=pool[Math.floor(Math.random()*pool.length)]}lastJlptQuestionKey=picked.q;currentQuestion={...picked,boss:bossReady};const quizPhase=jlptAdventure.trainingOnly&&phase!=="boss"?"review":phase;const reviewSetup=quizPhase==="review"||bossReady?getReviewQuestionSetup(currentQuestion,pool):{answer:currentQuestion.a,question:"Choose the correct meaning.",answers:createAnswers(pool,currentQuestion.a)};currentQuestion.answer=reviewSetup.answer;const level=getJlptLevelLabel();document.getElementById("jlptModeLabel").textContent=`JLPT ${level}`;document.getElementById("jlptRoundLabel").textContent=quizPhase==="learning"?"Learning card":jlptAdventure.trainingOnly?"Training drill":quizPhase==="review"?"Review quiz":bossReady?"Boss challenge":"Kanji card";document.getElementById("jlptPrompt").textContent=decodeMojibakeText(currentQuestion.q);document.getElementById("jlptQuestion").textContent=quizPhase==="learning"?"Study the meaning, readings, examples, and choose what to do.":trainerMode==="words"?"Choose the correct meaning.":bossReady?"Boss challenge: correct answers deal damage.":reviewSetup.question;updateKanjiMetaBadges(currentQuestion);const meta=document.getElementById("kanjiMeta"),info=document.getElementById("kanjiInfo"),tipBtn=document.querySelector(".kanji-info-btn"),learnBtn=document.getElementById("jlptLearnBtn"),knownBtn=document.getElementById("jlptKnownBtn");if(meta){meta.classList.add("locked");meta.textContent=jlptAdventure.freeHints>0?"💡 Free hint available":"💡 Hint available · costs 3 YEN and 5 EXP"}if(info){info.textContent="";info.classList.add("hidden")}if(tipBtn)tipBtn.textContent="💡 Hint";if(learnBtn)learnBtn.classList.toggle("hidden",quizPhase!=="learning");if(knownBtn)knownBtn.classList.toggle("hidden",quizPhase!=="learning");if(grid)grid.classList.toggle("hidden",quizPhase==="learning");document.getElementById("jlptQuizView")?.classList.toggle("boss-mode",bossReady);if(quizPhase==="learning"){renderKanjiExpansion(currentQuestion);if(feedback)feedback.textContent="Learn it, mark it known, or switch to training-only mode.";if(grid)grid.innerHTML="";updateJlptCompanion("ready")}else{if(feedback)feedback.textContent=bossReady?"Defeat the boss with correct answers.":jlptAdventure.trainingOnly?"Training-only: answer directly. Known cards are skipped first.":"Review time: answer 3 correctly to continue your journey.";if(grid){grid.innerHTML="";reviewSetup.answers.forEach(answer=>{const btn=document.createElement("button");btn.className="answer-btn premium-answer";btn.textContent=answer;btn.onclick=()=>checkAnswer(btn,answer);grid.appendChild(btn)})}updateJlptCompanion(jlptAdventure.trainingOnly?"training":"ready")}updateJlptDashboard();enrichKanjiFromApis(currentQuestion)}
function createAnswers(pool,correct,mapper=item=>item.a){const wrong=[...new Set(pool.map(mapper).filter(answer=>answer&&answer!==correct))].sort(()=>Math.random()-.5).slice(0,3);return[correct,...wrong].sort(()=>Math.random()-.5)}
function checkAnswer(button,answer){if(lockAnswer)return;lockAnswer=true;let bossDefeatedNow=false;const gridId=isJlptMode()?"jlptAnswerGrid":"answerGrid",feedbackId=isJlptMode()?"jlptFeedback":"quizFeedback",correctAnswer=currentQuestion.answer||currentQuestion.a;document.querySelectorAll(`#${gridId} .answer-btn`).forEach(btn=>{if(btn.textContent===correctAnswer)btn.classList.add("correct")});if(answer===correctAnswer){const r=reward(true)||{yenGain:0,expGain:0};if(isJlptMode()){updateJlptCompanion("correct");jlptCorrectCount++;jlptAdventure.successCards=(jlptAdventure.successCards||0)+1;localStorage.setItem("tasewakaiJlptCorrectCount",String(jlptCorrectCount));removeReviewCard(currentQuestion);if(jlptAdventure.phase==="boss")bossDefeatedNow=damageJlptBoss(28);else{jlptAdventure.reviewCorrect=(jlptAdventure.reviewCorrect||0)+1;saveJlptAdventure();updateJlptDashboard()}spawnRewardBurst(r,jlptAdventure.phase==="boss");renderKanjiExpansion(currentQuestion);document.getElementById(feedbackId).textContent=jlptAdventure.phase==="boss"?`Boss hit! +${r.yenGain} YEN +${r.expGain} EXP`:`Correct! +${r.yenGain} YEN +${r.expGain} EXP`;}else document.getElementById(feedbackId).textContent=`Correct! +${r.expGain} EXP - +${r.yenGain} YEN`;}else{button.classList.add("wrong");reward(false);if(isJlptMode()){updateJlptCompanion("wrong");addReviewCard(currentQuestion)}document.getElementById(feedbackId).textContent=`Wrong. Correct answer: ${correctAnswer}`;}if(isJlptMode()&&jlptAdventure.phase==="review"&&(jlptAdventure.reviewCorrect||0)>=3){setTimeout(completeJlptReview,900);return}if(isJlptMode()&&bossDefeatedNow){jlptAdventure.phase=jlptAdventure.trainingOnly?"review":"learning";jlptAdventure.bossReady=false;saveJlptAdventure();showJlptEvent({icon:"🎁",name:"Reward Chest",text:"Boss defeated. A reward chest appears."});setTimeout(nextQuestion,1600);return}setTimeout(nextQuestion,isJlptMode()?2400:1000)}
function applyHintPenalty(){progress.yen=Math.max(0,progress.yen-3);progress.exp-=5;while(progress.exp<0&&progress.level>1){progress.level--;progress.exp+=progress.level*100}progress.exp=Math.max(0,progress.exp);saveProgress();updateLeaderboard();updateTrainerUI()}
function spawnDamePenaltyAnimation(){const panel=document.querySelector(".jlpt-panel");if(panel){panel.classList.remove("dame-warning-shake");void panel.offsetWidth;panel.classList.add("dame-warning-shake");setTimeout(()=>panel.classList.remove("dame-warning-shake"),760)}const overlay=document.createElement("div");overlay.className="dame-penalty-overlay";overlay.innerHTML="<strong>\u3060\u3081</strong><em>-3 YEN - 5 EXP</em>";document.body.appendChild(overlay);for(let i=0;i<46;i++){const mark=document.createElement("span");mark.textContent=i%5===0?"\u30c0\u30e1":"\u3060\u3081";mark.style.left=Math.random()*100+"vw";mark.style.setProperty("--fall-x",(Math.random()*180-90)+"px");mark.style.setProperty("--fall-rot",(Math.random()*460-230)+"deg");mark.style.animationDuration=(1.15+Math.random()*1.2)+"s";mark.style.animationDelay=(Math.random()*0.35)+"s";mark.style.fontSize=(18+Math.random()*30)+"px";overlay.appendChild(mark)}for(let i=0;i<18;i++){const light=document.createElement("i");light.style.left=(8+Math.random()*84)+"vw";light.style.top=(12+Math.random()*70)+"vh";light.style.animationDelay=(Math.random()*0.38)+"s";overlay.appendChild(light)}setTimeout(()=>overlay.remove(),2300)}
function getKanjiHint(){if(!currentQuestion)return"Tip unavailable.";const reading=decodeMojibakeText(currentQuestion.reading||"practice"),example=decodeMojibakeText(currentQuestion.example||"Try reading the word in context."),on=decodeMojibakeText(currentQuestion.on||"-"),kun=decodeMojibakeText(currentQuestion.kun||"-"),note=decodeMojibakeText(currentQuestion.note||"Look for this kanji inside useful everyday words.");if(trainerMode==="words")return `Mnemonic: ${note} · Reading clue: ${reading} · Usage: ${example}`;return `Mnemonic: ${note} · On: ${on} · Kun: ${kun} · Usage: ${example}`}
function toggleKanjiInfo(){const meta=document.getElementById("kanjiMeta"),info=document.getElementById("kanjiInfo"),feedback=document.getElementById("jlptFeedback"),tipBtn=document.querySelector(".kanji-info-btn");if(!meta||!info||!currentQuestion)return;if(info.classList.contains("hidden")){if(!hintUsedThisQuestion){hintUsedThisQuestion=true;if((jlptAdventure.freeHints||0)>0){jlptAdventure.freeHints--;saveJlptAdventure();if(feedback)feedback.textContent="Lost Scroll used: free hint revealed."}else{applyHintPenalty();spawnDamePenaltyAnimation();if(feedback)feedback.textContent="\u3060\u3081! Hint used: -3 YEN - 5 EXP. Now try the answer."}}updateJlptCompanion("hint");meta.classList.remove("locked");meta.textContent="Hint revealed";info.textContent=getKanjiHint();info.classList.remove("hidden");if(tipBtn)tipBtn.textContent="Hide Hint"}else{info.classList.add("hidden");if(tipBtn)tipBtn.textContent="💡 Hint"}}
function addReviewCard(card){if(!card||!card.q)return;reviewQueue=[card,...reviewQueue.filter(item=>item.q!==card.q)].slice(0,24);localStorage.setItem("tasewakaiJlptReviewQueue",JSON.stringify(reviewQueue))}
function removeReviewCard(card){if(trainerMode!=="review"||!card)return;reviewQueue=reviewQueue.filter(item=>item.q!==card.q);localStorage.setItem("tasewakaiJlptReviewQueue",JSON.stringify(reviewQueue))}
function spawnRewardBurst(rewardInfo,boss=false){const panel=document.querySelector(".jlpt-panel");if(!panel||!rewardInfo)return;const burst=document.createElement("div");burst.className="reward-burst"+(boss?" boss-reward":"");burst.innerHTML=`<span>+${rewardInfo.expGain} EXP</span><strong>+${rewardInfo.yenGain} YEN</strong>`;panel.appendChild(burst);for(let i=0;i<(boss?18:10);i++){const coin=document.createElement("i");coin.style.left=(48+Math.random()*18-9)+"%";coin.style.top=(48+Math.random()*12-6)+"%";coin.style.setProperty("--spark-x",(Math.random()*120-60)+"px");coin.style.setProperty("--spark-y",(-42-Math.random()*72)+"px");coin.style.animationDelay=(Math.random()*0.22)+"s";burst.appendChild(coin)}setTimeout(()=>burst.remove(),1150)}


/* === pre-alpha 0.4 beta map access patch === */
const BETA_MAP_CODE = "ksdfgb23jw4hg239";

function hasBetaAccess() {
  return localStorage.getItem("tasewakaiBetaMapAccess") === "true";
}

function renderBetaGate() {
  const gate = document.getElementById("mapGate");
  const unlocked = document.getElementById("mapUnlocked");
  if (!gate || !unlocked) return;

  if (hasBetaAccess()) {
    gate.classList.add("hidden");
    unlocked.classList.remove("hidden");
    unlocked.classList.add("map-access-flash");
    setTimeout(() => unlocked.classList.remove("map-access-flash"), 800);
    createMapPins();
  } else {
    gate.classList.remove("hidden");
    unlocked.classList.add("hidden");
    setAccessMessage("Beta testers only - key required.","construction","");
  }
}

function tryBetaCode() {
  const input = document.getElementById("betaCodeInput");
  const message = document.getElementById("betaAccessMessage");
  const lockStage = document.getElementById("lockStage");
  const lockIcon = document.getElementById("lockMainIcon");
  const code = (input?.value || "").trim();

  lockStage.classList.remove("unlocking", "denied");
  void lockStage.offsetWidth;

  if (code === BETA_MAP_CODE) {
    setAccessMessage("Access granted. Beta map unlocked.","success","ok");
    lockIcon.src = "assets/icon-unlock.png";
    lockStage.classList.add("unlocking");
    localStorage.setItem("tasewakaiBetaMapAccess", "true");
    spawnUnlockPetals();

    setTimeout(() => {
      renderBetaGate();
    }, 950);
  } else {
    setAccessMessage("Wrong beta key. Access denied.","blocked","bad");
    lockIcon.src = "assets/icon-lock-cancel.png";
    lockStage.classList.add("denied");
    setTimeout(() => {
      lockIcon.src = "assets/icon-lock-password.png";
    }, 900);
  }
}

function lockBetaMap() {
  localStorage.removeItem("tasewakaiBetaMapAccess");
  const input = document.getElementById("betaCodeInput");
  if (input) input.value = "";
  renderBetaGate();
}

function spawnUnlockPetals() {
  const symbols = ["\u273f", "\u2740", "\u2726", "\u685c", "\u2727"];
  for (let i = 0; i < 34; i++) {
    const petal = document.createElement("div");
    petal.className = "unlock-burst";
    petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    petal.style.left = (50 + (Math.random() * 34 - 17)) + "vw";
    petal.style.top = (42 + (Math.random() * 20 - 10)) + "vh";
    petal.style.animationDelay = (Math.random() * 0.35) + "s";
    petal.style.fontSize = (Math.random() * 12 + 14) + "px";
    document.body.appendChild(petal);
    setTimeout(() => petal.remove(), 1500);
  }
}

document.addEventListener("keydown", (event) => {
  const betaInput = document.getElementById("betaCodeInput");
  if (event.key === "Enter" && document.activeElement === betaInput) {
    tryBetaCode();
  }
});


/* === pre-alpha 0.5 wind particle patch === */
const windParticleLayer = document.getElementById("windParticleLayer");
let windState = { x: 1, y: -0.12, speed: 1, angle: -7 };

function updateWindState() {
  if (!windParticleLayer) return;

  const t = Date.now() / 1000;
  const direction = Math.sin(t * 0.16) > -0.72 ? 1 : -1;
  const vertical = Math.sin(t * 0.31) * 0.24 - 0.08;
  const strength = 0.82 + Math.sin(t * 0.23 + 1.4) * 0.22;
  const distanceX = (window.innerWidth + 220) * direction * strength;
  const distanceY = window.innerHeight * vertical;
  const angle = Math.atan2(distanceY, distanceX) * 180 / Math.PI;

  windState = { x: direction, y: vertical, speed: strength, angle };
  windParticleLayer.style.setProperty("--wind-x", `${distanceX}px`);
  windParticleLayer.style.setProperty("--wind-y", `${distanceY}px`);
  windParticleLayer.style.setProperty("--wind-x-14", `${distanceX * 0.14}px`);
  windParticleLayer.style.setProperty("--wind-y-14", `${distanceY * 0.14}px`);
  windParticleLayer.style.setProperty("--wind-x-36", `${distanceX * 0.36}px`);
  windParticleLayer.style.setProperty("--wind-y-36", `${distanceY * 0.36}px`);
  windParticleLayer.style.setProperty("--wind-x-68", `${distanceX * 0.68}px`);
  windParticleLayer.style.setProperty("--wind-y-68", `${distanceY * 0.68}px`);
  windParticleLayer.style.setProperty("--wind-tilt", `${angle}deg`);
}

function spawnWindPetal() {
  if (!windParticleLayer) return;

  const petal = document.createElement("div");
  const size = Math.random() * 12 + 10;
  const duration = (Math.random() * 3.8 + 6.6) / windState.speed;
  const enteringFromLeft = windState.x > 0;

  petal.className = `wind-petal ${Math.random() > 0.55 ? "petal-soft" : ""} ${size < 16 ? "petal-small" : ""}`;
  petal.style.top = (Math.random() * 82 + 5) + "vh";
  petal.style.left = enteringFromLeft ? "-9vw" : "109vw";
  petal.style.setProperty("--petal-size", `${size}px`);
  petal.style.setProperty("--petal-height", `${size * 1.28}px`);
  petal.style.setProperty("--start-rot", `${Math.random() * 360}deg`);
  petal.style.setProperty("--spin", `${(windState.x > 0 ? 1 : -1) * (Math.random() * 260 + 480)}deg`);
  petal.style.setProperty("--flutter", `${Math.random() * 34 + 14}px`);
  petal.style.setProperty("--flutter-soft", `${Math.random() * 18 + 8}px`);
  petal.style.animationDuration = duration + "s";
  petal.style.animationDelay = (Math.random() * 0.35) + "s";

  windParticleLayer.appendChild(petal);
  setTimeout(() => petal.remove(), 12000);
}

function spawnWindLine() {
  if (!windParticleLayer || window.innerWidth <= 820) return;

  const line = document.createElement("div");
  line.className = "wind-streak";
  line.style.top = (Math.random() * 72 + 12) + "vh";
  line.style.left = windState.x > 0 ? "-10vw" : "110vw";
  line.style.animationDuration = ((Math.random() * 2.5 + 4.5) / windState.speed) + "s";

  windParticleLayer.appendChild(line);
  setTimeout(() => line.remove(), 8000);
}

updateWindState();
setInterval(updateWindState, 180);
setInterval(spawnWindPetal, 950);
setInterval(spawnWindLine, 1300);

function updateFurinWind() {
  const scene = document.getElementById("furinScene");
  if (!scene) return;
  const sway = Math.min(7.2, Math.max(2.4, 3.2 + windState.speed * 2.1));
  const paper = Math.min(12, Math.max(5, 5.8 + Math.abs(windState.y) * 18 + windState.speed * 2.4));
  scene.style.setProperty("--furin-wind-x", windState.x);
  document.querySelectorAll(".furin").forEach((chime, index) => {
    const offset = index % 2 ? 1.15 : .82;
    chime.style.setProperty("--sway", `${sway * windState.x * offset}deg`);
    chime.style.setProperty("--paper-sway", `${paper * windState.x * (index % 2 ? .86 : 1.08)}deg`);
  });
}

function spawnFurinBreeze() {
  const scene = document.getElementById("furinScene");
  if (!scene || window.innerWidth <= 520) return;
  const chimes = [...scene.querySelectorAll(".furin")];
  if (!chimes.length) return;
  const chime = chimes[Math.floor(Math.random() * chimes.length)];
  const box = chime.getBoundingClientRect();
  const breeze = document.createElement("span");
  breeze.className = "furin-breeze";
  breeze.style.left = (box.left + box.width * .45) + "px";
  breeze.style.top = (box.top + 72 + Math.random() * 34) + "px";
  breeze.style.setProperty("--breeze-x", `${windState.x * (120 + Math.random() * 86)}px`);
  breeze.style.setProperty("--breeze-y", `${windState.y * 70 + (Math.random() * 18 - 6)}px`);
  breeze.style.setProperty("--breeze-angle", `${windState.angle}deg`);
  document.body.appendChild(breeze);
  if (Math.random() > .35) spawnWindPetal();
  setTimeout(() => breeze.remove(), 1700);
}

updateFurinWind();
setInterval(updateFurinWind, 420);
setInterval(spawnFurinBreeze, 4200);

