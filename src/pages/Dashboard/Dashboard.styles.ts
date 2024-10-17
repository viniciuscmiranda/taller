import styled from 'styled-components';
import { Theme } from '../../styles/theme';

export const DashboardContainer = styled.main`
  padding: 0.8rem;
  background-color: ${Theme.colors.background};
`;

export const CardsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 0.8rem;
`;
