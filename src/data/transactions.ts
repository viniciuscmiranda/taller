import { Transaction } from '@/types/models/Transaction';

export const transactions = generateTransactions();

function generateTransactions(length = 200): Transaction[] {
  const MAX_AMOUNT = 500;

  return Array.from({ length }, (_, index) => ({
    id: index + 1,
    date: new Date(
      new Date().getTime() + Math.random() * 10000000000
    ).toISOString(),
    amount: Number((Math.random() * MAX_AMOUNT).toFixed(2)),
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  }));
}
