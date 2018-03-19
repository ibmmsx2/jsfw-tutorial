/*
리덕스 매뉴얼에선 액션과 리듀서를 각각 다른 파일에 작성하여 관리하는 것을 알려주는데요,
그렇게 사용 했을때는, 새 액션을 추가 할 때마다 두개의 파일을 건들여야 한다는점이 불편합니다.
이렇게 하나의 파일에 모두 작성하는 것은 Ducks 구조라고 부릅니다.
*/

// 액션 타입을 정의
const INCREMENT = "counter/INCREMENT";
const DECREMENT = "counter/DECREMENT";

// 액션 함수 생성
// 이 함수들은 나중에 다른 파일에서 불러와야 하므로 내보내줍니다.
export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });

// 모듈의 초기 상태를 정의합니다.
const initialState = {
    number: 0
};

// 리듀서를 만들어서 내보내줍니다.
export default function reducer(state = initialState, action) {
    // 리듀서 함수에서는 액션의 타입에 따라 변화된 상태를 정의하여 반환합니다.
    // state = initialState 이렇게 하면 initialState 가 기본 값으로 사용됩니다.
    switch(action.type) {
        case INCREMENT:
            return { number: state.number + 1 };
        case DECREMENT:
            return { number: state.number - 1 };
        default:
            return state;
    }
}
