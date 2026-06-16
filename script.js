const helperModal = document.getElementById("helperModal");
const supportModal = document.getElementById("supportModal");
const toolModal = document.getElementById("toolModal");
const sakuraLayer = document.getElementById("sakuraLayer");
const cursorSakuraLayer = document.getElementById("cursorSakuraLayer");
const preloader = document.getElementById("preloader");

const kanaQuestions = [{"q": "あ", "a": "a"}, {"q": "い", "a": "i"}, {"q": "う", "a": "u"}, {"q": "え", "a": "e"}, {"q": "お", "a": "o"}, {"q": "か", "a": "ka"}, {"q": "き", "a": "ki"}, {"q": "く", "a": "ku"}, {"q": "け", "a": "ke"}, {"q": "こ", "a": "ko"}, {"q": "さ", "a": "sa"}, {"q": "し", "a": "shi"}, {"q": "す", "a": "su"}, {"q": "せ", "a": "se"}, {"q": "そ", "a": "so"}, {"q": "た", "a": "ta"}, {"q": "ち", "a": "chi"}, {"q": "つ", "a": "tsu"}, {"q": "て", "a": "te"}, {"q": "と", "a": "to"}, {"q": "な", "a": "na"}, {"q": "に", "a": "ni"}, {"q": "ぬ", "a": "nu"}, {"q": "ね", "a": "ne"}, {"q": "の", "a": "no"}, {"q": "は", "a": "ha"}, {"q": "ひ", "a": "hi"}, {"q": "ふ", "a": "fu"}, {"q": "へ", "a": "he"}, {"q": "ほ", "a": "ho"}, {"q": "ま", "a": "ma"}, {"q": "み", "a": "mi"}, {"q": "む", "a": "mu"}, {"q": "め", "a": "me"}, {"q": "も", "a": "mo"}, {"q": "や", "a": "ya"}, {"q": "ゆ", "a": "yu"}, {"q": "よ", "a": "yo"}, {"q": "ら", "a": "ra"}, {"q": "り", "a": "ri"}, {"q": "る", "a": "ru"}, {"q": "れ", "a": "re"}, {"q": "ろ", "a": "ro"}, {"q": "わ", "a": "wa"}, {"q": "を", "a": "wo"}, {"q": "ん", "a": "n"}, {"q": "ア", "a": "a"}, {"q": "イ", "a": "i"}, {"q": "ウ", "a": "u"}, {"q": "エ", "a": "e"}, {"q": "オ", "a": "o"}, {"q": "カ", "a": "ka"}, {"q": "キ", "a": "ki"}, {"q": "ク", "a": "ku"}, {"q": "ケ", "a": "ke"}, {"q": "コ", "a": "ko"}, {"q": "サ", "a": "sa"}, {"q": "シ", "a": "shi"}, {"q": "ス", "a": "su"}, {"q": "セ", "a": "se"}, {"q": "ソ", "a": "so"}, {"q": "タ", "a": "ta"}, {"q": "チ", "a": "chi"}, {"q": "ツ", "a": "tsu"}, {"q": "テ", "a": "te"}, {"q": "ト", "a": "to"}];
const kanjiQuestions = [{"q": "日", "a": "sun / day"}, {"q": "月", "a": "moon / month"}, {"q": "火", "a": "fire"}, {"q": "水", "a": "water"}, {"q": "木", "a": "tree"}, {"q": "金", "a": "gold / money"}, {"q": "土", "a": "earth / soil"}, {"q": "人", "a": "person"}, {"q": "山", "a": "mountain"}, {"q": "川", "a": "river"}, {"q": "田", "a": "rice field"}, {"q": "口", "a": "mouth"}, {"q": "目", "a": "eye"}, {"q": "耳", "a": "ear"}, {"q": "手", "a": "hand"}, {"q": "足", "a": "foot"}, {"q": "力", "a": "power"}, {"q": "男", "a": "man"}, {"q": "女", "a": "woman"}, {"q": "子", "a": "child"}, {"q": "学", "a": "study"}, {"q": "生", "a": "life / student"}, {"q": "先", "a": "previous / ahead"}, {"q": "大", "a": "big"}, {"q": "小", "a": "small"}, {"q": "中", "a": "middle"}, {"q": "上", "a": "up"}, {"q": "下", "a": "down"}, {"q": "左", "a": "left"}, {"q": "右", "a": "right"}, {"q": "一", "a": "one"}, {"q": "二", "a": "two"}, {"q": "三", "a": "three"}];
const wordQuestions = [{"q": "こんにちは", "a": "hello"}, {"q": "ありがとう", "a": "thank you"}, {"q": "日本", "a": "Japan"}, {"q": "学生", "a": "student"}, {"q": "先生", "a": "teacher"}, {"q": "学校", "a": "school"}, {"q": "水", "a": "water"}, {"q": "火曜日", "a": "Tuesday"}, {"q": "今日", "a": "today"}, {"q": "明日", "a": "tomorrow"}, {"q": "昨日", "a": "yesterday"}, {"q": "友達", "a": "friend"}, {"q": "犬", "a": "dog"}, {"q": "猫", "a": "cat"}, {"q": "本", "a": "book"}, {"q": "車", "a": "car"}, {"q": "電車", "a": "train"}, {"q": "駅", "a": "station"}, {"q": "食べる", "a": "to eat"}, {"q": "飲む", "a": "to drink"}, {"q": "行く", "a": "to go"}, {"q": "見る", "a": "to see"}, {"q": "聞く", "a": "to listen"}, {"q": "話す", "a": "to speak"}];
const prefPins = [{"romaji": "Hokkaidō", "jp": "北海道", "cities": "Sapporo, Asahikawa, Hakodate", "x": 70, "y": 12}, {"romaji": "Aomori", "jp": "青森", "cities": "Aomori, Hirosaki, Hachinohe", "x": 66, "y": 28}, {"romaji": "Iwate", "jp": "岩手", "cities": "Morioka, Ichinoseki, Hanamaki", "x": 69, "y": 34}, {"romaji": "Miyagi", "jp": "宮城", "cities": "Sendai, Ishinomaki, Ōsaki", "x": 68, "y": 41}, {"romaji": "Akita", "jp": "秋田", "cities": "Akita, Yokote, Daisen", "x": 63, "y": 34}, {"romaji": "Yamagata", "jp": "山形", "cities": "Yamagata, Tsuruoka, Sakata", "x": 64, "y": 42}, {"romaji": "Fukushima", "jp": "福島", "cities": "Fukushima, Kōriyama, Iwaki", "x": 65, "y": 49}, {"romaji": "Tokyo", "jp": "東京", "cities": "Tokyo, Hachiōji, Machida", "x": 61, "y": 64}, {"romaji": "Kanagawa", "jp": "神奈川", "cities": "Yokohama, Kawasaki, Sagamihara", "x": 59, "y": 67}, {"romaji": "Chiba", "jp": "千葉", "cities": "Chiba, Funabashi, Kashiwa", "x": 66, "y": 64}, {"romaji": "Saitama", "jp": "埼玉", "cities": "Saitama, Kawaguchi, Kawagoe", "x": 60, "y": 61}, {"romaji": "Niigata", "jp": "新潟", "cities": "Niigata, Nagaoka, Jōetsu", "x": 55, "y": 49}, {"romaji": "Nagano", "jp": "長野", "cities": "Nagano, Matsumoto, Ueda", "x": 52, "y": 58}, {"romaji": "Shizuoka", "jp": "静岡", "cities": "Shizuoka, Hamamatsu, Fuji", "x": 52, "y": 70}, {"romaji": "Aichi", "jp": "愛知", "cities": "Nagoya, Toyota, Toyohashi", "x": 45, "y": 70}, {"romaji": "Kyoto", "jp": "京都", "cities": "Kyoto, Uji, Maizuru", "x": 35, "y": 68}, {"romaji": "Osaka", "jp": "大阪", "cities": "Osaka, Sakai, Higashiōsaka", "x": 34, "y": 72}, {"romaji": "Hyōgo", "jp": "兵庫", "cities": "Kobe, Himeji, Nishinomiya", "x": 29, "y": 69}, {"romaji": "Hiroshima", "jp": "広島", "cities": "Hiroshima, Fukuyama, Kure", "x": 19, "y": 74}, {"romaji": "Fukuoka", "jp": "福岡", "cities": "Fukuoka, Kitakyūshū, Kurume", "x": 10, "y": 80}, {"romaji": "Kumamoto", "jp": "熊本", "cities": "Kumamoto, Yatsushiro, Amakusa", "x": 10, "y": 89}, {"romaji": "Kagoshima", "jp": "鹿児島", "cities": "Kagoshima, Kirishima, Kanoya", "x": 9, "y": 96}, {"romaji": "Okinawa", "jp": "沖縄", "cities": "Naha, Okinawa City, Uruma", "x": 25, "y": 94}];

let trainerMode = "kana";
let currentQuestion = null;
let lockAnswer = false;
let labelsVisible = true;

let progress = JSON.parse(localStorage.getItem("tasewakaiTrainerProgress") || "{}");
progress.name ??= "Guest Learner";
progress.points ??= 0;
progress.exp ??= 0;
progress.level ??= 1;
progress.lastNameChange ??= 0;
progress.nameLogs ??= [];

let leaderboard = JSON.parse(localStorage.getItem("tasewakaiTrainerLeaderboard") || "[]");

window.addEventListener("load", () => {
  setTimeout(() => preloader.classList.add("hidden"), 900);
  createMapPins();
  loadTrainer();
  animateCounters();

  if (localStorage.getItem("tasewakaiHelperHidden") !== "true") {
    setTimeout(openHelper, 1600);
  }
});

function openHelper() { helperModal.classList.add("active"); }
function closeHelper() { helperModal.classList.remove("active"); }
function hideHelperForever() {
  localStorage.setItem("tasewakaiHelperHidden", "true");
  closeHelper();
}

function openSupport() { supportModal.classList.add("active"); }
function closeSupport() { supportModal.classList.remove("active"); }

function openTool(tool) {
  toolModal.classList.add("active");
  document.querySelectorAll(".tool-view").forEach(view => view.classList.add("hidden"));

  if (tool === "trainer") {
    document.getElementById("trainerTool").classList.remove("hidden");
    setTrainerMode("kana");
  }

  if (tool === "n5") {
    document.getElementById("n5Tool").classList.remove("hidden");
    mountN5Quiz();
    setTrainerMode("kanji");
  }

  if (tool === "map") {
    document.getElementById("mapTool").classList.remove("hidden");
  }
}

function closeTool() { toolModal.classList.remove("active"); }

[helperModal, supportModal, toolModal].forEach(modal => {
  modal.addEventListener("click", event => {
    if (event.target === modal) modal.classList.remove("active");
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeHelper();
    closeSupport();
    closeTool();
  }
});

function createSakura() {
  const petal = document.createElement("div");
  const symbols = ["✦", "✧", "❀", "✿", "❁"];
  petal.className = "sakura";
  petal.textContent = symbols[Math.floor(Math.random() * symbols.length)];
  petal.style.left = Math.random() * 100 + "vw";
  petal.style.fontSize = Math.random() * 13 + 10 + "px";
  petal.style.animationDuration = Math.random() * 5 + 6 + "s";
  petal.style.opacity = Math.random() * 0.65 + 0.22;
  sakuraLayer.appendChild(petal);
  setTimeout(() => petal.remove(), 12000);
}

setInterval(createSakura, 460);

let lastCursorPetal = 0;
document.addEventListener("mousemove", event => {
  if (window.innerWidth <= 820) return;
  const now = Date.now();
  if (now - lastCursorPetal < 60) return;
  lastCursorPetal = now;

  const petal = document.createElement("div");
  petal.className = "cursor-petal";
  petal.textContent = Math.random() > 0.5 ? "桜" : "✿";
  petal.style.left = event.clientX + (Math.random() * 16 - 8) + "px";
  petal.style.top = event.clientY + (Math.random() * 16 - 8) + "px";
  petal.style.fontSize = Math.random() * 8 + 10 + "px";
  cursorSakuraLayer.appendChild(petal);
  setTimeout(() => petal.remove(), 900);
});

const revealElements = document.querySelectorAll(".reveal");
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("visible");
  });
}, { threshold: 0.13 });
revealElements.forEach(element => revealObserver.observe(element));

function animateCounters() {
  document.querySelectorAll(".counter").forEach(counter => {
    const target = Number(counter.dataset.target);
    const start = performance.now();
    const duration = 1250;

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      counter.textContent = Math.floor(eased * target).toLocaleString();
      if (progress < 1) requestAnimationFrame(update);
      else counter.textContent = target.toLocaleString();
    }

    requestAnimationFrame(update);
  });
}

function createMapPins() {
  const layer = document.getElementById("mapPinLayer");
  if (!layer) return;
  layer.innerHTML = "";

  prefPins.forEach(pref => {
    const btn = document.createElement("button");
    btn.className = "pref-pin";
    btn.style.left = pref.x + "%";
    btn.style.top = pref.y + "%";
    btn.innerHTML = `<span>${pref.jp}</span>`;
    btn.title = `${pref.romaji} / ${pref.jp}`;
    btn.onclick = () => selectPref(pref, btn);
    layer.appendChild(btn);
  });

  selectPref(prefPins.find(p => p.romaji === "Tokyo") || prefPins[0], layer.querySelector(".pref-pin"));
}

function selectPref(pref, btn) {
  document.querySelectorAll(".pref-pin").forEach(pin => pin.classList.remove("active"));
  if (btn) btn.classList.add("active");
  document.getElementById("prefRomaji").textContent = pref.romaji;
  document.getElementById("prefJapanese").textContent = pref.jp;
  document.getElementById("prefCities").textContent = pref.cities;
}

function toggleMapLabels() {
  labelsVisible = !labelsVisible;
  document.querySelector(".map-click-card").classList.toggle("map-labels-hidden", !labelsVisible);
}

function randomPrefecture() {
  const pref = prefPins[Math.floor(Math.random() * prefPins.length)];
  const pins = Array.from(document.querySelectorAll(".pref-pin"));
  const index = prefPins.indexOf(pref);
  selectPref(pref, pins[index]);
}

function loadTrainer() {
  const input = document.getElementById("trainerName");
  if (input) input.value = progress.name === "Guest Learner" ? "" : progress.name;
  updateTrainerUI();
  updateLeaderboard();
  renderNameLogs();
}

function canChangeName() {
  if (!progress.lastNameChange) return true;
  const week = 7 * 24 * 60 * 60 * 1000;
  return Date.now() - progress.lastNameChange >= week;
}

function timeUntilNameChange() {
  const week = 7 * 24 * 60 * 60 * 1000;
  const left = week - (Date.now() - progress.lastNameChange);
  const days = Math.ceil(left / (24 * 60 * 60 * 1000));
  return Math.max(days, 1);
}

function saveTrainerName() {
  const input = document.getElementById("trainerName");
  const newName = input.value.trim() || "Guest Learner";
  const oldName = progress.name || "Guest Learner";

  if (newName === oldName) {
    updateTrainerUI("This name is already saved.");
    return;
  }

  if (!canChangeName()) {
    updateTrainerUI(`Name locked. Try again in about ${timeUntilNameChange()} day(s).`);
    input.value = oldName === "Guest Learner" ? "" : oldName;
    return;
  }

  progress.name = newName;
  progress.lastNameChange = Date.now();
  progress.nameLogs.push({
    from: oldName,
    to: newName,
    date: new Date().toLocaleString()
  });

  leaderboard = leaderboard.map(item => {
    if (item.name === oldName) item.name = newName;
    return item;
  });

  saveProgress();
  localStorage.setItem("tasewakaiTrainerLeaderboard", JSON.stringify(leaderboard));
  updateLeaderboard();
  updateTrainerUI("Name saved. You can change it again in 7 days.");
  renderNameLogs();
}

function saveProgress() {
  localStorage.setItem("tasewakaiTrainerProgress", JSON.stringify(progress));
}

function updateTrainerUI(message = "") {
  const nameDisplay = document.getElementById("trainerNameDisplay");
  if (!nameDisplay) return;

  document.getElementById("trainerNameDisplay").textContent = progress.name;
  document.getElementById("trainerPoints").textContent = progress.points;
  document.getElementById("trainerLevel").textContent = progress.level;
  document.getElementById("trainerExp").textContent = progress.exp;
  const next = progress.level * 100;
  document.getElementById("trainerNextExp").textContent = next;
  document.getElementById("expFill").style.width = Math.min((progress.exp / next) * 100, 100) + "%";

  const lockInfo = document.getElementById("nameLockInfo");
  if (lockInfo) {
    if (message) lockInfo.textContent = message;
    else if (!canChangeName()) lockInfo.textContent = `Name locked. Change available in about ${timeUntilNameChange()} day(s).`;
    else lockInfo.textContent = "Name can be changed once per week.";
  }
}

function addExp(amount) {
  progress.points += amount;
  progress.exp += amount;
  let next = progress.level * 100;

  while (progress.exp >= next) {
    progress.exp -= next;
    progress.level += 1;
    next = progress.level * 100;
  }

  saveProgress();
  updateLeaderboard();
  updateTrainerUI();
}

function resetTrainerProgress() {
  progress.points = 0;
  progress.exp = 0;
  progress.level = 1;
  saveProgress();
  updateLeaderboard();
  updateTrainerUI();
}

function updateLeaderboard() {
  const name = progress.name || "Guest Learner";

  if (progress.points > 0) {
    const existing = leaderboard.find(item => item.name === name);

    if (existing) {
      existing.points = Math.max(existing.points, progress.points);
      existing.level = Math.max(existing.level, progress.level);
    } else {
      leaderboard.push({ name, points: progress.points, level: progress.level });
    }

    leaderboard = leaderboard.sort((a, b) => b.points - a.points).slice(0, 8);
    localStorage.setItem("tasewakaiTrainerLeaderboard", JSON.stringify(leaderboard));
  }

  renderLeaderboard();
}

function renderLeaderboard() {
  const list = document.getElementById("leaderboardList");
  if (!list) return;

  if (leaderboard.length === 0) {
    list.innerHTML = `<p>No scores yet. Play the trainer first.</p>`;
    return;
  }

  list.innerHTML = leaderboard.map((item, index) => `
    <div class="leaderboard-row">
      <span><strong>#${index + 1}</strong> ${item.name}</span>
      <span>${item.points} pts · Lv.${item.level}</span>
    </div>
  `).join("");
}

function renderNameLogs() {
  const list = document.getElementById("nameLogsList");
  if (!list) return;

  if (!progress.nameLogs || progress.nameLogs.length === 0) {
    list.innerHTML = `<p>No name changes yet.</p>`;
    return;
  }

  list.innerHTML = progress.nameLogs.slice().reverse().map(log => `
    <div class="leaderboard-row">
      <span><strong>${log.from}</strong> → <strong>${log.to}</strong></span>
      <span>${log.date}</span>
    </div>
  `).join("");
}

function mountN5Quiz() {
  const mount = document.getElementById("n5QuizMount");
  if (!mount || mount.innerHTML.trim()) return;

  mount.innerHTML = `
    <div id="quizView">
      <p class="mini-label" id="quizModeLabel">N5 Kanji Trainer</p>
      <div class="quiz-character" id="quizPrompt">日</div>
      <p class="quiz-question" id="quizQuestion">Choose the correct meaning.</p>
      <div class="answer-grid" id="answerGrid"></div>
      <p class="quiz-feedback" id="quizFeedback">Pick an answer to begin.</p>
    </div>

    <div id="leaderboardView" class="leaderboard hidden">
      <p class="mini-label">Local leaderboard</p>
      <h3>Top Learners</h3>
      <div id="leaderboardList"></div>
    </div>
  `;
}

function setTrainerMode(mode) {
  trainerMode = mode;

  document.querySelectorAll(".tab").forEach(tab => {
    tab.classList.toggle("active", tab.dataset.mode === mode);
  });

  const quizView = document.getElementById("quizView");
  const leaderboardView = document.getElementById("leaderboardView");
  const logsView = document.getElementById("logsView");

  if (quizView) quizView.classList.add("hidden");
  if (leaderboardView) leaderboardView.classList.add("hidden");
  if (logsView) logsView.classList.add("hidden");

  if (mode === "leaderboard") {
    if (leaderboardView) leaderboardView.classList.remove("hidden");
    renderLeaderboard();
    return;
  }

  if (mode === "logs") {
    if (logsView) logsView.classList.remove("hidden");
    renderNameLogs();
    return;
  }

  if (quizView) quizView.classList.remove("hidden");
  nextQuestion();
}

function getQuestionPool() {
  if (trainerMode === "kanji") return kanjiQuestions;
  if (trainerMode === "words") return wordQuestions;
  return kanaQuestions;
}

function nextQuestion() {
  lockAnswer = false;

  const pool = getQuestionPool();
  currentQuestion = pool[Math.floor(Math.random() * pool.length)];

  const label = trainerMode === "kana" ? "Kana Trainer" : trainerMode === "kanji" ? "N5 Kanji Trainer" : "N5 Words Trainer";
  const question = trainerMode === "kana" ? "Choose the correct reading." : "Choose the correct meaning.";

  document.getElementById("quizModeLabel").textContent = label;
  document.getElementById("quizPrompt").textContent = currentQuestion.q;
  document.getElementById("quizQuestion").textContent = question;
  document.getElementById("quizFeedback").textContent = "Pick the correct answer.";

  const answers = createAnswers(pool, currentQuestion.a);
  const grid = document.getElementById("answerGrid");
  grid.innerHTML = "";

  answers.forEach(answer => {
    const btn = document.createElement("button");
    btn.className = "answer-btn";
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(btn, answer);
    grid.appendChild(btn);
  });
}

function createAnswers(pool, correct) {
  const wrong = pool
    .map(item => item.a)
    .filter(answer => answer !== correct)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);

  return [correct, ...wrong].sort(() => Math.random() - 0.5);
}

function checkAnswer(button, answer) {
  if (lockAnswer) return;
  lockAnswer = true;

  document.querySelectorAll(".answer-btn").forEach(btn => {
    if (btn.textContent === currentQuestion.a) btn.classList.add("correct");
  });

  if (answer === currentQuestion.a) {
    document.getElementById("quizFeedback").textContent = "Correct! +10 EXP";
    addExp(10);
  } else {
    button.classList.add("wrong");
    document.getElementById("quizFeedback").textContent = `Wrong. Correct answer: ${currentQuestion.a}`;
  }

  setTimeout(nextQuestion, 900);
}
