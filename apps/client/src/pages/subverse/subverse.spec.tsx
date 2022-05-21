import { render } from '@testing-library/react';

import Subverse from './subverse';

describe('Subverse', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Subverse />);
    expect(baseElement).toBeTruthy();
  });
});
