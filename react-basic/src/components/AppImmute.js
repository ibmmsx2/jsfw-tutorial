import React, { Component } from 'react';
import UserList from './UserList';
import { Map, List } from 'immutable';

/*
    LifeCycle API

    컴포넌트 생성 
        1. constructor : 기본 state 정함
        2. componentWillMount : 컴포넌트가 DOM 위에 만들어지기 전에 실행
        3. render : 렌더링
        4. componentDidMount : JavaScript 프레임워크를 연동하거나, setTimeout, setInterval 및 AJAX 처리 

    컴포넌트 제거
        1. componentWillUnmount

    컴포넌트 prop 변경
        1. componentWillReceiveProps : prop 에 따라 state 를 업데이트 해야 할 때 사용하면 유용
        2. shouldComponentUpdate : prop 혹은 state 가 변경 되었을 때, 리렌더링을 할지 말지 정하는 메소드
        3. componentWillUpdate
        4. render
        5. componentDidUpdate

        cf) 컴포넌트의 state가 변경시는 2번 부터 수행
*/

class AppImmute extends Component {
    constructor(props) {
        super(props);
        this.id = 3;

        this.state = {
            data: Map({
                input: '',
                users: List([
                    Map({
                        id: 1,
                        username: 'veloport'
                    }),
                    Map({
                        id: 2,
                        username: 'mjkim'
                    })
                ])
            })
        }

        this.onChange = this.onChange.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onChange(e) {
        const { value } = e.target;
        const { data } = this.state;
        this.setState({
            data: data.set('input', value)
            //input: value
        });
    }

    onButtonClick(e) {
        const { data } = this.state;
        
        /*
        this.setState(({ users, input }) => ({
            input: '',
            users: users.concat({
                id: this.id++,
                username: input
            })
        }))
        */

        // 복잡한 state 의 경우 구조 업데이트를 위해서 concat등을 활용한 자료구조 복사후 업데이트가 번거로움
        // 이경우 immutable 을 사용하여 get/set 및 update 를 활용하여 처리
        this.setState({
            data: data.set('input', '')
                .update('users', users => users.push(Map({
                    id: this.id++,
                    username: data.get('input')
                })))
        })
    }

    render() {
        const { onChange, onButtonClick } = this;
        const { data } = this.state;
        const input = data.get('input');
        const users = data.get('users');
        return (
            <div>
                <div>
                    <input onChange={onChange} value={input} />
                    <button onClick={onButtonClick}>추가</button>
                </div>
                <h1>사용자 목록</h1>
                <div>
                    <UserList users={users} />
                </div>
            </div>
        );
    }
}

export default AppImmute;
