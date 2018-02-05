stroke(0);
strokeWeight(2);

for (i = 0; i < 12; i ++) {
  gap1 = i*15;
  gap2 = i*15;
  line(175+gap1, gap2, 175-gap1, gap2);
  line(175+gap1, 350-gap2, 175-gap1, 350-gap2);
}
