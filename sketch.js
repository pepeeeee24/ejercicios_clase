function setup(){
    createCanvas (300,300);
    
    }
    function draw(){
    
    clear();
    background(123);
    console.log("teclaPulsada"+keyCode);
    
    textSize(50);
    switch(keyCode){
    case 37:
   
    text("izquierda",100,100);
    break;
    case 38:
  
    text("ARRIBA",100,100);
    break;
    case 40:
  rect(70,100,60,50);
    text("ABAJO",100,100);
    break;
    case 39:
      
    ellipse(70,100,60,50);
  
    text("DERECHA",100,100);
    
    
    break;
    default:
    break;
    }
    }