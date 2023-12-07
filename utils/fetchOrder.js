const URL = "http://localhost:4002";
export async function fetchOrder() {
  const response = await fetch(`${URL}/order`)
  const data = await response.json();
  /*console.log(data);*/
  return data;
}