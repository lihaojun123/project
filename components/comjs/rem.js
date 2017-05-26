(function (doc, win) {
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth >= 800 ? 800 : docEl.clientWidth;
        if (!clientWidth){
            return;
        }

        docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
        // 此处设置在320px宽的可视区下,1rem = 20px
    };
    if (!doc.addEventListener){
        return;
    }
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false); 
})(document, window);