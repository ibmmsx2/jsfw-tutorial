import React from 'react';
import './Form.css';

// 함수형 컴포넌트 : 단순히 props 를 받아서 viewer 리턴시 사용
// 총 4개의 props를 받아옴
const Form = ({value, onChange, onCreate, onKeyPress}) => {
    return (
        <div className="form">
            <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
            <div className="create-button" onClick={onCreate}>
                추가
            </div>
        </div>
    );
};

export default Form;
