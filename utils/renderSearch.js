import { fetchCardsWithFilter } from "./fetchCardsWithFilter";

export async function renderSearch(container, filter) {
  const data = await fetchCardsWithFilter(filter);
  container.innerHTML = "";
  data.forEach(element => {
    let n = element.strCategory;
    let p = element.price;
    let m = element.strCategoryThumb;
    let i = element.id;
    container.innerHTML += fillTemplate(n, p, m, i);
  });
}

function fillTemplate(name, price, imageUrl, id) {
  return `<div class="col-md-4">
              <div class="card">
                <img
                src="${imageUrl}"
                class="card-img-top"
                alt="Imagen de comida"
                />
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">Precio: ${price}</p>
                  <a id="${id}" class="btn btn-link card-link">Añadir</a>
                </div>
              </div>
	        </div>`
}
