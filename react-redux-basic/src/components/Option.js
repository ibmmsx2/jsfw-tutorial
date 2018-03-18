import React from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions';

class Option extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            diff: '1'
        };

        this.onChangeDiff = this.onChangeDiff.bind(this);
    }

    render() {
        // 컴포넌트 내부의 input 값의 경우 자체 state 를 사용
        return (
            <div>
                <input type="text" value={ this.state.diff } onChange={this.onChangeDiff}></input>
            </div>
        );
    }

    // input 값이 수정될때마다 mapDispatchToProps 에서 매핑된 onUpdateDiff 를 통하여
    // 새로운 값을 dispatch
    onChangeDiff(e) {
        if (isNaN(e.target.value)) return;

        this.setState({ diff: e.target.value });

        if (e.target.value == '') {
            this.setState({ diff: 0 });
        }

        this.props.onUpdateDiff(parseInt(e.target.value));

    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onUpdateDiff: (value) => dispatch(setDiff(value))
    };
};

Option = connect(undefined, mapDispatchToProps)(Option);

export default Option;
