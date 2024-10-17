import { useCallback, useEffect, useState } from 'react';
import { TransactionService } from '../../services/TransactionsService';
import { Transaction } from '../../types/models/Transaction';
import { GetTransactionsParams } from '../../types/api/GetTransactions';

export const useTransactions = ({
  pagination,
  filters,
  sortBy,
}: GetTransactionsParams = {}) => {
  // could be implemented with useReducer if it get's too complex
  // or using a lib like React Query
  const [data, setData] = useState<Transaction[]>([]);
  const [lastPage, setLastPage] = useState(1);
  const [error, setError] = useState<unknown>();
  const [isLoading, setIsLoading] = useState(false);

  const fetch = useCallback(async () => {
    setIsLoading(true);

    try {
      const { transactions, lastPage } =
        await TransactionService.getTransactions({
          sortBy,
          pagination: { page: pagination?.page },
          filters: { date: filters?.date },
        });

      setData(transactions);
      setLastPage(lastPage);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  }, [filters?.date, pagination?.page, sortBy]);

  useEffect(() => {
    // if it was a real API request, it should return a cleanup function
    // with an AbortController to stop the request
    fetch();
  }, [fetch]);

  return {
    data,
    error,
    isLoading,
    lastPage,
    fetch,
  };
};
