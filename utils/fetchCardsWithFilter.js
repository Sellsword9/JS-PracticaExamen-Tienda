export const URL = "http://localhost:4002";
export async function fetchCardsWithFilter(filter) {
  let f = filter.toLowerCase();
  console.log(f);
  const response = await fetch(`${URL}/categories`)
  const data = await response.json();
  let filteredData = data.filter((e) => e.strCategory.toLowerCase().includes(f));
  console.log(filteredData);
  return filteredData;
}