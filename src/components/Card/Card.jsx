import styled from "@emotion/styled";

const StyledDiv = styled.div`
  padding: ${(props) => props.theme.espacamentos.l};
  background: ${(props) => props.theme.cores.secundarias.a};
  border: 1px solid;
  border-color: ${(props) => props.theme.cores.secundarias.a};
  border-radius: ${(props) => props.theme.espacamentos.s};
`;

export const Card = ({ children }) => {
  return <StyledDiv>{children}</StyledDiv>;
};
