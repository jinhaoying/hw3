stroke(0);
strokeWeight(2);
 
function draw(){
	for (i = 0; i < 18; i ++) {
  	gap = 55 + i*15;
  	line(mouseX, mouseY, gap, 320)
	}
}
