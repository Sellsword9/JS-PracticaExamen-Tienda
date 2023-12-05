import { renderDefaultCards } from "./utils/renderDefaultCards";
import { URL } from "./utils/fetchCards";
import { fetchCard } from "./utils/fetchCard";

const mainContainer = document.getElementById("cards-container")
renderDefaultCards(mainContainer);
mainContainer.addEventListener("click", async (e) => {
  console.log("0");
  if (e.target.textContent === "Añadir") {
    let data = await fetchCard(e.target.id);
    console.log(data);
    fetch(`${URL}/order`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data, null, 2)
    }
    )
  }
})