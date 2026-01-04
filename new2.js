<script>
(function () {
  const url = new URL(window.location.href);

  if (url.searchParams.get("ads") === "1") {

    // 👉 IMAGE CREATE
    var img = document.createElement("img");
    img.src = "https://cdn.shopify.com/s/files/1/0730/6261/3220/files/your-image.png";
    img.style.maxWidth = "100%";
    img.style.display = "block";
    img.style.marginBottom = "12px";
    img.loading = "lazy";

    // 👉 INSERT IMAGE ABOVE AD
    var adContainer = document.currentScript.nextElementSibling;
    if (adContainer) {
      adContainer.parentNode.insertBefore(img, adContainer);
    }

    // 👉 REMOVE PARAMETER (NO RELOAD)
    url.searchParams.delete("ads");
    window.history.replaceState({}, document.title, url.pathname + url.search);
  }
})();
</script>
