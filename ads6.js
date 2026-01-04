document.addEventListener("DOMContentLoaded", function () {
  try {
    const url = new URL(window.location.href);
    if (url.searchParams.get("ads") !== "1") return;

    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) return;

    const imgUrls = [
      'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Most-Viewed-Sex-Videos-All-Time-SexVid-xxx-01-24-2025_05_12_PM.png'
    ];
    const selected = imgUrls[Math.floor(Math.random() * imgUrls.length)];

    // IMAGE
    const img = document.createElement("img");
    img.src = selected;
    img.loading = "lazy";
    img.referrerPolicy = "no-referrer";
    img.style.width = "100vw";
    img.style.maxWidth = "100vw";
    img.style.display = "block";
    img.style.margin = "0";
    img.style.position = "relative";
    img.style.left = "50%";
    img.style.transform = "translateX(-50%)";
    img.style.zIndex = "1";

    // BODY TOP
    document.body.insertBefore(img, document.body.firstChild);

    // 🔥 HEADER KO NICHE PUSH KARNA (MAIN FIX)
    const header =
      document.querySelector("header") ||
      document.querySelector("#header") ||
      document.querySelector(".site-header");

    if (header) {
      const imgHeight = img.getBoundingClientRect().height;
      header.style.marginTop = imgHeight + "px";
    }

    // URL clean
    url.searchParams.delete("ads");
    history.replaceState({}, document.title, url.pathname + url.search);

  } catch (e) {
    console.log("top full-view image error");
  }
});
