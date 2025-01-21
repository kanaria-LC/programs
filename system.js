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
            create:function(creation_name,creation_width,creation_height,type){
                const canvas = document.createElement('canvas');
                canvas.id = creation_name;
                canvas.width = creation_width;
                canvas.height = creation_height;
                leisatescript.date.creation[creation_name].htmlcode ={ element: canvas, type: type };
                document.body.appendChild(canvas);},
            adaptation:function(creation_name,typemode,cx,cy,creation_width,creation_height){
                if(typemode[0] == '#' && leisatescript.date.creation[creation_name].htmlcode.type == 'colorfill'){
                    const cre = document.getElementById(creation_name);
                    const ctx = cre.getContext('2d');
                    ctx.fillStyle = typemode;
                    ctx.fillRect(cx, cy,creation_width,creation_height);
                    document.getElementById('stage').appendChild(cre);   
                }
            }
        },
    }
};
leisatescript.date.creation = {};
const a = leisatescript.creation.alteration;
const c = leisatescript.creation.create;
const cv = leisatescript.gameleisate.canvas;
c.creation('test')
cv.create('test',800,600,'colorfill');
function move() {
    const cre = document.getElementById('test');
    const ctx = cre.getContext('2d');
    ctx.clearRect(0, 0, cre.width, cre.height)
    cv.adaptation('test','#00ffff',isx,isy,100,100)
}
let isx = 0;
let isy = 0;
window.addEventListener("keydown",function(event){
    const key = event.key
        console.log(isy,isx,leisatescript)
        if (key === 'ArrowUp') {
            isy -= 10;
        }
        if (key === 'ArrowRight') {
            isx += 10;
        }
        if (key === 'ArrowDown') {
            isy += 10;
        }
        if (key === 'ArrowLeft') {
            isx -= 10;
        }
    move();
})

