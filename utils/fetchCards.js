export const URL = "http://localhost:4002";
export async function fetchCards() {
  const response = await fetch(`${URL}/categories`)
  const data = await response.json();
  /*console.log(data);*/
  return data;
}