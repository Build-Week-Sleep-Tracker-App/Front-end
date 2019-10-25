import React from 'react';
import { shallow } from '../../enzyme';
import Login from '../../components/Login';
import { exportAllDeclaration } from '@babel/types';

const mockOnSubmit = jest.fn();
const wrapper = shallow(<Login onSubmit={mockOnSubmit} />);

describe('Login component', () => {
  test('should render login page correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
