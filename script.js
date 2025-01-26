leisatescript.date.creation = {};
const canvas = leisatescript.gameleisate.canvas;
const functions = leisatescript.gameleisate.functions;
leisatescript.creation.create.creation('ber');
leisatescript.creation.create.creation('allow');
leisatescript.creation.create.creation('attack');
leisatescript.creation.create.creation('recovery');
leisatescript.creation.create.creation('stege');
leisatescript.creation.create.creation('stege_text');
canvas.create('ber',1200,600,'colorfill');
canvas.create('allow',1200,600,'colorfill');
canvas.create('attack',1200,600,'image');
canvas.create('recovery',1200,600,'image');
canvas.create('stage',1200,600,'colorfill');
canvas.create('stege_text',1200,600,'text');
const turn = new Proxy({yourTurn:true},{
    set(target,prop,vaule){
        if(target[prop] == true){
            
        }
    }}
);
