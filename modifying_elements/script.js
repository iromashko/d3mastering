let svg1 = d3.select('svg');
console.log(svg1);

let svg1width = svg1.attr('width');
console.log(svg1width);

svg1.attr('class', 'svg1');

svg1.selectChildren().attr('class', 'my-circle');
svg1.selectChildren().classed('class', 'new-circle');

let svg2 = d3.select('svg:nth-of-type(2)');
console.log(svg2);
let svg2Circles = svg2.selectAll('circle');
console.log(svg2Circles);
svg2Circles.attr('style', 'fill:peachpuff');
svg2Circles.attr('style', function (d, i, n) {
  return `fill:rgb(${
    Math.random() * (255 + i)
  }, ${Math.random() * (255 + i)}, ${Math.random() * (255 + i)})`;
});
