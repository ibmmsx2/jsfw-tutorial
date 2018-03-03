// 파일 및 컴포넌트의 첫 문자를 대문자로 하는건 React의 naming convention
import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
import Contacts from './Contacts';


/* props vs. state
 *  - parent 컴포넌트에 의해 값이 변경 될 수 있는가?  props=YES, state=NO 
 *  - 컴포넌트 내부에서 변경 될 수 있는가? props=NO, state=YES
 */


class App extends React.Component {
    constructor(props) {
        super(props);
        
        // state 의 초기 값을 설정 할 때
        this.state = {
            value: Math.round(Math.random()*100)
        };

        // ES6 class에선 auto binding이 되지 않으므로, setState 메소드를 사용 하게 될 메소드를 bind 
        this.updateValue = this.updateValue.bind(this);
    }

    /* 리액트의 Immutability (불변성)
     * - 리액트 컴포넌트의 state 를 변경해야 할 땐, 무조건, setState 를 통해서 업데이트 해야 함
     * - 업데이트 하는 과정에서 기존의 객체의 값을 직접적으로 수정하면 안됨
     * - setState로 변경되면 연관된 parent-child의 render 함수가 재 실행
     *   > rendering에 상관없는 값 변경시 shouldComponentUpdate 를 활용할 필요 있음 (CPU 자원 덜 사용)
     * - Immutable.js 를 사용하면 쉽게 해결가능 
     */
    updateValue(randomValue) {
        // state 를 업데이트
        this.setState({
            value: randomValue
        });
    }

    render() {
        /* React JSX 문법
         * - 자바스크립트에서 html 태그를 반환하는데, 따옴표같은건 없다.
         * - React JSX 는 XML-like Syntax 를 native Javascript로 변환함 
         * - element들을 필수적으로 container element (ex. div) 안에 포함시켜줘야 함
         * - JavaScript 표현을 사용하는 방법은 { } 로 wrapping
         * - If-Else 문이 사용 불가. ternary ( condition ? true : false ) 표현을 사용
         * - Inline Style 에서는, string 형식이 사용되지 않고 key 가 camelCase 인 Object 가 사용
         */
        return (
            /* props 는 컴포넌트에서 사용 할 데이터 중 변동되지 않는 데이터를 다룰 때 */
            <div>
                <Header title={ this.props.headerTitle }/>
                <Content title={ this.props.contentTitle }
                          body={ this.props.contentBody } />
                <RandomNumber number={ this.state.value }
                            onUpdate={ this.updateValue }/>
                <Contacts/>
            </div>
        );
    }
}

App.defaultProps = {
    headerTitle: 'Default header',
    contentTitle: 'Default contentTitle',
    contentBody: 'Default contentBody'
};

export default App;
