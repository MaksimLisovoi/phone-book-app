import styled from '@emotion/styled';

export const ContactListItem = styled.li`
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

  &:disabled {
    background-color: ${p => p.theme.colors.lightgray};
  }

  &:hover {
    background-color: ${p => p.theme.colors.secondary};
  }
`;

export const BtnText = styled.p`
  margin-left: 5px;
`;

export const Text = styled.p``;
