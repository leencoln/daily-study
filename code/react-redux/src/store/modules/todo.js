
import { Map, List } from 'immutable';
import { createAction, handleActions } from 'redux-actions';

const CHANGE_INPUT = 'todo/CHANGE_INPUT';
const CREATE_TODO = 'todo/CREATE_TODO';
const CHECK_TODO = 'todo/CHECK_TODO';
const REMOVE_TODO = 'todo/REMOVE_TODO';

let create_id = 3;

const changeInput = createAction(CHANGE_INPUT, input => input);
const createTodo = createAction(CREATE_TODO, input => ({input, id: create_id++}));
const checkTodo = createAction(CHECK_TODO, id => id);
const removeTodo = createAction(REMOVE_TODO, id => id);

export { changeInput, createTodo, checkTodo, removeTodo };

const initialState = Map({
    input: '',
    list: List([
        Map({
            id: 0,
            item: 'react',
            checked: true,
        }),
        Map({
            id: 1,
            item: 'redux',
            checked: false,
        }),
        Map({
            id: 2,
            item: 'typescript',
            checked: false,
        }),
    ]),
})

const todo = handleActions(
    {
        [CHANGE_INPUT]: (state, action) => state.set('input', action.payload),
        [CREATE_TODO]: (state, action) => state.update('list', list => list.push(
            Map({
                id: action.payload.id,
                name: action.payload.input,
                checked: false,
            })
        )),
        [CHECK_TODO]: (state, action) => {
            const index = state.get('list').findIndex(item => item.get('id' === action.payload));
            return state.updateIn(['list', index, 'checked'], checked => !checked);
        },
        [REMOVE_TODO]: (state, action) => {
            const index = state.get('list').findIndex(item => item.get('id') === action.payload);
            return state.deleteIn(['list', index,]);
        }
    },
    initialState
)

export default todo;
