leisatescript.date.creation = {};
const c = leisatescript.creation.create;
const cv = leisatescript.gameleisate.canvas;
c.creation('test')
c.creation('test2')
cv.create('test2', 1310, 744, 'colorfill', 1);
cv.create('test', 1310, 744, 'colorfill', 2);

const isFPS = {}
const ber = {
    y: 0,
}
let hp = 100;
const atackarrow = {
    x: 1310,
    y: 0,
    aru: true,
    tf: true,
    move: function () {
        if (atackarrow.tf) {
            const speed = 5;
            if (atackarrow.aru) {

                atackarrow.x -= speed;
                if (atackarrow.x <= 25 && atackarrow.y >= ber.y && atackarrow.y <= (ber.y + 100)) {
                    atackarrow.aru = false;
                }
                if (atackarrow.x <= -50) {
                    atackarrow.aru = false;
                    hp -= 10
                }
                cv.adaptation('test2', '#0000ff', atackarrow.x, atackarrow.y, 25, 25);
                if ((atackarrow.x <= 25 && (atackarrow.y+25) >= ber.y &&(atackarrow.y + 25)<= (ber.y +100)) || atackarrow.x <= -50) {
                    cv.adaptation('test2', '#0000ff', 0, 0, 0, 0);
                }
            }
            if (atackarrow.aru) {
                requestAnimationFrame(atackarrow.move);
            }
            if (!atackarrow.aru) {
                atackarrow.y = getRandomInt(0, 744);
                atackarrow.x = 1310;
                atackarrow.aru = true
                requestAnimationFrame(atackarrow.move);
            }
        }
    }
};
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
window.addEventListener("keydown", function (event) {
    isFPS[event.key] = true;
})
window.addEventListener("keyup", function (event) {
    isFPS[event.key] = false;
})
leisatescript.gameleisate.functions.create('test', 'move', function () {
    const speed = 5;
    if (isFPS['ArrowUp'] && ber.y >= 0) {
        ber.y -= speed;
    }
    if (isFPS['ArrowDown'] && ber.y <= 644) {
        ber.y += speed;
    }
    cv.adaptation('test', '#0000ff', 0, ber.y, 25, 100)
})

const unko = {
    tf:true,
    toggle() {
        if (this.tf) {
            atackarrow.y = getRandomInt(0, 744);
            atackarrow.move();
            leisatescript.date.creation.test.tf = true;
            leisatescript.gameleisate.functions.infinityAdaptation('test', 'move');
        } else {
            leisatescript.gameleisate.canvas.deleteAll();
            leisatescript.date.creation.test.tf = false;
        }
    }
    };
unko.toggle()
