import { render } from '@testing-library/react';

import HeartFilledIcon from './heart-filled-icon';

describe('HeartFilledIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeartFilledIcon />);
    expect(baseElement).toBeTruthy();
  });
});
