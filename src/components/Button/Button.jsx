import styled from "@emotion/styled";

const StyledPrimaryButton = styled.button`
  background: ${(props) => props.theme.cores.primarias.b};
  color: ${(props) => props.theme.cores.secundarias.a};
  border-radius: ${(props) => props.theme.espacamentos.s};
  padding: ${(props) => props.theme.espacamentos.xs} ${(props) => props.theme.espacamentos.s};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  border: none;
  &:hover {
    background: ${(props) => props.theme.cores.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.cores.dark.d};
  }
`;
const  StyledSecondaryButton = styled.button`
  background: transparent;
  color: ${(props) => props.theme.cores.primarias.b};
  border: 2px solid ${(props) => props.theme.cores.primarias.b};
  border-radius: ${(props) => props.theme.espacamentos.s};
  padding: ${(props) => props.theme.espacamentos.xs} ${(props) => props.theme.espacamentos.s};
  box-sizing: border-box;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  cursor: pointer;
  &:hover {
    border-color: ${(props) => props.theme.cores.dark.b};
    color: ${(props) => props.theme.cores.dark.b};
  }
  &:focus {
    outline-color: ${(props) => props.theme.cores.focus};
  }
`;

export const Button = ({ children, variant = "primary" }) => {
  if (variant === "primary") {
    return <StyledPrimaryButton>{children}</StyledPrimaryButton>;
  }
  return <StyledSecondaryButton>{children}</StyledSecondaryButton>;
};
