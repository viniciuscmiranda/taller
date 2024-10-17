import { transactions } from '@/data/transactions';
import { Transaction } from '@/types/models/Transaction';
import {
  GetTransactionsParams,
  GetTransactionsSortBy,
} from '@/types/api/GetTransactions';

const DEFAULT_LIMIT = 30;

export const TransactionService = {
  getTransactions({
    filters,
    pagination,
    sortBy,
  }: GetTransactionsParams = {}): Promise<{
    transactions: Transaction[];
    lastPage: number;
  }> {
    const { page = 1, limit = DEFAULT_LIMIT } = pagination || {};
    const offset = (page - 1) * limit;

    // replace with a server API call
    const data = transactions
      .filter((transaction) => {
        const { date } = filters || {};

        if (date) {
          const transactionTime = new Date(transaction.date).getTime();
          const startTime = new Date(date.startDate).getTime();
          const endTime = new Date(date.endDate).getTime();

          if (transactionTime < startTime || transactionTime > endTime) {
            return false;
          }
        }

        // ...other filters

        return true;
      })
      .sort((a, b) => {
        switch (sortBy) {
          case GetTransactionsSortBy.AMOUNT:
            return a.amount - b.amount;
          default:
          case GetTransactionsSortBy.DATE:
            return new Date(b.date).getTime() - new Date(a.date).getTime();
        }
      });

    console.log('GET /api/transactions');
    return new Promise((resolve) => {
      setTimeout(
        () =>
          resolve({
            transactions: data.slice(offset, offset + limit),
            lastPage: Math.ceil(data.length / limit),
          }),
        100
      );
    });
  },
};
