import {types} from '../actions/actionTypes'
import { takeLatest, select, call, put, all } from 'redux-saga/effects'
import { maxApi } from "../lib/config/maxApi"

export function* stopAllWatcher() {
    yield takeLatest(types.STOP_ALL, stopAllSaga);
}

export function* stopAllSaga(action) {

}