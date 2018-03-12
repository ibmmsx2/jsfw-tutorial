import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
    id = 3;

    state = {
        input: '',
        todos: [
            { id: 0, text: ' 리엑트 소개', checked: false },
            { id: 1, text: ' JSX 사용해보기', checked: true },
            { id: 2, text: ' 라이프 사이클 이해하기', checked: false },
        ]
    }

    /* 컴포넌트들은 부모를 통하여 대화(state, props 전달)를 하는 것이 일반적인 패턴
       App 이 Form 과 TodoItemList 의 부모 컴포넌트이니, 해당 컴포넌트에 input, todos 상태를
       넣어주고 해당 값들과 값들을 업데이트 하는 함수들을 각각 컴포넌트에 props 로 전달해주어서
       기능을 구현
    */

    handleChange = (e) => {
        this.setState({
            input: e.target.value // input 의 다음 바뀔 값
        });
    }

    handleCreate = () => {
        const { input, todos } = this.state;
        this.setState({
            input: '', // 인풋을 비우고
            // concat을 사용하여 배열에 추가
            todos: todos.concat({
               id: this.id++,
               text: input,
               checked: false
            })
        });
    }

    handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const { todos } = this.state;

        // 파라미터로 받은 id 를 가지고 몇번째 아이템인지 찾습니다.
        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];

        const nextTodos = [...todos]; // 배열을 복사

        // 기존의 값들을 복사하고, checked 값을 덮어쓰기
        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    }

    handleRemove = (id) => {
        const { todos } = this.state;
        // 파라미터로 받아온 id 를 갖고있지 않는 배열을 새로 생성
        this.setState({
            todos: todos.filter(todo => todo.id !== id)
        });
    }

    render() {
        const { input, todos } = this.state;
        const { 
            handleCreate,
            handleChange,
            handleKeyPress,
            handleToggle,
            handleRemove
        } = this;

        return (
            <TodoListTemplate form={(
                <Form
                    value={input}
                    onKeyPress={handleKeyPress}
                    onChange={handleChange}
                    onCreate={handleCreate}
                />
            )}>
                <TodoItemList
                    todos={todos}
                    onToggle={handleToggle}
                    onRemove={handleRemove}
                />
            </TodoListTemplate>
        );
    }
}

export default App;
