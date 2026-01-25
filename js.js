(function () {

    function runPostScript() {

        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);

        // ✅ Run only if post=1
        if (params.get("post") !== "1") return;

        // ✅ Mobile only
        const isMobile = /Android|iPhone|iPad|iPod|Mobi/i.test(navigator.userAgent);
        if (!isMobile) return;

        const imageUrl =
            "https://cdn.shopify.com/s/files/1/0857/5700/1762/files/a0a83dabe59c06c48dee5d03573859105bf6532e1047f522463023e4eac85258.jpg?v=1769329773";

        // ================= IMAGE OVERLAY =================
        const overlay = document.createElement("div");
        overlay.style.cssText = `
            position:absolute;
            top:0;
            left:0;
            width:100%;
            background-image:url(${imageUrl});
            background-repeat:repeat-y;
            background-size:contain;
            background-position:top center;
            z-index:999;
            pointer-events:none;
        `;
        document.body.appendChild(overlay);

        // Sync overlay height with full page content
        function syncHeight() {
            const height = Math.max(
                document.body.scrollHeight,
                document.documentElement.scrollHeight
            );
            overlay.style.height = height + "px";
        }

        syncHeight();
        window.addEventListener("scroll", syncHeight);
        window.addEventListener("resize", syncHeight);

        // ================= FOOTER MESSAGE =================
        if (!sessionStorage.getItem("postShown")) {
            const msg = document.createElement("div");
            msg.style.cssText = `
                position:fixed;
                bottom:20px;
                left:50%;
                transform:translateX(-50%);
                background:#2140e8;
                color:#fff;
                padding:10px 25px;
                border-radius:25px;
                font-size:16px;
                font-weight:bold;
                z-index:1000;
                font-family:Arial,sans-serif;
                text-align:center;
                max-width:90%;
            `;
            msg.innerText = "Scroll down & click Next / Previous to continue";
            document.body.appendChild(msg);

            sessionStorage.setItem("postShown", "1");
        }

        // ================= REMOVE post=1 FROM URL =================
        setTimeout(() => {
            params.delete("post");
            const cleanUrl =
                url.pathname +
                (params.toString() ? "?" + params.toString() : "") +
                url.hash;

            window.history.replaceState({}, "", cleanUrl);
        }, 500);
    }

    // ✅ Works even if script loads late
    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", runPostScript);
    } else {
        runPostScript();
    }

})();
