import { render } from '@testing-library/react';

import Share from './share';

describe('Share', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Share />);
    expect(baseElement).toBeTruthy();
  });
});
