import { Transaction } from '@/types/models/Transaction';
import { Formatters } from '@/utils/formatters';
import {
  TransactionAmount,
  TransactionCardContainer,
  TransactionDescription,
  TransactionDate,
  TransactionHeader,
} from './TransactionCard.styles';

export function TransactionCard({
  transaction: { amount, date, description },
}: TransactionCardProps) {
  return (
    <TransactionCardContainer>
      <TransactionHeader>
        <TransactionAmount>{Formatters.money(amount)}</TransactionAmount>
        <TransactionDate>{Formatters.date(date)}</TransactionDate>
      </TransactionHeader>
      <TransactionDescription>{description}</TransactionDescription>
    </TransactionCardContainer>
  );
}

type TransactionCardProps = {
  transaction: Transaction;
};
