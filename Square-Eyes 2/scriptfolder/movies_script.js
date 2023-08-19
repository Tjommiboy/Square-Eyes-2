const BASE_URL = `https://api.noroff.dev/api/v1`;
const ALL_ENDPOINT = `/square-eyes`;
const product_grid = document.querySelector(".product_grid");
const titleIndex = document.querySelector("title");
const btn = document.querySelector(".titlebtn");



async function fetchData() {
  const response = await fetch(BASE_URL + ALL_ENDPOINT);
  const movies = await response.json();

  product_grid.innerHTML = "";
  movies.forEach(function (movies) {
    product_grid.innerHTML += `
                                    <a href=details.html/${movies.id}><img src=${movies.image}></a>   
                                    <div class=" card__content">
                                    <h2 class="card__title">${movies.title}</h2>
                                    <p class="card__price">${movies.price}</p> 
                                    <p class="card_description">${movies.genre}</p>
                                    </div>   
                                </div> `;
  });
}

fetchData();



window.addEventListener("load",() => {
    const loader = document.querySelector(".loader")
    loader.classList.add(".loader-hidden");
    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    });

})
