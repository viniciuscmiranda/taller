import styled from 'styled-components';
import { Theme } from '../../styles/theme';

export const DashboardContainer = styled.main`
  padding: 0.8rem;
`;

export const CardsContainer = styled.section`
  background-color: ${Theme.colors.background};
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.8rem;
`;
