let planetData = [
  {
    name: 'Mercury',
    diameter: 4879,
    density: 5427,
    color: 'green',
  },
  {
    name: 'Venus',
    diameter: 12104,
    density: 5243,
    color: 'purple',
  },
  {
    name: 'Earth',
    diameter: 12756,
    density: 5514,
    color: 'dodgerblue',
  },
  {
    name: 'Mars',
    diameter: 6792,
    density: 3933,
    color: 'indianred',
  },
  {
    name: 'Jupiter',
    diameter: 142984,
    density: 1326,
    color: 'gold',
  },
  {
    name: 'Saturn',
    diameter: 120536,
    density: 687,
    color: 'navy',
  },
  {
    name: 'Uranus',
    diameter: 51118,
    density: 1271,
    color: 'thistle',
  },
  {
    name: 'Neptune',
    diameter: 49528,
    density: 1638,
    color: 'pink',
  },
  {
    name: 'Pluto',
    diameter: 2370,
    density: 2095,
    color: 'brown',
  },
];

d3.select('#diameter svg').attr('width', '100%').attr('height', '350');

d3.select('#density svg').attr('width', '100%').attr('height', '350');

let selOrder = 'ascending';

document.querySelector('#btn').addEventListener('click', function () {
  if (selOrder === 'ascending') {
    document.getElementById(
      'msg'
    ).innerText = `${selOrder.toUpperCase()} ORDER SELECTED`;

    setTimeout(() => {
      document.getElementById('msg').innerText = '';
    }, 1500);

    genDiameterChart(selOrder);
    getDensityChart(selOrder);
  }
});
