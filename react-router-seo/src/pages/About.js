import React from 'react';
import queryString from 'query-string';
import { Helmet } from 'react-helmet';

const About = ({location, match}) => {
    // URL 쿼리를 만들 때 주의하실 점은, 받아오는 값들은 모두 문자열
    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';
    const { name } = match.params;

    // Helmet 내용에 변수를 넣어야 할 때는 전체를 {} 로 감싸서 넣어주셔야합니다.
    return (
        <div>
            <Helmet>
                <title>{`About ${name ? name : ''}`}</title>
            </Helmet>
            <h2>About {name}</h2>
            {detail && 'detail : blahblah'}
        </div>
    );
};

export default About;
