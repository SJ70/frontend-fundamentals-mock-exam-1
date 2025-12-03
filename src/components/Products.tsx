import { ProductResponse } from 'response/ProductResponse';
import { ProductRow } from './ProductRow';

interface ProductsProps {
  products: ProductResponse[];
  selectedProduct: ProductResponse | null;
  setSelectedProduct: (id: ProductResponse) => void;
}

export function Products({ products, selectedProduct, setSelectedProduct }: ProductsProps) {
  return (
    <>
      {products.map(product => (
        <ProductRow
          key={product.id}
          product={product}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      ))}
    </>
  );
}
