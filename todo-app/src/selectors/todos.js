import { Map } from 'immutable';

export const readTodos = state => state.get('todos');

export const findTodoById = (state, id) => state.get('todos').find(item => `${item.get('id')}` === `${id}`) || Map();
