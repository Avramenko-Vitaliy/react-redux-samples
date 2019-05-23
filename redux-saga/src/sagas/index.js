import { fork, all, put, take, takeLatest, spawn, delay, race } from 'redux-saga/effects';

import { startAction, successAction } from '../actions/actionTypes';
import {
    FIRST_ACTION,
    SECOND_ACTION,
    THIRD_ACTION,
    ALL_ACTIONS,
    RESET_STATE,
    DETACHED_TASK,
    DELETE_BTN,
    CANCEL_DELETE_BTN,
} from '../actions';

function* watchActions() {
    yield all({
        firstAction: take(FIRST_ACTION),
        secondAction: take(SECOND_ACTION),
        thirdAction: take(THIRD_ACTION),
    });
    yield put({ type: ALL_ACTIONS });
}

function* watchReset() {
    yield takeLatest(RESET_STATE, watchActions);
}

function* detachedTask() {
    yield delay(4000);
    yield put({ type: successAction(DETACHED_TASK) });

}

function* watchDetachedTask() {
    yield takeLatest(DETACHED_TASK, function* () {
        yield spawn(detachedTask);
        yield delay(2000);
        yield put({ type: startAction(DETACHED_TASK) });
    });
}

function* startCancelDeleteBtn() {
    const { deleteBtn } = yield race({
        cancel: take(CANCEL_DELETE_BTN),
        deleteBtn: delay(3000),
    });
    if (deleteBtn) {
        yield put({ type: successAction(DELETE_BTN) });
    } else {
        yield put({ type: successAction(CANCEL_DELETE_BTN) });
    }
}

function* watchDeleteBtn() {
    yield takeLatest(DELETE_BTN, startCancelDeleteBtn);
}

export default function* root() {
    yield fork(watchActions);
    yield fork(watchDetachedTask);
    yield fork(watchReset);
    yield fork(watchDeleteBtn);
}
