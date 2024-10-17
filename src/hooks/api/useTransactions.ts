import { useCallback, useEffect, useState } from 'react';
import { TransactionService } from '../../services/TransactionsService';
import { Transaction } from '../../types/models/Transaction';
import { GetTransactionsParams } from '../../types/api/GetTransactions';

export const useTransactions = ({ filters }: GetTransactionsParams = {}) => {
  // could be implemented with useReducer if it get's too complex
  // or using a lib like React Query
  const [data, setData] = useState<Transaction[]>([]);
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback(async () => {
    setIsLoading(true);

    try {
      const transactions = await TransactionService.getTransactions({
        filters: { date: filters?.date },
      });
      setData(transactions);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [filters?.date]);

  useEffect(() => {
    // if it was a real API request, it should return a cleanup function
    // with an AbortController to stop the request
    fetch();
  }, [fetch]);

  return {
    data,
    error,
    isLoading,
    fetch,
  };
};
