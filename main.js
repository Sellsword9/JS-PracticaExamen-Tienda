import { renderDefaultCards } from "./utils/renderDefaultCards";
import { URL } from "./utils/fetchCards";

const mainContainer = document.getElementById("cards-container")
renderDefaultCards(mainContainer);
mainContainer.addEventListener("click", async (e) => {
  console.log("0");
  if (e.target.textContent === "Añadir") {
    fetch(`${URL}/order`, {
      method: "POST",
      headers: "Content-Type: application/json",
      body: `{
        "categories": [
          {
            "id": "1",
            "strCategory": "Beef",
            "strCategoryThumb": "https://www.themealdb.com/images/category/beef.png",
            "strCategoryDescription": "Beef is the culinary name for meat from cattle, particularly skeletal muscle. Humans have been eating beef since prehistoric times.[1] Beef is a source of high-quality protein and essential nutrients.[2]",
            "price": 20.33
          }]}`
    })
  }
})