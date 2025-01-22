const leisatescript = {
    date: {},
    creation: {
        create: {
            creation: function (creation_name) {
                if (leisatescript.date.creation[creation_name]) {
                    return "error: creation already exists";
                } else {
                    leisatescript.date.creation[creation_name] = {};
                    return "creation created successfully";
                }
            },
            element: function (creation_name, element_name) {
                if (leisatescript.date.creation[creation_name]) {
                    leisatescript.date.creation[creation_name][element_name] = {}; 
                    return "element added successsfully";
                } else {
                    return "error: creation does not exist";
                }
            },
        },
    },
    gameleisate:{
        canvas:{
            create:function(creation_name,creation_width,creation_height,type,iszindex){
                const canvas = document.createElement('canvas');
                canvas.style.zIndex = iszindex
                canvas.style.position = 'absolute'
                canvas.id = creation_name;
                canvas.width = creation_width;
                canvas.height = creation_height;
                leisatescript.date.creation[creation_name].htmlcode ={ element: canvas, type: type };
                document.getElementById('stage').appendChild(canvas);},
            adaptation:function(creation_name,typemode,cx,cy,creation_width,creation_height){
                const cre = document.getElementById(creation_name);
                const ctx = cre.getContext('2d');
                ctx.clearRect(0, 0, cre.width, cre.height)
                if(leisatescript.date.creation[creation_name].htmlcode.type == 'colorfill'){
                    ctx.fillStyle = typemode;
                    ctx.fillRect(cx, cy,creation_width,creation_height);
                }
                if(leisatescript.date.creation[creation_name].htmlcode.type == 'image'){
                    const img = new Image();
                    img.onload = function(){
                        ctx.drawImage(img, cx, cy, creation_width, creation_height)
                    }
                    img.src = typemode
                }
            }
        },
    }
};
leisatescript.date.creation = {};
const c = leisatescript.creation.create;
const cv = leisatescript.gameleisate.canvas;
c.creation('test')
c.creation('test2')
cv.create('test2',1310,744,'colorfill',1);
cv.create('test',1310,744,'colorfill',2);
let isx = 0;
let isy = 0;
const isFPS = {}
function game_roop() {
    const speed = 5;
    if (isFPS['ArrowUp'] && isy >= 0) {
        isy -= speed;
    }
    if (isFPS['ArrowRight'] && isx <= 1210) {
        isx += speed;
    }
    if (isFPS['ArrowDown'] && isy <= 644) {
        isy += speed;
    }
    if (isFPS['ArrowLeft'] && isx >= 0) {
        isx -= speed;
    }
    cv.adaptation('test2','#00ff00',0,0,500,500)
    cv.adaptation('test','#0000ff',isx,isy,500,340)
    requestAnimationFrame(game_roop)
}
window.addEventListener("keydown",function(event){
    isFPS[event.key] = true;
})
window.addEventListener("keyup",function(event){
    isFPS[event.key] = false;
})

game_roop();
