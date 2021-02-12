const movieData = [
  {
    name: 'Avengers: Endgame',
    contentRating: '12A',
    duration: 181, // in minutes
    starRating: 8.4, // out of 10
    votes: 747374,
    gross: 858, // USD million
  },
  {
    name: 'The Lion King',
    contentRating: 'PG',
    duration: 118,
    starRating: 6.9,
    votes: 198014,
    gross: 544,
  },
  {
    name: 'Star Wars: The Rise of Skywalker',
    contentRating: '12A',
    duration: 141,
    starRating: 6.6,
    votes: 343828,
    gross: 515,
  },
  {
    name: 'Frozen 2',
    contentRating: 'U',
    duration: 103,
    starRating: 6.9,
    votes: 120859,
    gross: 477,
  },
  {
    name: 'Toy Story 4',
    contentRating: 'U',
    duration: 100,
    starRating: 7.8,
    votes: 187391,
    gross: 434,
  },
  {
    name: 'Captain Marvel',
    contentRating: '12A',
    duration: 123,
    starRating: 6.9,
    votes: 420459,
    gross: 427,
  },
  {
    name: 'Spider-Man: Far From Home',
    contentRating: '12A',
    duration: 129,
    starRating: 7.5,
    votes: 301963,
    gross: 391,
  },
  {
    name: 'Aladdin',
    contentRating: 'PG',
    duration: 128,
    starRating: 7.0,
    votes: 213479,
    gross: 356,
  },
  {
    name: 'Joker',
    contentRating: '15',
    duration: 122,
    starRating: 8.5,
    votes: 840556,
    gross: 335,
  },
  {
    name: 'Jumanji: The Next Level',
    contentRating: '12A',
    duration: 123,
    starRating: 6.7,
    votes: 163288,
    gross: 317,
  },
];

const divWidth = document.getElementById('movielist').clientWidth / 2 - 10;
const divHeight =
  (document.getElementById('movielist').clientHeight - 40) / 5;

movieData.forEach((movie) => {
  movie.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
    Math.random() * 255
  })`;
});

for (let i = 0; i < movieData.length; i++) {
  d3.select('#movielist').append('div');
}

d3.selectAll('#movielist div').select(function (d, i, n) {
  d3.select(n[i])
    .style('width', divWidth + 'px')
    .style('height', divHeight + 'px')
    .style('line-height', divHeight + 'px')
    .attr('class', 'movieselect');
  n[i].innerText = movieData[i].name;
});

document.querySelector('#movielist').addEventListener('click', (e) => {
  const movie = e.target.innerText;
  const movieObj = searchMovie(movie);
  // const movieObj = movieData.find((el) => el.name === movie);
  d3.select('#moviepost').html(
    `<h2>
      ${movieObj.name.toUpperCase()}
    </h2>
    <p>Content Rating: <span>${movieObj.contentRating}</span></p>
    <p>Duration: <span>${movieObj.duration}</span></p>
    <p>Star rating(out of 10): <span>${movieObj.starRating}</span></p>
    <p>Total Votes: <span>${movieObj.votes}</span></p>
    <p>Gross Collection(USD Mn): <span>${movieObj.gross}</span></p>
    `
  );
});

function searchMovie(movie) {
  for (let key in movieData) {
    if (movieData[key].name === movie) {
      return movieData[key];
    }
  }
}

document
  .querySelector('#choicesubmit')
  .addEventListener('submit', function (e) {
    e.preventDefault();

    const choiceMap = new Map();
    choiceMap.set('U', d3.select('#cbu').property('checked'));
    choiceMap.set('15', d3.select('#cb15').property('checked'));
    choiceMap.set('12A', d3.select('#cb12a').property('checked'));
    choiceMap.set('PG', d3.select('#cbpg').property('checked'));

    if (Array.from(choiceMap.values()).includes(true)) {
      document.getElementById('feedback').innerText = ''
    }
  });
