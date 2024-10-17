import { DateRange } from '../misc/DateRange';

export type GetTransactionsParams = {
  filters?: {
    date?: DateRange;
  };
};
