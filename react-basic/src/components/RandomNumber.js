import React from 'react';
import ReactDom from 'react-dom';

class RandomNumber extends React.Component {
    // function 형태의 prop 으로서, parent 컴포넌트에 정의된 메소드를 실행
    updateNumber() {
        let value = Math.round(Math.random()*100);
        this.props.onUpdate(value);
    }

    constructor(props) {
        super(props);
        this.updateNumber = this.updateNumber.bind(this);
    }

    render() {
        // 두개의 prop 사용
        return (
            <div>
                <h1>RANDOM NUMBER: { this.props.number }</h1>
                <button onClick={this.updateNumber}>Randomize</button>
            </div>
        )
    }
}

export default RandomNumber;
