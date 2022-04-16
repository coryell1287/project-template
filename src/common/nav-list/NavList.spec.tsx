import { render, screen } from '@testing-library/react';
import React from 'react';
import type { List } from '../types/index';
import { NavList } from './NavList';

describe('<NavList/>', () => {
  it('should render list items inside of the NavList', () => {
    const list: List[] = [
      { label: 'About', href: '/about' },
      { label: 'Products', href: '/products' },
      { label: 'Our team', href: '/team' },
      { label: 'Contact', href: '/contact' },
    ];

    render(<NavList menuitems={list} />);
    const menuitems = screen.getAllByTestId('menu-item').map(item => item.textContent);
    const labels = list.map(a => a.label);

    expect(menuitems).toEqual(labels);
  });

  it('should render nav links inside of the NavList', () => {
    const list: List[] = [
      { label: 'About', href: '/about' },
      { label: 'Products', href: '/products' },
      { label: 'Our team', href: '/team' },
      { label: 'Contact', href: '/contact' },
    ];

    render(<NavList menuitems={list} />);
    const navLinks = Array.from(screen.getAllByTestId('nav-link')).map(item => item.getAttribute('href'));
    const href = list.map(item => item.href);
    expect(navLinks).toEqual(href);
  });
});
