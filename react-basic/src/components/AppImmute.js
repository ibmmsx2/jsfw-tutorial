import React, { Component } from 'react';
import UserList from './UserList';
import { Map, List } from 'immutable';

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
