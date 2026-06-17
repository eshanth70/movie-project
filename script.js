const catImage = document.getElementById("catImage");
const question = document.getElementById("question");
const message = document.getElementById("message");

const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const movieBtn = document.getElementById("movieBtn");

const ticket =
document.getElementById("ticket");

const buttonArea = document.getElementById("buttonArea");

const lines = [
    "try harder lol",
    "even harder",
    "HARDDDDDDEEEERRR",
    "its ok, you can do it",
    "comeee onnn",
    "leave it bro 🥀",
    "yes click yes T_T"
];

let yesSize = 1;

setTimeout(() => {
    catImage.style.opacity = 0;

    setTimeout(() => {
        catImage.src = "cat-eyebrow-smile-cat-meme.gif";
        catImage.style.opacity = 1;
    }, 500);
}, 2000);

function moveNoButton() {

    const maxX = buttonArea.clientWidth - 120;
    const maxY = buttonArea.clientHeight - 60;

    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;

    if (yesSize < 2) {
    yesSize += 0.03;
}

    yesBtn.style.transform =
        `scale(${yesSize})`;

    message.textContent =
        lines[Math.floor(Math.random() * lines.length)];
}

const dodgeInterval =
    setInterval(moveNoButton, 1000);

yesBtn.addEventListener("click", () => {

    clearInterval(dodgeInterval);

    catImage.src =
        "rigby-cat-hell-yea-rigby-hell-yea.gif";

    question.textContent = "";

    message.textContent =
        "YAAAYYYY!!! ❤️";

    noBtn.style.display = "none";
    yesBtn.style.display = "none";

    document.title =
        "MISSION SUCCESSFUL <3";

    movieBtn.classList.remove("hidden");

    createHearts();
});


movieBtn.addEventListener("click", () => {

    createHearts();

    movieBtn.disabled = true;

    message.textContent =
        "🎬 Booking tickets...";

    setTimeout(() => {
        message.textContent =
            "█░░░░░░░░░ 10%";
    }, 500);

    setTimeout(() => {
        message.textContent =
            "████░░░░░░ 40%";
    }, 1200);

    setTimeout(() => {
        message.textContent =
            "███████░░░ 70%";
    }, 2000);

    setTimeout(() => {
        message.textContent =
            "██████████ 100%";
    }, 2800);

    setTimeout(() => {
        message.textContent =
            "🔥 PHUK YEAA!! 🔥";

        movieBtn.textContent =
            "♡ YAYYYYY ♡";

        createHearts();

    }, 3500);

});

function createHearts() {

    for (let i = 0; i < 100; i++) {

        const heart =
            document.createElement("div");

        heart.className = "heart";

        const emojis = [
    "❤️",
    "💕",
    "💖",
    "💗",
    "💘",
    "✨",
    "🎬",
    "🍿"
];

heart.innerHTML =
    emojis[Math.floor(Math.random() * emojis.length)];

        heart.style.left =
            Math.random() * 100 + "vw";

        heart.style.animationDelay =
            Math.random() * 2 + "s";

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 4500);
    }
}