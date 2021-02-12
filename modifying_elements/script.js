let h1 = d3.select('h1').html();

d3.select('h1').html('html')
console.log(h1);

// let div1 = d3.select('#title');

// let divH1 = div1.append('h1').text('Append');

// console.log(divH1);

// const rectsData = [
//   {
//     x: '10',
//     y: '10',
//     width: '50',
//     height: '30',
//   },
//   {
//     x: '10',
//     y: '50',
//     width: '50',
//     height: '30',
//   },
// ];

// const svgRects = d3.select('#svg').append('svg');

// svgRects.attr('width', '300').attr('height', '300');

// for (let i = 0; i < rectsData.length; i++) {
//   svgRects.append('rect');
// }

// d3.selectAll('rect').select(function (d, i, n) {
//   d3.select(n[i])
//     .attr('x', rectsData[i].x)
//     .attr('y', rectsData[i].y)
//     .attr('width', rectsData[i].width)
//     .attr('height', rectsData[i].height);
// });

// let text1 = d3.select('text').text();
// text1 = d3.select('text').text('Text 1')
// console.log(text1);

// const labelsFor = ['fname', 'lname', 'gender', 'male', 'female', 'nomention'];
// const labels = d3.selectAll('label');
// labels.filter(function (d, i) {
//   const d3label = d3.select(this);
//   d3label.attr('for', labelsFor[i]);
// });

// d3.select('#fname').property('type', 'text').property('placeholder', 'John');

// let svg = d3.select('svg');
// console.log(svg.style('background-color'));

// svg
//   .attr('width', '300')
//   .attr('height', '300')
//   .style('background-color', 'lightgrey');

// svg.selectChildren()

// let line1 = d3.select('line').classed('gray');

// let lines = d3.selectAll('line').classed('gray', true);
// console.log(lines);

// lines = d3.selectAll('line').classed('gray', false);
// console.log(lines);

// let svg1 = d3.select('svg');
// console.log(svg1);

// let svg1width = svg1.attr('width');
// console.log(svg1width);

// svg1.attr('class', 'svg1');

// svg1.selectChildren().attr('class', 'my-circle');
// svg1.selectChildren().classed('class', 'new-circle');

// let svg2 = d3.select('svg:nth-of-type(2)');
// console.log(svg2);
// let svg2Circles = svg2.selectAll('circle');
// console.log(svg2Circles);
// svg2Circles.attr('style', 'fill:peachpuff');
// svg2Circles.attr('style', function (d, i, n) {
//   return `fill:rgb(${
//     Math.random() * (255 + i)
//   }, ${Math.random() * (255 + i)}, ${Math.random() * (255 + i)})`;
// });
