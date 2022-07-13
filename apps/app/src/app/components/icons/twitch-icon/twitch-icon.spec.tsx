import { render } from '@testing-library/react';

import TwitchIcon from './twitch-icon';

describe('TwitchIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TwitchIcon />);
    expect(baseElement).toBeTruthy();
  });
});
