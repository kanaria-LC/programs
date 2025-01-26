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
    gameleisate: {
        functions: {
            create: function (creation_name, function_name, creation_function) {
                leisatescript.date.creation[creation_name][function_name] = creation_function
            },
            adaptation: function (creation_name, function_name) {
                leisatescript.date.creation[creation_name][function_name]();
            },
            infinityAdaptation: function (creation_name, function_name) {
                if (leisatescript.date.creation[creation_name].authenticity) {
                    leisatescript.date.creation[creation_name][function_name]();
                    requestAnimationFrame(function () { leisatescript.gameleisate.functions.infinityAdaptation(creation_name, function_name, leisatescript.date.creation[creation_name].authenticity) })
                }
            },
            /* 試作段階
            adaptation_Event: {
                click: {
                    create: function (creation_name, function_name) {
                        leisatescript.date.creation[creation_name].click = function (event) {
                            const clickEvent = event;
                            const zx = leisatescript.date.creation[creation_name].htmlcode.ori.x;
                            const zy = leisatescript.date.creation[creation_name].htmlcode.ori.y;
                            const ax = (leisatescript.date.creation[creation_name].htmlcode.ori.width + leisatescript.date.creation[creation_name].htmlcode.ori.x);
                            const ay = (leisatescript.date.creation[creation_name].htmlcode.ori.height + leisatescript.date.creation[creation_name].htmlcode.ori.y);
                            if (clickEvent.clientX >= zx && clickEvent.clientX <= ax && clickEvent.clientY >= zy && clickEvent.clientY <= ay) {
                                leisatescript.date.creation[creation_name][function_name](clickEvent);
                            }
                        }
                    }
                }
            } */
        },
        canvas: {
            create: function (creation_name, creation_width, creation_height, type, iszindex) {
                const canvas = document.createElement('canvas');
                canvas.style.zIndex = iszindex
                canvas.style.position = 'absolute'
                canvas.id = creation_name;
                canvas.width = creation_width;
                canvas.height = creation_height;
                leisatescript.date.creation[creation_name].htmlcode = { element: canvas, type: type };
                document.getElementById('stage').appendChild(canvas);
            },
            adaptation: function (creation_name, typemode, cx, cy, creation_width, creation_height) {
                const cre = document.getElementById(creation_name);
                const ctx = cre.getContext('2d');
                ctx.clearRect(0, 0, cre.width, cre.height)
                if (leisatescript.date.creation[creation_name].htmlcode.type == 'colorfill') {
                    ctx.fillStyle = typemode;
                    ctx.fillRect(cx, cy, creation_width, creation_height);
                }
                if (leisatescript.date.creation[creation_name].htmlcode.type == 'image') {
                    const img = new Image();
                    img.src = typemode
                    img.onload = function () {
                        ctx.drawImage(img, cx, cy, creation_width, creation_height)
                    }
                }
                if(leisatescript.date.creation[creation_name].htmlcode.type == 'text'){
                    ctx.font = typemode[0]
                    ctx.fillText(typemode[1],cx,cy,creation_width/2, creation_height/2);
                }
            },
            deleteAll: function () {
                Array.from(document.getElementsByTagName('canvas')).forEach(function (iscanvas, index) {
                    const cre = document.getElementsByTagName('canvas')[index]
                    const ctx = cre.getContext('2d')
                    ctx.clearRect(0, 0, cre.width, cre.height)
                });
            }
        },
    }
};
