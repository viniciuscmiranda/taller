import { useState } from 'react';
import { DateRange } from '@/types/misc/DateRange';
import { DateRangeContainer } from './DateRangeFilter.styles';
import { Input } from '@/components/generics/Input';
import { Button } from '@/components/generics/Button';

export function DateRangeFilter({ onFilter }: DateRangeFilterProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <DateRangeContainer>
      <Input
        type="date"
        value={startDate}
        label="Start Date:"
        onChange={setStartDate}
      />
      <Input
        type="date"
        value={endDate}
        label="End Date:"
        onChange={setEndDate}
      />

      <Button
        disabled={!startDate || !endDate}
        onClick={() => onFilter({ startDate, endDate })}
      >
        Filter
      </Button>

      <Button
        variant="secondary"
        onClick={() => {
          setStartDate('');
          setEndDate('');
          onFilter({ startDate: '', endDate: '' });
        }}
      >
        Reset
      </Button>
    </DateRangeContainer>
  );
}

type DateRangeFilterProps = {
  onFilter: (range: DateRange) => void;
};
