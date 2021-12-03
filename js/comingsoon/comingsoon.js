document.addEventListener('DOMContentLoaded', (event) => {
    no_scroll()
});

var nowDate = moment();
var toDate = moment('2021/12/05 00:00:00');

const residueTime = toDate.diff(nowDate) / 1000 / 60 / 60
const residueTimePercent = 1 - (residueTime / 504)

const diff = nowDate.diff(toDate)

function computeDuration(time) {
    let h = Math.floor(time / 1000 / 60 / 60)
    const hm = h * 1000 * 60 * 60
    let m = Math.floor((time - hm) / 1000 / 60)
    const mm = m * 1000 * 60
    let s = Math.floor((time - hm - mm) / 1000)
    if (h < 100) {
        h = "0" + h
        if (h < 10) {
            h = "0" + h
        }
    }

    if (m < 10) {
        m.toString()
        m = "0" + m
    }

    if (s < 10) {
        s.toString()
        s = "0" + s
    }

    console.log(h + "：" + m + "：" + s)
    return h + "：" + m + "：" + s
}
//time = ミリ秒

function main() {
    var nowDate = moment();
    var toDate = moment('2021/12/05 00:00:00');
    const diffTime = toDate.diff(nowDate)
    const residueTimeText = document.getElementById("residueTime");
    residueTimeText.innerText = computeDuration(diffTime)
}

setInterval(main, 1000);

var bar = new ProgressBar.Circle(container, {
    color: 'white',
    // This has to be the same size as the maximum width to
    // prevent clipping
    strokeWidth: 8,
    strokeLinejoin: "round",
    trailWidth: 0,
    easing: 'easeInOut',
    duration: 1000,
    svgStyle: {
        opacity: 1
    },
    text: {
        className: 'progressbar__label',
        autoStyleContainer: false,
        style: null,
        Default: null,
    },
    from: { color: '#d5fcff', width: 1 },
    to: { color: '#d5fcff', width: 2 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        console.log(value)
        if (value >= 100) {
            circle.setText('');
            location.href = "./landing.html";
        } else {
            circle.setText(value.toString() + "%");
        }

    }
});


fontFamily = '"Raleway", Helvetica, sans-serif';
fontSize = '3vw';
top = "40%";

bar.animate(residueTimePercent); // Number from 0.0 to 1.0

ityped.init(document.querySelector('#js-typing-target'), {
    strings: ['...search for index files\n...index file found\n...under verification\n...file complete\n...transferring to Nagoya campus now\n...complete\n...loading an image file\n...image file found\n...all files found\n...Coming Soon\n...'],
    startDelay: 3000, // アニメーション開始までの遅延時間をmsで指定
    typeSpeed: 100, // タイピング速度をmsで指定
    loop: false, // 繰り返しアニメーションを行うか
    showCursor: true, //カーソルを表示するか
    cursorChar: "|"
});

function no_scroll() {
    // PCでのスクロール禁止
    document.addEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止
    document.addEventListener("touchmove", scroll_control, { passive: false });
}
// スクロール禁止解除
function return_scroll() {
    // PCでのスクロール禁止解除
    document.removeEventListener("mousewheel", scroll_control, { passive: false });
    // スマホでのタッチ操作でのスクロール禁止解除
    document.removeEventListener('touchmove', scroll_control, { passive: false });
}

// スクロール関連メソッド
function scroll_control(event) {
    event.preventDefault();
}