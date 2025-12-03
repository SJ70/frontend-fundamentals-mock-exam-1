import { colors, ListRow } from 'tosslib';
import { formatCurrency } from 'utils/formatter';

interface ResultValuesProps {
  targetAmount: number;
  monthlyPayment: number;
  savingTerm: number;
  annualRate: number;
}

export function ResultValues({ targetAmount, monthlyPayment, savingTerm, annualRate }: ResultValuesProps) {
  annualRate /= 100;

  const expectedReturnAmount = monthlyPayment * savingTerm * (1 + annualRate * 0.5);
  const differenceFromTargetAmount = expectedReturnAmount - targetAmount;
  const recommendedMonthlyPayment = targetAmount / (savingTerm * (1 + annualRate * 0.5));

  return (
    <>
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="예상 수익 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${formatCurrency(expectedReturnAmount)}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="목표 금액과의 차이"
            topProps={{ color: colors.grey600 }}
            bottom={`${formatCurrency(differenceFromTargetAmount)}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
      <ListRow
        contents={
          <ListRow.Texts
            type="2RowTypeA"
            top="추천 월 납입 금액"
            topProps={{ color: colors.grey600 }}
            bottom={`${formatCurrency(Math.round(recommendedMonthlyPayment / 1000) * 1000)}원`}
            bottomProps={{ fontWeight: 'bold', color: colors.blue600 }}
          />
        }
      />
    </>
  );
}
