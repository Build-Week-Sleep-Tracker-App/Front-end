import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import { logout, deleteSleepEntry } from '../../actions/actionCreators';
import { DELETE_SLEEP_ENTRY, LOGOUT } from '../../actions/actionTypes';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);
const store = mockStore();

describe('test action creators', () => {
  beforeEach(() => {
    store.clearActions();
  });

  test('should dispatch correct logout action', () => {
    const expectedActions = [
      {
        type: LOGOUT
      }
    ];

    store.dispatch(logout());
    expect(store.getActions()).toEqual(expectedActions);
    expect(store.getActions()).toMatchSnapshot();
  });

  test('should delete the correct sleep entry', () => {
    const expectedAction = [
      {
        type: DELETE_SLEEP_ENTRY,
        payload: 1
      }
    ];
    store.dispatch(deleteSleepEntry(1));
    expect(store.getActions()).toEqual(expectedAction);
  });
});
