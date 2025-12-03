import { ProductResponse } from 'response/ProductResponse';
import { ProductRow } from './ProductRow';

interface ProductsProps {
  products: ProductResponse[];
  selectedProduct: ProductResponse | null;
  setSelectedProduct: (id: ProductResponse) => void;
  selectedSavingTerm: number;
}

export function Products({ products, selectedProduct, setSelectedProduct, selectedSavingTerm }: ProductsProps) {
  return (
    <>
      {products
        .filter(product => product.availableTerms === selectedSavingTerm)
        .map(product => (
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
