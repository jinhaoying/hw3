stroke(0);
strokeWeight(2);
 
function draw(){
	for (i = 0; i < 18; i ++) {
  	gap = 55 + i*15;
  	line(mouseX, mouseY, gap, 320)
	}
}


-------------
  
  
stroke(0);
strokeWeight(2);
  
function draw(){
	for (i = 0; i < 18; i ++) {
  	gap = 55 + i*15;
  	line(mouseX, mouseY, gap, 320)
	}
}


--------------
  
stroke(0);
strokeWeight(2);
var x = 0;
var y = 0;

function setup(){
	for (i = 0; i < 18; i ++) {
  	gap = 55 + i*15;
  	line(x, y, gap, 320)
	}
}

function draw(){
	x=mouseX;
  y = mouseY;
}

------------
stroke(0);
strokeWeight(2);

function draw(){
	for (i = 0; i < 18; i ++) {
  	gap = 55 + i*15;
  	line(mouseX, mouseY, gap, 320)
	}
  clear();
}

------------
	
stroke(0);
strokeWeight(2);

function draw(){
  	line(mouseX, mouseY, 55, 320)
    line(mouseX, mouseY, 70, 320)
    line(mouseX, mouseY, 85, 320)
    line(mouseX, mouseY, 100, 320)
    line(mouseX, mouseY, 115, 320)
    
    line(mouseX, mouseY, 130, 320)
    line(mouseX, mouseY, 145, 320)
    line(mouseX, mouseY, 160, 320)
    line(mouseX, mouseY, 175, 320)
    line(mouseX, mouseY, 190, 320)
    
    line(mouseX, mouseY, 205, 320)
    line(mouseX, mouseY, 220, 320)
    line(mouseX, mouseY, 235, 320)
    line(mouseX, mouseY, 250, 320)
    line(mouseX, mouseY, 265, 320)
    
    line(mouseX, mouseY, 280, 320)
    line(mouseX, mouseY, 295, 320)
    line(mouseX, mouseY, 310, 320)
}
