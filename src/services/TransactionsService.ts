import { transactions } from '../data/transactions';
import { Transaction } from '../types/models/Transaction';
import { GetTransactionsParams } from '../types/api/GetTransactions';

export const TransactionService = {
  getTransactions({ filters }: GetTransactionsParams = {}): Promise<
    Transaction[]
  > {
    // replace with a server API call
    const data = transactions.filter((transaction) => {
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
    });

    console.log('GET /api/transactions');
    return new Promise((resolve) => {
      setTimeout(() => resolve(data), 100);
    });
  },
};
