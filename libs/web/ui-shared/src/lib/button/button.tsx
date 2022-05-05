import styled from 'styled-components';

/* eslint-disable-next-line */
export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const StyledButton = styled.button`
  background-color: black;
  color: white;
`;

export function Button(props: ButtonProps) {
  return <StyledButton onClick={props.onClick}>{props.children}</StyledButton>;
}

export default Button;
