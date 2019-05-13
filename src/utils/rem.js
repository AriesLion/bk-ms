(function(doc, win) {
    var docEl = doc.documentElement,
        baseSize = 20,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth > 750) {
                clientWidth = 750
            }
            docEl.style.fontSize = baseSize * (clientWidth / 350) + 'px';
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);