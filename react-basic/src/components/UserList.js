import React, { Component } from 'react';
import User from './User';

class UserList extends Component {
    constructor(props) {
        super(props);

        this.renderUsers = this.renderUsers.bind(this);
    }

    // 렌더링과 상관없는 input state 변경의 경우 DOM 업데이트 하지 않음
    shouldComponentUpdate(prevProps, prevState) {
        return prevProps.users !== this.props.users;
    }

    renderUsers() {
        const { users } = this.props;
        return users.map((user) => (
            <User key={user.get('id')} user={user}/>
        ))
    }

    render() {
        console.log('UserList가 렌더링 되고 있음');
        const { renderUsers } = this;
        return (
            <div>
                {renderUsers()}
            </div>
        );
    }
}

export default UserList;
