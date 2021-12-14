import styled from 'styled-components';

/* eslint-disable-next-line */
export interface WebFeatureDeviceDetailProps {}

const StyledWebFeatureDeviceDetail = styled.div`
  color: pink;
`;

export function WebFeatureDeviceDetail(props: WebFeatureDeviceDetailProps) {
  return (
    <StyledWebFeatureDeviceDetail>
      <h1>Welcome to WebFeatureDeviceDetail!</h1>
    </StyledWebFeatureDeviceDetail>
  );
}

export default WebFeatureDeviceDetail;
