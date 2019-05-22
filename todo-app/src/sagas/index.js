// import { fork, select, takeLatest, put, call } from 'redux-saga/effects';
//
// import { successAction } from 'actions/actionTypes';
// import { LOGIN, LOGOUT, UNAUTHORIZED, login } from 'actions/session';
// import { SIGN_UP, ACTIVATE_USER, UPDATE_USER } from 'actions/users';
//
// import { watchChangeStock, watchRestoreStock } from 'sagas/queueStock';
// import { watchErrors, watchSuccess, watchReceiveMessage, watchMarkMessagesAsRead } from 'sagas/messages';
// import { watchComponentCreation } from 'sagas/components';
//
// import { getAppToken, getUserId } from 'selectors/session';
//
// import { clearSession, saveSession } from 'utils/session';
//
// function* saveSessionToken() {
//     const token = yield select(getAppToken);
//     saveSession(token);
// }
//
// function* updateLocalStorage(action) {
//     const userId = yield select(getUserId);
//     if (userId === action.profile.get('id')) {
//         yield call(saveSessionToken);
//     }
// }
//
// function removeSessionToken() {
//     clearSession();
// }
//
// function* loginUser(action) {
//     const credentials = { email: action.profile.get('email'), password: action.profile.get('password') };
//     yield put(login(credentials));
// }
//
// function* watchSuccessRegistration() {
//     yield takeLatest([successAction(SIGN_UP), successAction(ACTIVATE_USER)], loginUser);
// }
// function* watchLogin() {
//     yield takeLatest(successAction(LOGIN), saveSessionToken);
// }
//
// function* watchUnauthorized() {
//     yield takeLatest([UNAUTHORIZED, successAction(LOGOUT)], removeSessionToken);
// }
//
// function* watchUpdateProfile() {
//     yield takeLatest(successAction(UPDATE_USER), updateLocalStorage);
// }
//
// export default function* root() {
//     yield fork(watchLogin);
//     yield fork(watchUnauthorized);
//     yield fork(watchChangeStock);
//     yield fork(watchRestoreStock);
//     yield fork(watchErrors);
//     yield fork(watchSuccess);
//     yield fork(watchReceiveMessage);
//     yield fork(watchSuccessRegistration);
//     yield fork(watchComponentCreation);
//     yield fork(watchMarkMessagesAsRead);
//     yield fork(watchUpdateProfile);
// }
