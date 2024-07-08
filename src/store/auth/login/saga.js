import { takeLatest, put } from 'redux-saga/effects';
import { SET_USER, CLEAR_USER } from './actionTypes';

// Worker function for setUser action
function* setUserSaga(action) {
  // Perform any side effects here, like API calls or data manipulation
  // For demonstration, we'll simply log the user data
  console.log('User data:', action.payload);

  // Dispatch any additional actions if needed
}

// Worker function for clearUser action
function* clearUserSaga() {
  // Perform any side effects here, like clearing user data from storage
  // For demonstration, we'll just log a message
  console.log('Clearing user data...');

  // Dispatch any additional actions if needed
}

// Watcher saga to watch for SET_USER and CLEAR_USER actions
function* userSaga() {
  yield takeLatest(SET_USER, setUserSaga);
  yield takeLatest(CLEAR_USER, clearUserSaga);
}

export default userSaga;
