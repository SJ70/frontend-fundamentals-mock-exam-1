export default async function fetchProductsAPI() {
  const res = await fetch('http://localhost:5173/api/savings-products');
  return res.json();
}
