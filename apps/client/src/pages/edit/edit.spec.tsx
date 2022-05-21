import { render } from '@testing-library/react';

import Edit from './edit';

describe('Edit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Edit />);
    expect(baseElement).toBeTruthy();
  });
});
