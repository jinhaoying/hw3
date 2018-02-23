stroke(0);
strokeWeight(1);

//canvas
line(0, 100, 340, 100);
line(0, 250, 340, 250);

//drawing

//left column
for (i = 0; i < 50; i ++) {
  gap1 = i*3;  
  line(0, 100+gap1, 100, 100+gap1);
}

line(100,100,100,250);
line(120,100,120,250);

//middle column
  for (i = -33; i < 50; i ++) {
    gap1 = i*3;
    if(gap1+200>=250){
      line(70+gap1, 250, 220, 100+gap1);
    }
    else if(gap1+100<=100){
      line(120, 200+gap1, 220+gap1, 100);
    }  
    else{
      line(120, 200+gap1, 220, 100+gap1);
    }
	}


line(220,100,220,250);
line(240,100,240,250);


//right column
 for (i = -32; i < 50; i ++) {
    gap1 = i*3;
    if(gap1+200>=250){
      line(240, 100+gap1, 390-gap1, 250);
    }
    else if(gap1+100<=100){
      line(240-gap1, 100, 340, 200+gap1);
   }  
    else{
      line(240, 100+gap1,340, 200+gap1);
    }
	}
