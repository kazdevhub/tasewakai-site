const guideModal=document.getElementById("guideModal"),guideTransition=document.getElementById("guideTransition"),supportModal=document.getElementById("supportModal"),storeModal=document.getElementById("storeModal"),toolModal=document.getElementById("toolModal"),sakuraLayer=document.getElementById("sakuraLayer"),cursorSakuraLayer=document.getElementById("cursorSakuraLayer"),preloader=document.getElementById("preloader");
const statusIcons={ready:"assets/status-note.png",success:"assets/status-success.png",warning:"assets/status-warning.png",error:"assets/status-error.png",blocked:"assets/status-blocked.png",construction:"assets/status-construction.png"};
const DISCORD_INVITE_CODE="P26h5nPSXD";
const cp1252Bytes={"â‚¬":0x80,"â€š":0x82,"Æ’":0x83,"â€ž":0x84,"â€¦":0x85,"â€ ":0x86,"â€¡":0x87,"Ë†":0x88,"â€°":0x89,"Å ":0x8a,"â€¹":0x8b,"Å’":0x8c,"Å½":0x8e,"â€˜":0x91,"â€™":0x92,"â€œ":0x93,"â€":0x94,"â€¢":0x95,"â€“":0x96,"â€”":0x97,"Ëœ":0x98,"â„¢":0x99,"Å¡":0x9a,"â€º":0x9b,"Å“":0x9c,"Å¾":0x9e,"Å¸":0x9f};
const cp1252SingleBytes={"€":0x80,"‚":0x82,"ƒ":0x83,"„":0x84,"…":0x85,"†":0x86,"‡":0x87,"ˆ":0x88,"‰":0x89,"Š":0x8a,"‹":0x8b,"Œ":0x8c,"Ž":0x8e,"‘":0x91,"’":0x92,"“":0x93,"”":0x94,"•":0x95,"–":0x96,"—":0x97,"˜":0x98,"™":0x99,"š":0x9a,"›":0x9b,"œ":0x9c,"ž":0x9e,"Ÿ":0x9f};
const kanaQuestions=[{"q": "Ã£Ââ€š", "a": "a"}, {"q": "Ã£Ââ€ž", "a": "i"}, {"q": "Ã£Ââ€ ", "a": "u"}, {"q": "Ã£ÂË†", "a": "e"}, {"q": "Ã£ÂÅ ", "a": "o"}, {"q": "Ã£Ââ€¹", "a": "ka"}, {"q": "Ã£ÂÂ", "a": "ki"}, {"q": "Ã£ÂÂ", "a": "ku"}, {"q": "Ã£Ââ€˜", "a": "ke"}, {"q": "Ã£Ââ€œ", "a": "ko"}, {"q": "Ã£Ââ€¢", "a": "sa"}, {"q": "Ã£Ââ€”", "a": "shi"}, {"q": "Ã£Ââ„¢", "a": "su"}, {"q": "Ã£Ââ€º", "a": "se"}, {"q": "Ã£ÂÂ", "a": "so"}, {"q": "Ã£ÂÅ¸", "a": "ta"}, {"q": "Ã£ÂÂ¡", "a": "chi"}, {"q": "Ã£ÂÂ¤", "a": "tsu"}, {"q": "Ã£ÂÂ¦", "a": "te"}, {"q": "Ã£ÂÂ¨", "a": "to"}, {"q": "Ã£ÂÂª", "a": "na"}, {"q": "Ã£ÂÂ«", "a": "ni"}, {"q": "Ã£ÂÂ¬", "a": "nu"}, {"q": "Ã£ÂÂ­", "a": "ne"}, {"q": "Ã£ÂÂ®", "a": "no"}, {"q": "Ã£ÂÂ¯", "a": "ha"}, {"q": "Ã£ÂÂ²", "a": "hi"}, {"q": "Ã£ÂÂµ", "a": "fu"}, {"q": "Ã£ÂÂ¸", "a": "he"}, {"q": "Ã£ÂÂ»", "a": "ho"}, {"q": "Ã£ÂÂ¾", "a": "ma"}, {"q": "Ã£ÂÂ¿", "a": "mi"}, {"q": "Ã£â€šâ‚¬", "a": "mu"}, {"q": "Ã£â€šÂ", "a": "me"}, {"q": "Ã£â€šâ€š", "a": "mo"}, {"q": "Ã£â€šâ€ž", "a": "ya"}, {"q": "Ã£â€šâ€ ", "a": "yu"}, {"q": "Ã£â€šË†", "a": "yo"}, {"q": "Ã£â€šâ€°", "a": "ra"}, {"q": "Ã£â€šÅ ", "a": "ri"}, {"q": "Ã£â€šâ€¹", "a": "ru"}, {"q": "Ã£â€šÅ’", "a": "re"}, {"q": "Ã£â€šÂ", "a": "ro"}, {"q": "Ã£â€šÂ", "a": "wa"}, {"q": "Ã£â€šâ€™", "a": "wo"}, {"q": "Ã£â€šâ€œ", "a": "n"}];
const kanjiQuestions=[{"q": "Ã¦â€”Â¥", "a": "sun / day"}, {"q": "Ã¦Å“Ë†", "a": "moon / month"}, {"q": "Ã§ÂÂ«", "a": "fire"}, {"q": "Ã¦Â°Â´", "a": "water"}, {"q": "Ã¦Å“Â¨", "a": "tree"}, {"q": "Ã©â€¡â€˜", "a": "gold / money"}, {"q": "Ã¥Å“Å¸", "a": "earth / soil"}, {"q": "Ã¤ÂºÂº", "a": "person"}, {"q": "Ã¥Â±Â±", "a": "mountain"}, {"q": "Ã¥Â·Â", "a": "river"}, {"q": "Ã§â€Â°", "a": "rice field"}, {"q": "Ã¥ÂÂ£", "a": "mouth"}, {"q": "Ã§â€ºÂ®", "a": "eye"}, {"q": "Ã¨â‚¬Â³", "a": "ear"}, {"q": "Ã¦â€°â€¹", "a": "hand"}, {"q": "Ã¨Â¶Â³", "a": "foot"}, {"q": "Ã¥Å â€º", "a": "power"}, {"q": "Ã§â€Â·", "a": "man"}, {"q": "Ã¥Â¥Â³", "a": "woman"}, {"q": "Ã¥Â­Â", "a": "child"}, {"q": "Ã¥Â­Â¦", "a": "study"}, {"q": "Ã§â€Å¸", "a": "life / student"}, {"q": "Ã¥â€¦Ë†", "a": "previous / ahead"}, {"q": "Ã¥Â¤Â§", "a": "big"}, {"q": "Ã¥Â°Â", "a": "small"}, {"q": "Ã¤Â¸Â­", "a": "middle"}, {"q": "Ã¤Â¸Å ", "a": "up"}, {"q": "Ã¤Â¸â€¹", "a": "down"}, {"q": "Ã¥Â·Â¦", "a": "left"}, {"q": "Ã¥ÂÂ³", "a": "right"}, {"q": "Ã¤Â¸â‚¬", "a": "one"}, {"q": "Ã¤ÂºÅ’", "a": "two"}, {"q": "Ã¤Â¸â€°", "a": "three"}];
const wordQuestions=[{"q": "Ã£Ââ€œÃ£â€šâ€œÃ£ÂÂ«Ã£ÂÂ¡Ã£ÂÂ¯", "a": "hello"}, {"q": "Ã£Ââ€šÃ£â€šÅ Ã£ÂÅ’Ã£ÂÂ¨Ã£Ââ€ ", "a": "thank you"}, {"q": "Ã¦â€”Â¥Ã¦Å“Â¬", "a": "Japan"}, {"q": "Ã¥Â­Â¦Ã§â€Å¸", "a": "student"}, {"q": "Ã¥â€¦Ë†Ã§â€Å¸", "a": "teacher"}, {"q": "Ã¥Â­Â¦Ã¦Â Â¡", "a": "school"}, {"q": "Ã¦Â°Â´", "a": "water"}, {"q": "Ã§ÂÂ«Ã¦â€ºÅ“Ã¦â€”Â¥", "a": "Tuesday"}, {"q": "Ã¤Â»Å Ã¦â€”Â¥", "a": "today"}, {"q": "Ã¦ËœÅ½Ã¦â€”Â¥", "a": "tomorrow"}, {"q": "Ã¦ËœÂ¨Ã¦â€”Â¥", "a": "yesterday"}, {"q": "Ã¥Ââ€¹Ã©Ââ€", "a": "friend"}, {"q": "Ã§Å Â¬", "a": "dog"}, {"q": "Ã§Å’Â«", "a": "cat"}, {"q": "Ã¦Å“Â¬", "a": "book"}, {"q": "Ã¨Â»Å ", "a": "car"}, {"q": "Ã©â€ºÂ»Ã¨Â»Å ", "a": "train"}, {"q": "Ã©Â§â€¦", "a": "station"}, {"q": "Ã©Â£Å¸Ã£ÂÂ¹Ã£â€šâ€¹", "a": "to eat"}, {"q": "Ã©Â£Â²Ã£â€šâ‚¬", "a": "to drink"}, {"q": "Ã¨Â¡Å’Ã£ÂÂ", "a": "to go"}, {"q": "Ã¨Â¦â€¹Ã£â€šâ€¹", "a": "to see"}, {"q": "Ã¨ÂÅ¾Ã£ÂÂ", "a": "to listen"}, {"q": "Ã¨Â©Â±Ã£Ââ„¢", "a": "to speak"}];
const jlptDeck={
  n5:[
    {q:"Ã¦â€”Â¥",a:"sun / day",on:"Ã£Æ’â€¹Ã£Æ’ÂÃ£Æ’Â»Ã£â€šÂ¸Ã£Æ’â€ž",kun:"Ã£ÂÂ²Ã£Æ’Â»Ã£Ââ€¹",example:"Ã¦â€”Â¥Ã¦Å“Â¬ / Ã£ÂÂ«Ã£ÂÂ»Ã£â€šâ€œ / Japan",note:"One of the first kanji learners meet. It appears in dates, days, and Japan itself."},
    {q:"Ã¦Å“Ë†",a:"moon / month",on:"Ã£â€šÂ²Ã£Æ’â€žÃ£Æ’Â»Ã£â€šÂ¬Ã£Æ’â€ž",kun:"Ã£ÂÂ¤Ã£ÂÂ",example:"Ã¦Å“Ë†Ã¦â€ºÅ“Ã¦â€”Â¥ / Ã£Ââ€™Ã£ÂÂ¤Ã£â€šË†Ã£Ââ€ Ã£ÂÂ³ / Monday",note:"Used for both the moon and calendar months, so it appears constantly in schedules."},
    {q:"Ã¤ÂºÂº",a:"person",on:"Ã£â€šÂ¸Ã£Æ’Â³Ã£Æ’Â»Ã£Æ’â€¹Ã£Æ’Â³",kun:"Ã£ÂÂ²Ã£ÂÂ¨",example:"Ã¦â€”Â¥Ã¦Å“Â¬Ã¤ÂºÂº / Ã£ÂÂ«Ã£ÂÂ»Ã£â€šâ€œÃ£ÂËœÃ£â€šâ€œ / Japanese person",note:"A core kanji for people, nationality, and human-related words."},
    {q:"Ã¥Â±Â±",a:"mountain",on:"Ã£â€šÂµÃ£Æ’Â³",kun:"Ã£â€šâ€žÃ£ÂÂ¾",example:"Ã¥Â¯Å’Ã¥Â£Â«Ã¥Â±Â± / Ã£ÂÂµÃ£ÂËœÃ£Ââ€¢Ã£â€šâ€œ / Mt. Fuji",note:"Simple shape, huge usefulness. It appears in place names everywhere."},
    {q:"Ã¥Â·Â",a:"river",on:"Ã£â€šÂ»Ã£Æ’Â³",kun:"Ã£Ââ€¹Ã£â€šÂ",example:"Ã¥Â·ÂÃ¥ÂÂ£ / Ã£Ââ€¹Ã£â€šÂÃ£ÂÂÃ£ÂÂ¡ / river mouth",note:"Often used in place names and geography."},
    {q:"Ã§ÂÂ«",a:"fire",on:"Ã£â€šÂ«",kun:"Ã£ÂÂ²",example:"Ã§ÂÂ«Ã¦â€ºÅ“Ã¦â€”Â¥ / Ã£Ââ€¹Ã£â€šË†Ã£Ââ€ Ã£ÂÂ³ / Tuesday",note:"Part of the weekday cycle and many fire/heat words."},
    {q:"Ã¦Â°Â´",a:"water",on:"Ã£â€šÂ¹Ã£â€šÂ¤",kun:"Ã£ÂÂ¿Ã£ÂÅ¡",example:"Ã¦Â°Â´Ã¦â€ºÅ“Ã¦â€”Â¥ / Ã£Ââ„¢Ã£Ââ€žÃ£â€šË†Ã£Ââ€ Ã£ÂÂ³ / Wednesday",note:"A basic nature kanji that appears in drinks, water, and weekday names."},
    {q:"Ã¦Å“Â¨",a:"tree / wood",on:"Ã£Æ’Â¢Ã£â€šÂ¯Ã£Æ’Â»Ã£Æ’Å“Ã£â€šÂ¯",kun:"Ã£ÂÂ",example:"Ã¦Å“Â¨Ã¦â€ºÅ“Ã¦â€”Â¥ / Ã£â€šâ€šÃ£ÂÂÃ£â€šË†Ã£Ââ€ Ã£ÂÂ³ / Thursday",note:"Used for trees, wood, and Thursday."},
    {q:"Ã©â€¡â€˜",a:"gold / money",on:"Ã£â€šÂ­Ã£Æ’Â³Ã£Æ’Â»Ã£â€šÂ³Ã£Æ’Â³",kun:"Ã£Ââ€¹Ã£ÂÂ­",example:"Ã©â€¡â€˜Ã¦â€ºÅ“Ã¦â€”Â¥ / Ã£ÂÂÃ£â€šâ€œÃ£â€šË†Ã£Ââ€ Ã£ÂÂ³ / Friday",note:"Important for money, metal, gold, and Friday."},
    {q:"Ã¥Å“Å¸",a:"earth / soil",on:"Ã£Æ’â€°Ã£Æ’Â»Ã£Æ’Ë†",kun:"Ã£ÂÂ¤Ã£ÂÂ¡",example:"Ã¥Å“Å¸Ã¦â€ºÅ“Ã¦â€”Â¥ / Ã£ÂÂ©Ã£â€šË†Ã£Ââ€ Ã£ÂÂ³ / Saturday",note:"Appears in soil, land, and Saturday."},
    {q:"Ã¥Â­Â¦",a:"study",on:"Ã£â€šÂ¬Ã£â€šÂ¯",kun:"Ã£ÂÂ¾Ã£ÂÂªÃ£ÂÂ¶",example:"Ã¥Â­Â¦Ã§â€Å¸ / Ã£ÂÅ’Ã£ÂÂÃ£Ââ€ºÃ£Ââ€ž / student",note:"A must-know school and learning kanji."},
    {q:"Ã§â€Å¸",a:"life / birth",on:"Ã£â€šÂ»Ã£â€šÂ¤Ã£Æ’Â»Ã£â€šÂ·Ã£Æ’Â§Ã£â€šÂ¦",kun:"Ã£Ââ€žÃ£ÂÂÃ£â€šâ€¹Ã£Æ’Â»Ã£Ââ€ Ã£ÂÂ¾Ã£â€šÅ’Ã£â€šâ€¹",example:"Ã¥â€¦Ë†Ã§â€Å¸ / Ã£Ââ€ºÃ£â€šâ€œÃ£Ââ€ºÃ£Ââ€ž / teacher",note:"Very flexible: life, birth, student, fresh, and more."}
  ],
  n4:[
    {q:"Ã¤Â¼Å¡",a:"meet / association",on:"Ã£â€šÂ«Ã£â€šÂ¤",kun:"Ã£Ââ€šÃ£Ââ€ ",example:"Ã¤Â¼Å¡Ã§Â¤Â¾ / Ã£Ââ€¹Ã£Ââ€žÃ£Ââ€”Ã£â€šÆ’ / company",note:"Useful for meetings, groups, and companies."},
    {q:"Ã§Â¤Â¾",a:"company / shrine",on:"Ã£â€šÂ·Ã£Æ’Â£",kun:"Ã£â€šâ€žÃ£Ââ€”Ã£â€šÂ",example:"Ã¤Â¼Å¡Ã§Â¤Â¾ / Ã£Ââ€¹Ã£Ââ€žÃ£Ââ€”Ã£â€šÆ’ / company",note:"Often appears in work and organization words."},
    {q:"Ã¥Âºâ€”",a:"shop",on:"Ã£Æ’â€ Ã£Æ’Â³",kun:"Ã£ÂÂ¿Ã£Ââ€º",example:"Ã¥Âºâ€”Ã¥â€œÂ¡ / Ã£ÂÂ¦Ã£â€šâ€œÃ£Ââ€žÃ£â€šâ€œ / shop clerk",note:"A practical kanji for stores and shopping."},
    {q:"Ã©Â§â€¦",a:"station",on:"Ã£â€šÂ¨Ã£â€šÂ­",kun:"-",example:"Ã¦ÂÂ±Ã¤ÂºÂ¬Ã©Â§â€¦ / Ã£ÂÂ¨Ã£Ââ€ Ã£ÂÂÃ£â€šâ€¡Ã£Ââ€ Ã£ÂË†Ã£ÂÂ / Tokyo Station",note:"Essential for travel in Japan."},
    {q:"Ã©â€ºÂ»",a:"electricity",on:"Ã£Æ’â€¡Ã£Æ’Â³",kun:"-",example:"Ã©â€ºÂ»Ã¨Â»Å  / Ã£ÂÂ§Ã£â€šâ€œÃ£Ââ€”Ã£â€šÆ’ / train",note:"Used in trains, phones, electricity, and electronics."},
    {q:"Ã¨Â»Å ",a:"car / vehicle",on:"Ã£â€šÂ·Ã£Æ’Â£",kun:"Ã£ÂÂÃ£â€šâ€¹Ã£ÂÂ¾",example:"Ã©â€ºÂ»Ã¨Â»Å  / Ã£ÂÂ§Ã£â€šâ€œÃ£Ââ€”Ã£â€šÆ’ / train",note:"Vehicle kanji used in train, bicycle, and car words."},
    {q:"Ã¨Â²Â·",a:"buy",on:"Ã£Æ’ÂÃ£â€šÂ¤",kun:"Ã£Ââ€¹Ã£Ââ€ ",example:"Ã¨Â²Â·Ã£Ââ€žÃ§â€°Â© / Ã£Ââ€¹Ã£Ââ€žÃ£â€šâ€šÃ£ÂÂ® / shopping",note:"One of the most useful daily-life action kanji."},
    {q:"Ã¥Â£Â²",a:"sell",on:"Ã£Æ’ÂÃ£â€šÂ¤",kun:"Ã£Ââ€ Ã£â€šâ€¹",example:"Ã¥Â£Â²Ã¥Âºâ€” / Ã£ÂÂ°Ã£Ââ€žÃ£ÂÂ¦Ã£â€šâ€œ / stand / kiosk",note:"Often paired mentally with buy."},
    {q:"Ã¦â€”Â",a:"family / tribe",on:"Ã£â€šÂ¾Ã£â€šÂ¯",kun:"-",example:"Ã¥Â®Â¶Ã¦â€”Â / Ã£Ââ€¹Ã£ÂÅ¾Ã£ÂÂ / family",note:"Shows up in family and group identity words."},
    {q:"Ã¦â€”â€¦",a:"travel",on:"Ã£Æ’ÂªÃ£Æ’Â§",kun:"Ã£ÂÅ¸Ã£ÂÂ³",example:"Ã¦â€”â€¦Ã¨Â¡Å’ / Ã£â€šÅ Ã£â€šâ€¡Ã£Ââ€œÃ£Ââ€  / trip",note:"Core travel kanji."},
    {q:"Ã¦â€“â„¢",a:"fee / material",on:"Ã£Æ’ÂªÃ£Æ’Â§Ã£â€šÂ¦",kun:"-",example:"Ã¦â€“â„¢Ã§Ââ€  / Ã£â€šÅ Ã£â€šâ€¡Ã£Ââ€ Ã£â€šÅ  / cooking",note:"Appears in fees, materials, and cooking."},
    {q:"Ã§Ââ€ ",a:"reason / logic",on:"Ã£Æ’Âª",kun:"-",example:"Ã¦â€“â„¢Ã§Ââ€  / Ã£â€šÅ Ã£â€šâ€¡Ã£Ââ€ Ã£â€šÅ  / cooking",note:"Used in reason, science, and management words."}
  ],
  n3:[
    {q:"Ã§ÂµÅ’Ã©Â¨â€œ",a:"experience",on:"Ã£â€šÂ±Ã£â€šÂ¤Ã£â€šÂ±Ã£Æ’Â³",kun:"-",example:"Ã§ÂµÅ’Ã©Â¨â€œÃ£ÂÅ’Ã£Ââ€šÃ£â€šâ€¹ / Ã£Ââ€˜Ã£Ââ€žÃ£Ââ€˜Ã£â€šâ€œÃ£ÂÅ’Ã£Ââ€šÃ£â€šâ€¹ / to have experience",note:"Common in work, life stories, and introductions."},
    {q:"Ã§â€™Â°Ã¥Â¢Æ’",a:"environment",on:"Ã£â€šÂ«Ã£Æ’Â³Ã£â€šÂ­Ã£Æ’Â§Ã£â€šÂ¦",kun:"-",example:"Ã¨â€¡ÂªÃ§â€žÂ¶Ã§â€™Â°Ã¥Â¢Æ’ / Ã£Ââ€”Ã£ÂÅ“Ã£â€šâ€œÃ£Ââ€¹Ã£â€šâ€œÃ£ÂÂÃ£â€šâ€¡Ã£Ââ€  / natural environment",note:"Useful for news, school essays, and society topics."},
    {q:"Ã¦â€Â¿Ã¦Â²Â»",a:"politics",on:"Ã£â€šÂ»Ã£â€šÂ¤Ã£â€šÂ¸",kun:"-",example:"Ã¦â€Â¿Ã¦Â²Â»Ã¥Â®Â¶ / Ã£Ââ€ºÃ£Ââ€žÃ£ÂËœÃ£Ââ€¹ / politician",note:"A news and society word built from rule/governance kanji."},
    {q:"Ã§ÂµÅ’Ã¦Â¸Ë†",a:"economy",on:"Ã£â€šÂ±Ã£â€šÂ¤Ã£â€šÂ¶Ã£â€šÂ¤",kun:"-",example:"Ã¦â€”Â¥Ã¦Å“Â¬Ã§ÂµÅ’Ã¦Â¸Ë† / Ã£ÂÂ«Ã£ÂÂ»Ã£â€šâ€œÃ£Ââ€˜Ã£Ââ€žÃ£Ââ€“Ã£Ââ€ž / Japanese economy",note:"Important for news and business language."},
    {q:"Ã¦â€“â€¡Ã¥Å’â€“",a:"culture",on:"Ã£Æ’â€“Ã£Æ’Â³Ã£â€šÂ«",kun:"-",example:"Ã¦â€”Â¥Ã¦Å“Â¬Ã¦â€“â€¡Ã¥Å’â€“ / Ã£ÂÂ«Ã£ÂÂ»Ã£â€šâ€œÃ£ÂÂ¶Ã£â€šâ€œÃ£Ââ€¹ / Japanese culture",note:"A core N3-level word for society and identity."},
    {q:"Ã¦Â­Â´Ã¥ÂÂ²",a:"history",on:"Ã£Æ’Â¬Ã£â€šÂ­Ã£â€šÂ·",kun:"-",example:"Ã¦Â­Â´Ã¥ÂÂ²Ã£â€šâ€™Ã¥Â­Â¦Ã£ÂÂ¶ / Ã£â€šÅ’Ã£ÂÂÃ£Ââ€”Ã£â€šâ€™Ã£ÂÂ¾Ã£ÂÂªÃ£ÂÂ¶ / study history",note:"Useful in school, travel, and culture contexts."},
    {q:"Ã¥Å½Å¸Ã¥â€ºÂ ",a:"cause / reason",on:"Ã£â€šÂ²Ã£Æ’Â³Ã£â€šÂ¤Ã£Æ’Â³",kun:"-",example:"Ã¤Âºâ€¹Ã¦â€¢â€¦Ã£ÂÂ®Ã¥Å½Å¸Ã¥â€ºÂ  / Ã£ÂËœÃ£Ââ€œÃ£ÂÂ®Ã£Ââ€™Ã£â€šâ€œÃ£Ââ€žÃ£â€šâ€œ / cause of an accident",note:"Very common for explanations and news."},
    {q:"Ã§ÂµÂÃ¦Å¾Å“",a:"result",on:"Ã£â€šÂ±Ã£Æ’Æ’Ã£â€šÂ«",kun:"-",example:"Ã¨Â©Â¦Ã©Â¨â€œÃ£ÂÂ®Ã§ÂµÂÃ¦Å¾Å“ / Ã£Ââ€”Ã£Ââ€˜Ã£â€šâ€œÃ£ÂÂ®Ã£Ââ€˜Ã£ÂÂ£Ã£Ââ€¹ / exam result",note:"Pairs naturally with cause, effort, and tests."},
    {q:"Ã¥Å ÂªÃ¥Å â€º",a:"effort",on:"Ã£Æ’â€°Ã£Æ’ÂªÃ£Æ’Â§Ã£â€šÂ¯",kun:"-",example:"Ã¥Å ÂªÃ¥Å â€ºÃ£Ââ„¢Ã£â€šâ€¹ / Ã£ÂÂ©Ã£â€šÅ Ã£â€šâ€¡Ã£ÂÂÃ£Ââ„¢Ã£â€šâ€¹ / to make an effort",note:"A motivational and school/work-friendly N3 word."},
    {q:"Ã©â€“Â¢Ã¤Â¿â€š",a:"relationship / connection",on:"Ã£â€šÂ«Ã£Æ’Â³Ã£â€šÂ±Ã£â€šÂ¤",kun:"-",example:"Ã¥Ââ€¹Ã¤ÂºÂºÃ©â€“Â¢Ã¤Â¿â€š / Ã£â€šâ€ Ã£Ââ€ Ã£ÂËœÃ£â€šâ€œÃ£Ââ€¹Ã£â€šâ€œÃ£Ââ€˜Ã£Ââ€ž / friendship relationship",note:"Useful for people, business, and abstract connections."},
    {q:"Ã©â‚¬Â£Ã§ÂµÂ¡",a:"contact / communication",on:"Ã£Æ’Â¬Ã£Æ’Â³Ã£Æ’Â©Ã£â€šÂ¯",kun:"-",example:"Ã©â‚¬Â£Ã§ÂµÂ¡Ã£Ââ„¢Ã£â€šâ€¹ / Ã£â€šÅ’Ã£â€šâ€œÃ£â€šâ€°Ã£ÂÂÃ£Ââ„¢Ã£â€šâ€¹ / to contact",note:"Daily practical word for messaging someone."},
    {q:"Ã¦Âºâ€“Ã¥â€šâ„¢",a:"preparation",on:"Ã£â€šÂ¸Ã£Æ’Â¥Ã£Æ’Â³Ã£Æ’â€œ",kun:"-",example:"Ã¦Âºâ€“Ã¥â€šâ„¢Ã£ÂÂ§Ã£ÂÂÃ£ÂÅ¸ / Ã£ÂËœÃ£â€šâ€¦Ã£â€šâ€œÃ£ÂÂ³Ã£ÂÂ§Ã£ÂÂÃ£ÂÅ¸ / ready",note:"Common for events, school, travel, and work."}
  ],
  n2:[],
  n1:[]
};
const jlptWordDeck=[
  {q:"Ã¦â€”Â¥Ã¦Å“Â¬Ã¨ÂªÅ¾",a:"Japanese language",reading:"Ã£ÂÂ«Ã£ÂÂ»Ã£â€šâ€œÃ£Ââ€",example:"Ã¦â€”Â¥Ã¦Å“Â¬Ã¨ÂªÅ¾Ã£â€šâ€™Ã¥â€¹â€°Ã¥Â¼Â·Ã£Ââ€”Ã£ÂÂ¦Ã£Ââ€žÃ£ÂÂ¾Ã£Ââ„¢Ã£â‚¬â€š"},
  {q:"Ã¦â€”â€¦Ã¨Â¡Å’",a:"trip / travel",reading:"Ã£â€šÅ Ã£â€šâ€¡Ã£Ââ€œÃ£Ââ€ ",example:"Ã¤ÂºÂ¬Ã©Æ’Â½Ã£ÂÂ¸Ã¦â€”â€¦Ã¨Â¡Å’Ã£Ââ€”Ã£ÂÂ¾Ã£Ââ„¢Ã£â‚¬â€š"},
  {q:"Ã§Â´â€žÃ¦ÂÅ¸",a:"promise / appointment",reading:"Ã£â€šâ€žÃ£ÂÂÃ£ÂÂÃ£ÂÂ",example:"Ã¥Ââ€¹Ã©Ââ€Ã£ÂÂ¨Ã§Â´â€žÃ¦ÂÅ¸Ã£ÂÅ’Ã£Ââ€šÃ£â€šÅ Ã£ÂÂ¾Ã£Ââ„¢Ã£â‚¬â€š"},
  {q:"Ã¨ÂªÂ¬Ã¦ËœÅ½",a:"explanation",reading:"Ã£Ââ€ºÃ£ÂÂ¤Ã£â€šÂÃ£Ââ€ž",example:"Ã¥â€¦Ë†Ã§â€Å¸Ã£ÂÅ’Ã¨ÂªÂ¬Ã¦ËœÅ½Ã£Ââ€”Ã£ÂÂ¾Ã£Ââ€”Ã£ÂÅ¸Ã£â‚¬â€š"},
  {q:"Ã¥Â¿â€¦Ã¨Â¦Â",a:"necessary",reading:"Ã£ÂÂ²Ã£ÂÂ¤Ã£â€šË†Ã£Ââ€ ",example:"Ã§Â·Â´Ã§Â¿â€™Ã£ÂÅ’Ã¥Â¿â€¦Ã¨Â¦ÂÃ£ÂÂ§Ã£Ââ„¢Ã£â‚¬â€š"},
  {q:"Ã¥Â®â€°Ã¥â€¦Â¨",a:"safe / safety",reading:"Ã£Ââ€šÃ£â€šâ€œÃ£ÂÅ“Ã£â€šâ€œ",example:"Ã¥Â®â€°Ã¥â€¦Â¨Ã£ÂÂ«Ã¥Â¸Â°Ã£ÂÂ£Ã£ÂÂ¦Ã£ÂÂÃ£ÂÂ Ã£Ââ€¢Ã£Ââ€žÃ£â‚¬â€š"},
  {q:"Ã¨â€¡ÂªÃ§â€Â±",a:"freedom",reading:"Ã£ÂËœÃ£â€šâ€ Ã£Ââ€ ",example:"Ã¨â€¡ÂªÃ§â€Â±Ã£ÂÂªÃ¦â„¢â€šÃ©â€“â€œÃ£ÂÅ’Ã£Ââ€šÃ£â€šÅ Ã£ÂÂ¾Ã£Ââ„¢Ã£â‚¬â€š"},
  {q:"Ã¥Â°â€ Ã¦ÂÂ¥",a:"future",reading:"Ã£Ââ€”Ã£â€šâ€¡Ã£Ââ€ Ã£â€šâ€°Ã£Ââ€ž",example:"Ã¥Â°â€ Ã¦ÂÂ¥Ã£ÂÂ®Ã¥Â¤Â¢Ã£ÂÂ¯Ã¤Â½â€¢Ã£ÂÂ§Ã£Ââ„¢Ã£Ââ€¹Ã£â‚¬â€š"}
];
const jlptFallbackDeck={
  n2:[
    {q:"è²¬ä»»",a:"responsibility",on:"ã‚»ã‚­ãƒ‹ãƒ³",kun:"ã›ã‚ã‚‹ãƒ»ã¾ã‹ã›ã‚‹",example:"è²¬ä»»ã‚’æŒã¤ / ã›ãã«ã‚“ã‚’ã‚‚ã¤ / to take responsibility",note:"A serious N2 word for duties, promises, and trust.",strokes:20},
    {q:"åˆ¶åº¦",a:"system / institution",on:"ã‚»ã‚¤ãƒ‰",kun:"ã¤ãã‚‹ãƒ»ãŸã³",example:"æ•™è‚²åˆ¶åº¦ / ãã‚‡ã†ã„ãã›ã„ã© / education system",note:"Useful for society, school, work, and news topics.",strokes:18},
    {q:"è³‡æº",a:"resources",on:"ã‚·ã‚²ãƒ³",kun:"ã‚‚ã¨",example:"è‡ªç„¶è³‡æº / ã—ãœã‚“ã—ã’ã‚“ / natural resources",note:"Appears often in economy, environment, and news language.",strokes:26},
    {q:"è©•ä¾¡",a:"evaluation / assessment",on:"ãƒ’ãƒ§ã‚¦ã‚«",kun:"ã‚ãŸã„",example:"é«˜ãè©•ä¾¡ã™ã‚‹ / ãŸã‹ãã²ã‚‡ã†ã‹ã™ã‚‹ / to highly value",note:"A common work, school, and review word.",strokes:19}
  ],
  n1:[
    {q:"æ¦‚å¿µ",a:"concept / idea",on:"ã‚¬ã‚¤ãƒãƒ³",kun:"ãŠãŠã‚€ã­",example:"åŸºæœ¬æ¦‚å¿µ / ãã»ã‚“ãŒã„ã­ã‚“ / basic concept",note:"Academic N1 vocabulary for abstract discussion.",strokes:28},
    {q:"çŸ›ç›¾",a:"contradiction",on:"ãƒ ã‚¸ãƒ¥ãƒ³",kun:"ã»ã“ãƒ»ãŸã¦",example:"çŸ›ç›¾ã—ã¦ã„ã‚‹ / ã‚€ã˜ã‚…ã‚“ã—ã¦ã„ã‚‹ / to be contradictory",note:"Great for essays, debates, and advanced explanations.",strokes:14},
    {q:"è¬™è™š",a:"humility / modesty",on:"ã‚±ãƒ³ã‚­ãƒ§",kun:"ã¸ã‚Šãã ã‚‹",example:"è¬™è™šãªæ…‹åº¦ / ã‘ã‚“ãã‚‡ãªãŸã„ã© / humble attitude",note:"A high-level word for character and behavior.",strokes:30},
    {q:"é¡•è‘—",a:"remarkable / noticeable",on:"ã‚±ãƒ³ãƒãƒ§",kun:"ã‚ã‚‰ã‚ã‚Œã‚‹",example:"é¡•è‘—ãªå¤‰åŒ– / ã‘ã‚“ã¡ã‚‡ãªã¸ã‚“ã‹ / noticeable change",note:"Useful in reports, news, and formal writing.",strokes:29}
  ]
};
let jlptKanjiLoaded=false;
const prefPins=[
  {romaji:"HokkaidÃ…Â",jp:"Ã¥Å’â€”Ã¦ÂµÂ·Ã©Ââ€œ",cities:"Sapporo, Asahikawa, Hakodate",x:67,y:12},
  {romaji:"Aomori",jp:"Ã©Ââ€™Ã¦Â£Â®",cities:"Aomori, Hirosaki, Hachinohe",x:60,y:38},
  {romaji:"Iwate",jp:"Ã¥Â²Â©Ã¦â€°â€¹",cities:"Morioka, Ichinoseki, Hanamaki",x:64,y:42},
  {romaji:"Miyagi",jp:"Ã¥Â®Â®Ã¥Å¸Å½",cities:"Sendai, Ishinomaki, Ã…Å’saki",x:63,y:48},
  {romaji:"Akita",jp:"Ã§Â§â€¹Ã§â€Â°",cities:"Akita, Yokote, Daisen",x:57,y:41},
  {romaji:"Yamagata",jp:"Ã¥Â±Â±Ã¥Â½Â¢",cities:"Yamagata, Tsuruoka, Sakata",x:58,y:47},
  {romaji:"Fukushima",jp:"Ã§Â¦ÂÃ¥Â³Â¶",cities:"Fukushima, KÃ…Âriyama, Iwaki",x:60,y:53},
  {romaji:"Ibaraki",jp:"Ã¨Å’Â¨Ã¥Å¸Å½",cities:"Mito, Tsukuba, Hitachi",x:62,y:59},
  {romaji:"Tochigi",jp:"Ã¦Â Æ’Ã¦Å“Â¨",cities:"Utsunomiya, Oyama, NikkÃ…Â",x:58,y:56},
  {romaji:"Gunma",jp:"Ã§Â¾Â¤Ã©Â¦Â¬",cities:"Maebashi, Takasaki, Isesaki",x:54,y:55},
  {romaji:"Saitama",jp:"Ã¥Å¸Â¼Ã§Å½â€°",cities:"Saitama, Kawaguchi, Kawagoe",x:56,y:60},
  {romaji:"Chiba",jp:"Ã¥ÂÆ’Ã¨â€˜â€°",cities:"Chiba, Funabashi, Kashiwa",x:62,y:63},
  {romaji:"Tokyo",jp:"Ã¦ÂÂ±Ã¤ÂºÂ¬",cities:"Tokyo, HachiÃ…Âji, Machida",x:57,y:63},
  {romaji:"Kanagawa",jp:"Ã§Â¥Å¾Ã¥Â¥Ë†Ã¥Â·Â",cities:"Yokohama, Kawasaki, Sagamihara",x:56,y:66},
  {romaji:"Niigata",jp:"Ã¦â€“Â°Ã¦Â½Å¸",cities:"Niigata, Nagaoka, JÃ…Âetsu",x:51,y:51},
  {romaji:"Toyama",jp:"Ã¥Â¯Å’Ã¥Â±Â±",cities:"Toyama, Takaoka, Uozu",x:44,y:57},
  {romaji:"Ishikawa",jp:"Ã§Å¸Â³Ã¥Â·Â",cities:"Kanazawa, Komatsu, Hakusan",x:41,y:60},
  {romaji:"Fukui",jp:"Ã§Â¦ÂÃ¤Âºâ€¢",cities:"Fukui, Sabae, Tsuruga",x:37,y:64},
  {romaji:"Yamanashi",jp:"Ã¥Â±Â±Ã¦Â¢Â¨",cities:"KÃ…Âfu, Kai, Fujiyoshida",x:52,y:64},
  {romaji:"Nagano",jp:"Ã©â€¢Â·Ã©â€¡Å½",cities:"Nagano, Matsumoto, Ueda",x:49,y:58},
  {romaji:"Gifu",jp:"Ã¥Â²ÂÃ©ËœÅ“",cities:"Gifu, Takayama, Ã…Å’gaki",x:42,y:63},
  {romaji:"Shizuoka",jp:"Ã©Ââ„¢Ã¥Â²Â¡",cities:"Shizuoka, Hamamatsu, Fuji",x:49,y:69},
  {romaji:"Aichi",jp:"Ã¦â€žâ€ºÃ§Å¸Â¥",cities:"Nagoya, Toyota, Toyohashi",x:43,y:69},
  {romaji:"Mie",jp:"Ã¤Â¸â€°Ã©â€¡Â",cities:"Tsu, Yokkaichi, Suzuka",x:40,y:73},
  {romaji:"Shiga",jp:"Ã¦Â»â€¹Ã¨Â³â‚¬",cities:"Ã…Å’tsu, Hikone, Kusatsu",x:37,y:66},
  {romaji:"Kyoto",jp:"Ã¤ÂºÂ¬Ã©Æ’Â½",cities:"Kyoto, Uji, Maizuru",x:33,y:66},
  {romaji:"Osaka",jp:"Ã¥Â¤Â§Ã©ËœÂª",cities:"Osaka, Sakai, HigashiÃ…Âsaka",x:32,y:70},
  {romaji:"HyÃ…Âgo",jp:"Ã¥â€¦ÂµÃ¥ÂºÂ«",cities:"Kobe, Himeji, Nishinomiya",x:27,y:67},
  {romaji:"Nara",jp:"Ã¥Â¥Ë†Ã¨â€°Â¯",cities:"Nara, Kashihara, Ikoma",x:35,y:71},
  {romaji:"Wakayama",jp:"Ã¥â€™Å’Ã¦Â­Å’Ã¥Â±Â±",cities:"Wakayama, Tanabe, Hashimoto",x:33,y:76},
  {romaji:"Tottori",jp:"Ã©Â³Â¥Ã¥Ââ€“",cities:"Tottori, Yonago, Kurayoshi",x:24,y:64},
  {romaji:"Shimane",jp:"Ã¥Â³Â¶Ã¦Â Â¹",cities:"Matsue, Izumo, Hamada",x:17,y:67},
  {romaji:"Okayama",jp:"Ã¥Â²Â¡Ã¥Â±Â±",cities:"Okayama, Kurashiki, Tsuyama",x:24,y:70},
  {romaji:"Hiroshima",jp:"Ã¥ÂºÆ’Ã¥Â³Â¶",cities:"Hiroshima, Fukuyama, Kure",x:17,y:73},
  {romaji:"Yamaguchi",jp:"Ã¥Â±Â±Ã¥ÂÂ£",cities:"Yamaguchi, Shimonoseki, Ube",x:11,y:76},
  {romaji:"Tokushima",jp:"Ã¥Â¾Â³Ã¥Â³Â¶",cities:"Tokushima, Anan, Naruto",x:29,y:79},
  {romaji:"Kagawa",jp:"Ã©Â¦â„¢Ã¥Â·Â",cities:"Takamatsu, Marugame, Mitoyo",x:26,y:75},
  {romaji:"Ehime",jp:"Ã¦â€žâ€ºÃ¥Âªâ€º",cities:"Matsuyama, Imabari, Uwajima",x:18,y:78},
  {romaji:"KÃ…Âchi",jp:"Ã©Â«ËœÃ§Å¸Â¥",cities:"KÃ…Âchi, Shimanto, Nankoku",x:22,y:83},
  {romaji:"Fukuoka",jp:"Ã§Â¦ÂÃ¥Â²Â¡",cities:"Fukuoka, KitakyÃ…Â«shÃ…Â«, Kurume",x:9,y:78},
  {romaji:"Saga",jp:"Ã¤Â½ÂÃ¨Â³â‚¬",cities:"Saga, Karatsu, Tosu",x:6,y:82},
  {romaji:"Nagasaki",jp:"Ã©â€¢Â·Ã¥Â´Å½",cities:"Nagasaki, Sasebo, Isahaya",x:4,y:86},
  {romaji:"Kumamoto",jp:"Ã§â€ Å Ã¦Å“Â¬",cities:"Kumamoto, Yatsushiro, Amakusa",x:9,y:87},
  {romaji:"Ã…Å’ita",jp:"Ã¥Â¤Â§Ã¥Ë†â€ ",cities:"Ã…Å’ita, Beppu, Nakatsu",x:14,y:83},
  {romaji:"Miyazaki",jp:"Ã¥Â®Â®Ã¥Â´Å½",cities:"Miyazaki, MiyakonjÃ…Â, Nobeoka",x:14,y:91},
  {romaji:"Kagoshima",jp:"Ã©Â¹Â¿Ã¥â€¦ÂÃ¥Â³Â¶",cities:"Kagoshima, Kirishima, Kanoya",x:8,y:94},
  {romaji:"Okinawa",jp:"Ã¦Â²â€“Ã§Â¸â€ž",cities:"Naha, Okinawa City, Uruma",x:76,y:78}
];
const popularCityPins=[
  {name:"Sapporo",jp:"Ã¦Å“Â­Ã¥Â¹Å’",pref:"HokkaidÃ…Â",x:67,y:12,note:"Popular northern city known for snow, food, and winter festivals."},
  {name:"Sendai",jp:"Ã¤Â»â„¢Ã¥ÂÂ°",pref:"Miyagi",x:63,y:48,note:"Major TÃ…Âhoku city with easy access to culture, food, and coastal trips."},
  {name:"Tokyo",jp:"Ã¦ÂÂ±Ã¤ÂºÂ¬",pref:"Tokyo",x:57,y:63,note:"Japan's capital and the biggest culture, travel, shopping, and business hub."},
  {name:"Yokohama",jp:"Ã¦Â¨ÂªÃ¦ÂµÅ“",pref:"Kanagawa",x:56,y:66,note:"Popular port city next to Tokyo with waterfront areas and Chinatown."},
  {name:"Nagoya",jp:"Ã¥ÂÂÃ¥ÂÂ¤Ã¥Â±â€¹",pref:"Aichi",x:43,y:69,note:"Large central Japan city known for transport, food, and industry."},
  {name:"Kyoto",jp:"Ã¤ÂºÂ¬Ã©Æ’Â½",pref:"Kyoto",x:33,y:66,note:"Historic city famous for temples, shrines, gardens, and traditional streets."},
  {name:"Osaka",jp:"Ã¥Â¤Â§Ã©ËœÂª",pref:"Osaka",x:32,y:70,note:"Popular Kansai city known for food, nightlife, shopping, and comedy culture."},
  {name:"Kobe",jp:"Ã§Â¥Å¾Ã¦Ë†Â¸",pref:"HyÃ…Âgo",x:27,y:68,note:"Port city near Osaka known for harbor views, food, and city-mountain scenery."},
  {name:"Hiroshima",jp:"Ã¥ÂºÆ’Ã¥Â³Â¶",pref:"Hiroshima",x:17,y:73,note:"Western Japan city known for history, food, and access to Miyajima."},
  {name:"Fukuoka",jp:"Ã§Â¦ÂÃ¥Â²Â¡",pref:"Fukuoka",x:9,y:78,note:"Popular KyÃ…Â«shÃ…Â« city known for ramen, shopping, nightlife, and airport access."},
  {name:"Naha",jp:"Ã©â€šÂ£Ã¨Â¦â€¡",pref:"Okinawa",x:76,y:78,note:"Main Okinawa city and a common starting point for island travel."}
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
  "HokkaidÃ…Â":"Japan's northernmost prefecture, known for wide nature, snow, seafood, and Sapporo.",
  Tokyo:"Japan's capital prefecture and one of the country's main culture, business, and travel hubs.",
  Kyoto:"Historic Kansai prefecture known for temples, shrines, traditional streets, and Kyoto city.",
  Osaka:"Urban Kansai prefecture known for food, shopping, entertainment, and Osaka city.",
  Hiroshima:"Western Japan prefecture known for Hiroshima city, history, food, and nearby island trips.",
  Fukuoka:"KyÃ…Â«shÃ…Â« gateway prefecture known for Fukuoka city, ramen, shopping, and easy travel access.",
  Okinawa:"Southern island prefecture known for beaches, subtropical culture, and Naha."
};
const japanRegions=[
  {id:"hokkaido",romaji:"Hokkaido",kanji:"Ã¥Å’â€”Ã¦ÂµÂ·Ã©Ââ€œ",hiragana:"Ã£ÂÂ»Ã£ÂÂ£Ã£Ââ€¹Ã£Ââ€žÃ£ÂÂ©Ã£Ââ€ ",x:72,y:18,tilt:-4,prefectures:"Hokkaido",summary:"Japan's wide northern region, known for snow, open landscapes, seafood, and Ainu cultural roots.",history:"Hokkaido became formally developed as Japan's northern frontier during the Meiji period. Its older Ainu history, colder climate, and wide agricultural land give it a very different feeling from Honshu."},
  {id:"tohoku",romaji:"Tohoku",kanji:"Ã¦ÂÂ±Ã¥Å’â€”",hiragana:"Ã£ÂÂ¨Ã£Ââ€ Ã£ÂÂ»Ã£ÂÂ",x:63,y:47,tilt:5,prefectures:"Aomori, Iwate, Miyagi, Akita, Yamagata, Fukushima",summary:"Northern Honshu, famous for festivals, mountains, rice fields, hot springs, and deep seasonal changes.",history:"Tohoku was long seen as Japan's northern heartland, with powerful local clans, mountain faith, and farming traditions. Its festivals and dialects still carry a strong regional identity."},
  {id:"kanto",romaji:"Kanto",kanji:"Ã©â€“Â¢Ã¦ÂÂ±",hiragana:"Ã£Ââ€¹Ã£â€šâ€œÃ£ÂÂ¨Ã£Ââ€ ",x:63,y:68,tilt:-2,prefectures:"Tokyo, Kanagawa, Chiba, Saitama, Ibaraki, Tochigi, Gunma",summary:"Tokyo and its surrounding plains form one of Japan's busiest cultural and economic centers.",history:"Kanto grew around Edo, later Tokyo, and became the center of modern Japanese government, rail, media, and pop culture. It is where old shrine towns and megacity life sit side by side."},
  {id:"chubu",romaji:"Chubu",kanji:"Ã¤Â¸Â­Ã©Æ’Â¨",hiragana:"Ã£ÂÂ¡Ã£â€šâ€¦Ã£Ââ€ Ã£ÂÂ¶",x:50,y:65,tilt:4,prefectures:"Niigata, Toyama, Ishikawa, Fukui, Yamanashi, Nagano, Gifu, Shizuoka, Aichi",summary:"Central Japan, stretching from the Japan Alps to Nagoya, Mount Fuji, and coastal trade routes.",history:"Chubu links eastern and western Japan. Mountain provinces, castle towns, post roads, and industrial cities all meet here, making it one of Japan's most geographically varied regions."},
  {id:"kansai",romaji:"Kansai",kanji:"Ã©â€“Â¢Ã¨Â¥Â¿",hiragana:"Ã£Ââ€¹Ã£â€šâ€œÃ£Ââ€¢Ã£Ââ€ž",x:43,y:72,tilt:-5,prefectures:"Kyoto, Osaka, Hyogo, Nara, Wakayama, Shiga, Mie",summary:"Historic western center of Japan, known for Kyoto, Osaka, Nara, temples, food, and old capitals.",history:"Kansai held Japan's ancient capitals for centuries. Nara and Kyoto shaped court culture, Buddhism, architecture, and literature, while Osaka became a merchant city famous for food and trade."},
  {id:"chugoku",romaji:"Chugoku",kanji:"Ã¤Â¸Â­Ã¥â€ºÂ½",hiragana:"Ã£ÂÂ¡Ã£â€šâ€¦Ã£Ââ€ Ã£Ââ€Ã£ÂÂ",x:29,y:71,tilt:3,prefectures:"Tottori, Shimane, Okayama, Hiroshima, Yamaguchi",summary:"Western Honshu, with coastal cities, islands, mountains, history, and routes toward Kyushu.",history:"Chugoku connected Japan to trade routes through the Seto Inland Sea. Hiroshima, old castle towns, and shrine islands give the region a mix of memory, maritime culture, and local pride."},
  {id:"shikoku",romaji:"Shikoku",kanji:"Ã¥â€ºâ€ºÃ¥â€ºÂ½",hiragana:"Ã£Ââ€”Ã£Ââ€œÃ£ÂÂ",x:35,y:80,tilt:-4,prefectures:"Tokushima, Kagawa, Ehime, Kochi",summary:"Japan's smallest main island, known for pilgrimage routes, udon, mountains, rivers, and coastlines.",history:"Shikoku is famous for the 88-temple pilgrimage linked to Kukai. Its smaller scale, rugged terrain, and island culture make it feel quieter and more traditional than Japan's huge urban regions."},
  {id:"kyushu",romaji:"Kyushu",kanji:"Ã¤Â¹ÂÃ¥Â·Å¾",hiragana:"Ã£ÂÂÃ£â€šâ€¦Ã£Ââ€ Ã£Ââ€”Ã£â€šâ€¦Ã£Ââ€ ",x:17,y:83,tilt:4,prefectures:"Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Kagoshima",summary:"Southwestern Japan, known for ramen, hot springs, volcanoes, port history, and early foreign exchange.",history:"Kyushu was one of Japan's major gateways to Asia and Europe. Nagasaki trade, volcanic landscapes, samurai domains, and lively cities like Fukuoka give the region a bold personality."},
  {id:"okinawa",romaji:"Okinawa",kanji:"Ã¦Â²â€“Ã§Â¸â€ž",hiragana:"Ã£ÂÅ Ã£ÂÂÃ£ÂÂªÃ£â€šÂ",x:78,y:86,tilt:-2,prefectures:"Okinawa",summary:"Southern island region with Ryukyu heritage, subtropical beaches, music, food, and island history.",history:"Okinawa was once the Ryukyu Kingdom, a maritime culture with strong links across East and Southeast Asia. Its language, music, food, and history remain distinct within Japan."}
];
let regionScriptMode="romaji",activeRegionIndex=0;
japanRegions.splice(0,japanRegions.length,
  {id:"hokkaido",romaji:"Hokkaido",kanji:"åŒ—æµ·é“",hiragana:"ã»ã£ã‹ã„ã©ã†",image:"assets/region-hokkaido.png",prefectures:"Hokkaido",summary:"Japan's wide northern region, known for snow, open landscapes, seafood, hot springs, and Ainu cultural roots.",history:"Hokkaido became formally developed as Japan's northern frontier during the Meiji period, while Ainu culture gives the island a much older story. Its colder climate, huge farmland, and frontier cities make it feel distinct from Honshu.",culture:"Ainu heritage, winter festivals, wide farming towns, ski culture, and calm northern nature.",foods:"Sapporo ramen, jingisukan, seafood bowls, dairy sweets, melon, soup curry.",landmarks:"Sapporo Snow Festival, Biei blue pond, Hakodate night view, Furano lavender fields, Shiretoko.",facts:"Hokkaido is Japan's largest prefecture by area and has some of the country's strongest seasonal scenery.",important:"Sapporo, Hakodate, Asahikawa, Otaru"},
  {id:"tohoku",romaji:"Tohoku",kanji:"æ±åŒ—",hiragana:"ã¨ã†ã»ã",image:"assets/region-tohoku.png",prefectures:"Aomori, Iwate, Miyagi, Akita, Yamagata, Fukushima",summary:"Northern Honshu, famous for festivals, mountains, rice fields, hot springs, snow, and deep seasonal changes.",history:"Tohoku was long seen as Japan's northern heartland, with powerful local clans, mountain faith, farming traditions, and resilient coastal communities. Its festivals and dialects carry a strong regional identity.",culture:"Nebuta floats, mountain worship, onsen villages, rice culture, samurai towns, and local dialects.",foods:"Kiritanpo, gyutan, zunda mochi, wanko soba, apples, seafood.",landmarks:"Matsushima Bay, Hirosaki Castle, Yamadera, Ouchi-juku, Lake Towada.",facts:"Tohoku is one of the best regions for seeing Japan's snowy winters and huge summer festivals.",important:"Sendai, Aomori, Morioka, Akita, Yamagata, Fukushima"},
  {id:"kanto",romaji:"Kanto",kanji:"é–¢æ±",hiragana:"ã‹ã‚“ã¨ã†",image:"assets/region-kanto.png",prefectures:"Tokyo, Kanagawa, Chiba, Saitama, Ibaraki, Tochigi, Gunma",summary:"Tokyo and its surrounding plains form one of Japan's busiest cultural, economic, media, and transport centers.",history:"Kanto grew around Edo, later Tokyo, and became the center of modern Japanese government, rail, business, media, and pop culture. Old shrine towns and megacity life sit side by side.",culture:"Tokyo pop culture, shrine towns, commuter cities, museums, universities, nightlife, and old Edo traditions.",foods:"Monjayaki, sushi, Yokohama ramen, gyoza, natto, senbei.",landmarks:"Tokyo Tower, Asakusa, Shibuya, Nikko Toshogu, Kamakura, Yokohama Minato Mirai.",facts:"The Greater Tokyo Area is one of the largest metropolitan regions in the world.",important:"Tokyo, Yokohama, Chiba, Saitama, Utsunomiya, Mito, Maebashi"},
  {id:"chubu",romaji:"Chubu",kanji:"ä¸­éƒ¨",hiragana:"ã¡ã‚…ã†ã¶",image:"assets/region-chugoku.png",prefectures:"Niigata, Toyama, Ishikawa, Fukui, Yamanashi, Nagano, Gifu, Shizuoka, Aichi",summary:"Central Japan, stretching from the Japan Alps to Nagoya, Mount Fuji, old post towns, and coastal trade routes.",history:"Chubu links eastern and western Japan. Mountain provinces, castle towns, post roads, craft cities, and industrial centers all meet here, making it one of Japan's most varied regions.",culture:"Alpine villages, tea fields, samurai districts, manufacturing cities, traditional crafts, and castle towns.",foods:"Miso katsu, hitsumabushi, soba, Hida beef, tea, seafood from the Japan Sea.",landmarks:"Mount Fuji, Shirakawa-go, Kanazawa, Matsumoto Castle, Tateyama Kurobe Alpine Route.",facts:"Chubu contains both Mount Fuji and the Japanese Alps, giving it huge geographic range.",important:"Nagoya, Kanazawa, Niigata, Nagano, Shizuoka, Gifu, Toyama"},
  {id:"kansai",romaji:"Kansai",kanji:"é–¢è¥¿",hiragana:"ã‹ã‚“ã•ã„",image:"assets/region-chubu.png",prefectures:"Kyoto, Osaka, Hyogo, Nara, Wakayama, Shiga, Mie",summary:"Historic western center of Japan, known for Kyoto, Osaka, Nara, temples, comedy, old capitals, and food culture.",history:"Kansai held Japan's ancient capitals for centuries. Nara and Kyoto shaped court culture, Buddhism, architecture, and literature, while Osaka grew into a merchant city famous for food and trade.",culture:"Old capitals, temples, Kansai dialect, comedy, merchant energy, tea culture, and traditional arts.",foods:"Takoyaki, okonomiyaki, kaiseki, Kobe beef, matcha sweets, kushikatsu.",landmarks:"Fushimi Inari, Osaka Castle, Nara Park, Himeji Castle, Koyasan, Lake Biwa.",facts:"Many ideas people imagine as traditional Japan come from Kansai's long capital history.",important:"Osaka, Kyoto, Kobe, Nara, Wakayama, Otsu, Tsu"},
  {id:"chugoku",romaji:"Chugoku",kanji:"ä¸­å›½",hiragana:"ã¡ã‚…ã†ã”ã",image:"assets/region-shikoku.png",prefectures:"Tottori, Shimane, Okayama, Hiroshima, Yamaguchi",summary:"Western Honshu, with coastal cities, islands, mountains, maritime routes, shrine islands, and layered history.",history:"Chugoku connected Japan to trade routes through the Seto Inland Sea. Hiroshima, old castle towns, shrine islands, and mountain communities give the region memory, maritime culture, and local pride.",culture:"Seto Inland Sea travel, castle towns, shrine islands, folk legends, coastal trade, and quiet mountain communities.",foods:"Hiroshima okonomiyaki, oysters, momiji manju, Izumo soba, pufferfish.",landmarks:"Miyajima, Hiroshima Peace Memorial Park, Tottori Sand Dunes, Izumo Taisha, Kurashiki.",facts:"The name Chugoku means middle country in a historical regional sense, not the country China.",important:"Hiroshima, Okayama, Matsue, Tottori, Yamaguchi"},
  {id:"shikoku",romaji:"Shikoku",kanji:"å››å›½",hiragana:"ã—ã“ã",image:"assets/region-kansai.png",prefectures:"Tokushima, Kagawa, Ehime, Kochi",summary:"Japan's smallest main island, known for pilgrimage routes, udon, mountains, rivers, coasts, and quiet towns.",history:"Shikoku is famous for the 88-temple pilgrimage linked to Kukai. Its rugged terrain, island culture, and smaller cities make it feel quieter and more traditional than Japan's huge urban regions.",culture:"Pilgrimage culture, rural temples, dance festivals, citrus orchards, rivers, and coastal towns.",foods:"Sanuki udon, katsuo tataki, sudachi, jakoten, mikan.",landmarks:"Dogo Onsen, Naruto whirlpools, Iya Valley, Ritsurin Garden, Kochi Castle.",facts:"The Shikoku pilgrimage is one of Japan's most famous spiritual journeys.",important:"Takamatsu, Matsuyama, Kochi, Tokushima"},
  {id:"kyushu",romaji:"Kyushu",kanji:"ä¹å·ž",hiragana:"ãã‚…ã†ã—ã‚…ã†",image:"assets/region-kyushu.png",prefectures:"Fukuoka, Saga, Nagasaki, Kumamoto, Oita, Miyazaki, Kagoshima",summary:"Southwestern Japan, known for ramen, hot springs, volcanoes, port history, castles, and early foreign exchange.",history:"Kyushu was one of Japan's major gateways to Asia and Europe. Nagasaki trade, volcanic landscapes, samurai domains, and lively cities like Fukuoka give the region a bold personality.",culture:"Port history, onsen towns, volcano landscapes, lively food stalls, ceramics, and southern samurai heritage.",foods:"Hakata ramen, castella, tonkotsu, chicken nanban, karashi renkon, mentaiko.",landmarks:"Kumamoto Castle, Beppu Onsen, Sakurajima, Dazaifu Tenmangu, Nagasaki harbor.",facts:"Kyushu has some of Japan's most active volcanic landscapes and famous hot spring areas.",important:"Fukuoka, Nagasaki, Kumamoto, Kagoshima, Beppu, Miyazaki, Saga"},
  {id:"okinawa",romaji:"Okinawa",kanji:"æ²–ç¸„",hiragana:"ãŠããªã‚",image:"assets/region-okinawa.png",prefectures:"Okinawa",summary:"Southern island region with Ryukyu heritage, subtropical beaches, music, food, coral seas, and island history.",history:"Okinawa was once the Ryukyu Kingdom, a maritime culture with strong links across East and Southeast Asia. Its language, music, food, and history remain distinct within Japan.",culture:"Ryukyu dance, sanshin music, island festivals, coral sea culture, pottery, and subtropical daily life.",foods:"Okinawa soba, goya champuru, sata andagi, taco rice, beni imo sweets.",landmarks:"Shuri Castle, Kokusai-dori, Kerama Islands, Churaumi Aquarium, Ishigaki and Miyako beaches.",facts:"Okinawa's culture developed through sea trade and has a different rhythm from mainland Japan.",important:"Naha, Okinawa City, Ishigaki, Miyakojima, Nago"}
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
  {japanese:"ä»Šæ—¥ã¯ã©ã†ã ã£ãŸï¼Ÿ",romaji:"Kyou wa dou datta?",english:"How was your day?",category:"Friends",tone:"Casual"},
  {japanese:"é§…ã¯ã©ã“ã§ã™ã‹ï¼Ÿ",romaji:"Eki wa doko desu ka?",english:"Where is the station?",category:"Travel",tone:"Polite"},
  {japanese:"ãŠã™ã™ã‚ã¯ä½•ã§ã™ã‹ï¼Ÿ",romaji:"Osusume wa nan desu ka?",english:"What do you recommend?",category:"Restaurant",tone:"Polite"},
  {japanese:"ãƒœã‚¤ã‚¹ãƒãƒ£ãƒƒãƒˆã«å…¥ã‚‹ï¼Ÿ",romaji:"Boisu chatto ni hairu?",english:"Are you joining voice chat?",category:"Gaming / Discord",tone:"Casual"}
];
const phraseCategoryKeywords={Travel:"é§…",School:"å­¦æ ¡",Friends:"å‹é”",Restaurant:"ãƒ¬ã‚¹ãƒˆãƒ©ãƒ³","Daily Life":"ä»Šæ—¥","Gaming / Discord":"ã‚²ãƒ¼ãƒ "};
const phraseCategoryIcons={All:"All",School:"School",Travel:"Travel",Friends:"Friends",Restaurant:"Food","Gaming / Discord":"Game","Daily Life":"Daily"};
function decodeMojibakeText(value){if(typeof value!=="string"||!/[ÃÂâ]|[ãåæ][\u0080-\uffff]/.test(value))return value;const bytes=[];for(const ch of value){const code=ch.charCodeAt(0),byte=code<=255?code:cp1252SingleBytes[ch]??cp1252Bytes[ch];if(byte===undefined)return value;bytes.push(byte)}try{const decoded=new TextDecoder("utf-8",{fatal:false}).decode(new Uint8Array(bytes));return decoded.includes("ï¿½")?value:decoded}catch(error){return value}}
function repairDataText(value){if(Array.isArray(value)){value.forEach((item,index)=>value[index]=repairDataText(item));return value}if(value&&typeof value==="object"){Object.keys(value).forEach(key=>{const fixedKey=decodeMojibakeText(key),fixedValue=repairDataText(value[key]);if(fixedKey!==key){delete value[key];value[fixedKey]=fixedValue}else value[key]=fixedValue});return value}return decodeMojibakeText(value)}
function repairJapaneseTextData(){[kanaQuestions,kanjiQuestions,wordQuestions,jlptDeck,jlptWordDeck,prefPins,popularCityPins,prefExplanations,japanRegions].forEach(repairDataText)}
repairJapaneseTextData();
const expandedKanjiQuestions=[
  {q:"æ™‚",a:"time"},{q:"é–“",a:"interval / space"},{q:"åŠ",a:"half"},{q:"åˆ†",a:"minute / part"},{q:"ä»Š",a:"now"},{q:"ä½•",a:"what"},{q:"æ¯Ž",a:"every"},{q:"é€±",a:"week"},{q:"å¹´",a:"year"},{q:"å‰",a:"before"},{q:"å¾Œ",a:"after"},{q:"åˆ",a:"noon"},{q:"èªž",a:"language"},{q:"èª­",a:"read"},{q:"æ›¸",a:"write"},{q:"èž",a:"hear"},{q:"è©±",a:"talk"},{q:"é£Ÿ",a:"eat"},{q:"é£²",a:"drink"},{q:"è²·",a:"buy"},{q:"è¦‹",a:"see"},{q:"è¡Œ",a:"go"},{q:"æ¥",a:"come"},{q:"å¸°",a:"return"},{q:"ä¼š",a:"meet"},{q:"ç¤¾",a:"company / shrine"},{q:"æ ¡",a:"school"},{q:"é§…",a:"station"},{q:"é›»",a:"electricity"},{q:"è»Š",a:"car"},{q:"å‹",a:"friend"},{q:"å",a:"name"},{q:"ç™½",a:"white"},{q:"é»’",a:"black"},{q:"èµ¤",a:"red"},{q:"é’",a:"blue"},{q:"æ–°",a:"new"},{q:"å¤",a:"old"},{q:"é«˜",a:"high"},{q:"å®‰",a:"cheap / peace"},{q:"å¤š",a:"many"},{q:"å°‘",a:"few"},{q:"é•·",a:"long"},{q:"çŸ­",a:"short"},{q:"è¿‘",a:"near"},{q:"é ",a:"far"},{q:"æ¥½",a:"fun / music"},{q:"å¥½",a:"like"},{q:"ä¼‘",a:"rest"},{q:"å¤–",a:"outside"},{q:"å†…",a:"inside"},{q:"åŒ—",a:"north"},{q:"å—",a:"south"},{q:"æ±",a:"east"},{q:"è¥¿",a:"west"},{q:"æ˜¥",a:"spring"},{q:"å¤",a:"summer"},{q:"ç§‹",a:"autumn"},{q:"å†¬",a:"winter"}
];
const expandedWordQuestions=[
  {q:"ãŠã¯ã‚ˆã†",a:"good morning"},{q:"ã“ã‚“ã°ã‚“ã¯",a:"good evening"},{q:"ã™ã¿ã¾ã›ã‚“",a:"excuse me / sorry"},{q:"ãŠé¡˜ã„ã—ã¾ã™",a:"please"},{q:"å¤§ä¸ˆå¤«",a:"okay / safe"},{q:"æ—¥æœ¬èªž",a:"Japanese language"},{q:"è‹±èªž",a:"English language"},{q:"å…ˆç”Ÿ",a:"teacher"},{q:"å®¿é¡Œ",a:"homework"},{q:"å›³æ›¸é¤¨",a:"library"},{q:"ç©ºæ¸¯",a:"airport"},{q:"åˆ‡ç¬¦",a:"ticket"},{q:"æ–™ç†",a:"cooking / cuisine"},{q:"æœã”ã¯ã‚“",a:"breakfast"},{q:"æ˜¼ã”ã¯ã‚“",a:"lunch"},{q:"æ™©ã”ã¯ã‚“",a:"dinner"},{q:"ãŠèŒ¶",a:"tea"},{q:"ç‰›ä¹³",a:"milk"},{q:"æ˜ ç”»",a:"movie"},{q:"éŸ³æ¥½",a:"music"},{q:"å†™çœŸ",a:"photo"},{q:"æ—…è¡Œ",a:"travel"},{q:"å‹‰å¼·",a:"study"},{q:"ç·´ç¿’",a:"practice"},{q:"è³ªå•",a:"question"},{q:"ç­”ãˆ",a:"answer"},{q:"æ™‚é–“",a:"time"},{q:"ä»Šæ—¥",a:"today"},{q:"ä»Šé€±",a:"this week"},{q:"æ¥é€±",a:"next week"},{q:"åŽ»å¹´",a:"last year"},{q:"ä»Šå¹´",a:"this year"},{q:"æ¥å¹´",a:"next year"},{q:"å®¶æ—",a:"family"},{q:"å‹é”",a:"friend"},{q:"éƒ¨å±‹",a:"room"},{q:"é§…å‰",a:"in front of the station"},{q:"é›»è»Š",a:"train"},{q:"åœ°ä¸‹é‰„",a:"subway"},{q:"è‡ªè»¢è»Š",a:"bicycle"},{q:"åº—",a:"shop"},{q:"ã‚³ãƒ³ãƒ“ãƒ‹",a:"convenience store"},{q:"å…¬åœ’",a:"park"},{q:"ç—…é™¢",a:"hospital"},{q:"éƒµä¾¿å±€",a:"post office"},{q:"éŠ€è¡Œ",a:"bank"},{q:"ç¥žç¤¾",a:"shrine"},{q:"ãŠå¯º",a:"temple"},{q:"ç¥­ã‚Š",a:"festival"},{q:"æ¡œ",a:"sakura"},{q:"å¯Œå£«å±±",a:"Mount Fuji"},{q:"å¤ç¥­ã‚Š",a:"summer festival"},{q:"ã‚²ãƒ¼ãƒ ",a:"game"},{q:"ã‚µãƒ¼ãƒãƒ¼",a:"server"},{q:"ãƒãƒ£ãƒƒãƒˆ",a:"chat"},{q:"å‚åŠ ã™ã‚‹",a:"to join"},{q:"é€ã‚‹",a:"to send"},{q:"èª­ã‚€",a:"to read"},{q:"æ›¸ã",a:"to write"},{q:"èžã",a:"to listen / ask"},{q:"è©±ã™",a:"to speak"},{q:"å¾…ã¤",a:"to wait"},{q:"ä½œã‚‹",a:"to make"},{q:"ä½¿ã†",a:"to use"},{q:"è¦šãˆã‚‹",a:"to memorize"},{q:"å¿˜ã‚Œã‚‹",a:"to forget"},{q:"å§‹ã‚ã‚‹",a:"to begin"},{q:"çµ‚ã‚ã‚‹",a:"to finish"},{q:"åŠ©ã‘ã‚‹",a:"to help"},{q:"æŽ¢ã™",a:"to search"},{q:"å¿…è¦",a:"necessary"},{q:"ä¾¿åˆ©",a:"convenient"},{q:"é™ã‹",a:"quiet"},{q:"ã«ãŽã‚„ã‹",a:"lively"},{q:"æœ‰å",a:"famous"},{q:"ç„¡æ–™",a:"free of charge"},{q:"ç°¡å˜",a:"easy"},{q:"é›£ã—ã„",a:"difficult"},{q:"æ¥½ã—ã„",a:"fun"},{q:"ãŠã„ã—ã„",a:"delicious"}
];
const expandedJlptCards={
  n5:[
    {q:"æ™‚",a:"time",on:"ã‚¸",kun:"ã¨ã",example:"æ™‚é–“ / ã˜ã‹ã‚“ / time",note:"Used for time, hours, and schedules.",strokes:10},
    {q:"èªž",a:"language",on:"ã‚´",kun:"ã‹ãŸã‚‹",example:"æ—¥æœ¬èªž / ã«ã»ã‚“ã” / Japanese language",note:"Core kanji for languages.",strokes:14},
    {q:"èª­",a:"read",on:"ãƒ‰ã‚¯",kun:"ã‚ˆã‚€",example:"æœ¬ã‚’èª­ã‚€ / ã»ã‚“ã‚’ã‚ˆã‚€ / read a book",note:"Essential study action.",strokes:14},
    {q:"æ›¸",a:"write",on:"ã‚·ãƒ§",kun:"ã‹ã",example:"åå‰ã‚’æ›¸ã / ãªã¾ãˆã‚’ã‹ã / write a name",note:"Used for writing and documents.",strokes:10}
  ],
  n4:[
    {q:"èª¬æ˜Ž",a:"explanation",on:"ã‚»ãƒ„ãƒ¡ã‚¤",kun:"ã¨ããƒ»ã‚ã‹ã‚‹ã„",example:"èª¬æ˜Žã™ã‚‹ / ã›ã¤ã‚ã„ã™ã‚‹ / to explain",note:"Useful for asking teachers or helpers.",strokes:23},
    {q:"è³ªå•",a:"question",on:"ã‚·ãƒ„ãƒ¢ãƒ³",kun:"ãŸã ã™ãƒ»ã¨ã†",example:"è³ªå•ãŒã‚ã‚‹ / ã—ã¤ã‚‚ã‚“ãŒã‚ã‚‹ / I have a question",note:"A practical classroom and Discord word.",strokes:24},
    {q:"ä¾¿åˆ©",a:"convenient",on:"ãƒ™ãƒ³ãƒª",kun:"ãŸã‚ˆã‚Š",example:"ä¾¿åˆ©ãªã‚¢ãƒ—ãƒª / ã¹ã‚“ã‚Šãªã‚¢ãƒ—ãƒª / convenient app",note:"Common daily-life adjective.",strokes:16},
    {q:"å¿…è¦",a:"necessary",on:"ãƒ’ãƒ„ãƒ¨ã‚¦",kun:"ã‹ãªã‚‰ãšãƒ»ã„ã‚‹",example:"ç·´ç¿’ãŒå¿…è¦ / ã‚Œã‚“ã—ã‚…ã†ãŒã²ã¤ã‚ˆã† / practice is necessary",note:"Important for needs and plans.",strokes:19}
  ],
  n3:[
    {q:"å‚åŠ ",a:"participation",on:"ã‚µãƒ³ã‚«",kun:"ã¾ã„ã‚‹ãƒ»ãã‚ãˆã‚‹",example:"ã‚¤ãƒ™ãƒ³ãƒˆã«å‚åŠ ã™ã‚‹ / ã‚¤ãƒ™ãƒ³ãƒˆã«ã•ã‚“ã‹ã™ã‚‹ / join an event",note:"Perfect for community activity.",strokes:20},
    {q:"é€£çµ¡",a:"contact / communication",on:"ãƒ¬ãƒ³ãƒ©ã‚¯",kun:"ã¤ã‚‰ãªã‚‹ãƒ»ã‹ã‚‰ã‚€",example:"é€£çµ¡ã—ã¦ãã ã•ã„ / ã‚Œã‚“ã‚‰ãã—ã¦ãã ã•ã„ / please contact me",note:"Important for messages and support.",strokes:22},
    {q:"äºˆå®š",a:"plan / schedule",on:"ãƒ¨ãƒ†ã‚¤",kun:"ã‚ã‚‰ã‹ã˜ã‚ãƒ»ã•ã ã‚ã‚‹",example:"äºˆå®šãŒã‚ã‚Šã¾ã™ / ã‚ˆã¦ã„ãŒã‚ã‚Šã¾ã™ / I have plans",note:"Used constantly in scheduling.",strokes:20},
    {q:"æ–‡åŒ–",a:"culture",on:"ãƒ–ãƒ³ã‚«",kun:"ãµã¿ãƒ»ã°ã‘ã‚‹",example:"æ—¥æœ¬æ–‡åŒ– / ã«ã»ã‚“ã¶ã‚“ã‹ / Japanese culture",note:"Central to TASEWAKAI themes.",strokes:8}
  ],
  n2:[
    {q:"æ‰¿èª",a:"approval / recognition",on:"ã‚·ãƒ§ã‚¦ãƒ‹ãƒ³",kun:"ã†ã‘ãŸã¾ã‚ã‚‹ãƒ»ã¿ã¨ã‚ã‚‹",example:"ç”³è«‹ã‚’æ‰¿èªã™ã‚‹ / ã—ã‚“ã›ã„ã‚’ã—ã‚‡ã†ã«ã‚“ã™ã‚‹ / approve an application",note:"Formal word for approval and trust.",strokes:18},
    {q:"å½±éŸ¿",a:"influence / effect",on:"ã‚¨ã‚¤ã‚­ãƒ§ã‚¦",kun:"ã‹ã’ãƒ»ã²ã³ã",example:"æ–‡åŒ–ã«å½±éŸ¿ã™ã‚‹ / ã¶ã‚“ã‹ã«ãˆã„ãã‚‡ã†ã™ã‚‹ / influence culture",note:"Common in essays and news.",strokes:32},
    {q:"æ”¹å–„",a:"improvement",on:"ã‚«ã‚¤ã‚¼ãƒ³",kun:"ã‚ã‚‰ãŸã‚ã‚‹ãƒ»ã‚ˆã„",example:"ã‚µãƒ¼ãƒ“ã‚¹ã‚’æ”¹å–„ã™ã‚‹ / ã‚µãƒ¼ãƒ“ã‚¹ã‚’ã‹ã„ãœã‚“ã™ã‚‹ / improve a service",note:"Useful for projects and feedback.",strokes:23},
    {q:"çŠ¶æ³",a:"situation",on:"ã‚¸ãƒ§ã‚¦ã‚­ãƒ§ã‚¦",kun:"ã‹ãŸã¡",example:"çŠ¶æ³ã‚’ç¢ºèªã™ã‚‹ / ã˜ã‚‡ã†ãã‚‡ã†ã‚’ã‹ãã«ã‚“ã™ã‚‹ / check the situation",note:"Practical for reports and moderation.",strokes:19}
  ],
  n1:[
    {q:"è²¢çŒ®",a:"contribution",on:"ã‚³ã‚¦ã‚±ãƒ³",kun:"ã¿ã¤ã",example:"åœ°åŸŸã«è²¢çŒ®ã™ã‚‹ / ã¡ã„ãã«ã“ã†ã‘ã‚“ã™ã‚‹ / contribute to the community",note:"Advanced word for meaningful community work.",strokes:23},
    {q:"ç¶™æ‰¿",a:"inheritance / succession",on:"ã‚±ã‚¤ã‚·ãƒ§ã‚¦",kun:"ã¤ããƒ»ã†ã‘ãŸã¾ã‚ã‚‹",example:"æ–‡åŒ–ã‚’ç¶™æ‰¿ã™ã‚‹ / ã¶ã‚“ã‹ã‚’ã‘ã„ã—ã‚‡ã†ã™ã‚‹ / inherit culture",note:"Elegant N1 word for culture and tradition.",strokes:25},
    {q:"æ´žå¯Ÿ",a:"insight",on:"ãƒ‰ã‚¦ã‚µãƒ„",kun:"ã»ã‚‰ãƒ»ã¿ã‚‹",example:"æ·±ã„æ´žå¯Ÿ / ãµã‹ã„ã©ã†ã•ã¤ / deep insight",note:"Useful for analysis and advanced discussion.",strokes:25},
    {q:"èºé€²",a:"rapid progress",on:"ãƒ¤ã‚¯ã‚·ãƒ³",kun:"ãŠã©ã‚‹ãƒ»ã™ã™ã‚€",example:"ãƒãƒ¼ãƒ ãŒèºé€²ã™ã‚‹ / ãƒãƒ¼ãƒ ãŒã‚„ãã—ã‚“ã™ã‚‹ / the team advances rapidly",note:"A strong word for growth and success.",strokes:32}
  ]
};
const grammarQuestions=[
  {sentence:"ç§ã¯æ—¥æœ¬èªž___å‹‰å¼·ã—ã¦ã„ã¾ã™ã€‚",romaji:"Watashi wa nihongo ___ benkyou shiteimasu.",english:"I am studying Japanese.",answer:"ã‚’",choices:["ã‚’","ã«","ã§","ã¸"],level:"N5",type:"Particle",category:"Study",icon:"assets/grammar-icon-welcome.png",tip:"Use ã‚’ for the direct object of å‹‰å¼·ã™ã‚‹.",explain:"æ—¥æœ¬èªž is what you study, so ã‚’ marks the object."},
  {sentence:"å­¦æ ¡___è¡Œãã¾ã™ã€‚",romaji:"Gakkou ___ ikimasu.",english:"I go to school.",answer:"ã¸",choices:["ã¸","ã‚’","ãŒ","ã¨"],level:"N5",type:"Direction",category:"School",icon:"assets/grammar-icon-torii-stage.png",tip:"ã¸ marks direction toward a place.",explain:"ã« can also work in many cases, but here ã¸ is the direction marker."},
  {sentence:"å‹é”___æ˜ ç”»ã‚’è¦‹ã¾ã—ãŸã€‚",romaji:"Tomodachi ___ eiga o mimashita.",english:"I watched a movie with a friend.",answer:"ã¨",choices:["ã¨","ãŒ","ã‚’","ã§"],level:"N5",type:"Particle",category:"Friends",icon:"assets/grammar-icon-music.png",tip:"ã¨ means with / together with.",explain:"å‹é”ã¨ means with a friend."},
  {sentence:"é§…___é›»è»Šã«ä¹—ã‚Šã¾ã™ã€‚",romaji:"Eki ___ densha ni norimasu.",english:"I get on the train at the station.",answer:"ã§",choices:["ã§","ã‚’","ã¸","ãŒ"],level:"N5",type:"Place",category:"Travel",icon:"assets/grammar-icon-fuji.png",tip:"ã§ marks where an action happens.",explain:"The action of boarding happens at the station, so use ã§."},
  {sentence:"ã“ã®ãƒ©ãƒ¼ãƒ¡ãƒ³ã¯ã¨ã¦ã‚‚___ã§ã™ã€‚",romaji:"Kono raamen wa totemo ___ desu.",english:"This ramen is very delicious.",answer:"ãŠã„ã—ã„",choices:["ãŠã„ã—ã„","é£Ÿã¹ã‚‹","é£²ã‚€","é§…"],level:"N5",type:"Adjective",category:"Restaurant",icon:"assets/grammar-icon-izakaya.png",tip:"After ã¨ã¦ã‚‚, choose an adjective.",explain:"ãŠã„ã—ã„ is an i-adjective meaning delicious."},
  {sentence:"æ˜¨æ—¥ã€å®¿é¡Œã‚’___ã€‚",romaji:"Kinou, shukudai o ___.",english:"Yesterday, I did homework.",answer:"ã—ã¾ã—ãŸ",choices:["ã—ã¾ã—ãŸ","ã—ã¾ã™","ã—ã¾ã›ã‚“","ã™ã‚‹"],level:"N5",type:"Past tense",category:"School",icon:"assets/grammar-icon-bamboo.png",tip:"æ˜¨æ—¥ points to past tense.",explain:"ã—ã¾ã—ãŸ is the polite past form of ã™ã‚‹."},
  {sentence:"æ—¥æœ¬èªžã‚’è©±ã™___ã§ãã¾ã™ã€‚",romaji:"Nihongo o hanasu ___ dekimasu.",english:"I can speak Japanese.",answer:"ã“ã¨ãŒ",choices:["ã“ã¨ãŒ","ã‚‚ã®ã‚’","ã¨ã“ã‚ã¸","äººã§"],level:"N4",type:"Ability",category:"Study",icon:"assets/grammar-icon-welcome.png",tip:"Verb dictionary form + ã“ã¨ãŒã§ãã¾ã™ means can do.",explain:"è©±ã™ã“ã¨ãŒã§ãã¾ã™ means can speak."},
  {sentence:"é›¨ãŒé™ã£ã¦ã„ã‚‹___ã€å®¶ã«ã„ã¾ã™ã€‚",romaji:"Ame ga futte iru ___, ie ni imasu.",english:"Because it is raining, I am staying home.",answer:"ã®ã§",choices:["ã®ã§","ã‚ˆã‚Š","ã¾ã§","ã—ã‹"],level:"N4",type:"Reason",category:"Daily Life",icon:"assets/grammar-icon-koi.png",tip:"ã®ã§ gives a reason softly.",explain:"ã®ã§ connects a cause to a result."},
  {sentence:"å…ˆç”Ÿ___è³ªå•ã—ã¦ã‚‚ã„ã„ã§ã™ã‹ã€‚",romaji:"Sensei ___ shitsumon shite mo ii desu ka.",english:"May I ask the teacher a question?",answer:"ã«",choices:["ã«","ã‚’","ã§","ã‹ã‚‰"],level:"N5",type:"Target",category:"School",icon:"assets/grammar-icon-welcome.png",tip:"ã« marks the person receiving the action.",explain:"è³ªå•ã™ã‚‹ often uses ã« for the person asked."},
  {sentence:"ã“ã®åº—ã¯å®‰ã„___ã€ãŠã„ã—ã„ã§ã™ã€‚",romaji:"Kono mise wa yasui ___, oishii desu.",english:"This shop is cheap and delicious.",answer:"ã—",choices:["ã—","ã®ã«","ãªãŒã‚‰","ã»ã©"],level:"N4",type:"Listing reasons",category:"Restaurant",icon:"assets/grammar-icon-izakaya.png",tip:"ã— lists reasons or qualities.",explain:"å®‰ã„ã—ã€ãŠã„ã—ã„ means it is cheap and also delicious."},
  {sentence:"æ¼¢å­—ã‚’è¦šãˆã‚‹___ã€æ¯Žæ—¥ç·´ç¿’ã—ã¾ã™ã€‚",romaji:"Kanji o oboeru ___, mainichi renshuu shimasu.",english:"In order to memorize kanji, I practice every day.",answer:"ãŸã‚ã«",choices:["ãŸã‚ã«","ã‚ã¨ã§","ãªãŒã‚‰","ã‚ˆã‚Š"],level:"N4",type:"Purpose",category:"Study",icon:"assets/grammar-icon-fan.png",tip:"ãŸã‚ã« expresses purpose.",explain:"è¦šãˆã‚‹ãŸã‚ã« means in order to memorize."},
  {sentence:"ã‚²ãƒ¼ãƒ ã‚’___ãªãŒã‚‰ã€æ—¥æœ¬èªžã‚’èžãã¾ã™ã€‚",romaji:"Geemu o ___ nagara, nihongo o kikimasu.",english:"While playing games, I listen to Japanese.",answer:"ã—",choices:["ã—","ã™ã‚‹","ã—ãŸ","ã—ã¦"],level:"N4",type:"While doing",category:"Gaming / Discord",icon:"assets/grammar-icon-koinobori.png",tip:"Verb stem + ãªãŒã‚‰ means while doing.",explain:"ã™ã‚‹ becomes ã— before ãªãŒã‚‰."}
];

function looksCorruptedText(value){return typeof value==="string"&&(/[ÃÂâðŸ]|[ãåæ][\u0080-\uffff]/.test(value)||/[\u0080-\u009f]/.test(value)||/�/.test(value))}
function safeLearningText(value,fallback=""){const fixed=decodeMojibakeText(String(value??""));return looksCorruptedText(fixed)?fallback:fixed}
const cleanKanaDeck=[
  ["\u3042","a"],["\u3044","i"],["\u3046","u"],["\u3048","e"],["\u304a","o"],["\u304b","ka"],["\u304d","ki"],["\u304f","ku"],["\u3051","ke"],["\u3053","ko"],["\u3055","sa"],["\u3057","shi"],["\u3059","su"],["\u305b","se"],["\u305d","so"],["\u305f","ta"],["\u3061","chi"],["\u3064","tsu"],["\u3066","te"],["\u3068","to"],["\u306a","na"],["\u306b","ni"],["\u306c","nu"],["\u306d","ne"],["\u306e","no"],["\u306f","ha"],["\u3072","hi"],["\u3075","fu"],["\u3078","he"],["\u307b","ho"],["\u307e","ma"],["\u307f","mi"],["\u3080","mu"],["\u3081","me"],["\u3082","mo"],["\u3084","ya"],["\u3086","yu"],["\u3088","yo"],["\u3089","ra"],["\u308a","ri"],["\u308b","ru"],["\u308c","re"],["\u308d","ro"],["\u308f","wa"],["\u3092","wo"],["\u3093","n"]
].map(([q,a])=>({q,a}));
const cleanGrammarDeck=[
  {sentence:"\u79c1\u306f\u65e5\u672c\u8a9e___\u52c9\u5f37\u3057\u3066\u3044\u307e\u3059\u3002",romaji:"Watashi wa nihongo ___ benkyou shiteimasu.",english:"I am studying Japanese.",answer:"\u3092",choices:["\u3092","\u306b","\u3067","\u3078"],level:"N5",type:"Particle",category:"Study",icon:"assets/grammar-icon-welcome.png",tip:"Use \u3092 for the direct object of \u52c9\u5f37\u3059\u308b.",explain:"\u65e5\u672c\u8a9e is what you study, so \u3092 marks the object."},
  {sentence:"\u5b66\u6821___\u884c\u304d\u307e\u3059\u3002",romaji:"Gakkou ___ ikimasu.",english:"I go to school.",answer:"\u3078",choices:["\u3078","\u3092","\u304c","\u3068"],level:"N5",type:"Direction",category:"School",icon:"assets/grammar-icon-torii-stage.png",tip:"\u3078 marks direction toward a place.",explain:"\u306b can also work in many cases, but here \u3078 is the direction marker."},
  {sentence:"\u53cb\u9054___\u6620\u753b\u3092\u898b\u307e\u3057\u305f\u3002",romaji:"Tomodachi ___ eiga o mimashita.",english:"I watched a movie with a friend.",answer:"\u3068",choices:["\u3068","\u304c","\u3092","\u3067"],level:"N5",type:"Particle",category:"Friends",icon:"assets/grammar-icon-music.png",tip:"\u3068 means with / together with.",explain:"\u53cb\u9054\u3068 means with a friend."},
  {sentence:"\u99c5___\u96fb\u8eca\u306b\u4e57\u308a\u307e\u3059\u3002",romaji:"Eki ___ densha ni norimasu.",english:"I get on the train at the station.",answer:"\u3067",choices:["\u3067","\u3092","\u3078","\u304c"],level:"N5",type:"Place",category:"Travel",icon:"assets/grammar-icon-fuji.png",tip:"\u3067 marks where an action happens.",explain:"The action of boarding happens at the station, so use \u3067."},
  {sentence:"\u3053\u306e\u30e9\u30fc\u30e1\u30f3\u306f\u3068\u3066\u3082___\u3067\u3059\u3002",romaji:"Kono raamen wa totemo ___ desu.",english:"This ramen is very delicious.",answer:"\u304a\u3044\u3057\u3044",choices:["\u304a\u3044\u3057\u3044","\u98df\u3079\u308b","\u98f2\u3080","\u99c5"],level:"N5",type:"Adjective",category:"Restaurant",icon:"assets/grammar-icon-izakaya.png",tip:"After \u3068\u3066\u3082, choose an adjective.",explain:"\u304a\u3044\u3057\u3044 is an i-adjective meaning delicious."},
  {sentence:"\u6628\u65e5\u3001\u5bbf\u984c\u3092___\u3002",romaji:"Kinou, shukudai o ___.",english:"Yesterday, I did homework.",answer:"\u3057\u307e\u3057\u305f",choices:["\u3057\u307e\u3057\u305f","\u3057\u307e\u3059","\u3057\u307e\u305b\u3093","\u3059\u308b"],level:"N5",type:"Past tense",category:"School",icon:"assets/grammar-icon-bamboo.png",tip:"\u6628\u65e5 points to past tense.",explain:"\u3057\u307e\u3057\u305f is the polite past form of \u3059\u308b."},
  {sentence:"\u65e5\u672c\u8a9e\u3092\u8a71\u3059___\u3067\u304d\u307e\u3059\u3002",romaji:"Nihongo o hanasu ___ dekimasu.",english:"I can speak Japanese.",answer:"\u3053\u3068\u304c",choices:["\u3053\u3068\u304c","\u3082\u306e\u3092","\u3068\u3053\u308d\u3078","\u4eba\u3067"],level:"N4",type:"Ability",category:"Study",icon:"assets/grammar-icon-welcome.png",tip:"Verb dictionary form + \u3053\u3068\u304c\u3067\u304d\u307e\u3059 means can do.",explain:"\u8a71\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059 means can speak."},
  {sentence:"\u96e8\u304c\u964d\u3063\u3066\u3044\u308b___\u3001\u5bb6\u306b\u3044\u307e\u3059\u3002",romaji:"Ame ga futte iru ___, ie ni imasu.",english:"Because it is raining, I am staying home.",answer:"\u306e\u3067",choices:["\u306e\u3067","\u3088\u308a","\u307e\u3067","\u3057\u304b"],level:"N4",type:"Reason",category:"Daily Life",icon:"assets/grammar-icon-koi.png",tip:"\u306e\u3067 gives a reason softly.",explain:"\u306e\u3067 connects a cause to a result."},
  {sentence:"\u5148\u751f___\u8cea\u554f\u3057\u3066\u3082\u3044\u3044\u3067\u3059\u304b\u3002",romaji:"Sensei ___ shitsumon shite mo ii desu ka.",english:"May I ask the teacher a question?",answer:"\u306b",choices:["\u306b","\u3092","\u3067","\u304b\u3089"],level:"N5",type:"Target",category:"School",icon:"assets/feature-grammar-premium.png",tip:"\u306b marks the person receiving the action.",explain:"\u8cea\u554f\u3059\u308b often uses \u306b for the person asked."},
  {sentence:"\u3053\u306e\u5e97\u306f\u5b89\u3044___\u3001\u304a\u3044\u3057\u3044\u3067\u3059\u3002",romaji:"Kono mise wa yasui ___, oishii desu.",english:"This shop is cheap and delicious.",answer:"\u3057",choices:["\u3057","\u306e\u306b","\u306a\u304c\u3089","\u307b\u3069"],level:"N4",type:"Listing reasons",category:"Restaurant",icon:"assets/grammar-icon-izakaya.png",tip:"\u3057 lists reasons or qualities.",explain:"\u5b89\u3044\u3057\u3001\u304a\u3044\u3057\u3044 means it is cheap and also delicious."},
  {sentence:"\u6f22\u5b57\u3092\u899a\u3048\u308b___\u3001\u6bce\u65e5\u7df4\u7fd2\u3057\u307e\u3059\u3002",romaji:"Kanji o oboeru ___, mainichi renshuu shimasu.",english:"In order to memorize kanji, I practice every day.",answer:"\u305f\u3081\u306b",choices:["\u305f\u3081\u306b","\u3042\u3068\u3067","\u306a\u304c\u3089","\u3088\u308a"],level:"N4",type:"Purpose",category:"Study",icon:"assets/grammar-icon-fan.png",tip:"\u305f\u3081\u306b expresses purpose.",explain:"\u899a\u3048\u308b\u305f\u3081\u306b means in order to memorize."},
  {sentence:"\u30b2\u30fc\u30e0\u3092___\u306a\u304c\u3089\u3001\u65e5\u672c\u8a9e\u3092\u805e\u304d\u307e\u3059\u3002",romaji:"Geemu o ___ nagara, nihongo o kikimasu.",english:"While playing games, I listen to Japanese.",answer:"\u3057",choices:["\u3057","\u3059\u308b","\u3057\u305f","\u3057\u3066"],level:"N4",type:"While doing",category:"Gaming / Discord",icon:"assets/grammar-icon-koinobori.png",tip:"Verb stem + \u306a\u304c\u3089 means while doing.",explain:"\u3059\u308b becomes \u3057 before \u306a\u304c\u3089."}
];
function resetCorruptedLearningDecks(){kanaQuestions.splice(0,kanaQuestions.length,...cleanKanaDeck);grammarQuestions.splice(0,grammarQuestions.length,...cleanGrammarDeck);try{const cached=JSON.parse(localStorage.getItem("tasewakaiTatoebaPhrases")||"null");if(cached&&Array.isArray(cached.items)&&cached.items.some(item=>looksCorruptedText(item?.japanese)||looksCorruptedText(item?.english)||looksCorruptedText(item?.category)))localStorage.removeItem("tasewakaiTatoebaPhrases")}catch(error){localStorage.removeItem("tasewakaiTatoebaPhrases")}}
resetCorruptedLearningDecks();
function cleanTextNodeValue(value){if(typeof value!=="string"||!value.trim())return value;const fixed=decodeMojibakeText(value);if(!looksCorruptedText(fixed))return fixed;return fixed.replace(/[ÃÂâðŸ][^\s<>{}]{0,12}/g,"").replace(/[ãåæ][\u0080-\uffff][^\s<>{}]{0,12}/g,"").replace(/[\u0080-\u009f�]/g,"").replace(/\s{2,}/g," ").trim()||""}
function cleanVisibleMojibake(root=document.body){if(!root)return;const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode(node){if(!node.nodeValue||!looksCorruptedText(node.nodeValue))return NodeFilter.FILTER_REJECT;const parent=node.parentElement;if(parent&&["SCRIPT","STYLE","TEXTAREA","INPUT"].includes(parent.tagName))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT}});const nodes=[];while(walker.nextNode())nodes.push(walker.currentNode);nodes.forEach(node=>{node.nodeValue=cleanTextNodeValue(node.nodeValue)})}
function installMojibakeGuard(){if(!document.body){document.addEventListener("DOMContentLoaded",installMojibakeGuard,{once:true});return}if(window.__tasewakaiMojibakeGuard)return;window.__tasewakaiMojibakeGuard=true;let scheduled=false;const run=()=>{scheduled=false;cleanVisibleMojibake()};const observer=new MutationObserver(()=>{if(!scheduled){scheduled=true;requestAnimationFrame(run)}});cleanVisibleMojibake();observer.observe(document.body,{childList:true,subtree:true,characterData:true})}
installMojibakeGuard();function addUniqueQuestions(target,items){const seen=new Set(target.map(item=>`${decodeMojibakeText(item.q)}|${decodeMojibakeText(item.a)}`));items.forEach(item=>{const key=`${item.q}|${item.a}`;if(!seen.has(key)){target.push(item);seen.add(key)}})}
function shuffle(items){return items.map(value=>({value,sort:Math.random()})).sort((a,b)=>a.sort-b.sort).map(item=>item.value)}
function expandLocalLearningData(){repairDataText(expandedKanjiQuestions);repairDataText(expandedWordQuestions);repairDataText(expandedJlptCards);repairDataText(jlptWordDeck);addUniqueQuestions(kanjiQuestions,expandedKanjiQuestions);addUniqueQuestions(wordQuestions,expandedWordQuestions);Object.entries(expandedJlptCards).forEach(([level,cards])=>{jlptDeck[level]??=[];addUniqueQuestions(jlptDeck[level],cards)});repairDataText(grammarQuestions);repairDataText(jlptDeck);repairDataText(kanjiQuestions);repairDataText(wordQuestions)}
expandLocalLearningData();
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
  {icon:"ðŸŒ¸",name:"Sakura Spirit",text:"Bonus EXP wind surrounds your next reward.",effect:"xp"},
  {icon:"ðŸ“œ",name:"Lost Scroll",text:"You found a free hint for this session.",effect:"hint"},
  {icon:"ðŸ¦Š",name:"Fox Messenger",text:"Bonus vocabulary insight unlocked.",effect:"vocab"},
  {icon:"ðŸ®",name:"Shrine Visit",text:"Temporary XP boost activated.",effect:"boost"},
  {icon:"ðŸŽ",name:"Treasure Chest",text:"A small YEN reward appeared.",effect:"yen"},
  {icon:"ðŸ—»",name:"Traveler Encounter",text:"A bonus challenge is waiting.",effect:"challenge"},
  {icon:"ðŸ’Ž",name:"Rare Discovery",text:"Achievement progress increased.",effect:"rare"}
];
const kanjiStrokeFallback={"\u65e5":4,"\u6708":4,"\u4eba":2,"\u5c71":3,"\u5ddd":3,"\u706b":4,"\u6c34":4,"\u6728":4,"\u91d1":8,"\u571f":3,"\u5b66":8,"\u751f":5,"\u4f1a":6,"\u793e":7,"\u5e97":8,"\u99c5":14,"\u96fb":13,"\u8eca":7,"\u9053":12,"\u5834":12,"\u9280":14,"\u75c5":10,"\u9662":10,"\u52c9":10,"\u5f37":11,"\u958b":12,"\u9589":11,"\u8cea":15,"\u554f":11,"\u7b54":12,"\u4f53":7,"\u65c5":10,"\u9928":16,"\u6620":9,"\u753b":8,"\u904b":12,"\u8ee2":11,"\u9023":10,"\u7d61":12,"\u6b74":14,"\u53f2":5,"\u7d50":12,"\u679c":8,"\u7531":5,"\u60b2":12,"\u559c":12,"\u6012":9,"\u9759":14,"\u50cd":13,"\u9078":15,"\u8b70":20};
let progress=JSON.parse(localStorage.getItem("tasewakaiTrainerProgress")||"{}");
progress.name??="Guest Learner";progress.points??=0;progress.exp??=0;progress.level??=1;progress.yen??=0;progress.streak??=0;progress.lastNameChange??=0;progress.nameLogs??=[];progress.economyHash??="";progress.triedLearning??=false;progress.inventory??={};progress.purchaseLedger??={};progress.sellHistory??=[];progress.giftHistory??=[];progress.lastGiftAt??=0;progress.nameBonusClaimed??=false;
progress.memberSince??=new Date().toISOString();progress.passportNo??=`TW-${Math.floor(1000+Math.random()*9000)}-${String(Date.now()).slice(-4)}`;progress.stats??={kanji:0,vocab:0,lessons:0,daysActive:1,events:0,contributions:0};progress.collections??={templeStamps:0,sakuraPetals:0,festivalItems:0,shrineCharms:0,seasonal:0};progress.lastActiveDate??=todayKey();
let leaderboard=JSON.parse(localStorage.getItem("tasewakaiTrainerLeaderboard")||"[]");
let catTrainerPick=Math.random()>.5?"n5":"trainer",lastHudSakuraTier="",counterAnimationToken=0;
let dailyPhrases=[...LOCAL_PHRASES],selectedPhraseIndex=0,activePhraseCategory="All",phrasesLoaded=false;
let phraseProgress=JSON.parse(localStorage.getItem("tasewakaiPhraseProgress")||"{}");
const ONLINE_LEADERBOARD_ENDPOINT="/api/leaderboard";
const SUPABASE_LEADERBOARD_URL="";
const SUPABASE_LEADERBOARD_ANON_KEY="";
const SUPABASE_LEADERBOARD_TABLE="leaderboard";
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
  {word:"æ—…",meaning:"journey",kanji:"é“",phrase:"ä»Šæ—¥ã¯ä¸€ç·’ã«å‹‰å¼·ã—ã‚ˆã†ã€‚",quest:"Learn one phrase",fortune:"Omikuji: small luck"},
  {word:"ä»²é–“",meaning:"companion",kanji:"å­¦",phrase:"ã¾ãŸæ˜Žæ—¥ä¼šã„ã¾ã—ã‚‡ã†ã€‚",quest:"Answer one kana card",fortune:"Omikuji: good wind"},
  {word:"æ–‡åŒ–",meaning:"culture",kanji:"ä¼š",phrase:"æ—¥æœ¬èªžã‚’å°‘ã—è©±ã›ã¾ã™ã€‚",quest:"Complete one JLPT card",fortune:"Omikuji: lucky lantern"},
  {word:"æ¡œ",meaning:"sakura",kanji:"èŠ±",phrase:"ã‚†ã£ãã‚Šé€²ã¿ã¾ã—ã‚‡ã†ã€‚",quest:"Save your passport name",fortune:"Omikuji: bright path"}
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
  if(tool==="grammar"){
    markLearningTried();
    document.getElementById("grammarTool").classList.remove("hidden");
    initGrammarBuilder();
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
function normalizePhrase(item){if(!item)return null;const japanese=safeLearningText(item.japanese,"");if(!japanese||looksCorruptedText(japanese))return null;const english=safeLearningText(item.english,"Meaning unavailable");if(looksCorruptedText(english))return null;return {...item,japanese,romaji:safeLearningText(item.romaji,""),english,category:safeLearningText(item.category,"Daily Life"),tone:safeLearningText(item.tone,"Casual"),difficulty:safeLearningText(item.difficulty||guessPhraseDifficulty(item),"N5")}}
function guessPhraseDifficulty(item){const text=(item?.japanese||"")+String(item?.romaji||"");if(/[äºˆç´„è³ªå•é›»è»Šåˆ‡ç¬¦å…ˆç”Ÿ]/.test(text))return"N4";if(/[å‚åŠ é€šè©±äºˆå®šå®¿é¡Œ]/.test(text))return"N5";return"N5"}
function phraseKey(item){return `${item?.japanese||""}|${item?.english||""}`}
function todayKey(){return new Date().toISOString().slice(0,10)}
function savePhraseProgress(){localStorage.setItem("tasewakaiPhraseProgress",JSON.stringify(phraseProgress))}
function setPhraseStatus(text,type="ready"){const el=document.getElementById("phraseApiStatus");if(!el)return;el.textContent=text;el.className="phrase-api-pill phrase-api-status "+type}
async function initDailyPhrases(){if(!phraseProgress.learned)phraseProgress.learned=[];if(!phraseProgress.favorites)phraseProgress.favorites=[];if(!phraseProgress.daily)phraseProgress.daily={date:todayKey(),count:0,yen:0,xp:0};if(phraseProgress.daily.date!==todayKey())phraseProgress.daily={date:todayKey(),count:0,yen:0,xp:0};if(!phrasesLoaded){phrasesLoaded=true;await loadLocalPhraseFile();loadCachedApiPhrases();fetchTatoebaPhrases(false)}selectedPhraseIndex=pickFreshPhraseIndex(phrasePool(),true);renderPhraseCategories();renderDailyPhrases();updatePhraseProgress()}
async function loadLocalPhraseFile(){try{const response=await fetch("data/daily-phrases.json",{cache:"no-store"});if(!response.ok)throw new Error("local phrase file unavailable");const data=await response.json();if(Array.isArray(data)&&data.length)dailyPhrases=mergePhrases([...LOCAL_PHRASES,...data]);setPhraseStatus(`${dailyPhrases.length} local phrases loaded.`,"success")}catch(error){dailyPhrases=[...LOCAL_PHRASES];setPhraseStatus("Local fallback phrases loaded.","warning")}}
function loadCachedApiPhrases(){try{const cached=JSON.parse(localStorage.getItem("tasewakaiTatoebaPhrases")||"null");if(!cached||Date.now()-cached.time>1000*60*60*24)return;if(Array.isArray(cached.items)&&cached.items.length){dailyPhrases=mergePhrases([...dailyPhrases,...cached.items]);setPhraseStatus("Cached API examples loaded.","success")}}catch(error){}}
function mergePhrases(items){const seen=new Set();return items.map(normalizePhrase).filter(item=>{if(!item||!item.japanese)return false;const key=phraseKey(item);if(seen.has(key))return false;seen.add(key);return true})}
async function fetchTatoebaPhrases(force=false){let cache=null;try{cache=JSON.parse(localStorage.getItem("tasewakaiTatoebaPhrases")||"null")}catch(error){localStorage.removeItem("tasewakaiTatoebaPhrases")}if(!force&&cache&&Date.now()-cache.time<1000*60*60*24)return;setPhraseStatus("Loading Tatoeba API examples...","loading");try{const categories=Object.keys(phraseCategoryKeywords),results=[];for(const category of categories){const params=new URLSearchParams({lang:"jpn",q:phraseCategoryKeywords[category],sort:"relevance",limit:"8",showtrans:"matching",is_unapproved:"no"});params.set("trans:lang","eng");const url=`https://api.tatoeba.org/v1/sentences?${params.toString()}`;const response=await fetch(url,{cache:"no-store"});if(!response.ok)throw new Error("Tatoeba unavailable");const data=await response.json();const sentences=(data.data||data.results||[]).slice(0,4);sentences.forEach(entry=>{const japanese=entry.text||entry.sentence||"";const translations=Array.isArray(entry.translations)?entry.translations.flat(3):[];const english=translations.find(t=>t&&t.lang==="eng"&&t.text)?.text||"Example sentence from Tatoeba.";if(japanese)results.push({japanese,romaji:"API example",english,category,tone:"Example"})})}const cleanResults=mergePhrases(results);if(cleanResults.length){localStorage.setItem("tasewakaiTatoebaPhrases",JSON.stringify({time:Date.now(),items:cleanResults}));dailyPhrases=mergePhrases([...dailyPhrases,...cleanResults]);setPhraseStatus(`${cleanResults.length} Tatoeba examples added.`,"success");renderPhraseCategories();renderDailyPhrases()}else setPhraseStatus("API had no clean extra examples. Local phrases stay active.","warning")}catch(error){setPhraseStatus("Tatoeba unavailable. Local phrases stay active.","warning")}}
function phrasePool(){return activePhraseCategory==="All"?dailyPhrases:dailyPhrases.filter(item=>phraseCategoryLabel(item.category)===activePhraseCategory)}
function phraseRecentKeys(){phraseProgress.recent=phraseProgress.recent||[];return phraseProgress.recent}
function rememberPhraseSeen(phrase){if(!phrase)return;const key=phraseKey(phrase),recent=phraseRecentKeys().filter(item=>item!==key);recent.unshift(key);phraseProgress.recent=recent.slice(0,12);savePhraseProgress()}
function pickFreshPhraseIndex(pool,randomize=true){if(!pool.length)return 0;const learned=new Set(phraseProgress.learned||[]),recent=new Set(phraseRecentKeys());let choices=pool.map((item,index)=>({item,index})).filter(entry=>!learned.has(phraseKey(entry.item))&&!recent.has(phraseKey(entry.item)));if(!choices.length)choices=pool.map((item,index)=>({item,index})).filter(entry=>!learned.has(phraseKey(entry.item)));if(!choices.length)choices=pool.map((item,index)=>({item,index})).filter(entry=>entry.index!==selectedPhraseIndex);if(!choices.length)return 0;return choices[randomize?Math.floor(Math.random()*choices.length):0].index}
function advanceDailyPhrase(randomize=true){const pool=phrasePool();selectedPhraseIndex=pickFreshPhraseIndex(pool,randomize);renderDailyPhrases()}
function phraseDisplayEntries(pool){const seen=new Set(),entries=[];const add=index=>{const item=pool[index];if(!item)return;const key=phraseKey(item);if(seen.has(key))return;seen.add(key);entries.push({item,index})};add(selectedPhraseIndex);pool.map((item,index)=>({item,index})).filter(entry=>!(phraseProgress.learned||[]).includes(phraseKey(entry.item))).forEach(entry=>add(entry.index));pool.forEach((_,index)=>add(index));return entries.slice(0,18)}
function cleanPhraseText(value,fallback=""){const fixed=safeLearningText(value,fallback);return fixed&&fixed!=="undefined"?fixed:fallback}
function phraseCategoryLabel(category){return cleanPhraseText(category,"Daily Life")}
function phraseToneLabel(tone){return cleanPhraseText(tone,"Casual")}
function phraseDifficultyLabel(level){return cleanPhraseText(level,"N5")}
function renderPhraseCategories(){const wrap=document.getElementById("phraseCategoryList");if(!wrap)return;const categories=["All",...new Set(dailyPhrases.map(item=>phraseCategoryLabel(item.category)))];wrap.innerHTML=categories.map(category=>{const count=category==="All"?dailyPhrases.length:dailyPhrases.filter(item=>phraseCategoryLabel(item.category)===category).length;return `<button class="${category===activePhraseCategory?"active":""}" onclick="setPhraseCategory('${category.replace(/'/g,"\\'")}')"><span></span>${category} <small>${count}</small></button>`}).join("")}
function setPhraseCategory(category){activePhraseCategory=category;selectedPhraseIndex=pickFreshPhraseIndex(phrasePool(),true);renderPhraseCategories();renderDailyPhrases()}
function renderDailyPhrases(){const pool=phrasePool();if(!pool.length)return;selectedPhraseIndex=Math.min(selectedPhraseIndex,pool.length-1);const phrase=pool[selectedPhraseIndex];const category=phraseCategoryLabel(phrase.category),tone=phraseToneLabel(phrase.tone),difficulty=phraseDifficultyLabel(phrase.difficulty);document.getElementById("phraseJapanese").textContent=cleanPhraseText(phrase.japanese,"Phrase unavailable");document.getElementById("phraseRomaji").textContent=cleanPhraseText(phrase.romaji,"Romaji unavailable");document.getElementById("phraseEnglish").textContent=cleanPhraseText(phrase.english,"Meaning unavailable");document.querySelector(".phrase-category-badge").textContent=category;document.querySelector(".phrase-tone-badge").textContent=tone;document.querySelector(".phrase-difficulty-badge").textContent=difficulty;const fav=document.getElementById("phraseFavoriteBtn"),key=phraseKey(phrase);if(fav){fav.textContent=(phraseProgress.favorites||[]).includes(key)?"Favorited":"Favorite";fav.classList.toggle("active",(phraseProgress.favorites||[]).includes(key))}const grid=document.getElementById("phraseGrid");if(grid)grid.innerHTML=phraseDisplayEntries(pool).map(({item,index})=>{const learned=(phraseProgress.learned||[]).includes(phraseKey(item));return `<button class="phrase-mini-card ${index===selectedPhraseIndex?"active":""} ${learned?"learned":""}" onclick="selectDailyPhrase(${index})"><span>${phraseCategoryLabel(item.category)} - ${phraseDifficultyLabel(item.difficulty)}</span><strong>${cleanPhraseText(item.japanese,"Phrase")}</strong><small>${cleanPhraseText(item.english,"")}</small><em>${learned?"Learned":"+YEN +EXP"}</em></button>`}).join("");updatePhraseProgress()}
function selectDailyPhrase(index){selectedPhraseIndex=index;rememberPhraseSeen(phrasePool()[selectedPhraseIndex]);renderDailyPhrases()}
function randomDailyPhrase(){advanceDailyPhrase(true);rememberPhraseSeen(phrasePool()[selectedPhraseIndex])}
async function copyDailyPhrase(){const pool=phrasePool(),phrase=pool[selectedPhraseIndex];if(!phrase)return;const text=`${safeLearningText(phrase.japanese,"NOT AVAILABLE")}\n${safeLearningText(phrase.romaji,"")}\n${safeLearningText(phrase.english,"")}`;try{navigator.clipboard.writeText(text);setPhraseStatus("Phrase copied.","success")}catch(error){setPhraseStatus("Copy unavailable in this browser.","warning")}}
function toggleFavoritePhrase(){const phrase=phrasePool()[selectedPhraseIndex];if(!phrase)return;const key=phraseKey(phrase);phraseProgress.favorites=phraseProgress.favorites||[];phraseProgress.favorites=phraseProgress.favorites.includes(key)?phraseProgress.favorites.filter(item=>item!==key):[key,...phraseProgress.favorites];savePhraseProgress();renderDailyPhrases();setPhraseStatus(phraseProgress.favorites.includes(key)?"Phrase favorited.":"Favorite removed.","success")}
function speakDailyPhrase(){const phrase=phrasePool()[selectedPhraseIndex];if(!phrase||!window.speechSynthesis){setPhraseStatus("Audio unavailable in this browser.","warning");return}speechSynthesis.cancel();const utterance=new SpeechSynthesisUtterance(safeLearningText(phrase.japanese,""));utterance.lang="ja-JP";utterance.rate=.88;utterance.pitch=1.02;speechSynthesis.speak(utterance);setPhraseStatus("Playing Japanese pronunciation.","success")}
function markCurrentPhraseLearned(){const phrase=phrasePool()[selectedPhraseIndex];if(!phrase)return;if(!phraseProgress.learned)phraseProgress.learned=[];if(!phraseProgress.daily||phraseProgress.daily.date!==todayKey())phraseProgress.daily={date:todayKey(),count:0,yen:0,xp:0};const key=phraseKey(phrase);if(phraseProgress.learned.includes(key)){setPhraseStatus("Already learned. Pick another phrase for rewards.","warning");advanceDailyPhrase(true);return}phraseProgress.learned.unshift(key);phraseProgress.daily.count=Math.min(5,(phraseProgress.daily.count||0)+1);const yenGain=phrase.difficulty==="N4"?8:6,expGain=phrase.difficulty==="N4"?12:10;phraseProgress.daily.yen=(phraseProgress.daily.yen||0)+yenGain;phraseProgress.daily.xp=(phraseProgress.daily.xp||0)+expGain;phraseProgress.streak=Number(phraseProgress.streak||1);phraseProgress.lastLearnedDate=phraseProgress.lastLearnedDate||todayKey();if(phraseProgress.lastLearnedDate!==todayKey()){phraseProgress.streak+=1;phraseProgress.lastLearnedDate=todayKey()}progress.triedLearning=true;addPassportActivity("vocab",1);addPassportActivity("lesson",1);progress.yen=Number(progress.yen||0)+yenGain;progress.points=Number(progress.points||0)+expGain;progress.exp=Number(progress.exp||0)+expGain;progress.level=Number(progress.level||1);let next=progress.level*100;while(progress.exp>=next){progress.exp-=next;progress.level++;next=progress.level*100;progress.yen+=25}saveProgress();savePhraseProgress();updateLeaderboard();updateTrainerUI();pulseHudElement("hudYen");pulseHudElement("hudExpFill");spawnPhraseReward(yenGain,expGain);advanceDailyPhrase(true);setPhraseStatus(`Phrase learned! +${yenGain} YEN +${expGain} XP`,"success")}
function updatePhraseProgress(){const daily=phraseProgress.daily||{count:0,yen:0,xp:0},count=Math.min(daily.count||0,5),next=Number(progress.level||1)*100,exp=Number(progress.exp||0),fill=document.getElementById("phraseProgressFill");if(document.getElementById("phraseMainLevel"))document.getElementById("phraseMainLevel").textContent=`Lv. ${progress.level||1}`;if(document.getElementById("phraseProgressCount"))document.getElementById("phraseProgressCount").textContent=`Daily phrases ${count}/5 - today +${daily.yen||0} YEN +${daily.xp||0} XP`;if(fill)fill.style.width=Math.min(exp/next*100,100)+"%";if(document.getElementById("phraseRewardYen"))document.getElementById("phraseRewardYen").textContent=`${progress.yen||0} YEN`;if(document.getElementById("phraseRewardXp"))document.getElementById("phraseRewardXp").textContent=`EXP ${exp}/${next}`;if(document.getElementById("phraseLearnedCount"))document.getElementById("phraseLearnedCount").textContent=(phraseProgress.learned||[]).length;if(document.getElementById("phraseStreakCount"))document.getElementById("phraseStreakCount").textContent=phraseProgress.streak||1;const achievements=document.getElementById("phraseAchievements");if(achievements){const learned=(phraseProgress.learned||[]).length;achievements.innerHTML=[`<span class="${learned>=1?"unlocked":""}">First Phrase</span>`,`<span class="${(phraseProgress.streak||1)>=7?"unlocked":""}">7-Day Streak</span>`,`<span class="${learned>=10?"unlocked":""}">N5 Explorer</span>`].join("")}}
function spawnPhraseReward(yen,exp){const card=document.getElementById("phraseCardMain");if(!card)return;card.classList.remove("phrase-reward-pop");void card.offsetWidth;card.classList.add("phrase-reward-pop");const burst=document.createElement("div");burst.className="phrase-reward-burst";burst.innerHTML=`<strong>+${yen} YEN</strong><span>+${exp} XP</span>`;card.appendChild(burst);for(let i=0;i<12;i++){const petal=document.createElement("i");petal.style.left=(45+Math.random()*20)+"%";petal.style.setProperty("--spark-x",(Math.random()*120-60)+"px");petal.style.setProperty("--spark-y",(-30-Math.random()*85)+"px");burst.appendChild(petal)}setTimeout(()=>burst.remove(),1200)}
let currentGrammarQuestion=null,grammarAnswered=false;
let grammarProgress=JSON.parse(localStorage.getItem("tasewakaiGrammarProgress")||"{}");
function saveGrammarProgress(){localStorage.setItem("tasewakaiGrammarProgress",JSON.stringify(grammarProgress))}
function initGrammarBuilder(){if(!grammarProgress.daily||grammarProgress.daily.date!==todayKey())grammarProgress.daily={date:todayKey(),count:0,yen:0,xp:0};if(!currentGrammarQuestion)randomGrammarQuestion();else renderGrammarQuestion();updateGrammarStats()}
function randomGrammarQuestion(){currentGrammarQuestion=grammarQuestions[Math.floor(Math.random()*grammarQuestions.length)];grammarAnswered=false;renderGrammarQuestion()}
function renderGrammarQuestion(){const q=currentGrammarQuestion;if(!q)return;const scene=document.getElementById("grammarSceneIcon"),card=document.getElementById("grammarCardMain"),answers=document.getElementById("grammarAnswerGrid"),explain=document.getElementById("grammarExplain"),feedback=document.getElementById("grammarFeedback");if(scene)scene.src=q.icon||"assets/grammar-icon-torii.png";document.getElementById("grammarCategory").textContent=safeLearningText(q.category,"Grammar");document.getElementById("grammarDifficulty").textContent=safeLearningText(q.level,"N5");document.getElementById("grammarType").textContent=safeLearningText(q.type,"Grammar");document.getElementById("grammarRewardPreview").textContent=grammarRewardFor(q).label;document.getElementById("grammarSentence").textContent=safeLearningText(q.sentence,"Sentence unavailable");document.getElementById("grammarRomaji").textContent=safeLearningText(q.romaji,"");document.getElementById("grammarEnglish").textContent=safeLearningText(q.english,"");document.getElementById("grammarTip").textContent=safeLearningText(q.tip,"Choose the grammar part that sounds natural.");if(feedback)feedback.textContent="Choose the missing grammar part.";if(explain){explain.classList.add("hidden");explain.textContent=""}if(card){card.classList.remove("grammar-correct","grammar-wrong","grammar-enter");void card.offsetWidth;card.classList.add("grammar-enter")}if(answers)answers.innerHTML=shuffle([...q.choices]).map(choice=>`<button onclick="checkGrammarAnswer('${String(choice).replace(/'/g,"\\'")}',this)">${safeLearningText(choice,"?")}</button>`).join("")}
function grammarRewardFor(q){const level=q?.level||"N5",yen=level==="N3"?9:level==="N4"?7:5,exp=level==="N3"?16:level==="N4"?12:8;return{yen,exp,label:`+${yen} YEN +${exp} EXP`}}
function checkGrammarAnswer(choice,button){if(grammarAnswered||!currentGrammarQuestion)return;grammarAnswered=true;const correct=choice===currentGrammarQuestion.answer,card=document.getElementById("grammarCardMain"),feedback=document.getElementById("grammarFeedback"),explain=document.getElementById("grammarExplain");document.querySelectorAll("#grammarAnswerGrid button").forEach(btn=>{if(btn.textContent===currentGrammarQuestion.answer)btn.classList.add("correct");else if(btn===button)btn.classList.add("wrong");btn.disabled=true});if(card){card.classList.add(correct?"grammar-correct":"grammar-wrong")}if(correct){const r=rewardGrammarAnswer(currentGrammarQuestion);if(feedback)feedback.textContent=`Correct. ${r.label} added to your main passport.`;spawnGrammarReward(r.yen,r.exp)}else{if(feedback)feedback.textContent=`Not quite. Correct answer: ${safeLearningText(currentGrammarQuestion.answer,"?")}`;spawnGrammarMiss()}if(explain){explain.classList.remove("hidden");explain.innerHTML=`<strong>${safeLearningText(currentGrammarQuestion.tip,"")}</strong><span>${safeLearningText(currentGrammarQuestion.explain,"")}</span>`}setTimeout(()=>{if(document.getElementById("grammarTool")&&!document.getElementById("grammarTool").classList.contains("hidden"))randomGrammarQuestion()},correct?1700:2400)}
function rewardGrammarAnswer(q){const r=grammarRewardFor(q);if(!grammarProgress.learned)grammarProgress.learned=[];if(!grammarProgress.daily||grammarProgress.daily.date!==todayKey())grammarProgress.daily={date:todayKey(),count:0,yen:0,xp:0};grammarProgress.learned.unshift(`${q.sentence}|${Date.now()}`);grammarProgress.daily.count=Math.min(5,(grammarProgress.daily.count||0)+1);grammarProgress.daily.yen=(grammarProgress.daily.yen||0)+r.yen;grammarProgress.daily.xp=(grammarProgress.daily.xp||0)+r.exp;grammarProgress.streak=Number(grammarProgress.streak||1);progress.triedLearning=true;addPassportActivity("lesson",1);addPassportActivity("vocab",1);progress.yen=Number(progress.yen||0)+r.yen;progress.points=Number(progress.points||0)+r.exp;progress.exp=Number(progress.exp||0)+r.exp;progress.level=Number(progress.level||1);let next=progress.level*100;while(progress.exp>=next){progress.exp-=next;progress.level++;next=progress.level*100;progress.yen+=25}saveProgress();saveGrammarProgress();updateLeaderboard();updateTrainerUI();pulseHudElement("hudYen");pulseHudElement("hudExpFill");updateGrammarStats();return r}
function updateGrammarStats(){const daily=grammarProgress.daily||{count:0,yen:0,xp:0},count=Math.min(daily.count||0,5),next=Number(progress.level||1)*100,exp=Number(progress.exp||0);if(document.getElementById("grammarMainLevel"))document.getElementById("grammarMainLevel").textContent=`Lv. ${progress.level||1}`;if(document.getElementById("grammarMainYen"))document.getElementById("grammarMainYen").textContent=`${progress.yen||0} YEN`;if(document.getElementById("grammarLearnedCount"))document.getElementById("grammarLearnedCount").textContent=(grammarProgress.learned||[]).length;if(document.getElementById("grammarStreak"))document.getElementById("grammarStreak").textContent=grammarProgress.streak||1;if(document.getElementById("grammarDailyCount"))document.getElementById("grammarDailyCount").textContent=`${count}/5`;if(document.getElementById("grammarDailyFill"))document.getElementById("grammarDailyFill").style.width=Math.min(count/5*100,100)+"%";if(document.getElementById("grammarDailyReward"))document.getElementById("grammarDailyReward").textContent=`Today +${daily.yen||0} YEN +${daily.xp||0} XP - Main EXP ${exp}/${next}`}
function spawnGrammarReward(yen,exp){const card=document.getElementById("grammarCardMain");if(!card)return;const burst=document.createElement("div");burst.className="grammar-reward-burst";burst.innerHTML=`<strong>+${yen} YEN</strong><span>+${exp} EXP</span>`;card.appendChild(burst);for(let i=0;i<14;i++){const p=document.createElement("i");p.style.setProperty("--spark-x",(Math.random()*140-70)+"px");p.style.setProperty("--spark-y",(-35-Math.random()*95)+"px");burst.appendChild(p)}setTimeout(()=>burst.remove(),1200)}
function spawnGrammarMiss(){const card=document.getElementById("grammarCardMain");if(!card)return;const miss=document.createElement("div");miss.className="grammar-miss-burst";miss.textContent="Try the next sentence";card.appendChild(miss);setTimeout(()=>miss.remove(),1050)}
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
        <small>Base ${item.price} Â· Owned ${owned}</small>
      </div>
      <button class="btn ${canBuy?"join-btn":"ghost-btn"} small-btn" onclick="buyStoreItem('${item.id}')" ${canBuy?"":"disabled"}>Buy</button>
    </article>`;
  }).join("");
  const ownedItems=storeItems.filter(item=>progress.inventory[item.id]);
  inventory.innerHTML=ownedItems.length?ownedItems.map(item=>{const quote=getSellQuote(item,market),profitClass=quote.profit>=0?"profit":"loss",gifted=progress.giftHistory?.find(log=>log.itemId===item.id&&log.type==="received");return `<article class="inventory-card rarity-${item.rarity}">
    <img src="${item.img}" alt="" />
    <div><strong>${item.name} x${progress.inventory[item.id]}</strong><small>Sell ${quote.net} YEN Â· Tax ${quote.tax} Â· <b class="${profitClass}">${quote.profit>=0?"+":""}${quote.profit} vs buy</b></small>${gifted?`<small>Gifted by ${gifted.from}</small>`:""}</div>
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
  const gifts=(progress.giftHistory||[]).map(entry=>`<p><strong>Gifted</strong> ${entry.item} to ${entry.to||"member"}${entry.message?` Â· "${entry.message}"`:""}<small>${entry.date}</small></p>`);
  const rows=[...sells,...gifts].slice(0,6);
  log.innerHTML=rows.length?rows.join(""):"<p>No market history yet.</p>";
}
function reward(correct=true){progress.triedLearning=true;if(!correct){progress.streak=0;saveProgress();updateTrainerUI();return}const now=Date.now();if(now-lastRewardAt<450)return;lastRewardAt=now;progress.streak+=1;let yenGain=5,expGain=10;if(["kanji","words","n5"].includes(trainerMode)){yenGain=8;expGain=14}if(trainerMode==="n4"){yenGain=11;expGain=18}if(trainerMode==="n3"){yenGain=15;expGain=24}if(trainerMode==="n2"){yenGain=20;expGain=32}if(trainerMode==="n1"){yenGain=26;expGain=42}if(trainerMode==="review"){yenGain=10;expGain=18}if(jlptAdventure.trainingOnly&&isJlptMode()){yenGain=Math.max(3,Math.floor(yenGain*.75));expGain=Math.max(6,Math.floor(expGain*.75))}if(currentQuestion?.boss){yenGain+=28;expGain+=36;addPassportActivity("event",1)}if(progress.streak%5===0){yenGain+=10;expGain+=16}addPassportActivity(isJlptMode()?"kanji":"vocab",1);addPassportActivity("lesson",1);progress.yen+=yenGain;progress.points+=expGain;progress.exp+=expGain;let next=progress.level*100;while(progress.exp>=next){progress.exp-=next;progress.level++;next=progress.level*100;progress.yen+=25}saveProgress();updateLeaderboard();updateTrainerUI();pulseHudElement("hudYen");pulseHudElement("hudExpFill");return {yenGain,expGain}}
function resetTrainerProgress(){progress.points=0;progress.exp=0;progress.level=1;progress.yen=0;progress.streak=0;progress.inventory={};progress.purchaseLedger={};progress.sellHistory=[];progress.giftHistory=[];saveProgress();updateLeaderboard();updateTrainerUI();renderStore()}
async function updateLeaderboard(force=false){const name=progress.name||"Guest Learner";if(force||name!=="Guest Learner"||progress.points>0||progress.yen>0){const existing=leaderboard.find(item=>item.name===name);const snapshot={name,points:progress.points,level:progress.level,yen:progress.yen,rank:getHudRankTitle(),kanji:progress.stats?.kanji||0,lessons:progress.stats?.lessons||0,streak:progress.streak||0,passportNo:progress.passportNo};if(existing)Object.assign(existing,{points:Math.max(existing.points,snapshot.points),level:Math.max(existing.level,snapshot.level),yen:Math.max(existing.yen||0,snapshot.yen),rank:snapshot.rank,kanji:snapshot.kanji,lessons:snapshot.lessons,streak:snapshot.streak,passportNo:snapshot.passportNo});else leaderboard.push(snapshot);leaderboard=leaderboard.filter(item=>item.name&&item.name!=="Guest Learner").sort((a,b)=>(b.yen||0)-(a.yen||0)||b.points-a.points).slice(0,10);localStorage.setItem("tasewakaiTrainerLeaderboard",JSON.stringify(leaderboard));publishOnlineLeaderboard(snapshot)}renderLeaderboard();fetchOnlineLeaderboard()}
function toggleHudLeaderboard(){const board=document.getElementById("hudLeaderboard"),state=document.getElementById("hudLeaderboardState");if(!board)return;const hidden=board.classList.toggle("hidden");localStorage.setItem("tasewakaiHudLeaderboardHidden",String(hidden));if(state)state.textContent=hidden?"Off":"On"}
function syncHudLeaderboardState(){const hidden=localStorage.getItem("tasewakaiHudLeaderboardHidden")==="true",board=document.getElementById("hudLeaderboard"),state=document.getElementById("hudLeaderboardState");if(board)board.classList.toggle("hidden",hidden);if(state)state.textContent=hidden?"Off":"On"}
function renderLeaderboard(){syncHudLeaderboardState();const lists=document.querySelectorAll("#leaderboardList,#hudLeaderboardList");if(!lists.length)return;const html=leaderboard.length===0?"<p>No saved learners yet.</p>":leaderboard.map((item,i)=>`<div class="leaderboard-row"><span><strong>#${i+1}</strong> ${item.name}<small>${item.rank||"Learner"} Â· ${item.kanji||0} kanji</small></span><span>${item.yen||0} YEN - Lv.${item.level}</span></div>`).join("");lists.forEach(list=>list.innerHTML=html)}
function hasSupabaseLeaderboard(){return Boolean(SUPABASE_LEADERBOARD_URL&&SUPABASE_LEADERBOARD_ANON_KEY&&SUPABASE_LEADERBOARD_URL.startsWith("https://"))}
function supabaseHeaders(){return{"apikey":SUPABASE_LEADERBOARD_ANON_KEY,"Authorization":`Bearer ${SUPABASE_LEADERBOARD_ANON_KEY}`,"Content-Type":"application/json"}}
function toSupabaseLeaderboardRow(snapshot){return{name:snapshot.name||"Guest Learner",points:Number(snapshot.points||0),level:Number(snapshot.level||1),yen:Number(snapshot.yen||0),rank:snapshot.rank||"Learner",kanji:Number(snapshot.kanji||0),lessons:Number(snapshot.lessons||0),streak:Number(snapshot.streak||0),passport_no:snapshot.passportNo||progress.passportNo,updated_at:new Date().toISOString()}}
function fromSupabaseLeaderboardRow(row){return{name:row.name||"Guest Learner",points:Number(row.points||0),level:Number(row.level||1),yen:Number(row.yen||0),rank:row.rank||"Learner",kanji:Number(row.kanji||0),lessons:Number(row.lessons||0),streak:Number(row.streak||0),passportNo:row.passport_no}}
async function fetchOnlineLeaderboard(){const mode=document.getElementById("hudOnlineMode");try{if(hasSupabaseLeaderboard()){const url=`${SUPABASE_LEADERBOARD_URL.replace(/\/$/,"")}/rest/v1/${SUPABASE_LEADERBOARD_TABLE}?select=name,points,level,yen,rank,kanji,lessons,streak,passport_no&order=yen.desc&order=points.desc&limit=10`;const response=await fetch(url,{headers:supabaseHeaders(),cache:"no-store"});if(!response.ok)throw new Error("supabase offline");const data=await response.json();if(Array.isArray(data)){leaderboard=data.map(fromSupabaseLeaderboardRow).sort((a,b)=>(b.yen||0)-(a.yen||0)||((b.points||0)-(a.points||0))).slice(0,10);localStorage.setItem("tasewakaiTrainerLeaderboard",JSON.stringify(leaderboard));if(mode)mode.textContent="online";renderLeaderboard();return}}const response=await fetch(ONLINE_LEADERBOARD_ENDPOINT,{cache:"no-store"});if(!response.ok)throw new Error("offline");const data=await response.json();if(Array.isArray(data.leaderboard)&&data.leaderboard.length){leaderboard=data.leaderboard.sort((a,b)=>(b.yen||0)-(a.yen||0)||((b.points||0)-(a.points||0))).slice(0,10);localStorage.setItem("tasewakaiTrainerLeaderboard",JSON.stringify(leaderboard));if(mode)mode.textContent="online";renderLeaderboard()}}catch(error){if(mode)mode.textContent="local"}}
async function publishOnlineLeaderboard(snapshot){try{if(hasSupabaseLeaderboard()){const url=`${SUPABASE_LEADERBOARD_URL.replace(/\/$/,"")}/rest/v1/${SUPABASE_LEADERBOARD_TABLE}?on_conflict=passport_no`;await fetch(url,{method:"POST",headers:{...supabaseHeaders(),"Prefer":"resolution=merge-duplicates"},body:JSON.stringify(toSupabaseLeaderboardRow(snapshot))});return}await fetch(ONLINE_LEADERBOARD_ENDPOINT,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(snapshot)})}catch(error){}}
function renderNameLogs(){const list=document.getElementById("nameLogsList");if(!list)return;if(!progress.nameLogs||progress.nameLogs.length===0){list.innerHTML="<p>No name changes yet.</p>";return}list.innerHTML=progress.nameLogs.slice().reverse().map(log=>`<div class="leaderboard-row"><span><strong>${log.from}</strong> -> <strong>${log.to}</strong></span><span>${log.date}</span></div>`).join("")}
function mountN5Quiz(){const mount=document.getElementById("n5QuizMount");if(!mount||mount.innerHTML.trim())return;mount.innerHTML=`<div id="jlptQuizView" class="jlpt-quiz-view premium-jlpt"><div class="jlpt-scene-bg" aria-hidden="true"><span class="jlpt-fuji"></span><span class="jlpt-torii-shadow"></span><i></i><i></i><i></i><i></i></div><div class="jlpt-topbar"><div><p class="mini-label" id="jlptModeLabel">JLPT N5</p><strong id="jlptRoundLabel">Learning card</strong><small id="jlptWorldLabel">N5 Forest</small></div><div class="jlpt-progress-dashboard"><span>ðŸ”¥ Streak <b id="jlptStreakDash">0</b></span><span>ðŸ“– Learned <b id="jlptLearnedDash">0/30</b></span><span>ðŸ’´ <b id="jlptYenDash">0</b> YEN</span><span>â­ EXP <b id="jlptExpDash">0</b></span></div></div><div class="jlpt-path-controls"><button class="active" id="jlptGuidedBtn" onclick="setJlptSessionMode('guided')">Learn first</button><button id="jlptTrainingBtn" onclick="setJlptSessionMode('training')">I know some Â· train only</button><button onclick="resetKnownJlptCards()">Reset known</button></div><div class="jlpt-journey-row"><span class="active">ðŸ“– Learning Cards</span><span>ðŸ§  Review Session</span><span>ðŸŽ² Random Event</span><span>âš”ï¸ Optional Boss</span><span>ðŸ’´ Rewards</span></div><div class="jlpt-event-card hidden" id="jlptEventCard"></div><div class="jlpt-boss-card compact hidden" id="jlptBossCard"><span class="boss-icon">ðŸ®</span><div><p class="mini-label">Optional Boss Encounter</p><h3 id="jlptBossName">Forest Spirit</h3><div class="jlpt-meter"><span id="jlptBossHpText">Boss HP: 100%</span><div><b id="jlptBossFill"></b></div></div></div><button class="btn join-btn small-btn" id="jlptBossButton" onclick="startOptionalBoss()">Challenge</button></div><div class="jlpt-learning-layout"><section><div class="jlpt-card"><button class="kanji-info-btn" onclick="toggleKanjiInfo()">ðŸ’¡ Hint</button><div class="jlpt-badge-row"><span id="jlptLevelBadge">N5</span><span id="jlptStrokeBadge">4 Strokes</span><span id="jlptDifficultyBadge">Starter</span></div><div class="quiz-character jlpt-character" id="jlptPrompt">\u65e5</div><div class="jlpt-reading-grid"><span>On <b id="jlptOnReading">-</b></span><span>Kun <b id="jlptKunReading">-</b></span></div><p class="quiz-question" id="jlptQuestion">Study the kanji, readings, and examples.</p><div class="kanji-meta locked" id="kanjiMeta">Hint available Â· costs 3 YEN and 5 EXP</div><div class="kanji-info hidden" id="kanjiInfo"></div><div class="jlpt-card-actions"><button class="btn join-btn learn-card-btn" id="jlptLearnBtn" onclick="markJlptCardLearned()">Learn this kanji</button><button class="btn ghost-btn learn-card-btn" id="jlptKnownBtn" onclick="markJlptCardKnown()">Already know this</button></div></div><div class="answer-grid jlpt-answer-grid hidden" id="jlptAnswerGrid"></div><p class="quiz-feedback" id="jlptFeedback">Learn 5 cards to unlock a review session.</p><div class="kanji-expansion hidden" id="kanjiExpansion"></div></section><aside class="jlpt-side-progress"><div class="jlpt-companion" id="jlptCompanion"><img id="jlptCompanionImg" src="assets/jlpt-konata-thinking.gif" alt="" /><p id="jlptCompanionText">Pick a path: learn new cards, or jump straight into training.</p></div><p class="mini-label">Journey Progress</p><h3 id="jlptPhaseTitle">Learning Phase</h3><div class="jlpt-set-meter"><span id="jlptSetText">0/5 cards learned</span><div><b id="jlptSetFill"></b></div></div><div class="jlpt-known-box"><span id="jlptKnownText">Known: 0</span><span id="jlptSkippedText">Skipped: 0</span></div><div class="jlpt-achievements"><span id="jlptAchFirst">ðŸŒ¸ First Kanji</span><span id="jlptAchScholar">ðŸ“œ Scholar</span><span id="jlptAchShrine">ðŸ® Shrine Explorer</span><span id="jlptAchMountain">ðŸ—» Mountain Walker</span><span id="jlptAchBoss">ðŸ‰ Boss Slayer</span><span id="jlptAchMaster">ðŸ‘‘ Kanji Master</span></div></aside></div></div>`}
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
function refreshJlptAchievementBadges(known=0){const achievements=[["jlptAchFirst","assets/kanji-badge-kana.png","First Kanji","Unlock your first learning card.",jlptCorrectCount>=1||known>=1],["jlptAchScholar","assets/kanji-badge-dango.png","Scholar","Build a steady study rhythm.",jlptCorrectCount+known>=5],["jlptAchShrine","assets/kanji-badge-lantern.png","Shrine Explorer","Clear early reviews and keep moving.",jlptCorrectCount+known>=10],["jlptAchMountain","assets/kanji-badge-parasol.png","Mountain Walker","Reach the higher JLPT paths.",(trainerMode==="n3"||trainerMode==="n2"||trainerMode==="n1")&&jlptCorrectCount+known>=15],["jlptAchBoss","assets/kanji-badge-castle.png","Boss Slayer","Win a milestone encounter.",(jlptBossState.defeated||0)>=1],["jlptAchMaster","assets/kanji-badge-japan.png","Kanji Master","Advance toward the N1 road.",trainerMode==="n1"&&jlptCorrectCount+known>=30]];achievements.forEach(([id,img,title,desc,unlocked])=>{const el=document.getElementById(id);if(!el)return;el.classList.toggle("unlocked",!!unlocked);if(!el.querySelector("img"))el.innerHTML=`<img src="${img}" alt="" /><b>${title}</b><small>${desc}</small>`})}
function updateJlptDashboard(){const next=progress.level*100,pool=getQuestionPool(),known=(jlptAdventure.knownCards||[]).filter(key=>key.startsWith(getJlptLevelLabel()+":")).length,learned=Math.min(jlptCorrectCount+known,Math.max(pool.length,30)),hp=Math.max(0,Math.min(100,jlptBossState.hp)),phase=jlptAdventure.phase||"learning";const set=(id,text)=>{const el=document.getElementById(id);if(el)el.textContent=text};set("jlptStreakDash",progress.streak||0);set("jlptLearnedDash",`${learned}/${Math.max(pool.length,30)}`);set("jlptYenDash",progress.yen||0);set("jlptExpDash",`${progress.exp||0}/${next}`);set("jlptBossName",getCurrentBossName());set("jlptBossHpText",`Boss HP: ${hp}%`);set("jlptWorldLabel",getCurrentWorld());set("jlptPhaseTitle",phase==="boss"?"Boss Challenge":jlptAdventure.trainingOnly?"Training Only":phase==="review"?"Review Session":"Learning Phase");set("jlptSetText",jlptAdventure.trainingOnly?`Known ${known} - direct practice`:phase==="review"?`Review ${jlptAdventure.reviewCorrect||0}/3 correct`:`${Math.min(jlptAdventure.learnedSet||0,5)}/5 cards learned`);set("jlptKnownText",`Known: ${known}`);set("jlptSkippedText",`Skipped: ${(jlptAdventure.skippedCards||[]).length}`);document.getElementById("jlptGuidedBtn")?.classList.toggle("active",!jlptAdventure.trainingOnly);document.getElementById("jlptTrainingBtn")?.classList.toggle("active",!!jlptAdventure.trainingOnly);const fill=document.getElementById("jlptBossFill");if(fill)fill.style.width=hp+"%";const setFill=document.getElementById("jlptSetFill");if(setFill)setFill.style.width=(jlptAdventure.trainingOnly?Math.min(known/Math.max(pool.length,1)*100,100):phase==="review"?Math.min((jlptAdventure.reviewCorrect||0)/3*100,100):Math.min((jlptAdventure.learnedSet||0)/5*100,100))+"%";document.getElementById("jlptBossCard")?.classList.toggle("hidden",!jlptAdventure.bossReady&&phase!=="boss");document.getElementById("jlptBossButton")?.classList.toggle("hidden",phase==="boss");refreshJlptAchievementBadges(known);document.querySelectorAll(".jlpt-journey-row span").forEach((item,index)=>item.classList.toggle("active",index===(phase==="learning"?0:phase==="review"?1:phase==="event"?2:phase==="boss"?3:4)))}
function damageJlptBoss(amount=12){let defeated=false;jlptBossState.hp=Math.max(0,(jlptBossState.hp??100)-amount);if(jlptBossState.hp<=0){defeated=true;jlptBossState.defeated=(jlptBossState.defeated||0)+1;jlptBossState.index=(jlptBossState.index||0)+1;jlptBossState.hp=100;spawnBossDamage(amount,true)}else spawnBossDamage(amount,false);saveJlptBossState();updateJlptDashboard();return defeated}
function spawnBossDamage(amount,defeated=false){const card=document.querySelector(".jlpt-boss-card");if(!card)return;card.classList.remove("boss-hit");void card.offsetWidth;card.classList.add("boss-hit");const hit=document.createElement("strong");hit.className="boss-damage-number";hit.textContent=defeated?"Boss Clear!":`-${amount}`;card.appendChild(hit);setTimeout(()=>hit.remove(),900)}
function applySmallJlptReward(yenGain=2,expGain=4){if(jlptAdventure.xpBoost>0){expGain+=Math.ceil(expGain*.5);jlptAdventure.xpBoost--}progress.triedLearning=true;addPassportActivity("kanji",1);addPassportActivity("lesson",1);progress.yen=Number(progress.yen||0)+yenGain;progress.points=Number(progress.points||0)+expGain;progress.exp=Number(progress.exp||0)+expGain;progress.level=Number(progress.level||1);let next=progress.level*100;while(progress.exp>=next){progress.exp-=next;progress.level++;next=progress.level*100;progress.yen+=25}saveProgress();updateLeaderboard();updateTrainerUI();pulseHudElement("hudYen");pulseHudElement("hudExpFill");return{yenGain,expGain}}
function markJlptCardLearned(){if(!currentQuestion||jlptAdventure.phase!=="learning")return;const r=applySmallJlptReward(2,4);jlptAdventure.learnedSet=(jlptAdventure.learnedSet||0)+1;jlptAdventure.successCards=(jlptAdventure.successCards||0)+1;jlptCorrectCount++;localStorage.setItem("tasewakaiJlptCorrectCount",String(jlptCorrectCount));saveJlptAdventure();spawnRewardBurst(r,false);document.getElementById("jlptFeedback").textContent=`Learned card. +${r.yenGain} YEN +${r.expGain} EXP`;if(jlptAdventure.learnedSet>=5){jlptAdventure.phase="review";jlptAdventure.reviewCorrect=0;saveJlptAdventure();setTimeout(nextQuestion,900)}else setTimeout(nextQuestion,900);updateJlptDashboard()}
function markJlptCardKnown(){if(!currentQuestion)return;const key=jlptCardKey(currentQuestion);jlptAdventure.knownCards=[key,...(jlptAdventure.knownCards||[]).filter(item=>item!==key)].slice(0,500);jlptAdventure.skippedCards=[key,...(jlptAdventure.skippedCards||[]).filter(item=>item!==key)].slice(0,120);jlptAdventure.learnedSet=(jlptAdventure.learnedSet||0)+1;jlptAdventure.successCards=(jlptAdventure.successCards||0)+1;progress.triedLearning=true;addPassportActivity("kanji",1);saveProgress();saveJlptAdventure();updateLeaderboard();updateTrainerUI();updateJlptDashboard();updateJlptCompanion("known");const feedback=document.getElementById("jlptFeedback");if(feedback)feedback.textContent="Marked as already known. I will prioritize new cards next.";if(jlptAdventure.learnedSet>=5&&!jlptAdventure.trainingOnly){jlptAdventure.phase="review";jlptAdventure.reviewCorrect=0;saveJlptAdventure()}setTimeout(nextQuestion,850)}
function startOptionalBoss(){jlptAdventure.phase="boss";jlptAdventure.bossReady=false;jlptBossState.hp=100;saveJlptAdventure();saveJlptBossState();showJlptEvent({icon:"âš”ï¸",name:"Boss Encounter",text:`${getCurrentBossName()} appears. Correct answers damage the boss.`});setTimeout(nextQuestion,700)}
function completeJlptReview(){jlptAdventure.phase="event";jlptAdventure.learnedSet=0;jlptAdventure.reviewCorrect=0;if((jlptAdventure.successCards||0)>=10){jlptAdventure.bossReady=true;jlptAdventure.successCards=0}saveJlptAdventure();triggerJlptRandomEvent();setTimeout(()=>{jlptAdventure.phase=jlptAdventure.trainingOnly?"review":"learning";saveJlptAdventure();nextQuestion()},jlptAdventure.bossReady?1800:1500)}
function triggerJlptRandomEvent(){const event=jlptRandomEvents[Math.floor(Math.random()*jlptRandomEvents.length)];if(event.effect==="xp")applySmallJlptReward(0,10);if(event.effect==="hint")jlptAdventure.freeHints=(jlptAdventure.freeHints||0)+1;if(event.effect==="boost")jlptAdventure.xpBoost=3;if(event.effect==="yen")applySmallJlptReward(8,0);if(event.effect==="rare")jlptAdventure.rareDiscovery=true;saveJlptAdventure();showJlptEvent(event);updateJlptCompanion("event")}
function showJlptEvent(event){const card=document.getElementById("jlptEventCard");if(!card||!event)return;card.classList.remove("hidden");card.innerHTML=`<span>${event.icon}</span><div><strong>${event.name}</strong><p>${event.text}</p></div>`;card.classList.remove("event-pop");void card.offsetWidth;card.classList.add("event-pop");setTimeout(()=>card.classList.add("hidden"),2600)}
function parseExampleParts(example=""){const parts=safeLearningText(example,"").split("/").map(part=>safeLearningText(part.trim(),"")).filter(Boolean);return {word:parts[0]||"Example",reading:parts[1]||"",english:parts[2]||"Example"}}
function getReviewQuestionSetup(card,pool){const type=["meaning","reading","example"][Math.floor(Math.random()*3)],example=parseExampleParts(card.example||"");if(type==="reading"){const correct=safeLearningText(card.kun||card.on||card.reading||example.reading||card.a,"-");return{answer:correct,question:"Choose the correct reading.",answers:createAnswers(pool,correct,item=>safeLearningText(item.kun||item.on||item.reading||parseExampleParts(item.example||"").reading||item.a,"-"))}}if(type==="example"){const correct=example.word;return{answer:correct,question:"Choose an example word using this kanji.",answers:createAnswers(pool,correct,item=>parseExampleParts(item.example||"").word)}}const meaning=safeLearningText(card.a,"Meaning unavailable");return{answer:meaning,question:"Choose the correct meaning.",answers:createAnswers(pool,meaning,item=>safeLearningText(item.a,"Meaning unavailable"))}}
function renderKanjiExpansion(card=currentQuestion){const box=document.getElementById("kanjiExpansion");if(!box||!card)return;const ex=parseExampleParts(card.example||""),meaning=safeLearningText(card.a||"","Meaning unavailable"),kun=safeLearningText(card.kun||card.reading||"-","-"),on=safeLearningText(card.on||"-","-"),q=safeLearningText(card.q||"","?"),plainMeaning=meaning.split("/")[0].trim()||"this";box.innerHTML=`<div class="expansion-head"><strong>${q}</strong><span>${meaning}</span></div><div class="expansion-grid"><div><b>Readings</b><p>${kun}</p><p>${on}</p></div><div><b>Example Words</b><p>${ex.word} ${ex.reading?`(${ex.reading})`:""}</p><p>${ex.english}</p></div><div><b>Example Sentence</b><p>${q}\u304c\u3042\u308a\u307e\u3059\u3002</p><p>There is ${plainMeaning}.</p></div></div>`;box.classList.remove("hidden")}
function hideKanjiExpansion(){document.getElementById("kanjiExpansion")?.classList.add("hidden")}
async function enrichKanjiFromApis(card=currentQuestion){if(!card||!card.q||card.q.length!==1)return;const key=`tasewakaiKanjiApi:${card.q}`;try{const cached=JSON.parse(localStorage.getItem(key)||"null");if(cached&&Date.now()-cached.time<1000*60*60*24*7){Object.assign(card,cached.data);updateKanjiMetaBadges(card);return}}catch(error){}try{const response=await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(card.q)}`,{cache:"no-store"});if(!response.ok)throw new Error("KanjiAPI unavailable");const data=await response.json();const enriched={strokes:data.stroke_count,on:(data.on_readings||[]).join("ãƒ»")||card.on,kun:(data.kun_readings||[]).join("ãƒ»")||card.kun};Object.assign(card,enriched);localStorage.setItem(key,JSON.stringify({time:Date.now(),data:enriched}));updateKanjiMetaBadges(card)}catch(error){await enrichKanjiFromJotoba(card,key)}}
async function enrichKanjiFromJotoba(card,key){try{const response=await fetch("https://jotoba.de/api/search/words",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:card.q,language:"English",no_english:false})});if(!response.ok)throw new Error("Jotoba unavailable");const data=await response.json(),entry=(data.words||data.results||[])[0],reading=entry?.reading||entry?.kana||"";if(reading){const enriched={kun:card.kun||reading};Object.assign(card,enriched);localStorage.setItem(key,JSON.stringify({time:Date.now(),data:enriched}));updateKanjiMetaBadges(card)}}catch(error){try{localStorage.setItem(`tasewakaiJotobaQueued:${card.q}`,JSON.stringify({time:Date.now(),source:"Jotoba fallback attempted"}))}catch(_){}}}
function primaryKanji(value=""){return[...decodeMojibakeText(value)].find(char=>/[\u4e00-\u9fff]/.test(char))||""}
async function enrichKanjiFromApis(card=currentQuestion){if(!card||!card.q)return;const target=primaryKanji(card.q);if(!target)return;const key=`tasewakaiKanjiApi:${target}`;try{const cached=JSON.parse(localStorage.getItem(key)||"null");if(cached&&Date.now()-cached.time<1000*60*60*24*7){Object.assign(card,{...cached.data,apiSource:cached.data.apiSource||"KanjiAPI cache"});updateKanjiMetaBadges(card);setJlptDataStatus(`Cached API detail ready for ${target}.`,"success");return}}catch(error){}setJlptDataStatus(`Checking API details for ${target}...`,"loading");try{const response=await fetch(`https://kanjiapi.dev/v1/kanji/${encodeURIComponent(target)}`,{cache:"no-store"});if(!response.ok)throw new Error("KanjiAPI unavailable");const data=await response.json();const enriched={apiSource:"KanjiAPI",strokes:card.strokes||data.stroke_count,on:card.on&&card.on!=="-"?card.on:(data.on_readings||[]).join("ãƒ»"),kun:card.kun&&card.kun!=="-"?card.kun:(data.kun_readings||[]).join("ãƒ»")};Object.assign(card,enriched);localStorage.setItem(key,JSON.stringify({time:Date.now(),data:enriched}));updateKanjiMetaBadges(card);setJlptDataStatus(`API details added for ${target}.`,"success")}catch(error){await enrichKanjiFromJotoba(card,key,target)}}
async function enrichKanjiFromJotoba(card,key,target=card.q){try{const response=await fetch("https://jotoba.de/api/search/words",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({query:decodeMojibakeText(card.q),language:"English",no_english:false})});if(!response.ok)throw new Error("Jotoba unavailable");const data=await response.json(),entry=(data.words||data.results||[])[0],reading=entry?.reading||entry?.kana||"";if(reading){const enriched={apiSource:"Jotoba",kun:card.kun||reading};Object.assign(card,enriched);localStorage.setItem(key,JSON.stringify({time:Date.now(),data:enriched}));updateKanjiMetaBadges(card);setJlptDataStatus(`Jotoba fallback added detail for ${target}.`,"success")}}catch(error){setJlptDataStatus("API unavailable right now. Local cards are still ready.","warning");try{localStorage.setItem(`tasewakaiJotobaQueued:${target}`,JSON.stringify({time:Date.now(),source:"Jotoba fallback attempted"}))}catch(_){}}}
function updateKanjiMetaBadges(card=currentQuestion){const level=getJlptLevelLabel(),strokes=getKanjiStrokeCount(card);const set=(id,text)=>{const el=document.getElementById(id);if(el)el.textContent=text};set("jlptLevelBadge",level);set("jlptStrokeBadge",`${strokes} Strokes`);set("jlptDifficultyBadge",getKanjiDifficulty(card));set("jlptOnReading",safeLearningText(card?.on||"-","-"));set("jlptKunReading",safeLearningText(card?.kun||card?.reading||"-","-"))}
function setTrainerMode(mode){trainerMode=mode;document.querySelectorAll(".tab").forEach(tab=>tab.classList.toggle("active",tab.dataset.mode===mode));const inJlpt=!!document.getElementById("n5Tool")&&!document.getElementById("n5Tool").classList.contains("hidden");const quizView=document.getElementById(inJlpt?"jlptQuizView":"quizView"),leaderboardView=document.getElementById(inJlpt?"jlptLeaderboardView":"leaderboardView"),logsView=document.getElementById("logsView");if(quizView)quizView.classList.add("hidden");if(leaderboardView)leaderboardView.classList.add("hidden");if(logsView)logsView.classList.add("hidden");if(mode==="leaderboard"){if(leaderboardView)leaderboardView.classList.remove("hidden");renderLeaderboard();return}if(mode==="logs"){if(logsView)logsView.classList.remove("hidden");renderNameLogs();return}if(quizView)quizView.classList.remove("hidden");if(isJlptMode(mode)){ensureJlptFallbackDeck();const label=document.getElementById("jlptModeLabel");if(label)label.textContent=`JLPT ${getJlptLevelLabel()}`;updateJlptDashboard();if(!jlptKanjiLoaded)loadJlptKanjiFile().then(()=>{if(trainerMode===mode)nextQuestion()});nextQuestion();return}nextQuestion()}
function getQuestionPool(){ensureJlptFallbackDeck();if(trainerMode==="n5")return jlptDeck.n5||[];if(trainerMode==="n4")return jlptDeck.n4||[];if(trainerMode==="n3")return jlptDeck.n3||[];if(trainerMode==="n2")return jlptDeck.n2||[];if(trainerMode==="n1")return jlptDeck.n1||[];if(trainerMode==="review")return reviewQueue.length?reviewQueue:(jlptDeck.n5||[]);if(trainerMode==="words")return jlptWordDeck;if(trainerMode==="kanji")return kanjiQuestions;return kanaQuestions}
function jlptCardKey(card){return `${getJlptLevelLabel()}:${decodeMojibakeText(card?.q||"")}`}
function updateJlptCompanion(state="ready"){const data=jlptCompanions[state]||jlptCompanions.ready,img=document.getElementById("jlptCompanionImg"),text=document.getElementById("jlptCompanionText"),box=document.getElementById("jlptCompanion");if(img)img.src=data.img;if(text)text.textContent=data.text;if(box){box.classList.remove("reacting");void box.offsetWidth;box.classList.add("reacting")}}
function setJlptSessionMode(mode="guided"){jlptAdventure.sessionMode=mode;jlptAdventure.trainingOnly=mode==="training";jlptAdventure.phase=mode==="training"?"review":"learning";jlptAdventure.learnedSet=0;jlptAdventure.reviewCorrect=0;saveJlptAdventure();document.getElementById("jlptGuidedBtn")?.classList.toggle("active",mode==="guided");document.getElementById("jlptTrainingBtn")?.classList.toggle("active",mode==="training");updateJlptCompanion(mode==="training"?"training":"ready");nextQuestion()}
function resetKnownJlptCards(){jlptAdventure.knownCards=[];jlptAdventure.skippedCards=[];saveJlptAdventure();updateJlptDashboard();updateJlptCompanion("ready");const feedback=document.getElementById("jlptFeedback");if(feedback)feedback.textContent="Known-card list cleared. Fresh path restored.";nextQuestion()}
function pickJlptCard(pool){if(!pool.length)return null;const known=new Set(jlptAdventure.knownCards||[]),available=pool.filter(card=>!known.has(`${getJlptLevelLabel()}:${decodeMojibakeText(card.q||"")}`));const source=available.length?available:pool;let picked=source[Math.floor(Math.random()*source.length)];if(source.length>1){let guard=0;while(picked.q===lastJlptQuestionKey&&guard<12){picked=source[Math.floor(Math.random()*source.length)];guard++}}return picked}
function nextQuestion(){lockAnswer=false;if(isJlptMode())return nextJlptQuestion();const pool=getQuestionPool();currentQuestion=pool[Math.floor(Math.random()*pool.length)];document.getElementById("quizModeLabel").textContent="Kana Trainer";document.getElementById("quizPrompt").textContent=safeLearningText(currentQuestion.q,"?");document.getElementById("quizQuestion").textContent="Choose the correct reading.";document.getElementById("quizFeedback").textContent="Pick the correct answer.";const answers=createAnswers(pool,currentQuestion.a),grid=document.getElementById("answerGrid");grid.innerHTML="";answers.forEach(answer=>{const btn=document.createElement("button");btn.className="answer-btn premium-answer";btn.textContent=safeLearningText(answer,String(answer));btn.onclick=()=>checkAnswer(btn,answer);grid.appendChild(btn)})}
function nextJlptQuestion(){lockAnswer=false;hintUsedThisQuestion=false;if(jlptAdventure.phase==="event"||jlptAdventure.phase==="rewards")jlptAdventure.phase=jlptAdventure.trainingOnly?"review":"learning";hideKanjiExpansion();const pool=getQuestionPool(),phase=jlptAdventure.phase||"learning",bossReady=phase==="boss";const grid=document.getElementById("jlptAnswerGrid"),feedback=document.getElementById("jlptFeedback");if(!pool.length){currentQuestion=null;document.getElementById("jlptPrompt").textContent="Preparing";document.getElementById("jlptQuestion").textContent="This level is still being prepared.";if(grid){grid.innerHTML="";grid.classList.add("hidden")}if(feedback)feedback.textContent="No cards found for this path yet. Try another JLPT level.";updateJlptDashboard();return}let picked=pickJlptCard(pool);if(!picked){picked=pool[Math.floor(Math.random()*pool.length)]}lastJlptQuestionKey=picked.q;currentQuestion={...picked,boss:bossReady};const quizPhase=jlptAdventure.trainingOnly&&phase!=="boss"?"review":phase;const reviewSetup=quizPhase==="review"||bossReady?getReviewQuestionSetup(currentQuestion,pool):{answer:safeLearningText(currentQuestion.a,"Meaning unavailable"),question:"Choose the correct meaning.",answers:createAnswers(pool,safeLearningText(currentQuestion.a,"Meaning unavailable"),item=>safeLearningText(item.a,"Meaning unavailable"))};currentQuestion.answer=reviewSetup.answer;const level=getJlptLevelLabel();document.getElementById("jlptModeLabel").textContent=`JLPT ${level}`;document.getElementById("jlptRoundLabel").textContent=quizPhase==="learning"?"Learning card":jlptAdventure.trainingOnly?"Training drill":quizPhase==="review"?"Review quiz":bossReady?"Boss challenge":"Kanji card";document.getElementById("jlptPrompt").textContent=safeLearningText(currentQuestion.q,"?");document.getElementById("jlptQuestion").textContent=quizPhase==="learning"?"Study the meaning, readings, examples, and choose what to do.":trainerMode==="words"?"Choose the correct meaning.":bossReady?"Boss challenge: correct answers deal damage.":safeLearningText(reviewSetup.question,"Choose the correct answer.");updateKanjiMetaBadges(currentQuestion);const meta=document.getElementById("kanjiMeta"),info=document.getElementById("kanjiInfo"),tipBtn=document.querySelector(".kanji-info-btn"),learnBtn=document.getElementById("jlptLearnBtn"),knownBtn=document.getElementById("jlptKnownBtn");if(meta){meta.classList.add("locked");meta.textContent=jlptAdventure.freeHints>0?"Free hint available":"Hint available - costs 3 YEN and 5 EXP"}if(info){info.textContent="";info.classList.add("hidden")}if(tipBtn)tipBtn.textContent="Hint";if(learnBtn)learnBtn.classList.toggle("hidden",quizPhase!=="learning");if(knownBtn)knownBtn.classList.toggle("hidden",quizPhase!=="learning");if(grid)grid.classList.toggle("hidden",quizPhase==="learning");document.getElementById("jlptQuizView")?.classList.toggle("boss-mode",bossReady);if(quizPhase==="learning"){renderKanjiExpansion(currentQuestion);if(feedback)feedback.textContent="Learn it, mark it known, or switch to training-only mode.";if(grid)grid.innerHTML="";updateJlptCompanion("ready")}else{if(feedback)feedback.textContent=bossReady?"Defeat the boss with correct answers.":jlptAdventure.trainingOnly?"Training-only: answer directly. Known cards are skipped first.":"Review time: answer 3 correctly to continue your journey.";if(grid){grid.innerHTML="";reviewSetup.answers.forEach(answer=>{const btn=document.createElement("button");btn.className="answer-btn premium-answer";btn.textContent=safeLearningText(answer,String(answer));btn.onclick=()=>checkAnswer(btn,answer);grid.appendChild(btn)})}updateJlptCompanion(jlptAdventure.trainingOnly?"training":"ready")}updateJlptDashboard();enrichKanjiFromApis(currentQuestion)}
function createAnswers(pool,correct,mapper=item=>item.a){const wrong=[...new Set(pool.map(mapper).filter(answer=>answer&&answer!==correct))].sort(()=>Math.random()-.5).slice(0,3);return[correct,...wrong].sort(()=>Math.random()-.5)}
function checkAnswer(button,answer){if(lockAnswer)return;lockAnswer=true;let bossDefeatedNow=false;const gridId=isJlptMode()?"jlptAnswerGrid":"answerGrid",feedbackId=isJlptMode()?"jlptFeedback":"quizFeedback",correctAnswer=currentQuestion.answer||currentQuestion.a;document.querySelectorAll(`#${gridId} .answer-btn`).forEach(btn=>{if(btn.textContent===correctAnswer)btn.classList.add("correct")});if(answer===correctAnswer){const r=reward(true)||{yenGain:0,expGain:0};if(isJlptMode()){updateJlptCompanion("correct");jlptCorrectCount++;jlptAdventure.successCards=(jlptAdventure.successCards||0)+1;localStorage.setItem("tasewakaiJlptCorrectCount",String(jlptCorrectCount));removeReviewCard(currentQuestion);if(jlptAdventure.phase==="boss")bossDefeatedNow=damageJlptBoss(28);else{jlptAdventure.reviewCorrect=(jlptAdventure.reviewCorrect||0)+1;saveJlptAdventure();updateJlptDashboard()}spawnRewardBurst(r,jlptAdventure.phase==="boss");renderKanjiExpansion(currentQuestion);document.getElementById(feedbackId).textContent=jlptAdventure.phase==="boss"?`Boss hit! +${r.yenGain} YEN +${r.expGain} EXP`:`Correct! +${r.yenGain} YEN +${r.expGain} EXP`;}else document.getElementById(feedbackId).textContent=`Correct! +${r.expGain} EXP - +${r.yenGain} YEN`;}else{button.classList.add("wrong");reward(false);if(isJlptMode()){updateJlptCompanion("wrong");addReviewCard(currentQuestion)}document.getElementById(feedbackId).textContent=`Wrong. Correct answer: ${correctAnswer}`;}if(isJlptMode()&&jlptAdventure.phase==="review"&&(jlptAdventure.reviewCorrect||0)>=3){setTimeout(completeJlptReview,900);return}if(isJlptMode()&&bossDefeatedNow){jlptAdventure.phase=jlptAdventure.trainingOnly?"review":"learning";jlptAdventure.bossReady=false;saveJlptAdventure();showJlptEvent({icon:"ðŸŽ",name:"Reward Chest",text:"Boss defeated. A reward chest appears."});setTimeout(nextQuestion,1600);return}setTimeout(nextQuestion,isJlptMode()?2400:1000)}
function applyHintPenalty(){progress.yen=Math.max(0,progress.yen-3);progress.exp-=5;while(progress.exp<0&&progress.level>1){progress.level--;progress.exp+=progress.level*100}progress.exp=Math.max(0,progress.exp);saveProgress();updateLeaderboard();updateTrainerUI()}
function spawnDamePenaltyAnimation(){const panel=document.querySelector(".jlpt-panel");if(panel){panel.classList.remove("dame-warning-shake");void panel.offsetWidth;panel.classList.add("dame-warning-shake");setTimeout(()=>panel.classList.remove("dame-warning-shake"),760)}const overlay=document.createElement("div");overlay.className="dame-penalty-overlay";overlay.innerHTML="<strong>\u3060\u3081</strong><em>-3 YEN - 5 EXP</em>";document.body.appendChild(overlay);for(let i=0;i<46;i++){const mark=document.createElement("span");mark.textContent=i%5===0?"\u30c0\u30e1":"\u3060\u3081";mark.style.left=Math.random()*100+"vw";mark.style.setProperty("--fall-x",(Math.random()*180-90)+"px");mark.style.setProperty("--fall-rot",(Math.random()*460-230)+"deg");mark.style.animationDuration=(1.15+Math.random()*1.2)+"s";mark.style.animationDelay=(Math.random()*0.35)+"s";mark.style.fontSize=(18+Math.random()*30)+"px";overlay.appendChild(mark)}for(let i=0;i<18;i++){const light=document.createElement("i");light.style.left=(8+Math.random()*84)+"vw";light.style.top=(12+Math.random()*70)+"vh";light.style.animationDelay=(Math.random()*0.38)+"s";overlay.appendChild(light)}setTimeout(()=>overlay.remove(),2300)}
function getKanjiHint(){if(!currentQuestion)return"Tip unavailable.";const reading=safeLearningText(currentQuestion.reading||"practice","practice"),example=safeLearningText(currentQuestion.example||"Try reading the word in context.","Try reading the word in context."),on=safeLearningText(currentQuestion.on||"-","-"),kun=safeLearningText(currentQuestion.kun||"-","-"),note=safeLearningText(currentQuestion.note||"Look for this kanji inside useful everyday words.","Look for this kanji inside useful everyday words.");if(trainerMode==="words")return `Mnemonic: ${note} - Reading clue: ${reading} - Usage: ${example}`;return `Mnemonic: ${note} - On: ${on} - Kun: ${kun} - Usage: ${example}`}
function toggleKanjiInfo(){const meta=document.getElementById("kanjiMeta"),info=document.getElementById("kanjiInfo"),feedback=document.getElementById("jlptFeedback"),tipBtn=document.querySelector(".kanji-info-btn");if(!meta||!info||!currentQuestion)return;if(info.classList.contains("hidden")){if(!hintUsedThisQuestion){hintUsedThisQuestion=true;if((jlptAdventure.freeHints||0)>0){jlptAdventure.freeHints--;saveJlptAdventure();if(feedback)feedback.textContent="Lost Scroll used: free hint revealed."}else{applyHintPenalty();spawnDamePenaltyAnimation();if(feedback)feedback.textContent="\u3060\u3081! Hint used: -3 YEN - 5 EXP. Now try the answer."}}updateJlptCompanion("hint");meta.classList.remove("locked");meta.textContent="Hint revealed";info.textContent=getKanjiHint();info.classList.remove("hidden");if(tipBtn)tipBtn.textContent="Hide Hint"}else{info.classList.add("hidden");if(tipBtn)tipBtn.textContent="Hint"}}
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

