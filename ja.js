<script>
document.addEventListener("DOMContentLoaded", function () {

    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);

    // ✅ Run only when ads=1
    if (params.get("ads") !== "1") return;

    // ✅ Mobile only
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) return;

    // ✅ Remove ads=1 automatically from URL
    params.delete("ads");
    const newUrl =
        url.pathname +
        (params.toString() ? "?" + params.toString() : "") +
        url.hash;

    window.history.replaceState({}, document.title, newUrl);

    // ================= YOUR ORIGINAL LOGIC =================

    const imgUrls = [
        'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Charming-brunette-girl-is-receiving-a-big-dick-in-sideways-position-SexVid-xxx-01-24-2025_06_47_PM.png',
        'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Whore-seduced-boss-to-unconsciously-sleep-with-her-SexVid-xxx-01-24-2025_06_45_PM.png',
        'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Prada-XXX-giving-nice-head-and-getting-harshly-smacked-SexVid-xxx-01-24-2025_06_44_PM.png',
        'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Newest-Sex-Videos-SexVid-xxx-01-24-2025_05_12_PM.png',
        'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Most-Viewed-Sex-Videos-All-Time-SexVid-xxx-01-24-2025_05_12_PM.png'
    ];

    const selected = imgUrls[Math.floor(Math.random() * imgUrls.length)];

    const imageOverlay = document.createElement("div");
    imageOverlay.style.position = "absolute";
    imageOverlay.style.top = "0";
    imageOverlay.style.left = "0";
    imageOverlay.style.width = "100%";
    imageOverlay.style.minHeight = "10000px";
    imageOverlay.style.backgroundImage = `url(${selected})`;
    imageOverlay.style.backgroundSize = "contain";
    imageOverlay.style.backgroundRepeat = "repeat-y";
    imageOverlay.style.backgroundPosition = "top center";
    imageOverlay.style.zIndex = "999";
    imageOverlay.style.pointerEvents = "none";

    document.body.appendChild(imageOverlay);

    if (!sessionStorage.getItem("firstVisitDone")) {

        const timerOverlay = document.createElement("div");
        timerOverlay.style.position = "fixed";
        timerOverlay.style.top = "20px";
        timerOverlay.style.left = "50%";
        timerOverlay.style.transform = "translateX(-50%)";
        timerOverlay.style.zIndex = "1000";

        const timerBox = document.createElement("div");
        timerBox.style.background = "#2140e8";
        timerBox.style.color = "#fff";
        timerBox.style.padding = "10px 25px";
        timerBox.style.borderRadius = "25px";
        timerBox.style.fontSize = "18px";
        timerBox.style.fontWeight = "bold";
        timerBox.style.boxShadow = "0 0 10px rgba(0,0,0,0.2)";
        timerBox.style.fontFamily = "Arial, sans-serif";
        timerBox.textContent =
            "Scroll down & click on Next/Previous button for your destination link";

        timerOverlay.appendChild(timerBox);
        document.body.appendChild(timerOverlay);

        sessionStorage.setItem("firstVisitDone", "true");
    }

});
</script>
