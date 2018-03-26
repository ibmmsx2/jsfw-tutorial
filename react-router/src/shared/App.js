import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, Users } from 'pages';
//import { Home, About, Posts } from 'pages/index.async.js';
import Menu from 'components/Menu';

class App extends Component {
    state = {
        SplitMe: null
    }

    showSplitMe = () => {
        // 비동기적으로 코드를 불러옵니다. 함수의 결과는 Promise 를 반환합니다.
        // import() 는 모듈의 전체 네임스페이스를 불러오므로, default 를 직접 지정해주어야합니다.
        import('components/SplitMe').then(({default: Component}) => {
            this.setState({
                SplitMe: Component
            });
        });
    }

    render() {
        const { SplitMe } = this.state;
        return (
            <div>
                <Menu/>
                { SplitMe && <SplitMe/> }
                <button onClick={this.showSplitMe}>ClickMe</button>
                <Route exact path="/" component={Home}/>
                <Route path="/posts" component={Posts}/>
                <Switch>
                    <Route path="/about/:name" component={About}/>
                    <Route path="/about" component={About}/>
                </Switch>
                <Route path="/users" component={Users}/>
            </div>
        );
    }
}

export default App;
