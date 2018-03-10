import React from 'react';

/*
    - ref를 사용하기 전엔 언제나 이를 사용 하지 않고 해결 할 수 있는 방안이 있는지 고려할것
    - ref를 사용하기에 적절한 사례
        ex) 버튼을 누르면 input 을 초기화 하고 focus 를 해야 할 때
*/

class AppRef extends React.Component {
    handleClick() {
        this.input.value = "";
        this.input.focus();
    }

    render() {
        return (
            <div>
                <input ref={ref=> this.input = ref}/>
                <button onClick={this.handleClick.bind(this)}>Click Me</button>
            </div>
        );
    }
}

export default AppRef;
