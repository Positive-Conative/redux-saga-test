import { delay, put, takeEvery, takeLatest } from 'redux-saga/effects';

// reducer 정의
export const setUserName = (userName: string): SataType => ({
    type: "SETUSERNAME" as const,
    userName
});

export const increaseAsync = (userName: string) => ({ type: 'SETUSERNAME_ASYNC', userName });

// set main reducer
type UserInfo = ReturnType<typeof setUserName>

const init = {
    userName: 'Conative'
};

type SataType = {
    type: string,
    userName: string
}

// Generator 제작 (Redux-Saga에서는, 이를 '사가'라고 칭한다.)
function* setUserNameSaga(action: SataType) {
    console.log("SAGA 실행!", action);
    yield delay(2000);
    yield put(setUserName(action.userName)); // put매서드는, 특정 액션을 dispatch 한다.
}

export function* userSaga() {
    yield takeEvery('SETUSERNAME_ASYNC', setUserNameSaga); // 모든 INCREASE_ASYNC 액션을 처리
    // yield takeLatest('SETUSERNAME_ASYNC', setUserNameSaga); // 가장 마지막으로 디스패치된 DECREASE_ASYNC 액션만을 처리
}

const userInfo = (state = init, action: UserInfo) => {
    switch (action.type) {
        case "SETUSERNAME":
            return {
                ...state,
                userName: action.userName
            };

        default:
            return state;
    }
};

export default userInfo;