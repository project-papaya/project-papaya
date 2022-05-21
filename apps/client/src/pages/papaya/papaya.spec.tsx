import { render } from '@testing-library/react';

import Papaya from './papaya';

describe('Papaya', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Papaya />);
    expect(baseElement).toBeTruthy();
  });
});
