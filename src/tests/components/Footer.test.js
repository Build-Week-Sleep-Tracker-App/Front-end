import React from 'react';
import { shallow } from '../../enzyme';
import configureStore from 'redux-mock-store';

import Footer from '../../components/Footer';

const mockStore = configureStore();
const initialState = {
  login: {
    isLoggingIn: false,
    isLoggedIn: true,
    userId: null
  }
};
const store = mockStore(initialState);

const wrapper = shallow(<Footer store={store} />);

describe('Footer component tests', () => {
  test('should render footer component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
