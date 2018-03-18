import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

/* Action : 어떤 변화가 일어나야 할 지 나타내는 객체 */
const INCREMENT = "INCREMENT";

function increase(diff) {
    return {
        type: INCREMENT,
        addBy: diff
    };
}

/* Reducer : action 객체를 받았을 때, 데이터를 어떻게 바꿀지 처리할지 정의하는 객체 */
const initialState = {
    value: 0
};

const counterReducer = (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            //  state를 복사 한후, 복사된 객체를 수정하여 반환
            return Object.assign({}, state, {
                value: state.value + action.addBy
            });
        default:
            return state;
    }
}

/* Store : 프로젝트에서 사용하는 모든 동적 데이터들을 담아두는 곳 */
const store = createStore(counterReducer);

/* App Component */
class App extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick() {
        this.props.store.dispatch(increase(1));
    }

    render(){
        let centerStyle = {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect:'none',
            userSelect: 'none',
            cursor: 'pointer'
        }

        return (
            <div
                onClick = { this.onClick }
                style = { centerStyle }>
                <h1> { this.props.store.getState().value } </h1>
            </div>
        );
    }
}

/* Rendering */
const render = () => {
    const rootElement = document.getElementById('root');    
    ReactDOM.render(
        <App store={store}/>,
        rootElement
    );
};

// dispatch 메소드가 실행되면 리스너 함수가 실행. 데이터에 변동이 있을때마다 리렌더링
store.subscribe(render);
render();
