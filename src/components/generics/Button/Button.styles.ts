import styled, { css } from 'styled-components';
import { Theme } from '@/styles/theme';
import { ButtonVariants } from './Button.variants';

export const ButtonElement = styled.button<{ $variant?: ButtonVariants }>`
  padding: 0 0.8rem;
  border: none;
  border-radius: 0.2rem;
  height: ${Theme.dimensions.inputHeight};

  &:disabled {
    cursor: not-allowed;
    background-color: ${Theme.colors.disabled};
  }

  &:not(:disabled) {
    cursor: pointer;
    color: ${Theme.colors.textForeground};

    &:hover,
    &:focus {
      opacity: 0.85;
    }

    ${({ $variant }) => {
      const variants: Record<ButtonVariants, ReturnType<typeof css>> = {
        'primary': css`
          background-color: ${Theme.colors.primary};
        `,
        'secondary': css`
          background-color: ${Theme.colors.secondary};
        `,
      };

      return variants[$variant || 'primary'];
    }}
  }
`;
