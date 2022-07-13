import { render } from '@testing-library/react';

import FeedUnit from './feed-unit';

describe('FeedUnit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeedUnit />);
    expect(baseElement).toBeTruthy();
  });
});
