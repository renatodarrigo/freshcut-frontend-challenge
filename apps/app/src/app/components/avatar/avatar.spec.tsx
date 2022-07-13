import Avatar from './avatar';
import { render } from '@testing-library/react';

describe('Avatar', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Avatar />);
    expect(baseElement).toBeTruthy();
  });
});
