function removeBlur() {
    document.getElementById("blurEffect").classList.add("hidden");

    // Auto-play video after blur is removed
    const video = document.getElementById("demoVideo");
    if (video) {
        video.play();
    }
}
document.addEventListener("DOMContentLoaded", function () {
    // Automatically remove blur after 5 seconds
    setTimeout(removeBlur, 5000);
});

function removeBlur() {
    const blurOverlay = document.getElementById("blurEffect");
    if (blurOverlay) {
        blurOverlay.style.transition = "opacity 1s ease-out";
        blurOverlay.style.opacity = "0";
        setTimeout(() => blurOverlay.style.display = "none", 1000); // Hides after fade-out
    }
}
