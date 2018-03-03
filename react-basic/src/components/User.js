import React, { Component } from 'react';

class User extends Component {
    shouldComponentUpdate(prevProps, prevState) {
        return prevProps.user !== this.props.user;
    }

    render() {
        const { username } = this.props.user.toJS();
        console.log('%s가 렌더링 되고 있음', username);

        return (
            <div>
                {username}
            </div>
        );
    }
}

export default User;
