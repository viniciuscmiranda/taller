import styled from 'styled-components';
import { Theme } from '@/styles/theme';
import { Card } from '@/components/generics/Card';

export const HeaderContainer = styled.header`
  padding: 0.8rem;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(0, 0, 0, 0.1);
  position: sticky;
  background-color: ${Theme.colors.backgroundSecondary};
  top: 0;
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

export const PageControllersContainer = styled.div`
  margin-left: auto;
  display: flex;
  gap: inherit;
`;

export const SummaryContainer = styled(Card)`
  color: ${Theme.colors.primary};
  font-weight: bold;
  margin-bottom: 0.8rem;
`;

export const DashboardContainer = styled.main`
  padding: 0.8rem;
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.8rem;
`;
