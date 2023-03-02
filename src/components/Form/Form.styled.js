import styled from 'styled-components';

export const FormBox = styled.form`
  margin-bottom: ${p => p.theme.space[4]};

  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;

export const Input = styled.input`
  padding: 6px;
  margin-top: 10px;
  border-radius: ${p => p.theme.radii.normal};
`;

export const Btn = styled.button`
  width: 160px;
  margin-top: ${p => p.theme.space[5]};
  padding: ${p => p.theme.space[3]};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 200ms ease-in-out;

  cursor: pointer;

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;
