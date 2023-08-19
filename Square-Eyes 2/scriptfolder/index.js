const BASE_URL = "https://api.noroff.dev/api/v1";
const ALL_ENDPOINT = "/square-eyes";
const movieContainer = document.querySelector(".list_container");

async function fetchMovies() {
  const response = await fetch(BASE_URL + ALL_ENDPOINT);
  const newMovies = await response.json();

  movieContainer.innerHTML = "";
  for (let count = 0; count <= 3; count++) {
   
    movieContainer.innerHTML += `
                                    <a href=detail.html/${newMovies[count].id}><img src=${newMovies[count].image}></a>   
                                        <div class=" card__content">
                                        <h2 class="card__title">${newMovies[count].title}</h2>
                                        <p class="card__price">${newMovies[count].price}</p> 
                                        <p class="card_description">${newMovies[count].genre}</p>
                                        </div>   
                                    </a> `;
  }
}

fetchMovies();
