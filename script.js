document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("reveal-button");
    const content = document.getElementById("content");
    const audio = document.getElementById("birthday-song");

    button.addEventListener("click", () => {
        content.classList.toggle("hidden");
        audio.play();
    });
});