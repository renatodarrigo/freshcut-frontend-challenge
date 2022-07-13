import { render } from '@testing-library/react';

import HeartIcon from './heart-icon';

describe('HeartIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<HeartIcon />);
    expect(baseElement).toBeTruthy();
  });
});
