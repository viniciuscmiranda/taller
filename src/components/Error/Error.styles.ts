import styled from 'styled-components';
import { Theme } from '../../styles/theme';

export const ErrorContainer = styled.div``;

export const ErrorMessage = styled.p`
  color: ${Theme.colors.error};
`;

export const RetryButton = styled.button`
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border: none;
  border-radius: 0.2rem;
  margin-top: 0.4rem;

  &:not(:disabled) {
    background-color: ${Theme.colors.primary};
    color: ${Theme.colors.textForeground};

    &:hover,
    &:focus {
      opacity: 0.85;
    }
  }
`;
