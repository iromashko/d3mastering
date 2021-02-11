import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.scss'],
})
export class Part1Component implements OnInit {
  constructor() {}
  data = [
    {
      name: 'Tony',
      age: '10',
    },
    {
      name: 'Jessica',
      age: '12',
    },
    {
      name: 'Andrew',
      age: '9',
    },
    {
      name: 'Emily',
      age: '10',
    },
    {
      name: 'Richard',
      age: '11',
    },
  ].map((d) => ({
    name: d.name,
    age: Number(d.age),
  }));

  ngOnInit(): void {
    console.log(this.data);

    const svg = d3
      .select('#chart-area')
      .append('svg')
      .attr('width', 400)
      .attr('height', 400);
    const circles = svg.selectAll('circle').data(this.data);
    circles
      .enter()
      .append('circle')
      .attr('cx', (d, i) => {
        return i * 50 + 50;
      })
      .attr('cy', 250)
      .attr('r', (d) => {
        return d.age;
      })
      .attr('fill', 'red');
  }
}
