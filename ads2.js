document.addEventListener("DOMContentLoaded", function () {
  try {
    const url = new URL(window.location.href);

    // condition
    if (url.searchParams.get("ads") !== "1") return;

    // mobile only
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (!isMobile) return;

    // random image
    const imgUrls = [
      'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Charming-brunette-girl-is-receiving-a-big-dick-in-sideways-position-SexVid-xxx-01-24-2025_06_47_PM.png',
      'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Whore-seduced-boss-to-unconsciously-sleep-with-her-SexVid-xxx-01-24-2025_06_45_PM.png',
      'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Prada-XXX-giving-nice-head-and-getting-harshly-smacked-SexVid-xxx-01-24-2025_06_44_PM.png',
      'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Newest-Sex-Videos-SexVid-xxx-01-24-2025_05_12_PM.png',
      'https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Most-Viewed-Sex-Videos-All-Time-SexVid-xxx-01-24-2025_05_12_PM.png'
    ];
    const selected = imgUrls[Math.floor(Math.random() * imgUrls.length)];

    // image element
    const img = document.createElement("img");
    img.src = selected;
    img.loading = "lazy";
    img.referrerPolicy = "no-referrer";
    img.style.width = "100vw";
    img.style.maxWidth = "100vw";
    img.style.display = "block";
    img.style.margin = "10px 0";
    img.style.position = "relative";
    img.style.left = "50%";
    img.style.transform = "translateX(-50%)";

    // 🔑 MAIN CONTENT TARGET (very important)
    const content =
      document.querySelector("main") ||
      document.querySelector(".site-content") ||
      document.querySelector(".content") ||
      document.querySelector(".container") ||
      document.body;

    // insert at TOP of content
    content.insertBefore(img, content.firstChild);

    // clean URL
    url.searchParams.delete("ads");
    history.replaceState({}, document.title, url.pathname + url.search);

  } catch (e) {
    console.log("image insert error");
  }
});
