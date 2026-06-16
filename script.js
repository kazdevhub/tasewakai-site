const guideModal=document.getElementById("guideModal"),guideTransition=document.getElementById("guideTransition"),supportModal=document.getElementById("supportModal"),toolModal=document.getElementById("toolModal"),sakuraLayer=document.getElementById("sakuraLayer"),cursorSakuraLayer=document.getElementById("cursorSakuraLayer"),preloader=document.getElementById("preloader");
const kanaQuestions=[{"q": "あ", "a": "a"}, {"q": "い", "a": "i"}, {"q": "う", "a": "u"}, {"q": "え", "a": "e"}, {"q": "お", "a": "o"}, {"q": "か", "a": "ka"}, {"q": "き", "a": "ki"}, {"q": "く", "a": "ku"}, {"q": "け", "a": "ke"}, {"q": "こ", "a": "ko"}, {"q": "さ", "a": "sa"}, {"q": "し", "a": "shi"}, {"q": "す", "a": "su"}, {"q": "せ", "a": "se"}, {"q": "そ", "a": "so"}, {"q": "た", "a": "ta"}, {"q": "ち", "a": "chi"}, {"q": "つ", "a": "tsu"}, {"q": "て", "a": "te"}, {"q": "と", "a": "to"}, {"q": "な", "a": "na"}, {"q": "に", "a": "ni"}, {"q": "ぬ", "a": "nu"}, {"q": "ね", "a": "ne"}, {"q": "の", "a": "no"}, {"q": "は", "a": "ha"}, {"q": "ひ", "a": "hi"}, {"q": "ふ", "a": "fu"}, {"q": "へ", "a": "he"}, {"q": "ほ", "a": "ho"}, {"q": "ま", "a": "ma"}, {"q": "み", "a": "mi"}, {"q": "む", "a": "mu"}, {"q": "め", "a": "me"}, {"q": "も", "a": "mo"}, {"q": "や", "a": "ya"}, {"q": "ゆ", "a": "yu"}, {"q": "よ", "a": "yo"}, {"q": "ら", "a": "ra"}, {"q": "り", "a": "ri"}, {"q": "る", "a": "ru"}, {"q": "れ", "a": "re"}, {"q": "ろ", "a": "ro"}, {"q": "わ", "a": "wa"}, {"q": "を", "a": "wo"}, {"q": "ん", "a": "n"}];
const kanjiQuestions=[{"q": "日", "a": "sun / day"}, {"q": "月", "a": "moon / month"}, {"q": "火", "a": "fire"}, {"q": "水", "a": "water"}, {"q": "木", "a": "tree"}, {"q": "金", "a": "gold / money"}, {"q": "土", "a": "earth / soil"}, {"q": "人", "a": "person"}, {"q": "山", "a": "mountain"}, {"q": "川", "a": "river"}, {"q": "田", "a": "rice field"}, {"q": "口", "a": "mouth"}, {"q": "目", "a": "eye"}, {"q": "耳", "a": "ear"}, {"q": "手", "a": "hand"}, {"q": "足", "a": "foot"}, {"q": "力", "a": "power"}, {"q": "男", "a": "man"}, {"q": "女", "a": "woman"}, {"q": "子", "a": "child"}, {"q": "学", "a": "study"}, {"q": "生", "a": "life / student"}, {"q": "先", "a": "previous / ahead"}, {"q": "大", "a": "big"}, {"q": "小", "a": "small"}, {"q": "中", "a": "middle"}, {"q": "上", "a": "up"}, {"q": "下", "a": "down"}, {"q": "左", "a": "left"}, {"q": "右", "a": "right"}, {"q": "一", "a": "one"}, {"q": "二", "a": "two"}, {"q": "三", "a": "three"}];
const wordQuestions=[{"q": "こんにちは", "a": "hello"}, {"q": "ありがとう", "a": "thank you"}, {"q": "日本", "a": "Japan"}, {"q": "学生", "a": "student"}, {"q": "先生", "a": "teacher"}, {"q": "学校", "a": "school"}, {"q": "水", "a": "water"}, {"q": "火曜日", "a": "Tuesday"}, {"q": "今日", "a": "today"}, {"q": "明日", "a": "tomorrow"}, {"q": "昨日", "a": "yesterday"}, {"q": "友達", "a": "friend"}, {"q": "犬", "a": "dog"}, {"q": "猫", "a": "cat"}, {"q": "本", "a": "book"}, {"q": "車", "a": "car"}, {"q": "電車", "a": "train"}, {"q": "駅", "a": "station"}, {"q": "食べる", "a": "to eat"}, {"q": "飲む", "a": "to drink"}, {"q": "行く", "a": "to go"}, {"q": "見る", "a": "to see"}, {"q": "聞く", "a": "to listen"}, {"q": "話す", "a": "to speak"}];
const prefPins=[{"romaji": "Hokkaidō", "jp": "北海道", "cities": "Sapporo, Asahikawa, Hakodate", "x": 66, "y": 12}, {"romaji": "Aomori", "jp": "青森", "cities": "Aomori, Hirosaki, Hachinohe", "x": 62, "y": 30}, {"romaji": "Iwate", "jp": "岩手", "cities": "Morioka, Ichinoseki, Hanamaki", "x": 64, "y": 36}, {"romaji": "Miyagi", "jp": "宮城", "cities": "Sendai, Ishinomaki, Ōsaki", "x": 63, "y": 43}, {"romaji": "Akita", "jp": "秋田", "cities": "Akita, Yokote, Daisen", "x": 58, "y": 36}, {"romaji": "Yamagata", "jp": "山形", "cities": "Yamagata, Tsuruoka, Sakata", "x": 59, "y": 44}, {"romaji": "Fukushima", "jp": "福島", "cities": "Fukushima, Kōriyama, Iwaki", "x": 61, "y": 51}, {"romaji": "Ibaraki", "jp": "茨城", "cities": "Mito, Tsukuba, Hitachi", "x": 61, "y": 59}, {"romaji": "Tochigi", "jp": "栃木", "cities": "Utsunomiya, Oyama, Nikkō", "x": 57, "y": 56}, {"romaji": "Gunma", "jp": "群馬", "cities": "Maebashi, Takasaki, Isesaki", "x": 53, "y": 56}, {"romaji": "Saitama", "jp": "埼玉", "cities": "Saitama, Kawaguchi, Kawagoe", "x": 55, "y": 62}, {"romaji": "Chiba", "jp": "千葉", "cities": "Chiba, Funabashi, Kashiwa", "x": 62, "y": 65}, {"romaji": "Tokyo", "jp": "東京", "cities": "Tokyo, Hachiōji, Machida", "x": 57, "y": 66}, {"romaji": "Kanagawa", "jp": "神奈川", "cities": "Yokohama, Kawasaki, Sagamihara", "x": 55, "y": 69}, {"romaji": "Niigata", "jp": "新潟", "cities": "Niigata, Nagaoka, Jōetsu", "x": 50, "y": 50}, {"romaji": "Toyama", "jp": "富山", "cities": "Toyama, Takaoka, Uozu", "x": 44, "y": 60}, {"romaji": "Ishikawa", "jp": "石川", "cities": "Kanazawa, Komatsu, Hakusan", "x": 40, "y": 62}, {"romaji": "Fukui", "jp": "福井", "cities": "Fukui, Sabae, Tsuruga", "x": 36, "y": 67}, {"romaji": "Yamanashi", "jp": "山梨", "cities": "Kōfu, Kai, Fujiyoshida", "x": 50, "y": 66}, {"romaji": "Nagano", "jp": "長野", "cities": "Nagano, Matsumoto, Ueda", "x": 48, "y": 59}, {"romaji": "Gifu", "jp": "岐阜", "cities": "Gifu, Takayama, Ōgaki", "x": 41, "y": 67}, {"romaji": "Shizuoka", "jp": "静岡", "cities": "Shizuoka, Hamamatsu, Fuji", "x": 49, "y": 73}, {"romaji": "Aichi", "jp": "愛知", "cities": "Nagoya, Toyota, Toyohashi", "x": 42, "y": 72}, {"romaji": "Mie", "jp": "三重", "cities": "Tsu, Yokkaichi, Suzuka", "x": 39, "y": 76}, {"romaji": "Shiga", "jp": "滋賀", "cities": "Ōtsu, Hikone, Kusatsu", "x": 35, "y": 70}, {"romaji": "Kyoto", "jp": "京都", "cities": "Kyoto, Uji, Maizuru", "x": 31, "y": 70}, {"romaji": "Osaka", "jp": "大阪", "cities": "Osaka, Sakai, Higashiōsaka", "x": 31, "y": 74}, {"romaji": "Hyōgo", "jp": "兵庫", "cities": "Kobe, Himeji, Nishinomiya", "x": 25, "y": 71}, {"romaji": "Nara", "jp": "奈良", "cities": "Nara, Kashihara, Ikoma", "x": 34, "y": 75}, {"romaji": "Wakayama", "jp": "和歌山", "cities": "Wakayama, Tanabe, Hashimoto", "x": 32, "y": 79}, {"romaji": "Tottori", "jp": "鳥取", "cities": "Tottori, Yonago, Kurayoshi", "x": 22, "y": 69}, {"romaji": "Shimane", "jp": "島根", "cities": "Matsue, Izumo, Hamada", "x": 16, "y": 72}, {"romaji": "Okayama", "jp": "岡山", "cities": "Okayama, Kurashiki, Tsuyama", "x": 22, "y": 74}, {"romaji": "Hiroshima", "jp": "広島", "cities": "Hiroshima, Fukuyama, Kure", "x": 16, "y": 76}, {"romaji": "Yamaguchi", "jp": "山口", "cities": "Yamaguchi, Shimonoseki, Ube", "x": 11, "y": 80}, {"romaji": "Tokushima", "jp": "徳島", "cities": "Tokushima, Anan, Naruto", "x": 28, "y": 82}, {"romaji": "Kagawa", "jp": "香川", "cities": "Takamatsu, Marugame, Mitoyo", "x": 26, "y": 79}, {"romaji": "Ehime", "jp": "愛媛", "cities": "Matsuyama, Imabari, Uwajima", "x": 18, "y": 83}, {"romaji": "Kōchi", "jp": "高知", "cities": "Kōchi, Shimanto, Nankoku", "x": 22, "y": 87}, {"romaji": "Fukuoka", "jp": "福岡", "cities": "Fukuoka, Kitakyūshū, Kurume", "x": 9, "y": 83}, {"romaji": "Saga", "jp": "佐賀", "cities": "Saga, Karatsu, Tosu", "x": 6, "y": 86}, {"romaji": "Nagasaki", "jp": "長崎", "cities": "Nagasaki, Sasebo, Isahaya", "x": 4, "y": 89}, {"romaji": "Kumamoto", "jp": "熊本", "cities": "Kumamoto, Yatsushiro, Amakusa", "x": 9, "y": 92}, {"romaji": "Ōita", "jp": "大分", "cities": "Ōita, Beppu, Nakatsu", "x": 14, "y": 87}, {"romaji": "Miyazaki", "jp": "宮崎", "cities": "Miyazaki, Miyakonjō, Nobeoka", "x": 14, "y": 95}, {"romaji": "Kagoshima", "jp": "鹿児島", "cities": "Kagoshima, Kirishima, Kanoya", "x": 8, "y": 97}, {"romaji": "Okinawa", "jp": "沖縄", "cities": "Naha, Okinawa City, Uruma", "x": 24, "y": 96}];
const ECON_SECRET="tasewakai-pre-alpha-local-v03";
let trainerMode="kana",currentQuestion=null,lockAnswer=false,labelsVisible=true,lastRewardAt=0;
let progress=JSON.parse(localStorage.getItem("tasewakaiTrainerProgress")||"{}");
progress.name??="Guest Learner";progress.points??=0;progress.exp??=0;progress.level??=1;progress.yen??=0;progress.streak??=0;progress.lastNameChange??=0;progress.nameLogs??=[];progress.economyHash??="";
let leaderboard=JSON.parse(localStorage.getItem("tasewakaiTrainerLeaderboard")||"[]");
window.addEventListener("load",()=>{setTimeout(()=>preloader.classList.add("hidden"),900);createMapPins();loadTrainer();animateCounters();if(localStorage.getItem("tasewakaiGuideHidden")!=="true")setTimeout(openGuide,1300)});
function economyHash(p=progress){const raw=[p.name,p.points,p.exp,p.level,p.yen,p.streak,p.lastNameChange,ECON_SECRET].join("|");let h=0;for(let i=0;i<raw.length;i++)h=((h<<5)-h+raw.charCodeAt(i))|0;return String(h)}
function verifyEconomy(){if(!progress.economyHash){progress.economyHash=economyHash();saveProgress();return true}return progress.economyHash===economyHash()}
function sealEconomy(){progress.economyHash=economyHash()}
function openGuide(){guideTransition.classList.add("active");setTimeout(()=>{guideTransition.classList.remove("active");guideModal.classList.add("active")},780)}function closeGuide(){guideModal.classList.remove("active")}function hideGuideForever(){localStorage.setItem("tasewakaiGuideHidden","true");closeGuide()}function openSupport(){supportModal.classList.add("active")}function closeSupport(){supportModal.classList.remove("active")}
function openTool(tool){toolModal.classList.add("active");document.querySelectorAll(".tool-view").forEach(v=>v.classList.add("hidden"));if(tool==="trainer"){document.getElementById("trainerTool").classList.remove("hidden");setTrainerMode("kana")}if(tool==="n5"){document.getElementById("n5Tool").classList.remove("hidden");mountN5Quiz();setTrainerMode("kanji")}if(tool==="map"){document.getElementById("mapTool").classList.remove("hidden");renderBetaGate()}}function closeTool(){toolModal.classList.remove("active")}
[guideModal,supportModal,toolModal].forEach(m=>m.addEventListener("click",e=>{if(e.target===m)m.classList.remove("active")}));document.addEventListener("keydown",e=>{if(e.key==="Escape"){closeGuide();closeSupport();closeTool()}});
function createSakura(){const petal=document.createElement("img");const imgs=["assets/icon-fan.png","assets/icon-fishcake.png","assets/icon-onsen.png"];petal.className="sakura";petal.src=imgs[Math.floor(Math.random()*imgs.length)];petal.style.left=Math.random()*100+"vw";petal.style.width=Math.random()*14+20+"px";petal.style.animationDuration=Math.random()*5+7+"s";petal.style.opacity=Math.random()*.38+.18;sakuraLayer.appendChild(petal);setTimeout(()=>petal.remove(),13000)}setInterval(createSakura,760);
let lastCursorPetal=0;document.addEventListener("mousemove",e=>{if(window.innerWidth<=820)return;const now=Date.now();if(now-lastCursorPetal<60)return;lastCursorPetal=now;const p=document.createElement("div");p.className="cursor-petal";p.textContent=Math.random()>.5?"桜":"✿";p.style.left=e.clientX+(Math.random()*16-8)+"px";p.style.top=e.clientY+(Math.random()*16-8)+"px";p.style.fontSize=Math.random()*8+10+"px";cursorSakuraLayer.appendChild(p);setTimeout(()=>p.remove(),900)});
const revealObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add("visible")})},{threshold:.13});document.querySelectorAll(".reveal").forEach(el=>revealObserver.observe(el));
function animateCounters(){document.querySelectorAll(".counter").forEach(counter=>{const target=Number(counter.dataset.target),start=performance.now(),duration=1250;function update(now){const p=Math.min((now-start)/duration,1),e=1-Math.pow(1-p,3);counter.textContent=Math.floor(e*target).toLocaleString();if(p<1)requestAnimationFrame(update);else counter.textContent=target.toLocaleString()}requestAnimationFrame(update)})}
function createMapPins(){const layer=document.getElementById("mapPinLayer");if(!layer)return;layer.innerHTML="";prefPins.forEach(pref=>{const btn=document.createElement("button");btn.className="pref-pin";btn.style.left=pref.x+"%";btn.style.top=pref.y+"%";btn.innerHTML=`<span>${pref.jp}</span>`;btn.title=`${pref.romaji} / ${pref.jp}`;btn.onclick=()=>selectPref(pref,btn);layer.appendChild(btn)});const i=prefPins.findIndex(p=>p.romaji==="Tokyo");selectPref(prefPins[i],layer.children[i])}
function selectPref(pref,btn){document.querySelectorAll(".pref-pin").forEach(pin=>pin.classList.remove("active"));if(btn)btn.classList.add("active");document.getElementById("prefRomaji").textContent=pref.romaji;document.getElementById("prefJapanese").textContent=pref.jp;document.getElementById("prefCities").textContent=pref.cities}
function toggleMapLabels(){labelsVisible=!labelsVisible;document.querySelector(".map-click-card").classList.toggle("map-labels-hidden",!labelsVisible)}function randomPrefecture(){const i=Math.floor(Math.random()*prefPins.length);selectPref(prefPins[i],Array.from(document.querySelectorAll(".pref-pin"))[i])}
function loadTrainer(){const input=document.getElementById("trainerName");if(input)input.value=progress.name==="Guest Learner"?"":progress.name;const ok=verifyEconomy();updateTrainerUI(ok?"":"Economy integrity warning: local data was edited.");updateLeaderboard();renderNameLogs()}
function canChangeName(){if(!progress.lastNameChange)return true;return Date.now()-progress.lastNameChange>=7*24*60*60*1000}function timeUntilNameChange(){const left=7*24*60*60*1000-(Date.now()-progress.lastNameChange);return Math.max(Math.ceil(left/(24*60*60*1000)),1)}
function saveTrainerName(){const input=document.getElementById("trainerName"),newName=input.value.trim()||"Guest Learner",oldName=progress.name||"Guest Learner";if(newName===oldName){updateTrainerUI("This name is already saved.");return}if(!canChangeName()){updateTrainerUI(`Name locked. Try again in about ${timeUntilNameChange()} day(s).`);input.value=oldName==="Guest Learner"?"":oldName;return}progress.name=newName;progress.lastNameChange=Date.now();progress.nameLogs.push({from:oldName,to:newName,date:new Date().toLocaleString()});leaderboard=leaderboard.map(item=>{if(item.name===oldName)item.name=newName;return item});saveProgress();localStorage.setItem("tasewakaiTrainerLeaderboard",JSON.stringify(leaderboard));updateLeaderboard();updateTrainerUI("Name saved. You can change it again in 7 days.");renderNameLogs()}
function saveProgress(){sealEconomy();localStorage.setItem("tasewakaiTrainerProgress",JSON.stringify(progress))}
function updateTrainerUI(message=""){const nameDisplay=document.getElementById("trainerNameDisplay");if(!nameDisplay)return;document.getElementById("trainerNameDisplay").textContent=progress.name;document.getElementById("trainerPoints").textContent=progress.points;document.getElementById("trainerLevel").textContent=progress.level;document.getElementById("trainerExp").textContent=progress.exp;document.getElementById("trainerYen").textContent=progress.yen;document.getElementById("trainerStreak").textContent=progress.streak;const next=progress.level*100;document.getElementById("trainerNextExp").textContent=next;document.getElementById("expFill").style.width=Math.min(progress.exp/next*100,100)+"%";const lockInfo=document.getElementById("nameLockInfo");if(lockInfo){if(message)lockInfo.textContent=message;else if(!canChangeName())lockInfo.textContent=`Name locked. Change available in about ${timeUntilNameChange()} day(s).`;else lockInfo.textContent="Name can be changed once per week."}const sec=document.getElementById("securityStatus");if(sec){const ok=verifyEconomy();sec.className="security-note "+(ok?"ok":"warn");sec.textContent=ok?"Economy integrity: OK (local preview, not server-secure).":"Economy integrity: warning — local data may be edited."}}
function reward(correct=true){if(!correct){progress.streak=0;saveProgress();updateTrainerUI();return}const now=Date.now();if(now-lastRewardAt<450)return;lastRewardAt=now;progress.streak+=1;let yenGain=5,expGain=10;if(trainerMode==="kanji"||trainerMode==="words"){yenGain=8;expGain=14}if(progress.streak%5===0){yenGain+=10;expGain+=16}progress.yen+=yenGain;progress.points+=expGain;progress.exp+=expGain;let next=progress.level*100;while(progress.exp>=next){progress.exp-=next;progress.level++;next=progress.level*100;progress.yen+=25}saveProgress();updateLeaderboard();updateTrainerUI();return {yenGain,expGain}}
function resetTrainerProgress(){progress.points=0;progress.exp=0;progress.level=1;progress.yen=0;progress.streak=0;saveProgress();updateLeaderboard();updateTrainerUI()}
function updateLeaderboard(){const name=progress.name||"Guest Learner";if(progress.points>0||progress.yen>0){const existing=leaderboard.find(item=>item.name===name);if(existing){existing.points=Math.max(existing.points,progress.points);existing.level=Math.max(existing.level,progress.level);existing.yen=Math.max(existing.yen||0,progress.yen)}else leaderboard.push({name,points:progress.points,level:progress.level,yen:progress.yen});leaderboard=leaderboard.sort((a,b)=>(b.yen||0)-(a.yen||0)||b.points-a.points).slice(0,8);localStorage.setItem("tasewakaiTrainerLeaderboard",JSON.stringify(leaderboard))}renderLeaderboard()}
function renderLeaderboard(){const list=document.getElementById("leaderboardList");if(!list)return;if(leaderboard.length===0){list.innerHTML="<p>No scores yet. Play the trainer first.</p>";return}list.innerHTML=leaderboard.map((item,i)=>`<div class="leaderboard-row"><span><strong>#${i+1}</strong> ${item.name}</span><span>${item.yen||0} YEN · Lv.${item.level}</span></div>`).join("")}
function renderNameLogs(){const list=document.getElementById("nameLogsList");if(!list)return;if(!progress.nameLogs||progress.nameLogs.length===0){list.innerHTML="<p>No name changes yet.</p>";return}list.innerHTML=progress.nameLogs.slice().reverse().map(log=>`<div class="leaderboard-row"><span><strong>${log.from}</strong> → <strong>${log.to}</strong></span><span>${log.date}</span></div>`).join("")}
function mountN5Quiz(){const mount=document.getElementById("n5QuizMount");if(!mount||mount.innerHTML.trim())return;mount.innerHTML=`<div id="quizView"><p class="mini-label" id="quizModeLabel">N5 Kanji Trainer</p><div class="quiz-character" id="quizPrompt">日</div><p class="quiz-question" id="quizQuestion">Choose the correct meaning.</p><div class="answer-grid" id="answerGrid"></div><p class="quiz-feedback" id="quizFeedback">Pick an answer to begin.</p></div><div id="leaderboardView" class="leaderboard hidden"><p class="mini-label">Local leaderboard</p><h3>Top Learners</h3><div id="leaderboardList"></div></div>`}
function setTrainerMode(mode){trainerMode=mode;document.querySelectorAll(".tab").forEach(tab=>tab.classList.toggle("active",tab.dataset.mode===mode));const quizView=document.getElementById("quizView"),leaderboardView=document.getElementById("leaderboardView"),logsView=document.getElementById("logsView");if(quizView)quizView.classList.add("hidden");if(leaderboardView)leaderboardView.classList.add("hidden");if(logsView)logsView.classList.add("hidden");if(mode==="leaderboard"){if(leaderboardView)leaderboardView.classList.remove("hidden");renderLeaderboard();return}if(mode==="logs"){if(logsView)logsView.classList.remove("hidden");renderNameLogs();return}if(quizView)quizView.classList.remove("hidden");nextQuestion()}
function getQuestionPool(){if(trainerMode==="kanji")return kanjiQuestions;if(trainerMode==="words")return wordQuestions;return kanaQuestions}
function nextQuestion(){lockAnswer=false;const pool=getQuestionPool();currentQuestion=pool[Math.floor(Math.random()*pool.length)];const label=trainerMode==="kana"?"Kana Trainer":trainerMode==="kanji"?"N5 Kanji Trainer":"N5 Words Trainer";const question=trainerMode==="kana"?"Choose the correct reading.":"Choose the correct meaning.";document.getElementById("quizModeLabel").textContent=label;document.getElementById("quizPrompt").textContent=currentQuestion.q;document.getElementById("quizQuestion").textContent=question;document.getElementById("quizFeedback").textContent="Pick the correct answer.";const answers=createAnswers(pool,currentQuestion.a),grid=document.getElementById("answerGrid");grid.innerHTML="";answers.forEach(answer=>{const btn=document.createElement("button");btn.className="answer-btn";btn.textContent=answer;btn.onclick=()=>checkAnswer(btn,answer);grid.appendChild(btn)})}
function createAnswers(pool,correct){const wrong=pool.map(item=>item.a).filter(answer=>answer!==correct).sort(()=>Math.random()-.5).slice(0,3);return[correct,...wrong].sort(()=>Math.random()-.5)}
function checkAnswer(button,answer){if(lockAnswer)return;lockAnswer=true;document.querySelectorAll(".answer-btn").forEach(btn=>{if(btn.textContent===currentQuestion.a)btn.classList.add("correct")});if(answer===currentQuestion.a){const r=reward(true);document.getElementById("quizFeedback").textContent=`Correct! +${r.expGain} EXP · +${r.yenGain} YEN`;}else{button.classList.add("wrong");reward(false);document.getElementById("quizFeedback").textContent=`Wrong. Correct answer: ${currentQuestion.a}`;}setTimeout(nextQuestion,1000)}


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
    message.textContent = "Access granted. Beta map unlocked.";
    message.className = "access-message ok";
    lockIcon.src = "assets/icon-unlock.png";
    lockStage.classList.add("unlocking");
    localStorage.setItem("tasewakaiBetaMapAccess", "true");
    spawnUnlockPetals();

    setTimeout(() => {
      renderBetaGate();
    }, 950);
  } else {
    message.textContent = "Wrong beta key. Access denied.";
    message.className = "access-message bad";
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
