import styled from 'styled-components';
import { Header } from '@hydro-garden-monorepo/web/ui-shared';
import { utilsFormatters } from '@hydro-garden-monorepo/utils/formatters';

import { Route, Link } from 'react-router-dom';

import { WebFeatureDeviceDetail } from '@hydro-garden-monorepo/web/feature-device-detail';
import React from 'react';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  const [message, setMessage] = React.useState(null);
  React.useEffect(() => {
    // do nothing
    fetch('/api', {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }, []);
  return (
    <StyledApp>
      <Header title="Welcome" />
      <p>{utilsFormatters()}</p>
      <div>Hello 🙂</div>
    </StyledApp>
  );
}

export default App;
