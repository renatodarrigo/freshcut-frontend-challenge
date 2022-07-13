import { render } from '@testing-library/react';

import VerifiedBadge from './verified-badge';

describe('VerifiedBadge', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<VerifiedBadge />);
    expect(baseElement).toBeTruthy();
  });
});
