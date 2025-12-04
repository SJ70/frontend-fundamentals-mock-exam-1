import { ProductResponse } from 'response/ProductResponse';
import { Border, ListHeader, ListRow, Spacing } from 'tosslib';
import { Products } from './Products';
import { ResultValues } from './ResultValues';

interface ResultsProps {
  targetAmount: number;
  monthlyPayment: number;
  savingTerm: number;
  annualRate: number;
  products: ProductResponse[];
  selectedProduct: ProductResponse | null;
  setSelectedProduct: (id: ProductResponse) => void;
}

export function Results({
  targetAmount,
  monthlyPayment,
  savingTerm,
  annualRate,
  products,
  selectedProduct,
  setSelectedProduct,
}: ResultsProps) {
  return (
    <>
      <Spacing size={8} />

      {selectedProduct !== null && (
        <ResultValues
          targetAmount={targetAmount}
          monthlyPayment={monthlyPayment}
          savingTerm={savingTerm}
          annualRate={annualRate}
        />
      )}
      {selectedProduct === null && <ListRow contents={<ListRow.Texts type="1RowTypeA" top="상품을 선택해주세요." />} />}

      <Spacing size={8} />
      <Border height={16} />
      <Spacing size={8} />

      <ListHeader title={<ListHeader.TitleParagraph fontWeight="bold">추천 상품 목록</ListHeader.TitleParagraph>} />
      <Spacing size={12} />

      <Products products={products} selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} />

      <Spacing size={40} />
    </>
  );
}
