import React from 'react';
import { shallow } from '../../enzyme';
import configureStore from 'redux-mock-store';

import SleepEntryList from '../../components/SleepEntryList';

const mockStore = configureStore();
const initialState = {
  login: {
    isLoggingIn: false,
    isLoggedIn: true,
    userId: null
  }
};
const store = mockStore(initialState);
const wrapper = shallow(<SleepEntryList store={store} />);

describe('Sleep entry list component', () => {
  test('should render entry list correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
