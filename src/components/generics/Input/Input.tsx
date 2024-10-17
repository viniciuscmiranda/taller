import React from 'react';
import { InputContainer, InputElement, InputLabel } from './Input.styles';

export function Input({ type, label, value, onChange }: InputProps) {
  return (
    <InputContainer>
      {label && <InputLabel>{label}</InputLabel>}
      <InputElement
        type={type}
        onChange={(e) => onChange?.(e.target.value)}
        value={value}
      />
    </InputContainer>
  );
}

type InputProps = {
  type?: React.HTMLProps<HTMLInputElement>['type'];
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
};
