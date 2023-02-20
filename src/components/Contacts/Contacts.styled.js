import styled from '@emotion/styled';

export const ContactItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;

  border: ${p => p.theme.borders.normal};
  border-radius: ${p => p.theme.radii.normal};
  padding: ${p => p.theme.space[4]};

  :not(:last-child) {
    margin-bottom: ${p => p.theme.space[4]};
  }
`;
export const Btn = styled.button`
  margin-left: ${p => p.theme.space[4]};
  padding: ${p => p.theme.space[3]};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.normal};
  cursor: pointer;
  transition: background-color 200ms ease-in-out;

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const Text = styled.p``;
