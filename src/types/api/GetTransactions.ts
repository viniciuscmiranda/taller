import { DateRange } from '@/misc/DateRange';

export enum GetTransactionsSortBy {
  AMOUNT = 'AMOUNT',
  DATE = 'DATE',
}

export type GetTransactionsParams = {
  sortBy?: GetTransactionsSortBy;
  pagination?: {
    page?: number;
    limit?: number;
  };
  filters?: {
    date?: DateRange;
  };
};
