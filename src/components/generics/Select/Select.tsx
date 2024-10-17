import { SelectContainer, SelectElement, SelectLabel } from './Select.styles';

export function Select<T extends string>({
  label,
  value,
  onChange,
  options,
}: SelectProps<T>) {
  return (
    <SelectContainer>
      {label && <SelectLabel>{label}</SelectLabel>}
      <SelectElement
        onChange={(e) => onChange?.(e.target.value as T)}
        value={value}
      >
        {options?.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label || option.value}
          </option>
        ))}
      </SelectElement>
    </SelectContainer>
  );
}

type SelectProps<T extends string> = {
  label?: string;
  value?: T;
  onChange?: (value: T) => void;
  options?: { value: T; label?: string }[];
};
