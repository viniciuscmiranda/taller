import styled from 'styled-components';
import { Theme } from '../../styles/theme';

export const TransactionCardContainer = styled.div`
  background-color: ${Theme.colors.backgroundSecondary};
  padding: 0.8rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  box-shadow: 0.2rem 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1);
`;

export const TransactionHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TransactionAmount = styled.strong`
  color: ${Theme.colors.primary};
`;

export const TransactionDate = styled.time`
  color: ${Theme.colors.textSecondary};
  font-size: small;
`;

export const TransactionDescription = styled.p`
  padding-top: 0.4rem;
  border-top: 1px solid #ccc;
  margin: 0;
`;
