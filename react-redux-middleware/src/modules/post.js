import { handleActions } from 'redux-actions';

import axios from 'axios';

function getPostAPI(postId) {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
}

const GET_POST = 'GET_POST';
const GET_POST_PENDING = 'GET_POST_PENDING';
const GET_POST_SUCCESS = 'GET_POST_SUCCESS';
const GET_POST_FAILURE = 'GET_POST_FAILURE';

/* === store.js in case 3 === */
export const getPost = (postId) => ({
    type: GET_POST,
    payload: getPostAPI(postId)
})

/* === store.js in case 2 === */
/*
export const getPost = (postId) => dispatch => {
    // 먼저, 요청이 시작했다는것을 알립니다
    dispatch({type: GET_POST_PENDING});

    // 요청을 시작합니다
    // 여기서 만든 promise 를 return 해줘야, 나중에 컴포넌트에서 호출 할 때
    // getPost().then(...) 을 할 수 있습니다
    return getPostAPI(postId).then(
        (response) => {
            dispatch({
                type: GET_POST_SUCCESS,
                payload: response
            })
        }
    ).catch(error => {
        dispatch({
            type: GET_POST_FAILURE,
            payload: error
        });
    })
};
*/

const initialState = {
    pending: false,
    error: false,
    data: {
        title: '',
        body: ''
    }
};

export default handleActions({
    [GET_POST_PENDING]: (state, action) => {
        return {
            ...state,
            pending: true,
            error: false
        };
    },
    [GET_POST_SUCCESS]: (state, action) => {
        const { title, body } = action.payload.data;
        return {
            ...state,
            pending: false,
            data : {
                title, body
            }
        };
    },
    [GET_POST_FAILURE]: (state, action) => {
        return {
            ...state,
            pending: false,
            error: true
        }
    }
}, initialState);

