import { combineReducers } from "redux";
import userInfo, { userSaga } from "./user-info";
import { all } from 'redux-saga/effects';   // [추가] Import

// 저장된 모든 Reducer들을 한곳으로 합쳐준다.
const rootReducer = combineReducers({
    userInfo
});

// [추가] all은, 배열안 모든 사가를 동시에 실행시켜준다.
export function* rootSaga() {
    yield all([userSaga()]);
}

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;