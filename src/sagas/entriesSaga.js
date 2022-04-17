import { take, call, put } from "redux-saga/effects";
import entriesTypes from "../actions/entries.action";
import axios from "axios";

export function* getAllEntries() {
  yield take(entriesTypes.GET_ENTRIES);
  const result = yield call(axios, "http://localhost:3001/entries");

  yield put({
    type: entriesTypes.POPULATE_ENTRIES,
    payload: result.data,
  });
}
