import { render } from '@testing-library/react';

import WebFeatureDeviceDetail from './web-feature-device-detail';

describe('WebFeatureDeviceDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<WebFeatureDeviceDetail />);
    expect(baseElement).toBeTruthy();
  });
});
