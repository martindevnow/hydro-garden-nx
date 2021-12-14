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
  React.useEffect();
  return (
    <StyledApp>
      <Header />
      <p>{utilsFormatters()}</p>
      <div>Hello 🙂</div>

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/feature-device-detail">WebFeatureDeviceDetail</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        exact
        render={() => (
          <div>
            This is the generated root route.{' '}
            <Link to="/page-2">Click here for page 2.</Link>
          </div>
        )}
      />
      <Route path="/feature-device-detail" component={WebFeatureDeviceDetail} />
      <Route
        path="/page-2"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
    </StyledApp>
  );
}

export default App;
