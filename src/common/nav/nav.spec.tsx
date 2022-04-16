import React from 'react';
import { render, screen } from '@testing-library/react';
import { Nav } from './Nav';

describe('<Nav/>', () => {
  it('should load the <Nav/> component', () => {
    render(<Nav />);
    expect(screen.getByTestId('main-nav')).toBeInTheDocument();
  });
});

