import { Dashboard } from './pages/Dashboard';
import { StyleReset } from './styles/StyleReset';

export function App() {
  // for handling multiple pages we could return a router here instead
  return (
    <>
      <Dashboard />
      <StyleReset />
    </>
  );
}
