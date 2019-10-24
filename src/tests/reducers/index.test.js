import reducers, { signUpReducer } from '../../reducers/index';
import { SIGNUP, LOGOUT } from '../../actions/actionTypes';

describe('Sign up reducer', () => {
  test('reducer initial state', () => {
    const action = { type: 'DUMMY_ACTION' };
    const initialState = { isSignedUp: false };
    expect(signUpReducer(undefined, action)).toEqual(initialState);
  });

  test('should return correct state', () => {
    const action = { type: SIGNUP };
    const expectedState = { isSignedUp: true };
    expect(signUpReducer(undefined, action)).toEqual(expectedState);
  });
});

describe('User reducer', () => {
  const initialState = {
    id: 0,
    username: '',
    role: '',
    birthdate: '',
    sleepData: []
  };
  test('returns the correct initial state', () => {
    const action = { type: 'DUMMY_ACTION' };

    expect(reducers.userReducer(undefined, action)).toEqual(initialState);
  });

  test('return correct state on user logout', () => {
    const action = { type: LOGOUT };
    expect(reducers.userReducer(undefined, action)).toEqual(initialState);
  });
});
