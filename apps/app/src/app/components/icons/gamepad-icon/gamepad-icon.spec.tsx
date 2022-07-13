import { render } from '@testing-library/react';

import GamepadIcon from './gamepad-icon';

describe('GamepadIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<GamepadIcon />);
    expect(baseElement).toBeTruthy();
  });
});
