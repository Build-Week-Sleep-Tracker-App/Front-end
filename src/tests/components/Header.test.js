import React from 'react';
import { shallow } from '../../enzyme';
import configureStore from 'redux-mock-store';
import Header from '../../components/Header';

const mockStore = configureStore();

const initialState = {
  login: {
    isLoggingIn: false,
    isLoggedIn: true,
    userId: null
  }
};

const store = mockStore(initialState);

describe('Header component', () => {
  test('should render Header correctly', () => {
    const wrapper = shallow(<Header store={store} />);
    console.log(wrapper.debug());
    expect(wrapper).toMatchSnapshot();
  });
});
