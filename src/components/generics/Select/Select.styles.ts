import { Theme } from '@/styles/theme';
import styled from 'styled-components';

export const SelectContainer = styled.label`
  gap: 0.4rem;
  position: relative;
`;

export const SelectLabel = styled.span`
  position: absolute;
  font-size: 0.8rem;
  left: 0.8rem;
  top: 0;
  transform: translateY(-50%);
  background-color: ${Theme.colors.backgroundSecondary};
`;

export const SelectElement = styled.select`
  padding: 0 0.4rem;
  border-radius: 0.2rem;
  border: 1px solid gray;
  text-align: left;
  min-width: 8rem;
  background-color: ${Theme.colors.backgroundSecondary};
  height: ${Theme.dimensions.inputHeight};
`;
