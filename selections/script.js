const h1 = d3.select('h1');

console.log(h1);

let firstSvg = d3.select('svg');
console.log(firstSvg);

firstSvg = d3.select('svg#circles');

console.log(firstSvg);

const allCircles = d3.selectAll('.svgarea circle');
console.log(allCircles);

for (let el of allCircles) {
  console.log(el);
}

allCircles.selectAll(function (d, i, n) {
  console.log(d);
  console.log(i);
  console.log(n);
  console.log(this);
});

const oddCircles = allCircles.filter(':nth-child(odd)');

console.log(oddCircles);
