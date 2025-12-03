import { ProductResponse } from 'response/ProductResponse';
import { Assets, colors, ListRow } from 'tosslib';
import { formatCurrency } from 'utils/formatter';

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
          <ListRow
            key={product.id}
            contents={
              <ListRow.Texts
                type="3RowTypeA"
                top={product.name}
                topProps={{ fontSize: 16, fontWeight: 'bold', color: colors.grey900 }}
                middle={`연 이자율: ${product.annualRate}%`}
                middleProps={{ fontSize: 14, color: colors.blue600, fontWeight: 'medium' }}
                bottom={`${formatCurrency(product.minMonthlyAmount)}원 ~ ${formatCurrency(product.maxMonthlyAmount)}원 | ${product.availableTerms}개월`}
                bottomProps={{ fontSize: 13, color: colors.grey600 }}
              />
            }
            right={product === selectedProduct && <Assets.Icon name="icon-check-circle-green" />}
            onClick={() => setSelectedProduct(product)}
          />
        ))}
    </>
  );
}
