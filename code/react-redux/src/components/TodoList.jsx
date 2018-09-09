
import React, { Component, Fragment } from 'react';

class TodoItem extends Component {

    removeTodo = event => {
        event.preventDefault();
        const { id, removeTodo } = this.props;
        removeTodo(id);
    }

    checkTodo = event => {
        event.preventDefault();
        const { checkTodo, id } = this.props;
        checkTodo(id);
    }

    render() {

        const { removeTodo, checkTodo } = this;

        const { item, checked } = this.props;

        return (
            <Fragment>
                <div>{item}</div>
                <button onClick={removeTodo}>삭제</button>
                <button onClick={checkTodo}>체크</button>
                <div>{checked ? '했음' : '안했음'}</div>
            </Fragment>
        )
    }
}

class TodoList extends Component {
    render() {

        const { todoList, removeTodo, checkTodo } = this.props;

        const itemList = todoList.map(todo => (
            <TodoItem
                key={todo.get('id')}
                id={todo.get('id')}
                item={todo.get('item')}
                checked={todo.get('checked')}
                removeTodo={removeTodo}
                checkTodo={checkTodo}
            />
        ))

        return (
            <Fragment>
                {itemList}
            </Fragment>
        )
    }
}

export default TodoList;
