import { renderDefaultCards } from "./utils/renderDefaultCards";
import { URL } from "./utils/fetchCards";
import { fetchCard } from "./utils/fetchCard";
import { renderOrder } from "./utils/renderOrder";
import { fetchCardsWithFilter } from "./utils/fetchCardsWithFilter";
import { renderSearch } from "./utils/renderSearch";

const mainContainer = document.getElementById("cards-container");
const orderContainer = document.getElementById("order-container");
const buscar = document.getElementById("buscar-btn");
const busqueda = document.getElementById("buscar-input");
const reset = document.getElementById("reset-btn");
renderOrder(orderContainer);


renderDefaultCards(mainContainer);


mainContainer.addEventListener("click", async (e) => {
  if (e.target.textContent === "Añadir") {
    let data = await fetchCard(e.target.id);
    fetch(`${URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data, null, 2)
    }
    ).then(() => renderOrder(orderContainer));
  }
});
orderContainer.addEventListener("click", async (e) => {
  if (e.target.textContent === "Quitar") {
    let data = await fetchCard(e.target.id);
    fetch(`${URL}/order/${data.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    }
    ).then(() => renderOrder(orderContainer));
  }
});

buscar.addEventListener("click", () => {
  if (busqueda.value) {
    renderSearch(mainContainer, busqueda.value);
  } else renderDefaultCards(mainContainer);
});


reset.addEventListener("click", (e) => {
  e.preventDefault();
  renderDefaultCards(mainContainer);
});
document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    e.preventDefault();
    renderDefaultCards(mainContainer);
  }
});