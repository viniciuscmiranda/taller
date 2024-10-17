import { useState } from 'react';
import { EmptyState } from '../../components/EmptyState';
import { Error } from '../../components/Error';
import { Loading } from '../../components/Loading';
import { TransactionCard } from '../../components/TransactionCard/TransactionCard';
import { useTransactions } from '../../hooks/api/useTransactions';
import { DateRangeFilter } from '../../components/DateRangeFilter';
import { DateRange } from '../../types/misc/DateRange';
import { CardsContainer, DashboardContainer } from './Dashboard.styles';

export function Dashboard() {
  const [dateFilter, setDateFilter] = useState<DateRange>();

  const {
    data: transactions,
    error,
    isLoading,
    fetch,
  } = useTransactions({ filters: { date: dateFilter } });

  function renderContent() {
    if (isLoading) return <Loading />;

    if (error) {
      return (
        <Error
          description="  An error happened while trying to load the transactions."
          onRetry={fetch}
        />
      );
    }

    if (!transactions.length)
      return <EmptyState description="No transactions were found." />;

    return (
      <CardsContainer>
        {transactions.map((transaction) => (
          <TransactionCard key={transaction.id} transaction={transaction} />
        ))}
      </CardsContainer>
    );
  }

  return (
    <>
      <DateRangeFilter onFilter={setDateFilter} />
      <DashboardContainer>{renderContent()}</DashboardContainer>
    </>
  );
}
