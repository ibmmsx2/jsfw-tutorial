import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';
import { combineReducers } from 'redux';

const counterInitialState = {
    value: 0,
    diff: 1
}

const counter = (state = counterInitialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {
                value: state.value + state.diff
            });
            break;
        case DECREMENT:
            return Object.assign({}, state, {
                value: state.value - state.diff
            });
            break;
        case SET_DIFF:
            return Object.assign({}, state, {
                diff: action.diff
            });
            break;
        default:
            return state;
    }
};

const extra = (state = { value: 'this_is_extra_reducer' }, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// combineReducers  여러개의 reducer를 한개로 합칠 때 사용
// reducer를 여러개로 분리하여 작성 할 땐, 서로 직접적인 관계가 없어야 함
const counterApp = combineReducers({
    counter,
    extra
});

export default counterApp;
