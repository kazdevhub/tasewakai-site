const helperModal = document.getElementById("helperModal");
const supportModal = document.getElementById("supportModal");
const sakuraLayer = document.getElementById("sakuraLayer");

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
  const symbols = ["✦", "✧", "❀", "✿"];
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

setInterval(createSakura, 360);

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

window.addEventListener("load", () => {
  if (localStorage.getItem("tasewakaiHelperHidden") !== "true") {
    setTimeout(openHelper, 1200);
  }
});
