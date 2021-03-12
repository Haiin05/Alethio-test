export const SIGN_UP_REQUEST = 'user/SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'user/SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'user/SIGN_UP_FAILURE';

export const signUpRequestAction = () => ({
  type: SIGN_UP_REQUEST,
});

export const signUpSuccessAction = (data) => ({
  type: SIGN_UP_SUCCESS,
  data: data,
});
export const signUpFailureAction = () => ({ type: SIGN_UP_FAILURE });

const initialState = {
  userToken: null,
  signUpLoading: false,
  signUpDone: false,
  signUpError: null,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpDone: false,
        signUpError: null,
        userToken: state.userToken,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: true,
        signUpError: null,
        userToken: action.data,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        signUpLoading: false,
        signUpDone: null,
        signUpError: true,
      };

    default:
      return state;
  }
}
