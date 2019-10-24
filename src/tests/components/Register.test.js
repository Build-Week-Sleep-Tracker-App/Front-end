import React from 'react';
import { shallow } from '../../enzyme';

import Register from '../../components/Register';

const wrapper = shallow(<Register />);

describe('Test register component', () => {
  test('should render register component without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
