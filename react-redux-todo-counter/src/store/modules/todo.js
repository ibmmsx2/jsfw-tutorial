import { createAction, handleActions } from 'redux-actions';
import { Map, List } from 'immutable';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const INSERT = 'todo/INSERT';
const TOGGLE = 'todo/TOGGLE';
const REMOVE = 'todo/REMOVE';

export const changeInput = createAction(CHANGE_INPUT, value => value);
export const insert = createAction(INSERT, text => text);
export const toggle = createAction(TOGGLE, id => id);
export const remove = createAction(REMOVE, id => id);

let id = 0;

const initialState = Map({
    input: '',
    todos: List()
});

export default handleActions({
    // 한줄짜리 코드로 반환 할 수 있는 경우엔 다음과 같이 블록 { } 를 생략 할 수 있습니다.
    [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),

    // action 객체를 비구조화 할당하고, payload 값을 text 라고 부르겠다는 의미입니다.
    [INSERT]: (state, { payload: text }) => {
        const item = Map({ id: id++, checked: false, text });
        return state.update('todos', todos => todos.push(item));
    },

    // id 값을 가진 index 를 찾아서 checked 값을 반전시킵니다
    [TOGGLE]: (state, { payload: id }) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.updateIn(['todos', index, 'checked'], checked => !checked);
    },

    // id 값을 가진 index 를 찾아서 지웁니다.
    [REMOVE]: (state, { payload: id }) => {
        const index = state.get('todos').findIndex(item => item.get('id') === id);
        return state.deleteIn(['todos', index]);
    }
}, initialState);
