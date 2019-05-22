export const GET_TODOS = 'GET_TODOS';
export const CREATE_TODO = 'CREATE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';

const getRandomInt = () => (Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 1);

export const getTodos = () => ({
    type: GET_TODOS,
});

export const createTodo = todo => ({
    type: CREATE_TODO,
    todo: todo.set('id', getRandomInt()),
});

export const updateTodo = todo => ({
    type: UPDATE_TODO,
    todo,
});

export const deleteTodo = id => ({
    type: DELETE_TODO,
    id,
});
