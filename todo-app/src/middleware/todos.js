import { successAction } from '../actions/actionTypes';
import { GET_TODOS, UPDATE_TODO, DELETE_TODO, CREATE_TODO } from '../actions/todo';

import { extractData, saveData } from '../utils/localStorageUtils';

export default store => next => (action) => {
    next(action);
    switch (action.type) {
        case GET_TODOS: {
            store.dispatch({
                type: successAction(action.type),
                todos: extractData('todos') || [],
            });
            break;
        }
        case DELETE_TODO: {
            const data = extractData('todos') || [];
            const todos = data.filter(item => item.id !== action.id);

            store.dispatch({
                type: successAction(action.type),
                todos,
            });
            saveData('todos', todos);
            break;
        }
        case UPDATE_TODO: {
            const data = extractData('todos') || [];
            const todo = action.todo.toJS();
            const todos = data.map(item => (
                item.id === todo.id ? { ...item, ...todo } : item
            ));

            store.dispatch({
                type: successAction(action.type),
                todos,
            });
            saveData('todos', todos);
            break;
        }
        case CREATE_TODO: {
            const data = extractData('todos') || [];
            data.unshift(action.todo.toJS());

            store.dispatch({
                type: successAction(action.type),
                todos: data,
            });
            saveData('todos', data);
            break;
        }
        default:
            break;
    }
};
