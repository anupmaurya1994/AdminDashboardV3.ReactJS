import {
  SET_USER,
  // LOGIN_SUCCESS,
  CLEAR_USER,
  // LOGOUT_USER_SUCCESS,
  // API_ERROR,
  // SOCIAL_LOGIN,
} from "./actionTypes"

export const setUser = (userData) => {
  return {
    type: SET_USER,
    payload: userData,
  };
};

export const clearUser = () => {
  return {
    type: CLEAR_USER,
  };
};

// export const loginSuccess = user => {
//   return {
//     type: LOGIN_SUCCESS,
//     payload: user,
//   }
// }



// export const logoutUserSuccess = () => {
//   return {
//     type: LOGOUT_USER_SUCCESS,
//     payload: {},
//   }
// }

// export const apiError = error => {
//   return {
//     type: API_ERROR,
//     payload: error,
//   }
// }

// export const socialLogin = (data, history, type) => {
//   return {
//     type: SOCIAL_LOGIN,
//     payload: { data, history, type },
//   }
// }
