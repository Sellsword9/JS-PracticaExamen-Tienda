import { fetchOrder } from "./fetchOrder";

export async function renderOrder(container) {
  const data = await fetchOrder();
  let prices = 0; /* */
  container.innerHTML = `<div id="order-container" class="col-md-4 order">
                                <h2>Order Foods</h2>
                          </div>`;
  console.log("reseting html!");
  data.forEach(element => {
    let n = element.strCategory;
    let p = element.price; /* ----> */ prices += p;
    let m = element.strCategoryThumb;
    let i = element.id;
    container.innerHTML += fillTemplate(n, p, m, i);
  });
  container.innerHTML += addPrice(prices);
}

function fillTemplate(name, price, imageUrl, id) {
  return `<div class="col-md-12">
              <div class="card">
                <img
                src="${imageUrl}"
                class="card-img-top"
                alt="Imagen de comida"
                />
                <div class="card-body">
                  <h5 class="card-title">${name}</h5>
                  <p class="card-text">Precio: ${price}</p>
                  <a id="${id}" class="btn btn-link card-link">Quitar</a>
                </div>
              </div>
	        </div>`
}
function addPrice(p) {
  return `<h1 style="color: #fff; font-size: 4rem;">Total: ${p}</h1>`
}