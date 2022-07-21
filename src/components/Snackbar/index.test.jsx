import React from 'react';
import { render } from '@testing-library/react';

import SnackbarComponent from './index';

describe('SnackbarComponent', () => {
    test('renders SnackbarComponent component', () => {
        render(<SnackbarComponent />);
    });
});