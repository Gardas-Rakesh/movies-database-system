// Initial movies data
let movies = [
  {title:"Baahubali: The Beginning", year:2015, director:"S. S. Rajamouli", producer:"Shobu Yarlagadda", language:"Telugu", hero:"Prabhas", heroine:"Anushka Shetty", villain:"Rana Daggubati", rating:8.1, poster:"https://i.pinimg.com/736x/53/da/a5/53daa5959723e5046032302f2202d373.jpg"},
  {title:"Salaar", year:2023, director:"Prashanth Neel", producer:"Vijay Kiragandur", language:"Telugu", hero:"Prabhas", heroine:"Shruti Haasan", villain:"Yash", rating:8.5, poster:"https://static.toiimg.com/photo/79531202.cms"},
  {title:"Geetha Govindam", year:2018, director:"Parasuram", producer:"Bunny Vas", language:"Telugu", hero:"Vijay Deverakonda", heroine:"Rashmika Mandanna", villain:"-", rating:7.8, poster:"https://upload.wikimedia.org/wikipedia/en/4/46/Geetha_Govindam.jpg"},
  {title:"RRR", year:2022, director:"S. S. Rajamouli", producer:"Shobu Yarlagadda", language:"Telugu", hero:"Ram Charan, Jr NTR", heroine:"-", villain:"-", rating:9.0, poster:"https://upload.wikimedia.org/wikipedia/en/d/d7/RRR_Poster.jpg"},
  {title:"Pushpa: The Rise", year:2021, director:"Sukumar", producer:"Naveen Yerneni", language:"Telugu", hero:"Allu Arjun", heroine:"Rashmika Mandanna", villain:"-", rating:8.3, poster:"https://upload.wikimedia.org/wikipedia/en/7/75/Pushpa_-_The_Rise_%282021_film%29.jpg"},
  {title:"Kalki 2898 AD", year:2024, director:"Nag Ashwin", producer:"C. Aswani Dutt", language:"Telugu", hero:"Prabhas", heroine:"Deepika Padukone", villain:"Shriya Saran", rating:8.9, poster:"https://upload.wikimedia.org/wikipedia/en/4/4c/Kalki_2898_AD.jpg"},
  {title:"Kill", year:2024, director:"Nikhil Nagesh Bhat", producer:"Karan Johar", language:"Hindi", hero:"Laksh Lalwani", heroine:"Tanya Maniktala", villain:"Raghav Juyal", rating:8.5, poster:"https://upload.wikimedia.org/wikipedia/en/7/7b/Kill_poster.jpeg"},
  {title:"Animal", year:2023, director:"Sandeep Reddy Vanga", producer:"Bhushan Kumar", language:"Hindi", hero:"Ranbir Kapoor", heroine:"Rashmika Mandanna", villain:"Vijay Singh Deol", rating:8.6, poster:"https://upload.wikimedia.org/wikipedia/en/9/90/Animal_%282023_film%29_poster.jpg"},
  {title:"Marco", year:2024, director:"Haneef Adeni", producer:"Shareef Muhammed", language:"Malayalam", hero:"Unnikrishnan Mukundan", heroine:"Yukti Thareja", villain:"Kabir Duhan Singh", rating:8.2, poster:"https://upload.wikimedia.org/wikipedia/en/b/b3/Marco_Malayalam_film.jpg"}
];
const moviesGrid = document.getElementById('moviesGrid');
const searchInput = document.getElementById('search');
const movieForm = document.getElementById('movieForm');
const addMovieSection = document.getElementById('addMovieSection');
const showFormBtn = document.getElementById('showFormBtn');

function displayMovies(filteredMovies) {
  moviesGrid.innerHTML = '';
  filteredMovies.forEach(movie => {
    const movieCard = document.createElement('div');
    movieCard.className = 'movie-card';
    movieCard.innerHTML = `
      <img src="${movie.poster}" alt="${movie.title} Poster">
      <h2>${movie.title} (${movie.year})</h2>
      <p><strong>Director:</strong> ${movie.director}</p>
      <p><strong>Producer:</strong> ${movie.producer}</p>
      <p><strong>Language:</strong> ${movie.language}</p>
      <p><strong>Hero:</strong> ${movie.hero}</p>
      <p><strong>Heroine:</strong> ${movie.heroine}</p>
      <p><strong>Villain:</strong> ${movie.villain}</p>
      <p><strong>Rating:</strong> ⭐ ${movie.rating}</p>
    `;
    moviesGrid.appendChild(movieCard);
  });
}

// Display initial movies
displayMovies(movies);

// Search functionality
searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = movies.filter(movie => movie.title.toLowerCase().includes(query));
  displayMovies(filtered);
});

// Show add movie form on button click
showFormBtn.addEventListener('click', () => {
  addMovieSection.style.display = addMovieSection.style.display === 'none' ? 'block' : 'none';
});

// Add new movie manually
movieForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const newMovie = {
    title: document.getElementById('title').value,
    year: parseInt(document.getElementById('year').value),
    director: document.getElementById('director').value,
    producer: document.getElementById('producer').value,
    language: document.getElementById('language').value,
    hero: document.getElementById('hero').value,
    heroine: document.getElementById('heroine').value,
    villain: document.getElementById('villain').value || '-',
    rating: parseFloat(document.getElementById('rating').value),
    poster: document.getElementById('poster').value
  };
  movies.push(newMovie);
  displayMovies(movies);
  movieForm.reset();
  addMovieSection.style.display = 'none'; // hide form after adding
});
