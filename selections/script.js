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

let allSvg1 = d3.selectAll('#svg1 circle');
console.log(allSvg1);
let allSvg2 = d3.selectAll('#svg2 circle');
console.log(allSvg1);

const allOdd = allSvg1.select(function (d, i, n) {
  if (i % 2 === 0) {
    this.style.fill = 'indianred';
    return this;
  } else {
    return null;
  }
});
const allEven = allSvg1.select(function (d, i, n) {
  if (i % 2 !== 0) {
    this.style.fill = 'beige';
    return this;
  } else {
    return null;
  }
});

console.log(allEven);

const all = allOdd.merge(allEven);
console.log(all);

const firstCircle = d3.select('svg').selectChild();
console.log(firstCircle);
const secondCircle = d3.select('svg').selectChild(':nth-child(2)');
console.log(secondCircle);
