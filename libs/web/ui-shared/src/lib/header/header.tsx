import styled from 'styled-components';

/* eslint-disable-next-line */
export interface HeaderProps {
  title: string;
}

const StyledHeader = styled.div`
  color: pink;
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <h1>{props.title}</h1>
    </StyledHeader>
  );
}

export default Header;
