stroke(0);
strokeWeight(1);

for (i = 0; i < 130; i ++) {
  gap1 = i*3;
  line(gap1, 100, gap1, 250);
  line(100, gap1, 250, gap1);
  line(340-gap1, gap1-100,440-gap1, gap1);
}
