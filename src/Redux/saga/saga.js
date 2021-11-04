import { takeEvery, put, take, call } from "redux-saga/effects";
import { GET_DATA, GET_SUCCESS } from "../Data/dataTypes";
import { Load_Data } from "../../API/Api";
import { getfail, getsuccess } from "../Data/dataActions";

function* GetData(action) {
  try {
    const data = yield call(Load_Data);

    if (data != undefined) yield put(getsuccess(data));
  } catch (err) {
    yield put(getfail(err.toString()));
  }
}

function* rootSaga() {
  yield takeEvery("GET_DATA", GetData);
}
export default rootSaga;
