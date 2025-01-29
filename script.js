document.getElementById("noBtn").addEventListener("click", function () {
    document.getElementById("message").textContent = "I think you mean yes, try again.";
});

document.getElementById("yesBtn").addEventListener("click", function () {
    document.getElementById("message").textContent = "Yay! ❤️";
    createHearts();
});

function createHearts() {
    setInterval(() => {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heart.style.fontSize = Math.random() * 1.5 + 1 + "em";
        document.body.appendChild(heart);
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 150);
}
