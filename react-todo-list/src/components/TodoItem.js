import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {
    render() {
        const { text, checked, id, onToggle, onRemove } = this.props;

        //todo-text css 클래스를 동적으로 선택 : 템플릿 리터럴
        return (
            <div className="todo-item" onClick={() => onToggle(id)}>
                <div className="remove" onClick={(e) => {
                    e.stopPropagation(); // onToggle 이 실행되지 않도록 함
                    onRemove(id);
                    }
                }>&times;</div>
                <div className={`todo-text ${checked && 'checked'}`}>
                    <div>{text}</div>
                </div>
                {
                    checked && (<div className="check-mark">✓</div>)
                }
            </div>
        );
    }
}

export default TodoItem