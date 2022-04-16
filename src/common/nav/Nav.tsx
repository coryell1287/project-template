import React, { ReactElement } from 'react';
import { NavList } from '../nav-list';
import { List } from '../types';
import './nav.css';

const list: List[] = [
  { label: 'About', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Our team', href: '/team' },
  { label: 'Contact', href: '/contact' },
];

export const Nav = (): ReactElement => {
  return (
    <nav data-testid="main-nav">
      <ul className="main-nav">
        <NavList menuitems={list} />
      </ul>
    </nav>
  );
};
