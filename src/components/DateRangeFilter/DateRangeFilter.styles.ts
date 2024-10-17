import styled from 'styled-components';
import { Theme } from '../../styles/theme';

export const DateRangeContainer = styled.div`
  padding: 0.8rem;
  display: flex;
  gap: 0.8rem;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  background-color: ${Theme.colors.backgroundSecondary};
  top: 0;
`;

export const InputLabel = styled.label`
  display: flex;
  gap: 0.4rem;
  align-items: center;
  position: relative;

  > span {
    position: absolute;
    font-size: 0.8rem;
    left: 0.8rem;
    top: 0;
    transform: translateY(-50%);
    background-color: white;
  }
`;

export const Input = styled.input`
  padding: 0.4rem 0.8rem;
  border-radius: 0.2rem;
  border: 1px solid gray;
`;

export const FilterButton = styled.button`
  padding: 0.4rem 0.8rem;
  cursor: pointer;
  border: none;
  border-radius: 0.2rem;

  &:not(:disabled) {
    background-color: ${Theme.colors.primary};
    color: ${Theme.colors.textForeground};

    &:hover,
    &:focus {
      opacity: 0.85;
    }
  }
`;
