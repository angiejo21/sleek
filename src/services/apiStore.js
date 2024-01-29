export async function fetchProducts() {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = res.json();
  console.log(data);
  return data;
}
export async function fetchCategoryImage() {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await res.json();
  const apparel = data.find((item) => item.name === "Clothes");
  const shoes = data.find((item) => item.name === "Shoes");
  return [apparel, shoes];
}
