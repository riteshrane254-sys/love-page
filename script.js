/* ===========================================
   Romantic Website
   script.js - Part 3A
=========================================== */

// ---------- Page References ----------

const landing = document.getElementById("landing");
const creator = document.getElementById("creator");
const passwordPage = document.getElementById("passwordPage");
const envelopePage = document.getElementById("envelopePage");
const lovePage = document.getElementById("lovePage");

// ---------- Buttons ----------

const startBtn = document.getElementById("startBtn");
const previewBtn = document.getElementById("previewBtn");
const continueBtn = document.getElementById("continueBtn");
const unlockBtn = document.getElementById("unlockBtn");

// ---------- Inputs ----------

const yourName = document.getElementById("yourName");
const partnerName = document.getElementById("partnerName");
const specialDate = document.getElementById("specialDate");
const loveMessage = document.getElementById("loveMessage");
const photos = document.getElementById("photos");
const music = document.getElementById("music");
const theme = document.getElementById("theme");

// ---------- Output Elements ----------

const displayNames = document.getElementById("displayNames");
const displayDate = document.getElementById("displayDate");
const displayMessage = document.getElementById("displayMessage");
const slider = document.getElementById("slider");
const audioPlayer = document.getElementById("audioPlayer");

// ---------- Variables ----------

let imageArray = [
    "images/photo1.jpg"
];

let musicURL = "music/song.mp3";
let pagePassword = "0230"; // Temporary default password

// ===========================================
// OPEN CREATOR PAGE
// ===========================================

startBtn.addEventListener("click", () => {

    landing.classList.add("hidden");

    creator.classList.remove("hidden");

});

// ===========================================
// PREVIEW PAGE
// ===========================================

previewBtn.addEventListener("click", () => {

    updateLovePage();

    creator.classList.add("hidden");

    lovePage.classList.remove("hidden");

});

// ===========================================
// CONTINUE
// ===========================================

continueBtn.addEventListener("click", () => {

    updateLovePage();

    creator.classList.add("hidden");

    passwordPage.classList.remove("hidden");

});

// ===========================================
// PASSWORD
// ===========================================

unlockBtn.addEventListener("click", () => {

    const entered =
        document.getElementById("pagePassword").value;

    if (entered === pagePassword) {

        passwordPage.classList.add("hidden");

        envelopePage.classList.remove("hidden");

    } else {

        alert("Incorrect Password ❤️");

    }

});

// ===========================================
// UPDATE LOVE PAGE
// ===========================================

function updateLovePage() {

    displayNames.textContent =
        `${yourName.value} ❤️ ${partnerName.value}`;

    displayDate.textContent =
        specialDate.value;

    slider.innerHTML = '<img src="assets/photo.jpg" alt="Our Photo">';
    audioPlayer.src = "assets/song.mp3";

}

// ===========================================
// LOAD PHOTOS
// ===========================================


// ===========================================
// LOAD MUSIC
// ===========================================


// ===========================================
// APPLY THEME
// ===========================================

function applyTheme() {

    document.body.classList.remove(
        "pink",
        "purple",
        "dark",
        "gold"
    );

    document.body.classList.add(theme.value);
}   

/* ===========================================
   script.js - Part 3B
   Envelope • Countdown • Slideshow • Hearts
=========================================== */

// ---------- Elements ----------

const envelope = document.getElementById("envelope");

if (envelope) {
    envelope.addEventListener("click", function () {
        envelope.classList.add("open");

        setTimeout(() => {
            showPage("lovePage");
        }, 1500);
    });
}

// ===============================
// COUNTDOWN
// ===============================
// ===========================================
// COUNTDOWN
// ===========================================

function startCountdown() {

    if (!specialDate.value) {

        countdown.innerHTML = "❤️ Every moment with you is special ❤️";

        return;

    }

    function updateTimer() {

        const target = new Date(specialDate.value);

        const now = new Date();

        const difference = target - now;

        if (difference <= 0) {

            countdown.innerHTML =
                "❤️ Forever Together ❤️";

            return;
        }

        const days =
            Math.floor(difference / (1000 * 60 * 60 * 24));

        const hours =
            Math.floor(
                (difference % (1000 * 60 * 60 * 24)) /
                (1000 * 60 * 60)
            );

        const minutes =
            Math.floor(
                (difference % (1000 * 60 * 60)) /
                (1000 * 60)
            );

        const seconds =
            Math.floor(
                (difference % (1000 * 60)) /
                1000
            );

        countdown.innerHTML =
            `💖 ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;

    }

    updateTimer();

    setInterval(updateTimer, 1000);

}

// ===========================================
// AUTO PHOTO SLIDESHOW
// ===========================================

function startSlideshow() {

    const images = slider.querySelectorAll("img");

    if (images.length <= 1) return;

    let current = 0;

    images.forEach((img, index) => {

        img.style.display =
            index === 0 ? "block" : "none";

    });

    setInterval(() => {

        images[current].style.display = "none";

        current++;

        if (current >= images.length) {

            current = 0;

        }

        images[current].style.display = "block";

    }, 3000);

}

// ===========================================
// FLOATING HEARTS
// ===========================================

function createHearts() {

    const container = document.getElementById("hearts");

    setInterval(() => {

        const heart = document.createElement("span");

        heart.innerHTML = "❤️";

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.fontSize =
            (18 + Math.random() * 22) + "px";

        heart.style.animationDuration =
            (4 + Math.random() * 4) + "s";

        container.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 8000);

    }, 350);

}/* ===========================================
   script.js - Part 3C
   Final Features
=========================================== */

// ------------------------------
// Elements
// ------------------------------

const editBtn = document.getElementById("editBtn");
const themeBtn = document.getElementById("themeBtn");
const loadingScreen = document.getElementById("loadingScreen");

// Available themes
const themes = ["pink", "purple", "dark", "gold"];
let currentTheme = 0;

// ------------------------------
// EDIT BUTTON
// ------------------------------

if (editBtn) {

    editBtn.addEventListener("click", () => {

        lovePage.classList.add("hidden");

        creator.classList.remove("hidden");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

}

// ------------------------------
// THEME BUTTON
// ------------------------------

if (themeBtn) {

    themeBtn.addEventListener("click", () => {

        currentTheme++;

        if (currentTheme >= themes.length) {

            currentTheme = 0;

        }

        document.body.className = "";

        document.body.classList.add(themes[currentTheme]);

    });

}

// ------------------------------
// LOADING SCREEN
// ------------------------------

window.addEventListener("load", () => {

    loadingScreen.classList.add("hidden");

});

// ------------------------------
// BUTTON RIPPLE EFFECT
// ------------------------------

document.querySelectorAll("button").forEach(button => {

    button.addEventListener("click", function (e) {

        const circle = document.createElement("span");

        const size = Math.max(
            this.offsetWidth,
            this.offsetHeight
        );

        circle.style.width = size + "px";
        circle.style.height = size + "px";

        circle.style.left =
            (e.offsetX - size / 2) + "px";

        circle.style.top =
            (e.offsetY - size / 2) + "px";

        circle.classList.add("ripple");

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});

// ------------------------------
// IMAGE CLICK ZOOM
// ------------------------------

slider.addEventListener("click", (e) => {

    if (e.target.tagName !== "IMG") return;

    const img = e.target;

    img.classList.toggle("zoom");

});

// ------------------------------
// AUTO PLAY MUSIC
// ------------------------------

audioPlayer.addEventListener("canplay", () => {

    audioPlayer.volume = 0.5;

});

// ------------------------------
// SAVE DATA
// ------------------------------

function saveLocal() {

    const data = {

        yourName: yourName.value,
        partnerName: partnerName.value,
        specialDate: specialDate.value,
        message: loveMessage.value,
        theme: theme.value

    };

    localStorage.setItem(
        "loveWebsite",
        JSON.stringify(data)
    );

}

continueBtn.addEventListener("click", saveLocal);

// ------------------------------
// LOAD SAVED DATA
// ------------------------------

window.addEventListener("DOMContentLoaded", () => {

    const saved =
        JSON.parse(localStorage.getItem("loveWebsite"));

    if (!saved) return;

    yourName.value = saved.yourName;
    partnerName.value = saved.partnerName;
    specialDate.value = saved.specialDate;
    loveMessage.value = saved.message;
    theme.value = saved.theme;

});

// ------------------------------
// END
// ------------------------------

console.log("❤️ Romantic Website Loaded Successfully ❤️");/* ============================
   Typing Animation
============================ */

const typingText = document.getElementById("typingText");

const words = [

    "Every Love Story is Beautiful ❤️",

    "But Ours is My Favourite 💖",

    "I'm Sorry... Please Forgive Me 🥹"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typingAnimation(){

    if(!typingText) return;

    const current = words[wordIndex];

    if(!deleting){

        typingText.textContent =
            current.substring(0,charIndex++);

        if(charIndex > current.length){

            deleting = true;

            setTimeout(typingAnimation,1500);

            return;

        }

    }else{

        typingText.textContent =
            current.substring(0,charIndex--);

        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typingAnimation,80);

}

typingAnimation();/* ===================================
   PREMIUM EFFECTS
=================================== */

const petals=document.querySelector(".petals");

const sparkles=document.querySelector(".sparkles");

// Falling Petals

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌹";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=

(5+Math.random()*5)+"s";

petals.appendChild(petal);

setTimeout(()=>{

petal.remove();

},10000);

},700);

// Sparkles

setInterval(()=>{

const s=document.createElement("div");

s.className="sparkle";

s.style.left=Math.random()*100+"vw";

s.style.top=Math.random()*100+"vh";

sparkles.appendChild(s);

setTimeout(()=>{

s.remove();

},2000);

},300);console.log("❤️ Romantic Website Loaded Successfully ❤️");

// Floating Hearts
setInterval(() => {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.style.position = "fixed";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.top = "-20px";
    heart.style.fontSize = "25px";
    heart.style.animation = "fall 6s linear";
    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 6000);
}, 500);// Auto Change Theme Every 5 Seconds

const autoThemes = ["pink", "purple", "dark", "gold"];
let autoThemeIndex = 0;

setInterval(() => {

    document.body.classList.remove(
        "pink",
        "purple",
        "dark",
        "gold"
    );

    autoThemeIndex++;

    if (autoThemeIndex >= autoThemes.length) {
        autoThemeIndex = 0;
    }

    document.body.classList.add(autoThemes[autoThemeIndex]);

}, 30000);function showPage(pageId) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.add("hidden");
    });

    document.getElementById(pageId).classList.remove("hidden");
}