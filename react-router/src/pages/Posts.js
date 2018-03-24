import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Post } from 'pages'; //코드스플리팅을 위하여 페이지를 불러오는 방식으로 통일

const Posts = ({match}) => {
    return (
        <div>
            <h2>Post List</h2>
            <ul>
                <li><Link to={`${match.url}/1`}>Post #1</Link></li>
                <li><Link to={`${match.url}/2`}>Post #2</Link></li>
                <li><Link to={`${match.url}/3`}>Post #3</Link></li>
                <li><Link to={`${match.url}/4`}>Post #4</Link></li>
            </ul>
            <Route exact path={match.url} render={()=>(<h3>Please select any post</h3>)}/>
            <Route path={`${match.url}/:id`} component={Post}/>
        </div>
    );
};

export default Posts;
