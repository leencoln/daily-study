
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { changeInput, createTodo, removeTodo, checkTodo } from './../store/modules/todo';

// components

import CreateForm from './../components/CreateForm';
import TodoList from './../components/TodoList';

class TodoContainer extends Component {

    changeInput = event => {
        const { changeInput } = this.props;
        const { value } = event.target;
        changeInput(value);
    }

    createTodo = event => {
        event.preventDefault();
        const { createTodo, input } = this.props;
        createTodo(input);
    }

    render() {

        const { changeInput, createTodo } = this;
        const { list, removeTodo, checkTodo } = this.props;

        return (
            <Fragment>
                <CreateForm
                    changeInput={changeInput}
                    createTodo={createTodo}
                    todoList={list}
                />
                <TodoList
                    todoList={list}
                    removeTodo={removeTodo}
                    checkTodo={checkTodo}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ todo }) => ({
    input: todo.get('input'),
    list: todo.get('list'),
})

const mapDispatchToProps = dispatch => bindActionCreators({ changeInput, createTodo, removeTodo, checkTodo }, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoContainer)