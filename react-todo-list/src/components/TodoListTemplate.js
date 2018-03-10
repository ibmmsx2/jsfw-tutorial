import React from 'react';
import './TodoListTemplate.css';

// 함수형 컴포넌트 : 단순히 props 를 받아서 viewer 리턴시 사용
// JSX를 props 로 전달함
const TodoListTemplate = ({form, children}) => {
    return (
        <main className="todo-list-template">
            <div className="title">
                오늘 할일
            </div>
            <section className="form-wrapper">
                {form}
            </section>
            <section className="todos-wrapper">
                {children}
            </section>
        </main>
    );
};

export default TodoListTemplate;

