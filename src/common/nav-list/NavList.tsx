import React, { ReactElement } from 'react';
import { List } from '../types/index';

interface NavListProps {
  menuitems: List[];
}

export const NavList = ({ menuitems }: NavListProps): ReactElement => {
  return (
    <>
      {menuitems.map(({ label, href }, index) => {
        return (
          <li key={index + label} data-testid="menu-item">
            <a data-testid="nav-link" href={href}>{label}</a>
          </li>
        );
      })}
    </>
  );
};
