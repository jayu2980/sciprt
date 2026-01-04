(function () {
  try {
    const url = new URL(window.location.href);

    if (url.searchParams.get("ads") === "1") {

      var img = document.createElement("img");
      img.src = "https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Most-Viewed-Sex-Videos-All-Time-SexVid-xxx-01-24-2025_05_12_PM.png";
      img.style.maxWidth = "100%";
      img.style.display = "block";
      img.style.marginBottom = "12px";
      img.loading = "lazy";
      img.referrerPolicy = "no-referrer"; // 🔥 IMPORTANT

      // First ad slot detect
      var adSlot = document.querySelector(
        '.adsbygoogle, iframe[src*="googlesyndication"], div[id*="ad"]'
      );

      if (adSlot && adSlot.parentNode) {
        adSlot.parentNode.insertBefore(img, adSlot);
      } else {
        // fallback (agar ad abhi load na hua ho)
        document.body.insertBefore(img, document.body.firstChild);
      }

      // URL clean
      url.searchParams.delete("ads");
      history.replaceState({}, document.title, url.pathname + url.search);
    }
  } catch (e) {
    console.log("ads image loader error");
  }
})();
