stroke(0);
strokeWeight(2);

for (i = 0; i < 18; i ++) {
  gap = 55 + i*15;
  line(175, 10, gap, 320)
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
