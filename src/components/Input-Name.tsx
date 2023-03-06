import { ChangeEvent } from 'react';
import { useDispatch } from "react-redux";
import { increaseAsync } from '../reducers/user-info';

// 이름을 입력받는 컴포넌트
const InputName = () => {
    // dispatch 정의
    const dispatch = useDispatch();

    const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(increaseAsync(e.target.value));  // 적용!
    }

    return (
        <div>
            <input type="text" onChange={handleInputName} />
        </div>
    )
}

export default InputName;