stroke(0);
strokeWeight(2);

for (i = 0; i < 12; i ++) {
  gap = i*15;
  line(175+gap, gap, 175-gap, gap);
  line(175+gap, 350-gap, 175-gap, 350-gap);
}
