import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
} from '../modules/user';
import { API } from '../../config';

const signUpAPI = async (data) => {
  let response = await axios.post(`${API}/sign-up`, {
    email: data.email,
    password: data.pw,
    mobile: data.mobile,
  });
  let token = response.data.token;
  return token;
};

function* signUpSaga(action) {
  try {
    const result = yield call(signUpAPI, action);
    yield put({
      type: SIGN_UP_SUCCESS,
      data: result,
    });
  } catch (err) {
    console.error(err);
    yield put({
      type: SIGN_UP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchSignUp() {
  yield takeLatest(SIGN_UP_REQUEST, signUpSaga);
}

export default function* userSaga() {
  yield all([fork(watchSignUp)]);
}
