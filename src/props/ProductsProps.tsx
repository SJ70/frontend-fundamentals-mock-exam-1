import { ProductResponse } from 'response/ProductResponse';

export default interface ProductsProps {
  products: ProductResponse[];
  selectedProduct: ProductResponse | null;
  setSelectedProduct: (id: ProductResponse) => void;
}
