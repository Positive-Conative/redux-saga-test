import React from "react";
import { useSelector } from "react-redux";
import { RootState } from '../reducers';

// 결과값 보기
const GetResult = () => {
    // Store에 저장된 Username 갖고오기
    const { userName } = useSelector((state: RootState) => state.userInfo);

    return (
        <div>
            Store에 저장된 값 : {userName}
        </div>
    )
}

export default GetResult;
// export default React.memo(GetResult);