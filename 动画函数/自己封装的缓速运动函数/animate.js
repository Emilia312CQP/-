window.onload = function () {
    // 封装一个缓速运动的函数
    function slowAnimate(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(() => {
            let speed = (target - obj.offsetLeft) / 10;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                callback && callback();//短路运算
            }
            obj.style.left = obj.offsetLeft + speed + 'px';

        }, 500);
    }
}