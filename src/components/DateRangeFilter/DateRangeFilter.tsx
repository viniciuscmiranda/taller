import { useState } from 'react';
import { DateRange } from '../../types/misc/DateRange';
import {
  DateRangeContainer,
  FilterButton,
  Input,
  InputLabel,
} from './DateRangeFilter.styles';

export function DateRangeFilter({ onFilter }: DateRangeFilterProps) {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  return (
    <DateRangeContainer>
      <InputLabel>
        <span>Start Date:</span>
        <Input type="date" onChange={(e) => setStartDate(e.target.value)} />
      </InputLabel>

      <InputLabel>
        <span>End Date:</span>
        <Input
          min={startDate}
          type="date"
          onChange={(e) => setEndDate(e.target.value)}
        />
      </InputLabel>

      <FilterButton
        disabled={!startDate || !endDate}
        onClick={() => onFilter({ startDate, endDate })}
      >
        Filter
      </FilterButton>
    </DateRangeContainer>
  );
}

type DateRangeFilterProps = {
  onFilter: (range: DateRange) => void;
};
