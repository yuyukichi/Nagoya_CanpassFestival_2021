var nowDate = moment();
var toDate = moment('2021/12/05 00:00:00');

const residueTime = toDate.diff(nowDate) / 1000 / 60 / 60
const residueTimePercent = 1 - (residueTime / 816)

const diff = nowDate.diff(toDate)

function computeDuration(time) {
    const h = Math.floor(time / 1000 / 60 / 60)
    const hm = h * 1000 * 60 * 60
    const m = Math.floor((time - hm) / 1000 / 60)
    const mm = m * 1000 * 60
    const s = Math.floor((time - hm - mm) / 1000)
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
    strokeWidth: 8.2,
    strokeLinejoin: "round",
    trailWidth: 0,
    easing: 'easeInOut',
    duration: 1400,
    text: {
        autoStyleContainer: false
    },
    from: { color: '#bce2e8', width: 1 },
    to: { color: '#bce2e8', width: 3 },
    // Set default step function for all animate calls
    step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
        circle.path.setAttribute('stroke-width', state.width);

        var value = Math.round(circle.value() * 100);
        if (value === 0) {
            circle.setText('');
        } else {
            circle.setText(value.toString() + "%");
        }

    }
});
bar.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
bar.text.style.fontSize = '3vw';
bar.text.style.top = "40%";

bar.animate(residueTimePercent); // Number from 0.0 to 1.0