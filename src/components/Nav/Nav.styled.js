import { Button } from '@mui/material';
import styled from 'styled-components';

// export const NavItem = styled(NavLink)`
//   /* min-height: 42px;
//   min-width: 80px; */
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   gap: ${p => p.theme.space[3]};
//   padding: ${p => p.theme.space[3]};
//   border: 1px solid transparent;
//   border-radius: 4px;
//   text-decoration: none;
//   color: ${p => p.theme.colors.text};
//   background-color: gray;
//   &.active {
//     background-color: ${p => p.theme.colors.primary};
//     color: ${p => p.theme.colors.white};
//   }
//   :hover:not(.active),
//   :focus-visible:not(.active) {
//     color: ${p => p.theme.colors.primary};
//   }
// `;

export const NavItem = styled(Button)`
  &.active {
    background-color: #07c;
    color: white;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    color: black;
  }
`;
