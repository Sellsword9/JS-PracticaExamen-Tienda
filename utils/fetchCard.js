const URL = "http://localhost:4002/categories";
export async function fetchCard(id) {
  const response = await fetch(`${URL}/${id}`)
  const data = await response.json();
  /*console.log(data);*/
  return data;
}