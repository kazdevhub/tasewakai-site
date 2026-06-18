const guideModal=document.getElementById("guideModal"),guideTransition=document.getElementById("guideTransition"),supportModal=document.getElementById("supportModal"),storeModal=document.getElementById("storeModal"),toolModal=document.getElementById("toolModal"),sakuraLayer=document.getElementById("sakuraLayer"),cursorSakuraLayer=document.getElementById("cursorSakuraLayer"),preloader=document.getElementById("preloader");
const statusIcons={ready:"assets/status-note.png",success:"assets/status-success.png",warning:"assets/status-warning.png",error:"assets/status-error.png",blocked:"assets/status-blocked.png",construction:"assets/status-construction.png"};
const kanaQuestions=[{"q": "あ", "a": "a"}, {"q": "い", "a": "i"}, {"q": "う", "a": "u"}, {"q": "え", "a": "e"}, {"q": "お", "a": "o"}, {"q": "か", "a": "ka"}, {"q": "き", "a": "ki"}, {"q": "く", "a": "ku"}, {"q": "け", "a": "ke"}, {"q": "こ", "a": "ko"}, {"q": "さ", "a": "sa"}, {"q": "し", "a": "shi"}, {"q": "す", "a": "su"}, {"q": "せ", "a": "se"}, {"q": "そ", "a": "so"}, {"q": "た", "a": "ta"}, {"q": "ち", "a": "chi"}, {"q": "つ", "a": "tsu"}, {"q": "て", "a": "te"}, {"q": "と", "a": "to"}, {"q": "な", "a": "na"}, {"q": "に", "a": "ni"}, {"q": "ぬ", "a": "nu"}, {"q": "ね", "a": "ne"}, {"q": "の", "a": "no"}, {"q": "は", "a": "ha"}, {"q": "ひ", "a": "hi"}, {"q": "ふ", "a": "fu"}, {"q": "へ", "a": "he"}, {"q": "ほ", "a": "ho"}, {"q": "ま", "a": "ma"}, {"q": "み", "a": "mi"}, {"q": "む", "a": "mu"}, {"q": "め", "a": "me"}, {"q": "も", "a": "mo"}, {"q": "や", "a": "ya"}, {"q": "ゆ", "a": "yu"}, {"q": "よ", "a": "yo"}, {"q": "ら", "a": "ra"}, {"q": "り", "a": "ri"}, {"q": "る", "a": "ru"}, {"q": "れ", "a": "re"}, {"q": "ろ", "a": "ro"}, {"q": "わ", "a": "wa"}, {"q": "を", "a": "wo"}, {"q": "ん", "a": "n"}];
const kanjiQuestions=[{"q": "日", "a": "sun / day"}, {"q": "月", "a": "moon / month"}, {"q": "火", "a": "fire"}, {"q": "水", "a": "water"}, {"q": "木", "a": "tree"}, {"q": "金", "a": "gold / money"}, {"q": "土", "a": "earth / soil"}, {"q": "人", "a": "person"}, {"q": "山", "a": "mountain"}, {"q": "川", "a": "river"}, {"q": "田", "a": "rice field"}, {"q": "口", "a": "mouth"}, {"q": "目", "a": "eye"}, {"q": "耳", "a": "ear"}, {"q": "手", "a": "hand"}, {"q": "足", "a": "foot"}, {"q": "力", "a": "power"}, {"q": "男", "a": "man"}, {"q": "女", "a": "woman"}, {"q": "子", "a": "child"}, {"q": "学", "a": "study"}, {"q": "生", "a": "life / student"}, {"q": "先", "a": "previous / ahead"}, {"q": "大", "a": "big"}, {"q": "小", "a": "small"}, {"q": "中", "a": "middle"}, {"q": "上", "a": "up"}, {"q": "下", "a": "down"}, {"q": "左", "a": "left"}, {"q": "右", "a": "right"}, {"q": "一", "a": "one"}, {"q": "二", "a": "two"}, {"q": "三", "a": "three"}];
const wordQuestions=[{"q": "こんにちは", "a": "hello"}, {"q": "ありがとう", "a": "thank you"}, {"q": "日本", "a": "Japan"}, {"q": "学生", "a": "student"}, {"q": "先生", "a": "teacher"}, {"q": "学校", "a": "school"}, {"q": "水", "a": "water"}, {"q": "火曜日", "a": "Tuesday"}, {"q": "今日", "a": "today"}, {"q": "明日", "a": "tomorrow"}, {"q": "昨日", "a": "yesterday"}, {"q": "友達", "a": "friend"}, {"q": "犬", "a": "dog"}, {"q": "猫", "a": "cat"}, {"q": "本", "a": "book"}, {"q": "車", "a": "car"}, {"q": "電車", "a": "train"}, {"q": "駅", "a": "station"}, {"q": "食べる", "a": "to eat"}, {"q": "飲む", "a": "to drink"}, {"q": "行く", "a": "to go"}, {"q": "見る", "a": "to see"}, {"q": "聞く", "a": "to listen"}, {"q": "話す", "a": "to speak"}];
const jlptDeck={
  n5:[
    {q:"日",a:"sun / day",on:"ニチ・ジツ",kun:"ひ・か",example:"日本 / にほん / Japan",note:"One of the first kanji learners meet. It appears in dates, days, and Japan itself."},
    {q:"月",a:"moon / month",on:"ゲツ・ガツ",kun:"つき",example:"月曜日 / げつようび / Monday",note:"Used for both the moon and calendar months, so it appears constantly in schedules."},
    {q:"人",a:"person",on:"ジン・ニン",kun:"ひと",example:"日本人 / にほんじん / Japanese person",note:"A core kanji for people, nationality, and human-related words."},
    {q:"山",a:"mountain",on:"サン",kun:"やま",example:"富士山 / ふじさん / Mt. Fuji",note:"Simple shape, huge usefulness. It appears in place names everywhere."},
    {q:"川",a:"river",on:"セン",kun:"かわ",example:"川口 / かわぐち / river mouth",note:"Often used in place names and geography."},
    {q:"火",a:"fire",on:"カ",kun:"ひ",example:"火曜日 / かようび / Tuesday",note:"Part of the weekday cycle and many fire/heat words."},
    {q:"水",a:"water",on:"スイ",kun:"みず",example:"水曜日 / すいようび / Wednesday",note:"A basic nature kanji that appears in drinks, water, and weekday names."},
    {q:"木",a:"tree / wood",on:"モク・ボク",kun:"き",example:"木曜日 / もくようび / Thursday",note:"Used for trees, wood, and Thursday."},
    {q:"金",a:"gold / money",on:"キン・コン",kun:"かね",example:"金曜日 / きんようび / Friday",note:"Important for money, metal, gold, and Friday."},
    {q:"土",a:"earth / soil",on:"ド・ト",kun:"つち",example:"土曜日 / どようび / Saturday",note:"Appears in soil, land, and Saturday."},
    {q:"学",a:"study",on:"ガク",kun:"まなぶ",example:"学生 / がくせい / student",note:"A must-know school and learning kanji."},
    {q:"生",a:"life / birth",on:"セイ・ショウ",kun:"いきる・うまれる",example:"先生 / せんせい / teacher",note:"Very flexible: life, birth, student, fresh, and more."}
  ],
  n4:[
    {q:"会",a:"meet / association",on:"カイ",kun:"あう",example:"会社 / かいしゃ / company",note:"Useful for meetings, groups, and companies."},
    {q:"社",a:"company / shrine",on:"シャ",kun:"やしろ",example:"会社 / かいしゃ / company",note:"Often appears in work and organization words."},
    {q:"店",a:"shop",on:"テン",kun:"みせ",example:"店員 / てんいん / shop clerk",note:"A practical kanji for stores and shopping."},
    {q:"駅",a:"station",on:"エキ",kun:"-",example:"東京駅 / とうきょうえき / Tokyo Station",note:"Essential for travel in Japan."},
    {q:"電",a:"electricity",on:"デン",kun:"-",example:"電車 / でんしゃ / train",note:"Used in trains, phones, electricity, and electronics."},
    {q:"車",a:"car / vehicle",on:"シャ",kun:"くるま",example:"電車 / でんしゃ / train",note:"Vehicle kanji used in train, bicycle, and car words."},
    {q:"買",a:"buy",on:"バイ",kun:"かう",example:"買い物 / かいもの / shopping",note:"One of the most useful daily-life action kanji."},
    {q:"売",a:"sell",on:"バイ",kun:"うる",example:"売店 / ばいてん / stand / kiosk",note:"Often paired mentally with buy."},
    {q:"族",a:"family / tribe",on:"ゾク",kun:"-",example:"家族 / かぞく / family",note:"Shows up in family and group identity words."},
    {q:"旅",a:"travel",on:"リョ",kun:"たび",example:"旅行 / りょこう / trip",note:"Core travel kanji."},
    {q:"料",a:"fee / material",on:"リョウ",kun:"-",example:"料理 / りょうり / cooking",note:"Appears in fees, materials, and cooking."},
    {q:"理",a:"reason / logic",on:"リ",kun:"-",example:"料理 / りょうり / cooking",note:"Used in reason, science, and management words."}
  ],
  n3:[
    {q:"経験",a:"experience",on:"ケイケン",kun:"-",example:"経験がある / けいけんがある / to have experience",note:"Common in work, life stories, and introductions."},
    {q:"環境",a:"environment",on:"カンキョウ",kun:"-",example:"自然環境 / しぜんかんきょう / natural environment",note:"Useful for news, school essays, and society topics."},
    {q:"政治",a:"politics",on:"セイジ",kun:"-",example:"政治家 / せいじか / politician",note:"A news and society word built from rule/governance kanji."},
    {q:"経済",a:"economy",on:"ケイザイ",kun:"-",example:"日本経済 / にほんけいざい / Japanese economy",note:"Important for news and business language."},
    {q:"文化",a:"culture",on:"ブンカ",kun:"-",example:"日本文化 / にほんぶんか / Japanese culture",note:"A core N3-level word for society and identity."},
    {q:"歴史",a:"history",on:"レキシ",kun:"-",example:"歴史を学ぶ / れきしをまなぶ / study history",note:"Useful in school, travel, and culture contexts."},
    {q:"原因",a:"cause / reason",on:"ゲンイン",kun:"-",example:"事故の原因 / じこのげんいん / cause of an accident",note:"Very common for explanations and news."},
    {q:"結果",a:"result",on:"ケッカ",kun:"-",example:"試験の結果 / しけんのけっか / exam result",note:"Pairs naturally with cause, effort, and tests."},
    {q:"努力",a:"effort",on:"ドリョク",kun:"-",example:"努力する / どりょくする / to make an effort",note:"A motivational and school/work-friendly N3 word."},
    {q:"関係",a:"relationship / connection",on:"カンケイ",kun:"-",example:"友人関係 / ゆうじんかんけい / friendship relationship",note:"Useful for people, business, and abstract connections."},
    {q:"連絡",a:"contact / communication",on:"レンラク",kun:"-",example:"連絡する / れんらくする / to contact",note:"Daily practical word for messaging someone."},
    {q:"準備",a:"preparation",on:"ジュンビ",kun:"-",example:"準備できた / じゅんびできた / ready",note:"Common for events, school, travel, and work."}
  ]
};
const jlptWordDeck=[
  {q:"日本語",a:"Japanese language",reading:"にほんご",example:"日本語を勉強しています。"},
  {q:"旅行",a:"trip / travel",reading:"りょこう",example:"京都へ旅行します。"},
  {q:"約束",a:"promise / appointment",reading:"やくそく",example:"友達と約束があります。"},
  {q:"説明",a:"explanation",reading:"せつめい",example:"先生が説明しました。"},
  {q:"必要",a:"necessary",reading:"ひつよう",example:"練習が必要です。"},
  {q:"安全",a:"safe / safety",reading:"あんぜん",example:"安全に帰ってください。"},
  {q:"自由",a:"freedom",reading:"じゆう",example:"自由な時間があります。"},
  {q:"将来",a:"future",reading:"しょうらい",example:"将来の夢は何ですか。"}
];
const prefPins=[
  {romaji:"Hokkaidō",jp:"北海道",cities:"Sapporo, Asahikawa, Hakodate",x:67,y:12},
  {romaji:"Aomori",jp:"青森",cities:"Aomori, Hirosaki, Hachinohe",x:60,y:38},
  {romaji:"Iwate",jp:"岩手",cities:"Morioka, Ichinoseki, Hanamaki",x:64,y:42},
  {romaji:"Miyagi",jp:"宮城",cities:"Sendai, Ishinomaki, Ōsaki",x:63,y:48},
  {romaji:"Akita",jp:"秋田",cities:"Akita, Yokote, Daisen",x:57,y:41},
  {romaji:"Yamagata",jp:"山形",cities:"Yamagata, Tsuruoka, Sakata",x:58,y:47},
  {romaji:"Fukushima",jp:"福島",cities:"Fukushima, Kōriyama, Iwaki",x:60,y:53},
  {romaji:"Ibaraki",jp:"茨城",cities:"Mito, Tsukuba, Hitachi",x:62,y:59},
  {romaji:"Tochigi",jp:"栃木",cities:"Utsunomiya, Oyama, Nikkō",x:58,y:56},
  {romaji:"Gunma",jp:"群馬",cities:"Maebashi, Takasaki, Isesaki",x:54,y:55},
  {romaji:"Saitama",jp:"埼玉",cities:"Saitama, Kawaguchi, Kawagoe",x:56,y:60},
  {romaji:"Chiba",jp:"千葉",cities:"Chiba, Funabashi, Kashiwa",x:62,y:63},
  {romaji:"Tokyo",jp:"東京",cities:"Tokyo, Hachiōji, Machida",x:57,y:63},
  {romaji:"Kanagawa",jp:"神奈川",cities:"Yokohama, Kawasaki, Sagamihara",x:56,y:66},
  {romaji:"Niigata",jp:"新潟",cities:"Niigata, Nagaoka, Jōetsu",x:51,y:51},
  {romaji:"Toyama",jp:"富山",cities:"Toyama, Takaoka, Uozu",x:44,y:57},
  {romaji:"Ishikawa",jp:"石川",cities:"Kanazawa, Komatsu, Hakusan",x:41,y:60},
  {romaji:"Fukui",jp:"福井",cities:"Fukui, Sabae, Tsuruga",x:37,y:64},
  {romaji:"Yamanashi",jp:"山梨",cities:"Kōfu, Kai, Fujiyoshida",x:52,y:64},
  {romaji:"Nagano",jp:"長野",cities:"Nagano, Matsumoto, Ueda",x:49,y:58},
  {romaji:"Gifu",jp:"岐阜",cities:"Gifu, Takayama, Ōgaki",x:42,y:63},
  {romaji:"Shizuoka",jp:"静岡",cities:"Shizuoka, Hamamatsu, Fuji",x:49,y:69},
  {romaji:"Aichi",jp:"愛知",cities:"Nagoya, Toyota, Toyohashi",x:43,y:69},
  {romaji:"Mie",jp:"三重",cities:"Tsu, Yokkaichi, Suzuka",x:40,y:73},
  {romaji:"Shiga",jp:"滋賀",cities:"Ōtsu, Hikone, Kusatsu",x:37,y:66},
  {romaji:"Kyoto",jp:"京都",cities:"Kyoto, Uji, Maizuru",x:33,y:66},
  {romaji:"Osaka",jp:"大阪",cities:"Osaka, Sakai, Higashiōsaka",x:32,y:70},
  {romaji:"Hyōgo",jp:"兵庫",cities:"Kobe, Himeji, Nishinomiya",x:27,y:67},
  {romaji:"Nara",jp:"奈良",cities:"Nara, Kashihara, Ikoma",x:35,y:71},
  {romaji:"Wakayama",jp:"和歌山",cities:"Wakayama, Tanabe, Hashimoto",x:33,y:76},
  {romaji:"Tottori",jp:"鳥取",cities:"Tottori, Yonago, Kurayoshi",x:24,y:64},
  {romaji:"Shimane",jp:"島根",cities:"Matsue, Izumo, Hamada",x:17,y:67},
  {romaji:"Okayama",jp:"岡山",cities:"Okayama, Kurashiki, Tsuyama",x:24,y:70},
  {romaji:"Hiroshima",jp:"広島",cities:"Hiroshima, Fukuyama, Kure",x:17,y:73},
  {romaji:"Yamaguchi",jp:"山口",cities:"Yamaguchi, Shimonoseki, Ube",x:11,y:76},
  {romaji:"Tokushima",jp:"徳島",cities:"Tokushima, Anan, Naruto",x:29,y:79},
  {romaji:"Kagawa",jp:"香川",cities:"Takamatsu, Marugame, Mitoyo",x:26,y:75},
  {romaji:"Ehime",jp:"愛媛",cities:"Matsuyama, Imabari, Uwajima",x:18,y:78},
  {romaji:"Kōchi",jp:"高知",cities:"Kōchi, Shimanto, Nankoku",x:22,y:83},
  {romaji:"Fukuoka",jp:"福岡",cities:"Fukuoka, Kitakyūshū, Kurume",x:9,y:78},
  {romaji:"Saga",jp:"佐賀",cities:"Saga, Karatsu, Tosu",x:6,y:82},
  {romaji:"Nagasaki",jp:"長崎",cities:"Nagasaki, Sasebo, Isahaya",x:4,y:86},
  {romaji:"Kumamoto",jp:"熊本",cities:"Kumamoto, Yatsushiro, Amakusa",x:9,y:87},
  {romaji:"Ōita",jp:"大分",cities:"Ōita, Beppu, Nakatsu",x:14,y:83},
  {romaji:"Miyazaki",jp:"宮崎",cities:"Miyazaki, Miyakonjō, Nobeoka",x:14,y:91},
  {romaji:"Kagoshima",jp:"鹿児島",cities:"Kagoshima, Kirishima, Kanoya",x:8,y:94},
  {romaji:"Okinawa",jp:"沖縄",cities:"Naha, Okinawa City, Uruma",x:76,y:78}
];
const popularCityPins=[
  {name:"Sapporo",jp:"札幌",pref:"Hokkaidō",x:67,y:12,note:"Popular northern city known for snow, food, and winter festivals."},
  {name:"Sendai",jp:"仙台",pref:"Miyagi",x:63,y:48,note:"Major Tōhoku city with easy access to culture, food, and coastal trips."},
  {name:"Tokyo",jp:"東京",pref:"Tokyo",x:57,y:63,note:"Japan's capital and the biggest culture, travel, shopping, and business hub."},
  {name:"Yokohama",jp:"横浜",pref:"Kanagawa",x:56,y:66,note:"Popular port city next to Tokyo with waterfront areas and Chinatown."},
  {name:"Nagoya",jp:"名古屋",pref:"Aichi",x:43,y:69,note:"Large central Japan city known for transport, food, and industry."},
  {name:"Kyoto",jp:"京都",pref:"Kyoto",x:33,y:66,note:"Historic city famous for temples, shrines, gardens, and traditional streets."},
  {name:"Osaka",jp:"大阪",pref:"Osaka",x:32,y:70,note:"Popular Kansai city known for food, nightlife, shopping, and comedy culture."},
  {name:"Kobe",jp:"神戸",pref:"Hyōgo",x:27,y:68,note:"Port city near Osaka known for harbor views, food, and city-mountain scenery."},
  {name:"Hiroshima",jp:"広島",pref:"Hiroshima",x:17,y:73,note:"Western Japan city known for history, food, and access to Miyajima."},
  {name:"Fukuoka",jp:"福岡",pref:"Fukuoka",x:9,y:78,note:"Popular Kyūshū city known for ramen, shopping, nightlife, and airport access."},
  {name:"Naha",jp:"那覇",pref:"Okinawa",x:76,y:78,note:"Main Okinawa city and a common starting point for island travel."}
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
  Hokkaidō:"Japan's northernmost prefecture, known for wide nature, snow, seafood, and Sapporo.",
  Tokyo:"Japan's capital prefecture and one of the country's main culture, business, and travel hubs.",
  Kyoto:"Historic Kansai prefecture known for temples, shrines, traditional streets, and Kyoto city.",
  Osaka:"Urban Kansai prefecture known for food, shopping, entertainment, and Osaka city.",
  Hiroshima:"Western Japan prefecture known for Hiroshima city, history, food, and nearby island trips.",
  Fukuoka:"Kyūshū gateway prefecture known for Fukuoka city, ramen, shopping, and easy travel access.",
  Okinawa:"Southern island prefecture known for beaches, subtropical culture, and Naha."
};
const japanRegions=[
  {id:"hokkaido",romaji:"Hokkaido",kanji:"北海道",hiragana:"ほっかいどう",x:72,y:18,tilt:-4,prefectures:"Hokkaido",summary:"Japan's wide northern region, known for snow, open landscapes, seafood, and Ainu cultural roots.",history:"Hokkaido became formally developed as Japan's northern frontier during the Meiji period. Its older Ainu history, colder climate, and wide agricultural land give it a very different feeling from Honshu."},
  {id:"tohoku",romaji:"Tohoku",kanji:"東北",hiragana:"とうほく",x:63,y:47,tilt:5,prefectures:"Aomori, Iwate, Miyagi, Akita, Yamagata, Fukushima",summary:"Northern Honshu, famous for festivals, mountains, rice fields, hot springs, and deep seasonal changes.",history:"Tohoku was long seen as Japan's northern heartland, with powerful local clans, mountain faith, and farming traditions. Its festivals and dialects still carry a strong regional identity."},
  {id:"kanto",romaji:"Kanto",kanji:"関東",hiragana:"かんとう",x:63,y:68,tilt:-2,prefectures:"Tokyo, Kanagawa, Chiba, Saitama, Ibaraki, Tochigi, Gunma",summary:"Tokyo and its surrounding plains form one of Japan's busiest cultural and economic centers.",history:"Kanto grew around Edo, later Tokyo, and became the center of modern Japanese government, rail, media, and pop culture. It is where old shrine towns and megacity life sit side by side."},
  {id:"chubu",romaji:"Chubu",kanji:"中部",hiragana:"ちゅうぶ",x:50,y:65,tilt:4,prefectures:"Niigata, Toyama, Ishikawa, Fukui, Yamanashi, Nagano, Gifu, Shizuoka, Aichi",summary:"Central Japan, stretching from the Japan Alps to Nagoya, Mount Fuji, and coastal trade routes.",history:"Chubu links eastern and western Japan. Mountain provinces, castle towns, post roads, and industrial cities all meet here, making it one of Japan's most geographically varied regions."},
  {id:"kansai",romaji:"Kansai",kanji:"関西",hiragana:"かんさい",x:43,y:72,tilt:-5,prefectures:"Kyoto, Osaka, Hyogo, Nara, Wakayama, Shiga, Mie",summary:"Historic western center of Japan, known for Kyoto, Osaka, Nara, temples, food, and old capitals.",history:"Kansai held Japan's ancient capitals for centuries. Nara and Kyoto shaped court culture, Buddhism, architecture, and literature, while Osaka became a merchant city famous for food and trade."},
  {id:"chugoku",romaji:"Chugoku",kanji:"中国",hiragana:"ちゅうごく",x:29,y:71,tilt:3,prefectures:"Tottori, Shimane, Okayama, Hiroshima, Yamaguchi",summary:"Western Honshu, with coastal cities, islands, mountains, history, and routes toward Kyushu.",history:"Chugoku connected Japan to trade routes through the Seto Inland Sea. Hiroshima, old castle towns, and shrine islands give the region a mix of memory, maritime culture, and local pride."},
  {id:"shikoku",romaji:"Shikoku",kanji:"四国",hiragana:"しこく",x:35,y:80,tilt:-4,prefectures:"Tokushima, Kagawa, Ehime, Kochi",summary:"Japan's smallest main island, known for pilgrimage routes, udon, mountains, rivers, and coastlines.",history:"Shikoku is famous for the 88-temple pilgrimage linked to Kukai. Its smaller scale, rugged terrain, and island culture make it feel quieter and more traditional than Japan's huge urban regions."},
  {id:"kyushu",romaji:"Kyushu",kanji:"九州",hiragana:"きゅうしゅう",x:17,y:83,tilt:4,prefectures:"Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Kagoshima",summary:"Southwestern Japan, known for ramen, hot springs, volcanoes, port history, and early foreign exchange.",history:"Kyushu was one of Japan's major gateways to Asia and Europe. Nagasaki trade, volcanic landscapes, samurai domains, and lively cities like Fukuoka give the region a bold personality."},
  {id:"okinawa",romaji:"Okinawa",kanji:"沖縄",hiragana:"おきなわ",x:78,y:86,tilt:-2,prefectures:"Okinawa",summary:"Southern island region with Ryukyu heritage, subtropical beaches, music, food, and island history.",history:"Okinawa was once the Ryukyu Kingdom, a maritime culture with strong links across East and Southeast Asia. Its language, music, food, and history remain distinct within Japan."}
];
let regionScriptMode="romaji",activeRegionIndex=2;
const ECON_SECRET="tasewakai-pre-alpha-local-v03";
const storeItems=[
  {id:"dango",name:"Hanami Dango",price:120,img:"assets/store-dango.png",desc:"Spring practice treat.",rarity:"common"},
  {id:"onigiri",name:"Cute Onigiri",price:150,img:"assets/store-onigiri-cute.png",desc:"Soft starter snack.",rarity:"common"},
  {id:"takoyaki",name:"Festival Takoyaki",price:240,img:"assets/store-takoyaki.png",desc:"Osaka street reward.",rarity:"rare"},
  {id:"ebi",name:"Ebi Sushi",price:280,img:"assets/store-ebi-premium.png",desc:"Premium sushi plate.",rarity:"rare"},
  {id:"ramen",name:"Ramen Bowl",price:360,img:"assets/store-ramen.png",desc:"Warm boss-round energy.",rarity:"rare"},
  {id:"onigiri_set",name:"Onigiri Set",price:420,img:"assets/store-onigiri-set.png",desc:"Study picnic pack.",rarity:"epic"},
  {id:"matcha_crepe",name:"Matcha Crepe",price:520,img:"assets/store-matcha-crepe.png",desc:"Sweet streak reward.",rarity:"epic"},
  {id:"bento",name:"Deluxe Bento",price:680,img:"assets/store-bento.png",desc:"Collector lunch box.",rarity:"legendary"},
  {id:"taiyaki",name:"Golden Taiyaki",price:760,img:"assets/store-taiyaki-rare.png",desc:"Festival legend snack.",rarity:"legendary"},
  {id:"nikuman",name:"Winter Nikuman",price:620,img:"assets/store-nikuman.png",desc:"Rare winter comfort.",rarity:"epic"}
];
let trainerMode="kana",currentQuestion=null,lockAnswer=false,mapLayerMode="regions",lastRewardAt=0,lastJlptQuestionKey="";
let jlptCorrectCount=Number(localStorage.getItem("tasewakaiJlptCorrectCount")||"0");
let reviewQueue=JSON.parse(localStorage.getItem("tasewakaiJlptReviewQueue")||"[]");
let progress=JSON.parse(localStorage.getItem("tasewakaiTrainerProgress")||"{}");
progress.name??="Guest Learner";progress.points??=0;progress.exp??=0;progress.level??=1;progress.yen??=0;progress.streak??=0;progress.lastNameChange??=0;progress.nameLogs??=[];progress.economyHash??="";progress.triedLearning??=false;progress.inventory??={};progress.nameBonusClaimed??=false;
let leaderboard=JSON.parse(localStorage.getItem("tasewakaiTrainerLeaderboard")||"[]");
let catTrainerPick=Math.random()>.5?"n5":"trainer",lastHudSakuraTier="";
window.addEventListener("load",()=>{setTimeout(()=>preloader.classList.add("hidden"),900);createMapPins();loadTrainer();animateCounters();initMilestoneBar();if(localStorage.getItem("tasewakaiGuideHidden")!=="true")setTimeout(openGuide,1300);setTimeout(showTrainerCatOnce,2600)});
function economyHash(p=progress){const raw=[p.name,p.points,p.exp,p.level,p.yen,p.streak,p.lastNameChange,ECON_SECRET].join("|");let h=0;for(let i=0;i<raw.length;i++)h=((h<<5)-h+raw.charCodeAt(i))|0;return String(h)}
function verifyEconomy(){if(!progress.economyHash){progress.economyHash=economyHash();saveProgress();return true}return progress.economyHash===economyHash()}
function sealEconomy(){progress.economyHash=economyHash()}
function openGuide(){guideTransition.classList.add("active");setTimeout(()=>{guideTransition.classList.remove("active");guideModal.classList.add("active")},780)}function closeGuide(){guideModal.classList.remove("active")}function hideGuideForever(){localStorage.setItem("tasewakaiGuideHidden","true");closeGuide()}function openSupport(){supportModal.classList.add("active")}function closeSupport(){supportModal.classList.remove("active")}
function openTool(tool){toolModal.classList.add("active");document.querySelectorAll(".tool-view").forEach(v=>v.classList.add("hidden"));if(tool==="trainer"){markLearningTried();document.getElementById("trainerTool").classList.remove("hidden");setTrainerMode("kana")}if(tool==="n5"){markLearningTried();document.getElementById("n5Tool").classList.remove("hidden");mountN5Quiz();setTrainerMode("n5")}if(tool==="map"){document.getElementById("mapTool").classList.remove("hidden");renderBetaGate()}}function closeTool(){toolModal.classList.remove("active")}
[guideModal,supportModal,storeModal,toolModal].forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("active")}));document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeGuide();closeSupport();closeStore();closeTool();closeRegionScreen()}});
function triggerTeamBarrier(card){if(!card)return;card.classList.remove("barrier-active");void card.offsetWidth;card.classList.add("barrier-active");setTimeout(()=>card.classList.remove("barrier-active"),950)}
function triggerSpotlightBurst(card){if(!card)return;card.classList.remove("spotlight-burst");void card.offsetWidth;card.classList.add("spotlight-burst");setTimeout(()=>card.classList.remove("spotlight-burst"),850)}
function triggerFeatureBurst(event,card){if(!card)return;card.classList.remove("feature-clicked");void card.offsetWidth;card.classList.add("feature-clicked");const rect=card.getBoundingClientRect(),x=event.clientX-rect.left,y=event.clientY-rect.top,colors=["#ff3f91","#ffd27a","#42ffa7","#57b7ff","#9a66ff","#ffffff"];for(let i=0;i<18;i++){const spark=document.createElement("i");spark.className="feature-spark";const angle=(Math.PI*2/18)*i+Math.random()*0.34,dist=42+Math.random()*54;spark.style.left=x+"px";spark.style.top=y+"px";spark.style.setProperty("--spark-x",Math.cos(angle)*dist+"px");spark.style.setProperty("--spark-y",Math.sin(angle)*dist+"px");spark.style.setProperty("--spark-color",colors[i%colors.length]);spark.style.animationDelay=(Math.random()*0.08)+"s";card.appendChild(spark);setTimeout(()=>spark.remove(),760)}setTimeout(()=>card.classList.remove("feature-clicked"),520)}
function showTrainerCatOnce(){if(localStorage.getItem("tasewakaiTrainerCatSeen")==="true"||progress.triedLearning)return;if(guideModal?.classList.contains("active")){setTimeout(showTrainerCatOnce,2200);return}const helper=document.getElementById("trainerCatHelper"),text=document.getElementById("catPromptText");if(!helper||!text)return;catTrainerPick=Math.random()>.5?"n5":"trainer";text.textContent=catTrainerPick==="n5"?"Try one JLPT kanji card?":"Try one kana question?";helper.classList.remove("hidden")}
function dismissTrainerCat(){localStorage.setItem("tasewakaiTrainerCatSeen","true");document.getElementById("trainerCatHelper")?.classList.add("hidden")}
function openCatTrainerPick(){dismissTrainerCat();openTool(catTrainerPick)}
function copyDiscordTag(event,tag,button){event.stopPropagation();const done=()=>{button.classList.add("copied");button.textContent="Copied: "+tag;setTimeout(()=>{button.classList.remove("copied");button.textContent="Discord: "+tag},1300)};if(navigator.clipboard&&navigator.clipboard.writeText){navigator.clipboard.writeText(tag).then(done).catch(done)}else done()}
function createSakura(){const petal=document.createElement("img");const imgs=["assets/icon-fan.png","assets/icon-fishcake.png","assets/icon-onsen.png"];petal.className="sakura";petal.src=imgs[Math.floor(Math.random()*imgs.length)];petal.style.left=Math.random()*100+"vw";petal.style.width=Math.random()*14+20+"px";petal.style.animationDuration=Math.random()*5+7+"s";petal.style.opacity=Math.random()*.38+.18;sakuraLayer.appendChild(petal);setTimeout(()=>petal.remove(),13000)}setInterval(createSakura,760);
let lastCursorPetal=0;document.addEventListener("mousemove",e=>{if(window.innerWidth<=820)return;const now=Date.now();if(now-lastCursorPetal<60)return;lastCursorPetal=now;const p=document.createElement("div");p.className="cursor-petal";p.textContent=Math.random()>.5?"桜":"✿";p.style.left=e.clientX+(Math.random()*16-8)+"px";p.style.top=e.clientY+(Math.random()*16-8)+"px";p.style.fontSize=Math.random()*8+10+"px";cursorSakuraLayer.appendChild(p);setTimeout(()=>p.remove(),900)});
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")})},{threshold:.13});document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
function animateCounters(){document.querySelectorAll(".counter").forEach(counter=>{const target=Number(counter.dataset.target),start=performance.now(),duration=1250;function update(now){const p=Math.min((now-start)/duration,1),e=1-Math.pow(1-p,3);counter.textContent=Math.floor(e*target).toLocaleString();if(p<1)requestAnimationFrame(update);else counter.textContent=target.toLocaleString()}requestAnimationFrame(update)})}
function statusMarkup(type,text){const icon=statusIcons[type]||statusIcons.ready;return `<img class="status-inline-icon" src="${icon}" alt="" /> ${text}`}
function setHudSaveStatus(text,type="ready"){const status=document.getElementById("hudSaveStatus");if(status)status.innerHTML=statusMarkup(type,text)}
function setAccessMessage(text,type="construction",className=""){const message=document.getElementById("betaAccessMessage");if(!message)return;message.className=("access-message "+className).trim();message.innerHTML=statusMarkup(type,text)}
function initMilestoneBar(){const panel=document.querySelector(".milestone-panel");if(!panel)return;const current=Number(panel.dataset.current||0),goal=Number(panel.dataset.goal||1000),fill=document.getElementById("milestoneFill"),text=document.getElementById("milestoneText"),note=document.getElementById("milestoneNote"),pct=Math.min(current/goal*100,100);if(fill)requestAnimationFrame(()=>fill.style.width=pct+"%");if(text)text.textContent=`${current.toLocaleString()} / ${goal.toLocaleString()}`;if(note)note.textContent=current>=goal?"Milestone reached. Party mode unlocked.":"Update: 1000 member party meter added.";if(current>=goal)triggerMilestoneParty()}
function triggerMilestoneParty(){const panel=document.querySelector(".milestone-panel");if(panel){panel.classList.add("milestone-complete");setTimeout(()=>panel.classList.remove("milestone-complete"),2400)}for(let i=0;i<42;i++){const spark=document.createElement("div");spark.className="milestone-firework";spark.style.left=(12+Math.random()*76)+"vw";spark.style.top=(18+Math.random()*44)+"vh";spark.style.setProperty("--spark-x",(Math.random()*170-85)+"px");spark.style.setProperty("--spark-y",(Math.random()*150-75)+"px");spark.style.setProperty("--spark-color",["#ff3f91","#ffd27a","#42ffa7","#7b45ff","#ffffff"][Math.floor(Math.random()*5)]);spark.style.animationDelay=(Math.random()*0.55)+"s";document.body.appendChild(spark);setTimeout(()=>spark.remove(),1800)}}
function createMapPins(){const layer=document.getElementById("mapPinLayer");if(layer){layer.innerHTML="";prefPins.forEach(pref=>{const btn=document.createElement("button");btn.className="pref-pin";btn.style.left=pref.x+"%";btn.style.top=pref.y+"%";btn.innerHTML=`<span>${pref.jp}</span>`;btn.title=`${pref.romaji} / ${pref.jp}`;btn.onclick=()=>selectPref(pref,btn);layer.appendChild(btn)})}createCityPins();renderRegionPieces()}
function createCityPins(){const layer=document.getElementById("mapCityLayer");if(!layer)return;layer.innerHTML="";popularCityPins.forEach(city=>{const btn=document.createElement("button");btn.className="city-pin";btn.style.left=city.x+"%";btn.style.top=city.y+"%";btn.innerHTML=`<span>${city.name}</span>`;btn.title=`${city.name} / ${city.jp}`;btn.onclick=()=>selectCity(city,btn);layer.appendChild(btn)})}
function regionLabel(region){return region[regionScriptMode]||region.romaji}
function renderRegionPieces(){selectRegion(activeRegionIndex,false)}
function setRegionScript(mode){regionScriptMode=["romaji","kanji","hiragana"].includes(mode)?mode:"romaji";document.querySelectorAll(".map-script-toggle").forEach(btn=>btn.classList.toggle("active",btn.dataset.script===regionScriptMode));updateRegionPanel()}
function selectRegion(index,animate=true){activeRegionIndex=(index+japanRegions.length)%japanRegions.length;const stage=document.getElementById("regionStage"),art=document.getElementById("regionPieceArt"),region=japanRegions[activeRegionIndex];if(stage&&region){stage.className=`region-stage ${region.id}`}if(art&&animate){art.style.animation="none";void art.offsetWidth;art.style.animation=""}updateRegionPanel()}
function updateRegionPanel(){const region=japanRegions[activeRegionIndex];if(!region)return;const selectedType=document.getElementById("mapSelectedType"),name=document.getElementById("regionName"),native=document.getElementById("regionNative"),summary=document.getElementById("regionSummary"),prefectures=document.getElementById("regionPrefectures"),stageName=document.getElementById("regionStageName"),stageLabel=document.getElementById("regionStageLabel"),screenTitle=document.getElementById("regionScreenTitle"),screenNative=document.getElementById("regionScreenNative"),screenHistory=document.getElementById("regionScreenHistory");const label=regionLabel(region);if(selectedType)selectedType.textContent="Selected region";if(name)name.textContent=label;if(native)native.textContent=region.kanji;if(summary)summary.textContent=region.summary;if(prefectures)prefectures.textContent=region.prefectures;if(stageName)stageName.textContent=label;if(stageLabel)stageLabel.textContent=`${activeRegionIndex+1} / ${japanRegions.length}`;if(screenTitle)screenTitle.textContent=label;if(screenNative)screenNative.textContent=`${region.kanji} / ${region.hiragana}`;if(screenHistory)screenHistory.textContent=region.history}
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
function saveProgress(){sealEconomy();localStorage.setItem("tasewakaiTrainerProgress",JSON.stringify(progress));setHudSaveStatus("Auto-saved progress on this browser.","success")}
function updateTrainerUI(message=""){const nameDisplay=document.getElementById("trainerNameDisplay");if(!nameDisplay)return;document.getElementById("trainerNameDisplay").textContent=progress.name;document.getElementById("trainerPoints").textContent=progress.points;document.getElementById("trainerLevel").textContent=progress.level;document.getElementById("trainerExp").textContent=progress.exp;document.getElementById("trainerYen").textContent=progress.yen;document.getElementById("trainerStreak").textContent=progress.streak;const next=progress.level*100;document.getElementById("trainerNextExp").textContent=next;document.getElementById("expFill").style.width=Math.min(progress.exp/next*100,100)+"%";const lockInfo=document.getElementById("nameLockInfo");if(lockInfo){if(message)lockInfo.textContent=message;else if(!canChangeName())lockInfo.textContent=`Name locked. Change available in about ${timeUntilNameChange()} day(s).`;else lockInfo.textContent="Name can be changed once per week."}const sec=document.getElementById("securityStatus");if(sec){const ok=verifyEconomy();sec.className="security-note "+(ok?"ok":"warn");sec.innerHTML=ok?statusMarkup("success","Economy integrity: OK (local preview, not server-secure)."):statusMarkup("warning","Economy integrity: warning — local data may be edited.")}updatePlayerHud()}
function hasLearningProgress(){return !!(progress.triedLearning||progress.points>0||progress.yen>0||progress.exp>0||progress.level>1)}
function markLearningTried(){if(!progress.triedLearning){progress.triedLearning=true;saveProgress()}updatePlayerHud()}
function updatePlayerHud(){const hud=document.getElementById("playerHud");if(!hud)return;hud.classList.toggle("hidden",!hasLearningProgress());if(!hasLearningProgress())return;const next=progress.level*100,fill=Math.min(progress.exp/next*100,100),hudInput=document.getElementById("hudNameInput");document.getElementById("hudName").textContent=progress.name||"Guest Learner";if(hudInput&&document.activeElement!==hudInput)hudInput.value=progress.name==="Guest Learner"?"":progress.name;document.getElementById("hudLevel").textContent=progress.level;document.getElementById("hudYen").textContent=progress.yen;document.getElementById("hudExpFill").style.width=fill+"%";document.getElementById("hudExpText").textContent=`EXP ${progress.exp}/${next}`;const tier=getHudSakuraTier(),sakuraText=document.getElementById("hudSakuraText");if(sakuraText)sakuraText.textContent=tier==="storm"?"Sakura storm":tier==="heavy"?"Sakura III":tier==="medium"?"Sakura II":"Sakura I";const badge=document.getElementById("hudBadge"),badgeText=document.getElementById("hudBadgeText"),achievement=document.getElementById("hudAchievement");if(badge){badge.classList.toggle("hidden",progress.level<10)}if(achievement){achievement.classList.toggle("unlocked",progress.level>=10)}if(badgeText)badgeText.textContent=progress.level>=10?"Lv.10 verified learner":"Badge at Lv.10";const balance=document.getElementById("storeBalance");if(balance)balance.textContent=progress.yen;renderHudSakuraRain()}
function getHudSakuraTier(){if(progress.level>=20)return"storm";if(progress.level>=11)return"heavy";if(progress.level>=6)return"medium";if(progress.level>=1)return"light";return"none"}
function renderHudSakuraRain(){const layer=document.getElementById("hudSakuraRain");if(!layer)return;const tier=getHudSakuraTier();if(tier===lastHudSakuraTier)return;lastHudSakuraTier=tier;const counts={none:0,light:7,medium:14,heavy:20,storm:30};layer.innerHTML="";for(let i=0;i<counts[tier];i++){const petal=document.createElement("i");petal.style.left=Math.random()*100+"%";petal.style.setProperty("--fall-x",(Math.random()*70-35)+"px");petal.style.setProperty("--fall-rot",(120+Math.random()*260)+"deg");petal.style.animationDuration=(tier==="storm"?2.9+Math.random()*2.4:4.4+Math.random()*4.4)+"s";petal.style.animationDelay=(-Math.random()*5.5)+"s";petal.style.opacity=(.35+Math.random()*.55).toFixed(2);petal.style.transform=`scale(${(.62+Math.random()*.58).toFixed(2)})`;layer.appendChild(petal)}}
function openStore(){markLearningTried();renderStore();storeModal.classList.add("active")}
function closeStore(){storeModal.classList.remove("active")}
function renderStore(){const grid=document.getElementById("storeGrid"),inventory=document.getElementById("inventoryRow"),balance=document.getElementById("storeBalance");if(!grid||!inventory)return;if(balance)balance.textContent=progress.yen;grid.innerHTML=storeItems.map(item=>{const owned=progress.inventory[item.id]||0,canBuy=progress.yen>=item.price;return `<article class="store-item rarity-${item.rarity} ${canBuy?"":"locked"}"><img src="${item.img}" alt="" /><div><span class="rarity-chip">${item.rarity}</span><h3>${item.name}</h3><p>${item.desc}</p><strong>${item.price} YEN</strong><small>Owned: ${owned}</small></div><button class="btn ${canBuy?"join-btn":"ghost-btn"} small-btn" onclick="buyStoreItem('${item.id}')" ${canBuy?"":"disabled"}>Buy</button></article>`}).join("");const ownedItems=storeItems.filter(item=>progress.inventory[item.id]);inventory.innerHTML=ownedItems.length?ownedItems.map(item=>`<span class="rarity-${item.rarity}"><img src="${item.img}" alt="" /> ${item.name} ×${progress.inventory[item.id]}</span>`).join(""):"<small>No snacks yet. Train first, then treat yourself.</small>"}
function buyStoreItem(id){const item=storeItems.find(entry=>entry.id===id);if(!item||progress.yen<item.price)return;progress.yen-=item.price;progress.inventory[id]=(progress.inventory[id]||0)+1;saveProgress();updateTrainerUI();renderStore();const modal=document.querySelector(".store-modal");if(modal){modal.classList.remove("store-pop");void modal.offsetWidth;modal.classList.add("store-pop")}}
function reward(correct=true){progress.triedLearning=true;if(!correct){progress.streak=0;saveProgress();updateTrainerUI();return}const now=Date.now();if(now-lastRewardAt<450)return;lastRewardAt=now;progress.streak+=1;let yenGain=5,expGain=10;if(["kanji","words","n5"].includes(trainerMode)){yenGain=8;expGain=14}if(trainerMode==="n4"){yenGain=11;expGain=18}if(trainerMode==="n3"){yenGain=15;expGain=24}if(trainerMode==="review"){yenGain=10;expGain=18}if(currentQuestion?.boss){yenGain+=28;expGain+=36}if(progress.streak%5===0){yenGain+=10;expGain+=16}progress.yen+=yenGain;progress.points+=expGain;progress.exp+=expGain;let next=progress.level*100;while(progress.exp>=next){progress.exp-=next;progress.level++;next=progress.level*100;progress.yen+=25}saveProgress();updateLeaderboard();updateTrainerUI();return {yenGain,expGain}}
function resetTrainerProgress(){progress.points=0;progress.exp=0;progress.level=1;progress.yen=0;progress.streak=0;progress.inventory={};saveProgress();updateLeaderboard();updateTrainerUI();renderStore()}
function updateLeaderboard(force=false){const name=progress.name||"Guest Learner";if(force||name!=="Guest Learner"||progress.points>0||progress.yen>0){const existing=leaderboard.find(item=>item.name===name);if(existing){existing.points=Math.max(existing.points,progress.points);existing.level=Math.max(existing.level,progress.level);existing.yen=Math.max(existing.yen||0,progress.yen)}else leaderboard.push({name,points:progress.points,level:progress.level,yen:progress.yen});leaderboard=leaderboard.filter(item=>item.name&&item.name!=="Guest Learner").sort((a,b)=>(b.yen||0)-(a.yen||0)||b.points-a.points).slice(0,10);localStorage.setItem("tasewakaiTrainerLeaderboard",JSON.stringify(leaderboard))}renderLeaderboard()}
function toggleHudLeaderboard(){const board=document.getElementById("hudLeaderboard"),state=document.getElementById("hudLeaderboardState");if(!board)return;const hidden=board.classList.toggle("hidden");localStorage.setItem("tasewakaiHudLeaderboardHidden",String(hidden));if(state)state.textContent=hidden?"Off":"On"}
function syncHudLeaderboardState(){const hidden=localStorage.getItem("tasewakaiHudLeaderboardHidden")==="true",board=document.getElementById("hudLeaderboard"),state=document.getElementById("hudLeaderboardState");if(board)board.classList.toggle("hidden",hidden);if(state)state.textContent=hidden?"Off":"On"}
function renderLeaderboard(){syncHudLeaderboardState();const lists=document.querySelectorAll("#leaderboardList,#hudLeaderboardList");if(!lists.length)return;const html=leaderboard.length===0?"<p>No saved learners yet.</p>":leaderboard.map((item,i)=>`<div class="leaderboard-row"><span><strong>#${i+1}</strong> ${item.name}</span><span>${item.yen||0} YEN · Lv.${item.level}</span></div>`).join("");lists.forEach(list=>list.innerHTML=html)}
function renderNameLogs(){const list=document.getElementById("nameLogsList");if(!list)return;if(!progress.nameLogs||progress.nameLogs.length===0){list.innerHTML="<p>No name changes yet.</p>";return}list.innerHTML=progress.nameLogs.slice().reverse().map(log=>`<div class="leaderboard-row"><span><strong>${log.from}</strong> → <strong>${log.to}</strong></span><span>${log.date}</span></div>`).join("")}
function mountN5Quiz(){const mount=document.getElementById("n5QuizMount");if(!mount||mount.innerHTML.trim())return;mount.innerHTML=`<div id="jlptQuizView" class="jlpt-quiz-view"><div class="jlpt-hud"><div><p class="mini-label" id="jlptModeLabel">JLPT N5</p><strong id="jlptRoundLabel">Kanji card</strong></div><div class="jlpt-meter"><span>Boss</span><div><b id="jlptBossFill"></b></div></div></div><div class="jlpt-card"><button class="kanji-info-btn" onclick="toggleKanjiInfo()">i</button><div class="jlpt-card-orbit"><span>N5</span><span>N4</span><span>N3</span></div><div class="quiz-character jlpt-character" id="jlptPrompt">日</div><p class="quiz-question" id="jlptQuestion">Choose the correct meaning.</p><div class="kanji-meta" id="kanjiMeta"></div><div class="kanji-info hidden" id="kanjiInfo"></div></div><div class="answer-grid" id="jlptAnswerGrid"></div><p class="quiz-feedback" id="jlptFeedback">Pick an answer to begin.</p></div>`}
function isJlptMode(mode=trainerMode){return["n5","n4","n3","words","review"].includes(mode)}
function setTrainerMode(mode){trainerMode=mode;document.querySelectorAll(".tab").forEach(tab=>tab.classList.toggle("active",tab.dataset.mode===mode));const inJlpt=!!document.getElementById("n5Tool")&&!document.getElementById("n5Tool").classList.contains("hidden");const quizView=document.getElementById(inJlpt?"jlptQuizView":"quizView"),leaderboardView=document.getElementById(inJlpt?"jlptLeaderboardView":"leaderboardView"),logsView=document.getElementById("logsView");if(quizView)quizView.classList.add("hidden");if(leaderboardView)leaderboardView.classList.add("hidden");if(logsView)logsView.classList.add("hidden");if(mode==="leaderboard"){if(leaderboardView)leaderboardView.classList.remove("hidden");renderLeaderboard();return}if(mode==="logs"){if(logsView)logsView.classList.remove("hidden");renderNameLogs();return}if(quizView)quizView.classList.remove("hidden");nextQuestion()}
function getQuestionPool(){if(trainerMode==="n5")return jlptDeck.n5;if(trainerMode==="n4")return jlptDeck.n4;if(trainerMode==="n3")return jlptDeck.n3;if(trainerMode==="review")return reviewQueue.length?reviewQueue:jlptDeck.n5;if(trainerMode==="words")return jlptWordDeck;if(trainerMode==="kanji")return kanjiQuestions;return kanaQuestions}
function nextQuestion(){lockAnswer=false;if(isJlptMode())return nextJlptQuestion();const pool=getQuestionPool();currentQuestion=pool[Math.floor(Math.random()*pool.length)];document.getElementById("quizModeLabel").textContent="Kana Trainer";document.getElementById("quizPrompt").textContent=currentQuestion.q;document.getElementById("quizQuestion").textContent="Choose the correct reading.";document.getElementById("quizFeedback").textContent="Pick the correct answer.";const answers=createAnswers(pool,currentQuestion.a),grid=document.getElementById("answerGrid");grid.innerHTML="";answers.forEach(answer=>{const btn=document.createElement("button");btn.className="answer-btn";btn.textContent=answer;btn.onclick=()=>checkAnswer(btn,answer);grid.appendChild(btn)})}
function nextJlptQuestion(){const pool=getQuestionPool(),bossReady=trainerMode!=="words"&&trainerMode!=="review"&&jlptCorrectCount>0&&jlptCorrectCount%10===0;let picked=pool[Math.floor(Math.random()*pool.length)];if(pool.length>1){let guard=0;while(picked.q===lastJlptQuestionKey&&guard<8){picked=pool[Math.floor(Math.random()*pool.length)];guard++}}lastJlptQuestionKey=picked.q;currentQuestion={...picked,boss:bossReady};const level=trainerMode==="review"?"Review":trainerMode==="words"?"Words":trainerMode.toUpperCase();document.getElementById("jlptModeLabel").textContent=`JLPT ${level}`;document.getElementById("jlptRoundLabel").textContent=bossReady?"Boss quiz":"Kanji card";document.getElementById("jlptPrompt").textContent=currentQuestion.q;document.getElementById("jlptQuestion").textContent=trainerMode==="words"?"Choose the correct meaning.":bossReady?"Boss round: protect your streak.":"Choose the correct meaning.";document.getElementById("kanjiMeta").innerHTML=trainerMode==="words"?`<span>Reading: ${currentQuestion.reading||"practice"}</span><span>${currentQuestion.example||""}</span>`:`<span>On: ${currentQuestion.on}</span><span>Kun: ${currentQuestion.kun}</span><span>${currentQuestion.example}</span>`;document.getElementById("kanjiInfo").textContent=currentQuestion.note||currentQuestion.example||"Keep practicing this card.";document.getElementById("kanjiInfo").classList.add("hidden");document.getElementById("jlptFeedback").textContent="Pick the correct answer.";document.getElementById("jlptBossFill").style.width=Math.min((jlptCorrectCount%10)*10,100)+"%";const grid=document.getElementById("jlptAnswerGrid"),answers=createAnswers(pool,currentQuestion.a);grid.innerHTML="";document.getElementById("jlptQuizView").classList.toggle("boss-mode",bossReady);answers.forEach(answer=>{const btn=document.createElement("button");btn.className="answer-btn";btn.textContent=answer;btn.onclick=()=>checkAnswer(btn,answer);grid.appendChild(btn)})}
function createAnswers(pool,correct){const wrong=[...new Set(pool.map(item=>item.a).filter(answer=>answer!==correct))].sort(()=>Math.random()-.5).slice(0,3);return[correct,...wrong].sort(()=>Math.random()-.5)}
function checkAnswer(button,answer){if(lockAnswer)return;lockAnswer=true;const gridId=isJlptMode()?"jlptAnswerGrid":"answerGrid",feedbackId=isJlptMode()?"jlptFeedback":"quizFeedback";document.querySelectorAll(`#${gridId} .answer-btn`).forEach(btn=>{if(btn.textContent===currentQuestion.a)btn.classList.add("correct")});if(answer===currentQuestion.a){const r=reward(true);if(isJlptMode()){jlptCorrectCount++;localStorage.setItem("tasewakaiJlptCorrectCount",String(jlptCorrectCount));removeReviewCard(currentQuestion);spawnRewardBurst(r,currentQuestion.boss);document.getElementById(feedbackId).textContent=currentQuestion.boss?`Boss clear! +${r.expGain} EXP · +${r.yenGain} YEN`:`Correct! +${r.expGain} EXP · +${r.yenGain} YEN`;}else document.getElementById(feedbackId).textContent=`Correct! +${r.expGain} EXP · +${r.yenGain} YEN`;}else{button.classList.add("wrong");reward(false);if(isJlptMode())addReviewCard(currentQuestion);document.getElementById(feedbackId).textContent=`Wrong. Correct answer: ${currentQuestion.a}`;}setTimeout(nextQuestion,isJlptMode()?1300:1000)}
function toggleKanjiInfo(){document.getElementById("kanjiInfo")?.classList.toggle("hidden")}
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
    setAccessMessage("Beta testers only · key required.","construction","");
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
  const symbols = ["✿", "❀", "✦", "桜", "✧"];
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
