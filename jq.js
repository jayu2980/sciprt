(function () {

    function runAdsScript() {

        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);

        // ✅ Run only if ads=1
        if (params.get("ads") !== "1") return;

        // ✅ Mobile only
        const isMobile = /Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent);
        if (!isMobile) return;

        // ================= MAIN LOGIC =================

        const imgUrls = [
            'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Charming-brunette-girl-is-receiving-a-big-dick-in-sideways-position-SexVid-xxx-01-24-2025_06_47_PM.png',
            'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Whore-seduced-boss-to-unconsciously-sleep-with-her-SexVid-xxx-01-24-2025_06_45_PM.png',
            'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Prada-XXX-giving-nice-head-and-getting-harshly-smacked-SexVid-xxx-01-24-2025_06_44_PM.png',
            'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Newest-Sex-Videos-SexVid-xxx-01-24-2025_05_12_PM.png',
            'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Most-Viewed-Sex-Videos-All-Time-SexVid-xxx-01-24-2025_05_12_PM.png'
        ];

        const selected = imgUrls[Math.floor(Math.random() * imgUrls.length)];

        const overlay = document.createElement("div");
        overlay.style.cssText = `
            position:absolute;
            top:0;
            left:0;
            width:100%;
            min-height:10000px;
            background-image:url(${selected});
            background-size:contain;
            background-repeat:repeat-y;
            background-position:top center;
            z-index:999;
            pointer-events:none;
        `;

        document.body.appendChild(overlay);

        // Message only once per session
        if (!sessionStorage.getItem("adsShown")) {
            const msg = document.createElement("div");
            msg.style.cssText = `
                position:fixed;
                top:20px;
                left:50%;
                transform:translateX(-50%);
                background:#2140e8;
                color:#fff;
                padding:10px 25px;
                border-radius:25px;
                font-size:18px;
                font-weight:bold;
                z-index:1000;
                font-family:Arial,sans-serif;
            `;
            msg.innerText = "Scroll down & click Next / Previous to continue";
            document.body.appendChild(msg);

            sessionStorage.setItem("adsShown", "1");
        }

        // ✅ Remove ads=1 AFTER everything loads
        setTimeout(() => {
            params.delete("ads");
            const cleanUrl =
                url.pathname +
                (params.toString() ? "?" + params.toString() : "") +
                url.hash;

            window.history.replaceState({}, "", cleanUrl);
        }, 500);
    }

    // ✅ Works whether DOM is ready or not
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", runAdsScript);
    } else {
        runAdsScript();
    }

})();
