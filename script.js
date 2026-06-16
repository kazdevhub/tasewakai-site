const helperModal = document.getElementById("helperModal");
const supportModal = document.getElementById("supportModal");
const sakuraLayer = document.getElementById("sakuraLayer");
const cursorSakuraLayer = document.getElementById("cursorSakuraLayer");
const preloader = document.getElementById("preloader");

const prefectures = [{"romaji": "Hokkaidō", "jp": "北海道", "cities": "Sapporo, Asahikawa, Hakodate"}, {"romaji": "Aomori", "jp": "青森", "cities": "Aomori, Hirosaki, Hachinohe"}, {"romaji": "Iwate", "jp": "岩手", "cities": "Morioka, Ichinoseki, Hanamaki"}, {"romaji": "Miyagi", "jp": "宮城", "cities": "Sendai, Ishinomaki, Ōsaki"}, {"romaji": "Akita", "jp": "秋田", "cities": "Akita, Yokote, Daisen"}, {"romaji": "Yamagata", "jp": "山形", "cities": "Yamagata, Tsuruoka, Sakata"}, {"romaji": "Fukushima", "jp": "福島", "cities": "Fukushima, Kōriyama, Iwaki"}, {"romaji": "Ibaraki", "jp": "茨城", "cities": "Mito, Tsukuba, Hitachi"}, {"romaji": "Tochigi", "jp": "栃木", "cities": "Utsunomiya, Oyama, Nikkō"}, {"romaji": "Gunma", "jp": "群馬", "cities": "Maebashi, Takasaki, Isesaki"}, {"romaji": "Saitama", "jp": "埼玉", "cities": "Saitama, Kawaguchi, Kawagoe"}, {"romaji": "Chiba", "jp": "千葉", "cities": "Chiba, Funabashi, Kashiwa"}, {"romaji": "Tokyo", "jp": "東京", "cities": "Tokyo, Hachiōji, Machida"}, {"romaji": "Kanagawa", "jp": "神奈川", "cities": "Yokohama, Kawasaki, Sagamihara"}, {"romaji": "Niigata", "jp": "新潟", "cities": "Niigata, Nagaoka, Jōetsu"}, {"romaji": "Toyama", "jp": "富山", "cities": "Toyama, Takaoka, Uozu"}, {"romaji": "Ishikawa", "jp": "石川", "cities": "Kanazawa, Komatsu, Hakusan"}, {"romaji": "Fukui", "jp": "福井", "cities": "Fukui, Sabae, Tsuruga"}, {"romaji": "Yamanashi", "jp": "山梨", "cities": "Kōfu, Kai, Fujiyoshida"}, {"romaji": "Nagano", "jp": "長野", "cities": "Nagano, Matsumoto, Ueda"}, {"romaji": "Gifu", "jp": "岐阜", "cities": "Gifu, Takayama, Ōgaki"}, {"romaji": "Shizuoka", "jp": "静岡", "cities": "Shizuoka, Hamamatsu, Fuji"}, {"romaji": "Aichi", "jp": "愛知", "cities": "Nagoya, Toyota, Toyohashi"}, {"romaji": "Mie", "jp": "三重", "cities": "Tsu, Yokkaichi, Suzuka"}, {"romaji": "Shiga", "jp": "滋賀", "cities": "Ōtsu, Hikone, Kusatsu"}, {"romaji": "Kyoto", "jp": "京都", "cities": "Kyoto, Uji, Maizuru"}, {"romaji": "Osaka", "jp": "大阪", "cities": "Osaka, Sakai, Higashiōsaka"}, {"romaji": "Hyōgo", "jp": "兵庫", "cities": "Kobe, Himeji, Nishinomiya"}, {"romaji": "Nara", "jp": "奈良", "cities": "Nara, Kashihara, Ikoma"}, {"romaji": "Wakayama", "jp": "和歌山", "cities": "Wakayama, Tanabe, Hashimoto"}, {"romaji": "Tottori", "jp": "鳥取", "cities": "Tottori, Yonago, Kurayoshi"}, {"romaji": "Shimane", "jp": "島根", "cities": "Matsue, Izumo, Hamada"}, {"romaji": "Okayama", "jp": "岡山", "cities": "Okayama, Kurashiki, Tsuyama"}, {"romaji": "Hiroshima", "jp": "広島", "cities": "Hiroshima, Fukuyama, Kure"}, {"romaji": "Yamaguchi", "jp": "山口", "cities": "Yamaguchi, Shimonoseki, Ube"}, {"romaji": "Tokushima", "jp": "徳島", "cities": "Tokushima, Anan, Naruto"}, {"romaji": "Kagawa", "jp": "香川", "cities": "Takamatsu, Marugame, Mitoyo"}, {"romaji": "Ehime", "jp": "愛媛", "cities": "Matsuyama, Imabari, Uwajima"}, {"romaji": "Kōchi", "jp": "高知", "cities": "Kōchi, Shimanto, Nankoku"}, {"romaji": "Fukuoka", "jp": "福岡", "cities": "Fukuoka, Kitakyūshū, Kurume"}, {"romaji": "Saga", "jp": "佐賀", "cities": "Saga, Karatsu, Tosu"}, {"romaji": "Nagasaki", "jp": "長崎", "cities": "Nagasaki, Sasebo, Isahaya"}, {"romaji": "Kumamoto", "jp": "熊本", "cities": "Kumamoto, Yatsushiro, Amakusa"}, {"romaji": "Ōita", "jp": "大分", "cities": "Ōita, Beppu, Nakatsu"}, {"romaji": "Miyazaki", "jp": "宮崎", "cities": "Miyazaki, Miyakonojō, Nobeoka"}, {"romaji": "Kagoshima", "jp": "鹿児島", "cities": "Kagoshima, Kirishima, Kanoya"}, {"romaji": "Okinawa", "jp": "沖縄", "cities": "Naha, Okinawa City, Uruma"}];

window.addEventListener("load", () => {
  setTimeout(() => preloader.classList.add("hidden"), 650);

  if (localStorage.getItem("tasewakaiHelperHidden") !== "true") {
    setTimeout(openHelper, 1600);
  }

  animateCounters();
});

function openHelper() {
  helperModal.classList.add("active");
}

function closeHelper() {
  helperModal.classList.remove("active");
}

function hideHelperForever() {
  localStorage.setItem("tasewakaiHelperHidden", "true");
  closeHelper();
}

function openSupport() {
  supportModal.classList.add("active");
}

function closeSupport() {
  supportModal.classList.remove("active");
}

helperModal.addEventListener("click", function (event) {
  if (event.target === helperModal) closeHelper();
});

supportModal.addEventListener("click", function (event) {
  if (event.target === supportModal) closeSupport();
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeHelper();
    closeSupport();
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

  setTimeout(() => {
    petal.remove();
  }, 12000);
}

setInterval(createSakura, 330);

let lastCursorPetal = 0;

document.addEventListener("mousemove", (event) => {
  const now = Date.now();
  if (now - lastCursorPetal < 45) return;
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

const revealObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.13 }
);

revealElements.forEach(element => revealObserver.observe(element));

function animateCounters() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach(counter => {
    const target = Number(counter.dataset.target);
    let current = 0;
    const duration = 1250;
    const start = performance.now();

    function update(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      current = Math.floor(eased * target);
      counter.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(update);
      } else {
        counter.textContent = target.toLocaleString();
      }
    }

    requestAnimationFrame(update);
  });
}

const mapPins = document.querySelectorAll(".map-pin");
const prefRomaji = document.getElementById("prefRomaji");
const prefJapanese = document.getElementById("prefJapanese");
const prefCities = document.getElementById("prefCities");

function selectPrefecture(pin) {
  mapPins.forEach(item => item.classList.remove("active"));
  pin.classList.add("active");

  prefRomaji.textContent = pin.dataset.romaji;
  prefJapanese.textContent = pin.dataset.jp;
  prefCities.textContent = pin.dataset.cities;
}

mapPins.forEach(pin => {
  pin.addEventListener("click", () => selectPrefecture(pin));
});

function randomPrefecture() {
  const randomPin = mapPins[Math.floor(Math.random() * mapPins.length)];
  selectPrefecture(randomPin);
  randomPin.scrollIntoView({ behavior: "smooth", block: "center", inline: "center" });
}

const tokyoPin = Array.from(mapPins).find(pin => pin.dataset.romaji === "Tokyo");
if (tokyoPin) selectPrefecture(tokyoPin);
