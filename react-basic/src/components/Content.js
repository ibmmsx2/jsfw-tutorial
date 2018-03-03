import React from 'react';
import PropTypes from 'prop-types';

class Content extends React.Component {
    render() {
        return (
            <div>
                <h2>{ this.props.title }</h2>
                <p>{ this.props.body }</p>
            </div>
        );
    }
}

// Type 검증(Validate). string type 이며 bodyd의 경우 필수
Content.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string.isRequired
};

export default Content;
