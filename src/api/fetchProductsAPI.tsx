import { ProductResponse } from 'response/ProductResponse';

export async function fetchProductsAPI(): Promise<ProductResponse[]> {
  const res = await fetch('http://localhost:5173/api/savings-products');
  return res.json();
}
