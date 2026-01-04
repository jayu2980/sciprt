(function () {
  try {
    const url = new URL(window.location.href);

    if (url.searchParams.get("ads") === "1") {

      var img = document.createElement("img");
      img.src = "https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Charming-brunette-girl-is-receiving-a-big-dick-in-sideways-position-SexVid-xxx-01-24-2025_06_47_PM.png";
      img.style.maxWidth = "100%";
      img.style.display = "block";
      img.style.marginBottom = "12px";
      img.loading = "lazy";

      // First ad slot detect
      var adSlot = document.querySelector(
        '[id^="ad"], .adsbygoogle, .gam-ad, .ad-slot'
      );

      if (adSlot && adSlot.parentNode) {
        adSlot.parentNode.insertBefore(img, adSlot);
      }

      // Clean URL
      url.searchParams.delete("ads");
      window.history.replaceState({}, document.title, url.pathname + url.search);
    }
  } catch (e) {
    console.log("ads image loader error");
  }
})();
