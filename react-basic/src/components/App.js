// 파일 및 컴포넌트의 첫 문자를 대문자로 하는건 React의 naming convention
import React from 'react';
import Header from './Header';
import Content from './Content';
import RandomNumber from './RandomNumber';
import Contacts from './Contacts';

class App extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            value: Math.round(Math.random()*100)
        };

        this.updateValue = this.updateValue.bind(this);
    }

    updateValue(randomValue) {
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
            <div>
                /* props 는 컴포넌트에서 사용 할 데이터 중 변동되지 않는 데이터를 다룰 때 */
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
