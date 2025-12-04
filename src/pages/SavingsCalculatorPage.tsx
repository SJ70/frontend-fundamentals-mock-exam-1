import { Border, NavigationBar, SelectBottomSheet, Spacing, Tab, TextField } from 'tosslib';
import { useState } from 'react';
import { ProductResponse } from 'response/ProductResponse';
import { Products } from 'components/Products';
import { Results } from 'components/Results';
import { useProducts } from 'api/useProducts';

export function SavingsCalculatorPage() {
  const [targetAmount, setTargetAmount] = useState<string>('');
  const [monthlyPayment, setMonthlyPayment] = useState<string>('');
  const [savingTerm, setSavingTerm] = useState<number>(6);

  const [selectedProduct, setSelectedProduct] = useState<ProductResponse | null>(null);

  const [selectedMenu, setSelectedMenu] = useState<'products' | 'results'>('products');

  const { data: products, isLoading, isError } = useProducts();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error</div>;
  }
  if (!products) {
    return <div>null</div>;
  }

  return (
    <>
      <NavigationBar title="적금 계산기" />
      <Spacing size={16} />
      <TextField
        value={targetAmount}
        onChange={e => setTargetAmount(e.target.value)}
        label="목표 금액"
        placeholder="목표 금액을 입력하세요"
        suffix="원"
      />
      <Spacing size={16} />
      <TextField
        value={monthlyPayment}
        onChange={e => setMonthlyPayment(e.target.value)}
        label="월 납입액"
        placeholder="희망 월 납입액을 입력하세요"
        suffix="원"
      />
      <Spacing size={16} />
      <SelectBottomSheet
        label="저축 기간"
        title="저축 기간을 선택해주세요"
        value={savingTerm}
        onChange={e => setSavingTerm(e)}
      >
        <SelectBottomSheet.Option value={6}>6개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={12}>12개월</SelectBottomSheet.Option>
        <SelectBottomSheet.Option value={24}>24개월</SelectBottomSheet.Option>
      </SelectBottomSheet>

      <Spacing size={24} />
      <Border height={16} />
      <Spacing size={8} />

      <Tab onChange={() => {}}>
        <Tab.Item value="products" selected={selectedMenu === 'products'} onClick={() => setSelectedMenu('products')}>
          적금 상품
        </Tab.Item>
        <Tab.Item value="results" selected={selectedMenu === 'results'} onClick={() => setSelectedMenu('results')}>
          계산 결과
        </Tab.Item>
      </Tab>

      {selectedMenu === 'products' && (
        <Products
          products={products.filter(product => product.availableTerms === savingTerm)}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
      {selectedMenu === 'results' && (
        <Results
          targetAmount={Number(targetAmount)}
          monthlyPayment={Number(monthlyPayment)}
          savingTerm={savingTerm}
          annualRate={selectedProduct ? selectedProduct.annualRate : 0}
          products={products
            .filter(product => product.availableTerms === savingTerm)
            .sort((a, b) => b.annualRate - a.annualRate)}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </>
  );
}
