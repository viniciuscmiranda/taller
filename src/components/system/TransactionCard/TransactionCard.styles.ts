import styled from 'styled-components';
import { Theme } from '@/styles/theme';
import { Card } from '@/components/generics/Card';

export const TransactionCardContainer = styled(Card)`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
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
