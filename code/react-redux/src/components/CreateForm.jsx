
import React, { Component, Fragment } from 'react';

class CreateForm extends Component {
    render() {

        const { changeInput, createTodo } = this.props;

        return (
            <Fragment>
                <form onSubmit={createTodo}>
                    <input
                        onChange={changeInput}
                    />
                    <button type="submit">추가</button>
                </form>
            </Fragment>
        )
    }
}

export default CreateForm;