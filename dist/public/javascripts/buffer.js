function bufferMove(obj, target, fn, ratio = 8) {
    //开始新的定时器之前要先清除之前的定时器，防止由于多次点击而造成的速度改变
    clearInterval(obj.time);

    obj.time = setInterval(function () {
        //假设所有属性都运动结束
        var bBtn = true;

        for (var sAttr in target) {
            if (sAttr === 'opacity') {
                var iNow = getStyle(obj, 'opacity') * 100;
            } else {
                var iNow = parseInt(getStyle(obj, sAttr));
            }

            var iSpeed = (target[sAttr] - iNow) / ratio;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);

            var iNext = iNow + iSpeed;

            if (sAttr === 'opacity') {
                obj.style.opacity = iNext / 100;
                obj.style.filter  = 'alpha(opacity:' + iNext + ')';
            } else {
                obj.style[sAttr] = iNext + 'px';
            }

            if (target[sAttr] !== iNext) {
                bBtn = false;
            }
        }

        if (bBtn === true) {
            clearInterval(obj.time);
            if (fn) {
                fn();
            }
        }
    }, 50);
};

function getStyle(obj, sAttr) {
    if (obj.currentStyle) {
        return obj.currentStyle[sAttr];
    } else {
        return getComputedStyle(obj, false)[sAttr];
    }
};