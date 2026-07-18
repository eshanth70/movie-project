let canDodge = true;
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
let lastLine = -1;

setInterval(() => {

    let index;

    do {

        index = Math.floor(Math.random() * lines.length);

    } while (index === lastLine);

    lastLine = index;

    message.textContent = lines[index];

}, 1000);

setTimeout(() => {
    catImage.style.opacity = 0;

    setTimeout(() => {
        catImage.src = "cat-eyebrow-smile-cat-meme.gif";
        catImage.style.opacity = 1;
    }, 500);
}, 2000);

function moveNoButton(mouseX = null, mouseY = null) {

    if (!canDodge) return;

    canDodge = false;

    const areaRect = buttonArea.getBoundingClientRect();
    const btnRect = noBtn.getBoundingClientRect();

    let newX;
    let newY;

    if (mouseX !== null && mouseY !== null) {

        const btnCenterX = btnRect.left + btnRect.width / 2;
        const btnCenterY = btnRect.top + btnRect.height / 2;

        let dx = btnCenterX - mouseX;
        let dy = btnCenterY - mouseY;

        const length = Math.hypot(dx, dy) || 1;

        dx /= length;
        dy /= length;

        const jump = 170;

        newX =
            (btnRect.left - areaRect.left) + dx * jump;

        newY =
            (btnRect.top - areaRect.top) + dy * jump;

    } else {

        newX = Math.random() * (buttonArea.clientWidth - noBtn.offsetWidth);
        newY = Math.random() * (buttonArea.clientHeight - noBtn.offsetHeight);

    }

    newX = Math.max(0, Math.min(newX, buttonArea.clientWidth - noBtn.offsetWidth));
    newY = Math.max(0, Math.min(newY, buttonArea.clientHeight - noBtn.offsetHeight));

    noBtn.style.left = `${newX}px`;
    noBtn.style.top = `${newY}px`;

    if (yesSize < 2.3) {
        yesSize += 0.04;
    }

    yesBtn.style.transform = `scale(${yesSize})`;

    setTimeout(() => {
        canDodge = true;
    }, 120);

}

document.addEventListener("mousemove", (e) => {

    const rect = noBtn.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.hypot(
        e.clientX - centerX,
        e.clientY - centerY
    );

    if (distance < 170) {
        moveNoButton(e.clientX, e.clientY);
    }

});
noBtn.addEventListener("mouseenter", moveNoButton);

document.addEventListener("touchmove", (e) => {

    const touch = e.touches[0];

    if (!touch) return;

    const rect = noBtn.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.hypot(
        touch.clientX - centerX,
        touch.clientY - centerY
    );

    if (distance < 170) {
        moveNoButton(touch.clientX, touch.clientY);
    }

}, { passive: true });

noBtn.addEventListener("touchstart", (e) => {

    e.preventDefault();

    const touch = e.touches[0];

    moveNoButton(
        touch.clientX,
        touch.clientY
    );

}, { passive: false });


yesBtn.addEventListener("click", () => {

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