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
                    img.src = typemode
                    img.onload = function(){
                        ctx.drawImage(img, cx, cy, creation_width, creation_height)
                    }
                }
            }
        },
    }
};
