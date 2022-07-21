import React from 'react';
import {render} from '@testing-library/react';

import SearchBarComponent from './index';

describe('SearchBarComponent', () => {
    test('renders SearchBarComponent component', () => {
        render(<SearchBarComponent />);
    });
});