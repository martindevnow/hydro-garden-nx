import styled from 'styled-components';
import { Header } from '@hydro-garden-monorepo/web/ui-shared';
import { utilsFormatters } from '@hydro-garden-monorepo/utils/formatters';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Header />
      <p>{utilsFormatters()}</p>
      <div>Hello 🙂</div>
    </StyledApp>
  );
}

export default App;
