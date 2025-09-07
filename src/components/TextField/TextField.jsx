import styled from "@emotion/styled";

const StyledLabel = styled.label`
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  box-sizing: border-box;
  margin-top: ${(props) => props.theme.espacamentos.xs};
  margin-bottom: ${(props) => props.theme.espacamentos.s};
  background: ${(props) => props.theme.cores.secundarias.b};
  border: 1px solid;
  border-color: ${(props) => props.theme.cores.neutras.a};
  border-radius: ${(props) => props.theme.espacamentos.s};
  height: 40px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
`;

export const TextField = ({ title }) => {
  return (
    <StyledLabel>
      {title}
      <StyledInput />
    </StyledLabel>
  );
};
