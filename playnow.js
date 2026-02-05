<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Redirect Countdown</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <style>
    body{
      margin:0;
      padding:0;
      display:flex;
      flex-direction:column;
      justify-content:center;
      align-items:center;
      height:100vh;
      background:#000;
      color:#fff;
      font-family:Arial, sans-serif;
      text-align:center;
    }
    img{
      max-width:90%;
      height:auto;
      cursor:pointer;
    }
    .timer{
      margin-top:15px;
      font-size:18px;
      font-weight:bold;
    }
  </style>
</head>

<body>

  <!-- Clickable Image -->
  <a href="https://premium-medical-clinic.thecricketsamrat.com/top-10-premium-hospitals-luxury-clinics-in-chennai-medical-care-cost-2/">
    <img src="https://cdn.shopify.com/s/files/1/0857/5700/1762/files/PLAY_NOW_VIDEO_1.png?v=1770290371" alt="Play Now">
  </a>

  <!-- Countdown Text -->
  <div class="timer">
    Redirecting in <span id="countdown">10</span> seconds...
  </div>

  <script>
    let timeLeft = 10;
    const countdownEl = document.getElementById("countdown");

    const timer = setInterval(function () {
      timeLeft--;
      countdownEl.textContent = timeLeft;

      if (timeLeft <= 0) {
        clearInterval(timer);
        window.location.href = "https://premium-medical-clinic.thecricketsamrat.com/top-10-premium-hospitals-luxury-clinics-in-chennai-medical-care-cost-2/";
      }
    }, 1000);
  </script>

</body>
</html>
