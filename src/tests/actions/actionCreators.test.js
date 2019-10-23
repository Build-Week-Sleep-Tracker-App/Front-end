import configureStore from 'redux-mock-store';

import { logout } from '../../actions/actionCreators';

const mockStore = configureStore();
const store = mockStore();

describe('test action creators', () => {
  beforeEach(() => {
    store.clearActions();
  });
  test('should dispatch correct logout action', () => {
    const expectedActions = [
      {
        type: 'LOGOUT'
      }
    ];

    store.dispatch(logout());
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });
});
