document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("reveal-button");
    const content = document.getElementById("content");

    button.addEventListener("click", () => {
        content.classList.toggle("hidden");
    });
});