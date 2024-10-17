import { useState } from 'react';
import { EmptyState } from '@/components/generics/EmptyState';
import { ErrorMessage } from '@/components/generics/ErrorMessage';
import { Loading } from '@/components/generics/Loading';
import { TransactionCard } from '@/components/system/TransactionCard';
import { useTransactions } from '@/hooks/api/useTransactions';
import { DateRangeFilter } from '@/components/system/DateRangeFilter';
import { DateRange } from '@/types/misc/DateRange';
import {
  CardsContainer,
  DashboardContainer,
  HeaderContainer,
  PageControllersContainer,
  SummaryContainer,
} from './Dashboard.styles';
import { Formatters } from '@/utils/formatters';
import { GetTransactionsSortBy } from '@/types/api/GetTransactions';
import { Select } from '@/components/generics/Select';

export function Dashboard() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState(GetTransactionsSortBy.DATE);
  const [dateFilter, setDateFilter] = useState<DateRange>();

  const {
    data: transactions,
    lastPage,
    error,
    isLoading,
    fetch,
  } = useTransactions({
    sortBy,
    pagination: { page },
    filters: { date: dateFilter },
  });

  const totalAmount = transactions.reduce((acc, { amount }) => acc + amount, 0);

  const content = (() => {
    if (isLoading) return <Loading />;

    if (error) {
      return (
        <ErrorMessage
          description="An error happened while trying to load the transactions."
          onRetry={fetch}
        />
      );
    }

    if (!transactions.length) {
      return <EmptyState description="No transactions were found." />;
    }

    return (
      <>
        <SummaryContainer>
          Total: {Formatters.money(totalAmount)} ({transactions.length}{' '}
          transactions)
        </SummaryContainer>

        <CardsContainer>
          {transactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))}
        </CardsContainer>
      </>
    );
  })();

  return (
    <>
      <HeaderContainer>
        <DateRangeFilter onFilter={setDateFilter} />

        <PageControllersContainer>
          <Select
            label="Sort By:"
            value={sortBy}
            onChange={setSortBy}
            options={Object.values(GetTransactionsSortBy).map((sortBy) => ({
              value: sortBy,
            }))}
          />

          <Select
            label="Page:"
            value={String(page)}
            onChange={(value) => setPage(Number(value))}
            options={Array.from({ length: lastPage }, (_, index) => ({
              value: String(index + 1),
            }))}
          />
        </PageControllersContainer>
      </HeaderContainer>

      <DashboardContainer>{content}</DashboardContainer>
    </>
  );
}
