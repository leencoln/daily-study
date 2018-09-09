
import React, { Component, Fragment } from 'react';

class CreateForm extends Component {
    render() {
        
        const {changeInput, createTodo, todoList} = this.props;
        
        return (
            <Fragment>
                <form onSubmit={createTodo}>
                    <input
                        onChange={changeInput}
                    />
                    <button type="submit">추가</button>
                    <button onClick={createTodo}>추가2</button>
                </form>
                {
                    JSON.stringify(todoList)
                }
            </Fragment>
        )
    }
}

export default CreateForm;