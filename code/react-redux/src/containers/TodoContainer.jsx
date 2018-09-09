
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { changeInput, createTodo } from './../store/modules/todo';

// components

import CreateForm from './../components/CreateForm';

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
        const { list } = this.props;

        return (
            <Fragment>
                <CreateForm
                    changeInput={changeInput}
                    createTodo={createTodo}
                    todoList={list}
                />
            </Fragment>
        )
    }
}

const mapStateToProps = ({ todo }) => ({
    input: todo.get('input'),
    list: todo.get('list'),
})

const mapDispatchToProps = dispatch => ({
    changeInput: input => dispatch(changeInput(input)),
    createTodo: input => dispatch(createTodo(input)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(TodoContainer)