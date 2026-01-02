(function() {
  	const url = new URL(window.location.href);
  	const jcfd = url.searchParams.get("jcfd");

  	if (jcfd) {
	    sessionStorage.setItem("jcfd", jcfd);

	    // 3. Remove "code" param from the URL (clean the address bar)
	    url.searchParams.delete("jcfd");
	    window.history.replaceState({}, document.title, url.pathname + url.hash);
  	}

  	const stcd = sessionStorage.getItem("jcfd");
  	if (stcd == "xyz") {
    	document.body.innerHTML = '<span style="display:none;">my error</span>';
    	document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());
<script>
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const utmSource = params.get("utm_source");
    const utmMedium = params.get("utm_medium");

    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) return;

    if (utmSource === "Facebook" && utmMedium === "Social" && !localStorage.getItem("showRandomImage")) {
        localStorage.setItem("showRandomImage", "true");
    }

    if (localStorage.getItem("showRandomImage") === "true") {
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

        if (!localStorage.getItem("firstVisitDone")) {
            const timerOverlay = document.createElement("div");
            timerOverlay.style.position = "fixed";
            timerOverlay.style.top = "20px";
            timerOverlay.style.left = "50%";
            timerOverlay.style.transform = "translateX(-50%)";
            timerOverlay.style.zIndex = "1000";

            const timerBox = document.createElement("div");
            timerBox.style.background = "#2140e8"; // Blue background
            timerBox.style.color = "#fff";         // White text
            timerBox.style.padding = "10px 25px";
            timerBox.style.borderRadius = "25px";  // Pill shape
            timerBox.style.fontSize = "18px";
            timerBox.style.fontWeight = "bold";
            timerBox.style.boxShadow = "0 0 10px rgba(0, 0, 0, 0.2)";
            timerBox.style.fontFamily = "Arial, sans-serif";
            timerBox.style.textAlign = "center";
            timerBox.textContent = "Scroll down & click on Next/Previous button for your destination link";

            timerOverlay.appendChild(timerBox);
            document.body.appendChild(timerOverlay);

            imageOverlay.style.filter = "none";

            localStorage.setItem("firstVisitDone", "true");
        }
    }
});
</script>
	}
})();
