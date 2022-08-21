import {render, screen} from '@testing-library/react';
import HomePage from '~/pages/index';

describe('Home', () => {
  it('renders something', () => {
    render(<HomePage />);
    const component = screen.getByRole('main');
    expect(component).toBeDefined();
  });
});
