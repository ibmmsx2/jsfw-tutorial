import React from 'react';
import queryString from 'query-string';

const About = ({location, match}) => {
    // URL 쿼리를 만들 때 주의하실 점은, 받아오는 값들은 모두 문자열
    const query = queryString.parse(location.search);
    console.log(query);
    const detail = query.detail === 'true';

    return (
        <div>
            <h2>About {match.params.name}</h2>
            {detail && 'detail : blahblah'}
        </div>
    );
};

export default About;
